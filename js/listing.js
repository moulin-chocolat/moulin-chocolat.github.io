$(document).ready(function(){
	// Deactivating distracting Text Selection:
    // from: http://stackoverflow.com/questions/1794220/how-to-disable-mobilesafari-auto-selection
    $.fn.extend({
      disableSelection : function() {
        this.each(function() {
          this.onselectstart = function() {
            return false;
          };
          this.unselectable = "on";
          $(this).css('-moz-user-select', 'none');
          $(this).css('-webkit-user-select', 'none');
        });
      }
    });
	
    $.fn.DataTable.ext.pager.numbers_length = 4;

    $.extend(true, $.fn.dataTable.defaults, {
                'columnDefs':[
                    { visible: false, targets: [ 0 ] },
                    { orderable: false, targets: 'dt-nosort' },
                    { searchable: false, targets: 'dt-nosearch' },                  
                  
                    { className: "text-left", targets: [ 3 ] },
                    { className: "crema", targets: [ 8, 12 ] },
                    { className: "trufa", targets: [ 7, 11 ] },
                    { className: "nata", targets: [ 6, 10 ] },
                    { className: "sinrelleno", targets: [ 5, 9 ] },      

                    { className: "footerSum", targets: [ 5,6,7,8,9,10,11,12,13,14,15 ] }, 
                    
                    { targets: [ 1 ], orderData: [ 1, 2, 3 ] },
                    { targets: [ 2 ], orderData: [ 2, 1, 3 ] },                   
                    { targets: [ 16 ], orderData: [ 16, 1, 2, 3 ] },
                ]
    });

    let pedidos_table = $('#pedidos').DataTable({
            dom: '<"dt-top"f>rt<"dt-bottom-left"li><"dt-bottom-right"p>',
            rowId: 0,
           //dom: '<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>',
            order: [[ 1, "asc" ]],
            scrollY:  "65vh",   
			searchDelay: 350,	
            scrollX: true,   
            lengthChange: true,
            pageLength: -1,
            lengthMenu: [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "TODAS"] ], 
            deferRender:    true,
            ajax: "./json/pedidos.json",

            language: {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Filas: _MENU_",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "_START_-_END_ de _TOTAL_ reservas",
                "sInfoEmpty":      "Sin resultados ",
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
            },
			/*
            "footerCallback": function () {
                var api = this.api();
              
                api.columns('.footerSum').every(function () {
                    var elem = $(this);
                    // Remove the formatting to get integer data for summation
                    var intVal = function ( i ) {
                        return typeof i === 'string' ?
                            i.replace(/[\$,]/g, '')*1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
                    var total = api
                        .column( this.index() )
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
              
                    var pageTotal = api
                        .column( this.index(), { page: 'current' } )
                        .data()
                        .reduce(function (a, b) {
                             return intVal(a) + intVal(b);
                        }, 0);
              
                    $(this.footer()).html( '<p class="thpsum">'+pageTotal +'</p> ('+ total +')' );
                });
            },
*/
            initComplete: function () {

                this.api().columns([1,2,16]).every( function () {
                    var column = this;
                    var select = $('<select class="dropup custom-select custom-select-sm form-control form-control-sm"><option value=""></option></select>')
                        .appendTo( $(column.footer()).empty() )
                        //.appendTo( $(column.header()) )
                        .on( 'change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );                        
                            column
                                .search( val ? '^'+val+'$' : '', true, false )
                                .draw();
                        });
     
                    column.data().unique().sort().each( function ( d, j ) {                       
                        select.append( '<option value="'+d+'">'+d+'</option>' );
                    });
                });
                $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
            }
    });

    $.fn.dataTable.Api.register( 'sum()', function ( ) {
            return this.flatten().reduce( function ( a, b ) {
                if ( typeof a === 'string' ) {
                    a = a.replace(/[^\d.-]/g, '') * 1;
                }
                if ( typeof b === 'string' ) {
                    b = b.replace(/[^\d.-]/g, '') * 1;
                }
         
                return a + b;
            }, 0 );
    });
    //$.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    
});