// src/components/PatientDetails.jsx
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from 'recharts'
import PropTypes from 'prop-types'
  
  function PatientDetails({ patient }) {
    // Create dummy time-series data for demonstration.
    const chartData = [
      { time: '10:00', temp: patient.sensorData.temp, hum: patient.sensorData.hum },
      {
        time: '10:05',
        temp: patient.sensorData.temp + Number((Math.random() * 0.5).toFixed(2)),
        hum: patient.sensorData.hum + Number((Math.random() * 5).toFixed(2)),
      },
      {
        time: '10:10',
        temp: patient.sensorData.temp + Number((Math.random() * 0.5).toFixed(2)),
        hum: patient.sensorData.hum + Number((Math.random() * 5).toFixed(2)),
      },
    ]
  
    return (
      <div className="p-4 bg-white rounded-lg shadow-lg animate-fadeIn">
        <h3 className="text-2xl font-bold mb-4">{patient.name}&apos;s Details</h3>
        <div className="mb-4 space-y-1">
          <p className="text-gray-700">
            <strong>Age:</strong> {patient.age}
          </p>
          <p className="text-gray-700">
            <strong>Temperature:</strong> {patient.sensorData.temp} °F
          </p>
          <p className="text-gray-700">
            <strong>Humidity:</strong> {patient.sensorData.hum} %
          </p>
          <p className="text-gray-700">
            <strong>Air Quality:</strong> {patient.sensorData.air} AQI
          </p>
          <p className="text-gray-700">
            <strong>Noise Level:</strong> {patient.sensorData.noise} dB
          </p>
        </div>
        <h4 className="text-xl font-semibold mb-2">Sensor Data Over Time</h4>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            name="Temp (°F)"
            isAnimationActive={true}
            animationDuration={1500}
          />
          <Line
            type="monotone"
            dataKey="hum"
            stroke="#82ca9d"
            name="Humidity (%)"
            isAnimationActive={true}
            animationDuration={1500}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    )
  }
  PatientDetails.propTypes = {
    patient: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      sensorData: PropTypes.shape({
        temp: PropTypes.number.isRequired,
        hum: PropTypes.number.isRequired,
        air: PropTypes.number.isRequired,
        noise: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }
  export default PatientDetails
  