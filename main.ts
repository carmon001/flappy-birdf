sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
let projectile: Sprite = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 
8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 
8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 d d d d 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 
f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 
f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 
f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 
f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 
f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 
f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 
f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 
f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 
f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 
f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 6 6 f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 6 f f f f f 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 f f f f 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 f f f f f 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f 5 5 5 
4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 5 f f f 5 5 5 
4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f f f 6 6 6 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 f f 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f f f 6 6 6 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 f f 6 6 6 6 6 6 6 f f f 6 6 6 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d f f f f d d d d f f f f f f 6 6 6 6 6 6 6 6 f f 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 f f 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 f f 6 6 6 6 6 6 6 f f f 6 6 6 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d f f f f d d d d f f f f f f 6 6 6 6 6 6 6 6 f f 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 f f f f f 6 6 6 6 f f f 6 6 6 6 6 6 6 6 f f 6 6 6 6 6 f f f 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 f f f f 6 6 6 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d f f f f f d d d f f f f f f 6 f f f 6 6 6 6 f f f 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 f f f f f 6 6 6 6 f f f 6 6 6 f f f 6 6 f f 6 6 6 6 6 f f f 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 f f f f 6 6 6 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d f f f f f d d d d d d d d f f f f f d d d f f f f f f f f f f 6 6 6 6 f f f 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 f f f f f 6 6 6 6 f f f 6 6 6 f f f 6 6 f f f 6 6 6 6 f f f 6 6 6 6 6 6 f f f f f 6 6 6 6 6 f f f 6 6 6 6 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d f f f f d d d d f f f f f d d d d d d d d f f f f f d d d f f f f f f f f f f 6 6 6 6 f f f 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 f f f f f 6 6 6 6 f f f 6 6 6 f f f 6 6 f f f 6 6 6 6 f f f f 6 6 6 6 6 f f f f f f 6 6 6 6 f f f 6 6 6 6 
d d d d f f f d d d d d d d d d d d d d d d d f f f d d d d f f f f d d d d f f f d d d f f f f d d d d f f f f f d d d d d d d d f f f f f d d d f f f f f f f f f f 6 6 6 6 f f f f 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 f f f f f 6 6 6 f f f f 6 6 6 f f f 6 6 f f f 6 6 6 6 f f f f 6 6 6 6 6 f f f f f f 6 6 6 6 f f f 6 6 6 6 
d d d d f f f d d d d d d d f f f f d d d d d f f f d d d d f f f f d d d d f f f d d d f f f f d d d d f f f f f d d d d d d d d f f f f f d d d f f f f f f f f f f 6 6 6 6 f f f f 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 f f f f f f 6 6 f f f f 6 6 6 f f f 6 6 f f f f 6 6 6 6 f f f 6 6 6 6 6 f f f f f f 6 6 6 6 f f f 6 6 6 6 
d d d d f f f d d d d d d d f f f f d d d d d f f f d d d d f f f f f d d d f f f d d d f f f f d d d d f f f f f d d d d d d d d f f f f f d d 6 6 f f f f f f f f f 6 6 6 6 f f f f 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 f f f f f f 6 6 f f f f 6 6 6 f f f 6 6 f f f f 6 6 6 6 f f f f 6 6 6 6 f f f f f f 6 6 6 6 f f f 6 6 6 6 
d d d d f f f d d d d d d d f f f f d d d d d f f f d d d d f f f f f d d d f f f d d d f f f f f d d d f f f f f d d d d d d d d f f f f f 6 6 6 6 f f f f f f f f f 6 6 6 6 f f f f 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 f f f f f f 6 6 f f f f f 6 6 f f f 6 6 f f f f f 6 6 6 f f f f 6 6 6 6 f f f f f f f 6 6 6 f f f 6 6 6 6 
d d d d f f f d d d d d d d f f f f d d d d d f f f d d d d f f f f f d d d f f f d d d f f f f f d d d f f f f f d d d d d d d d f f f f f 6 6 6 6 f f f f f f f f f 6 6 6 6 f f f f 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 f f f f f f 6 6 f f f f f 6 6 f f f 6 6 6 f f f f 6 6 6 6 f f f 6 6 6 6 f f f f f f f 6 6 f f f f 6 6 6 6 
d d d d f f f d d d d d d d f f f f d d d d d f f f f d d d f f f f f d d d f f f d d d f f f f f d d d f f f f f d d d d d d d d f f f f f f 6 6 6 f f f f f f f f f 6 6 6 6 f f f f 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 f f f f f f 6 6 f f f f f 6 6 f f f 6 6 6 f f f f f 6 6 6 f f f 6 6 6 6 f f f f f f f 6 6 f f f f 6 6 6 6 
d d d d f f f d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . f f . . . . . . . . f f . . 
. f 3 3 f f f f f f f f 3 3 f . 
. f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
. . f f 3 3 3 3 3 3 3 3 f f . . 
. . f 3 f f 3 3 3 3 f f 3 f . . 
. f 3 3 f f 3 3 3 3 f f 3 3 f . 
. f 3 3 3 3 f f f f 3 3 3 3 f . 
. f 3 3 3 f 3 3 3 3 f 3 3 3 f . 
. f 3 3 3 f 3 3 3 3 f 3 3 3 f . 
. f 3 3 3 3 f f f f 3 3 3 3 f . 
. f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
. . f 3 f 3 3 3 3 3 3 f 3 f . . 
. . f 3 3 f f f f f f 3 3 f . . 
. . f f f f . . . . f f f f . . 
`, SpriteKind.Player)
mySprite.ay = 300
game.onUpdateInterval(1500, function () {
    info.changeScoreBy(1)
    gap = Math.randomRange(0, 3)
    if (gap == 0) {
        topImage = img`
. . . . . f 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . . 
. . . . f d d f 4 4 4 4 4 4 4 4 4 f d f . . . . 
. . . f d d f f f f 4 4 4 4 f 4 f f d d f . . . 
. . f d d f d 5 4 4 4 4 4 4 4 4 f f d d d f . . 
. . . f f d d 5 4 4 b 5 5 b 4 4 f f f f f . . . 
. . . . . . f 5 4 4 4 4 4 e e 4 f f . . . . . . 
. . . . . . f 5 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 e e e e f f . . . . . . 
. . . . . . . 4 5 5 4 4 e e e . f . . . . . . . 
. . . . . . . . 4 5 4 4 e e e f . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . e e e e . . . . . . . . . . . 
. . . . . . . e e e e e e e e . . . . . . . . . 
. . . . . . e e e e f f e e e e . . . . . . . . 
. . . . . e e e f f f f f f e e e . . . . . . . 
. . . . e e e f f f f f f f f e e e . . . . . . 
. . . . e e f f f f f f f f f f e e . . . . . . 
. . . . f e e f f f f f f f f e e f . . . . . . 
. . . . f e e e f f f f f f e e e f . . . . . . 
. . . . e 4 e e e e e e e e e e 4 e . . . . . . 
. . . . e e 4 f e f f f f e f 4 e e . . . . . . 
. . . . e e 4 4 4 4 4 4 4 4 4 4 e e . . . . . . 
. . . . f e 4 4 5 4 4 4 4 4 f f e f . . . . . . 
. . . . f e 4 4 5 5 4 4 4 4 f f e f . . . . . . 
. . . . f e e e 4 4 4 4 4 f f e e f . . . . . . 
. . . . f f e e 4 4 4 4 4 f f e f f . . . . . . 
. . . . . f e e 4 5 4 4 4 f f e f . . . . . . . 
. . . . . f e e 4 5 4 4 4 f f e f . . . . . . . 
. . . . . e e e 4 5 4 4 4 f f e e . . . . . . . 
. . . . . e e 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 5 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e e 4 5 5 4 4 4 f f f e . . . . . . . 
. . . . . f e 4 4 5 4 4 4 f f f e . . . . . . . 
. . . . . f e 4 4 5 4 4 4 f f f e . . . . . . . 
. . . . . f e e 4 5 4 4 4 f f f e . . . . . . . 
. . . . . f f e 4 5 4 4 4 f f f e . . . . . . . 
. . . . . e f e 4 5 4 4 4 4 f e e . . . . . . . 
. . . . . e e e 5 5 4 4 4 f f e f . . . . . . . 
. . . . . e 4 4 4 5 4 4 4 f f e f . . . . . . . 
. . . . . e 4 4 5 5 4 4 4 f e e f . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f e f f . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f e f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f e e e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 f f f e e . . . . . . . 
. . . . . e 4 5 5 4 4 4 f f f e f . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f e e f . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f e f f . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f e f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f e e e . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 4 f f f e . . . . . . . 
. . . . . e e 5 4 4 4 4 4 f f f e . . . . . . . 
. . . . . f e 5 4 4 4 4 4 f f f e . . . . . . . 
. . . . . f e 5 4 4 4 4 4 f f f e . . . . . . . 
. . . . . f e e 4 4 4 4 4 f f f e . . . . . . . 
. . . . . f f e 4 4 4 4 4 4 f f e . . . . . . . 
. . . . . f e e 4 4 4 4 4 4 f f e . . . . . . . 
. . . . . e e 5 4 4 4 4 4 4 f f e . . . . . . . 
. . . . . e e 5 4 4 4 4 4 4 f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 4 4 f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 4 4 f f e . . . . . . . 
`
    } else if (gap == 1) {
        topImage = img`
. . . . . f 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . . 
. . . . f d d f 4 4 4 4 4 4 4 4 4 f d f . . . . 
. . . f d d f f f f 4 4 4 4 f 4 f f d d f . . . 
. . f d d f d 5 4 4 4 4 4 4 4 4 f f d d d f . . 
. . . f f d d 5 4 4 b 5 5 b 4 4 f f f f f . . . 
. . . . . . f 5 4 4 4 4 4 e e 4 f f . . . . . . 
. . . . . . f 5 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 e e e e f f . . . . . . 
. . . . . . . 4 5 5 4 4 e e e f f . . . . . . . 
. . . . . . . f 4 5 4 4 e e e f . . . . . . . . 
. . . . . . f 4 4 5 4 4 e e e f f . . . . . . . 
. . . . . f 4 4 4 5 4 4 e e e f f f . . . . . . 
. . . . . . f 4 4 5 4 4 e e e f f f f . . . . . 
. . . . . . . f 4 5 4 4 e e e e f f . . . . . . 
. . . . . . . 4 4 5 4 4 e e e e f f . . . . . . 
. . . . . . 4 4 4 5 4 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 5 5 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 4 5 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 5 5 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 5 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 5 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . e e e e . . . . . . . . . . . 
. . . . . . . e e e e e e e e . . . . . . . . . 
. . . . . . e e e e f f e e e e . . . . . . . . 
. . . . . e e e f f f f f f e e e . . . . . . . 
. . . . e e e f f f f f f f f e e e . . . . . . 
. . . . e e f f f f f f f f f f e e . . . . . . 
. . . . f e e f f f f f f f f e e f . . . . . . 
. . . . f e e e f f f f f f e e e f . . . . . . 
. . . . e 4 e e e e e e e e e e 4 e . . . . . . 
. . . . e e 4 f e f f f f e f 4 e e . . . . . . 
. . . . e e 4 4 4 4 4 4 4 4 4 4 e e . . . . . . 
. . . . f e 4 4 5 4 4 4 4 4 f f e f . . . . . . 
. . . . f e 4 4 5 5 4 4 4 4 f f e f . . . . . . 
. . . . f e e e 4 4 4 4 4 f f e e f . . . . . . 
. . . . f f e e 4 4 4 4 4 f f e f f . . . . . . 
. . . . . f e e 4 5 4 4 4 f f e f . . . . . . . 
. . . . . f e e 4 5 4 4 4 f f e f . . . . . . . 
. . . . . e e e 4 5 4 4 4 f f e e . . . . . . . 
. . . . . e e 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 5 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e e 4 5 5 4 4 4 f f f e . . . . . . . 
. . . . . f e 4 4 5 4 4 4 f f f e . . . . . . . 
. . . . . f e 4 4 5 4 4 4 f f f e . . . . . . . 
. . . . . f e e 4 5 4 4 4 f f f e . . . . . . . 
. . . . . f f e 4 5 4 4 4 f f f e . . . . . . . 
. . . . . e f e 4 5 4 4 4 4 f e e . . . . . . . 
. . . . . e e e 5 5 4 4 4 f f e f . . . . . . . 
. . . . . e 4 4 4 5 4 4 4 f f e f . . . . . . . 
. . . . . e 4 4 5 5 4 4 4 f e e f . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f e f f . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f e f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f e e e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 f f f e e . . . . . . . 
. . . . . e 4 5 5 4 4 4 f f f e f . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f e e f . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f e f f . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f e f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f e e e . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 f f f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 5 4 4 4 4 4 f f f e . . . . . . . 
. . . . . e e 5 4 4 4 4 4 f f f e . . . . . . . 
. . . . . f e 5 4 4 4 4 4 f f f e . . . . . . . 
`
    } else if (gap == 2) {
        topImage = img`
. . . . . f 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . . 
. . . . f d d f 4 4 4 4 4 4 4 4 4 f d f . . . . 
. . . f d d f f f f 4 4 4 4 f 4 f f d d f . . . 
. . f d d f d 5 4 4 4 4 4 4 4 4 f f d d d f . . 
. . . f f d d 5 4 4 b 5 5 b 4 4 f f f f f . . . 
. . . . . . f 5 4 4 4 4 4 e e 4 f f . . . . . . 
. . . . . . f 5 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 e e e e f f . . . . . . 
. . . . . . . 4 5 5 4 4 e e e f f . . . . . . . 
. . . . . . . f 4 5 4 4 e e e f . . . . . . . . 
. . . . . . f 4 4 5 4 4 e e e f f . . . . . . . 
. . . . . f 4 4 4 5 4 4 e e e f f f . . . . . . 
. . . . . . f 4 4 5 4 4 e e e f f f f . . . . . 
. . . . . . . f 4 5 4 4 e e e e f f . . . . . . 
. . . . . . . 4 4 5 4 4 e e e e f f . . . . . . 
. . . . . . 4 4 4 5 4 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 5 5 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 4 5 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 5 5 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 5 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 5 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f f . . . . . 
. . . . . . 4 4 5 5 4 4 4 e e e f f f . . . . . 
. . . . . . 4 4 4 5 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 4 5 5 4 4 e e f f f f . . . . . 
. . . . . . 4 4 4 4 5 4 4 e e f f f f . . . . . 
. . . . . . 4 4 4 4 5 4 4 e e f f f f . . . . . 
. . . . . . 4 4 4 5 5 4 4 e e f f f f . . . . . 
. . . . . . . 4 4 5 4 4 4 e f f f f f . . . . . 
. . . . . . . 4 4 5 4 4 4 e f f f f f . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . e e e e . . . . . . . . . . . 
. . . . . . . e e e e e e e e . . . . . . . . . 
. . . . . . e e e e f f e e e e . . . . . . . . 
. . . . . e e e f f f f f f e e e . . . . . . . 
. . . . e e e f f f f f f f f e e e . . . . . . 
. . . . e e f f f f f f f f f f e e . . . . . . 
. . . . f e e f f f f f f f f e e f . . . . . . 
. . . . f e e e f f f f f f e e e f . . . . . . 
. . . . e 4 e e e e e e e e e e 4 e . . . . . . 
. . . . e e 4 f e f f f f e f 4 e e . . . . . . 
. . . . e e 4 4 4 4 4 4 4 4 4 4 e e . . . . . . 
. . . . f e 4 4 5 4 4 4 4 4 f f e f . . . . . . 
. . . . f e 4 4 5 5 4 4 4 4 f f e f . . . . . . 
. . . . f e e e 4 4 4 4 4 f f e e f . . . . . . 
. . . . f f e e 4 4 4 4 4 f f e f f . . . . . . 
. . . . . f e e 4 5 4 4 4 f f e f . . . . . . . 
. . . . . f e e 4 5 4 4 4 f f e f . . . . . . . 
. . . . . e e e 4 5 4 4 4 f f e e . . . . . . . 
. . . . . e e 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 5 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e e 4 5 5 4 4 4 f f f e . . . . . . . 
. . . . . f e 4 4 5 4 4 4 f f f e . . . . . . . 
. . . . . f e 4 4 5 4 4 4 f f f e . . . . . . . 
. . . . . f e e 4 5 4 4 4 f f f e . . . . . . . 
. . . . . f f e 4 5 4 4 4 f f f e . . . . . . . 
. . . . . e f e 4 5 4 4 4 4 f e e . . . . . . . 
. . . . . e e e 5 5 4 4 4 f f e f . . . . . . . 
. . . . . e 4 4 4 5 4 4 4 f f e f . . . . . . . 
. . . . . e 4 4 5 5 4 4 4 f e e f . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f e f f . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f e f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f e e e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
. . . . . e 4 4 5 4 4 4 4 f f f e . . . . . . . 
`
    } else {
        topImage = img`
. . . . . f 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . . 
. . . . f d d f 4 4 4 4 4 4 4 4 4 f d f . . . . 
. . . f d d f f f f 4 4 4 4 f 4 f f d d f . . . 
. . f d d f d 5 4 4 4 4 4 4 4 4 f f d d d f . . 
. . . f f d d 5 4 4 b 5 5 b 4 4 f f f f f . . . 
. . . . . . f 5 4 4 4 4 4 e e 4 f f . . . . . . 
. . . . . . f 5 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 5 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 e e e e f f . . . . . . 
. . . . . . . 4 5 5 4 4 e e e f f . . . . . . . 
. . . . . . . f 4 5 4 4 e e e f . . . . . . . . 
. . . . . . f 4 4 5 4 4 e e e f f . . . . . . . 
. . . . . f 4 4 4 5 4 4 e e e f f f . . . . . . 
. . . . . . f 4 4 5 4 4 e e e f f f f . . . . . 
. . . . . . . f 4 5 4 4 e e e e f f . . . . . . 
. . . . . . . 4 4 5 4 4 e e e e f f . . . . . . 
. . . . . . 4 4 4 5 4 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 5 5 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 4 5 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 5 5 4 e e e f f f . . . . . . 
. . . . . . 4 4 4 5 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 5 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e f f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f . . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f f . . . . . 
. . . . . . 4 4 5 4 4 4 4 e e e f f f . . . . . 
. . . . . . 4 4 5 5 4 4 4 e e e f f f . . . . . 
. . . . . . 4 4 4 5 4 4 4 e e f f f f . . . . . 
. . . . . . 4 4 4 5 5 4 4 e e f f f f . . . . . 
. . . . . . 4 4 4 4 5 4 4 e e f f f f . . . . . 
. . . . . . 4 4 4 4 5 4 4 e e f f f f . . . . . 
. . . . . . 4 4 4 5 5 4 4 e e f f f f . . . . . 
. . . . . . . 4 4 5 4 4 4 e f f f f f . . . . . 
. . . . . . . 4 4 5 4 4 4 e f f f f f . . . . . 
. . . . . . . 4 4 5 5 4 e e e f f f f . . . . . 
. . . . . . 4 4 4 4 5 4 e e e f f f f . . . . . 
. . . . . 4 4 4 4 5 5 4 e e e e f f f f . . . . 
. . . . . 4 4 4 4 5 4 4 e e e e e f f f . . . . 
. . . . . 4 4 4 5 5 4 4 e e e e e f f f . . . . 
. . . . . 4 4 4 5 4 4 4 e e e e e e f f f . . . 
. . . . . 4 4 4 5 4 4 e e e e e e e f f f . . . 
. . . . . 4 4 5 5 4 4 e e e e e e e f f f . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . e e e e . . . . . . . . . . . 
. . . . . . . e e e e e e e e . . . . . . . . . 
. . . . . . e e e e f f e e e e . . . . . . . . 
. . . . . e e e f f f f f f e e e . . . . . . . 
. . . . e e e f f f f f f f f e e e . . . . . . 
. . . . e e f f f f f f f f f f e e . . . . . . 
. . . . f e e f f f f f f f f e e f . . . . . . 
. . . . f e e e f f f f f f e e e f . . . . . . 
. . . . e 4 e e e e e e e e e e 4 e . . . . . . 
. . . . e e 4 f e f f f f e f 4 e e . . . . . . 
. . . . e e 4 4 4 4 4 4 4 4 4 4 e e . . . . . . 
. . . . f e 4 4 5 4 4 4 4 4 f f e f . . . . . . 
. . . . f e 4 4 5 5 4 4 4 4 f f e f . . . . . . 
. . . . f e e e 4 4 4 4 4 f f e e f . . . . . . 
. . . . f f e e 4 4 4 4 4 f f e f f . . . . . . 
. . . . . f e e 4 5 4 4 4 f f e f . . . . . . . 
. . . . . f e e 4 5 4 4 4 f f e f . . . . . . . 
. . . . . e e e 4 5 4 4 4 f f e e . . . . . . . 
. . . . . e e 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 4 5 4 4 f f f f e . . . . . . . 
. . . . . e 4 4 5 5 4 4 f f f f e . . . . . . . 
`
    }
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
game.onUpdate(function () {
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
