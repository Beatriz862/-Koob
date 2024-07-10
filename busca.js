function searchBooks() {
    const query = document.getElementById('search-input').value.toLowerCase();
    fetch(`/livros?query=${query}`)
        .then(response => response.json())
        .then(results => {
            const resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = '';

            if (results.length === 0) {
                resultsContainer.innerHTML = '<div>Nenhum livro encontrado</div>';
            } else {
                results.forEach(livro => {
                    const bookDiv = document.createElement('div');
                    bookDiv.textContent = livro.titulo;
                    resultsContainer.appendChild(bookDiv);
                });
            }
        });
}