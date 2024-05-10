import logo from './logo.svg';
import Header from "./Widgets/Header.js";
import './App.css';
import StudyAtMisis from './Widgets/StudyAtMisis.js';
import HowItWorks from './Widgets/HowItWorks.js';

function App() { 
  return (
    <div className='App'>
      <Header />
      {/* <StudyAtMisis /> */}
      <HowItWorks />
    </div>
  );
}

export default App;
