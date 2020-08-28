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
      var iTday = res.results.forecast[0];
      var frcs = res.results.forecast;
      var texttoday = '<div class="col-md-12 sla"><h1>'+res.results.temp+'°C</h1><h2>'+res.results.time+'</h2></div>';
      texttoday += '<div class="col-md-12 sla-1"><h5 class="mr-2">Max:'+iTday.max+'°C</h5><h5>Min:'+iTday.min+'°C</h5>';
      texttoday += '<div class="col-md-12 mt-3 d-flex justify-content-center"><h4>'+iTday.description+'</h4></div>';

      $('.diaatual').append(texttoday);

      for(var i=1; i<=frcs.length-4;i++){
        var text2 = '<div class="col">';
        text2 += '<div class="card border-secondary mb-3" style="max-width: 18rem;">';
        text2 += '<div class="card-header"><h6>'+frcs[i].date+'</h6><h6>'+frcs[i].weekday+'</h6></div>';
        text2 += '<div class="card-body text-secondary"><h5 class="card-title">'+frcs[i].description+'</h5>';
        text2 += '<p class="card-text">max: '+frcs[i].max+'°C  min: '+frcs[i].min+'°C </p>';
        text2 += '</div></div></div>';
        $('.diasseg').append(text2);
      }
    },
    error: (erro)=>{
      alert(erro);
    }
  });
});

