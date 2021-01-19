import {
  FaUserFriends,
  FaShoppingCart,
  FaShoppingBag,
  FaMoneyBillWave,
} from 'react-icons/fa';
import { useRouter } from 'next/router';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import React from 'react';
import useSWR from 'swr';
// files

export default function AdminDashboard() {
  const { push } = useRouter();
  const { data, error } = useSWR('/sensors', { refreshInterval: 10000 });

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container px-6 py-8 mx-auto">
        {/* dashboard title */}
        <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            {/* Total Users */}
            <section className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-indigo-500 bg-opacity-75 rounded-full">
                  <FaUserFriends className="w-8 h-8 text-white" />
                </div>

                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">2</h4>
                  <div className="text-gray-500">Total Users</div>
                </div>
              </div>
            </section>

            {/* Available Products */}
            <section className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-pink-500 bg-opacity-75 rounded-full">
                  <FaShoppingBag className="w-8 h-8 text-white" />
                </div>

                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">2</h4>
                  <div className="text-gray-500">Available Products</div>
                </div>
              </div>
            </section>

            {/* Weekly Orders */}
            <section className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-yellow-500 bg-opacity-75 rounded-full">
                  <FaShoppingCart className="w-8 h-8 text-white" />
                </div>

                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">152</h4>
                  <div className="text-gray-500">Weekly Orders</div>
                </div>
              </div>
            </section>

            {/* Weekly Income */}
            <section className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-green-500 bg-opacity-75 rounded-full">
                  <FaMoneyBillWave className="w-8 h-8 text-white" />
                </div>

                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    Rp 550.000
                  </h4>
                  <div className="text-gray-500">Weekly Income</div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8"></div>

        {/* users title */}
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-medium text-gray-700">Charts</h3>
          <button
            onClick={() => push('/admin/add/user', '/admin/add/user')}
            className="px-4 py-2 text-white bg-green-500 border rounded-md hover:bg-green-600"
          >
            Add New User
          </button>
        </div>

        {/* temperature */}
        <div className="w-full mt-4">
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
                <XAxis dataKey="createdAt" />
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
          <section className="relative flex flex-col py-2 mt-4 bg-white rounded-md">
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
                <XAxis dataKey="createdAt" />
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
          <section className="relative flex flex-col py-2 mt-4 bg-white rounded-md">
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
                <XAxis dataKey="createdAt" />
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
          <section className="relative flex flex-col py-2 mt-4 bg-white rounded-md">
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
                <XAxis dataKey="createdAt" />
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
          <section className="relative flex flex-col py-2 mt-4 bg-white rounded-md">
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
                <XAxis dataKey="createdAt" />
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
          <section className="relative flex flex-col py-2 mt-4 bg-white rounded-md">
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
                <XAxis dataKey="createdAt" />
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
          <section className="relative flex flex-col py-2 mt-4 bg-white rounded-md">
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
                <XAxis dataKey="createdAt" />
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
      </div>
    </main>
  );
}
