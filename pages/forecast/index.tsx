import { useState } from 'react';
import Loader from 'react-loader-spinner';
// files
import Navbar from '../../components/Navbar';
import ForecastDashboard from '../../components/ForecastDashboard';

const WeatherPage = () => {
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
        <ForecastDashboard />
      )}
    </Navbar>
  );
};

export default WeatherPage;
