// script.js

const list = document.getElementById("infi-list");
let itemCount = 0;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = "Item " + itemCount;
    list.appendChild(li);
  }
}


addItems(10);

const observer = new IntersectionObserver((entries) => {
  const lastEntry = entries[0];
  if (lastEntry.isIntersecting) {
    
    addItems(2);
    
    observer.unobserve(lastEntry.target);
    observer.observe(list.lastElementChild);
  }
}, {
  root: list,        
  rootMargin: "0px",
  threshold: 1.0    
});


observer.observe(list.lastElementChild);
