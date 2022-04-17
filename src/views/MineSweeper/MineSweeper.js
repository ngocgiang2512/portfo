import { useState, useEffect } from 'react';
import Header from './Header';
import PlayGround from './PlayGround';
import { makePlayGroundData, spreadEmptySurroundCells } from './utils';
import { MineSweeperStyle } from './MineSweeperStyle';
import './MineSweeper.css';

const MineSweeper = () => {
  const size = 9;
  const MAX_MINES = 10;
  const [gameIndex, setGameIndex] = useState(1);
  // gameStatus: 0: waiting, 1: playing, 2: losing, 3: winning
  const [gameStatus, setGameStatus] = useState(0);
  const [remainedMines, setRemainedMines] = useState(MAX_MINES);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerTogger, setTimerToggle] = useState(false);
  const [groundData, setGroundData] = useState();

  const isGameResolved = (groundData) => {
    let isGameResolved = true;
    groundData.forEach(row => {
      row.forEach(cell => {
        if (!cell.isMine && !cell.isClicked) {
          isGameResolved = false;
        }
      })
    })
    return isGameResolved;
  }

  useEffect(() => {
    console.log('fetch mines data');
    fetch('https://tiki-minesweeper.herokuapp.com/getMines?size=9&mines=10')
      .then((response) => response.json())
      .then((data) => {
        const minesData = data.data;
        const playGroundData = makePlayGroundData(size, minesData);
        setGroundData(playGroundData);
      });
  }, [gameIndex]);

  useEffect(() => {
    let counter;
    if (timerTogger) {
      counter = setInterval(
        () => setElapsedTime((elapsedTime) => elapsedTime + 1),
        1000
      );
    }
    return () => {
      clearInterval(counter);
    };
  }, [timerTogger]);

  const handleResetGame = () => {
    const newGameIndex = gameIndex + 1;
    setGameStatus(0); // waiting
    setGameIndex(newGameIndex);
    setRemainedMines(MAX_MINES); // reset Mines
    setElapsedTime(0); // reset timer
    setTimerToggle(false);
  };

  const handleClickCell = (cell) => {
    if (cell.isFlag || gameStatus === 2 || gameStatus === 3) return;

    let newGroundData = [...groundData];
    newGroundData[cell.x][cell.y].isClicked = true;

    // status is not playing -> start game
    if (gameStatus !== 1) {
      setGameStatus(1); // losing
      setTimerToggle(true);
    }

    // clicked cell has hint == 0
    if (cell.hint === 0) {
      newGroundData = spreadEmptySurroundCells(cell, newGroundData);
    }

    // clicked cell is Mine -> BOOM
    if (cell.isMine) {
      setGameStatus(2);
      setTimerToggle(false);
    }

    // resolve all mines -> win
    if (isGameResolved(newGroundData)) {
      setGameStatus(3);
      setTimerToggle(false);
    }

    setGroundData(newGroundData);
  };

  console.log('state: ', typeof gameStatus, gameStatus);

  return (
    <MineSweeperStyle>
      <h2>Minesweeper</h2>
      <div className="minesweeper-wrapper">
        <Header
          gameStatus={gameStatus}
          remainedMines={remainedMines}
          elapsedTime={elapsedTime}
          handleResetGame={handleResetGame}
        />
        <PlayGround
          gameStatus={gameStatus}
          groundData={groundData}
          setGroundData={setGroundData}
          handleClickCell={handleClickCell}
          remainedMines={remainedMines}
          setRemainedMines={setRemainedMines}
        />
      </div>
    </MineSweeperStyle>
  );
};

export default MineSweeper;
