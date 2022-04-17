export const getSurroundedCells = (cell) => {
  return [
    // previous row
    {
      x: cell.x - 1,
      y: cell.y - 1
    },
    {
      x: cell.x - 1,
      y: cell.y
    },
    {
      x: cell.x - 1,
      y: cell.y + 1
    },
    // same row
    {
      x: cell.x,
      y: cell.y - 1
    },
    {
      x: cell.x,
      y: cell.y + 1
    },
    // next row
    {
      x: cell.x + 1,
      y: cell.y - 1
    },
    {
      x: cell.x + 1,
      y: cell.y
    },
    {
      x: cell.x + 1,
      y: cell.y + 1
    },
  ]
}

export const makePlayGroundData = (size, minesData) => {
  // create play ground data
  const playGroundData = new Array(size).fill().map((a, x) => {
    return new Array(size).fill({isMine: false, hint: 0, isClicked: false, isFlag: false}).map((b, y) => {
      let isMine = minesData.some(mine => mine.x === x && mine.y === y)
      return {
        ...b,
        x,
        y,
        isMine
      }
    })
  })
  
  // add Hint to playGroundData
  minesData.forEach(mine => {
    let surroundCells = getSurroundedCells(mine)

    surroundCells.forEach(cell => {
      if (playGroundData[cell.x] && playGroundData[cell.x][cell.y]) {
        playGroundData[cell.x][cell.y].hint += 1
      }
    })
  })

  return playGroundData;
}

export const spreadEmptySurroundCells = (targetCell, data) => {
  return recursiveSpreadEmptyCells([targetCell], data)
}

const recursiveSpreadEmptyCells = (targetCells, data) => {
  if (targetCells.length === 0) {
    return data;
  }

  let surroundCells = getSurroundedCells(targetCells[0]);

  surroundCells.forEach(cell => {
    if (data[cell.x] && data[cell.x][cell.y]) {
      const cellData = data[cell.x][cell.y];
      if (!cellData.isClicked && !cellData.isMine) {
        data[cell.x][cell.y].isClicked = true
  
        // push only empty cell
        if (cellData.hint === 0) {
          targetCells.push(cellData)
        }
      }
    }
  })

  targetCells.shift()

  return recursiveSpreadEmptyCells(targetCells, data)
}
