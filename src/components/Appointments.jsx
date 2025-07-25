import {
  FaUserMd,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaClipboardList,
} from "react-icons/fa";

// Sample appointment data with more details
const appointments = [
  {
    patient: "Kevin Brown",
    doctor: "Dr. Smith",
    department: "Cardiology",
    time: "9:00 AM",
    status: "Confirmed",
  },
  {
    patient: "Maria Smith",
    doctor: "Dr. Adams",
    department: "Neurology",
    time: "10:00 AM",
    status: "Pending",
  },
  {
    patient: "Abhinav",
    doctor: "Dr. Patel",
    department: "Orthopedics",
    time: "10:30 AM",
    status: "Confirmed",
  },
  {
    patient: "John Doe",
    doctor: "Dr. Williams",
    department: "General Medicine",
    time: "11:00 AM",
    status: "Cancelled",
  },
  // add more dummy appointments
  {
    patient: "Jane Doe",
    doctor: "Dr. Johnson",
    department: "Dermatology",
    time: "11:30 AM",
    status: "Confirmed",
  },
  {
    patient: "Alice Johnson",
    doctor: "Dr. Brown",
    department: "Oncology",
    time: "12:00 PM",
    status: "Pending",
  },
  {
    patient: "Aravindh",
    doctor: "Dr. White",
    department: "Pediatrics",
    time: "1:00 PM",
    status: "Confirmed",
  },
];

export default function Appointments() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <FaClipboardList className="text-purple-600 text-2xl" />
        <h3 className="text-xl font-bold text-purple-700">
          Upcoming Appointments
        </h3>
      </div>
      <ul>
        {appointments.map((appt, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 border-b"
          >
            <div className="flex items-center space-x-4">
              <FaUserMd className="text-blue-600 text-lg" />
              <div>
                <p className="font-medium text-gray-800">{appt.patient}</p>
                <p className="text-sm text-gray-500">
                  {appt.department} - {appt.doctor}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaClock className="text-gray-500" />
                <span className="text-gray-600 text-sm">{appt.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                {appt.status === "Confirmed" && (
                  <FaCheckCircle className="text-green-500" />
                )}
                {appt.status === "Pending" && (
                  <FaClock className="text-yellow-500" />
                )}
                {appt.status === "Cancelled" && (
                  <FaTimesCircle className="text-red-500" />
                )}
                <span className="text-gray-600 text-sm">{appt.status}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
