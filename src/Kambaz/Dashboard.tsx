import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap"

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1><hr/>
            <h2 id="wd-dashboard-published">Published Courses (8)</h2><hr/>
            <div className="wd-dashboard-course">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card> {/* Class 1 */}
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none 
                                                                            text-dark">
                                <Card.Img variant="top" src="/images/reactjs.webp" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1234 React JS
                                    </Card.Title>
                                    <hr/>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full stack software developer
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>     
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card> {/* Class 2 */}
                            <Link to="/Kambaz/Courses/2234/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none 
                                                                            text-dark">
                                <Card.Img variant="top" src="/images/2234.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS2234 Introduction to Computers
                                    </Card.Title>
                                    <hr/>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Computer hardware and software
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>     
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card> {/* Class 3 */}
                            <Link to="/Kambaz/Courses/3234/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none 
                                                                            text-dark">
                                <Card.Img variant="top" src="/images/3234.webp" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS3234 Typing Theory
                                    </Card.Title>
                                    <hr/>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Increase your WPM
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>     
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card> {/* Class 4 */}
                            <Link to="/Kambaz/Courses/4234/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none 
                                                                            text-dark">
                                <Card.Img variant="top" src="/images/4234.webp" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS4234 Router Placement
                                    </Card.Title>
                                    <hr/>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Techniques to improve internet speed
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>     
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card> {/* Class 5 */}
                            <Link to="/Kambaz/Courses/5234/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none 
                                                                            text-dark">
                                <Card.Img variant="top" src="/images/5234.jpeg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS5234 Advanced Cable Management
                                    </Card.Title>
                                    <hr/>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Eliminate tangles and kinks
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>     
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card> {/* Class 6 */}
                            <Link to="/Kambaz/Courses/6234/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none 
                                                                            text-dark">
                                <Card.Img variant="top" src="/images/6234.webp" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS6234 Wallpaper Selection
                                    </Card.Title>
                                    <hr/>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Configure the ultimate desktop
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>     
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card> {/* Class 7 */}
                            <Link to="/Kambaz/Courses/7234/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none 
                                                                            text-dark">
                                <Card.Img variant="top" src="/images/7234.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS7234 Monitor Theory
                                    </Card.Title>
                                    <hr/>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Monitor selection and placement
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>     
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card> {/* Class 8 */}
                            <Link to="/Kambaz/Courses/8234/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none 
                                                                            text-dark">
                                <Card.Img variant="top" src="/images/8234.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS8234 Advanced Topics in RAM Optimization
                                    </Card.Title>
                                    <hr/>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Strategies to safely download more RAM
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>     
                    </Col>
                </Row>
            </div><br/>
        </div>
    );
}
