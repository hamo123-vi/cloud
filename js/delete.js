function openDeleteModal(id) {
    window.localStorage.setItem('deleteId', id);
    $('#deleteModal').modal('toggle');
  }

function deleteRadnik(id){
    document.getElementById("deleteButton").disable=true
    $.ajax({
        url: `api/radnik/${id}`,
        type: 'DELETE',
        success: function() {
            document.getElementById("deleteButton").disable=false
            $('#deleteModal').modal('toggle');
            toastr.success("Radnik je uspješno izbrisan")
        }
    });
  }