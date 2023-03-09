import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Bridal Gown",
      amount: "531,47",
      date: "04.03.2023"
    },
    {
      id: "e2",
      title: "Wedding Suit",
      amount: "131,92",
      date: "09.03.2023"
    },
    {
      id: "e3",
      title: "Bridecake",
      amount: "79,08",
      date: "10.03.2023"
    },
    {
      id: "e4",
      title: "Veil",
      amount: "10,54",
      date: "04.03.2023"
    },
    {
      id: "e5",
      title: "Ring",
      amount: "210,88",
      date: "28.02.2023"
    },
  ];
  return (
    <div>
    <h1>First Application</h1>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}/>
    </div>
  );
}
export default App;
