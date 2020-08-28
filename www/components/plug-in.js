var APIkey = "5bed08bb";
var lat, long;
  var onSuccess = function(position){
    lat= position.coords.latitude;
    long= position.coords.longitude;
  } 
  function onError(error) {
        // alert('code: '    + error.code    + '\n' +
        //       'message: ' + error.message + '\n');
  }
$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(onSuccess, onError);


  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://api.hgbrasil.com/weather?key=5bed08bb&lat='+lat+'&log'+long+'&user_ip=remote',
    success : function(res){
      var infoToday = "" 
    },
    error: (erro)=>{
      alert(erro);
    }
  });
});

