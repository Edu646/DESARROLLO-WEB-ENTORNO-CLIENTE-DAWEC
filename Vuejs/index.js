
window.onload =()=>{
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("grocery-form");
        const input = document.getElementById("grocery-input");
        const list = document.getElementById("grocery-list");
        const clearBtn = document.getElementById("clear-btn");
      
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const value = input.value.trim();
          if (value) {
            addItem(value);
            input.value = "";
          }
        });
      
        clearBtn.addEventListener("click", () => {
          list.innerHTML = "";
        });
      
        function addItem(text) {
          const li = document.createElement("li");
      
          li.innerHTML = `
            <span>${text}</span>
            <div>
              <button class="edit-btn">✏️</button>
              <button class="delete-btn">🗑️</button>
            </div>
          `;
      
          const editBtn = li.querySelector(".edit-btn");
          const deleteBtn = li.querySelector(".delete-btn");
      
          editBtn.addEventListener("click", () => {
            input.value = text;
            li.remove();
          });
      
          deleteBtn.addEventListener("click", () => {
            li.remove();
          });
      
          list.appendChild(li);
        }
      });
}



  