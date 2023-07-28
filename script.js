window.addEventListener('DOMContentLoaded', (event) => {
    const navbarItems = document.getElementsByClassName('navbar-item');
  
    // Add event listeners to navbar items
    Array.from(navbarItems).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        removeActiveClass();
        item.classList.add('active');
      });
  
      item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active');
      });
    });
  
    // Remove 'active' class from all navbar items
    function removeActiveClass() {
      Array.from(navbarItems).forEach((item) => {
        item.classList.remove('active');
      });
    }
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const casesTab = document.getElementById('cases-tab');
    const casesTableContainer = document.getElementById('cases-table-container');
  
    casesTab.addEventListener('click', () => {
      casesTableContainer.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Customer Name</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Status</th>
              <th>Created On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>John Doe</td>
              <td>Technical</td>
              <td>Hardware</td>
              <td>Open</td>
              <td>2023-07-17</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Jane Smith</td>
              <td>Support</td>
              <td>Software</td>
              <td>Closed</td>
              <td>2023-07-18</td>
            </tr>
            <!-- Add more rows as needed -->
          </tbody>
        </table>
      `;
    });
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const casesTab = document.getElementById('cases-tab');
    const casesTableContainer = document.getElementById('cases-table-container');
  
    casesTab.addEventListener('click', () => {
      casesTableContainer.style.display = 'block';
    });
  
    const navbarItems = document.getElementsByClassName('navbar-item');
    Array.from(navbarItems).forEach((item) => {
      item.addEventListener('click', () => {
        if (item !== casesTab) {
          casesTableContainer.style.display = 'none';
        }
      });
    });
  });