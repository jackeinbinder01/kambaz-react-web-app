import { MdBarChart, MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { BiBell, BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { BsMegaphone } from "react-icons/bs";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "350px" }}>
            <h2>
                Course Status
            </h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <Button variant="secondary" size="lg" className="w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5" />
                        Unpublish
                    </Button>
                </div>
                <div className="w-50">
                    <Button variant="success" size="lg" className="w-100">
                        <FaCheckCircle className="me-2 fs-5"/>
                        Publish
                    </Button>
                </div>
            </div>
            <br/>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5 text-black"/>
                Import Existing Content
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5 text-black"/>
                Import from Commons
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaHouse className="me-2 fs-5 text-black"/>
                Choose Home Page
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <MdBarChart className="me-2 fs-5 text-black"/>
                View Course Stream
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BsMegaphone className="me-2 fs-5 text-black"/>
                New Announcement
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <MdBarChart className="me-2 fs-5 text-black"/>
                New Analytics
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiBell className="me-2 fs-5 text-black"/>
                View Course Notifications
            </Button>



        </div>
);}