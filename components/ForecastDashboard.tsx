import axios from 'axios';
import { useEffect, useState } from 'react';
// files

export default function AdminDashboard() {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    const res = await axios.get(
      'https://api.openweathermap.org/data/2.5/onecall?lat=-7.771157215295838&lon=110.38758149528955&exclude=minutely,hourly&appid=438d367cd264ca27bf4efe0f7ada35f3&units=metric&lang=id',
    );
    const data = res?.data;

    console.log(data);
  };

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container px-6 py-8 mx-auto">
        {/* forecast title */}
        <h3 className="text-3xl font-medium text-gray-700">Forecast</h3>

        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            {/* Today's Forecast */}
            <section className="w-full px-6">
              <div className="flex flex-col bg-white border-l-4 border-yellow-500 rounded-md shadow-sm">
                <div className="flex px-5 py-3 bg-gray-100 border-b border-gray-200 shadow-sm rounded-t-md">
                  <p className="font-semibold text-yellow-500">
                    Today's Forecast
                  </p>
                </div>

                <div className="flex items-center p-6">
                  <img
                    src={'/history.png'}
                    alt={''}
                    className="w-20 rounded-full"
                  />

                  <p className="ml-6 text-gray-500">Detail</p>
                </div>
              </div>
            </section>

            {/* Weekly Forecast */}
            <section className="w-full px-6 mt-6 sm:w-1/2">
              <div className="flex flex-col bg-white border-l-4 border-yellow-500 rounded-md shadow-sm">
                <div className="flex px-5 py-3 bg-gray-100 border-b border-gray-200 shadow-sm rounded-t-md">
                  <p className="font-semibold text-yellow-500">{'Senin'}</p>
                </div>

                <div className="flex items-center p-6">
                  <img
                    src={'/books.png'}
                    alt={''}
                    className="w-20 rounded-full"
                  />

                  <div className="ml-6">
                    <p className="mb-3 text-gray-500">Daily</p>

                    <button
                      onClick={() => {}}
                      className="px-4 py-2 text-white bg-yellow-500 border rounded-md hover:bg-yellow-600"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8"></div>
      </div>
    </main>
  );
}
