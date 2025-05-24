const articles = [
    {
      id: 1,
      title: 'Septimus Heap Book One: Magyk',
      date: 'July 5, 2022',
      description:
        'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
      imgAlt: 'Book cover for Septimus Heap 1',
      ages: '10-14',
      genre: 'Fantasy',
      stars: '****'
    },
    {
      id: 2,
      title: 'Magnus Chase Book One: Sword of Summer',
      date: 'December 12, 2021',
      description:
        'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
      imgSrc:
        'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
      imgAlt: 'Book cover for Magnus Chase 1',
      ages: '12-16',
      genre: 'Fantasy',
      stars: '⭐⭐⭐⭐'
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const genreFilter = document.getElementById("genreFilter");
    const ageFilter = document.getElementById("ageFilter");
    const sortFilter = document.getElementById("sortFilter");
    const bookList = document.getElementById("bookList");
  
    const renderArticles = () => {
      bookList.innerHTML = '';
  
      let filtered = [...articles];
  
      const query = searchInput.value.toLowerCase();
      const genre = genreFilter.value;
      const age = ageFilter.value;
      const sort = sortFilter.value;
  
      if (query) {
        filtered = filtered.filter(a => a.title.toLowerCase().includes(query));
      }
  
      if (genre) {
        filtered = filtered.filter(a => a.genre === genre);
      }
  
      if (age) {
        filtered = filtered.filter(a => a.ages === age);
      }
  
      if (sort === 'newest') {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (sort === 'highest') {
        filtered.sort((a, b) => b.stars.length - a.stars.length);
      }
  
      filtered.forEach(article => {
        const el = document.createElement('article');
        el.className = 'book-review';
        el.innerHTML = `
          <img src="${article.imgSrc}" alt="${article.imgAlt}">
          <div class="book-info">
            <h3>${article.title}</h3>
            <p><strong>Reviewed on:</strong> ${article.date}</p>
            <p><strong>Age Range:</strong> ${article.ages}</p>
            <p><strong>Genre:</strong> ${article.genre}</p>
            <p class="star-rating">${article.stars}</p>
            <p class="summary">${article.description}</p>
          </div>
        `;
        bookList.appendChild(el);
      });
    };
  
    searchInput.addEventListener("input", renderArticles);
    genreFilter.addEventListener("change", renderArticles);
    ageFilter.addEventListener("change", renderArticles);
    sortFilter.addEventListener("change", renderArticles);
  
    renderArticles(); // initial render
  });
  