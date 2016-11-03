var persons = ["matias","capullo", "otro"];

//da true  si hay una ocurrencia de la condicion
var arePersonsWithM = persons.some(name => name.toLowerCase().indexOf("m")) > -1;
var isMatias = persons.indexOf("matias") > -1;

//todos los objetos cumplen una condicion
var allContainsA = persons.every(name => name.toLowerCase().includes("a"));

//proyecta cada item de un array en otra cosa
var personsAsObjects = persons.map(name => ({ name: name}));


var totals = persons.map(name => name.toLowerCase()).reduce((result, item) => {
  if(item.includes("m")){
    result.totalPersonWithM++;
  }else if(item.includes("o")){
    result.totalPersonsWithO++;
  }
  return result;
},{totalPersonWithM: 0, totalPersonsWithO: 0});

var personsWithS = persons.filter(name => name.toLowerCase().includes("s"));

//a partir del indice 0, borrame un elemento
persons.splice(0, 1);
//no borras ninguno y añades elementos
persons.splice(1, 0, "pepe", "juan", "sandra");
