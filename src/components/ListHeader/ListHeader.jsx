import "./ListHeader.css";

function HeaderList(props) {
  const { condition, temperature, isGoodWeather, location } = props;
  return (
    <div className="widget">
      <div className="details">
        <div className="temperature">{temperature}°</div>
        <div className="summary">
          <p className="summaryText">{condition}</p>
        </div>
      </div>

      <div className="location">Location: {location}</div>
      <div className="recomendation">
        {isGoodWeather ? 
          "The weather is awesome! Go outside and:"
         : 
          "Bad weather outside! Here is what you can do now:"
        }
      </div>
    </div>
  );
  //   return (
  //     <div>
  //       <div className="weather__header">
  //         <span className="weather__temperature">{condition}</span>
  //         <span className="weather__temperature">{temperature}°C</span>
  //       </div>

  //       {isGoodWeather ? (
  //         <h3>
  //           The weather is awesome! Go outside and:
  //         </h3>
  //       ) : (
  //         <h3>
  //           Bad weather outside! Here is what you can do now:
  //         </h3>
  //       )}
  //     </div>
  //   );
}

export default HeaderList;
