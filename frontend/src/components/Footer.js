// import React from "react";
// import "../styles/Footer.css";


// function Footer() {
//     return (
//         <footer className="footer">
//             {/* Logo */}
//             <div className="footer-logo">
//                 <img src="https://res.cloudinary.com/douxmncw2/image/upload/v1740941453/Freshjobslogo_j2ljui.jpg" alt="JobHustles Logo" />
//             </div>

//             {/* Social Media Icons */}
//             <div className="footer-social">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                     <img src="/icons/facebook.png" alt="Facebook" />
//                 </a>
//                 <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
//                     <img src="/icons/whatsapp.png" alt="WhatsApp" />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                     <img src="/icons/instagram.png" alt="Instagram" />
//                 </a>
//                 <a href="https://t.me/yourtelegramlink" target="_blank" rel="noopener noreferrer">
//                     <img src="/icons/telegram.png" alt="Telegram" />
//                 </a>
//             </div>

//             {/* Copyright */}
//             <p className="footer-text">&copy; 2025 JobHustles. All Rights Reserved.</p>
//         </footer>
//     );
// }

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            {/* Logo with FRESHJOBS text */}
            <div className="footer-logo">
                <Link to="/">
                    <div className="footer-logo-circle">FRESHJOBS</div>
                </Link>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook.png" alt="Facebook" />
                </a>
                <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/whatsapp.png" alt="WhatsApp" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.png" alt="Instagram" />
                </a>
                <a href="https://t.me/yourtelegramlink" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/telegram.png" alt="Telegram" />
                </a>
            </div>

            {/* Copyright Text */}
            <p className="footer-text">&copy; 2025 FreshJobs. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
