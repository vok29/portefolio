$(document).ready(function() {
  $('.stBtn').click(function() {
    var btn = $('.stBtn');
    var minutes = parseInt($('#min').html());
    var seconds = parseInt($('#sec').html());
    if (minutes + seconds === 0) {
      btn.html('Start');
      btn.removeClass('red');
      alert('Please set the timer');
      return;
    }
    if (isNaN(minutes)) {
      $('#min').html('00');
      minutes = 0;
    }
    if (minutes > 59) {
      alert("Can't be used for more than 59 mins");
      $('#min').html('00');
      minutes = 0;
      return;
    }
    if (isNaN(seconds)) {
      $('#sec').html('00');
      seconds = 1;
      retrun;
    }
    var t = (minutes * 60) + (seconds);

    function countdownTimer(t) {
      var secLeft = Math.floor(t % 60);
      var minLeft = Math.floor((t / 60) % 60);
      var dispSeconds = '0' + secLeft;
      var dispMinutes = '0' + minLeft;
      $('#min').html(dispMinutes.slice(-2));
      $('#sec').html(dispSeconds.slice(-2));
    }
  function reStart() {
      btn.html('Start');
        btn.removeClass('red');
      }
    function updateTimer() {
      t--;
      countdownTimer(t);
      if (t <= 0) {
        clearInterval(interval);
        $('#ado2').get(0).play();
        reStart();
      }
      else if (t<=10) {
        $('#ado').get(0).play();
      }
    }
    if (btn.html() == "Stop") {
      clearInterval(interval);
      reStart();
    } else {
      window.interval = setInterval(updateTimer, 1000);
      btn.html('Stop');
      btn.addClass('red');
    }
  });

  $('.refresh').click(function() {
    clearInterval(interval);
    $('#min').html('02');
    $('#sec').html('00');
    $('.stBtn').html('Start');
    $('.stBtn').removeClass('red');
  });
});