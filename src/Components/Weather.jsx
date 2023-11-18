import { useEffect, useRef } from "react";
import { useState } from "react";
import search from "./Assets/search.png";
import Weather_data from "./Weather_data";
const Weather = () => {
  const SearchInput = useRef(null);

  const [url, seturl] = useState(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&"
  );

  const [apiKey, setapiKey] = useState("53d142624ed45687a06913cfb54da2b6");

  const [temp, setTemp] = useState(null);
  const [wind_speed, setWindSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [city, setcity] = useState("");
  const [WeatherImg, setWeatherImg] = useState("");
  const error = useRef(null);

  let getUpdate = async () => {
    try {
      if (SearchInput.current.value === "") {
        if (error.current) {
          error.current.style.visibility = "visible";
          error.current.textContent = `Input Can't be Blanked`;
        } else {
          console.error("Error Element is not Mounted");
        }

        return;
      } else {
        var response = await fetch(
          url + `q=${SearchInput.current.value}` + `&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(
            `HTTP Error Server response with Status ${response.status}`
          );
        }
      }
      let data = await response.json();
      setTimeout(() => {
        setTemp(data.main.temp);
        setWindSpeed(data.wind.speed);
        setHumidity(data.main.humidity);
        setWeatherImg(data.weather[0].main);
        setcity(SearchInput.current.value);
      }, 1000);
    } catch (error) {
      error.current.style.visibility = "visible";
      error.current.textContent = `Server Error: ${error}`;
    }
  };

  return (
    <div className="App bg-gradient-to-r from-indigo-500 to-indigo-900 w-[400px] h-[450px] rounded-xl">
      <div className="input_content mt-5 ">
        <div className="input_wrapper w-full flex items-center justify-center gap-3 mt-3 px-10 ">
          <input
            ref={SearchInput}
            type="text"
            placeholder="Search"
            className="flex-1 p-3 rounded-3xl border-none outline-none"
          />

          <button
            type="button"
            className="bg-white w-12 h-12 rounded-[50%] flex items-center justify-center cursor-pointer"
            onClick={() => {
              getUpdate();
            }}
          >
            <img src={search} className="w-5" />
          </button>
        </div>
        <span
          ref={error}
          className="error text-xs text-red-500 ml-14 invisible"
        >
          Type Your City/Country Name
        </span>
      </div>
      <Weather_data
        temp={temp}
        humidity1={humidity}
        wind_speed={wind_speed}
        city={city}
        weather_img={WeatherImg}
      />
    </div>
  );
};

export default Weather;
