/******************************************
Treehouse FSJS Techdegree:
Project 2 - Data Pagination and Filtering
******************************************/

// Number of items to display on the currently selected page
const itemsPerPage = 9;

const header = document.querySelector('.header');
header.innerHTML += `<label for="search" class="student-search">
                        <span>Search by name</span>
                        <input id="search" placeholder="Search by name...">
                        <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
                     </label>`;
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('button');

/***
 * This function will create and insert/append the elements needed to display a "page" of nine students
***/
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

/***
 * This function will create and insert/append the elements needed for the page buttons
***/
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
      ul.insertAdjacentHTML('beforeend', button);
      ul.querySelector('button').className = 'active';
   }

   // Event that will display a new page corresponding to the page index
   ul.addEventListener('click', (e) => {
      if (e.target.type === 'button')
      {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(data, e.target.textContent);
      }
      // Else do nothing
   });
}

/***
 * This function will filter search results based on user input
***/
function filterSearch(list)
{
   const filter = searchInput.value.toLowerCase(); // Get user input
   const filteredList = []; // list to store filtered results

   if (searchInput.value.length !== 0)
   {
      // Loop through list to compare filter to list data, then add to new list if data matches filter
      for (let i = 0; i < list.length; i++)
      {
         const name = `${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`;

         if (name.includes(filter))
         {
            filteredList.push(list[i]);
         }

         // Display new filtered results on the page along with correct pagination
         showPage(filteredList, 1);
         addPagination(filteredList);

         // Notify the user if there are no search results
         const userAlert = document.createElement('span');
         document.querySelector('.student-list').appendChild(userAlert);
         
         if (filteredList.length === 0)
         {
            userAlert.textContent = `No results found for "${searchInput.value}"`; 
         }
         else
         {
            userAlert.textContent = '';
         }
      }
   }
   else
   {
      // Switch back to default page display if search bar is empty
      showPage(data, 1);
      addPagination(data);
   }
}

// Listen for search button to filter list
searchButton.addEventListener('click', (e) => {
   e.preventDefault();
   filterSearch(data);
});

// Listen for search input to filter list
searchInput.addEventListener('keyup', () => {
   filterSearch(data);
});

showPage(data, 1); // Initial page display
addPagination(data); // Add pagination to page