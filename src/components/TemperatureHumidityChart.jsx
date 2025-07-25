import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { FaThermometerHalf, FaTint } from 'react-icons/fa';

const generateTempHumData = (temp,hum) => {
  const now = new Date();
  const data = [];

  for (let i = 5; i >= 0; i--) {
    const pastTime = new Date(now.getTime() - i * 2 * 60 * 60 * 1000); // Subtract 2-hour intervals
    const formattedTime = pastTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Random temperature between approx 36.1°C - 37.8°C
    data.push({
      time: formattedTime,
      temp: (Math.random() * (37.8 - 36.1) + 36.1).toFixed(1),
      hum: Math.floor(Math.random() * (55 - 40 + 1)) + 40, // Random humidity between 40% - 55%
    });
  }

  // Use the passed temp to update the last element if provided
  if (temp !== undefined) {
    data[data.length - 1].temp = temp;
    data[0].temp = temp-5;
  }
  if (hum !== undefined) {
    data[data.length - 1].hum = hum;
    data[0].hum = hum-4;
  }

  return data;
};

export default function TemperatureHumidityChart({ tempData , humData }) {
  const [tempHumData, setTempHumData] = useState(generateTempHumData(tempData,humData));

  useEffect(() => {
    setTempHumData(generateTempHumData(tempData,humData));
  }, [humData, tempData]);

  const currentTemp = tempHumData[tempHumData.length - 1]?.temp;
  const currentHum = tempHumData[tempHumData.length - 1]?.hum;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <FaThermometerHalf className="text-red-500 text-2xl" />
        <h3 className="text-lg font-bold text-blue-700">Temperature & Humidity Levels</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Monitoring real-time temperature (°C) and room humidity levels in hospital environment.
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={tempHumData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="time" />
          {/* Adjusted domain for Celsius values */}
          <YAxis domain={[35, 39]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#FF5733"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            animationDuration={1500}
            name="Body Temp (°C)"
          />
          <Line
            type="monotone"
            dataKey="hum"
            stroke="#0088FE"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            animationDuration={1500}
            name="Humidity (%)"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Current Temperature & Humidity Info */}
      <div className="mt-4 flex justify-between items-center text-gray-600 text-sm">
        <div className="flex items-center space-x-2">
          <FaThermometerHalf className="text-red-500" />
          <p>
            Current Temp: <span className="font-semibold text-gray-800">{currentTemp}°C</span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FaTint className="text-blue-500" />
          <p>
            Current Humidity: <span className="font-semibold text-gray-800">{currentHum}%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
