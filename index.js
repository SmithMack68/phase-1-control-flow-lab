function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';// Write your code here!
} else if (ride >= 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.';
} else (ride > 2500) 
    return 'No can do.'
}


function ternaryCheckCity(destination) {
    return destination === 'NYC'?'Ok, sounds good.': 'No go.'// Write your code here!
}

function switchOnCharmFromTip(cash) {
  switch(cash) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default: 
      return "Bye." // Write your code here!
  }
}