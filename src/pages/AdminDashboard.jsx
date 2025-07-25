import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import {
  FaAmbulance,
  FaCalendarDay,
  FaUserMd,
  FaHeartbeat,
  FaProcedures,
  FaExclamationTriangle,
} from "react-icons/fa";
import useRealtimeData from "../useRealtimeData";
import TemperatureHumidityChart from "../components/TemperatureHumidityChart";
import NoiseLevelChart from "../components/NoiseLevelChart";
import AirQualityChart from "../components/AirQualityChart";

function AdminDashboard() {
  // Dummy data arrays
  const { data, loading, error } = useRealtimeData();
  // Monthly Admissions (LineChart)
  const admissionsData = [
    { month: "Jan", admissions: 150 },
    { month: "Feb", admissions: 200 },
    { month: "Mar", admissions: 180 },
    { month: "Apr", admissions: 220 },
    { month: "May", admissions: 300 },
    { month: "Jun", admissions: 250 },
  ];

  // Revenue by Department (BarChart)
  const revenueData = [
    { department: "Cardiology", revenue: 40000 },
    { department: "Neurology", revenue: 35000 },
    { department: "Orthopedics", revenue: 30000 },
    { department: "Pediatrics", revenue: 25000 },
    { department: "Emergency", revenue: 50000 },
  ];

  // Doctor Specialties Distribution (PieChart)
  const specialtiesData = [
    { name: "Cardiology", value: 40 },
    { name: "Neurology", value: 30 },
    { name: "Orthopedics", value: 20 },
    { name: "Pediatrics", value: 10 },
  ];
  const PIE_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Doctor Information (Table)
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardiology",
      experience: "10 years",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Neurology",
      experience: "8 years",
    },
    {
      id: 3,
      name: "Dr. Alan Brown",
      specialty: "Orthopedics",
      experience: "12 years",
    },
    {
      id: 4,
      name: "Dr. Emily Davis",
      specialty: "Pediatrics",
      experience: "7 years",
    },
  ];

  // Daily Patient Check-Ins (AreaChart)
  const checkinsData = [
    { day: "Mon", checkins: 50 },
    { day: "Tue", checkins: 80 },
    { day: "Wed", checkins: 70 },
    { day: "Thu", checkins: 90 },
    { day: "Fri", checkins: 100 },
    { day: "Sat", checkins: 60 },
    { day: "Sun", checkins: 40 },
  ];

  // Emergency Room Efficiency (RadialBarChart)
  const erEfficiencyData = [
    { name: "Response", value: 80, fill: "#0088FE" },
    { name: "Treatment", value: 90, fill: "#00C49F" },
    { name: "Recovery", value: 75, fill: "#FF8042" },
  ];

  // Staff Performance (RadarChart)
  const staffPerformanceData = [
    { subject: "Nursing", score: 85 },
    { subject: "Surgery", score: 90 },
    { subject: "Administration", score: 75 },
    { subject: "Support", score: 80 },
    { subject: "Research", score: 70 },
  ];

  // Attendance Data (Doctors & Nurses Attendance over a Week)
  const attendanceData = [
    { day: "Mon", doctors: 90, nurses: 95 },
    { day: "Tue", doctors: 85, nurses: 90 },
    { day: "Wed", doctors: 88, nurses: 92 },
    { day: "Thu", doctors: 92, nurses: 96 },
    { day: "Fri", doctors: 87, nurses: 93 },
    { day: "Sat", doctors: 80, nurses: 85 },
    { day: "Sun", doctors: 75, nurses: 80 },
  ];

  // New Admissions & Emergency Trends Data (LineChart)
  const admissionsEmergencyData = [
    { day: "Mon", newAdmissions: 30, emergency: 10 },
    { day: "Tue", newAdmissions: 35, emergency: 8 },
    { day: "Wed", newAdmissions: 40, emergency: 12 },
    { day: "Thu", newAdmissions: 32, emergency: 15 },
    { day: "Fri", newAdmissions: 45, emergency: 9 },
    { day: "Sat", newAdmissions: 50, emergency: 20 },
    { day: "Sun", newAdmissions: 28, emergency: 7 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-800">
            Administrator Dashboard
          </h2>
          <p className="text-gray-700 mt-2">
            Welcome, Administrator. Monitor hospital operations, patient data,
            staff attendance, and more.
          </p>
        </div>

        {/* Hospital Operations Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center justify-center">
            <FaHeartbeat className="mr-2" size={28} /> Hospital Operations
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Admissions Line Chart */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Monthly Patient Admissions
              </h4>
              <LineChart
                width={400}
                height={300}
                data={admissionsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="admissions"
                  stroke="#0088FE"
                  strokeWidth={2}
                  isAnimationActive={true}
                  animationDuration={1500}
                />
              </LineChart>
            </div>

            {/* Revenue by Department Bar Chart */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Revenue by Department
              </h4>
              <BarChart
                width={400}
                height={300}
                data={revenueData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="revenue"
                  fill="#00C49F"
                  isAnimationActive={true}
                  animationDuration={1500}
                />
              </BarChart>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <TemperatureHumidityChart
              tempData={data?.Temperature}
              humData={data?.Humidity}
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <NoiseLevelChart noise={data?.Noise} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <AirQualityChart airQ={data?.AirQ} />
          </div>
        </div>
        <br />
        {/* Doctor Information Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center justify-center">
            <FaUserMd className="mr-2" size={28} /> Doctor Specialties &
            Information
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Specialties Distribution Pie Chart */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <PieChart width={350} height={350}>
                <Pie
                  data={specialtiesData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                  isAnimationActive={true}
                  animationDuration={1500}
                >
                  {specialtiesData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>

            {/* Doctor Information Table */}
            <div className="bg-white p-4 rounded-lg shadow-lg w-full overflow-auto">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Doctor Information
              </h4>
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-blue-800 uppercase">
                      Name
                    </th>
                    <th className="px-4 py-2 text-left text-blue-800 uppercase">
                      Specialty
                    </th>
                    <th className="px-4 py-2 text-left text-blue-800 uppercase">
                      Experience
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {doctors.map((doctor) => (
                    <tr key={doctor.id}>
                      <td className="px-4 py-2">{doctor.name}</td>
                      <td className="px-4 py-2">{doctor.specialty}</td>
                      <td className="px-4 py-2">{doctor.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Additional Metrics Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center justify-center">
            <FaProcedures className="mr-2" size={28} /> Additional Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-blue-600">120</h4>
              <p className="text-gray-600">Available Beds</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-blue-600">35</h4>
              <p className="text-gray-600">Operating Rooms</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-blue-600">85%</h4>
              <p className="text-gray-600">Occupancy Rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-blue-600">45</h4>
              <p className="text-gray-600">New Admissions</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-blue-600">12</h4>
              <p className="text-gray-600">Emergency Cases</p>
            </div>
          </div>
        </section>

        {/* Advanced Metrics Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center justify-center">
            <FaExclamationTriangle className="mr-2" size={28} /> Advanced
            Metrics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ER Efficiency (RadialBarChart) */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <FaAmbulance className="text-blue-600 mr-2" size={24} />
                <h4 className="text-xl font-semibold text-blue-600">
                  ER Efficiency
                </h4>
              </div>
              <RadialBarChart
                width={300}
                height={300}
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                data={erEfficiencyData}
                startAngle={180}
                endAngle={0}
                barSize={20}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise
                  dataKey="value"
                  isAnimationActive={true}
                  animationDuration={1500}
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                />
              </RadialBarChart>
            </div>

            {/* Daily Patient Check-Ins (AreaChart) */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <FaCalendarDay className="text-blue-600 mr-2" size={24} />
                <h4 className="text-xl font-semibold text-blue-600">
                  Daily Check-Ins
                </h4>
              </div>
              <AreaChart
                width={400}
                height={300}
                data={checkinsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="checkins"
                  stroke="#FF8042"
                  fill="#FFBB28"
                  isAnimationActive={true}
                  animationDuration={1500}
                />
              </AreaChart>
            </div>

            {/* Staff Performance (RadarChart) */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <FaUserMd className="text-blue-600 mr-2" size={24} />
                <h4 className="text-xl font-semibold text-blue-600">
                  Staff Performance
                </h4>
              </div>
              <RadarChart
                cx={200}
                cy={150}
                outerRadius={100}
                width={400}
                height={300}
                data={staffPerformanceData}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Performance"
                  dataKey="score"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                  isAnimationActive={true}
                  animationDuration={1500}
                />
                <Legend />
              </RadarChart>
            </div>
          </div>
        </section>

        {/* Staff Attendance Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center justify-center">
            <FaUserMd className="mr-2" size={28} /> Staff Attendance
          </h3>
          <div className="bg-white p-4 rounded-lg shadow-lg overflow-auto">
            <BarChart
              width={500}
              height={300}
              data={attendanceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="doctors"
                fill="#0088FE"
                isAnimationActive={true}
                animationDuration={1500}
              />
              <Bar
                dataKey="nurses"
                fill="#00C49F"
                isAnimationActive={true}
                animationDuration={1500}
              />
            </BarChart>
          </div>
        </section>

        {/* New Admissions & Emergency Trends Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center justify-center">
            <FaExclamationTriangle className="mr-2" size={28} /> New Admissions
            & Emergency Trends
          </h3>
          <div className="bg-white p-4 rounded-lg shadow-lg overflow-auto">
            <LineChart
              width={500}
              height={300}
              data={admissionsEmergencyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="newAdmissions"
                stroke="#FF8042"
                strokeWidth={2}
                isAnimationActive={true}
                animationDuration={1500}
              />
              <Line
                type="monotone"
                dataKey="emergency"
                stroke="#00C49F"
                strokeWidth={2}
                isAnimationActive={true}
                animationDuration={1500}
              />
            </LineChart>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
