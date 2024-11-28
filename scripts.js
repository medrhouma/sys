document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'ccde240987bb4a8ebf29220da6b6caae'; // Remplace par ta clé API
    const apiUrl = `https://newsapi.org/v2/everything?q=système+solaire&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ''; // Vider le conteneur au cas où il y aurait des anciennes nouvelles

            data.articles.forEach(article => {
                const newsItem = document.createElement("article");
                newsItem.classList.add("news-item", "col-md-8");

                const title = document.createElement("h2");
                title.textContent = article.title;

                const date = document.createElement("p");
                date.textContent = new Date(article.publishedAt).toLocaleDateString();

                const content = document.createElement("p");
                content.textContent = article.description;

                newsItem.appendChild(title);
                newsItem.appendChild(date);
                newsItem.appendChild(content);
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des nouvelles :", error);
        });
});