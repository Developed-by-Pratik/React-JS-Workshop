import "./App.css";
import JSXComponent from "./Components/JSXComponent";
import ClassComponents from "./Components/ClassComponents";
import StateOfFunctionalComponent from "./Components/StateOfFunctionalComponents";
// import Navbar from './Components/Navbar';
// import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <h1>Hello This is my first React App</h1>
      <JSXComponent />
      <ClassComponents/>
      <StateOfFunctionalComponent/>
      <img src="./logo512.png" alt=""></img>
    </div>
  );
}

export default App;
