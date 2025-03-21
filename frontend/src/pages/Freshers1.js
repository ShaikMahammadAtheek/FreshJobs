// import React, { useState, useEffect } from "react";
// import "./Freshers1.css";

// const Freshers1 = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/jobs?category=Freshers")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredJobs = data.filter(job => job.category === "Freshers");
//         setJobs(filteredJobs);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="experience-section">
//       <h2 className="experience-title">Fresher Job Openings</h2>
//       <div className="job-grid">
//         {jobs.length > 0 ? (
//           jobs.slice(0, 5).map((job) => (
//             <div key={job._id} className="job-item">
//               <img src={job.imageUrl} alt={job.title} />
//               <h3>{job.title}</h3>
//             </div>
//           ))
//         ) : (
//           <p>No Fresher jobs found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Freshers1;




import React, { useState, useEffect } from "react";
import "./Experience1.css";

const Freshers1 = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/jobs?category=Freshers`)
      .then((res) => res.json())
      .then((data) => {
        const filteredJobs = data.filter(job => job.category === "Freshers");
        setJobs(filteredJobs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="experience-section">
      <h2 className="experience-title">Experience Job Openings</h2>
      <div className="job-grid">
        {jobs.length > 0 ? (
          jobs.slice(0, 6).map((job) => (
            <div key={job._id} className="job-item">
              <img src={job.imageUrl} alt={job.title} />
              <h3>{job.title}</h3>
            </div>
          ))
        ) : (
          <p>No Experience jobs found</p>
        )}
      </div>
    </div>
  );
};

export default Freshers1;
