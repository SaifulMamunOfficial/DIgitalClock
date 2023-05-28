function updateClock() {
  var clock = document.getElementById('clock');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Convert hours to 12-hour format
  var meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  // Add leading zeros to minutes and seconds
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Format the time
  var formattedTime = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  // Display the formatted time
  clock.innerHTML = formattedTime;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);
