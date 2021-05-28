enum Direction{
    up = 1,
    down,
    left,
    right
}
var num :number = Direction.left;
console.log(num);

// enum E{
//     A = getsomeValue(),
//     B,
    
// } Numeric Enums can be mixed in computed and Constant members 
//enums without initializers either need to be first or have to 
//come after numeric enums initilized ...........

//String Enums

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  enum E1 {
    X,
    Y,
    Z,
    }
    
    enum E2 {
    A ,
    B,
    C,
    }

console.log(E1.X);
console.log(E1.Z);
console.log(E2.C);
//all cases Computed Enums

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
  }

  //Enums at Compile Time
  enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }
  
  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
  type LogLevelStrings = keyof typeof LogLevel;
  
  function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.DEBUG) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }
  printImportant("DEBUG", "This is a message");

  let direction = [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right
  ]

 // object as const can work as enums
 const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

EDirection.Up;
           
//(enum member) EDirection.Up = 0

ODirection.Up;
           
////(property) Up: 0

// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the keys
type Directions = typeof ODirection[keyof typeof ODirection];
function run(dir: Directions) {}

walk(EDirection.Left);
run(ODirection.Right);