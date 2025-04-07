window.onload = function() {
  const greetingElement = document.getElementById("greeting");
  const currentTime = new Date();
  const hours = currentTime.getHours();

  if (hours < 12) {
    greetingElement.textContent = "Good Morning, welcome to Green Kitchen Appliances!";
  } else if (hours < 18) {
    greetingElement.textContent = "Good Afternoon, welcome to Green Kitchen Appliances!";
  } else {
    greetingElement.textContent = "Good Evening, welcome to Green Kitchen Appliances!";
  }
};
