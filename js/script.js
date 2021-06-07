/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
let items = 9;
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  // console.log(list); to see if we have the list items from data.js
  const startIndex = (page * items) - items;
  const endIndex = page * items;
  let studentList = document.querySelector(".student-list");

  studentList.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      const studentItem = `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">${list[i].registered.date}</span>
         </div>
       </li>
         
         `;

      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  // divide pages based on how many list items there are
  const numOfPages = Math.ceil(list.length / items);
  const linkList = document.querySelector(".link-list");

  linkList.innerHTML = "";
  for (let i = 0; i < numOfPages; i++) {
    // create list item, button then append button to li and li to linkList
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.type = "button";
    button.innerText = `${i + 1}`; // Array iem starts at 0 so add 1
    li.append(button);

    // add each button to the empty list area
    linkList.insertAdjacentElement("beforeend", li);

    // Targets the child of the first li - button
    linkList.firstElementChild.firstElementChild.className = "active";

    linkList.addEventListener("click", function (e) {
      e.preventDefault();
      
      if (e.target.tagName === "BUTTON") {
         document.querySelector('.active').className = '';
          e.target.className = "active";
          showPage(list, e.target.textContent); 
          
      }
    });
  }
}

// Call functions
showPage(data, 1);
addPagination(data);
