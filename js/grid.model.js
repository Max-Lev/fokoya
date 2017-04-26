      $(document).ready(function () {

        $("#jqGrid").jqGrid({
          url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
          mtype: "GET",
          styleUI: 'Bootstrap',
          datatype: "jsonp",
          colModel: [{
              label: 'OrderID',
              name: 'OrderID',
              key: true,
              width: 75
            },
            {
              label: 'Customer ID',
              name: 'CustomerID',
              width: 150
            },
            {
              label: 'Order Date',
              name: 'OrderDate',
              width: 150
            },
            {
              label: 'Freight',
              name: 'Freight',
              width: 150
            },
            {
              label: 'Ship Name',
              name: 'ShipName',
              width: 150
            }
          ],
          viewrecords: true,
          height: 250,
          rowNum: 20,
          pager: "#jqGridPager"
        });


        $("#search_cells").on("keyup", function () {
          var self = this;
          $("#jqGrid").jqGrid('filterInput', self.value);
        });

      });
