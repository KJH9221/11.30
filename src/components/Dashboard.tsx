import React from 'react';
import { ProgressChart } from './ProgressChart';
import { SubjectCard } from './SubjectCard';
import { Student } from '../types/study';
import { GraduationCap } from 'lucide-react';

interface DashboardProps {
  student: Student;
}

export const Dashboard: React.FC<DashboardProps> = ({ student }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <GraduationCap className="w-8 h-8 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-800">
          {student.name}의 학습 현황
        </h1>
      </div>
      
      <ProgressChart subjects={student.subjects} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {student.subjects.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};