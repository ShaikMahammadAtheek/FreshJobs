import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import "../styles/Internship.css";

function Internship() {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 15;

    useEffect(() => {
        fetch("http://localhost:5000/api/jobs?category=Internship") // ✅ Correct API query
            .then((res) => res.json())
            .then((data) => {
                const filteredJobs = data.filter(job => job.category === "Internship"); // ✅ Ensures only "Internship" jobs are shown
                setJobs(filteredJobs); // ✅ Keeps order same as API response
            })
            .catch((err) => console.log(err));
    }, []);

    // Pagination Logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <div className="internship-container">
            <h2>Internship Jobs</h2>
            <div className="job-list">
                {currentJobs.length > 0 ? (
                    currentJobs.map((job) => <JobCard key={job._id} job={job} />)
                ) : (
                    <p>No Internship jobs found</p> // ✅ Handles empty job list
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

export default Internship;
