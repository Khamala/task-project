const previewList = document.querySelector('.js-list');
previewList.addEventListener('click', handlerClick);

async function serviceGetTopBooks() {
    const response = await fetch('https://books-backend.p.goit.global/books/top-books');
    // console.log(response);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
};

serviceGetTopBooks()
    .then((data) => {
        previewList.insertAdjacentHTML("beforeend", createPreviewListMarkup(data))
    }
    )
    .catch((err) => console.log('Error'));


function createPreviewListMarkup(arr) {
    return arr.map(({list_name, books}) => `<li>
    <h2>${list_name}</h2>
    <ul>${createListMarkup(books)}</ul>
    <button type="button" class ="js-seeMore" data-genre="${list_name}">See more</button>
  </li>`)
        
}
    
function createListMarkup(arrBooks) {
    return arrBooks.map(({_id, author, book_image, title}) => `<li data-id="${_id}">
      <img src="${book_image}" alt="${title}">
      <h3>${title}</h3>
      <p>${author}</p>
    </li>`)  
}


async function serviceGetCategory(genre) {
    
    const response = await fetch(`https://books-backend.p.goit.global/books/category?category=${genre}`)
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function handlerClick(event) {
    if (event.target.classList.contains('js-seeMore')) {
        // console.log(event.target.dataset);
        const genre = event.target.dataset.genre;

        const data = await serviceGetCategory(genre);

        // console.log(data);

        previewList.innerHTML = createListMarkup(data);
    }
}

