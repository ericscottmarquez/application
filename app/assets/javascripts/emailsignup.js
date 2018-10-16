

var toggle = document.getElementById('emailtoggle'),
  wrapper = document.querySelectorAll('.subscribe'),
  submit = document.getElementById('submit'),
  success = document.querySelectorAll('.subscribe__success'),
  content = document.querySelectorAll('.subscribe__wrapper');

emailtoggle.addEventListener('click', function($e) {
  $e.preventDefault();
  this.className += ' subscribe__toggle__hidden';
  wrapper[0].className += ' subscribe-1__active';
});

submit.addEventListener('click', function($e) {
  $e.preventDefault();
  success[0].className += ' subscribe__success--active';
  wrapper[0].className += ' subscribe-1__success';
  content[0].style.display = 'none';
});
