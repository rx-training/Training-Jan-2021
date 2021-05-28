enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

//Down = 2, Left = 3, right = 4

enum Direction1 {
    Up,     //0
    Down,   //1
    Left,   //2
    Right  //3
}

enum UserResponse {
    No = 0,
    Yes = 1,
}
  
function respond(recipient: string, message: UserResponse): void {
    console.log(`${recipient} : ${message}`);
}
  
respond("Princess Caroline", UserResponse.Yes);

// string Enums
enum Direction2 
{
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

//Heterogeneous enum

enum BooleanLikeEnums
{
    No = 0,
    Yes = "YES"
}