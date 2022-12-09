// Number of students displayed on a single page
const studentsPerPage = 9;

/*
Create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * studentsPerPage) -studentsPerPage;
   const endIndex = page * studentsPerPage;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   // Loop through student data and append each student object to HTML
   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {
         let student = `<li class="student-item cf">
                           <div class="student-details">
                              <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
                              <h3>${data[i].name.first} ${data[i].name.last}</h3>
                              <span class="email">${data[i].email}</span>
                           </div>
                           <div class="joined-details">
                              <span class="date">${data[i].registered.date}</span>
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

   // Pagination button event handler
   linkList.addEventListener('click', e => {
      if(e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   });
}

// Call functions
showPage(data, 1);
addPagination(data);