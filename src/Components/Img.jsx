import clear from "./Assets/clear.png";
import clouds from "./Assets/clouds.png";
import drizzle from "./Assets/drizzle.png";
import rain from "./Assets/rain.png";
import snow from "./Assets/snow.png";
import mist from "./Assets/mist.png";

const Img = ({ weather_img }) => {
  let Set_img = (weather_img) => {
    if (weather_img === "Clouds") {
      return clouds;
    }

    if (weather_img === "Clear") {
      return clear;
    }
    if (weather_img === "Drizzle") {
      return drizzle;
    }
    if (weather_img === "Mist") {
      return mist;
    }
    if (weather_img === "Rain") {
      return rain;
    }
    if (weather_img === "Snow") {
      return snow;
    }
    else{
      return mist
    }
  };
  return (
    <img
      src={weather_img === "" ? mist : Set_img(weather_img)}
      className="w-32 block mx-auto"
    />
  );
};

export default Img;
