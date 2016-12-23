
var diff21 = function (n, pivot) {   
    if (n>pivot) {
        return 2*(n-pivot)
    }
    else {
        console.log(pivot-n)
        return pivot-n;
    }
};

var evaluar = function () {
	var n = parseInt(document.getElementById("n").value);
	var pivot = parseInt(document.getElementById("pivot").value);
    var salida = diff21(n, pivot);
    $('#salida').val(salida);
}