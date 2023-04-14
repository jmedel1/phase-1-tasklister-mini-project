document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event){ 
    event.preventDefault();
    
    const nameInput = document.getElementById("new-task-description");
    const name = nameInput.value;
    console.log("Form submitted with name:", name);

    nameInput.value = "";
  });
});
