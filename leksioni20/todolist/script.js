// Kur DOM-i është i ngarkuar, fillo me inicializimin e aplikacionit
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Marrim detyrat nga localStorage, ose krijojmë një array bosh nëse nuk ka
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    // Ruajmë detyrat në localStorage
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    // Renderojmë të gjitha detyrat në listë
    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
  
        // Checkbox për shënim si të përfunduar
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.className = "form-check-input me-2";
        checkbox.addEventListener("change", function() {
          tasks[index].completed = checkbox.checked;
          saveTasks();
          renderTasks();
        });
  
        // Teksti i detyrës
        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) {
          span.style.textDecoration = "line-through";
          span.style.color = "gray";
        }
  
        // Butoni për fshirjen e detyrës
        const removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-danger btn-sm";
        removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        removeBtn.addEventListener("click", function() {
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
        });
  
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
      });
    }
  
    // Shton një detyrë të re në listë
    addTaskBtn.addEventListener("click", function() {
      const text = taskInput.value.trim();
      if (text !== "") {
        tasks.push({ text: text, completed: false });
        saveTasks();
        renderTasks();
        taskInput.value = "";
        taskInput.focus();
      }
    });
  
    // Lejon shtimin e detyrës me shtypjen e butonit "Enter"
    taskInput.addEventListener("keyup", function(e) {
      if (e.key === "Enter") {
        addTaskBtn.click();
      }
    });
  
    // Renderojmë detyrat kur faqja ngarkohet
    renderTasks();
  });
  