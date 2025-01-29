import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signin() {
    return (
        <div id ="wd-signin-screen">
            <h3>Sign in</h3>
            <Form.Control id="wd-username" placeholder="username" className="mb-2"/>
            <Form.Control id="wd-password" placeholder="password" type="password" 
            className="mb-2"/>
            <Link to="/Kambaz/Dashboard" id="wd-signin-btn" className="btn
                                                                       btn-primary
                                                                       w-100
                                                                       mb-2">
                Sign in
            </Link>
            <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
                Sign up
            </Link>
        </div>
    );
}