import Band from "./band.js";
import User from "./user.js";

// Array de bandas
export const bands = [];

if (localStorage.bands){
    bands.push(JSON.parse(localStorage.bands));
} else {
    const band1 = new Band("Muse", "Pop-Rock","https://ichef.bbci.co.uk/images/ic/960x540/p0536400.jpg","XXX","YYY");
    const band2 = new Band("Radiohead", "Pop-Rock","https://images.impresa.pt/blitz/2017-10-24-Radiohead-new.jpg/original/mw-860","XXX","YYY");
    const band3 = new Band("Metallica", "Metal","https://2l7g9kgsh281akevs49v281d-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/metallica-1497522379.95.2560x1440-e1519661971685.jpg","XXX","YYY");
    const band4 = new Band("James", "Pop-Rock","https://cdn.images.express.co.uk/img/dynamic/35/590x/-524294.jpg","XXX","YYY");
    bands.push(band1, band2, band3, band4);
    localStorage.bands = JSON.stringify(bands);
}

//  Array de utilizadores
export const users = [];
const user1 = new User("ricardo", "12345");
const user2 = new User("maria", "54321");
const user3 = new User("pedro", "15243");
users.push(user1, user2, user3);

/**
 * Função que recebe o nome da banda e elimina a banda respectiva
 * @param {string} txtName Nome da banda
 */
export function removeBand(txtName) {
    let removeBand = confirm(`Deseja mesmo remover a banda ${txtName}`);
    if (removeBand) {
        for (let i = 0; i < bands.length; i++){
            if (bands[i].name === txtName) {
                bands.splice(i, 1);
            }
        }
        localStorage.bands = JSON.stringify(bands);
        location.reload();
    }
}

/**
 * Função que recebe o nome de uma banda e define-a como a banda atual (a ser exibida)
 * @param {string} txtName Nome da banda
 */
export function setCurrentBand(txtName) {
    localStorage.band = txtName;
}

// Função que ordena o array de bandas pelo nome das bandas e guarda o array ordenado na LocalStorage
export function sortBands() {
    bands.sort(Band.compare);
    localStorage.bands = JSON.stringify(bands);
}