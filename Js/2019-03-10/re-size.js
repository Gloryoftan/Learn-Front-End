function buildDataTables(dtData, rowNumPerPage, scrollable, idPrefix) {
    var retHtml = '';
    if (typeof dtData == 'undefined') {
      return retHtml;
    }
    var tableSerial = 1;
    var titleCol = dtData.titleCol;
    var dataCol = dtData.dataCol;
    var colWidth = typeof dtData.colWidth == 'undefined' ? [] : dtData.colWidth;
    var tableHtml;
    var totalRowNum = scrollable ? dataCol.length : parseInt(dataCol.length / rowNumPerPage + 0.5) * rowNumPerPage;
    totalRowNum = Math.max(totalRowNum, rowNumPerPage);
  
    function getTdStyle(i) {
      var tdStyleHtml = '';
      if (typeof colWidth[i] != 'undefined') {
        tdStyleHtml = ' style="width: ' + colWidth[i] + ';"';
      }
      return tdStyleHtml;
    }
  
    idPrefix = typeof idPrefix == 'undefined' ? 'datatable' : idPrefix;
    for (var cursor = 0; cursor < totalRowNum; cursor++) {
      var tableId = scrollable ? idPrefix : (idPrefix + '-' + tableSerial);
      if (cursor == 0 || (!scrollable && cursor % rowNumPerPage == 0)) {
        tableHtml = '<table id="' + tableId + '" class="table table-striped table-bordered table-hover' + (scrollable ? ' scrollable' : '') + '">';
        tableHtml += '<thead><tr>';
        for (var i = 0; i < titleCol.length; i++) {
          tableHtml += '<th' + getTdStyle(i) + '>' + titleCol[i] + '</th>'
        }
        tableHtml += '</tr></thead>';
        tableHtml += '<tbody>';
      }
      var row;
      if (cursor < dataCol.length) {
        row = dataCol[cursor];
      } else {
        row = [];
        for (var i = 0; i < titleCol.length; i++) {
          row.push('&nbsp')
        }
      }
      tableHtml += '<tr>';
      for (var i = 0; i < row.length; i++) {
        var tdClass = 'text';
        var tdText = row[i];
        if (typeof row[i] == 'number') {
          tdClass = 'number';
          tdText = round(row[i], 2)
        }
        tableHtml += '<td' + getTdStyle(i) + ' class="' + tdClass + '">' + tdText + '</td>';
      }
      tableHtml += '</tr>';
  
      if ((!scrollable && cursor % rowNumPerPage == rowNumPerPage - 1) || cursor == totalRowNum - 1) {
        tableHtml += '</tbody>';
        tableHtml += '</table>';
        // debug(tableHtml);
        if (scrollable && typeof DataTable != 'undefined') {
          // $('#' + tableId).DataTable({
          //   scrollY: '50vh',
          //   scrollCollapse: true,
          //   paging: false
          // });
        }
        retHtml += '<td class="datatable container">' + tableHtml + '</td>';
        tableHtml = '';
        tableSerial++;
      }
    };
    return retHtml;
  }