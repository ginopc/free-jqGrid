var mydata = [
    { id: 10, firstName: "Angela", lastName: "Merkel" },
    { id: 20, firstName: "Vladimir", lastName: "Putin" },
    { id: 30, firstName: "David", lastName: "Cameron" },
    { id: 40, firstName: "Barack", lastName: "Obama" },
    { id: 50, firstName: "François", lastName: "Hollande" },
    { id: 60, firstName: "Giorgia", lastName: "Meloni" }
];

$(function(){
    console.log('page loaded!');

    var $grid = jQuery('#grid1').jqGrid({
        url:'server.php?q=2',
        datatype: "local",
        data: mydata,
        colNames:['Id','First Name', 'Last Name'],
        colModel:[
            {name:'id',index:'id', width:55},
            {name:'firstName',index:'firstName', width:90},
            {name:'lastName',index:'lastName', width:100}	
        ],
        rowNum: 5,
        rowList: [5,10,30],
        pager: '#pager2',
        sortname: 'id',
        viewrecords: true,
        sortorder: "asc",
        caption:"free-jqGrid Demo",
        width: 600,
        onSelectRow: function(rid) {
            var data = $('#grid1').jqGrid('getRowData', rid);
            $('#top-title').text(data.firstName + ' ' + data.lastName);

            if (data.firstName.length > 0) {
                $('#btnExport').show();
            } else {
                $('#btnExport').hide();
            }
            $('#btnExport').show();
        }
    });
    
    $grid.jqGrid('navGrid','#pager2',{
        edit:false,
        add:false,
        del:false
    }).jqGrid('navSeparatorAdd', "#pager2", {

    }).jqGrid('navButtonAdd', '#pager2', {
        caption: 'Xls',
        buttonicon: 'ui-icon-newwin',
        onClickButton: function() {
            exportToExcel();
        }
    }).jqGrid('navButtonAdd', '#pager2', {
        caption: 'Pdf',
        buttonicon: 'ui-icon-newwin',
        onClickButton: function() {
            exportToPdf();
        }    
    });

    var exportToExcel = function() {
        alert('Exported data to Excel file');
    }
    
    var exportToPdf = function() {
        alert('Exported data to Pdf');
    };
});

