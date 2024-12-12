import logo from './logo.svg';
import './App.css';
import SideBarL from './components/SideBarL';
import SideBarR from './components/SideBarR';

function App() {
  return (
    <div className="App">
      <SideBarL />
      <div className='Feed'>

      </div>
      <SideBarR />
    </div>
  );
}

export default App;
