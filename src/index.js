//Basic Deliverables

document.addEventListener("DOMContentLoaded", function(){
  console.log("oof");
  //Identify the form that is taking the user's content.
  let taskForm = document.querySelector("#create-task-form");

  //Identify where we want the submission to go.
  let taskList = document.querySelector("#tasks")

  //Create an event listener for our form
  taskForm.addEventListener("submit", function(event){

    //Allow our form to ignore its default refresh setting.
    event.preventDefault();
    
    //Record the value of the user's input. 
    let newTask = document.querySelector("#new-task-description").value;

    //Adds recorded values to our task list.
    taskList.innerHTML += `<li>${newTask}</li>`




  })
  

 
});
