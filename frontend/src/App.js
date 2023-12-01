import Card from './components/card';
import './App.css';

function App() {
  const props={
    name:"Manas Roy",
    userId:"@Manas24",
    // profilePic:"helloWorld",
    work:"Software Developer",
    education:"IIT Guwahati",
    tier:"Pioneer",
    sparks:574896,
  }
  return (
    <div className="App">
      <Card props={props}/>
    </div>
  );
}

export default App;
