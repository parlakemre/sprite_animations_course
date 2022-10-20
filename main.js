const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const player_image = new Image();
player_image.scr = "shadow_dog.png";
console.log("🚀 ~ file: main.js ~ line 9 ~ player_image", player_image);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(0, 0, 100, 100);
  ctx.drawImage(player_image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  requestAnimationFrame(animate);
}
animate();
