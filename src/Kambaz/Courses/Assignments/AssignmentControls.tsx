import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";

export default function AssignmentControls() {
    return (
        <div className="d-flex mb-3">
            <InputGroup className="me-1" size="lg" style={{ width: "400px"}}>
                <InputGroup.Text className="bg-white border-end-0">
                    <FaMagnifyingGlass/>
                </InputGroup.Text>
                <FormControl placeholder="Search..." className="border-start-0"/>
            </InputGroup>
            <div className="ms-auto d-flex">
                <Button variant="secondary" size="lg" className="me-1 float-end text-nowrap"
                id="wd-add-group">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
                    Group
                </Button>
                <Button variant="danger" size="lg" className="me-1 float-end text-nowrap"
                id="wd-add-assignment">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
                    Assignment
                </Button>
            </div>
        </div>
    );
}