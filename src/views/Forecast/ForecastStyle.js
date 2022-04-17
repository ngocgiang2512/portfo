import styled from 'styled-components';

export const ForecastStyle = styled.div`
  width: 600px;
  border: 1px solid #222;
  border-radius: 4px;
  margin: 20px;
  .day-in-week {
    float: left;
    width: 12.5%;
    border-right: 1px solid #222;
    &:first-child {
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-right: none;
    }
    .day-in-week {
      padding: 16px 0 22px;
      color: #222;
      text-align: center;
      cursor: pointer;
      &.active {
        background-color: #ddd;
      }
      p {
        margin: 0;
      }
      .day {
        font-size: 16px;
        font-weight: bold;
      }
      .icon {
        display: inline-block;
        width: 50px;
        img {
          width: 100%;
        }
      }
      .temp-max {
        margin-bottom: 2px;
        span {
          position: relative;
          display: inline-block;
          font-size: 18px;
          font-weight: bold;
          &:after {
            position: absolute;
            content: '';
            width: 3px;
            height: 3px;
            top: 3px;
            right: -9px;
            border: 2px solid #000;
            border-radius: 50%;
          }
        }
      }
      .temp-min {
        span {
          position: relative;
          display: inline-block;
          font-size: 14px;
          &:after {
            position: absolute;
            content: '';
            width: 2px;
            height: 2px;
            top: 3px;
            right: -6px;
            border: 1px solid #000;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .day-detail {
    padding: 8px 16px 0;
    border-bottom: 1px solid #222;
    .place {
      font-size: 24px;
      font-weight: bold;
    }
    .sub-title {
      color: #888;
      font-size: 18px;
      margin: 0;
    }
    .degree {
      float: left;
      margin-right: 60px;
      .icon {
        float:left;
        width: 100px;
        margin: 0;
        img {
          width: 100%;
        }
      }
      .number {
        position: relative;
        float: left;
        font-size: 56px;
        font-weight: bold;
        margin-top: 16px;
        &:after {
          position: absolute;
          content: '';
          width: 10px;
          height: 10px;
          top: 12px;
          right: -20px;
          border: 3px solid #000;
          border-radius: 50%;
        }
      }
      .unit {
        float: left;
        margin-left: 35px;
        margin-top: 26px;
        span {
          color: #888;
          cursor: pointer;
          margin: 0 2px;
          &.active {
            color: #000;
          }
        }
      }
    }
    .weather-detail {
      float: left;
      margin-top: 21px;
      p {
        color: #222;
      }
    }
  }
`