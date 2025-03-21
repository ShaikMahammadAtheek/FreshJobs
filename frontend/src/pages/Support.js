import React, { useState } from "react";
import "../styles/Support.css";

function Support() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/support`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus(data.message);
                setFormData({ name: "", email: "", message: "" }); // ✅ Clear input fields
            } else {
                setStatus(data.message || "Failed to send message. Try again.");
            }
        } catch (error) {
            setStatus("Error sending message. Please try again.");
        }
    };

    return (
        <div className="support-container">
            <div className="support-form">
                <h2>Contact Support</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Query Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="send-btn">Send</button>
                    {status && <p className="status-message">{status}</p>}
                </form>
            </div>
        </div>
    );
}

export default Support;
