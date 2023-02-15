import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Adam"} lastName={"Khayat"} age={19} hairColor={"Black"} />
      <PersonCard firstName={"Amir"} lastName={"Khayat"} age={21} hairColor={"Brown"} />
      <PersonCard firstName={"Salmane"} lastName={"Khayat"} age={12} hairColor={"Beige"} />
      <PersonCard firstName={"Mehdi"} lastName={"Belhaj"} age={29} hairColor={"Brown"} />
    </div>
  );
}

export default App;
