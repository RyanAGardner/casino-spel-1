input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.Y, 1)
})
function DESTROY_WALLcom () {
    for (let index = 0; index <= wallcom.length - 1; index++) {
        wallcom[index].delete()
    }
}
function new_wallcom () {
    wallcom = []
    poepcom = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        if (poepcom != index) {
            wallcom.push(game.createSprite(4, index))
        }
    }
}
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.Y, -1)
})
function move_wallcom () {
    for (let index = 0; index <= wallcom.length - 1; index++) {
        wallcom[index].change(LedSpriteProperty.X, -1)
    }
}
function touchincomcomcom () {
    retcom = false
    for (let index = 0; index <= wallcom.length - 1; index++) {
        if (player.isTouching(wallcom[index])) {
            retcom = true
        }
    }
    return retcom
}
let retcom = false
let poepcom = 0
let wallcom: game.LedSprite[] = []
let player: game.LedSprite = null
game.setScore(0)
player = game.createSprite(0, 2)
new_wallcom()
let speedcom = 750
loops.everyInterval(speedcom, function () {
    if (touchincomcomcom()) {
        game.gameOver()
    } else if (wallcom[0].get(LedSpriteProperty.X) == 0) {
        DESTROY_WALLcom()
        new_wallcom()
        game.addScore(1)
    } else {
        move_wallcom()
    }
})
