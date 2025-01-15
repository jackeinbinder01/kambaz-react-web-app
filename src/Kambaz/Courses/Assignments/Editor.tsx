export default function AssignmentEditor() {
    return (
        <div id="wd-assignment-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label><br/><br/>
            <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
            <textarea id="wd-description" style={{width: "400px", height: "150px"}}>
                The assignment is available online. Submit a link to 
                the landing page of your Web application running on Netlify.
                The landing page should include the following: Your full name, links to 
                each of the lab assignments, links to the Kambaz application, links to all 
                relevant source code repositories. The Kambaz application should include a 
                link to navigate back to the landing page.
            </textarea><br/><br/>
            <table width="100%">
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr><br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assigment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assigment-group">
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>PROJECT</option>
                        </select>
                    </td>
                </tr><br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade">
                            <option>Percentage</option>
                        </select>
                    </td>
                </tr><br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                        </select><br/><br/>
                        <label htmlFor="wd-submission-type">Online Entry Options</label><br/>
                        <input type="checkbox" id="wd-online-entry-options-text"/>
                        <label htmlFor="wd-online-entry-options-text">Text Entry</label><br/>
                        <input type="checkbox" id="wd-online-entry-options-url"/>
                        <label htmlFor="wd-online-entry-options-url">Website URL</label><br/>
                        <input type="checkbox" id="wd-online-entry-options-recording"/>
                        <label htmlFor="wd-online-entry-options-recording">Media Recordings</label><br/>
                        <input type="checkbox" id="wd-online-entry-options-annotation"/>
                        <label htmlFor="wd-online-entry-options-annotation">Student Annotation</label><br/>
                        <input type="checkbox" id="wd-online-entry-file-uploads"/>
                        <label htmlFor="wd-online-entry-file-uploads">File Uploads</label><br/>
                    </td>
                </tr><br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign To</label><br/>
                        <input id="wd-assign-to" value="Everyone"></input><br/><br/>
                        <label htmlFor="wd-due">Due</label><br/>
                        <input type="date" value="2025-01-27" id="wd-due"/><br/><br/>
                        <tr>
                            <td>
                                <label htmlFor="wd-available-from">Available from</label><br/>
                                <input type="date" value="2025-01-20" id="wd-due"/><br/><br/>
                            </td>
                            <td>
                                <label htmlFor="wd-available-until">Until</label><br/>
                                <input type="date" value="2025-02-03" id="wd-due"/><br/><br/>
                            </td>
                        </tr>
                    </td>
                </tr>
            </table><hr/>
            <table width="100%">
                <tr>
                    <td align="right">
                        <button id="wd-cancel-button">Cancel</button>&nbsp;
                        <button id="wd-save-button">Save</button>
                    </td>
                    
                </tr>
            </table>
        </div>
); }