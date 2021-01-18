import { Grid } from 'gridjs-react';
// import { useRouter } from 'next/router';
// files

export default function TableUsers() {
  // const { push } = useRouter();

  return (
    <div className="flex flex-col mt-8">
      <div className="-my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="min-w-full overflow-hidden sm:rounded-lg ">
          <Grid
            data={[]}
            columns={[
              // {
              //   name: 'ID',
              //   hidden: true,
              // },
              'Temp (C)',
              'Alt (m)',
              'Press (hPa)',
              'Heat (C)',
              'Humid (%)',
              'Lux (l)',
              'IR (1/0)',
              'Date',
            ]}
            search={true}
            sort={true}
            pagination={{
              enabled: true,
              limit: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
}
