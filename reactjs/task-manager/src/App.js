import { useRef, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function App() {
  const Navigate = useNavigate();

// Insert task lists
  const taskName = useRef("");
  const date = useRef("");
  const AddTaskHandler = () => {
    var insert = {
      taskName: taskName.current.value,
      date: date.current.value
    }
    axios.post("http://localhost:4000/task", insert)
      .then()
    getTask();
    alert('Done')
  }

// get task lists
  const [task, setTask] = useState(null);
  useEffect(() => {
    getTask();
  })
  function getTask() {
    axios.get("http://localhost:4000/task")
      .then((response) => {
        setTask(response.data)
      });
  }

// delete task lists
  const deleteTaskHandler = (id) => {
    axios.delete(`http://localhost:4000/task/${id}`)
    .then()
  }
  
  return (
    <>
      <div className="container mt-5 shadow-lg rounded">
        <h1 className='ms-2 text-white'>Task manager <button className='fs-6 btn float-end mt-2 shadow bg-warning' id='AddTask' data-bs-toggle="modal" data-bs-target="#exampleModal">+</button></h1>
        <hr className='rounded' style={{border:"2px solid", backgroundColor:"red"}}/>
      

      <div className="row text-center m-5">
        {task && task.map((item) => {
          return (
            <>
              <div className="col-3">
                <div className='rounded shadow-lg bg-transparent'>
                  <div class="card border-1 bg-transparent mb-3">
                    <div class="card-header">Task {item.id}</div>
                    <div class="card-body">
                      <h5 class="card-title text-start">Task name: {item.taskName}</h5>
                      <p class="card-text text-start">Date : {item.date}</p>
                      <div className='card-footer rounded'>
                        <button className='btn btn-sm shadow mx-4 btn-danger' onClick={() => {if(window.confirm('Delete this task?')){deleteTaskHandler(item.id)};}}><i class="bi bi-trash"></i></button>
                        <button className='btn btn-sm shadow mx-4 btn-success' onClick={() => Navigate(`/update-task/${item.id}`)}><i class="bi bi-pencil"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      </div>

      {/* Add task modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog text-white">
          <div class="modal-content bg-dark">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text bg-dark text-white" id="basic-addon1"><i class="bi bi-list-task"></i></span>
                <input type="text" class="form-control bg-dark text-white" placeholder="Task Name" ref={taskName} />
                <input type="date" class="form-control bg-dark text-white" ref={date} />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
              <button type="button" class="btn btn-info" data-bs-dismiss="modal" onClick={AddTaskHandler}>Add Task</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Task /> */}
    </>
  );
}

export default App;
