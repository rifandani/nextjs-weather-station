import { Grid } from 'gridjs-react';
import useSWR from 'swr';
// files

export default function TableSensors() {
  const { data, error } = useSWR('/sensors', { refreshInterval: 10000 });

  return (
    <div className="flex flex-col mt-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="min-w-full overflow-hidden sm:rounded-lg ">
          {error && 'Error fetching data'}

          {!data && !error && 'Loading...'}

          {data && (
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
          )}
        </div>
      </div>
    </div>
  );
}
