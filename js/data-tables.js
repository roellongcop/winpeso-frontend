;( function($, w, d, h, b) {

  var app = {

    initDtaTables: function(){
            
      // LOGIN FORM
      $('#transactionTable').DataTable({
        responsive: true,
        "ordering": false,
        "language": {
            "info":"Showing _START_ to _END_ of _TOTAL_ entries",
            "lengthMenu": "_MENU_ Records per page",
            "emptyTable": "<div style='display:block;margin-bottom: 20px;'><img src='assets/images/icons/no-data.png' /></div>No datas",
            "zeroRecords": "<div style='display:block;margin-bottom: 20px;'><img src='assets/images/icons/no-data.png' /></div>No matching records found",
            "search": "_INPUT_",
            "searchPlaceholder": "Search"
            }
      });

        },
    init: function() {
      this.initDtaTables();
    }

  }

    
  $(document).ready( function() {

        app.init();

  });


})(jQuery, window, document, 'html', 'body');