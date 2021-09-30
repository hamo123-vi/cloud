function getUsers(){
    $.ajax({
        url: "api/radnici",
        type: "GET",
        success: function(data) {
            var html = "";
            for(var i = 0; i < data.length; i++){
                html += '<tr>'
                +'<td>'+data[i].ime+'</td>'
                +'<td>'+data[i].prezime+'</td>'
                +'<td>'+data[i].jmbg+'</td>'
                +'<td>'+data[i].sektor+'</td>'
                +'<td>'+data[i].dp+'</td>'
                +'<td><button type="button" class="btn btn-warning"  onclick="openUpdateModal('+data[i].id+')">Uredi</button></td>'
                +'<td><button type="button" class="btn btn-danger" onclick="openDeleteModal('+data[i].id+')">Izbriši</button></td></tr>';
            }
            $("#myTable tbody").html(html);
            $("#myTable").DataTable({
                "lengthMenu": [ 5, 10, 15, 20 ],
                "bPaginate": true,
                "bLengthChange": true,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": false
            });
        }
    });
}

getUsers();

function refreshTable() {
    getUsers();
}


         
