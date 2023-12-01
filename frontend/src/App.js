import logo from './logo.svg';
// import './App.css';
import Card from './Components/Card';
import { useState } from 'react';

function App() {

  const cardObject = {
    imageUrl : "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
    name : "Devesh Sutahr",
    country : "IN",
    job :"Web Developer",
    jobLocation : "Delhi",
    noOfSessions : 5,
    reviews : 4.4,
    experience : 2,
    avgAttendance : 80
  }
  const [card,SetCard] = useState(cardObject);

 


  return (
    <div className="App">
      <Card cardData={card} />
    </div>
  );
}

export default App;
