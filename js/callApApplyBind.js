function doStuff(x, y){
  if(this.hasOwnProperty("text")){
    console.log(this.text);
  }else{
    console.log(this);
}
}

doStuff();

//maneras de condicionar el this
doStuff.call({
  text: "hello world"
}, 1, true);// el primer parametro es el this, a partir del segundo parametro son los parametros de la funcion

doStuff.apply({
  text: "hello world"
}, [1, true]);

var boundDoStuff = doStuff.bind({
  text: "hello world"
});
boundDoStuff(1, true);
