import React, { useState } from "react";
import { TodoListInputProps } from "../../utils/interfaces";
import { Trash2, Plus } from "lucide-react";

const TodoListInput: React.FC<TodoListInputProps> = ({
  todolist,
  setTodoList,
}) => {
  const [option, setOption] = useState("");

  // Function to handle adding an option
  const handleAddOption = () => {
    if (option.trim()) {
      setTodoList([...todolist, option.trim()]);
      setOption("");
    }
  };
  console.log(todolist);
  // Function to handle deleting an option
  const handleDeleteOption = (index: number) => {
    const updatedArr = todolist.filter((_, idx) => idx !== index);
    setTodoList(updatedArr);
  };
  return (
    <div>
      {todolist?.map((item, index) => (
        <div
          key={item}
          className="flex justify-between mt-2   bg-[#f0f4f994] border border-slate-400 dark:border-white px-2.5 py-2 rounded-md placeholder:text-gray-500  dark:bg-[#1f1f1f]  dark:placeholder:text-white/50 "
        >
          <p className="text-sm text-black dark:text-white">
            {/* Adds 0 in front of none two digit numbers */}
            <span className="text-xs text-gray-400 font-semibold">
              {index < 9 ? `0${index + 1}` : index + 1}
            </span>{" "}
            {item}
          </p>
          <button
            className="cursor-pointer"
            onClick={() => handleDeleteOption(index)}
          >
            <Trash2 className="size-4 text-red-500" />
          </button>
        </div>
      ))}
      <div className="flex items-center gap-5 ">
        <input
          type="text"
          placeholder="Enter Task"
          value={option}
          onChange={({ target }) => setOption(target.value)}
          className="form-input"
        />
        <button className="card-btn text-nowrap" onClick={handleAddOption}>
          <Plus className="size-4" />
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoListInput;
