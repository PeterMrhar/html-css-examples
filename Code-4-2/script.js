const greeting = "Hello, world!";
const output = document.getElementById("output");

output.innerHTML = 
  '<p><small>' + greeting + '</small></p>' +
  '<p>' + greeting + '</p>' +
  '<p><big>' + greeting + '</big></p>' +
  '<p style="font-size: 2em;">' + greeting + '</p>';