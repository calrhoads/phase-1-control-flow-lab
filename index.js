function scuberGreetingForFeet(distance){

  if (distance<= 200) {
  return "This one is on me!"
}

  if (distance>= 400 && distance<=2000) {
  return "That will be twenty bucks."}

  if (distance>=2000 && distance<=2500) {
    return "I will gladly take your thirty bucks."
  }
  
  if (distance > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."

}

function switchOnCharmFromTip(thanks){
  switch (thanks) {
     case "generous":
      thanks = "Thank you so much."
      break;
    case "not as generous":
      thanks = "Thank you."
      break;
    case "thanks for everything":
      thanks = "Bye."
      break;
  }
  return thanks
}