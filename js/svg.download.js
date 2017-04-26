$().ready(function () {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var svg = '';
  var btn = document.querySelector('button');

  setCanvas();

  btn.addEventListener('click', function () {
    $.ajax({
      url: './img/binary.svg',
      method: 'GET'
    }).then((success) => {
      svg = success;
      var imgURI = canvas.toDataURL('image/png').replace('image/png', 'data:image/png;base64');
      triggerDownload(imgURI);

    }).fail((error) => {

      alert('Error,Please try later');

    });

  });


  function triggerDownload(imgURI) {

    var evt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });

    var a = document.createElement('a');
    a.setAttribute('href', imgURI);
    a.setAttribute('target', '_top');
    a.setAttribute('download', 'start.png');
    a.dispatchEvent(evt);
  };

  function setCanvas() {
    var img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 1, 0);
    }
    img.src = "./img/binary.svg";
  };



});
