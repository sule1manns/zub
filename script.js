function showOptions() {
  var options = document.querySelector('.options');
  options.style.display = 'block';
}

function hideBox() {
  var box = document.querySelector('.box');
  var options = document.querySelector('.options');

  // Hide options
  options.style.display = 'none';

  // Add a class to apply margin for centering
  box.classList.add('center-box');

  // Set random position
  var randomLeft = Math.random() * (window.innerWidth - box.offsetWidth);
  var randomTop = Math.random() * (window.innerHeight - box.offsetHeight);

  // Set a timeout to make the box reappear after 1 second
  setTimeout(function() {
    // Remove the class to reset the style
    box.classList.remove('center-box');

    // Set the box position
    box.style.left = randomLeft + 'px';
    box.style.top = randomTop + 'px';

    // Show the box
    box.style.display = 'block';
  }, 1000);
}

function redirectUser() {
  var userResponse = confirm("Do you want to see a cute video of Sullo?");
  
  if (userResponse) {
    // If the user clicks "OK" in the confirmation, navigate to the "cutie-message.html" page
    window.location.href = 'cutie-message.html';
  } else {
    // If the user clicks "Cancel" in the confirmation, do nothing
    // You can add additional logic here if needed
  }
}



