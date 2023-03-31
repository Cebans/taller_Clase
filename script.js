var dropdown = document.getElementById("myDropdown");
var displayArea = document.getElementById("programDisplay");


dropdown.addEventListener("change", function() {
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;


  switch (selectedOption) {
    case "1":
      window.location.href="../index.html";
    break;
    case "2":
      program = "Programa 2:\n\nvar x = 5;\nvar y = 10;\nconsole.log(x + y);";
      break;
    case "3":
      program = "Programa 3:\n\nfunction suma(x, y) {\n  return x + y;\n}\n\nconsole.log(suma(3, 5));";
      break;
    case "4":
      program = "Programa 4:\n\nvar nombre = 'Juan';\nconsole.log('Hola, ' + nombre + '!');";
      break;
    case "5":
      program = "Programa 5:\n\nfor (var i = 1; i <= 10; i++) {\n  console.log(i);\n}";
      break;
    case "6":
      program = "Programa 6:\n\nvar numeros = [3, 7, 2, 8, 1, 5];\n\nfor (var i = 0; i < numeros.length; i++) {\n  console.log(numeros[i]);\n}";
      break;
    case "7":
      program = "Programa 7:\n\nvar x = 5;\nvar y = 10;\n\nif (x > y) {\n  console.log('x es mayor que y');\n} else {\n  console.log('x es menor o igual que y');\n}";
      break;
    case "8":
      program = "Programa 8:\n\nvar frutas = ['manzana', 'pera', 'uva', 'naranja'];\n\nfor (var i = 0; i < frutas.length; i++) {\n  console.log(frutas[i]);\n}";
      break;
    default:
      program = "Seleccione una opción";
  }


  displayArea.innerHTML = "<pre>" + program + "</pre>";
});
