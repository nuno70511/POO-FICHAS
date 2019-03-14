//a.
(() => {
    //criar elementos
    const table = document.createElement("table");
    const row1 = document.createElement("tr");
    const row2 = document.createElement("tr");
    const header1  = document.createElement("th");
    const header2  = document.createElement("th");
    const data1 = document.createElement("td");
    const data2 = document.createElement("td");

    //anexar elementos
    document.body.appendChild(table);
    table.appendChild(row1);
    table.appendChild(row2);
    row1.appendChild(header1);
    row1.appendChild(header2);
    row2.appendChild(data1);
    row2.appendChild(data2);

    //criar nós
    const header1Content = document.createTextNode("escola");
    const header2Content = document.createTextNode("local");
    const data1Content = document.createTextNode("ESMAD");
    const data2Content = document.createTextNode("Vila do Conde");

    //anexar nós
    header1.appendChild(header1Content);
    header2.appendChild(header2Content);
    data1.appendChild(data1Content);
    data2.appendChild(data2Content);
})();

//espaçamento entre exercícios
document.body.appendChild(document.createElement("hr"));

(() => {
    //b.
    const table = document.createElement("table");
    const header1 = "escola";
    const header2 = "local";
    const data1 = "ESMAD";
    const data2 = "Vila do Conde";

    table.innerHTML = `
        <tr>
            <th>${header1}</th>
            <th>${header2}</th>
        </tr>
        <tr>
            <td>${data1}</td>
            <td>${data2}</td>
        </tr>
    `
    
    document.body.appendChild(table);

    //c.
    const newRow = "<tr><td>ISEP</td><td>Porto</td></tr>";
    table.children[0].innerHTML += newRow; //children[0] para não criar numa nova tag <tbody>

    //d.
    const td = document.createElement("td");
    const newLocation = document.createTextNode("Vila do Conde/Póvoa de Varzim");
    td.appendChild(newLocation);
    
    const tdParent = document.querySelectorAll("tr")[3];
    tdParent.replaceChild(td, tdParent.children[1]);

    //e.
    const parent = table.children[0]; //tag <tbody>
    parent.removeChild(parent.children[0]);
})();