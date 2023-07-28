// Function to validate the username field
function validateUsername() {
    const usernameInput = document.getElementById('name');
    const usernameValue = usernameInput.value.trim();
  
    if (!usernameValue) {
      alert('Username must be filled');
      return false;
    }
  
    if (!/^[A-Za-z\s]+$/.test(usernameValue)) {
      alert('Username must contain only alphabets');
      return false;
    }
  
    return true;
  }
  
  // Function to validate the phone number field
  function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value.trim();
  
    if (!phoneValue) {
      alert('Phone number must be filled');
      return false;
    }
  
    if (!/^\d{10}$/.test(phoneValue)) {
      alert('Invalid phone number. Phone number must be a 10-digit number');
      return false;
    }
  
    return true;
  }
  
  // Function to validate the password fields
  function validatePassword() {
    const createPasswordInput = document.querySelectorAll('.password')[0];
    const confirmPasswordInput = document.querySelectorAll('.password')[1];
    const createPasswordValue = createPasswordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
  
    if (!createPasswordValue || !confirmPasswordValue) {
      alert('Both Create Password and Confirm Password fields are required');
      return false;
    }
  
    if (createPasswordValue !== confirmPasswordValue) {
      alert('Create Password and Confirm Password must be the same');
      return false;
    }
  
    return true;
  }
  
  // Add event listener for form submission
  const signUpForm = document.querySelector('.forms');
  signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const isUsernameValid = validateUsername();
    const isPhoneNumberValid = validatePhoneNumber();
    const isPasswordValid = validatePassword();
  
    if (isUsernameValid && isPhoneNumberValid && isPasswordValid) {
      // If all validations pass, you can proceed with the signup logic here
      alert('Sign up successful!');
      window.location.href = 'navbar.html';
      // Replace the alert above with your signup logic (e.g., sending data to a server)
    }
  });
  
  // Functionality for password visibility toggle
  const passwordInputs = document.querySelectorAll('.password');
  const showHidePwIcons = document.querySelectorAll('.showHidePw');
  
  for (let i = 0; i < showHidePwIcons.length; i++) {
    showHidePwIcons[i].addEventListener('click', function () {
      const type = passwordInputs[i].getAttribute('type');
      passwordInputs[i].setAttribute('type', type === 'password' ? 'text' : 'password');
      showHidePwIcons[i].classList.toggle('active');
    });
  }