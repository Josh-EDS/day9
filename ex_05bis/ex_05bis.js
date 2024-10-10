const character = document.getElementById('character');
let isWalking = false;
let isFacingLeft = false;
let positionX = 0;
const speed = 5;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowRight') {
    moveRight();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    stopWalking();
  }
});

function moveLeft() {
  if (!isWalking) startWalking();
  if (!isFacingLeft) {
    isFacingLeft = true;
    character.classList.add('facing-left');
  }
  positionX -= speed;
  character.style.left = `${positionX}px`;
}

function moveRight() {
  if (!isWalking) startWalking();
  if (isFacingLeft) {
    isFacingLeft = false;
    character.classList.remove('facing-left');
  }
  positionX += speed;
  character.style.left = `${positionX}px`;
}

function startWalking() {
  isWalking = true;
  character.classList.add('walking');
}

function stopWalking() {
  isWalking = false;
  character.classList.remove('walking');
}