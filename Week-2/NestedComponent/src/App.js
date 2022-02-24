import './App.css';
import foreigners from "./data/foreigners.json"
import MainComponent from './components/MainComponent';
import CardsPerson from './components/CardsPerson';
import ChildrenCards from './components/ChildrenCards';




function App() {
 return (
  
    <div className="App">
    <MainComponent data={foreigners}/> 
    
    </div>
 )
  
}

export default App;
