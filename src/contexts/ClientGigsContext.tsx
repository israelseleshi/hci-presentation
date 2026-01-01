import React, { createContext, useState, useContext, type ReactNode } from 'react';

interface Gig {
  id: number;
  title: string;
  status: 'Active' | 'Completed';
  postedAt: string;
}

interface ClientGigsContextType {
  gigs: Gig[];
  addGig: (gig: Gig) => void;
}

const ClientGigsContext = createContext<ClientGigsContextType | undefined>(undefined);

export const useClientGigs = () => {
  const context = useContext(ClientGigsContext);
  if (!context) {
    throw new Error('useClientGigs must be used within a ClientGigsProvider');
  }
  return context;
};

export const ClientGigsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gigs, setGigs] = useState<Gig[]>([
    { id: 1, title: 'Website Redesign', status: 'Active', postedAt: '2025-12-25' },
    { id: 2, title: 'Plumbing Repair', status: 'Completed', postedAt: '2025-11-20' },
  ]);

  const addGig = (gig: Gig) => {
    setGigs(prevGigs => [...prevGigs, gig]);
  };

  return (
    <ClientGigsContext.Provider value={{ gigs, addGig }}>
      {children}
    </ClientGigsContext.Provider>
  );
};
