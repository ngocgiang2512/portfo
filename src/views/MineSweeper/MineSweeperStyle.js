import styled from 'styled-components';

export const MineSweeperStyle = styled.div`
  .minesweeper-wrapper {
    width: 286px;
    margin: 20px auto;
    border-top: 4px solid rgb(255, 255, 255);
    border-left: 4px solid rgb(255, 255, 255);
    border-bottom: 4px solid rgb(128, 128, 128);
    border-right: 4px solid rgb(128, 128, 128);
    background-color: rgb(198, 198, 198);
  }
  .game-header {
    width: 100%;
    padding: 10px 0 8px;
    margin-bottom: 20px;
    text-align: center;
    border-top: 4px solid rgb(128, 128, 128);
    border-left: 4px solid rgb(128, 128, 128);
    border-bottom: 4px solid rgb(255, 255, 255);
    border-right: 4px solid rgb(255, 255, 255);
    .reset {
      float: left;
      width: 33%;
    }
    .icon-face {
      display: inline-block;
      width: 40px;
      height: 40px;
      padding: 10px;
      border-top: 4px solid rgb(255, 255, 255);
      border-left: 4px solid rgb(255, 255, 255);
      border-bottom: 4px solid rgb(128, 128, 128);
      border-right: 4px solid rgb(128, 128, 128);
      background-color: rgb(198, 198, 198);
      cursor: pointer;
      &:focus {
        border-top: 4px solid rgb(128, 128, 128);
        border-left: 4px solid rgb(128, 128, 128);
        border-bottom: 4px solid rgb(255, 255, 255);
        border-right: 4px solid rgb(255, 255, 255);
      }
    }
    .remained-mines,
    .elapsed-time {
      float: left;
      width: 33%;
      color: black;
      font-size: 24px;
      line-height: 40px;
      text-align: right;
      padding-right: 16px;
    }
    .remained-mines {
      text-align: left;
      padding-left: 16px;
    }
  }
  .play-groundーwarpper {
    width: 278px;
    border-top: 4px solid rgb(128, 128, 128);
    border-left: 4px solid rgb(128, 128, 128);
    border-bottom: 4px solid rgb(255, 255, 255);
    border-right: 4px solid rgb(255, 255, 255);
    .row-mines {
      .cell {
        display: block;
        float: left;
        width: 30px;
        height: 30px;
        padding: 0;
        border-top: 4px solid rgb(255, 255, 255);
        border-left: 4px solid rgb(255, 255, 255);
        border-bottom: 4px solid rgb(128, 128, 128);
        border-right: 4px solid rgb(128, 128, 128);
        background-color: rgb(198, 198, 198);
        text-align: center;
        cursor: pointer;
        &.clicked {
          background-color: rgb(198, 198, 198);
          border: 1px dotted rgb(0, 0, 0);
          cursor: default;
        }
        &.boom {
          background-color: rgb(248, 27, 0);
        }
        &.text-one {
          span {
            color: rgb(35, 2, 255);
          }
        }
        &.text-two {
          span {
            color: rgb(26, 128, 0);
          }
        }
        &.text-three {
          span {
            color: rgb(248, 27, 0);
          }
        }
        &.text-four {
          span {
            color: rgb(12, 0, 128);
          }
        }
        &.text-five {
          span {
            color: rgb(145, 49, 49);
          }
        }
        &.text-four {
          span {
            color: rgb(31, 128, 128);
          }
        }
        span {
          font-size: 16px;
          font-weight: 700;
          color: rgb(35, 2, 255);
          line-height: 26px;
        }
      }
    }
  }
`