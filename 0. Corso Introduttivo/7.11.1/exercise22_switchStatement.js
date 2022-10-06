let primitive = null;

switch (typeof(primitive)) {
    case "boolean":
        console.log(typeof(primitive));
        break;
    case "number":
        console.log(typeof(primitive));
        break;
    case "string":
        console.log(typeof(primitive));
        break;
    default:
        console.log("La variabile è null o undefined");
}