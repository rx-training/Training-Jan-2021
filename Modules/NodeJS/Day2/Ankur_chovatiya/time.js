const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  var a = 0;
  for(var i=0; i<=100; i++){
      
      console.log(a)
      a++;
  }
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

//

console.log('\x1b[33m%s\x1b[0m', 'hi!')