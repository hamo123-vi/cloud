function openAddModal() {
    $('#addModal').modal('toggle');
  }
function getSectors(){
    $.ajax({
        url: "api/sektori",
        type: "GET",
        success: function(data) {
            var select = document.getElementById("sektorAdd");
            for(var i = 0; i < data.length; i++)
            {
                select.options[select.options.length] = new Option(data[i].naziv, data[i].id);
            }
        }
    });
}

getSectors();

$(document).ready(function() {
    $('.selectSectorAdd').select2({
        placeholder: "Sektor"
    });
});

function addRadnik(){
    if($("#jmbg").val().toString().length === 13) {
          var radnik_info = {
            "ime" : $("#ime").val(),
            "prezime" : $("#prezime").val(),
            "jmbg" : $("#jmbg").val(),
            "sektor" : $("#sektorAdd").val(),
            "datum_zaposlenja" : $("#datum").val()
          }
          if($("#ime").val() === "" || $("#prezime").val() === "" || $("#jmbg").val() === "" ||
          $("#sektorAdd").val() === "" || $("#datum").val() === "") {
              document.getElementById("addButton").disabled=false
              toastr.error("Budite pažljivi, sva polja su obavezna!")
          } else {
          document.getElementById("addButton").disabled=true
          $.post("api/radnik", radnik_info).done(function(data) {
            document.getElementById("addButton").disabled=false
            document.getElementById("ime").value = null
            document.getElementById("prezime").value = null
            document.getElementById("jmbg").value = null
            document.getElementById("sektorAdd").value = null
            document.getElementById("datum").value = null
            $('.selectSectorAdd').select2({
                placeholder: "Sektor"
            });
            document.getElementById("datum").type = "text"
            $('#addModal').modal('toggle');
            toastr.success("Novi radnik je uspješno dodan");
          }).fail(function() {
            toastr.error("Greška pri dodavanju");
            document.getElementById("addButton").disabled=false

          }); 
        }
    } else {
        toastr.error("JMBG mora imati tačno 13 cifara")
    }

}