const taskList = [];
taskList.length;
const taskElement = document.getElementById("todolist");
const completed=document.getElementById("completed");
const noTaskElement = document.getElementById("no-task");

function task(name, severity) 
{
  this.name = name;
  this.severity = severity;
}

//Add Task

function Add() {
  let name = document.getElementById("task");
  let severity = 0;

  if (document.getElementById("High").checked) {
    severity = "a";
  }
  else if (document.getElementById("Middle").checked) {
    severity = "b";
  }
  else if (document.getElementById("Low").checked) {
    severity = "c";
  }

  taskList.push(new task(name.value, severity));
  renderTasks(taskList);
  name.value = "";
  name.focus();

}

//List #ToDo

function renderTasks(taskList) {
  if (taskList.length > 0) {
    noTaskElement.style.display = "none";
  }
  else {
    noTaskElement.style.display = "unset";
  }
 
  taskList.sort((a, b) => a.severity > b.severity ? 1 : -1); // sort by severity
  taskElement.innerHTML = ""; //elementin içindeki herşeyi temizle
 
  for (var i = 0; i < taskList.length; i++) 
  {
    const div = document.createElement("div");
    div.setAttribute("class","task");
    div.setAttribute("draggable","true");
    div.setAttribute("ondragstart","event.dataTransfer.setData('text/plain',null)");


    const btnStart = document.createElement("input");
    btnStart.setAttribute("type", "button");
    btnStart.setAttribute("class", "btnStart");
    btnStart.setAttribute("value", "START");
    

    const p = document.createElement("p");
    p.setAttribute("class",taskList[i].severity);
    p.innerText = taskList[i].name ;

    div.appendChild(p);
    div.appendChild(btnStart);
    taskElement.appendChild(div);
  }  
}

const startButtons=document.getElementsByClassName("btnStart"); //documentsByClassName return array

if(taskList.length>0) 
{
  var i = startButtons.length;
  while (i--)
  startButtons.addEventListener("click",function(){ alert("Hello World!"); });
}




//Digital Clock
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}
showTime();


//Dragge

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
  taskList.Re
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "container") {
    event.target.style.background = "90e0ef";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "container") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "container") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);