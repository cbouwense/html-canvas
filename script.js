const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playerImage = document.getElementById('player');

const player = {
  x: 0,
  y: 0,
  width: 50,
  height: 100,
  speed: 1,
  dx: 0,
  dy: 0
}

function update() {
  clearEntireCanvas();

  updatePlayer();

  requestAnimationFrame(update);
}

function clearEntireCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updatePlayer() {
  handlePlayerMovement();
  drawPlayer();
}

function handlePlayerMovement() {
  // if (player.x + player.width > canvas.width) {
  //   player.x = canvas.width - player.width;
  // }

  // if (player.x < 0) {
  //   player.x = 0;
  // }

  // if (player.y + player.height > canvas.height) {
  //   player.y = canvas.height - player.height;
  // }

  // if (player.y < 0) {
  //   player.y = 0;
  // }
  let newDeltaX = 0;
  let newDeltaY = 0;

  if (keysCurrentlyPressed.ArrowLeft) newDeltaX -= player.speed;
  if (keysCurrentlyPressed.ArrowRight) newDeltaX += player.speed;
  if (keysCurrentlyPressed.ArrowUp) newDeltaY -= player.speed;
  if (keysCurrentlyPressed.ArrowDown) newDeltaY += player.speed;

  player.x += newDeltaX;
  player.y += newDeltaY;
}

function drawPlayer() {
  ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

const keysCurrentlyPressed = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

window.addEventListener('keydown', (e) => {
  keysCurrentlyPressed[e.key] = true;
});

window.addEventListener('keyup', (e) => {
  keysCurrentlyPressed[e.key] = false;
});

update();