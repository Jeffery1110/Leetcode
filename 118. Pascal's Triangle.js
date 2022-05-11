/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rows = [];
    rows.push([1]);
    if(numRows == 1)
        return rows;
    rows.push([1,1])
    if(numRows == 2)
        return rows
    for(let i = 2; i < numRows; i++) {
        let preRows = rows[i - 1];
        let newRow = [];
        newRow.push(1);
        for(j = 0; j < preRows.length - 1 ; j++){
            newRow.push(preRows[j]+preRows[j+1])
        }
        newRow.push(1);
        rows.push(newRow)
    }
    return rows
};