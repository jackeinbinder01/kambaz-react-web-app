import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <span className="me-1 border border-solid border-black p-2 rounded-5">
                40% of Total
            </span>
            <FaPlus/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}