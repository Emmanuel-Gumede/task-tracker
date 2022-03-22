import React, { useEffect, useState } from "react";
import "../styles/TasksStyle.css";
import { AuthContext } from "../context/UserContext";

const Tasks = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  useEffect(() => {
    fetch("http://127.0.0.1:5300/task/all_tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: state.user.userId }),
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
      {state.showOneTask ? <OneTask /> : ""}
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
      <div className="task-toggle-header">+</div>
      <div>Task</div>
      <div>Progress</div>
      <div>Start Date</div>
      <div>Due Date</div>
      <div>Action</div>
    </div>
  );
};

const TaskTableBody = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  const handleUpdate = (e, data) => {
    console.log(e);
  };

  const showOneTask = (taskId) => {
    const oneTask = () => {
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i]["_id"] === taskId) {
          return i;
        }
      }
      return console.log("task not found");
    };

    const data = {
      task: state.tasks[oneTask()],
      modal: true,
    };
    dispatch({ type: "SHOW_ONE_TASK", payload: data });
  };

  return (
    <div className="task-table-body">
      {state.tasks.map((task) => {
        return (
          <div className="task-table-data" key={task._id}>
            <button className="task-data-toggler" onClick={() => showOneTask(task._id)}>
              +
            </button>
            <div> {task.task} </div>
            <div className="task-progress-bar">
              <div style={{ width: task.progress + "%" }}>{task.progress + "%"}</div>
            </div>
            <div> {task.startDate.split("T")[0]} </div>
            <div> {task.dueDate.split("T")[0]} </div>
            <div>
              <button className="update-task-btn" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CreateTask = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  const initialValues = {
    task: "",
    details: "",
    startDate: "",
    dueDate: "",
    userId: "",
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
    formData.userId = state.user.userId;

    fetch("http://127.0.0.1:5300/task/new_task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.user.accessToken,
      },
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
            <label htmlFor="task">Task:</label>
            <input type="text" name="task" value={formData.task} onChange={handleInput} />
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

const OneTask = () => {
  const { state, dispatch } = React.useContext(AuthContext);
  const [taskData, setTaskData] = useState(state.oneTask);

  const hideOneTask = () => {
    dispatch({ type: "SHOW_ONE_TASK", payload: false });
  };

  const handleTaskChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  return (
    <div className="one-task-overlay">
      <div className="one-task-wrapper">
        <div className="one-task-title">
          <h1>MANAGE YOUR TASK</h1>
          <button onClick={hideOneTask}>X</button>
        </div>
        <form className="one-task-form">
          <div className="task-form-section-1">
            <div>
              <label htmlFor="title">Task:</label>
              <input
                type="text"
                name="title"
                value={state.oneTask.task}
                onChange={handleTaskChange}
              />
            </div>
            <div>
              <label htmlFor="dueDate">Due Date:</label>
              <input
                type="date"
                name="dueDate"
                value={state.oneTask.dueDate.split("T")[0]}
                onChange={handleTaskChange}
              />
            </div>
            <div>
              <label htmlFor="dueDate">Progress:</label>
              <input
                type="text"
                name="progress"
                value={state.oneTask.progress}
                onChange={handleTaskChange}
              />
            </div>
          </div>
          <div className="task-form-section-2">
            <label htmlFor="details">Task Details:</label>
            <textarea
              name="details"
              value={state.oneTask.details}
              onChange={handleTaskChange}
            />
          </div>
          <div className="task-form-section-3">
            <div>
              <h3>Comments:</h3>
              <span className="comment-history"></span>
              <span className="task-form-new-comment">
                <label htmlFor="newComment" className="new-comment-label">
                  New Comment:
                </label>
                <textarea name="newComment" />
                <button className="send-comment-btn">Send</button>
              </span>
            </div>
          </div>
          <button>Apply</button>
        </form>
      </div>
    </div>
  );
};
