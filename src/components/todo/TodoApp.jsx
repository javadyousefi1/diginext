import { useState } from "react";
import AddTodo from "./AddTodo";
import toast from "react-hot-toast";
import TodoCart from "./TodoCart";
import Empty from './../Empty';

const TodoApp = () => {
  const [todo, setTodo] = useState([]);

  const handleAddNewTodo = (newTodo) => {
    const isTitleExist = todo.findIndex((item) => item.title === newTodo);

    if (isTitleExist !== -1) {
      toast.error("title already exists");
      return false;
    }

    const timestamp = new Date().getTime();

    const todoInfo = {
      id: timestamp, // set a unique id for controlling and mange todos
      isCompleted: false, // define false at first
      title: newTodo,
    };

    setTodo((prev) => [...prev, todoInfo]);
    toast.success("Todo added successfully");
  };

  const handleEditTodo = (id, newData) => {
    setTodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, ...newData };
        } else {
          return item;
        }
      })
    );

    toast.success("Todo edited successfully")
  };

  const handleDeleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
    toast.success("Todo deleted successfully");
  };

  return (
    <section className="flex justify-center items-center mt-10 flex-col">
      <AddTodo handleAddNewTodo={handleAddNewTodo} />

      {/* show message if there is no todo to show */}
      {todo.length === 0 && <Empty/>}
      {/* iterate of todo list */}
      {todo.map((item, index) => (
        <TodoCart
          key={item.id}
          index={index}
          {...item}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </section>
  );
};

export default TodoApp;
