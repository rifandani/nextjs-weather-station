import axios from 'axios';
import { useEffect, useState } from 'react';
import { WiBarometer, WiHumidity, WiThermometer } from 'react-icons/wi';
import { BiWind } from 'react-icons/bi';
import { GiSunglasses } from 'react-icons/gi';
// files

export default function AdminDashboard() {
  const [error, setError] = useState<any>(null);
  const [current, setCurrent] = useState<any>(null);
  const [daily, setDaily] = useState<any>([]);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/onecall?lat=-7.771157215295838&lon=110.38758149528955&exclude=minutely,hourly&appid=438d367cd264ca27bf4efe0f7ada35f3&units=metric&lang=id',
      );
      const data = res?.data;

      setCurrent(data.current);
      setDaily(data.daily);
      console.log(current);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container px-6 py-8 mx-auto">
        {/* forecast title */}
        <h3 className="text-3xl font-medium text-gray-700">Weather Forecast</h3>

        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            {/* Today's Forecast */}
            <section className="w-full px-6">
              <div className="flex flex-col bg-white border-l-4 border-yellow-500 rounded-md shadow-sm">
                <div className="flex px-5 py-3 bg-gray-100 border-b border-gray-200 shadow-sm rounded-t-md">
                  <p className="italic font-semibold text-yellow-500">Today</p>
                </div>

                <div className="flex items-center justify-center p-6 space-x-1">
                  {/* Icon */}
                  <div className="flex items-center justify-center space-x-1">
                    {current ? (
                      <img
                        src={`http://openweathermap.org/img/wn/${current?.weather[0].icon}@2x.png`}
                        alt={current.weather[0].description}
                        className="w-16"
                      />
                    ) : error ? (
                      'Error'
                    ) : (
                      'Loading...'
                    )}

                    <div className="flex-col items-center justify-center">
                      <p className="italic text-gray-400">Description</p>

                      <p className="text-gray-700 capitalize">
                        {current?.weather[0].description}
                      </p>
                    </div>
                  </div>

                  <hr className="w-16 h-1 transform rotate-90" />

                  {/* Temp */}
                  <div className="flex items-center justify-center space-x-1">
                    <WiThermometer className="w-16 h-10 text-red-500" />

                    <div className="flex-col items-center justify-center">
                      <p className="italic text-gray-400">Temp</p>

                      <p className="text-gray-700">{current?.temp} &#8451;</p>
                    </div>
                  </div>

                  <hr className="w-16 h-1 transform rotate-90" />

                  {/* Pressure */}
                  <div className="flex items-center justify-center space-x-1">
                    <WiBarometer className="w-16 h-10 text-blue-500" />

                    <div className="flex-col items-center justify-center">
                      <p className="italic text-gray-400">Pressure</p>

                      <p className="text-gray-700">{current?.pressure} hPa</p>
                    </div>
                  </div>

                  <hr className="w-16 h-1 transform rotate-90" />

                  {/* Humidity */}
                  <div className="flex items-center justify-center space-x-1">
                    <WiHumidity className="w-16 h-10 text-green-500" />

                    <div className="flex-col items-center justify-center">
                      <p className="italic text-gray-400">Humidity</p>

                      <p className="text-gray-700">{current?.humidity} %</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Weekly Forecast */}
            {daily &&
              daily.map((el: any, i: number) =>
                i === 0 ? null : (
                  <section
                    key={i}
                    className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3"
                  >
                    <div className="flex flex-col bg-white border-b-4 border-yellow-500 rounded-md shadow-sm">
                      <div className="flex justify-between px-5 py-3 bg-gray-100 border-b border-gray-200 shadow-sm rounded-t-md">
                        <p className="italic font-semibold text-yellow-500">
                          {/* {format(el.dt, 'PPPP')} */}
                          {new Date(el.dt * 1000).toDateString()}
                        </p>

                        <p className="font-medium text-gray-600 capitalize">
                          {el.weather[0].description}
                        </p>
                      </div>

                      <div className="flex items-center justify-center p-6">
                        <img
                          src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                          alt={el.weather[0].description}
                          className="w-20 rounded-full"
                        />

                        <hr className="w-16 h-1 transform rotate-90" />

                        <div className="">
                          <p className="text-2xl text-gray-700">
                            {el.temp.day} &#8451;
                          </p>
                        </div>
                      </div>

                      <hr className="mx-10" />

                      <div className="flex items-center justify-center w-full p-6 space-x-3">
                        <div className="inline-flex mr-3 space-x-1">
                          <WiBarometer className="w-6 h-6 text-blue-500" />

                          <p className="h-6">{el.pressure + ' hPa'}</p>
                        </div>

                        <div className="inline-flex mr-3 space-x-1">
                          <WiHumidity className="w-6 h-6 text-green-500" />

                          <p className="h-6">{el.humidity + ' %'}</p>
                        </div>
                      </div>

                      <hr className="mx-10" />

                      <div className="flex items-center justify-center w-full p-6 space-x-3">
                        <div className="inline-flex mr-3 space-x-1">
                          <BiWind className="w-6 h-6 text-purple-500" />

                          <p className="h-6">{el.wind_speed + ' m/s'}</p>
                        </div>

                        <div className="inline-flex mr-3 space-x-1">
                          <GiSunglasses className="w-6 h-6 text-red-300" />

                          <p className="h-6">{el.uvi + ' UV'}</p>
                        </div>
                      </div>
                    </div>
                  </section>
                ),
              )}
          </div>
        </div>

        <div className="mt-8"></div>
      </div>
    </main>
  );
}
