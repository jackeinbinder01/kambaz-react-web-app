import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1><hr/>
            <h2 id="wd-dashboard-published">Published Courses (8)</h2><hr/>
            <div className="wd-dashboard-course"> {/* Class 1 */}
                <Link to="/Kambaz/Courses/1234/Home">
                    <img src="/images/reactjs.webp" width={200}/>
                    <div>
                        <h5>CS1234 React JS</h5>
                        <p className="wd-dashboard-course-title">Full stack software developer</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div><br/>
            <div className="wd-dashboard-course"> {/* Class 2*/}
                <Link to="/Kambaz/Courses/2234/Home">
                    <img src="/images/2234.jpg" width={200}/>
                    <div>
                        <h5>CS2234 Introduction to Computers</h5>
                        <p className="wd-dashboard-course-title">Computer hardware and software</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div><br/> 
            <div className="wd-dashboard-course"> {/* Class 3*/}
                <Link to="/Kambaz/Courses/3234/Home">
                    <img src="/images/3234.webp" width={200}/>
                    <div>
                        <h5>CS3234 Typing Theory</h5>
                        <p className="wd-dashboard-course-title">Increase your WPM</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div><br/>
            <div className="wd-dashboard-course"> {/* Class 4*/}
                <Link to="/Kambaz/Courses/4234/Home">
                    <img src="/images/4234.webp" width={200}/>
                    <div>
                        <h5>CS4234 Router Placement</h5>
                        <p className="wd-dashboard-course-title">Techniques to improve internet speed</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div><br/>
            <div className="wd-dashboard-course"> {/* Class 5*/}
                <Link to="/Kambaz/Courses/5234/Home">
                    <img src="/images/5234.jpeg" width={200}/>
                    <div>
                        <h5>CS5234 Advanced Cable Management</h5>
                        <p className="wd-dashboard-course-title">Eliminate tangles and kinks</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div><br/>
            <div className="wd-dashboard-course"> {/* Class 6*/}
                <Link to="/Kambaz/Courses/6234/Home">
                    <img src="/images/6234.webp" width={200}/>
                    <div>
                        <h5>CS6234 Wallpaper Selection</h5>
                        <p className="wd-dashboard-course-title">Configure the ultimate desktop</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div><br/>
            <div className="wd-dashboard-course"> {/* Class 7*/}
                <Link to="/Kambaz/Courses/7234/Home">
                    <img src="/images/7234.jpg" width={200}/>
                    <div>
                        <h5>CS7234 Monitor Theory</h5>
                        <p className="wd-dashboard-course-title">Monitor selection and placement</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div><br/>
            <div className="wd-dashboard-course"> {/* Class 8*/}
                <Link to="/Kambaz/Courses/8234/Home">
                    <img src="/images/8234.jpg" width={200}/>
                    <div>
                        <h5>CS8234 Advanced Topics in RAM Optimization</h5>
                        <p className="wd-dashboard-course-title">Strategies to safely download more RAM</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div><br/>
        </div>
);}



