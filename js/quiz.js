"use strict";
let Robot1Health = null;
function Robot(){
	this.name = null;
	this.attack1 = "Melee";
	this.attack2 = "Flamethrower";
	this.attack3 = "Explosive";
}
function Drone(){
	this.type = "Drone";
}
Drone.prototype = new Robot();
function RC(){
	this.type = "RC";
}
RC.prototype = new Robot();
function Bipedal(){
	this.type = "Bipedal";
}
Bipedal.prototype = new Robot();
function QuadGunned(){
	this.model = "Quad Gunner";
	this.damage = Math.floor(Math.random() * 31) + 65;
	this.health = Math.floor(Math.random() * 31) + 150;
}
QuadGunned.prototype = new Drone();
function Armored(){
	this.model = "Armored";
	this.damage = Math.floor(Math.random() * 21) + 40;
	this.health = Math.floor(Math.random() * 31) + 225;
}
Armored.prototype = new Drone();
function SawEquipped(){
	this.model = "Saw Equipped";
	this.damage = Math.floor(Math.random() * 21) + 70;
	this.health = Math.floor(Math.random() * 31) + 135;
}
SawEquipped.prototype = new RC();
function HammerEquipped(){
	this.model = "Hammer Equipped";
	this.damage = Math.floor(Math.random() * 21) + 65;
	this.health = Math.floor(Math.random() * 31) + 165;
}
HammerEquipped.prototype = new RC();
function Offensive(){
	this.model = "Offensive";
	this.damage = Math.floor(Math.random() * 31) + 60;
	this.health = Math.floor(Math.random() * 31) + 145;
}
Offensive.prototype = new Bipedal();
function Defensive(){
	this.model = "Defensive";
	this.damage = Math.floor(Math.random() * 31) + 45;
	this.health = Math.floor(Math.random() * 31) + 215;
}
Defensive.prototype = new Bipedal();


let selector1 = $('.robot-select-1');
let selector2 = $('.robot-select-2');
let robot1 = null;
let robot2 = null;

$('.confirm').click(handleConfirmClick);
$('.attack1').prop('disabled', true);
$('.attack2').prop('disabled', true);
$('.attack1').click(handleAttackClick1);
$('.attack2').click(handleAttackClick2);

function handleConfirmClick(){
	$('.confirm').prop('disabled', true);
	decideFirstAttacker();
	let robotType1 = selector1.val();
	let robotName1 = $(".robot-name-1").val();
	let robotType2 = selector2.val();
	let robotName2 = $(".robot-name-2").val();
	if (robotType1=== "Quad Gunner"){
		robot1 = new QuadGunned();
		robot1.name = robotName1;
		console.log("robot1",robot1 );

	}
	if (robotType1=== "Armored"){
		robot1 = new Armored();
		robot1.name = robotName1;
		console.log("robot1",robot1 );

	}
	if (robotType1=== "Saw Equipped"){
		robot1 = new SawEquipped();
		robot1.name = robotName1;
		console.log("robot1",robot1 );

	}
	if (robotType1=== "Hammer Equipped"){
		robot1 = new HammerEquipped();
		robot1.name = robotName1;
		console.log("robot1",robot1 );

	}
	if (robotType1=== "Offensive"){
		robot1 = new Offensive();
		robot1.name = robotName1;
		console.log("robot1",robot1 );

	}
	if (robotType1=== "Defensive"){
		robot1 = new Defensive();
		robot1.name = robotName1;
		console.log("robot1",robot1 );

	}
	if (robotType2=== "Quad Gunner"){
		robot2 = new QuadGunned();
		robot2.name = robotName2;
		console.log("robot2",robot2 );

	}
	if (robotType2=== "Armored"){
		robot2 = new Armored();
		robot2.name = robotName2;
		console.log("robot2",robot2 );

	}
	if (robotType2=== "Saw Equipped"){
		robot2 = new SawEquipped();
		robot2.name = robotName2;
		console.log("robot2",robot2 );

	}
	if (robotType2=== "Hammer Equipped"){
		robot2 = new HammerEquipped();
		robot2.name = robotName2;
		console.log("robot2",robot2 );

	}
	if (robotType2=== "Offensive"){
		robot2 = new Offensive();
		robot2.name = robotName2;
		console.log("robot2",robot2 );

	}
	if (robotType2=== "Defensive"){
		robot2 = new Defensive();
		robot2.name = robotName2;
		console.log("robot1",robot2 );

	}

}

function handleAttackClick1(){
	let tempRobot1Health = robot1.health - robot2.damage;
	robot1.health = tempRobot1Health;
	console.log("health",tempRobot1Health );
	$('.attack1').prop("disabled", true);
	$('.attack2').prop("disabled", false);
	if (tempRobot1Health <= 0){
		alert("Robot 2 wins");
		$('.attack2').prop("disabled", true);
	}
}

function handleAttackClick2(){
	let tempRobot2Health = robot2.health - robot2.damage;
	robot2.health = tempRobot2Health;
	$('.attack1').prop("disabled", false);
	$('.attack2').prop("disabled", true);
	console.log("health2",tempRobot2Health );
	if (tempRobot2Health <= 0){
		alert("Robot 1 wins");
		$('.attack1').prop("disabled", true);

	}
}

function decideFirstAttacker(){
	let firstAttacker = Math.floor(Math.random()*2)+1;
	if(firstAttacker === 1){
		$('.attack1').prop("disabled", false);
	}
	if(firstAttacker === 2){
		$('.attack2').prop("disabled", false);
	}
}
