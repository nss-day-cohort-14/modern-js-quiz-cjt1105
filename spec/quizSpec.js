describe("Testing for robot exercise", function(){
	it("should have a function Robot defined", function(){
		expect(Robot).toBeDefined();
	});
	it("should have a function Drone defined", function(){
		expect(Drone).toBeDefined();
	});
	it("Drone should be a prototype of robot", function(){
		expect(Drone.prototype).toBeDefined();
	});
	it("should have a function RC defined", function(){
		expect(RC).toBeDefined();
	});
	it("RC should be a prototype of robot", function(){
		expect(RC.prototype).toBeDefined();
	});
	it("should have a function Bipedal defined", function(){
		expect(Bipedal).toBeDefined();
	});
	it("Bipedal should be a prototype of robot", function(){
		expect(Bipedal.prototype).toBeDefined();
	});
	it("should have a function QuadGunned defined", function(){
		expect(QuadGunned).toBeDefined();
	});
	it("QuadGunned should be a prototype of Drone", function(){
		expect(QuadGunned.prototype).toBeDefined();
	});
	it("should have a function Armored defined", function(){
		expect(Armored).toBeDefined();
	});
	it("Armored should be a prototype of Drone", function(){
		expect(Armored.prototype).toBeDefined();
	});
	it("should have a function SawEquipped defined", function(){
		expect(SawEquipped).toBeDefined();
	});
	it("SawEquipped should be a prototype of RC", function(){
		expect(SawEquipped.prototype).toBeDefined();
	});
	it("should have a function HammerEquipped defined", function(){
		expect(HammerEquipped).toBeDefined();
	});
	it("HammerEquipped should be a prototype of RC", function(){
		expect(HammerEquipped.prototype).toBeDefined();
	});
	it("should have a function Offensive defined", function(){
		expect(Offensive).toBeDefined();
	});
	it("Offensive should be a prototype of Bipedal", function(){
		expect(Offensive.prototype).toBeDefined();
	});
	it("should have a function Defensive defined", function(){
		expect(Defensive).toBeDefined();
	});
	it("Defensive should be a prototype of Bipedal", function(){
		expect(Defensive.prototype).toBeDefined();
	});

});