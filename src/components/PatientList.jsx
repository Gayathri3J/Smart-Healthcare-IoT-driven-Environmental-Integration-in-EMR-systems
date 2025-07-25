import { useState } from 'react';
import { FaEye, FaUserMd, FaHeartbeat } from 'react-icons/fa';

const patients = [
  {
    id: 1, name: 'Alice Johnson', status: 'Active | Fever', color: 'bg-blue-500', age: 30, gender: 'Female',
    medicalHistory: 'No known issues', treatmentProgress: 'Recovering from fever, treatment ongoing',
    allergies: 'None', medications: 'Paracetamol', doctor: 'Dr. Sarah Lee', emergencyContact: 'John Johnson (Father)',
  },
  {
    id: 2, name: 'Aravindh', status: 'Recovering | Pneumonia', color: 'bg-green-500', age: 45, gender: 'Male',
    medicalHistory: 'Recovering from Pneumonia', treatmentProgress: 'Ongoing recovery from pneumonia',
    allergies: 'None', medications: 'Amoxicillin', doctor: 'Dr. James Adams', emergencyContact: 'Rachel Adams (Wife)',
  },
  {
    id: 3, name: 'Muhammed Hasif', status: 'Severe | Cancer', color: 'bg-red-500', age: 50, gender: 'Male',
    medicalHistory: 'Lung Cancer, Chemotherapy ongoing', treatmentProgress: 'Chemotherapy in progress, improvement expected',
    allergies: 'Penicillin', medications: 'Methotrexate', doctor: 'Dr. Emily Jones', emergencyContact: 'Ali Hasif (Brother)',
  },
  {
    id: 4, name: 'Daisy Mathew', status: 'Moderate | Post Surgical', color: 'bg-yellow-500', age: 29, gender: 'Female',
    medicalHistory: 'Knee Surgery, Recovery Phase', treatmentProgress: 'Recovery from knee surgery, physical therapy',
    allergies: 'Dust', medications: 'Ibuprofen', doctor: 'Dr. Michael Brown', emergencyContact: 'Victor Mathew (Husband)',
  },
];

export default function PatientList() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPatient(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-blue-700 mb-4">Patients Overview</h3>
      <ul>
        {patients.map((patient) => (
          <li
            key={patient.id}
            onClick={() => handlePatientClick(patient)}
            className="flex justify-between items-center p-3 border-b cursor-pointer hover:bg-blue-50"
          >
            <div className="flex items-center space-x-3">
              <span className={`w-3 h-3 rounded-full ${patient.color}`}></span>
              <span className="font-medium">{patient.name}</span>
              <span className="text-gray-500 text-sm">{patient.status}</span>
            </div>
            <div className="flex space-x-3 text-gray-600">
              <FaEye className="cursor-pointer hover:text-blue-600" />
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && selectedPatient && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Patient Details</h3>
            <div className="mb-4">
              <p><strong>Name:</strong> {selectedPatient.name}</p>
              <p><strong>Age:</strong> {selectedPatient.age}</p>
              <p><strong>Gender:</strong> {selectedPatient.gender}</p>
              <p><strong>Status:</strong> {selectedPatient.status}</p>
              <p><strong>Medical History:</strong> {selectedPatient.medicalHistory}</p>
              <p><strong>Treatment Progress:</strong> {selectedPatient.treatmentProgress}</p>
              <p><strong>Allergies:</strong> {selectedPatient.allergies}</p>
              <p><strong>Medications:</strong> {selectedPatient.medications}</p>
              <p><strong>Doctor Assigned:</strong> {selectedPatient.doctor}</p>
              <p><strong>Emergency Contact:</strong> {selectedPatient.emergencyContact}</p>
            </div>
            {/* Icons for additional actions */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaUserMd className="text-green-500" />
                <span>View Doctor&apos;s Info</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaHeartbeat className="text-red-500" />
                <span>Check Treatment</span>
              </div>
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
