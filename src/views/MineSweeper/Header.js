// @see https://stackoverflow.com/questions/63458425/setinterval-react-hooks-causing-multiple-updates-within-component
// @see https://stackoverflow.com/questions/63333897/how-to-setup-a-setinterval-timer-properly-in-a-react-functional-component

const Header = (props) => {
  const getIconClassName = (gameStatus) => {
    let iconClassName = 'icon-face';
    const iconClassNameArr = ['waiting', 'playing', 'losing', 'winning'];
    iconClassName += ' ' + iconClassNameArr[gameStatus];
    return iconClassName;
  };

  return (
    <div className="game-header clearfix">
      <span className="remained-mines">{props.remainedMines}</span>
      <div className="reset">
        <button
          className={getIconClassName(props.gameStatus)}
          onClick={props.handleResetGame}
        />
      </div>
      <span className="elapsed-time">{props.elapsedTime}</span>
    </div>
  );
};

export default Header;
