function speedDetector() {
    const speed = prompt("Enter car speed (in km/h): ");
    let points = 0;
    if (speed < 70) {
      return "Ok";
    } else {
      points = Math.floor((speed - 70) / 5);
    }
    if (points > 12) {
      return "License suspended";
    } else {
      return `Points: ${points}`;
    }
  }
  
  console.log(speedDetector());