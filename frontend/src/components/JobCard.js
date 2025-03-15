import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JobCard.css";  

function JobCard({ job }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/job/${job._id}`);
    };

    // Function to format date as DD-Month-YYYY
    const formatDate = (dateString) => {
        const months = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
        const dateObj = new Date(dateString);
        const day = dateObj.getDate().toString().padStart(2, "0"); // Ensures 2-digit day
        const month = months[dateObj.getMonth()]; // Gets month name
        const year = dateObj.getFullYear(); // Gets year
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="job-card" onClick={handleClick}>
            <img src={job.imageUrl} alt={job.title} className="job-image" />
            <div className="job-info">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-category">Category: {job.category}</p>
                <p className="job-date">Posted: {formatDate(job.postedDate)}</p>
            </div>
        </div>
    );
}

export default JobCard;
