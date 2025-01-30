import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { GoBeaker } from "react-icons/go";
import { ListGroup } from "react-bootstrap";

export default function KambazNavigation() {
    return (
        <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }} className="list-group 
                                                                         rounded-0 
                                                                         position-fixed 
                                                                         bottom-0 
                                                                         top-0 
                                                                         d-none 
                                                                         d-md-block 
                                                                         bg-black 
                                                                         z-2">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank"
            className="list-group-item bg-black border-0 text-center">
                <img src="images/NEU.png" width="75px"/>
            </a>
            <ListGroup.Item as={Link} to="/Kambaz/Account" id="wd-account-link" className="list-group-item 
                                                                       text-center 
                                                                       border-0 
                                                                       bg-black 
                                                                       text-white">
                <FaRegCircleUser className="fs-1 text text-white"/><br/>
                Account
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Dashboard" id="wd-dashboard-link" className="list-group-item 
                                                                           text-center 
                                                                           border-0 
                                                                           bg-white 
                                                                           text-danger">
                <AiOutlineDashboard className="fs-1 text-danger"/><br/>
                Dashboard
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Dashboard" id="wd-course-link" className="list-group-item 
                                                                        text-white
                                                                        bg-black 
                                                                        text-center 
                                                                        border-0">
                <LiaBookSolid className="fs-1 text-danger"/><br/>
                Courses
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Calendar" id="wd-calendar-link" className="list-group-item 
                                                                         text-center 
                                                                         border-0 
                                                                         bg-black 
                                                                         text-white">
                <IoCalendarOutline className="fs-1 text-danger"/><br/>
                Calendar
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Inbox" id="wd-inbox-link" className="list-group-item 
                                                                   text-center 
                                                                   border-0 
                                                                   bg-black 
                                                                   text-white">
                <FaInbox className="fs-1 text-danger"/><br/>
                Inbox
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/Labs" id="wd-labs-link" className="list-group-item 
                                                          text-center 
                                                          border-0 
                                                          bg-black 
                                                          text-white">
                <GoBeaker className="fs-1 text-danger"/><br/>
                Labs
            </ListGroup.Item>
        </ListGroup>
    );
}