var dropdown = document.getElementById("myDropdown");
var displayArea = document.getElementById("programDisplay");


dropdown.addEventListener("change", function() {
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;


  switch (selectedOption) {
    case "1":
      window.location.href="primer_punto/index.html";
    break;
    case "2":
        window.location.href="segundo_punto/index.html";
      break;
    case "3":
        window.location.href="tercer_punto/index.html";
      break;
    case "4":
        window.location.href="cuarto_punto/index.html";
      break;
    case "5":
        window.location.href="quinto_punto/index.html";
      break;
    case "6":
        window.location.href="sexto_punto/index.html";
      break;
    case "7":
        window.location.href="septimo_punto/index.html";
      break;
    case "8":
        window.location.href="octavo_punto/index.html";
      break;
    default:
      program = "Seleccione una opción";
  }


  displayArea.innerHTML = "<pre>" + program + "</pre>";
});
