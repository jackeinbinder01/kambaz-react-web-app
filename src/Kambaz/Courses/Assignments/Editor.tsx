import { Form, FormControl, FormGroup, FormSelect, InputGroup, Row, Col, Table, Button } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignment-editor">
            <div id="assignment-name">
                <label className="mb-1">
                    Assignment Name
                </label>
                <FormControl value="A1" className="flex mb-3"/>
            </div>
            <InputGroup id="assignment-description">
                <div contentEditable="true" className="form-control">
                    <p className="mt-3">
                        The assignment 
                        is <span className="text-danger">available online</span>
                    </p>
                    <p>
                        Submit a link to the landing page of your Web application
                        running on Netlify.
                    </p>
                    <p>
                        The landing page should include the following:
                        <ul>
                            <li>Your full name and section</li>
                            <li>Links to each of the lab assignments</li>
                            <li>Link to the Kanbas application</li>
                            <li>Links to all relevant source code repositories</li>
                        </ul>
                    </p>
                    <p>
                        The Kanbas application should include a link to navigate back
                        to the landing page.
                    </p>
                </div>
            </InputGroup>
            <Table borderless className="mt-3">
                <tbody>
                    <tr>
                        <td className="text-end align-middle">
                            <label htmlFor="wd-points">
                                Points
                            </label>
                        </td>
                        <td className="w-75">
                            <FormControl id="wd-points" value="100"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end align-middle">
                            <label htmlFor="wd-group">
                                Assignment Group
                            </label>
                        </td>
                        <td>
                            <FormSelect>
                                <option>ASSIGNMENTS</option>
                                <option>QUIZZES</option>
                                <option>EXAMS</option>
                                <option>PROJECT</option>
                            </FormSelect>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end align-middle">
                            <label htmlFor="wd-display-grade-as">
                                Display Grade as
                            </label>
                        </td>
                        <td>
                            <FormSelect id="wd-display-grade-as">
                                <option>Percentage</option>

                            </FormSelect>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            <label htmlFor="wd-submission-type">
                                Submission Type
                            </label>
                        </td>
                        <td>
                            <div className="border p-3 rounded-2">
                                <FormSelect id="wd-submission-type">
                                    <option>Online</option>
                                </FormSelect>
                                <p className="mt-3">
                                    <h6>Online Entry Options</h6>
                                </p>
                                <FormGroup>
                                    <Form.Check checked={false} id="wd-checkbox-1" label="Text Entry" className="mb-2"/>
                                    <Form.Check checked={true} id="wd-checkbox-2" label="Website URL" className="mb-2"/>
                                    <Form.Check checked={false} id="wd-checkbox-3" label="Media Recordings" className="mb-2"/>
                                    <Form.Check checked={false} id="wd-checkbox-4" label="Student Annotation" className="mb-2"/>
                                    <Form.Check checked={false} id="wd-checkbox-4" label="File Uploads"/>
                                </FormGroup>
                            </div> 
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end">
                            <label htmlFor="wd-assign">
                                Assign
                            </label>
                        </td>
                        <td>
                            <div className="border p-3 rounded-2">
                                <h6>Assign to</h6>
                                <InputGroup className="border p-2 rounded-2">
                                    <Button variant="secondary">
                                        Everyone
                                        <CgClose className="ms-2"/>
                                    </Button>
                                </InputGroup>
                                <div className="mt-3">
                                    <h6>Due</h6>
                                    <InputGroup>
                                        <FormControl value="January 27, 2025, 11:59pm"/>
                                        <InputGroup.Text>
                                            <BiCalendar/>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </div>
                                <div className="d-flex align-items-center mt-2">
                                    <Row>
                                        <Col>
                                            <h6>Available from</h6>
                                            <InputGroup className="me-3">
                                                <FormControl value="January 20, 2025, 12:00am"/>
                                                <InputGroup.Text>
                                                    <BiCalendar />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Col>
                                        <Col>
                                            <h6>Until</h6>
                                            <InputGroup className="me-3">
                                                <FormControl/>
                                                <InputGroup.Text>
                                                    <BiCalendar />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        
                                        </Col>
                                    </Row>
                                </div>
                            </div> 
                        </td>
                    </tr>
                </tbody>
            </Table>
            <hr/>
            
        
            <table width="100%">
                <tr>
                    <td align="right">
                        <Button variant="secondary" className="border border-black me-1">Cancel</Button>
                        <Button variant="danger" className="border border-black me-1">Save</Button>
                    </td>
                </tr>
            </table>
        </div>
); }