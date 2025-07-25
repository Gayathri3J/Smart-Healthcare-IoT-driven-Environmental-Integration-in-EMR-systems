import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { FaWind } from 'react-icons/fa';

// Function to generate past time values dynamically
const generateAirQualityData = (airQ) => {
  const now = new Date();
  const data = [];

  for (let i = 5; i >= 0; i--) {
    const pastTime = new Date(now.getTime() - i * 2 * 60 * 60 * 1000); // Subtract 2-hour intervals
    const formattedTime = pastTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    data.push({
      time: formattedTime,
      air: Math.floor(Math.random() * (150 - 50 + 1)) + 50, // Random AQI between 50-150 (practical real-world values)
    });
  }
  if(airQ){
    data[data.length - 1].air = airQ;
    data[0].air = airQ-5;
  }
  return data;
};

export default function AirQualityChart({airQ}) {
  const [airQualityData, setAirQualityData] = useState(generateAirQualityData(airQ));

  useEffect(() => {
    setAirQualityData(generateAirQualityData(airQ));
  }, [airQ]);

  const currentAirQuality = airQualityData[airQualityData.length - 1]?.air;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <FaWind className="text-green-500 text-2xl" />
        <h3 className="text-lg font-bold text-green-700">Air Quality (AQI)</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Monitoring air quality levels in real-time for a safer hospital environment.
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={airQualityData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="time" />
          <YAxis domain={[10, 35]} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="air"
            fill="#00C49F"
            animationDuration={1500}
            name="Air Quality Index"
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Current Air Quality Info */}
      <div className="mt-4 flex justify-between items-center text-gray-600 text-sm">
        <div className="flex items-center space-x-2">
          <FaWind className="text-green-500" />
          <p>Current AQI: <span className="font-semibold text-gray-800">{currentAirQuality}</span></p>
        </div>
      </div>
    </div>
  );
}
