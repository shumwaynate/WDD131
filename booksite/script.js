document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const genreFilter = document.getElementById("genreFilter");
    const ageFilter = document.getElementById("ageFilter");
    const sortFilter = document.getElementById("sortFilter");
    const bookList = document.getElementById("bookList");
  
    const filterBooks = () => {
      const query = searchInput.value.toLowerCase();
      const genre = genreFilter.value;
      const age = ageFilter.value;
      const sortBy = sortFilter.value;
  
      let books = Array.from(bookList.children);
  
      books.forEach(book => {
        const title = book.querySelector("h3").textContent.toLowerCase();
        const genreVal = book.dataset.genre;
        const ageVal = book.dataset.age;
        const rating = parseFloat(book.dataset.rating);
        const date = new Date(book.dataset.date);
  
        const matchesQuery = !query || title.includes(query);
        const matchesGenre = !genre || genreVal === genre;
        const matchesAge = !age || ageVal === age;
  
        book.style.display = (matchesQuery && matchesGenre && matchesAge) ? "block" : "none";
      });
  
      // Sort visible books
      books
        .filter(book => book.style.display === "block")
        .sort((a, b) => {
          if (sortBy === "newest") {
            return new Date(b.dataset.date) - new Date(a.dataset.date);
          } else if (sortBy === "highest") {
            return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
          }
          return 0;
        })
        .forEach(book => bookList.appendChild(book));
    };
  
    searchInput.addEventListener("input", filterBooks);
    genreFilter.addEventListener("change", filterBooks);
    ageFilter.addEventListener("change", filterBooks);
    sortFilter.addEventListener("change", filterBooks);
  });
  