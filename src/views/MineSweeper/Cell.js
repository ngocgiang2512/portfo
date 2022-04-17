import { useState, useEffect, useCallback } from 'react';

const Cell = (props) => {
  const [mouseDown, setMouseDown] = useState(false);
  const cell = props.cell;
  const colorsByHint = [
    'text-zero',
    'text-one',
    'text-two',
    'text-three',
    'text-four',
    'text-five',
    'text-six',
  ];

  const getCellClassName = (cell) => {
    let className = 'cell';
    if (cell.isFlag) {
      className += ' flag';
    }
    if (cell.isClicked) {
      className += ' clicked';
      className += ' ' + colorsByHint[cell.hint];
      if (cell.isMine) {
        className += ' boom';
      }
    }
    return className;
  };

  const getCellContent = (cell) => {
    let cellContent = '';
    if (cell.isClicked && !cell.isMine && cell.hint > 0) {
      cellContent = cell.hint;
    }
    return cellContent;
  };

  const handleMouseDown = (event) => {
    if (props.gameStatus !== 1) return;
    if (event.which === 3 || event.button === 2) {
      setMouseDown(true);

      if (!cell.isClicked) {
        let newGroundData = [...props.groundData];
        newGroundData[cell.x][cell.y].isFlag = !cell.isFlag;
        props.setGroundData(newGroundData);
        props.setRemainedMines(
          cell.isFlag ? props.remainedMines - 1 : props.remainedMines + 1
        );
      }
    }
  };

  const handleClick = useCallback(() => {
    if (!mouseDown) {
      props.handleClickCell(cell);
    }
  }, [mouseDown]);

  useEffect(() => {
    const handleDocumentMouseUp = (event) => {
      if (event.button !== 2) {
        setTimeout(() => setMouseDown(false), 10);
      }
    };

    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    return () => {
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('contextmenu');
    };
  }, []);

  return (
    <div
      className={getCellClassName(cell)}
      onClick={() => handleClick(cell)}
      onMouseDown={handleMouseDown}
    >
      <span>{getCellContent(cell)}</span>
    </div>
  );
};

export default Cell;
