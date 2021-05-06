let maps = new Map();  
  
maps.set('1', 'Niraj Sapra');     
maps.set( 1  , 'Viral Gujrati');       
maps.set(true, 'bool1');   
maps.set('2', 'ajay');  
  
console.log( "Value1= " +maps.get(1)   );   
console.log("Value2= " + maps.get('1') );   
console.log( "Key is Present= " +maps.has(3) );   
console.log( "Size= " +maps.size );   
console.log( "Delete value= " +maps.delete(1) );   
console.log( "New Size= " +maps.size );  