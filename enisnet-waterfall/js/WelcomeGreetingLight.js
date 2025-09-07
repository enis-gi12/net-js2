const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
let greeting = "Hello, Enis!";

if (hour < 12) greeting = "Good morning, Enis!";
else if (hour < 18) greeting = "Good afternoon, Enis!";
else greeting = "Good evening, Enis!";

greetingEl.textContent = greeting;
