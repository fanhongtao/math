$(document).ready(function() {
  $("#calc1").click(function() {
    var x1 = parseFloat($("#x1").val());
    var x2 = parseFloat($("#x2").val());
    var y1 = parseFloat($("#y1").val());
    var y2 = parseFloat($("#y2").val());
    var y21 = y2 - y1;
    var x21 = x2 - x1;
    if ($('#type option:selected').text() == "x3") {
      var x3 = parseFloat($("#num3").val());
      var y3 = ((y2 - y1) * (x3 - x2))/(x2 - x1)  + y2;
      $("#result").val(y3);
    } else {
      var y3 = parseFloat($("#num3").val());
      var x3 = ((y3 - y2) * (x2 - x1))/(y2 - y1)  + x2;
      $("#result").val(x3);
    }
  });

  $("#calc2").click(function() {
    var x1 = parseFloat($("#c2x1").val());
    var x2 = parseFloat($("#c2x2").val());
    var y1 = parseFloat($("#c2y1").val());
    var y2 = parseFloat($("#c2y2").val());
    var y21 = y2 - y1;
    var x21 = x2 - x1;
    var start = (x1 > x2) ? x2 : x1;
    var stop = (x1 > x2) ? x1 : x2;
    var result = "";
    for (var x3 = start+1; x3 < stop; x3++) {
      var y3 = ((y2 - y1) * (x3 - x2))/(x2 - x1)  + y2;
      if (Number.isInteger(y3)){
        result = result +　"(" + x3 + "," + y3 + ")\n"
      }
    }
    if (result == "") {
      result = "没有符合条件的点。"
    }
    $("#result2").val(result);
  });
  
  $("#calc3").click(function() {
    var x1 = parseFloat($("#c3x1").val());
    var x2 = parseFloat($("#c3x2").val());
    var y1 = parseFloat($("#c3y1").val());
    var y2 = parseFloat($("#c3y2").val());
    var y21 = y2 - y1;
    var x21 = x2 - x1;
    var start = parseFloat($("#c3startx").val());
    var stop = parseFloat($("#c3stopx").val());
    if (start > stop) {
      [start, stop] = [stop, start]; // 使用 ES6 解构赋值语法交换值，等同于下面三行
      // var tmp = stop;
      // stop = start;
      // start = tmp;
    }
    if (x1 > x2) {
      [x1, x2] = [x2, x1];
      [y1, y2] = [y2, y1];
    }
    var result = "";
    for (var x3 = start+1; x3 < stop; x3++) {
      if ((x3 >= x1) && (x3 <= x2)) {
        continue;
      }
      var y3 = ((y2 - y1) * (x3 - x2))/(x2 - x1)  + y2;
      if (Number.isInteger(y3)){
        result = result +　"(" + x3 + "," + y3 + ")\n"
      }
    }
    if (result == "") {
      result = "没有符合条件的点。"
    }
    $("#result3").val(result);
  });
  
  $("#calc4").click(function() {
    var x1 = parseFloat($("#c4x1").val());
    var x2 = parseFloat($("#c4x2").val());
    var y1 = parseFloat($("#c4y1").val());
    var y2 = parseFloat($("#c4y2").val());
    var tmp = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    var a = 0;
    if ($('#type4 option:selected').text() == "x3") {
      var x3 = parseFloat($("#c4num3").val());
      tmp = Math.sqrt(Math.abs(tmp - Math.pow(x1 - x3, 2)));
      a = y1;
    } else {
      var y3 = parseFloat($("#c4num3").val());
      tmp = Math.sqrt(Math.abs(tmp - Math.pow(y1 - y3, 2)));
      a = x1;
    }
    var result = "";
    result = result + (a + tmp) + "  或   "
    result = result + (a - tmp)
    $("#result4").val(result);
  });
  
  $("#calc5").click(function() {
    var x1 = parseFloat($("#c5x1").val());
    var x2 = parseFloat($("#c5x2").val());
    var x3 = parseFloat($("#c5x3").val());
    var y1 = parseFloat($("#c5y1").val());
    var y2 = parseFloat($("#c5y2").val());
    var y3 = parseFloat($("#c5y3").val());
    var start = parseFloat($("#c5startx").val());
    var stop = parseFloat($("#c5stopx").val());
    if (start > stop) {
      [start, stop] = [stop, start];
    }
    var result = "";
    for (var x4 = start; x4 <= stop; x4++) {
      var y4 = y3 - ((y1 - y2) * (x3 - x4))/(x1 - x2);
      if (Number.isInteger(y4)){
        result = result +　"(" + x4 + "," + y4 + ")\n"
      }
    }
    if (result == "") {
      result = "没有符合条件的点。"
    }
    $("#result5").val(result);
  });
});