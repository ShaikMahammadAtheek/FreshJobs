
import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import "../styles/Internship.css";

function Internship() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 15;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs?category=Internship`);
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                const data = await response.json();
                const filteredJobs = data.filter(job => job.category === "Internship");
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
            <div className="internship-container">
                <h2>Latest Internship Opportunities</h2>

                {loading && <p>Loading jobs...</p>}
                {error && <p className="error">{error}</p>}
                {!loading && jobs.length === 0 && <p>No internships found.</p>}

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

export default Internship;









//Main ccode----------------------------------

// import React, { useState, useEffect } from "react";
// import JobCard from "../components/JobCard";
// import "../styles/Internship.css";

// function Internship() {
//     const [jobs, setJobs] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const jobsPerPage = 15;

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}/jobs?category=Internship`) // ✅ Correct API query
//             .then((res) => res.json())
//             .then((data) => {
//                 const filteredJobs = data.filter(job => job.category === "Internship"); // ✅ Ensures only "Internship" jobs are shown
//                 setJobs(filteredJobs); // ✅ Keeps order same as API response
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     // Pagination Logic
//     const indexOfLastJob = currentPage * jobsPerPage;
//     const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//     const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//     return (
//         <div className="internship-container">
//             <h2>Internship Jobs</h2>
//             <div className="job-list">
//                 {currentJobs.length > 0 ? (
//                     currentJobs.map((job) => <JobCard key={job._id} job={job} />)
//                 ) : (
//                     <p>No Internship jobs found</p> // ✅ Handles empty job list
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

// export default Internship;
