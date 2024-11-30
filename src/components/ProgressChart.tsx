import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Subject } from '../types/study';

interface ProgressChartProps {
  subjects: Subject[];
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ subjects }) => {
  const data = subjects.map(subject => ({
    name: subject.name,
    진도: subject.progress,
    암기: subject.memorizationProgress,
    회독: subject.repetitionCount * 20, // Scale repetition count for visualization
  }));

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">학습 진도 현황</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="진도" fill="#FF6B6B" />
          <Bar dataKey="암기" fill="#4ECDC4" />
          <Bar dataKey="회독" fill="#45B7D1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};