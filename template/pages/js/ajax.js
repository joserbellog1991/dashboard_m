profesionales();


function profesionales(){
    const select = $("#select_profesionales").val();
$.ajax({
    url: 'https://clinicamatanzas.cl/admin/ajax/profesionales.php?select='+select, // URL del endpoint que devuelve el JSON
    dataType: 'json', // Tipo de dato a recibir
    success: function(data) {
      //console.log(data); // Imprime el JSON recibido en la consola
      let filas = "";  

        
      $.each(data, function(index, element) {
      /*  console.log("Nombre: " + element.nombre);
        console.log("Teléfono: " + element.celular);
        console.log("Email: " + element.email);
        console.log("-------");*/
        
        filas +="<tr>";
        filas +="<td>" ;
        filas +='<div class="d-flex px-2 py-1"><div><img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1"></div>' ;
        filas +='<div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">'+element.nombre+' '+element.apellidos+'</h6><p class="text-xs text-secondary mb-0">'+element.email+'</p></div>';
        filas +=' </div></td>';
        filas +='<td> <p class="text-xs font-weight-bold mb-0">'+element.especialidad+'</p> <p class="text-xs text-secondary mb-0">Intervalo: '+element.intervalo+'</p></td>';
        if(element.habilitado==1){
        filas += '<td class="align-middle text-center text-sm"> <span class="badge badge-sm bg-gradient-success">Habilitado</span></td>';
        }else{
            filas += '<td class="align-middle text-center text-sm"> <span class="badge badge-sm bg-gradient-secondary">Habilitado</span></td>';
        }
        filas+='<td class="align-middle text-center"><span class="text-secondary text-xs font-weight-bold">23/04/18</span></td>';
        filas+=' <td class="align-middle"><a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user"> Edit</a>';
        filas+='  </td> </tr>';
    });
   
    $("#list_profesionales").html(filas);              
                      
                      
                      
                     
                    

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown); // Imprime el error en la consola
    }
  });

}