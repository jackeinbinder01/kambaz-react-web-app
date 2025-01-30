import { Col, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { MdAssignment } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControls/>
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <RiArrowDropDownFill className="fs-1 me-2"/>
                            <b>ASSIGNMENTS</b>
                        <AssignmentControlButtons/>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-2 fs-3 text-black" />
                                </Col>
                                <Col>
                                    <div className="d-flex flex-column">
                                        <a href="#/Kambaz/Courses/1234/Assignments/123" 
                                        className="wd-assignment-link text-black">
                                            <h4><strong>A1</strong></h4>
                                        </a>
                                        <div>
                                            <span className="text-danger">Multiple Modules</span>
                                            <span className="mx-2">|</span>
                                            <span><b>Not available until</b> January 20 at 12:00am</span>
                                            <span className="mx-2">|</span>
                                        </div>
                                        <div>
                                            <span><b>Due</b> January 27 at 11:59pm</span>
                                            <span className="mx-2">|</span>
                                            <span>100 pts</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="auto">
                                    <LessonControlButtons />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-2 fs-3 text-black" />
                                </Col>
                                <Col>
                                    <div className="d-flex flex-column">
                                        <a href="#/Kambaz/Courses/1234/Assignments/456" 
                                        className="wd-assignment-link text-black">
                                                <h4><strong>A2</strong></h4>
                                        </a>
                                        <div>
                                            <span className="text-danger">Multiple Modules</span>
                                            <span className="mx-2">|</span>
                                            <span><b>Not available until</b> January 27 at 12:00am</span>
                                            <span className="mx-2">|</span>
                                        </div>
                                        <div>
                                            <span><b>Due</b> February 3 at 11:59pm</span>
                                            <span className="mx-2">|</span>
                                            <span>100 pts</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="auto">
                                    <LessonControlButtons />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <Row className="align-items-center">
                            <Col xs="auto">
                                <BsGripVertical className="me-2 fs-3" />
                                <MdAssignment className="me-2 fs-3 text-black" />
                            </Col>
                            <Col>
                                <div className="d-flex flex-column">
                                    <a href="#/Kambaz/Courses/1234/Assignments/789" 
                                        className="wd-assignment-link text-black">
                                                <h4><strong>A3</strong></h4>
                                        </a>
                                    <div>
                                        <span className="text-danger">Multiple Modules</span>
                                        <span className="mx-2">|</span>
                                        <span><b>Not available until</b> February 3 at 12:00am</span>
                                        <span className="mx-2">|</span>
                                    </div>
                                    <div>
                                        <span><b>Due</b> February 10 at 11:59pm</span>
                                        <span className="mx-2">|</span>
                                        <span>100 pts</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <LessonControlButtons />
                            </Col>
                        </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
);}