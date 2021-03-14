
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix==undefined ? [] : matrix.reduce((row, currentRow, index)=>{
    return (index%2)==0 ? row.concat(currentRow) : row.concat(currentRow.reverse());
  }, []);
}
