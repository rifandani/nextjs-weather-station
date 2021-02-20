// import { Grid } from 'gridjs-react';
import { useEffect } from 'react';
import useSWR from 'swr';
// files

export default function TableSensors() {
  const { data, error } = useSWR('/sensors', { refreshInterval: 10000 });

  useEffect(() => {
    data &&
      // @ts-ignore
      $('#empTable').DataTable({
        data: data.sensors,
        lengthMenu: [
          [10, 60, 100, 600, 1000, 6000],
          [
            '10 rows',
            '60 rows',
            '100 rows',
            '600 rows',
            '1000 rows',
            '6000 rows',
          ],
        ],
        // processing: true,
        // serverSide: true,
        // serverMethod: 'post',
        columns: [
          { data: 'id' },
          { data: 'temp' },
          { data: 'alt' },
          { data: 'press' },
          { data: 'heat' },
          { data: 'humid' },
          { data: 'lux' },
          { data: 'flame' },
          { data: 'time' },
        ],
        dom: 'Bfrtip', // default lfrtip , ada juga Bfrtip , <"wrapper"flipt>, <"top"i>rt<"bottom"flp><"clear">
        buttons: [
          'colvis',
          'pageLength',
          'excelHtml5',
          'csvHtml5',
          'pdfHtml5',
          'print',
        ],
      });
  }, [data]);

  return (
    <div className="flex flex-col mt-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="min-w-full overflow-hidden sm:rounded-lg ">
          {error && 'Error fetching data'}

          {!data && !error && 'Loading...'}

          {/* {data && (
            <Grid
              data={data?.sensors}
              columns={[
                {
                  id: 'temp',
                  name: 'Temp (C)',
                },
                {
                  id: 'alt',
                  name: 'Alt (m)',
                },
                {
                  id: 'press',
                  name: 'Press (hPa)',
                },
                {
                  id: 'heat',
                  name: 'Heat (C)',
                },
                {
                  id: 'humid',
                  name: 'humid (%)',
                },
                {
                  id: 'lux',
                  name: 'Lux (lmn)',
                },
                {
                  id: 'flame',
                  name: 'IR (1/0)',
                },
                {
                  id: 'time',
                  name: 'Date',
                },
              ]}
              search={true}
              sort={true}
              pagination={{
                enabled: true,
                limit: 10,
              }}
            />
          )} */}

          {data && (
            //  Table
            <table
              id="empTable"
              className="dataTable table-hover table-striped"
              style={{ width: '100%' }}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Temperatur (&#8451;)</th>
                  <th>Altitude (m)</th>
                  <th>Tekanan (hPa)</th>
                  <th>Heat Index (&#8451;)</th>
                  <th>Kelembaban (%)</th>
                  <th>
                    Iluminasi (lumen/m<sup>2</sup>)
                  </th>
                  <th>InfraRed (1/0)</th>
                  <th>Date-Time</th>
                </tr>
              </thead>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
