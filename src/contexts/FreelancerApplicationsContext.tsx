import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface FreelancerApplication {
  id: number;
  gigId: number;
  gigTitle: string;
  clientName: string;
  status: 'Accepted' | 'Pending' | 'Rejected';
  dateApplied: string;
  description: string;
  budget: string;
}

interface FreelancerApplicationsContextType {
  applications: FreelancerApplication[];
  addApplication: (application: FreelancerApplication) => void;
}

const FreelancerApplicationsContext = createContext<FreelancerApplicationsContextType | undefined>(undefined);

export const useFreelancerApplications = (): FreelancerApplicationsContextType => {
  const ctx = useContext(FreelancerApplicationsContext);
  if (!ctx) {
    throw new Error('useFreelancerApplications must be used within a FreelancerApplicationsProvider');
  }
  return ctx;
};

export const FreelancerApplicationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [applications, setApplications] = useState<FreelancerApplication[]>([
    {
      id: 1,
      gigId: 1,
      gigTitle: 'E-commerce Platform Development',
      clientName: 'Shopify Inc.',
      status: 'Accepted',
      dateApplied: '2025-12-28',
      description: 'Building a full-stack e-commerce platform with React and Node.js.',
      budget: '150,000 Birr',
    },
    {
      id: 2,
      gigId: 2,
      gigTitle: 'Mobile App UI/UX Design',
      clientName: 'Creative Solutions',
      status: 'Pending',
      dateApplied: '2025-12-26',
      description: 'Designing a modern and intuitive user interface for a new mobile application.',
      budget: '80,000 Birr',
    },
  ]);

  const addApplication = (application: FreelancerApplication) => {
    setApplications((prev) => [...prev, application]);
  };

  return (
    <FreelancerApplicationsContext.Provider value={{ applications, addApplication }}>
      {children}
    </FreelancerApplicationsContext.Provider>
  );
};
