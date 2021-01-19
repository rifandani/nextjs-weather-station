import { useRouter } from 'next/router';
// files
import TableSensors from './TableSensors';

export default function AdminDashboard() {
  const { push } = useRouter();

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container px-6 py-8 mx-auto">
        {/* dashboard title */}
        <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

        {/* users title */}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-3xl font-medium text-gray-700">Users</h3>
          <button
            onClick={() => push('/admin/add/user', '/admin/add/user')}
            className="px-4 py-2 text-white bg-green-500 border rounded-md hover:bg-green-600"
          >
            Add New User
          </button>
        </div>

        {/* table using gridjs */}
        <TableSensors />
      </div>
    </main>
  );
}
