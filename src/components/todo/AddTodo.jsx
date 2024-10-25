import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Modal from "../Modal";

const AddTodo = ({ handleAddNewTodo }) => {
  const inputRef = useRef(null); // access to the input value

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const handleSubmitForm = (e) => {
    e.preventDefault(); // prevent refresh page
    let inputValue = inputRef.current.value?.trim();

    // check the input value not be empty
    if (inputValue === "") {
      return toast.error("Please enter a value !");
    }
    // add todo and update the state
    handleAddNewTodo(inputValue);
    // reset input value
    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className="mb-2">
        <div className="flex flex-col">
          <label htmlFor="title">Title :</label>
          <input
            id="title"
            ref={inputRef}
            type="text"
            className="w-[300px] md:w-[600px] p-2 rounded-lg border outline-none transition-all ease-linear duration-100    border-gray-100 focus:border-purple-500 hover:border-purple-300"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-3 bg-purple-600 transition-all ease-linear duration-100  hover:bg-purple-900 text-white rounded-lg font-bold"
        >
          ADD
        </button>
      </form>
    </>
  );
};

export default AddTodo;
