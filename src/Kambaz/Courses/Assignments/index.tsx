export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments"/>&nbsp;
            <button id="wd-add-assignment-group">+ Group</button>&nbsp;
            <button id="wd-add-assignment">+ Assignment</button>
            <h3>ASSIGNMENTS 40% of Total <button>+</button></h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                        A1 - ENV + HTML
                    </a><br/>
                    Multiple Modules | <b>Not available until</b> January 20 at 12:00am |
                    <br/>
                    <b>Due</b> January 27 at 11:59pm | 100 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/456" className="wd-assignment-link">
                        A2 - CSS + BOOTSTRAP
                    </a><br/>
                    Multiple Modules | <b>Not available until</b> January 27 at 12:00am |
                    <br/>
                    <b>Due</b> February 3 at 11:59pm | 100 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/789" className="wd-assignment-link">
                        A3 - JAVASCRIPT + REACT
                    </a><br/>
                    Multiple Modules | <b>Not available until</b> February 3 at 12:00am |
                    <br/>
                    <b>Due</b> February 10 at 11:59pm | 100 pts
                </li>
            </ul>
        </div>
);}