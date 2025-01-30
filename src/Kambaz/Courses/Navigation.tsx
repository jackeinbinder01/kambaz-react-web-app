import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap"

export default function CourseNavigation() {
    return (
        <ListGroup id="wd-courses-navigation" 
        className="wd fs-5 rounded-0">
            <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Home" id="wd-course-home-link" 
            className="list-group-item active border border-0 bg-white">
                Home
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link" 
            className="list-group-item text-danger border border-0 bg-white">
                Modules
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link" 
            className="list-group-item text-danger border border-0 bg-white">
                Piazza
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
            className="list-group-item text-danger border border-0 bg-white">
                Zoom
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Assignments" id="wd-course-assignments-link"
            className="list-group-item text-danger border border-0 bg-white">
                Assignments
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Quizzes" id="wd-course-quizzes-link"
            className="list-group-item text-danger border border-0 bg-white">
                Quizzes
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link"
            className="list-group-item text-danger border border-0 bg-white">
                Grades
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
            className="list-group-item text-danger border border-0 bg-white">
                People
            </ListGroup.Item>
        </ListGroup>
    );
}