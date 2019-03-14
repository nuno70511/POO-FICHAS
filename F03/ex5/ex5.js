document.querySelector("#frontcover").addEventListener("change", function() {
    document.querySelector("#preview").src = this.value;
});

document.querySelector("#btnSubmit").addEventListener("click", (e) => {
    const year = document.querySelector("#year").value;
    if (year < 1950 || year > new Date().getFullYear()){
        alert("Erro");
    } else {
        const form = document.querySelector("#form");
        document.querySelector("#tableBody").innerHTML += `
        <tr>
            <td>${form[0].value}</td>
            <td>${form[1].value}</td>
            <td>${form[2].value}</td>
            <td>${form[3].value}</td>
            <td>
                <button
                    onclick = "deleteTableRow(this.parentNode.parentNode)"
                    style = "border: none; background-color: transparent; color: red; cursor: pointer">
                    x
                </button>
            </td>
        </tr>
        `
        alert("Validação OK");
    }
    e.preventDefault();
});

let deleteTableRow = (row) => {
    document.querySelector('#tableBody').removeChild(row);
}