import "./App.css";
// import { NavBar } from "./NavBar.jsx";


import Header from './Header';
import Hero from './Hero';
import './App.css';

function App() {
  return (
    <div className="App" >
      <div style={{fontSize:'larger'}} >
        <Header /></div>
      <Hero />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//     </div>
//   );
// }
export default App;
