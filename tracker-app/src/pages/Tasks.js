import React, { useEffect, useState } from "react";
import "../styles/TasksStyle.css";
import { AuthContext } from "../context/UserContext";

const Tasks = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  useEffect(() => {
    fetch("http://127.0.0.1:5300/task/all_tasks", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "LOAD_TASKS", payload: data });
      });
  }, []);

  return (
    <section className="task-body">
      <TaskTableHeader />
      <TaskTableBody />
      <ControlPanel />
      {state.showTaskForm ? <CreateTask /> : ""}
    </section>
  );
};

export default Tasks;

const ControlPanel = () => {
  const { dispatch } = React.useContext(AuthContext);
  const showTaskModal = () => {
    dispatch({ type: "SHOW_TASK_FORM", payload: true });
  };

  return (
    <div className="task-control">
      <button onClick={showTaskModal}>Create Task</button>
    </div>
  );
};

const TaskTableHeader = () => {
  return (
    <div className="task-table-header">
      <div>Task</div>
      <div>Progress</div>
      <div>Start Date</div>
      <div>Due Date</div>
      <div>Action</div>
    </div>
  );
};

const TaskTableBody = () => {
  const { state } = React.useContext(AuthContext);
  return (
    <div className="task-table-body">
      {state.tasks.map((task) => {
        return (
          <div className="task-table-data" key={task._id}>
            <div> {task.title} </div>
            <div className="task-progress-bar">
              <div></div>
            </div>
            <div> {task.startDate.split("T")[0]} </div>
            <div> {task.dueDate.split("T")[0]} </div>
            <div>
              <button className="update-task-btn">Update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CreateTask = () => {
  const { dispatch } = React.useContext(AuthContext);

  const initialValues = {
    title: "",
    details: "",
    startDate: "",
    dueDate: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const hideTaskForm = () => {
    dispatch({ type: "SHOW_TASK_FORM", payload: false });
  };

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("http://127.0.0.1:5300/task/new_task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "ADD_NEW_TASK", payload: data }));

    setFormData(initialValues);
    hideTaskForm();
  };

  return (
    <div className="create-task-overlay">
      <div className="create-task-wrapper">
        <div className="create-task-title">
          <h2>CREATE NEW TASK</h2>
          <button onClick={hideTaskForm}>X</button>
        </div>
        <form className="create-task-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="details">Details:</label>
            <textarea name="details" value={formData.details} onChange={handleInput} />
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInput}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
