import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import "../styles/Freshers.css";

function Freshers() {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 15;

    useEffect(() => {
        fetch("http://localhost:5000/api/jobs?category=Freshers") // ✅ Correct API query
            .then((res) => res.json())
            .then((data) => {
                const filteredJobs = data.filter(job => job.category === "Freshers"); // ✅ Ensures only "Freshers" jobs are shown
                setJobs(filteredJobs);
            })
            .catch((err) => console.log(err));
    }, []);

    // Pagination Logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <div className="freshers-container">
            <h2>Freshers Jobs</h2>
            <div className="job-list">
                {currentJobs.length > 0 ? (
                    currentJobs.map((job) => <JobCard key={job._id} job={job} />)
                ) : (
                    <p>No Freshers jobs found</p> // ✅ Handles empty job list
                )}
            </div>

            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={indexOfLastJob >= jobs.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Freshers;
