import PatientList from '../components/PatientList';
import Appointments from '../components/Appointments';
import CalendarWidget from '../components/CalendarWidget';
import TemperatureHumidityChart from '../components/TemperatureHumidityChart';
import NoiseLevelChart from '../components/NoiseLevelChart';
import AirQualityChart from '../components/AirQualityChart';

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-4xl font-bold text-center text-blue-800">Doctor Dashboard</h2>
      <p className="text-center text-gray-600 mt-2">
        Monitor patient health and manage your consultations efficiently.
      </p>

      {/* Dashboard Sections with Modern Non-Consistent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="col-span-1 md:col-span-3">
          <PatientList />
        </div>

        {/* Vitals Monitoring */}
        {/* <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <TemperatureHumidityChart />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <NoiseLevelChart />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <AirQualityChart />
        </div> */}

        {/* Patient Appointments and Calendar */}
        <div className="col-span-2">
          <Appointments />
        </div>
        <div className="col-span-1 md:col-span-1">
          <CalendarWidget />
        </div>
      </div>

      {/* Additional Features */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Prescription Management</h3>
        <p className="text-gray-600">
          Track and manage prescriptions for your patients. You can view medications, dosage, and prescriptions
          history directly in the dashboard.
        </p>
        {/* Add Prescription Management Widget */}
      </div>

      {/* <div className="mt-6">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Patient Medical History & Notes</h3>
        <p className="text-gray-600">
          View detailed medical history, previous treatments, and notes from consultations. Easily keep track of
          your patient&apos;s progress.
        </p>
   
      </div> */}
    </div>
  );
}
