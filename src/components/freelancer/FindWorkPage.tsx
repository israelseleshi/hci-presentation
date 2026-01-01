import React, { useState, useMemo } from 'react';
import JobCard from '../public/SearchPage/JobCard';
import Pagination from '../public/SearchPage/Pagination';

const FindWorkPage: React.FC = () => {
  const allGigs = useMemo(() => [
    { id: 1, title: 'Website Redesign for Local Business', category: 'Web Design', description: 'Need a modern website redesign for our e-commerce store', location: 'Bole', budget: '5000 - 10000', postedTime: '2 hours ago', isNew: true },
    { id: 2, title: 'Plumbing Repair - Bathroom Renovation', category: 'Plumbing', description: 'Complete bathroom plumbing work including pipe installation', location: 'Kazanchis', budget: '2000 - 3500', postedTime: '4 hours ago', isNew: false },
    { id: 3, title: 'English Tutoring for High School Students', category: 'Tutoring', description: 'Need experienced English teacher for exam preparation', location: 'Bole', budget: '500 - 800', postedTime: '1 day ago', isNew: false },
    { id: 4, title: 'Graphic Designer for Logo Branding', category: 'Design', description: 'Create a new logo and branding guide for a startup.', location: 'Arada', budget: '3000 - 5000', postedTime: '2 days ago', isNew: true },
    { id: 5, title: 'Social Media Manager', category: 'Marketing', description: 'Manage social media accounts and create content.', location: 'Lideta', budget: '4000 - 6000', postedTime: '3 days ago', isNew: false },
    { id: 6, title: 'Mobile App Developer (React Native)', category: 'Software Development', description: 'Build a cross-platform mobile app.', location: 'Nifas Silk', budget: '25000 - 40000', postedTime: '5 days ago', isNew: false },
  ], []);

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [location, setLocation] = useState('All Locations');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(3);

  const filteredGigs = useMemo(() => {
    return allGigs.filter(gig => {
      const searchMatch = searchTerm === '' || gig.title.toLowerCase().includes(searchTerm.toLowerCase()) || gig.description.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = category === 'All Categories' || gig.category === category;
      const locationMatch = location === 'All Locations' || gig.location === location;
      return searchMatch && categoryMatch && locationMatch;
    });
  }, [allGigs, searchTerm, category, location]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentGigs = filteredGigs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const categories = useMemo(() => ['All Categories', ...Array.from(new Set(allGigs.map(gig => gig.category)))], [allGigs]);
  const locations = useMemo(() => ['All Locations', ...Array.from(new Set(allGigs.map(gig => gig.location)))], [allGigs]);

  return (
    <div className="px-md-4">
      <h1 className="fw-bold mb-2">Find Work</h1>
      <p className="text-muted mb-4">Browse available gigs and find your next opportunity</p>
      <div className="card shadow-sm border-light-subtle mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-12">
              <input type="text" className="form-control" placeholder="Search gigs by title or description..." onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="col-md-6">
              <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-select" value={location} onChange={e => setLocation(e.target.value)}>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted mb-3">Showing {currentGigs.length} of {filteredGigs.length} gigs</p>

      <div className="row">
        {currentGigs.map(gig => (
          <div className="col-md-4 mb-4" key={gig.id}>
            <JobCard {...gig} isDashboard={true} />
          </div>
        ))}
      </div>

      <Pagination jobsPerPage={jobsPerPage} totalJobs={filteredGigs.length} paginate={paginate} currentPage={currentPage} />
    </div>
  );
};

export default FindWorkPage;
