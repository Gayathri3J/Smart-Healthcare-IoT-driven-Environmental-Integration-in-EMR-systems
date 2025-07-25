import { useState } from 'react';
import { FaStethoscope } from 'react-icons/fa';

const doctors = [
  { 
    name: 'Dr. Samuel', 
    status: 'Available for consultation', 
    specialty: 'Cardiology', 
    contact: '123-456-7890', 
    officeHours: 'Mon-Fri: 9 AM - 5 PM', 
    recentConsultations: '5 consultations this week'
  },
  { 
    name: 'Dr. John Smith', 
    status: 'Currently in surgery', 
    specialty: 'Orthopedics', 
    contact: '987-654-3210', 
    officeHours: 'Mon, Wed, Fri: 10 AM - 4 PM',
    recentConsultations: '2 surgeries today'
  },
  { 
    name: 'Dr. Johnson', 
    status: 'Available for follow-up', 
    specialty: 'Pediatrics', 
    contact: '555-666-7777', 
    officeHours: 'Tue-Thu: 8 AM - 3 PM', 
    recentConsultations: 'Follow-up consultations for 3 patients'
  }
];

export default function DoctorList() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold text-green-700 mb-4">Doctors Information</h3>
      <ul>
        {doctors.map((doctor) => (
          <li 
            key={doctor.name} 
            onClick={() => handleDoctorClick(doctor)} 
            className="flex items-center space-x-3 p-3 border-b cursor-pointer hover:bg-green-50"
          >
            <FaStethoscope className="text-green-600" />
            <div>
              <span className="font-medium text-gray-800">{doctor.name}</span>
              <div className="text-sm text-gray-500">{doctor.status}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && selectedDoctor && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold text-green-700 mb-4">Doctor Details</h3>
            <div className="mb-4">
              <p><strong>Name:</strong> {selectedDoctor.name}</p>
              <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
              <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
              <p><strong>Office Hours:</strong> {selectedDoctor.officeHours}</p>
              <p><strong>Recent Consultations:</strong> {selectedDoctor.recentConsultations}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
