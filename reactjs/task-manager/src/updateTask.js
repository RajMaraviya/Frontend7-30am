import React,{useEffect, useRef} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function UpdateTask() {
    const Navigate = useNavigate();
    const { id } = useParams();
  const taskName = useRef("")
  const date = useRef("");
  useEffect(() => {
    axios.get(`https://project-data-8dy4.onrender.com/task/${id}`)
      .then((response) => {
        taskName.current.value = response.data.taskName
        date.current.value = response.data.date
      });
  }, []);
  const UpdateTaskHandler = () => {
    var update = {
      taskName: taskName.current.value,
      date: date.current.value
    };
    //update the data using PUT method
    axios.put(`https://project-data-8dy4.onrender.com/task/${id}`, update)
      .then((response) => {
        alert('Updated')
        Navigate("/");
      });
  }
  return (
      <>
          <div class="card text-white w-50 bg-dark mx-auto rounded mt-5">
            <div class="card-header">
              <h5 class="card-title text-center" id="exampleModalLabel">Modal title</h5>
            </div>
            <div class="card-body">
              <div class="input-group mb-3">
                <span class="input-group-text bg-dark text-white" id="basic-addon1"><i class="bi bi-list-task"></i></span>
                <input type="text" class="form-control bg-dark text-white" ref={taskName} />
                <input type="date" class="form-control bg-dark text-white" ref={date} />
              </div>
            </div>
            <div class="card-footer text-center">
              <button type="button" class="btn btn-secondary" onClick={UpdateTaskHandler}>Update</button>
            </div>
          </div>
    </>
  )
}
