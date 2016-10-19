//declaring food variables with associated cost and names
var Tso=[7.89, "General Tso\'s Chicken"];
var loMein=[4.49, "Chicken Lo Mein"];
var eggRoll=[2.20, "Egg Rolls (2)"];
var taco=[3.49, "Tacos(3)"];
var lemonade=[1.50, "Drink"];

//the diner class
var diner = {
  name: "",
  ateCost: [],

  subtotal: function(){
    var sub = 0;
    for(var i=0;i<this.ateCost.length;i++){
      sub+=this.ateCost[i];
    }
    return (sub).toFixed(2);
  },
  tax: function(){
    return (this.subtotal()* 0.07).toFixed(2);
  },
  total: function(){
    return (this.subtotal()*1.07).toFixed(2);
  },
  tip: function(){
    return (this.total()*0.2).toFixed(2); // 20%tip
  },
  pushToBill: function(){
    this.ateCost.forEach(function(value){
      Bill.totalCost.push(value);
    });
  }
}

//the bill class for multiple diners
var bill = {
  totalCost: [], // an array comtaining ateCost of every diner
  diners: [diner],

  subtotal: function(){
    var sub=0;
    for(var i=0;i<this.totalCost.length;i++){
      sub+=this.totalCost[i];
    }
    return (sub).toFixed(2);
  },
  tax: function(){
    return (this.subtotal()*.07).toFixed(2);
  },
  total: function(){
    return (this.subtotal()*1.07).toFixed(2);
  },
  tip: function(){
    return (this.total()*.2).toFixed(2);
  }
}

//declaring objects
var Bill = Object.create(bill);
var Pierce = Object.create(diner);
var Sara = Object.create(diner);
var Garrett = Object.create(diner);
var Nathan = Object.create(diner);

//filling object properties
Garrett.ateCost = [taco[0],loMein[0],Tso[0]];
Garrett.ateName = [taco[1],loMein[1],Tso[1]];
Garrett.name = "Garrett";

Pierce.ateCost = [loMein[0],Tso[0]];
Pierce.ateName = [loMein[1],Tso[1]];
Pierce.name = "Pierce";

Sara.ateCost = [taco[0],lemonade[0]];
Sara.ateName = [taco[1],lemonade[1]];
Sara.name = "Sara";

//decide who goes on the same bill
Pierce.pushToBill();
Sara.pushToBill();
Garrett.pushToBill();

//main 
console.log(Pierce.name);
console.log(Pierce.ateName);
console.log(Pierce.ateCost);
console.log();
console.log(Sara.name);
console.log(Sara.ateName);
console.log(Sara.ateCost);
console.log();
console.log(Garrett.name);
console.log(Garrett.ateName);
console.log(Garrett.ateCost);
console.log();
console.log("Pierce subtotal: " + Pierce.subtotal());
console.log("Pierce's tax: " + Pierce.tax());
console.log("Pierce's tip: " + Pierce.tip());
console.log("Sara's subtotal: " + Sara.subtotal());
console.log("Sara's tax: " + Sara.tax());
console.log("Sara's tip: " + Sara.tip());
console.log("Garrett's subtotal: " + Garrett.subtotal());
console.log("Garrett's tax: " + Garrett.tax());
console.log("Garrett's tip: " + Garrett.tip());

console.log("The subtotal of all meals. . . " );
console.log(Bill.subtotal());
console.log("The subtotal + tax of 7%. . . ");
console.log(Bill.total() + " (optional +20% = " + Bill.tip() + ")");
console.log();
console.log(Pierce);
