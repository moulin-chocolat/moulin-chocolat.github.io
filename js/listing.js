$(document).ready(function(){

        $.extend(true, $.fn.dataTable.defaults, {
                'columnDefs':[
                    { orderable: false, targets: 'dt-nosort' },
                    { searchable: false, "targets": 'dt-nosearch' },
                    { width: 600, targets: [3] },
                    { width: 300, targets: [4] },
                    { className: "crema", "targets": [ 8, 12 ] },
                    { className: "trufa", "targets": [ 7, 11 ] },
                    { className: "nata", "targets": [ 6, 10 ] },

         
                ]
            });
        

        var pedidos_table = $('#pedidos').DataTable({
            //"dom": '<"top"i>rt<"bottom"flp><"clear">',
            /*
            scrollY:        "60vh",
            scrollX:        true,
            scrollCollapse: true,        
            fixedColumns: true,
            */
            fixedHeader: {
                header: true,
                headerOffset: $('#fixed').height()
            },
            ajax: "./html_public/json/pedidos.json",
        });
    });