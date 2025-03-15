// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../styles/Navbar.css";

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const location = useLocation();

//     // Close menu when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (!event.target.closest(".navbar-content") && menuOpen) {
//                 setMenuOpen(false);
//             }
//         };
//         document.addEventListener("click", handleClickOutside);
//         return () => {
//             document.removeEventListener("click", handleClickOutside);
//         };
//     }, [menuOpen]);

//     return (
//         <nav className="navbar">
//             <div className="navbar-content">
//                 {/* Logo */}
//                 <div className="navbar-logo">
//                     <Link to="/">
//                         <img src="https://res.cloudinary.com/douxmncw2/image/upload/v1740941453/Freshjobslogo_j2ljui.jpg" alt="JobHustles Logo" />
//                     </Link>
//                 </div>

//                 {/* Menu Button */}
//                 <div className="menu-toggle" onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}>
//                     ☰
//                 </div>

//                 {/* Menu Items */}
//                 <ul className={`nav-links ${menuOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
//                     {/* Close Button (inside menu bar) */}
//                     <div className="close-menu" onClick={() => setMenuOpen(false)}>✖</div>

//                     <li><Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link></li>
//                     <li><Link to="/freshers" className={location.pathname === "/freshers" ? "active" : ""} onClick={() => setMenuOpen(false)}>Freshers</Link></li>
//                     <li><Link to="/experience" className={location.pathname === "/experience" ? "active" : ""} onClick={() => setMenuOpen(false)}>Experience</Link></li>
//                     <li><Link to="/internship" className={location.pathname === "/internship" ? "active" : ""} onClick={() => setMenuOpen(false)}>Internship</Link></li>
//                     <li><Link to="/support" className={location.pathname === "/support" ? "active" : ""} onClick={() => setMenuOpen(false)}>Support</Link></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".navbar-content") && menuOpen) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                {/* Logo replaced with Circular Text */}
                <div className="navbar-logo">
                    <Link to="/">
                        <div className="logo-circle">FRESHJOBS</div>
                    </Link>
                </div>

                {/* Menu Button */}
                <div className="menu-toggle" onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}>
                    ☰
                </div>

                {/* Menu Items */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                    {/* Close Button */}
                    <div className="close-menu" onClick={() => setMenuOpen(false)}>✖</div>

                    <li><Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/freshers" className={location.pathname === "/freshers" ? "active" : ""} onClick={() => setMenuOpen(false)}>Freshers</Link></li>
                    <li><Link to="/experience" className={location.pathname === "/experience" ? "active" : ""} onClick={() => setMenuOpen(false)}>Experience</Link></li>
                    <li><Link to="/internship" className={location.pathname === "/internship" ? "active" : ""} onClick={() => setMenuOpen(false)}>Internship</Link></li>
                    <li><Link to="/support" className={location.pathname === "/support" ? "active" : ""} onClick={() => setMenuOpen(false)}>Support</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
