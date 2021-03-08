# data_pagination_and_filtering
 *Pagination project that contains information for example students.*

**Features**
 - Displays a list of example students
 - Utilizes pagination to organize the list
 - Contains a search function to filter the list

**Code Example**
```
/*
This function will create and insert/append the elements needed for the page buttons
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
```

**How to use?**  
You can preview what the code does by downloading the project and opening index.html.