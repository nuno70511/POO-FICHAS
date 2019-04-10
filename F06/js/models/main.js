import Band from "./band.js";
import User from "./user.js";

// Array de bandas
export const bands = [];
const band1 = new Band("Muse", "Pop-Rock","https://ichef.bbci.co.uk/images/ic/960x540/p0536400.jpg","XXX","YYY");
const band2 = new Band("Radiohead", "Pop-Rock","https://images.impresa.pt/blitz/2017-10-24-Radiohead-new.jpg/original/mw-860","XXX","YYY");
const band3 = new Band("Metallica", "Metal","https://2l7g9kgsh281akevs49v281d-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/metallica-1497522379.95.2560x1440-e1519661971685.jpg","XXX","YYY");
const band4 = new Band("James", "Pop-Rock","https://cdn.images.express.co.uk/img/dynamic/35/590x/-524294.jpg","XXX","YYY");

bands.push(band1, band2, band3, band4);

//  Array de utilizadores
export const users = [];
const user1 = new User("ricardo", "12345");
const user2 = new User("maria", "54321");
const user3 = new User("pedro", "15243");
users.push(user1, user2, user3);