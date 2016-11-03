function BasicPerson(firstName, age){
  this.name = firstName;
  this.age = age;
}

BasicPerson.prototype = {
  doStuff: function(){
    console.log("Do work");
  }
};

function EnhancedPerson(firstName, age, secondName){
  age =
//  BasicPerson.call(this, firstName, secondName); es equivalente a BasicPerson.apply(this, arguments);
  if(arguments.length >= 2){
    if(typeof age == "undefined"){
      var args = [firstName, 1];
      BasicPerson.apply(this, args);
    }
    this.secondName = secondName;
  }
}

EnhancedPerson.prototype = Object.create(BasicPerson.prototype);

EnhancedPerson.prototype.doStuff = function(){
  BasicPerson.prototype.doStuff.call(this);
  console.log("Do more work");
}

var b = new EnhancedPerson();
b.doStuff();//llama al doStuff de A (simulacion de polimorfismo)
