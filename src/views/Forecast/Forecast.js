import { useState, useEffect } from 'react';
import moment from 'moment';
import { celToFah, mphToKph, getWindDirection, getAirPollutionInfo } from './utils';
import { ForecastStyle } from './ForecastStyle';

const HNLAT = 21.027763;
const HNLONG = 105.834160;
const APIKey = 'b2ea68aafb27b62aeb91798b16ca7c68';

const weatherAPILink = 'https://api.openweathermap.org/data/2.5/onecall';
const weatherApiUrl = `${weatherAPILink}?lat=${HNLAT}&lon=${HNLONG}&units=imperial&exclude={}&appid=${APIKey}`;

const getPollutionAqiUrl = (startTime, endTime) => {
  return `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${HNLAT}&lon=${HNLONG}&start=${startTime}&end=${endTime}&appid=${APIKey}`;
}

const Forecast = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [airQualityIndex, setAirQualityIndex] = useState();

  // useEffect(() => {
  //   fetch(weatherApiUrl)
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         setLoading(false);

  //         if (result)  {
  //           setResult(result);
  //           console.log('result 1', result);
  //           // const startTime = result.current.sunrise
  //           // const endTime = result.current.sunset
  //           // const aqiUrl = getPollutionAqiUrl(startTime, endTime)

  //           // fetch(aqiUrl)
  //           //  .then(aqiRes => aqiRes.json())
  //           //   .then(
  //           //     aqiResult => {
  //           //       console.log('result 2', aqiResult);
  //           //       if (aqiResult.list && aqiResult.list.length > 0) {
  //           //         setAirQualityIndex(aqiResult.list[0].main.aqi)
  //           //       } else {
  //           //         setAirQualityIndex(null);
  //           //       }
  //           //     }
  //           //   );
  //         }
  //       },
  //       error => setLoading(false)
  //     )
  // },[]);

  if (loading) {
    return <Loading />
  } else if (result) {
    return <ForecastComponent {...result} />
  } else {
    return <Error />
  }
}

const Loading = () => <div>Loading...</div>

const Error = () => <div>I'm sorry! Please try again.</div>

const ForecastComponent = ({ loading, current, daily }) => {
  const [impSystem, setImpSystem] = useState(true);
  const [activeDay, setActiveDay] = useState(daily[0].dt);

  let activeDayWeathers = daily.filter(day => day.dt === activeDay)
  let isCurrentDay = activeDayWeathers[0].dt === daily[0].dt

  return (
    <ForecastStyle>
      <DayDetail 
        impSystem={impSystem}
        setImpSystem={setImpSystem}
        isCurrentDay={isCurrentDay}
        {...activeDayWeathers[0]}
      />
      <div className="days clearfix">
        {daily.map((day, index) =>
          <DayInWeek 
            key={index}
            {...day}
            impSystem={impSystem}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
          />
        )}
      </div>
    </ForecastStyle>
  )
}

const DayInWeek = (props) => {
  let dayItemClass = "day-in-week"
  dayItemClass += props.activeDay === props.dt ? " active" : ""
  let imgUrl = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`
  let tempMax = props.impSystem? Math.round(props.temp.max) : celToFah(props.temp.max)
  let tempMin = props.impSystem? Math.round(props.temp.min) : celToFah(props.temp.min)

  return (
    <div className="day-in-week">
      <div className={dayItemClass} onClick={() => props.setActiveDay(props.dt)}>
        <p className="day">{moment.unix(props.dt).format('ddd')}</p>
        <p className="icon">
          <img src={imgUrl} alt="" />
        </p>
        <p className="temp-max">
          <span>{tempMax}</span>
        </p>
        <p className="temp-min">
          <span>{tempMin}</span>
        </p>
      </div>
    </div>
  )
}

const DayDetail = (props) => {
  let currentTime = props.isCurrentDay ? 
    moment.unix(props.dt).format('dddd hA')  :
    moment.unix(props.dt).format('dddd')
  const imgUrl = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`
  const tempMax =  props.temp.max;
  
  let degree = props.impSystem ? Math.round(tempMax) : celToFah(tempMax)
  let windInfo = props.impSystem ? 
    props.wind_speed + ' MPH ' :
    mphToKph(props.wind_speed) + ' KPH '
  windInfo += getWindDirection(props.wind_deg)

  return (
    <div className="day-detail">
      <p className="place">Hanoi, Vietnam</p>
      <p className="sub-title">{`${currentTime} - ${props.weather[0].main}`}</p>
      <div className="detail clearfix">
        <div className="degree clearfix">
          <p className="icon">
            <img src={imgUrl} alt="" />
          </p>
          <p className="number">{degree}</p>
          <p className="unit">
            <span
              className={props.impSystem ? "active" : ""}
              onClick={() => props.setImpSystem(true)}
            >
              F
            </span>
            <span>/</span>
            <span
              className={props.impSystem ? "" : "active"}
              onClick={() => props.setImpSystem(false)}
            >
              C
            </span>
          </p>
        </div>
        <div className="weather-detail">
          <p>Humidity: {props.humidity}%</p>
          <p>Wind: {windInfo}</p>
          {props.aqi > 0 ? <p>Air Quality: {getAirPollutionInfo(props.aqi)}</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Forecast;
