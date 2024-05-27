// Dans votre fichier JavaScript (appelons-le script.js)
document.addEventListener("DOMContentLoaded", function() {
    // URL de l'API d'actualité (exemple avec l'API NewsAPI)
    const apiKey = abcdef1234567890abcdef1234567890
    ;
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${apiKey}`;

    // Récupérer la référence de la section d'actualités
    const newsContainer = document.getElementById("news-container");

    // Fonction pour récupérer et afficher les actualités
    function fetchNews() {
        fetch(newsUrl)
            .then(response => response.json())
            .then(data => {
                // Vider le contenu actuel de la section d'actualités
                newsContainer.innerHTML = '';

                // Parcourir les articles et les afficher dans la section
                data.articles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('news-article');

                    const titleElement = document.createElement('h2');
                    titleElement.classList.add('news-title');
                    titleElement.textContent = article.title;

                    const descriptionElement = document.createElement('p');
                    descriptionElement.classList.add('news-description');
                    descriptionElement.textContent = article.description;

                    const linkElement = document.createElement('a');
                    linkElement.classList.add('news-link');
                    linkElement.textContent = 'Lire la suite';
                    linkElement.href = article.url;
                    linkElement.target = '_blank';

                    // Ajouter les éléments au conteneur d'article
                    articleElement.appendChild(titleElement);
                    articleElement.appendChild(descriptionElement);
                    articleElement.appendChild(linkElement);

                    // Ajouter l'article au conteneur d'actualités
                    newsContainer.appendChild(articleElement);
                });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des actualités :', error);
            });
    }

    // Appeler la fonction fetchNews pour charger les actualités au chargement de la page
    fetchNews();
});
