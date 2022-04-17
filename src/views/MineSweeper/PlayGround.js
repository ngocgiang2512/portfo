import Cell from './Cell';

const PlayGround = (props) => {
  return (
    <div className="play-groundーwarpper">
      {props.groundData &&
        props.groundData.map((row, rowIndex) => (
          <div key={rowIndex} className="row-mines clearfix">
            {row.map((cell, cellIndex) => (
              <Cell
                key={rowIndex + '-' + cellIndex}
                gameStatus={props.gameStatus}
                cell={cell}
                groundData={props.groundData}
                setGroundData={props.setGroundData}
                handleClickCell={props.handleClickCell}
                remainedMines={props.remainedMines}
                setRemainedMines={props.setRemainedMines}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export default PlayGround;
