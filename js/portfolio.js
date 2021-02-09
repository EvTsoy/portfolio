window.onload = function () {
    const API_URL = './data/projects.json';
    const items = document.getElementById('items');

    getData(API_URL);

    async function getData(url) {
        const res = await fetch(url);
        const data = await res.json();
        insertPortfolioData(data);
    }

    function insertPortfolioData(data) {
        items.innerHTML = '';
        for (let item of data) {
            const { image, caption, category, link } = item;
            const html = `
            <li class="${category} col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div class="item">
                    <img src="${image}">
                    <div class="icons">
                        <a href="${image}" title="View image" class="openButton" data-fancybox
                            data-caption="${caption}">
                            <i class="fa fa-search"></i>
                        </a>
                        <a href="${link}" target="_blank" class="projectLink">
                            <i class="fa fa-link"></i>
                        </a>
                    </div>
                    <div class="imageOverlay"></div>
                </div>
            </li>`;

            items.insertAdjacentHTML('beforeend', html);
        }
    }
}