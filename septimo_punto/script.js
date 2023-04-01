function verificarDivisibilidad() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
  
  
    if (numA % numB === 0) {
        document.getElementById("resultado").innerHTML = numA + " es divisible por " + numB;
    } else {
        document.getElementById("resultado").innerHTML = numA + " no es divisible por " + numB;
    }
  }
  