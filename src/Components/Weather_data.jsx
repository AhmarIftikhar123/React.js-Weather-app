import Img from "./Img";
import humidity from "./Assets/humidity.png";
import wind from "./Assets/wind.png";
const Weather_data = ({ temp, humidity1, wind_speed, city ,weather_img }) => {
  return (
    <>
      <Img 
      weather_img={weather_img}/>
      <h1 className="temp text-white text-5xl text-center">
        {temp === null ? "--" : temp}°C
      </h1>
      <h2 className="Location text-white text-3xl text-center mt-4">
        {city === "" ? "City/Countary" : city}
      </h2>
      <div className="info grid grid-cols-2">
        {/* humidity */}
        <div
          className="humidity_boax m-auto pt-14 flex gap-2
        "
        >
          <img src={humidity} className="w-10 h-8" />
          <p className="text-white text-sm">
            <span className="humidity block font-bold text-xl">
              {humidity1 === null ? "--" : humidity1} %
            </span>
            Humidity
          </p>
        </div>
        {/* Wind_speed */}
        <div
          className="humidity_boax m-auto pt-14 flex gap-2
        "
        >
          <img src={wind} className="w-10 h-8" />
          <p className="text-white text-sm">
            <span className="humidity block font-bold text-xl">
              {wind_speed === null ? "--" : wind_speed} Km/h
            </span>
            Wind Speed
          </p>
        </div>{" "}
      </div>
    </>
  );
};

export default Weather_data;
