$(document).on('ready', function() {
  console.log('start');
  $('#formularioPat').on('submit', function() {
    var enlace = 'http://divertrip.miguelgonzaleza.com/index.php?r=patrocinador/login';
    $.ajax({
      url: enlace
    , type: 'GET'
    , data: $("#formularioPat").serialize()
    , success: function(data) {
          console.log(data);
        location.href = 'http://www.google.com';
      }
    }); // fin ajax
    return false;
  }); // fin formularioPat
});
