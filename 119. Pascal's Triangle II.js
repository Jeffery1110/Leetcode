var getRow = function(rowIndex) {
    let rows = [];
    rows.push([1]);
    if(rowIndex == 0)
        return rows;
    rows.push([1])
    if(rowIndex == 1)
        return rows
    rowIndex = rowIndex + 2;
    for(let i = 2; i < rowIndex; i++) {
        let preRows = rows[i - 1];
        let newRow = [];
        newRow.push(1);
        for(j = 0; j < preRows.length - 1 ; j++){
            newRow.push(preRows[j]+preRows[j+1])
        }
        newRow.push(1);
        rows.push(newRow)
    }
   
    return rows.pop()
};