const input = document.getElementById("input-field")
const addBtn = document.getElementById("add-btn")
const listItems = document.getElementById("list-items")
let count = 0
addBtn.addEventListener("click",()=>{
  count ++
  const temp = `<li id="li-element${count}">${input.value}
  <button id="delete-btn"><img src="images/delete.png" alt="nothing"/></button>
  <button id="done-btn"><img src="images/check.png" alt="nothing"/></button>
  </li>`
  listItems.innerHTML += temp
  const checkBtns = document.querySelectorAll("#delete-btn")
  const deleteBtns = document.querySelectorAll("#done-btn")
  checkBtns.forEach(Btn => {
    Btn.addEventListener("click",(e)=>{
      e.target.parentNode.parentNode.textContent = "Deleted this Task"
    })
  });
  deleteBtns.forEach(Btn => {
    Btn.addEventListener("click",(e)=>{
      e.target.parentNode.parentNode.textContent = "Finished this Task 👌"
    })
  });
})


