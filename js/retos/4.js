Array.prototype.average = () => {

};


var arr = [2,4,6,9];
var average = arr.average()



Array.prototype.classifyNumbers = () => {
  this.reduce((result, item) => {
    if(item % 2 == 0){
      result.pairs.push(item);
    }else{
      result.impairs.push(item);
    }
    return result;
  }, {
    pairs: [],
    impairs: []
  })
};


Object.defineProperty(Array.prototype, "isEmpty",{
  get: () => this.length == 0,
  configurable: false //propiedad de solo lectura
});

var arr = [1,55];
var x = arr.classifyNumbers();
