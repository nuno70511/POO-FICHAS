//b.
console.log(document.querySelector("#p2"));

//c.
console.log(document.querySelectorAll("p"));

//d.
(() => {
    let paragraphs = document.querySelectorAll("p");
    for (paragraph of paragraphs){
        console.log(paragraph.innerHTML);
    }
})();

//e.
console.log(document.querySelectorAll(".red"));

//f.
console.log(document.querySelector("p#p3"));

//g.
(() => {
    let allParagraphsAndDivs = document.querySelectorAll("p, div");
    for (element of allParagraphsAndDivs){
        console.log(element.innerHTML);
    }
})();

//h.
(() => {
    let spans = document.querySelectorAll("span");
    for (span of spans){
        console.log(span.innerHTML);
    }
})();

//i.
(() => {
    let spansInsideDivs = document.querySelectorAll("div span");
    for (span of spansInsideDivs){
        console.log(span.innerHTML);
    }
})();

//j.
(() => {
    let spans = document.querySelectorAll("span");
    for (span of spans){
        if (span.parentNode.nodeName !== "DIV"){
            console.log(span.innerHTML);
        }
    }
})();