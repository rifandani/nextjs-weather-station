import { useState } from 'react';
import Loader from 'react-loader-spinner';
// files
import Navbar from '../../components/Navbar';
import TableDashboard from '../../components/TableDashboard';

const TablePage = () => {
  const [busy] = useState<boolean>(false);

  return (
    <Navbar>
      {busy ? (
        <Loader
          type="ThreeDots"
          color="Blue"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <TableDashboard />
      )}
    </Navbar>
  );
};

export default TablePage;
