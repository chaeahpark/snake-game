const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;
var fruit;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();

  fruit.pickLocation();

  snake.draw();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snake.update();
    snake.draw();
    fruit.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }

  }, 250);
}());

window.addEventListener('keydown', ((e) => {
  const direction = e.key.replace('Arrow', '');
  snake.changeDirection(direction);
}))