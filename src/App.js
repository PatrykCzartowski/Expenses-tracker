import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Toilet paper", amount: 55.31, date: new Date(2021, 6, 17) },
    { title: "Dog food", amount: 139.06, date: new Date(2022, 3, 23) },
    { title: "Lasagna", amount: 19.54, date: new Date(2022, 4, 11) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
