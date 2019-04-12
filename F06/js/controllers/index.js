import {
    bands,
    removeBand,
    getCurrentBand,
    sortBands
} from "../models/main.js";

const myCatalog = document.querySelector("#myCatalog");

/**
 * Função que exibe o catálogo mediante um conjunto de filtros opcionais
 * @param {string} filterName filtro para o nome da banda
 * @param {string} filterGenre filtro para o género de música tocada pela banda
 */
function renderCatalog(filterName = "", filterGenre = "") {
    let result = "";
    let i = 0;
    for (const band of bands) {
        if (filterName !== "" && !band.name.toLowerCase().startsWith(filterName) ||
            filterGenre !== "" && band.genre !== filterGenre) {
            continue;
        }
        if (i % 3 === 0) {
            result += `<div class="row">`
        }
        result += `
        <div class="col-sm-4">
            <div class="card">
                <img src="${band.photo}" class="card-img-top"
                    alt="...">
                <div class="card-body">
                    <h5 class="card-title">${band.name}</h5>
                    <p class="card-text">${band.genre}</p>
                    <a id="${band.name}" href="#" class="btn btn-outline-success">Ver mais</a>
                    <a id="${band.name}" href="#" class="btn btn-outline-danger">Remover</a>
                </div>
            </div>
        </div>
        `
        i++;
        if (i % 3 === 0) {
            result += `</div>`
        }
    }

    myCatalog.innerHTML = result;
}

renderCatalog();

const btnFilter = document.querySelector("#btnFilter");
const btnSort = document.querySelector("#btnSort");

btnFilter.addEventListener("click", function () {
    const txtName = document.querySelector("#txtName").value;
    const sltGenre = document.querySelector("#sltGenre").value;
    renderCatalog(txtName, sltGenre);
});

btnSort.addEventListener("click", function () {
    sortBands();
    renderCatalog();
});

const btnSeeMore = document.querySelector("");