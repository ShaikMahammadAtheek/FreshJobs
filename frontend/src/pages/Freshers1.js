import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import "./Freshers1.css";

function Freshers1() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/jobs?category=Freshers") // Fetching Freshers category jobs
            .then((res) => res.json())
            .then((data) => {
                const filteredJobs = data.filter(job => job.category === "Freshers"); // Only Freshers jobs
                setJobs(filteredJobs.slice(0, 5)); // Display only 5 jobs
            })
            .catch((err) => console.log(err));
    }, []);

    // Split the jobs into two rows
    const firstRowJobs = jobs.slice(0, 2); // Jobs 1 and 2
    const secondRowJobs = jobs.slice(2, 5); // Jobs 3, 4, and 5

    return (
        <div className="freshers1-container">
            <h2>Top 5 Freshers Jobs</h2>

            <div className="job-list">
                {/* First Row - Two Jobs */}
                <div className="first-row">
                    {firstRowJobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>

                {/* Second Row - Three Jobs */}
                <div className="second-row">
                    <div className="scrollable-container">
                        {secondRowJobs.map((job) => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Freshers1;
