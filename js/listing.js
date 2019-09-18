/*screen.lockOrientation('landscape');*/
$(document).ready(function(){
	
        $.extend(true, $.fn.dataTable.defaults, {
                'columnDefs':[
                    { orderable: false, targets: 'dt-nosort' },
                    { searchable: false, "targets": 'dt-nosearch' },
                    { width: 600, targets: [3] },
                    { width: 300, targets: [4] },
                    { className: "nata", "targets": [ 8, 12 ] },
                    { className: "trufa", "targets": [ 7, 11 ] },
                    { className: "crema", "targets": [ 6, 10 ] },

         
                ]
            });
        

        var pedidos_table = $('#pedidos').DataTable({
            //"dom": '<"top"i>rt<"bottom"flp><"clear">',
            
            scrollY:        "60vh",
            scrollX:        true,
			lengthChange: false,
			pageLength: 50,               
            ajax: "./json/pedidos.json",
			
			language: {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        });
    });