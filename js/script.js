/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Number of items to display on the currently selected page
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
         let itemInfo = list[i].innerHTML;
         itemInfo = `<li class="student-item cf">
                     <div class="student-details">
                        <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
                        <h3>${list[i].name.first} ${list[i].name.last}</h3>
                        <span class="email">${list[i].email}</span>
                     </div>
                     <div class="joined-details">
                        <span class="date">${list[i].registered.date}</span>
                     </div>
                  </li>`;

         ul.insertAdjacentHTML('beforeend', itemInfo);
      }
   }
}

/*
This function will create and insert/append the elements needed for the pageTotal buttons
*/
function addPagination(list)
{
   const pageTotal = Math.ceil(list.length / itemsPerPage);

   const ul = document.querySelector('.link-list');
   ul.innerHTML = '';

   // Add new list > button elements for each page based on total page count
   for (let i = 0; i < pageTotal; i++)
   {
      let button = `<li>
                       <button type="button">${i + 1}</button>
                    </li>`;
      ul.insertAdjacentHTML('beforeend', button)
   }

   // Assign the child element of the Li to a new variable to keep track of current page
   let currentPage = ul.firstElementChild.firstElementChild;
   currentPage.className = 'active';

   // Event that will display a new page corresponding to the page index
   ul.addEventListener('click', (e) => {
      if (e.target.type === 'button')
      {
         currentPage.classList.remove('active');
         currentPage = e.target;
         currentPage.className = 'active';
         showPage(data, currentPage.textContent);
      }
      // Else do nothing
   });
}

showPage(data, 1); // Initial page display
addPagination(data); // Add pagination to page