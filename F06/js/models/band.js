/**
 * Classe para modelar uma banda de música
 */
 export default class Band {
    constructor(name, genre, photo, description, videoclip) {
        this.name = name;
        this.genre = genre;
        this.photo = photo;
        this.description = description;
        this.videoclip = videoclip;
    }
}