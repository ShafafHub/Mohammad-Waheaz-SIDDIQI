function stats(rows, column) {
 
  let count = 0;
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  for (const row of rows) {
    const value = Number(row[column]);

    if (Number.isFinite(value)) {
      count +=1;
      sum += value;
      if (value < min) min = value;
      if (value > max) max = value;
    }
  }

  const avg = count > 0 ? sum / count : 0;
  return {
    count,
    min: count > 0 ? min : 0,
    max: count > 0 ? max : 0,
    avg
  };
}

function filterRows(rows, column, value) {
  
  return rows.filter((row) => row[column] === value);
}

function sortRows(rows, column, order) {
  
  const copy = [...rows];
  copy.sort((a, b) => {
    const aVal = a[column];
    const bVal = b[column];

    const aNum = Number(aVal);
    const bNum = Number(bVal);

    
    if (Number.isFinite(aNum) && Number.isFinite(bNum)) {
      return aNum - bNum;
    }

    // string sort otherwise
    return String(aVal).localeCompare(String(bVal));
  });
  if (order === "desc") copy.reverse();
  return copy;
}

module.exports = { stats, filterRows, sortRows };
