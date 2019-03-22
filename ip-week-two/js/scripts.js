var base = parseFloat (prompt("enter the base"));
var height = parseFloat (prompt("enter the height"));
var hypotenuse = parseFloat (prompt("enter the hypotenuse"));
 
if( height===base && height === hypotenuse) {
    alert ("it's equlateral");
} else if ( base === height || hypotenuse === base || hypotenuse === height) {
    alert ( "it's isoceles");
} else if ( base !== height && height !== base && hypotenuse !== height) {
    if (height + base > hypotenuse || base + hypotenuse > height || height + hypotenuse > base) {
        if ( height + base <= hypotenuse || hypotenuse + base <= height || hypotenuse + height <= base) {
            alert ("cannot form a triangle");
        } else {
            alert("it's a scalene");
        }
    }
}