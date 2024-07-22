import "./App.css";
import Header from "./Components/Header/header";
import Table from "./Components/Table/table.jsx";
import GoalCGPA from "./Components/GoalCGPA/goalCGPA.jsx";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Table></Table>
      <GoalCGPA></GoalCGPA>
    </div>
  );
}

export default App;
