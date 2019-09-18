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
            dom: '<"dt-top"f>rt<"dt-bottom-left"li><"dt-bottom-right"p>',
            rowId: 0,          
            order: [[ 1, "asc" ]],
            scrollY:  "60vh",        
            scrollX: true,   
            lengthChange: true,
            pageLength: 25,
            lengthMenu: [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "Todo"] ], 
                             
            ajax: "../json/pedidos.json",

            language: {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Filas: _MENU_",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           " _START_ - _END_ de _TOTAL_ reservas",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(de un total de _MAX_)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     ">",
                    "sPrevious": "<"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        });
});