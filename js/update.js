function openUpdateModal(id) {
    window.localStorage.setItem('updateId', id);
    $('#updateModal').modal('toggle');
    $.ajax({
        url: `api/radnici/${id}`,
        type: "GET",
        success: function(data) {
          $("#editform input[name=imeEdit]").val(data.ime);
          $("#editform input[name=prezimeEdit]").val(data.prezime);
          $("#editform input[name=jmbgEdit]").val(data.jmbg);
          $('#sektorUpdate').val(data.sektor);
          $("#editform input[name=datumEdit]").val(data.dp);
          $('.selectSectorUpdate').select2({
            placeholder: $('#sektorUpdate').find(":selected").text()
        });
        }
    });
}

getSectors();

$('.selectSectorUpdate').select2({
    placeholder: "Sektor"
});

function updateRadnik(id) {
    if($("#jmbgEdit").val().toString().length === 13) {
        document.getElementById("updateButton").disabled=true
    var radnik_info = {
        "ime" : $("#imeEdit").val(),
        "prezime" : $("#prezimeEdit").val(),
        "jmbg" : $("#jmbgEdit").val(),
        "sektor" : $("#sektorUpdate").val(),
        "datum_zaposlenja" : $("#datumEdit").val()
    }

    if($("#imeEdit").val() === "" || $("#prezimeEdit").val() === "" || $("#jmbgEdit").val() === "" ||
    $("#sektorUpdate").val() === "" || $("#datumEdit").val() === "") {
        document.getElementById("updateButton").disabled=false
        toastr.error("Budite pažljivi, sva polja su obavezna!")
    } else {
    
    $.ajax({
        type: 'PUT',
        url: `api/radnik/${id}`,
        contentType: 'application/json',
        data: JSON.stringify(radnik_info), // access in body
    }).done(function () {
        $('#updateModal').modal('toggle');
        toastr.success("Podaci uspješno uređeni")
    }).fail(function () {
        document.getElementById("updateButton").disabled=false
        toastr.success("Greška pri uređivanju")
    }).always(function () {
        document.getElementById("updateButton").disabled=false
    });
    }
    } else {
        toastr.error("JMBG mora imati tačno 13 cifara")
        document.getElementById("updateButton").disabled=false
    }
}

function getSectors(){
    $.ajax({
        url: "api/sektori",
        type: "GET",
        success: function(data) {
            var select = document.getElementById("sektorUpdate");
            for(var i = 0; i < data.length; i++)
            {
                select.options[select.options.length] = new Option(data[i].naziv, data[i].id);
            }
        }
    });
}



