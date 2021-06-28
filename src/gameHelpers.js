export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1) {
      //check that we re on an actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          //check that our move in inside the game area height (y)
          !stage[y + player.pos.y + moveY] ||
          //check that our move in inside the game area width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //check that the cell were moving to isnt set to clear (y)
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
