let library = [];

document.querySelector("#year").max = new Date().getFullYear();

document.querySelector("#btnSubmit").addEventListener("click", (e) => {
    if (isInLibrary()){
        alert("Filme repetido.");
    } else {
        const tbody = document.querySelector("tbody");
        while (tbody.firstChild){
            tbody.removeChild(tbody.firstChild);
        }

        const form = document.querySelector("#form");
        const title = form[0].value;
        const genre = form[1].value;
        const year = form[2].value;
        const frontcover = form[3].value;
        const trailer = form[4].value;
        library[library.length] = {title, genre, year, frontcover, trailer};
        
        for (movie of library){
            const tr = document.createElement("tr");
            for (info in movie){
                if (info == "title" || info == "genre"){
                    const td = document.createElement("td");
                    const text = document.createTextNode(movie[info]);
                    td.appendChild(text);
                    tr.appendChild(td);
                }
            }
            tr.innerHTML += `
                <td>
                    <button
                        onclick = "viewFrontcover(getTitle(this))">
                        VER CAPA
                    </button>
                    <button
                        onclick = "viewTrailer(getTitle(this))">
                        VER TRAILER
                    </button>
                    <button
                        onclick = "deleteMovie(getTitle(this), this.parentNode.parentNode)">
                        REMOVER
                    </button>
                </td>
            `
            tbody.appendChild(tr);
        }

        for (field of form){
            field.value = null;
        }
    }
    e.preventDefault();
});

function isInLibrary() {
    for (movie of library){
        if (movie.title === document.querySelector("#title").value){
            return true;
        }
    }
    return false;
};

function clearModal(){
    const modal = document.querySelector(".modal-content");
    while (modal.lastChild.nodeName !== "SPAN"){
        modal.removeChild(modal.lastChild);
    }
}

function getTitle(btn){
    return btn.parentNode.parentNode.firstChild.innerHTML;
}

function getFrontcover(title){
    for (movie of library){
        if (movie.title === title){
            return movie.frontcover;
        }
    }
}

function getTrailer(title){
    for (movie of library){
        if (movie.title === title){
            if (movie.trailer.includes("https://www.youtube.com/watch?v=")){
                return movie.trailer.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/") + "?autoplay=1";
            } else {
                return movie.trailer;
            }
        }
    }
}

function viewFrontcover(title) {
    const img = document.createElement("img");
    img.src = getFrontcover(title);
    document.querySelector(".modal-content").appendChild(img);
    document.getElementById('myModal').style.display = "block";
};

function viewTrailer(title) {
    const iframe = document.createElement("iframe");
    iframe.src = getTrailer(title);
    iframe.allow = "autoplay";
    document.querySelector(".modal-content").appendChild(iframe);
    document.getElementById('myModal').style.display = "block";
};

function deleteMovie(title, row) {
    for (let i = 0; i < library.length; i++){
        if (library[i].title === title){
            library = library.splice(i + 1, 1);
        }
    }

    document.querySelector("tbody").removeChild(row);
};

/*
    vvv Retirado e adaptado da w3schools vvv
*/

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById('myModal').style.display = "none";
    clearModal();
}
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
        clearModal();
    }
}