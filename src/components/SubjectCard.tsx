import React from 'react';
import { BookOpen, Brain, Repeat } from 'lucide-react';
import { Subject } from '../types/study';

interface SubjectCardProps {
  subject: Subject;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold" style={{ color: subject.color }}>{subject.name}</h3>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span className="text-gray-600">진도</span>
          </div>
          <span className="font-semibold">{subject.progress}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            <span className="text-gray-600">암기</span>
          </div>
          <span className="font-semibold">{subject.memorizationProgress}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Repeat className="w-5 h-5" />
            <span className="text-gray-600">회독</span>
          </div>
          <span className="font-semibold">{subject.repetitionCount}회</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${subject.progress}%`,
              backgroundColor: subject.color
            }}
          />
        </div>
      </div>
    </div>
  );
};