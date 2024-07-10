const livros = [
    { titulo: 'Flores de fogo', tipo: 'Unico' },
    { titulo: 'Homens são de Marte, Mulheres são de Vênus++', tipo: 'Unico' },
    { titulo: 'Socorro! Nasci com Memória', tipo: 'Unico' },
    { titulo: 'Cinco Imprestáveis e Um Velho Rabugento', tipo: 'Unico' },
    { titulo: 'Morte no Nilo', tipo: 'Unico' },
    { titulo: 'Your name', tipo: 'Unico' },
    { titulo: 'As Crônicas de Nárnia', tipo: 'Unico' },
    { titulo: 'Aladim', tipo: 'Unico' },
    { titulo: 'O Mistério da Estrela – Stardust', tipo: 'Unico' },
    { titulo: 'A Maldição do Mar', tipo: 'Unico' },
    { titulo: 'De Lukov, Com Amor', tipo: 'Unico' },
    { titulo: 'As Crônicas do Gelo e do Fogo', tipo: 'Sequencia' },
    { titulo: 'Harry Potter', tipo: 'Sequencia' },
    { titulo: 'Trono de Vidro', tipo: 'Sequencia' },
    { titulo: 'O Povo do Ar', tipo: 'Sequencia' },
    { titulo: 'Alys', tipo: 'Sequencia' },
    { titulo: 'Intrumentos Mortais', tipo: 'Sequencia' },
    { titulo: 'História Para o Tempo', tipo: 'Conto' },  
    { titulo: 'A Feiticeira de São Judas Tadeu dos Milagres', tipo: 'Conto' },
    { titulo: 'Sob a Minha Pele', tipo: 'Conto' },
    { titulo: 'Wifi', tipo: 'Conto' },
    { titulo: 'Fadas da Lua', tipo: 'Conto' },
];


function searchBooks() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const results = livros.filter(livro => livro.titulo.toLowerCase().includes(query));

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
}



function navigateTo(page) {
    window.location.href = page;

}