import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './App.css';
import Papa from 'papaparse';

const App = () => {
  const [data, setData] = useState(null);

  const fetchAndParseData = async () => {
    const response = await axios.get('https://www.terriblytinytales.com/test.txt');
    const words = response.data.split(/\s+/);
    const frequencyMap = {};

    words.forEach((word) => {
      const lowerCaseWord = word.toLowerCase();
      frequencyMap[lowerCaseWord] = (frequencyMap[lowerCaseWord] || 0) + 1;
    });

    const sortedWords = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);
    const topWords = sortedWords.slice(0, 20).map(([word, count]) => ({ word, count }));

    setData(topWords);
  };

  const exportCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'word-frequency.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="buttons-container">
        <button onClick={fetchAndParseData}>Submit</button>
        {data && <button onClick={exportCSV}>Export</button>}
      </div>
      {data && (
        <div className="chart-container">
          <BarChart
            width={1000}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      )}
    </div>
  );
};

export default App;
