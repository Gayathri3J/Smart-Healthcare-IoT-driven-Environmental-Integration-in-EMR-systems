import PatientList from '../components/PatientList';
import DoctorList from '../components/DoctorList';
import Appointments from '../components/Appointments';
import CalendarWidget from '../components/CalendarWidget';
import TemperatureHumidityChart from '../components/TemperatureHumidityChart';
import NoiseLevelChart from '../components/NoiseLevelChart';
import AirQualityChart from '../components/AirQualityChart';
import useRealtimeData from '../useRealtimeData';

export default function NurseDashboard() {
  const { data, loading, error } = useRealtimeData();
  console.log(data, loading, error);
  
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-4xl font-bold text-center text-blue-800">Nurse Dashboard</h2>
      <p className="text-center text-gray-600 mt-2">
        Manage patient care and monitor health status efficiently.
      </p>

      {/* Dashboard Sections with Modern Non-Consistent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="col-span-1 md:col-span-2">
          <PatientList />
        </div>
        <div className="col-span-1">
          <DoctorList />
        </div>
      
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <TemperatureHumidityChart  tempData={ data?.Temperature} humData={data?.Humidity}/>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <NoiseLevelChart noise={data?.Noise}/>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <AirQualityChart airQ={data?.AirQ} />
        </div>
        <div className="col-span-2">
          <Appointments />
        </div>
        <div className="col-span-1 md:col-span-1">
          <CalendarWidget />
        </div>
      
       
      </div>
    </div>
  );
}
