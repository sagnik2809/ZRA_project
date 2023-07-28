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
    const navbarItems = document.getElementsByClassName('navbar-item');
    const casesTab = document.getElementById('cases-tab');
    const casesTableContainer = document.getElementById('cases-table-container');
    const casesTableBody = document.getElementById('cases-table-body');
  
    // Function to remove 'active' class from all navbar items
    function removeActiveClass() {
      Array.from(navbarItems).forEach((item) => {
        item.classList.remove('active');
      });
    }
  
    // Event listeners for navbar items
    Array.from(navbarItems).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        removeActiveClass();
        item.classList.add('active');
      });
  
      item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active');
  
        // Hide the cases table container if it's not the "Cases" tab
        if (item !== casesTab) {
          casesTableContainer.style.display = 'none';
        }
      });
    });
  
    // Event listener for the "Cases" tab
    casesTab.addEventListener('click', () => {
      // Fetch data from the API
      fetch('http://167.71.232.203//zra/MAPP_API/get_comp_list.php?usertype=1')
        .then((response) => response.json())
        .then((data) => {
          // Clear any existing rows in the table
          casesTableBody.innerHTML = '';
  
          // Generate rows dynamically based on the data from the API
          data.forEach((caseData) => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${caseData.ticketNumber}</td>
              <td>${caseData.customerName}</td>
              <td>${caseData.category}</td>
              <td>${caseData.subcategory}</td>
              <td>${caseData.status}</td>
              <td>${caseData.createdOn}</td>
            `;
            casesTableBody.appendChild(row);
          });
  
          // Show the table container
          casesTableContainer.style.display = 'block';
        })
        .catch((error) => {
          console.error('Error fetching cases data:', error);
          // Optionally show an error message if data cannot be fetched
        });
    });
  });