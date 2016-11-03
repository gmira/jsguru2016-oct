import "./oop.js";
import "./callApplyBind.js";

function A(){
  this.x = 11;
};

A.prototype = {

  doStuff: function(){
    //this... esto apunta a la instancia que se cree mas adelante
    console.log("hey");
  }
};


var instanceOfA = new A();

if(instanceOfA.hasOwnProperty("doStuff")){//mira solo si es de su proio objeto, no mira en la cadena de prototype

}

if("doStuff" in instanceOfA){//mira en toda la cadena de prototype

}
//PROTOTYPE CHAIN
instanceOfA.doStuff();

console.log(instanceOfA.x);


function B(){}
//B.prototype = new A();// se añade todo lo que haya en el constructor (no es correcto)
B.prototype = Object.create(A.prototype);//solo se añade el prototype (es correcto)

var instanceOfB = new B();
instanceOfB.doStuff();
