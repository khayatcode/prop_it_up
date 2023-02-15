import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Adam"} lastName={"Khayat"} personAge={19} hairColor={"Black"} />
      <PersonCard firstName={"Amir"} lastName={"Khayat"} personAge={21} hairColor={"Brown"} />
      <PersonCard firstName={"Salmane"} lastName={"Khayat"} personAge={12} hairColor={"Beige"} />
      <PersonCard firstName={"Mehdi"} lastName={"Belhaj"} personAge={29} hairColor={"Brown"} />
    </div>
  );
}

export default App;
