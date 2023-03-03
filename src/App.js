import AddTask from "./components/AddTask";
import Main from "./components/Main";

function App() {
  return (
    <div className="h-screen bg-slate-800 p-10">
      <Main />
      <AddTask />
    </div>
  );
}

export default App;