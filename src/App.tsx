import Labs from "./Labs";      // The App component is the root component that imports other components
export default function App() { // to break up the HTML rendering task amongst a hierarchy of components
  return (
    <div>                       // For how we are just rendering the Labs component,
      <Labs />                  // which for now it's rendering just the Lab1 component
    </div>
);}
