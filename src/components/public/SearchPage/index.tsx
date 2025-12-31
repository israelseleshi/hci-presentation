import React, { useState } from 'react';
import Header from '../LandingPage/Header';
import JobCard from './JobCard';
import Pagination from './Pagination';
import { FaSearch } from 'react-icons/fa';

const SearchPage: React.FC = () => {
  const allJobs = [
    { id: 1, title: 'Website Redesign for Local Business', category: 'Web Design', description: 'Need a modern website redesign for our e-commerce store', location: 'Bole', budget: '5000 - 10000', postedTime: '2 hours ago', isNew: true },
    { id: 2, title: 'Plumbing Repair - Bathroom Renovation', category: 'Plumbing', description: 'Complete bathroom plumbing work including pipe installation', location: 'Kazanchis', budget: '2000 - 3500', postedTime: '4 hours ago', isNew: false },
    { id: 3, title: 'English Tutoring for High School Students', category: 'Tutoring', description: 'Need experienced English teacher for exam preparation', location: 'Bole', budget: '500 - 800', postedTime: '1 day ago', isNew: false },
    { id: 4, title: 'Electrical Installation - Office Setup', category: 'Electrical', description: 'Office electrical wiring and installation project', location: 'Nifas Silk', budget: '3000 - 5000', postedTime: '6 hours ago', isNew: true },
    { id: 5, title: 'Mobile App Development', category: 'Software Development', description: 'Build a custom mobile app for inventory management.', location: 'Bole', budget: '15000 - 25000', postedTime: '3 days ago', isNew: false },
    { id: 6, title: 'Graphic Design - Logo Creation', category: 'Design', description: 'Professional logo design for startup company', location: 'Kazanchis', budget: '1500 - 3000', postedTime: '5 hours ago', isNew: true },
    { id: 7, title: 'Content Writer for Tech Blog', category: 'Writing', description: 'Seeking a skilled content writer for a technology blog.', location: 'Remote', budget: '1000 - 2000', postedTime: '2 days ago', isNew: false },
    { id: 8, title: 'Social Media Manager', category: 'Marketing', description: 'Manage social media accounts for a fast-growing startup.', location: 'Bole', budget: '4000 - 6000', postedTime: '8 hours ago', isNew: true },
    { id: 9, title: 'Data Entry Specialist', category: 'Admin', description: 'Accurate and efficient data entry specialist needed.', location: 'Kazanchis', budget: '1500 - 2500', postedTime: '3 days ago', isNew: false },
    { id: 10, title: 'Video Editor for YouTube Channel', category: 'Video Production', description: 'Creative video editor for a gaming YouTube channel.', location: 'Remote', budget: '3000 - 5000', postedTime: '1 day ago', isNew: true },
    { id: 11, title: 'House Painter for Residential Project', category: 'Painting', description: 'Experienced house painter for a 3-bedroom house.', location: 'Nifas Silk', budget: '8000 - 12000', postedTime: '5 days ago', isNew: false },
    { id: 12, title: 'Personal Fitness Trainer', category: 'Fitness', description: 'Certified personal trainer for one-on-one sessions.', location: 'Bole', budget: '2000 - 4000', postedTime: '6 hours ago', isNew: true },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = allJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="mb-4">
          <h1 className="fw-bold">Find Work</h1>
          <p className="text-muted">Browse available gigs and find your next opportunity</p>
        </div>

        <div className="bg-white p-4 rounded shadow-sm mb-4 border border-light-subtle">
          <div className="input-group input-group-lg mb-3">
            <span className="input-group-text bg-white border-end-0">
              <FaSearch className="text-muted" />
            </span>
            <input type="text" className="form-control border-start-0" placeholder="Search gigs by title or description..." />
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="category" className="form-label">Category</label>
              <select id="category" className="form-select">
                <option selected>All Categories</option>
                <option>Web Design</option>
                <option>Plumbing</option>
                <option>Tutoring</option>
                <option>Electrical</option>
                <option>Software Development</option>
                <option>Design</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="location" className="form-label">Location</label>
              <select id="location" className="form-select">
                <option selected>All Locations</option>
                <option>Bole</option>
                <option>Kazanchis</option>
                <option>Nifas Silk</option>
              </select>
            </div>
          </div>
        </div>
        
        <p className="text-muted mb-3">Showing {currentJobs.length} of {allJobs.length} gigs</p>

        <div className="row g-4">
          {currentJobs.map((job) => (
            <div className="col-md-4" key={job.id}>
              <JobCard {...job} />
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Pagination jobsPerPage={jobsPerPage} totalJobs={allJobs.length} paginate={paginate} currentPage={currentPage} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;