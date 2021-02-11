import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import React, { useEffect } from 'react';
import useSWR from 'swr';
// files

export default function AdminDashboard() {
  const { data, error } = useSWR('/sensors', { refreshInterval: 10000 });

  useEffect(() => {
    initWidget(
      'weatherwidget-io-js',
      'https://weatherwidget.io/js/widget.min.js',
    );
  }, []);

  const initWidget = (id: string, src: string) => {
    let js,
      fjs = document.getElementsByTagName('script')[0];

    if (!document.getElementById(id)) {
      js = document.createElement('script');
      js.id = id;
      (js as HTMLScriptElement).src = src;
      fjs.parentNode?.insertBefore(js, fjs);
    }
  };

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container px-6 py-8 mx-auto">
        {/* home title */}
        <h3 className="text-3xl font-medium text-gray-700">Home</h3>

        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            {/* Total Users */}
            <section className="w-full px-6">
              <div className="flex flex-col bg-white border-l-4 border-yellow-500 rounded-md shadow-sm">
                <div className="flex px-5 py-3 bg-gray-100 border-b border-gray-200 shadow-sm rounded-t-md">
                  <p className="font-semibold text-yellow-500">
                    Latar Belakang
                  </p>
                </div>

                <div className="flex items-center p-6">
                  <img src="/history.png" className="w-20 rounded-full" />

                  <p className="ml-6 text-gray-500">
                    Cuaca merupakan sebuah aktifitas fenomena dalam waktu
                    tertentu yang dapat dikonversi manjadi suata data yang
                    sangat berguna untuk mengetahui klimatologis suatu tempat,
                    sehingga dapat memberi informasi kondisi cuaca yang dapat
                    dimanfaatkan sesuai kebutuhan perorangan maupun intansi.
                    Intansi yang membutuhkan data cuaca antara lain:
                    Pertanian/Perkebunan, Penerbangan, Pelayaran, Dinas
                    Pekerjaan Umum, dan juga masyarakat umum yang memanfaatkan
                    sesuai keperluan masing-masing. Badan Meteorologi
                    Klimatologi dan Geofisika (BMKG) pada umumnya merupakan
                    intansi pemerintahan yang ditugaskan untuk mengamati cuaca
                    dan memberikan perkiraan dan serta peringatan dini (early
                    warning) yang berhubungan dengan cuaca. Untuk mengamati
                    cuaca mutlak diperlukan suatu instrumen dan ditempatkan
                    dalam suatu lokasi tertentu yang representative mewakili
                    kondisi lingkukan sekitar yang lebih dikenal dengan Taman
                    Alat, Taman Alat secara umum memuat alat ukur parameter
                    cuaca seperti : Curah hujan, Suhu udara, Kelembaban udara,
                    Arah dan kecepatan angin, Sinar matahari dan Alat ukur
                    tekanan udara. Secara keseluruhan alat-alat ukur tersebut
                    disebut juga dengan “stasiun pengamatan” atau lebih dikenal
                    dengan Stasiun Meteorologi.
                  </p>
                </div>
              </div>
            </section>

            {/* Modul */}
            <section className="w-full px-6 mt-6 sm:w-1/2">
              <div className="flex flex-col bg-white border-l-4 border-yellow-500 rounded-md shadow-sm">
                <div className="flex px-5 py-3 bg-gray-100 border-b border-gray-200 shadow-sm rounded-t-md">
                  <p className="font-semibold text-yellow-500">Modul</p>
                </div>

                <div className="flex items-center p-6">
                  <img src="/books.png" className="w-20 rounded-full" />

                  <div className="ml-6">
                    <p className="mb-3 text-gray-500">
                      Untuk memudahkan para siswa dalam mempelajari media, maka
                      developer menyediakan buku panduan yang dapat di download
                      secara online. Panduan penggunaan modul ini dapat anda
                      download melalui tombol berikut.
                    </p>

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

            {/* Labsheet */}
            <section className="w-full px-6 mt-6 sm:w-1/2">
              <div className="flex flex-col bg-white border-l-4 border-yellow-500 rounded-md shadow-sm">
                <div className="flex px-5 py-3 bg-gray-100 border-b border-gray-200 shadow-sm rounded-t-md">
                  <p className="font-semibold text-yellow-500">Labsheet</p>
                </div>

                <div className="flex items-center p-6">
                  <img src="/book.png" className="w-20 rounded-full" />

                  <div className="ml-6">
                    <p className="mb-3 text-gray-500">
                      Untuk memudahkan para siswa dalam mempelajari media, maka
                      developer menyediakan modul jobsheet yang dapat di
                      download secara online. Modul ini dapat anda download
                      melalui tombol berikut.
                    </p>

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

        {/* users title */}
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-medium text-gray-700">Charts</h3>
          {/* <button
            onClick={() => {}}
            className="px-4 py-2 text-white bg-green-500 border rounded-md hover:bg-green-600"
          >
            Add New Data
          </button> */}
        </div>

        {/* charts */}
        <div className="w-full mt-4">
          {/* temp */}
          <section className="relative flex flex-col pt-2 pb-4 bg-white border-b-4 border-yellow-500 rounded-md">
            <p className="w-full py-2 font-bold text-center text-yellow-500">
              BMP280 Temperature (&#8451;)
            </p>

            {error && 'Error fetching data'}
            {data && (
              <AreaChart
                width={1200}
                height={300}
                data={data?.sensors}
                syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="temp"
                  stroke="#e76f51"
                  fill="#f4a261"
                />
              </AreaChart>
            )}
          </section>

          {/* altitude */}
          <section className="relative flex flex-col pt-2 pb-4 mt-4 bg-white border-b-4 border-green-500 rounded-md">
            <p className="w-full py-2 font-bold text-center text-green-500">
              BMP280 Altitude (meter)
            </p>

            {error && 'Error fetching data'}
            {data && (
              <AreaChart
                width={1200}
                height={300}
                data={data?.sensors}
                syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="alt"
                  stroke="#2a9d8f"
                  fill="#82ca9d"
                />
              </AreaChart>
            )}
          </section>

          {/* pressure */}
          <section className="relative flex flex-col pt-2 pb-4 mt-4 bg-white border-b-4 border-blue-500 rounded-md">
            <p className="w-full py-2 font-bold text-center text-blue-500">
              BMP280 Pressure (hPa)
            </p>

            {error && 'Error fetching data'}
            {data && (
              <AreaChart
                width={1200}
                height={300}
                data={data?.sensors}
                syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="press"
                  stroke="#264653"
                  fill="#457b9d"
                />
              </AreaChart>
            )}
          </section>

          {/* pressure */}
          <section className="relative flex flex-col pt-2 pb-4 mt-4 bg-white border-b-4 border-yellow-700 rounded-md">
            <p className="w-full py-2 font-bold text-center text-yellow-700">
              DHT11 Heat Index (&#8451;)
            </p>

            {error && 'Error fetching data'}
            {data && (
              <AreaChart
                width={1200}
                height={300}
                data={data?.sensors}
                syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="heat"
                  stroke="#9d0208"
                  fill="#dc2f02"
                />
              </AreaChart>
            )}
          </section>

          {/* humidity */}
          <section className="relative flex flex-col pt-2 pb-4 mt-4 bg-white border-b-4 border-yellow-300 rounded-md">
            <p className="w-full py-2 font-bold text-center text-yellow-300">
              DHT11 Kelembaban (%)
            </p>

            {error && 'Error fetching data'}
            {data && (
              <AreaChart
                width={1200}
                height={300}
                data={data?.sensors}
                syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="humid"
                  stroke="#f4a261"
                  fill="#e9c46a"
                />
              </AreaChart>
            )}
          </section>

          {/* illumination */}
          <section className="relative flex flex-col pt-2 pb-4 mt-4 bg-white border-b-4 border-green-300 rounded-md">
            <p className="w-full py-2 font-bold text-center text-green-300">
              BH1750 Illumination (lumen/m<sup>2</sup>)
            </p>

            {error && 'Error fetching data'}
            {data && (
              <AreaChart
                width={1200}
                height={300}
                data={data?.sensors}
                syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="lux"
                  stroke="#81b29a"
                  fill="#caffbf"
                />
              </AreaChart>
            )}
          </section>

          {/* infrared */}
          <section className="relative flex flex-col pt-2 pb-4 mt-4 bg-white border-b-4 border-gray-500 rounded-md">
            <p className="w-full py-2 font-bold text-center text-gray-500">
              Infared (0/1)
            </p>

            {error && 'Error fetching data'}
            {data && (
              <AreaChart
                width={1200}
                height={300}
                data={data?.sensors}
                syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="flame"
                  stroke="#000000"
                  fill="#e5e5e5"
                />
              </AreaChart>
            )}
          </section>
        </div>

        <div className="mt-8"></div>

        <h3 className="text-3xl font-medium text-gray-700">Widget</h3>

        <div className="w-full mt-4">
          <section className="px-4 pt-2 pb-4 mt-4 bg-white border-b-4 border-blue-500 rounded-md">
            <p className="w-full py-4 font-bold text-center text-blue-500">
              Weather Forecast
            </p>

            <a
              className="weatherwidget-io"
              href="https://forecast7.com/en/n7d80110d37/yogyakarta/"
              data-label_1="YOGYAKARTA"
              data-label_2="WEATHER"
              data-font="Ubuntu"
              data-icons="Climacons Animated"
              data-theme="random_grey"
            >
              Weatherwidget
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
