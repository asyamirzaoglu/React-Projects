import './App.css';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Bridal Gown",
      amount: "531,47",
      date: new Date(2023,2,4),
    },
    {
      id: "e2",
      title: "Wedding Suit",
      amount: "131,92",
      date: new Date(2023,2,9),
    },
    {
      id: "e3",
      title: "Bridecake",
      amount: "79,08",
      date: new Date(2023,2,10),
    },
    {
      id: "e4",
      title: "Veil",
      amount: "10,54",
      date: new Date(2023,2,4),
    },
    {
      id: "e5",
      title: "Ring",
      amount: "210,88",
      date: new Date(2023,1,28),
    },
  ];
  return (
    <div>
       <Card className = "title"><h2>Expenses</h2></Card>
       <Expenses items={expenses}/>
    </div>
  );
}
export default App;
