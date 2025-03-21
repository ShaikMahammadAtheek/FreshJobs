// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/JobDetails.css";

// function JobDetails() {
//     const { id } = useParams();
//     const [job, setJob] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchJobDetails = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/api/jobs/${id}`);
//                 if (!response.ok) {
//                     throw new Error("Job not found");
//                 }
//                 const data = await response.json();
//                 setJob(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchJobDetails();
//     }, [id]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p className="error">{error}</p>;

//     return (
//         <div className="job-details-container">
//             <div className="job-details">
//                 <h2>{job.title}</h2>
//                 <img src={job.imageUrl} alt={job.title} className="job-detail-image" />
//                 <p><strong>Category:</strong> {job.category}</p>
//                 <p><strong>Posted Date:</strong> {new Date(job.postedDate).toDateString()}</p>
//                 <p><strong>Description:</strong> {job.description || "No description available"}</p>
                
//                 {/* ✅ Changed Apply Button to a Styled Link */}
//                 <a href={job.applyLink} className="apply-btn">
//                     Apply Now
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default JobDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/JobDetails.css";

// function JobDetails() {
//     const { id } = useParams();
//     const [job, setJob] = useState(null);
//     const [relatedJobs, setRelatedJobs] = useState([]);
//     const [latestJobs, setLatestJobs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchJobDetails = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/api/jobs/${id}`);
//                 if (!response.ok) {
//                     throw new Error("Job not found");
//                 }
//                 const data = await response.json();
//                 setJob(data);

//                 // Fetch related jobs based on category
//                 const relatedResponse = await fetch(`http://localhost:5000/api/jobs/category/${data.category}`);
//                 const relatedData = await relatedResponse.json();
//                 setRelatedJobs(relatedData.slice(0, 5)); // Show 5 related jobs

//                 // Fetch latest 10 jobs
//                 const latestResponse = await fetch(`http://localhost:5000/api/jobs`);
//                 const latestData = await latestResponse.json();
//                 setLatestJobs(latestData.slice(0, 10)); // Show 10 latest jobs

//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchJobDetails();
//     }, [id]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p className="error">{error}</p>;

//     return (
//         <div className="job-details-container">
//             {/* Left Section - Job Details & Related Jobs */}
//             <div className="left-section">
//                 <h2 className="job-titles">{job.title}</h2>
//                 <p className="company">Company:--{job.company}</p>
//                 <p className="posted-date">Posted on: {new Date(job.postedDate).toDateString()}</p>
//                 <img src={job.imageUrl} alt={job.title} className="job-detail-image" />
//                 <p className="description">{job.description}</p>

//                 <h2 className="job-title red-title">{job.title}</h2>
                
//                 {/* Headings Section */}
//                 {job.headings.map((section, index) => (
//                     <div key={index} className="job-section">
//                         <h3>{section.heading}</h3>
//                         {section.content.map((item, idx) => (
//                             <p key={idx}>{item}</p>
//                         ))}
//                     </div>
//                 ))}

//                 <a href={job.applyLink} className="apply-btn">Apply Now</a>

//                 {/* Related Jobs */}
//                 <h3 className="related-jobs-title">Related {job.category} Jobs</h3>
//                 <div className="related-jobs">
//                     {relatedJobs.map((relatedJob) => (
//                         <div key={relatedJob._id} className="related-job-card">
//                             <img src={relatedJob.imageUrl} alt={relatedJob.title} />
//                             <p>{relatedJob.title}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Right Section - Latest Jobs */}
//             <div className="right-section">
//                 <h3 className="latest-jobs-title">Latest Jobs</h3>
//                 {latestJobs.map((latestJob) => (
//                     <div key={latestJob._id} className="latest-job-card">
//                         <img src={latestJob.imageUrl} alt={latestJob.title} />
//                         <p>{latestJob.title}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default JobDetails;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/JobDetails.css";

function JobDetails() {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [relatedJobs, setRelatedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs/${id}`);
                if (!response.ok) {
                    throw new Error("Job not found");
                }
                const data = await response.json();
                setJob(data);

                // Fetch related jobs based on category
                const relatedResponse = await fetch(`${process.env.REACT_APP_API_URL}/jobs/category/${data.category}`);
                const relatedData = await relatedResponse.json();
                setRelatedJobs(relatedData.slice(0, 5)); // Show 5 related jobs
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="job-details-container">
            {/* Left Section - Job Details & Related Jobs */}
            <div className="left-section">
                <h2 className="job-titles">{job.title}</h2>
                <p className="company">Company: {job.company}</p>
                <p className="posted-date">Posted on: {new Date(job.postedDate).toDateString()}</p>
                <img src={job.imageUrl} alt={job.title} className="job-detail-image" />
                <p className="description">{job.description}</p>

                <h2 className="job-title red-title">{job.title}</h2>
                
                {/* Headings Section */}
                {job.headings.map((section, index) => (
                    <div key={index} className="job-section">
                        <h3>{section.heading}</h3>
                        {section.content.map((item, idx) => (
                            <p key={idx}>{item}</p>
                        ))}
                    </div>
                ))}

                <a href={job.applyLink} className="apply-btn">Apply Now</a>

                {/* Related Jobs */}
                <h3 className="related-jobs-title">Related {job.category} Jobs</h3>
                <div className="related-jobs">
                    {relatedJobs.map((relatedJob) => (
                        <div key={relatedJob._id} className="related-job-card">
                            <img src={relatedJob.imageUrl} alt={relatedJob.title} />
                            <p>{relatedJob.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default JobDetails;
