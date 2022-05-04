function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}


var x = {
    type: "pita",
    model: "500",
    color: "black"

};
x.color = "red";
x.woner = "ravine";
x.tyres = "MRF";
document.getElementById("demo").innerHTML = "car owner is " + '' + x.tyres;