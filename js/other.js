{/* <div class="divButton">
<button id="back" class="dirbtn" ><i class="fa-solid fa-angles-left"></i></button>
<button id="next" class="dirbtn" ><i class="fa-solid fa-angles-right"></i></button>
</div>

<div class="divButton">
<button id="back" class="dirbtn" onclick="Add()"><i class="fa-solid fa-angles-left"></i></button>
</div> */}


//--------------------------------------------------------------------------------------------------------------------//
function start(taskList) 
{

  alert("hello");

  if (!taskList.length > 0) 
  {
    return;
  }

  inProgress.appendChild(document.querySelector('div'));
  document.querySelector('div').innerHTML="";
 
  for (var i = 0; i < taskList.length; i++) 
  {

    var list = document.querySelector('ul');
    list.addEventListener('checked', function (ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);

  }

  $('.cb').change(function () {
    var cbVal = this.checked ? 'on ' : 'off ';
    cbVal += $('[for=' + this.id + ']').text();
    inprogress.append('<li>' + cbVal + '</li>');
  });
}

//--------------------------------------------------------------------------------------------------------------------//

function renderTasks(taskList) {
  if (taskList.length > 0) {
    noTaskElement.style.display = "none";
  }
  else {
    noTaskElement.style.display = "unset";
  }
  taskList.sort((a, b) => a.severity > b.severity ? 1 : -1); // sort by severity
  taskElement.innerHTML = ""; //elementin içindeki herşeyi temizle
 
  for (var i = 0; i < taskList.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("class","task");
    div.setAttribute("draggable","true");
    
    div.setAttribute("ondragstart","event.dataTransfer.setData('text/plain',null)");

    inProgress.appendChild(div);
    completed.appendChild(div);
  
    const btnStart = document.createElement("input");
    // btnStart.setAttribute("type", "button");
    // btnStart.setAttribute("class", "btnStart");
    // btnStart.setAttribute("value", "START");;

    const p = document.createElement("p");
    p.setAttribute("class",taskList[i].severity);
    p.innerText = taskList[i].name ;

    div.appendChild(p);
    //div.appendChild(btnStart);
    taskElement.appendChild(div);
  }  
}
const startButtons=document.getElementsByClassName("btnStart"); //documentsByClassName return array

if(taskList.length>0) 
{
  var i = startButtons.length;
  while (i--)
  startButtons[i].addEventListener("click",start(taskList),true);
}


//--------------------------------------------------------------------------------------------------------------------//

document.addEventListener('DOMContentLoaded', (event) => {



  function handleDragEnd(e) 
  {
    //this.style.opacity = '1';

    items.forEach(function (item) 
    {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }

  function handleDragEnter(e) 
  {
    //this.class.add('over');
      if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }
  }

  function handleDragLeave(e)
   {
    //this.class.remove('over');

    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  }

  let items = document.querySelectorAll('.taskList .container');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });

  
function handleDragStart(e) 
{
 // this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);

}

function handleDrop(e) {
  e.stopPropagation();

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}
});

