const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const player_image = new Image();
player_image.src = "shadow_dog.png";
const sprite_width = 575;
const sprite_height = 523;
let frameX = 0;
let frameY = 0;
let game_frame = 0;
const stagger_frames = 5;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    player_image,
    frameX * sprite_width,
    frameY * sprite_height,
    sprite_width,
    sprite_height,
    0,
    0,
    sprite_width,
    sprite_height
  );

  if (game_frame % stagger_frames == 0) {
    if (frameX < 6) frameX++;
    else frameX %= 5;
  }
  game_frame++;
  requestAnimationFrame(animate);
}

animate();
