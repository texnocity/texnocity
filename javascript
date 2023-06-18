// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Perform form validation
  if (!name || !email || !message) {
    alert('Please fill in all fields!');
    return;
  }

  // Send the form data to the server (example implementation)
  // Replace the URL with the actual server endpoint
  const formData = {
    name: name,
    email: email,
    message: message
  };

  fetch('https://example.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      // Display success message to the user
      alert('Form submitted successfully!');
      // Clear the form inputs
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    })
    .catch(error => {
      // Display error message to the user
      alert('An error occurred. Please try again later.');
    });
}

// Attach form submission event listener
document.querySelector('form').addEventListener('submit', handleFormSubmit);
