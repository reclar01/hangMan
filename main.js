console.log("this is the main.js file");
let mainDiv = document.getElementById("main");
let header = document.createElement("H1");

//create table
let mainTable = document.createElement("table");
mainTable.id = "mainTable";

//create a table row
let tblRow = document.createElement("tr");
tblRow.id = "trow";

//create table header cell
let tblHeaderRow = document.createElement("th");
tblHeaderRow.id = "thcell";

//create table cells
let tblcell = document.createElement("td");
tblcell.id = "tdcell";


header.innerHTML = "this is the header";
document.body.insertBefore(header,mainDiv);

document.body.insertBefore(mainTable,header.nextSibling);

for(let i =0; i<8;i++){
    let tblRow = document.createElement("tr");
    tblRow.className = "trow";
    tblRow.id = "row"+i;
    for(let j=0; j<7;j++){
        let tblcell = document.createElement("td");
        tblcell.id = "td"+i+"_"+j;
        tblcell.className="tcell"; 
        tblRow.appendChild(tblcell) ;
        
    }
    mainTable.appendChild(tblRow);
}

//tblRow.appendChild(tblHeaderRow);