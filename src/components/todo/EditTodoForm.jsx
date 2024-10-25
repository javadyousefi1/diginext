import React, { useState } from "react";

const EditTodoForm = ({ title, isCompleted, handleEditTodo, id, onClose }) => {
  const [formValue, setFormValue] = useState({ title, isCompleted });

  const handleChangeValue = (e) => {
    const { name, type, checked, value } = e.target;

    switch (name) {
      case "title":
        setFormValue((prevState) => ({ ...prevState, title: value }));
        break;
      case "isCompleted":
        setFormValue((prevState) => ({ ...prevState, isCompleted: checked }));
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleEditTodo(id, formValue);
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col">
          <label htmlFor="title">Title :</label>
          <input
            name="title"
            defaultValue={title}
            id="title"
            type="text"
            onChange={handleChangeValue}
            className="w-full p-2 rounded-lg border outline-none transition-all ease-linear duration-100 border-gray-100 focus:border-purple-500 hover:border-purple-300"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="isCompleted">completed :</label>
          <input
            onChange={handleChangeValue}
            name="isCompleted"
            defaultValue={isCompleted}
            id="isCompleted"
            type="checkbox"
            className=" p-2 rounded-lg w-max border outline-none transition-all ease-linear duration-100 border-gray-100 focus:border-purple-500 hover:border-purple-300"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-3 bg-purple-600 transition-all ease-linear duration-100 hover:bg-purple-900 text-white rounded-lg font-bold"
        >
          Edit
        </button>
      </form>
    </>
  );
};

export default EditTodoForm;
