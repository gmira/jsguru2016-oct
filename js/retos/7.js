//todos los elementos con la letra "a"
var persons = [
  {name: "German", age: 43},
  {name: "Edu", age: 37},
  {name: "Juan", age: 29}
];

//creamos un array indexable
var IndexableArray = Object.create(Array.prototype);
IndexableArray.index = {
  "startsWith:a": new Set()
};
IndexableArray.push = (item) => {
  Array.prototype.push.call(this, item);

  if(item.name.toLowerCase().includes("a")){
    this.index["contains:a"].add(item);
  }

  if(item.age > 40){
    this.index["morethan40"].add(item);
  }
};
var concreteIndex = Object.create(IndexableArray);
concretIndex.push({
  name: "Sergio",
  age: 23
});

concretIndex.index["startsWith:a"];
