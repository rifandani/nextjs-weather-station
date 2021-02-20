import Head from 'next/head';

import TableSensors from './TableSensors';

export default function AdminDashboard() {
  return (
    <>
      <Head>
        {/* Jquery js */}
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        />

        {/* Bootstrap js */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
          integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
          crossOrigin="anonymous"
        />

        {/* Datatable CSS */}
        <link
          href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn.datatables.net/buttons/1.6.5/css/buttons.dataTables.min.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* Datatable JS */}
        <script
          type="text/javascript"
          charSet="utf8"
          src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.datatables.net/buttons/1.6.5/js/dataTables.buttons.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.html5.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.print.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.colVis.min.js"
        />
      </Head>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
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
    </>
  );
}
