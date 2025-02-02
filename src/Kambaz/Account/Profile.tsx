import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <Form.Control id="wd-username" defaultValue="alice" 
            placeholder="username" className="mb-2"/>
            <Form.Control id="wd-password" defaultValue="123" placeholder="password" 
            className="mb-2"/>
            <Form.Control id="wd-firstname" defaultValue="Alice" 
            placeholder="First Name" className="mb-2"/>
            <Form.Control id="wd-lastname" defaultValue="Wonderland" 
            placeholder="Last Name" className="mb-2"/>
            <Form.Control id="wd-dob" defaultValue="mm/dd/yyyy" type="date"
            placeholder="Date of Birth" className="mb-2"/>
            <Form.Control id="wd-email" defaultValue="alice@wonderland.com" type="email"
            className="mb-2"/>
             <select className="mb-2 form-control">
                <option selected value="USER">
                    User
                </option>
                <option value="ADMIN">
                    Admin
                </option>
                <option value="FACULTY">
                    Faculty
                </option>
                <option value="STUDENT">
                    Student
                </option>
            </select>
            <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2">
                Sign out
            </Link>
        </div>
);}