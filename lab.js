//main table array
let table = [];

//number of rows and columns for the table
let values = 11;

//outer for loop for the rows
for (let row = 0; row < values; row++) {
    //create a temporary table and initialize it to a blank array
    let tempTable = [];
    //inner for loop for the columns
    for (let column = 0; column < values; column++) {
        //push the result of multiplying the current row and column to the temporary table
        tempTable.push(row * column);
    }
    //push the temporary table array to the main table array
    table.push(tempTable);
}

//print the main table array to the console
console.table(table);