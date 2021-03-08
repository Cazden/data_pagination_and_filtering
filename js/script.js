/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
const itemsPerPage = 9;

/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page)
{
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';

   // Loop through all items in list and insert/append HTML elements with corresponding data related to the list
   for (let i = 0; i < list.length; i++)
   {
      if (i >= startIndex && i < endIndex)
      {
         let studentInfo = list[i].innerHTML;
         studentInfo = `<li class="student-item cf">
                     <div class="student-details">
                        <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
                        <h3>${list[i].name.first} ${list[i].name.last}</h3>
                        <span class="email">${list[i].email}</span>
                     </div>
                     <div class="joined-details">
                        <span class="date">${list[i].registered.date}</span>
                     </div>
                  </li>`;

         ul.insertAdjacentHTML('beforeend', studentInfo);
      }
   }

   
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
