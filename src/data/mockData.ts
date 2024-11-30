import { Student } from '../types/study';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: '김학생',
    subjects: [
      {
        id: '1',
        name: '수학',
        progress: 75,
        memorizationProgress: 80,
        repetitionCount: 2,
        color: '#FF6B6B'
      },
      {
        id: '2',
        name: '영어',
        progress: 60,
        memorizationProgress: 65,
        repetitionCount: 1,
        color: '#4ECDC4'
      },
      {
        id: '3',
        name: '국어',
        progress: 90,
        memorizationProgress: 85,
        repetitionCount: 3,
        color: '#45B7D1'
      }
    ]
  }
];