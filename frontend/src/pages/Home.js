import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import "../styles/Home.css";

import Freshers1 from "./Freshers1";
import Internship1 from "./Internship1";
import Experience1 from "./Experience1";


function Home() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 15;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs`);
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                const data = await response.json();
                setJobs(data);
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
            <div className="home-container">
                <h2>Latest Trending Jobs</h2>

                {loading && <p>Loading jobs...</p>}
                {error && <p className="error">{error}</p>}
                {!loading && jobs.length === 0 && <p>No jobs found.</p>}

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
         <Freshers1/>
         <Internship1/>
         <Experience1/>
            </div>
        </>
    );
}

export default Home;




//Main Code---------------------------------------------------------------


// import React, { useState, useEffect } from "react";
// import JobCard from "../components/JobCard";
// import "../styles/Home.css";
// import Freshers1 from "./Freshers1";
// import Internship1 from "./Internship1";
// import Experience1 from "./Experience1";

// function Home() {
//     const [jobs, setJobs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const jobsPerPage = 15;

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs`);
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch jobs");
//                 }
//                 const data = await response.json();
//                 setJobs(data);
//             } catch (error) {
//                 console.error("Error fetching jobs:", error);
//                 setError("Error loading jobs. Please try again.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchJobs();
//     }, []);

//     // Pagination Logic
//     const indexOfLastJob = currentPage * jobsPerPage;
//     const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//     const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//     return (
//         <>
//         <div className="home-container">
//             <h2>Latest Trending Jobs</h2>

//             {loading && <p>Loading jobs...</p>}
//             {error && <p className="error">{error}</p>}
//             {!loading && jobs.length === 0 && <p>No jobs found.</p>}

//             <div className="job-list">
//                 {currentJobs.map((job) => (
//                     <JobCard key={job._id} job={job} />
//                 ))}
//             </div>

//             {jobs.length > 0 && (
//                 <div className="pagination">
//                     <button
//                         onClick={() => setCurrentPage(currentPage - 1)}
//                         disabled={currentPage === 1}
//                     >
//                         Previous
//                     </button>
//                     <span>Page {currentPage}</span>
//                     <button
//                         onClick={() => setCurrentPage(currentPage + 1)}
//                         disabled={indexOfLastJob >= jobs.length}
//                     >
//                         Next
//                     </button>
//                 </div>
//             )}
//         </div>
//         <Freshers1/>
//         <Internship1/>
//         <Experience1/>
//         </>
//     );
// }

// export default Home;






























// import React, { useState, useEffect } from "react";
// import JobCard from "../components/JobCard";
// import "../styles/Home.css";


// function Home() {
//     const [jobs, setJobs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const jobsPerPage = 15;

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/jobs");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch jobs");
//                 }
//                 const data = await response.json();
//                 setJobs(data);
//             } catch (error) {
//                 console.error("Error fetching jobs:", error);
//                 setError("Error loading jobs. Please try again.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchJobs();
//     }, []);

//     // Pagination Logic
//     const indexOfLastJob = currentPage * jobsPerPage;
//     const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//     const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//     // Categorize Jobs
//     const freshersJobs = jobs.filter(job => job.category === "Freshers").slice(0, 5);
//     const internships = jobs.filter(job => job.category === "Internship").slice(0, 5);
//     const experienceJobs = jobs.filter(job => job.category === "Experience").slice(0, 5);

//     return (
//         <div className="home-container">
//             <h2>Latest Jobs</h2>

//             {loading && <p>Loading jobs...</p>}
//             {error && <p className="error">{error}</p>}
//             {!loading && jobs.length === 0 && <p>No jobs found.</p>}

//             <div className="job-list">
//                 {currentJobs.map((job) => (
//                     <JobCard key={job._id} job={job} />
//                 ))}
//             </div>

//             {jobs.length > 0 && (
//                 <div className="pagination">
//                     <button
//                         onClick={() => setCurrentPage(currentPage - 1)}
//                         disabled={currentPage === 1}
//                     >
//                         Previous
//                     </button>
//                     <span>Page {currentPage}</span>
//                     <button
//                         onClick={() => setCurrentPage(currentPage + 1)}
//                         disabled={indexOfLastJob >= jobs.length}
//                     >
//                         Next
//                     </button>
//                 </div>
//             )}

//             {/* Freshers Jobs */}
//             {freshersJobs.length > 0 && (
//                 <div className="category-container">
//                     <h3>Freshers Jobs</h3>
//                     <div className="grid-layout">
//                         {freshersJobs.slice(0, 2).map((job) => (
//                             <JobCard key={job._id} job={job} />
//                         ))}
//                     </div>
//                     <div className="grid-layout">
//                         {freshersJobs.slice(2, 5).map((job) => (
//                             <JobCard key={job._id} job={job} />
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Internships */}
//             {internships.length > 0 && (
//                 <div className="category-container">
//                     <h3>Internships</h3>
//                     <div className="grid-layout">
//                         {internships.slice(0, 2).map((job) => (
//                             <JobCard key={job._id} job={job} />
//                         ))}
//                     </div>
//                     <div className="grid-layout">
//                         {internships.slice(2, 5).map((job) => (
//                             <JobCard key={job._id} job={job} />
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Experience Jobs */}
//             {experienceJobs.length > 0 && (
//                 <div className="category-container">
//                     <h3>Experience Jobs</h3>
//                     <div className="grid-layout">
//                         {experienceJobs.slice(0, 2).map((job) => (
//                             <JobCard key={job._id} job={job} />
//                         ))}
//                     </div>
//                     <div className="grid-layout">
//                         {experienceJobs.slice(2, 5).map((job) => (
//                             <JobCard key={job._id} job={job} />
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Home;
