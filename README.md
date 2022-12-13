# data_pagination_and_filtering
 *Pagination and search filtering project that contains example student information.*

**Features**
 - Displays a list of example students
 - Uses pagination to organize the list
 - Contains a search function to filter the student list

**Code Preview**
```
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
```

**How To Preview**  
You can preview what the code does by downloading the project and opening index.html.