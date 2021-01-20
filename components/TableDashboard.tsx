// files
import TableSensors from './TableSensors';

export default function AdminDashboard() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="px-6 py-8 mx-auto">
        {/* tables */}
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-medium text-gray-700">
            Sensors Data Table
          </h3>

          {/* <button
            onClick={() => {}}
            className="px-4 py-2 text-white bg-green-500 border rounded-md hover:bg-green-600"
          >
            Add New Data
          </button> */}
        </div>

        {/* table using gridjs */}
        <TableSensors />
      </div>
    </main>
  );
}
