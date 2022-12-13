// Number of students displayed on a single page
const studentsPerPage = 9;

const studentList = document.querySelector('.student-list');
const header = document.querySelector('.header');

const searchBar = `<label for="search" class="student-search">
                     <span>Search by name</span>
                     <input id="search" placeholder="Search by name...">
                     <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
                  </label>`;
header.insertAdjacentHTML('beforeend', searchBar);
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('button');

// Message to display if there are no matching search results
const searchMessage = document.createElement('span');
searchMessage.className = 'no-results';

/*
Filter search results
*/
function filterSearch(list) {
   const newList = [];
   const searchValue = searchInput.value.toLowerCase();

   // Loop through student data to determine search matches
   for(let i = 0; i < list.length; i++) {
      const name = `${list[i].name.first} ${list[i].name.last}`;

      if(name.toLowerCase().includes(searchValue)) {
         newList.push(list[i]);
      }
   }

   // Update page to show new results and correct pagination
   addPagination(newList);
   showPage(newList, 1);
   
   // Display a message if there are no matching search results
   if(newList.length === 0) {
      studentList.appendChild(searchMessage);
      searchMessage.textContent = `No search results were found that match: ${searchValue}`;
   } else {
      searchMessage.textContent = '';
   }

}


/*
Create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * studentsPerPage) -studentsPerPage;
   const endIndex = page * studentsPerPage;
   studentList.innerHTML = '';

   // Loop through student data and append each student object to HTML
   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {
         let student = `<li class="student-item cf">
                           <div class="student-details">
                              <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                              <h3>${list[i].name.first} ${list[i].name.last}</h3>
                              <span class="email">${list[i].email}</span>
                           </div>
                           <div class="joined-details">
                              <span class="date">${list[i].registered.date}</span>
                           </div>
                        </li>`;
         studentList.insertAdjacentHTML('beforeend', student); 
      }
   }
}


/*
Create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const numOfButtons = Math.ceil(list.length / studentsPerPage); // Calculate how many pagination buttons we need
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   // Create and insert/append pagination buttons
   for(let i = 0; i < numOfButtons; i++) {
      let paginationButton = `<li>
                                 <button type="button">${i + 1}</button>
                              </li>`;                                    
      linkList.insertAdjacentHTML('beforeend', paginationButton);
      linkList.querySelector('button').className = 'active'; // Highlight current page button
   }

   // Pagination button click handler
   linkList.addEventListener('click', e => {
      if(e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   });
}

// Filter search results
searchButton.addEventListener('click', () => {
   filterSearch(data);
});
searchInput.addEventListener('keyup', e => {
   if(e.target.tagName === 'INPUT') {
      filterSearch(data);
   }
});

// Call functions to initialize page
showPage(data, 1);
addPagination(data);