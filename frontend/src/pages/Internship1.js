// import React, { useState, useEffect } from "react";
// import "./Internship1.css";

// const Internship1 = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/jobs?category=Internship")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredJobs = data.filter(job => job.category === "Internship");
//         setJobs(filteredJobs);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="experience-section">
//       <h2 className="experience-title">Internship Job Openings</h2>
//       <div className="job-grid">
//         {jobs.length > 0 ? (
//           jobs.slice(0, 5).map((job) => (
//             <div key={job._id} className="job-item">
//               <img src={job.imageUrl} alt={job.title} />
//               <h3>{job.title}</h3>
//             </div>
//           ))
//         ) : (
//           <p>No Internship jobs found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Internship1;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Experience1.css";

const Internship1 = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/jobs?category=Internship`)
      .then((res) => res.json())
      .then((data) => {
        const filteredJobs = data.filter(job => job.category === "Internship");
        setJobs(filteredJobs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="experience-section">
      <h2 className="experience-title">Internship Openings</h2>
      <div className="job-grid">
        {jobs.length > 0 ? (
          jobs.slice(0, 6).map((job) => (
            <div 
              key={job._id} 
              className="job-item"
              onClick={() => navigate(`/job/${job._id}`)} // Navigate to job details page
              style={{ cursor: "pointer" }} // Ensures it looks clickable, but no hover effects
            >
              <img src={job.imageUrl} alt={job.title} />
              <h3>{job.title}</h3>
            </div>
          ))
        ) : (
          <p>No Internship jobs found</p>
        )}
      </div>
    </div>
  );
};

export default Internship1;
