function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];


  this.draw = function () {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(this.x, this.y, scale, scale);

    if (this.x > canvas.width) {
      this.x = 0;
    }

    if (this.y > canvas.height) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }
  }

  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] = {
      x: this.x,
      y: this.y
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  this.changeDirection = function (direction) {
    switch (direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;

      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;

      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;

      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  this.eat = function (fruit) {
    if (this.x === fruit.x && this.y === fruit.y) {
      return true;
    }
    return false;
  }
}