function Robot(){

}
function Drone(){

}
Drone.prototype = new Robot();
function RC(){

}
RC.prototype = new Robot();
function Bipedal(){

}
Bipedal.prototype = new Robot();
function QuadGunned(){

}
QuadGunned.prototype = new Drone();
function Armored(){

}
Armored.prototype = new Drone();
function SawEquipped(){

}
SawEquipped.prototype = new RC();
function HammerEquipped(){

}
HammerEquipped.prototype = new RC();
function Offensive(){

}
Offensive.prototype = new Bipedal();
function Defensive(){

}
Defensive.prototype = new Bipedal();
// You'll be building robots to battle each other.

// A base Robot function.
// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
// Give each robot model a different range of damage they do using the same technique.
//
// When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
// You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
