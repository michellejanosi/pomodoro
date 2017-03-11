var work = 25;
var audio = new Audio('ring.mp3');

// initial countown clock function
var clock = $('.clock').FlipClock(work*60, {
  clockFace: 'MinuteCounter',
  countdown: true,
  autoStart: false,
});

// timer start function
var timerStart = function() {
  // console.log(clock.getTime());
  if (clock.getTime().time == 0) {
    audio.play();
    clock.stop();
    clock.setTime(0);
  }
};

// pause clock button function
$('#pause').on('click', function() {
  clock.stop();
});

// start clock button function
$('#start').on('click', function() {
  clock.start(timerStart);
});

// reset to original state button function
$('#reset').on('click', function() {
  work = 25;
  clock.setTime(work*60);
});

// increase timer by 1 minute
$('#increment').click(function() {
  work++;
  clock.setTime(work*60);
});

// decrease timer by 1 minute
$('#decrement').on('click', function() {
  work--;
  clock.setTime(work*60);
});
