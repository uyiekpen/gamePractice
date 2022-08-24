import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("player", "/player.png")
loadSprite("ground", "/sprites/ground.png")
loadSprite("player", "/player.png")
loadSprite("enemy", "/sprites/enemy.png")

// add a character to screen
const player = add([
  // list of components
  sprite("player"),
  pos(20, 90),

])

const MOVE_SPEED = 200
keyDown("right", () => {
  player.move(MOVE_SPEED, 0)
})
keyDown("left", () => {
  player.move(-MOVE_SPEED, 0)
})
addLevel([
  "     ",
  "  @  ",
  "     ",
  "xxxxx",

], {
  width: 40,
  height: 40,
 
  "x": () => [
    sprite("ground"),
  ],
  "@": () => [
    sprite("enemy"),
    scale(0.5),
    "dangerous"
  ],



})

//when it collides

// add a kaboom on mouse click
onClick(() => {
  addKaboom(mousePos())
})

// burp on "b"
onKeyPress("b", burp)