function padLeft(value: string, padding: string |number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
  }
 console.log(padLeft("Hello","TypeScript "));
// console.log(padLeft("Hello",true));//Compite time error
console.log(padLeft("Hello",4))

interface Bird{
    fly():void;
    layEggs():void;

}
interface Fish{
    swim():void;
    layEggs():void;
}


declare function getsmallspet():Fish | Bird ;
    
////var pet = getsmallspet();
//pet.layEggs();
//can use pet.fly();

type NetworkLoadingState = {
    state: "loading";
  };
  type NetworkFailedState = {
    state: "failed";
    code: number;
  };
  type NetworkSuccessState = {
    state: "success";
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  };
  // Create a type which represents only one of the above types
  // but you aren't sure which it is yet.
  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

function logger(state:NetworkState):string {
    switch(state.state){
        case"loading":
        
        return "Downloading";
        case"failed":
        return `Error ${state.code} Downloading1`;
        case"success":
        return `Downloaded ${state.response.title}- ${state.response.summary}`;
    }

}
var n1: NetworkSuccessState;

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
  }
  
  function loggers(s: NetworkState): string {
    switch (s.state) {
      case "loading":
        return "loading request";
      case "failed":
        return `failed with code ${s.code}`;
      case "success":
        return "got response";
      default:
        return assertNever(s);
  //Argument of type 'NetworkFromCachedState' is not assignable to parameter of type 'never'.
    }
  }
  interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  
  interface ArtworksData {
    artworks: { title: string }[];
  }
  
  interface ArtistsData {
    artists: { name: string }[];
  }
  
  // These interfaces are composed to have
  // consistent error handling, and their own data.
  
  type ArtworksResponse = ArtworksData & ErrorHandling;
  type ArtistsResponse = ArtistsData & ErrorHandling;
  
  const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
      console.error(response.error.message);
      return;
    }
  
    console.log(response.artists);
  };