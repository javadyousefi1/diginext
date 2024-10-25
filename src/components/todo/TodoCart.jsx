import { Trash, Edit2, Edit } from "iconsax-react";
import { useState } from "react";
import Modal from "../Modal";
import EditTodoForm from "./EditTodoForm";

const TodoCart = ({
  title,
  index,
  id,
  isCompleted,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = (status) => setIsOpenModal(status);

  return (
    <>
      <div className="rounded-lg p-2 border  w-[300px] md:w-[600px] md:flex-row flex-col gap-y-2 m-3 flex justify-start items-center gap-x-3 text-sm">
        <div className="bg-purple-200 min-w-6 min-h-6 w-6 h-6 rounded-full flex justify-center items-center">
          {index + 1}
        </div>
        <span>Title :</span>
        <span title={title} className="max-w-[25ch] whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </span>
        <span>-</span>
        <span className="whitespace-nowrap">
          Status : {" "}
          {isCompleted ? (
            <span className="text-green-400">completed</span>
          ) : (
            <span className="text-red-400">not completed</span>
          )}
        </span>
        <div className="flex-1 flex justify-end items-center gap-x-2">
          <button onClick={() => handleDeleteTodo(id)}>
            <Trash size="20" color="#ef4444" />
          </button>
          <button onClick={() => handleToggleModal(true)}>
            <Edit2 size="20" color="#613c89" />
          </button>
        </div>
      </div>
      <Modal
        title="Edit Todo"
        isOpen={isOpenModal}
        onClose={() => handleToggleModal(false)}
      >
        <EditTodoForm
          title={title}
          isCompleted={isCompleted}
          id={id}
          handleEditTodo={handleEditTodo}
          onClose={() => handleToggleModal(false)}
        />
      </Modal>
    </>
  );
};

export default TodoCart;
