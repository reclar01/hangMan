//ARRAY OF objectS indexing the alphabet
let alphabet = [['A','B','C','D','E'],['F','G','H','I','J'],['K','L','M','N','O'],['P','Q','R','S','T'],['U','V','W','X','Y'],['Z','','','','']];

//create a main table
let mainTable = document.createElement("table");
mainTable.id = "mainTable";

//create a table to hold the alphabet
let alphabetTable = document.createElement("table");
alphabetTable.id = "alphabetTable";

//create a table to hold the gallows
let gallowTable = document.createElement("table");
gallowTable.id = "gallowTable";

//create a td for alpha and gallow
let alphaCell = document.createElement("td");
alphaCell.id = "alphaCell";
let gallowCell = document.createElement("td");
gallowCell.id = "gallowCell";

//create three rows in the main table to hold each table
let topRow = document.createElement("tr");
topRow.id ="topRow";
let midRow = document.createElement("tr");
midRow.id = "midRow";
let bottomRow = document.createElement("tr");
bottomRow.id = "bottomRow";

//add the mainTable to the div
document.body.insertBefore(mainTable,maindiv);


//Add each row to the main table
mainTable.appendChild(topRow);
mainTable.appendChild(midRow);
// add two td cells to the midRow and add the alphabetTable and gallowTable to them
midRow.appendChild(alphaCell);
midRow.appendChild(gallowCell);
alphaCell.appendChild(alphabetTable);
//CREATE 6 ROWS OF 5 COLUMNS IN THE alphabetTable
for(let i=0; i<6;i++){
    let row = document.createElement("tr");
    row.id = "row_"+i;
    
    for(let j=0;j<5;j++){
        let cell = document.createElement("td");
        cell.className="alphacell";
        let cid = "cell"+i+"_"+j;
        cell.id=cid;
        console.log('cell id is ' +cell.id);
        
        
        cell.innerHTML = alphabet[i][j];
        //cidvar.addEventListener('click',letterSelected(cid));
        row.appendChild(cell);
        let cidvar = document.getElementById(cell.id);
        console.log('cidvar is ' + cidvar);
        //cell[j].onclick = function(){letterSelect();};

    }
    alphabetTable.appendChild(row);
}
gallowCell.appendChild(gallowTable);
mainTable.appendChild(bottomRow);

function letterSelected(cid){
    let val = cid.innerHTML;
    alert(val + " was selected!!!");
}

function getLetter(obj){

}