// toast
import { Toaster } from "react-hot-toast";
// components
import Header from "./components/Header";
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <main className="min-h-screen">
      {/* app header */}
      <Header />
      {/* app root */}
      <TodoApp />
      {/* toast container */}
      <Toaster />
    </main>
  );
}

export default App;
