
import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import "../styles/Freshers.css";

function Freshers() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 15;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs?category=Freshers`);
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                const data = await response.json();
                const filteredJobs = data.filter(job => job.category === "Freshers");
                setJobs(filteredJobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setError("Error loading jobs. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    // Pagination Logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <>
            <div className="freshers-container">
                <h2>Latest Freshers Job Opportunities</h2>

                {loading && <p>Loading jobs...</p>}
                {error && <p className="error">{error}</p>}
                {!loading && jobs.length === 0 && <p>No fresher jobs found.</p>}

                <div className="job-list">
                    {currentJobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>

                {jobs.length > 0 && (
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
                )}
            </div>
        </>
    );
}

export default Freshers;







//Main Code------------------------------------------------------


// import React, { useState, useEffect } from "react";
// import JobCard from "../components/JobCard";
// import "../styles/Freshers.css";

// function Freshers() {
//     const [jobs, setJobs] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const jobsPerPage = 15;

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}/jobs?category=Freshers`) // ✅ Correct API query
//             .then((res) => res.json())
//             .then((data) => {
//                 const filteredJobs = data.filter(job => job.category === "Freshers"); // ✅ Ensures only "Freshers" jobs are shown
//                 setJobs(filteredJobs);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     // Pagination Logic
//     const indexOfLastJob = currentPage * jobsPerPage;
//     const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//     const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//     return (
//         <div className="freshers-container">
//             <h2>Freshers Jobs</h2>
//             <div className="job-list">
//                 {currentJobs.length > 0 ? (
//                     currentJobs.map((job) => <JobCard key={job._id} job={job} />)
//                 ) : (
//                     <p>No Freshers jobs found</p> // ✅ Handles empty job list
//                 )}
//             </div>

//             <div className="pagination">
//                 <button
//                     onClick={() => setCurrentPage(currentPage - 1)}
//                     disabled={currentPage === 1}
//                 >
//                     Previous
//                 </button>
//                 <span>Page {currentPage}</span>
//                 <button
//                     onClick={() => setCurrentPage(currentPage + 1)}
//                     disabled={indexOfLastJob >= jobs.length}
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Freshers;
