
var typed = new Typed('#element', {
  strings: ['Web Developer', 'Graphic Designer','MERN Stack Developer'],
  typeSpeed: 50,
});



var e = document.getElementById('icon');
e.onmouseover = function() {
  document.getElementById('info').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('info').style.display = 'none';
}

