class A{
  constructor(name){
    this._name = name;
  }

  get name(){
    return `${this._name}!`
  }

  set name(value){
    this._name = value;
  }
};

var a = new A();
a.name

class B extends A{

}
