function identity <Type>(arg:Type): Type{
    console.log(arg);
    return arg;
}
identity(2+2);
identity("Hello");

let op = identity<string>("Mystring");
//this is same as let op = identity("Mystring")


let myidentity :<Type>(arg:Type) => Type = identity;

let myInoutIdentity :<Input>(arg:Input)=> Input= identity;

//Generic InterFace
interface GenericIdentityFn <Type>{(arg:Type):Type}

function identitie<type>(arg:type):type{
    return arg;
}
let Myidetnt : GenericIdentityFn<number> = identitie;

///generic classes

class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
  }
  
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };

  let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "Generic";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

interface Lengthwise{
    length:number;
}
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type{
    console.log(arg.length);
    return arg;
  }
  console.log(loggingIdentity({length:10,value:3}));



  class BeeKeeper {
    hasMask: boolean;
  }
  
  class ZooKeeper {
    nametag: string;
  }
  
  class Animal {
    numLegs: number;
  }
  
  class Bee extends Animal {
    keeper: BeeKeeper;
  }
  
  class Lion extends Animal {
    keeper: ZooKeeper;
  }
  
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
  
  //createInstance(Lion).keeper.nametag;
  createInstance(Bee).keeper.hasMask;