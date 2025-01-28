import "./index.css";
import "./ForegroundColors"
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIcons";

export default function Lab2() {
    return (
      <div id="wd-lab2">
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <h3>Styling with the <i>STYLE</i> attribute</h3>
        <p>
          Style attribute allows configuring look and feel right on the element. 
          Although it's very convenient, it is considered <i>bad practice</i> and 
          should be avoided.
        </p>
        <div id="wd-css-id-selectors">
        <h3>ID Selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same name, e.g., P,
          we can refer to a specific element by its' ID. 
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and feel.
        </p>
        <h3>Class Selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an 
          element's <strong>class</strong> attribute.
        </p>
        <h4 className="wd-class-selector">
          This heading had the same style as the paragaph above
        </h4>
        </div>
        <div id="wd-css-document-structure">
          <div className="wd-selector-1">
            <h3>Document Structure Selectors</h3>
            <div className="wd-selector-2">
              Selectors can be combined to refer to elements in a particular place
              in the document.
              <p className="wd-selector-3">
                This paragraph's red background is referenced as: 
                <br/>
                .selector-2 .selector-3
                <br/>
                meaning the descendant of some ancestor.
                <br/>
                <span className="wd-selector-4"><br/>
                  Whereas this span is a direct child of its parent.
                </span><br/>
                You can combine these relationships to create specific styles depending
                on the document structure.
              </p>
            </div>
          </div>
        </div>
        <div>
          <ForegroundColors/>
        </div>
        <div>
          <BackgroundColors/>
        </div>
        <div>
          <Borders/>
        </div>
        <div>
          <Padding/>
        </div>
        <div>
          <Margins/>
        </div>
        <div>
          <Corners/>
        </div>
        <div>
          <Dimensions/>
        </div>
        <div>
          <Positions/>
        </div>
        <div>
          <Zindex/>
        </div>
        <div>
          <Float/>
        </div>
        <div>
          <GridLayout/>
        </div>
        <div>
          <Flex/>
        </div>
        <div>
          <ReactIconsSampler/>
        </div>
      </div>
  );}
