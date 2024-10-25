import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <TodoApp />
      <Toaster />
    </main>
  );
}

export default App;
