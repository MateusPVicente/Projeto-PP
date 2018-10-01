$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Português": null,
        "Matemática": null,
        "História": null,
        "Inglês": null,
        "Geografia": null,
        "Biologia": null,
        "Sociologia": null,
        "Fisolofia":null,
        "Física": null;
      },
    });
  });

function (a, b, inputString) {
    return a.indexOf(inputString) - b.indexOf(inputString);
  }