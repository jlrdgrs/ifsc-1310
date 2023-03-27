var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



function draw_dot(){
  let x = Math.floor(Math.random() * (canvas.width - 10));
  let y = Math.floor(Math.random() * (canvas.height - 10));
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = "#f54278";
  ctx.fillRect(x,y, 10, 10);
}

setInterval(draw_dot, 1000);
