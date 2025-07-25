import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { FaVolumeUp } from 'react-icons/fa';

// Function to generate past timestamps dynamically
const generateNoiseData = (noise) => {
  const now = new Date();
  const data = [];

  for (let i = 5; i >= 0; i--) {
    const pastTime = new Date(now.getTime() - i * 2 * 60 * 60 * 1000); // Subtract 2-hour intervals
    const formattedTime = pastTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    data.push({
      time: formattedTime,
      noise: Math.floor(Math.random() * (70 - 50 + 1)) + 50, // Random noise level between 50-70 dB
    });
  }
  if(noise){
    data[data.length - 1].noise = noise;
    data[0].noise = noise-5;
  }
  return data;
};

export default function NoiseLevelChart({noise}) {
  
  const [noiseLevelData, setNoiseLevelData] = useState(generateNoiseData(noise));

  useEffect(() => {
    setNoiseLevelData(generateNoiseData(noise));
  }, [noise]);

  const currentNoiseLevel = noiseLevelData[noiseLevelData.length - 1]?.noise;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <FaVolumeUp className="text-red-500 text-2xl" />
        <h3 className="text-lg font-bold text-red-700">Noise Levels (dB)</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Monitoring real-time ambient noise levels in the hospital environment.
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={noiseLevelData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="time" />
          <YAxis domain={[50, 75]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="noise"
            stroke="#FF5733"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            animationDuration={1500}
            name="Noise Level (dB)"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Current Noise Level Info */}
      <div className="mt-4 flex justify-between items-center text-gray-600 text-sm">
        <div className="flex items-center space-x-2">
          <FaVolumeUp className="text-red-500" />
          <p>Current Noise Level: <span className="font-semibold text-gray-800">{currentNoiseLevel} dB</span></p>
        </div>
      </div>
    </div>
  );
}
