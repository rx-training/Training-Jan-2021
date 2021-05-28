function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + typeof padding + "'.");
}
console.log(padLeft("Hello", "TypeScript "));
// console.log(padLeft("Hello",true));//Compite time error
console.log(padLeft("Hello", 4));
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Downloading";
        case "failed":
            return "Error " + state.code + " Downloading1";
        case "success":
            return "Downloaded " + state.response.title + "- " + state.response.summary;
    }
}
var n1;
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function loggers(s) {
    switch (s.state) {
        case "loading":
            return "loading request";
        case "failed":
            return "failed with code " + s.code;
        case "success":
            return "got response";
        default:
            return assertNever(s);
        //Argument of type 'NetworkFromCachedState' is not assignable to parameter of type 'never'.
    }
}
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
