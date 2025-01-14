import Lab1 from "./Lab1";          // Components can import other components to aggregate the code snippets
export default function Labs() {    // of the components into larger, more complex HTML content. Here the
  return (                          // Labs component imports the Lab1 component as the first of a
    <div id="wd-labs">              // set of exercises that will be implemented in later chapters.
      <h1>Labs</h1>                 // The Lab1 function is invoked with the HTML syntax <Lab1/>
      <Lab1 />                      // which is replaced by HTML the function returns implemented in the
    </div>                          // Lab1 function
);}
