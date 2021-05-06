interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function CreateSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mysqures = CreateSquare({ color: "black" });


  // unioun 

  var employee :[number,string][];
  employee=[[1,'niraj'],[2,'najam'],[3,'raj'],[4,'Kajal'],[5,'vijay']];
  console.log(employee);

