namespace SpriteKind {
    export const Block = SpriteKind.create()
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    bellieDirection = "left"
    while (controller.left.isPressed() && !(controller.right.isPressed())) {
        bellie.vx = bellieVY * -1
        bellie.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . f 4 4 f f f f . . . . . .
            . . f 4 5 5 4 5 f b f f . . . .
            . . f 5 5 5 5 4 e 3 3 b f . . .
            . . f e 4 4 4 e 3 3 3 3 b f . .
            . f 3 3 3 3 3 3 3 3 3 3 3 f . .
            . f 3 3 e e 3 b e 3 3 3 3 f . .
            . f 3 3 e e e f f 3 3 3 3 f . .
            . . f e e e f b f b b b b f f .
            . . . e 4 4 f 1 e b b b b b f .
            . . . f 4 4 4 4 f b b b b b f .
            . . . f d d d e 4 4 b b b f . .
            . . . f d d d e 4 4 f f f . . .
            . . f d d d b b e e b b f . . .
            . . f b d 1 d 1 d d b f . . . .
            . . . f f f b b f f f . . . . .
        `)
        pause(100)
        bellie.setImage(img`
            . . . f 4 4 f f f f . . . . . .
            . . f 4 5 5 4 5 f b f f . . . .
            . . f 5 5 5 5 4 e 3 3 b f . . .
            . . f e 4 4 4 e 3 3 3 3 b f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . f 3 3 e e 3 b e 3 3 3 3 f . .
            . f 3 3 e e e f f 3 3 3 3 f . .
            . f 3 e e e f b f b b b b f . .
            . . f e 4 4 f 1 e b b b b f . .
            . . . f 4 4 4 4 f b b b b f f .
            . . . f e e e f f f b b b b f .
            . . . f d d d e 4 4 f b b f . .
            . . . f d d d e 4 4 e f f . . .
            . . f b d b d b e e b f . . . .
            . . f f 1 d 1 d 1 d f f . . . .
            . . . . f f b b f f . . . . . .
        `)
        pause(100)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (!(controller.right.isPressed())) {
        bellie.vx = 0
        bellie.setImage(img`
            . . . f 4 4 f f f f . . . . . .
            . . f 4 5 5 4 5 f b f f . . . .
            . . f 5 5 5 5 4 e 3 3 b f . . .
            . . f e 4 4 4 e 3 3 3 3 b f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . f 3 3 e e 3 b e 3 3 3 3 f . .
            . f 3 3 e e e f f 3 3 3 3 f . .
            . f 3 e e e f b f b b b b f . .
            . . f e 4 4 f 1 e b b b b f . .
            . . . f 4 4 4 4 f b b b b f f .
            . . . f e e e f f f b b b b f .
            . . . f d d d e 4 4 f b b f . .
            . . . f d d d e 4 4 e f f . . .
            . . f b d b d b e e b f . . . .
            . . f f 1 d 1 d 1 d f f . . . .
            . . . . f f b b f f . . . . . .
        `)
        if (bellie.isHittingTile(CollisionDirection.Bottom)) {
            bellieOnSurface = 1
        }
    } else {
        bellieDirection = "right"
        while (controller.right.isPressed() && !(controller.left.isPressed())) {
            bellie.vx = bellieVY
            bellie.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . . . f f f f 4 4 f . . .
                . . . . f f b f 5 4 5 5 4 f . .
                . . . f b 3 3 e 4 5 5 5 5 f . .
                . . f b 3 3 3 3 e 4 4 4 e f . .
                . . f 3 3 3 3 3 3 3 3 3 3 3 f .
                . . f 3 3 3 3 e b 3 e e 3 3 f .
                . . f 3 3 3 3 f f e e e 3 3 f .
                . f f b b b b f b f e e e f . .
                . f b b b b b e 1 f 4 4 e . . .
                . f b b b b b f 4 4 4 4 f . . .
                . . f b b b 4 4 e d d d f . . .
                . . . f f f 4 4 e d d d f . . .
                . . . f b b e e b b d d d f . .
                . . . . f b d d 1 d 1 d b f . .
                . . . . . f f f b b f f f . . .
            `)
            pause(100)
            bellie.setImage(img`
                . . . . . . f f f f 4 4 f . . .
                . . . . f f b f 5 4 5 5 4 f . .
                . . . f b 3 3 e 4 5 5 5 5 f . .
                . . f b 3 3 3 3 e 4 4 4 e f . .
                . . f 3 3 3 3 3 3 3 3 3 3 f . .
                . . f 3 3 3 3 e b 3 e e 3 3 f .
                . . f 3 3 3 3 f f e e e 3 3 f .
                . . f b b b b f b f e e e 3 f .
                . . f b b b b e 1 f 4 4 e f . .
                . f f b b b b f 4 4 4 4 f . . .
                . f b b b b f f f e e e f . . .
                . . f b b f 4 4 e d d d f . . .
                . . . f f e 4 4 e d d d f . . .
                . . . . f b e e b d b d b f . .
                . . . . f f d 1 d 1 d 1 f f . .
                . . . . . . f f b b f f . . . .
            `)
            pause(100)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bellieDirection == "right") {
        bellie.setImage(img`
            . . . . . . f f f f 4 4 f . . .
            . . . . f f b f 5 4 5 5 4 f . .
            . . . f b 3 3 e 4 5 5 5 5 f . .
            . . f b 3 3 3 3 e 4 4 4 e f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . . f 3 3 3 3 e b 3 e e 3 3 f .
            . . f 3 3 3 3 f f e e e 3 3 f .
            . . f b b b b f b f e e e 3 f .
            . . f b b b b e 1 f 4 4 e f . .
            . f f b b b b f 4 4 4 4 f . . .
            . f b b b b f f f f e e e . . .
            . . f b b f d d d e e 4 4 e . .
            . . . f f d d d d d e 4 4 e . .
            . . . . f b d d b d b e e f . .
            . . . . f f d 1 d 1 d 1 f f . .
            . . . . . . f f b b f f . . . .
        `)
        if (bellie.tileKindAt(TileDirection.Right, myTiles.tile1)) {
            randoBlockPos = tiles.getTileLocation(bellie.x / 16 + 1, bellie.y / 16)
            randoBlockNum = Math.randomRange(1, 6)
            if (firstNum != 0 && secondNum != 0) {
                firstNum = 0
                secondNum = 0
            }
            if (firstNum == 0 && secondNum == 0) {
                firstNum = randoBlockNum
                totalNum = firstNum + secondNum
            } else if (firstNum != 0 && secondNum == 0) {
                secondNum = randoBlockNum
                totalNum = firstNum + secondNum
                pause(500)
                // scene.centerCameraAt(tiles.getTileLocation(22 +
                // totalNum - 2, 28 - bellcurve[totalNum - 2]).x,
                // tiles.getTileLocation(22 + totalNum - 2, 28 -
                // bellcurve[totalNum - 2]).y)
                scene.centerCameraAt(27 * 16, 26 * 16)
                pause(1000)
                tiles.setTileAt(tiles.getTileLocation(22 + totalNum - 2, 28 - bellcurve[totalNum - 2]), sprites.dungeon.floorLight0)
                tiles.setWallAt(tiles.getTileLocation(22 + totalNum - 2, 28 - bellcurve[totalNum - 2]), true)
                pause(1000)
                scene.cameraFollowSprite(bellie)
                pause(500)
                bellcurve[totalNum - 2]++
            }
            randoBlockImage = myTiles.tileArr[randoBlockNum + 2]
            // switch (randoBlockNum) { case 1: randoBlockImage =
            // qBlockOne break; case 2: randoBlockImage =
            // qBlockTwo break; case 3: randoBlockImage =
            // qBlockThree break; case 4: randoBlockImage =
            // qBlockFour break; case 5: randoBlockImage =
            // qBlockFive break; case 6: randoBlockImage =
            // qBlockSix break; default: randoBlockImage =
            // myTiles.tile1 }
            totalNum = firstNum + secondNum
            tiles.setTileAt(randoBlockPos, randoBlockImage)
            bellie.say("" + firstNum.toString() + " + " + secondNum.toString() + " = " + totalNum.toString())
        }
    } else if (bellieDirection == "left") {
        bellie.setImage(img`
            . . . f 4 4 f f f f . . . . . .
            . . f 4 5 5 4 5 f b f f . . . .
            . . f 5 5 5 5 4 e 3 3 b f . . .
            . . f e 4 4 4 e 3 3 3 3 b f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . f 3 3 e e 3 b e 3 3 3 3 f . .
            . f 3 3 e e e f f 3 3 3 3 f . .
            . f 3 e e e f b f b b b b f . .
            . . f e 4 4 f 1 e b b b b f . .
            . . . f 4 4 4 4 f b b b b f f .
            . . . e e e f f f f b b b b f .
            . . e 4 4 e e d d d f b b f . .
            . . e 4 4 e d d d d d f f . . .
            . . f e e b d b d d b f . . . .
            . . f f 1 d 1 d 1 d f f . . . .
            . . . . f f b b f f . . . . . .
        `)
        if (bellie.tileKindAt(TileDirection.Left, myTiles.tile1)) {
            randoBlockPos = tiles.getTileLocation(bellie.x / 16 - 1, bellie.y / 16)
            randoBlockNum = Math.randomRange(1, 6)
            if (firstNum != 0 && secondNum != 0) {
                firstNum = 0
                secondNum = 0
            }
            if (firstNum == 0 && secondNum == 0) {
                firstNum = randoBlockNum
                totalNum = firstNum + secondNum
            } else if (firstNum != 0 && secondNum == 0) {
                secondNum = randoBlockNum
                totalNum = firstNum + secondNum
                pause(500)
                // scene.centerCameraAt(tiles.getTileLocation(22 +
                // totalNum - 2, 28 - bellcurve[totalNum - 2]).x,
                // tiles.getTileLocation(22 + totalNum - 2, 28 -
                // bellcurve[totalNum - 2]).y)
                scene.centerCameraAt(27 * 16, 26 * 16)
                pause(1000)
                tiles.setTileAt(tiles.getTileLocation(22 + totalNum - 2, 28 - bellcurve[totalNum - 2]), sprites.dungeon.floorLight0)
                tiles.setWallAt(tiles.getTileLocation(22 + totalNum - 2, 28 - bellcurve[totalNum - 2]), true)
                pause(1000)
                scene.cameraFollowSprite(bellie)
                pause(500)
                bellcurve[totalNum - 2]++
            }
            randoBlockImage = myTiles.tileArr[randoBlockNum + 2]
            totalNum = firstNum + secondNum
            tiles.setTileAt(randoBlockPos, randoBlockImage)
            bellie.say("" + firstNum.toString() + " + " + secondNum.toString() + " = " + totalNum.toString())
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    bellieDirection = "right"
    while (controller.right.isPressed() && !(controller.left.isPressed())) {
        bellie.vx = bellieVY
        bellie.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f 4 4 f . . .
            . . . . f f b f 5 4 5 5 4 f . .
            . . . f b 3 3 e 4 5 5 5 5 f . .
            . . f b 3 3 3 3 e 4 4 4 e f . .
            . . f 3 3 3 3 3 3 3 3 3 3 3 f .
            . . f 3 3 3 3 e b 3 e e 3 3 f .
            . . f 3 3 3 3 f f e e e 3 3 f .
            . f f b b b b f b f e e e f . .
            . f b b b b b e 1 f 4 4 e . . .
            . f b b b b b f 4 4 4 4 f . . .
            . . f b b b 4 4 e d d d f . . .
            . . . f f f 4 4 e d d d f . . .
            . . . f b b e e b b d d d f . .
            . . . . f b d d 1 d 1 d b f . .
            . . . . . f f f b b f f f . . .
        `)
        pause(100)
        bellie.setImage(img`
            . . . . . . f f f f 4 4 f . . .
            . . . . f f b f 5 4 5 5 4 f . .
            . . . f b 3 3 e 4 5 5 5 5 f . .
            . . f b 3 3 3 3 e 4 4 4 e f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . . f 3 3 3 3 e b 3 e e 3 3 f .
            . . f 3 3 3 3 f f e e e 3 3 f .
            . . f b b b b f b f e e e 3 f .
            . . f b b b b e 1 f 4 4 e f . .
            . f f b b b b f 4 4 4 4 f . . .
            . f b b b b f f f e e e f . . .
            . . f b b f 4 4 e d d d f . . .
            . . . f f e 4 4 e d d d f . . .
            . . . . f b e e b d b d b f . .
            . . . . f f d 1 d 1 d 1 f f . .
            . . . . . . f f b b f f . . . .
        `)
        pause(100)
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (!(controller.left.isPressed())) {
        bellie.vx = 0
        bellie.setImage(img`
            . . . . . . f f f f 4 4 f . . .
            . . . . f f b f 5 4 5 5 4 f . .
            . . . f b 3 3 e 4 5 5 5 5 f . .
            . . f b 3 3 3 3 e 4 4 4 e f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . . f 3 3 3 3 e b 3 e e 3 3 f .
            . . f 3 3 3 3 f f e e e 3 3 f .
            . . f b b b b f b f e e e 3 f .
            . . f b b b b e 1 f 4 4 e f . .
            . f f b b b b f 4 4 4 4 f . . .
            . f b b b b f f f e e e f . . .
            . . f b b f 4 4 e d d d f . . .
            . . . f f e 4 4 e d d d f . . .
            . . . . f b e e b d b d b f . .
            . . . . f f d 1 d 1 d 1 f f . .
            . . . . . . f f b b f f . . . .
        `)
        if (bellie.isHittingTile(CollisionDirection.Bottom)) {
            bellieOnSurface = 1
        }
    } else {
        while (controller.left.isPressed() && !(controller.right.isPressed())) {
            bellieDirection = "left"
            bellie.vx = bellieVY * -1
            bellie.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . f 4 4 f f f f . . . . . .
                . . f 4 5 5 4 5 f b f f . . . .
                . . f 5 5 5 5 4 e 3 3 b f . . .
                . . f e 4 4 4 e 3 3 3 3 b f . .
                . f 3 3 3 3 3 3 3 3 3 3 3 f . .
                . f 3 3 e e 3 b e 3 3 3 3 f . .
                . f 3 3 e e e f f 3 3 3 3 f . .
                . . f e e e f b f b b b b f f .
                . . . e 4 4 f 1 e b b b b b f .
                . . . f 4 4 4 4 f b b b b b f .
                . . . f d d d e 4 4 b b b f . .
                . . . f d d d e 4 4 f f f . . .
                . . f d d d b b e e b b f . . .
                . . f b d 1 d 1 d d b f . . . .
                . . . f f f b b f f f . . . . .
            `)
            pause(100)
            bellie.setImage(img`
                . . . f 4 4 f f f f . . . . . .
                . . f 4 5 5 4 5 f b f f . . . .
                . . f 5 5 5 5 4 e 3 3 b f . . .
                . . f e 4 4 4 e 3 3 3 3 b f . .
                . . f 3 3 3 3 3 3 3 3 3 3 f . .
                . f 3 3 e e 3 b e 3 3 3 3 f . .
                . f 3 3 e e e f f 3 3 3 3 f . .
                . f 3 e e e f b f b b b b f . .
                . . f e 4 4 f 1 e b b b b f . .
                . . . f 4 4 4 4 f b b b b f f .
                . . . f e e e f f f b b b b f .
                . . . f d d d e 4 4 f b b f . .
                . . . f d d d e 4 4 e f f . . .
                . . f b d b d b e e b f . . . .
                . . f f 1 d 1 d 1 d f f . . . .
                . . . . f f b b f f . . . . . .
            `)
            pause(100)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bellie.isHittingTile(CollisionDirection.Bottom)) {
        bellieOnSurface = 1
    }
    if (bellieOnSurface == 1) {
        bellieOnSurface = 0
        bellie.vy = -200
        bellie.ay = bellieAY
        pause(100)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (bellieDirection == "right") {
        bellie.setImage(img`
            . . . . . . f f f f 4 4 f . . .
            . . . . f f b f 5 4 5 5 4 f . .
            . . . f b 3 3 e 4 5 5 5 5 f . .
            . . f b 3 3 3 3 e 4 4 4 e f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . . f 3 3 3 3 e b 3 e e 3 3 f .
            . . f 3 3 3 3 f f e e e 3 3 f .
            . . f b b b b f b f e e e 3 f .
            . . f b b b b e 1 f 4 4 e f . .
            . f f b b b b f 4 4 4 4 f . . .
            . f b b b b f f f e e e f . . .
            . . f b b f 4 4 e d d d f . . .
            . . . f f e 4 4 e d d d f . . .
            . . . . f b e e b d b d b f . .
            . . . . f f d 1 d 1 d 1 f f . .
            . . . . . . f f b b f f . . . .
        `)
    }
    if (bellieDirection == "left") {
        bellie.setImage(img`
            . . . f 4 4 f f f f . . . . . .
            . . f 4 5 5 4 5 f b f f . . . .
            . . f 5 5 5 5 4 e 3 3 b f . . .
            . . f e 4 4 4 e 3 3 3 3 b f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . f 3 3 e e 3 b e 3 3 3 3 f . .
            . f 3 3 e e e f f 3 3 3 3 f . .
            . f 3 e e e f b f b b b b f . .
            . . f e 4 4 f 1 e b b b b f . .
            . . . f 4 4 4 4 f b b b b f f .
            . . . f e e e f f f b b b b f .
            . . . f d d d e 4 4 f b b f . .
            . . . f d d d e 4 4 e f f . . .
            . . f b d b d b e e b f . . . .
            . . f f 1 d 1 d 1 d f f . . . .
            . . . . f f b b f f . . . . . .
        `)
    }
})
let randoBlockNum = 0
let randoBlockPos: tiles.Location = null
let randoBlockImage: Image = null
let bellieOnSurface = 0
let bellieAY = 0
let bellieVY = 0
let bellieDirection = ""
let bellie: Sprite = null
let secondNum = 0
let firstNum = 0
let totalNum = 0
let qBlockList = []
let bellcurve: number[] = []
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile1 = img`
        . . . e e e e e e e e e e . . .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . e e 4 4 4 1 1 1 1 4 4 4 e e .
        e e 4 4 4 1 1 1 1 1 1 4 4 4 e e
        e 4 4 4 1 1 1 4 4 1 1 1 4 4 4 e
        e 4 4 4 1 1 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 4 4 4 4 4 1 1 1 4 4 4 e
        e 4 4 4 4 4 4 4 1 1 1 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 1 4 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
        e e 4 4 4 4 4 1 1 4 4 4 4 4 e e
        . e e 4 4 4 4 1 1 4 4 4 4 e e .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . . . e e e e e e e e e e . . .
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        . . . e e e e e e e e e e . . .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . e e 4 4 4 4 1 1 4 4 4 4 e e .
        e e 4 4 4 4 1 1 1 4 4 4 4 4 e e
        e 4 4 4 4 1 1 1 1 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 4 4 4 4 4 4 e
        e e 4 4 4 4 1 1 1 1 4 4 4 4 e e
        . e e 4 4 1 1 1 1 1 1 4 4 e e .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . . . e e e e e e e e e e . . .
    `
    //% blockIdentity=images._tile
    export const tile4 = img`
        . . . e e e e e e e e e e . . .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . e e 4 4 4 1 1 1 1 4 4 4 e e .
        e e 4 4 4 1 1 1 1 1 1 4 4 4 e e
        e 4 4 4 1 1 1 4 4 1 1 1 4 4 4 e
        e 4 4 4 1 1 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 4 4 4 4 4 1 1 1 4 4 4 e
        e 4 4 4 4 4 4 4 1 1 1 4 4 4 4 e
        e 4 4 4 4 4 4 1 1 1 4 4 4 4 4 e
        e 4 4 4 4 4 1 1 1 4 4 4 4 4 4 e
        e 4 4 4 4 1 1 1 4 4 4 4 4 4 4 e
        e 4 4 4 1 1 1 1 1 1 1 1 4 4 4 e
        e e 4 4 1 1 1 1 1 1 1 1 4 4 e e
        . e e 4 4 4 4 4 4 4 4 4 4 e e .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . . . e e e e e e e e e e . . .
    `
    //% blockIdentity=images._tile
    export const tile5 = img`
        . . . e e e e e e e e e e . . .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . e e 4 4 4 1 1 1 1 4 4 4 e e .
        e e 4 4 4 1 1 1 1 1 1 4 4 4 e e
        e 4 4 4 1 1 1 4 4 1 1 1 4 4 4 e
        e 4 4 4 1 1 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 4 4 4 4 1 1 1 4 4 4 4 e
        e 4 4 4 4 4 4 4 1 1 1 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 1 1 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 1 1 1 4 4 1 1 1 4 4 4 e
        e e 4 4 4 1 1 1 1 1 1 4 4 4 e e
        . e e 4 4 4 1 1 1 1 4 4 4 e e .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . . . e e e e e e e e e e . . .
    `
    //% blockIdentity=images._tile
    export const tile6 = img`
        . . . e e e e e e e e e e . . .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . e e 4 4 4 4 4 1 1 1 4 4 e e .
        e e 4 4 4 4 4 1 1 1 1 4 4 4 e e
        e 4 4 4 4 4 1 1 1 1 1 4 4 4 4 e
        e 4 4 4 4 1 1 1 4 1 1 4 4 4 4 e
        e 4 4 4 1 1 1 4 4 1 1 4 4 4 4 e
        e 4 4 4 1 1 4 4 4 1 1 4 4 4 4 e
        e 4 4 4 1 1 1 1 1 1 1 1 4 4 4 e
        e 4 4 4 1 1 1 1 1 1 1 1 4 4 4 e
        e 4 4 4 4 4 4 4 4 1 1 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 1 1 4 4 4 4 e
        e e 4 4 4 4 4 4 4 1 1 4 4 4 e e
        . e e 4 4 4 4 4 4 1 1 4 4 e e .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . . . e e e e e e e e e e . . .
    `
    //% blockIdentity=images._tile
    export const tile7 = img`
        . . . e e e e e e e e e e . . .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . e e 4 4 1 1 1 1 1 1 4 4 e e .
        e e 4 4 1 1 1 1 1 1 1 4 4 4 e e
        e 4 4 4 1 1 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 1 1 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 1 1 1 1 1 1 4 4 4 4 4 e
        e 4 4 4 4 1 1 1 1 1 1 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 1 1 1 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 1 1 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 1 1 1 4 4 1 1 1 4 4 4 e
        e e 4 4 4 1 1 1 1 1 1 4 4 4 e e
        . e e 4 4 4 1 1 1 1 4 4 4 e e .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . . . e e e e e e e e e e . . .
    `
    //% blockIdentity=images._tile
    export const tile8 = img`
        . . . e e e e e e e e e e . . .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . e e 4 4 4 1 1 1 1 4 4 4 e e .
        e e 4 4 4 1 1 1 1 1 1 4 4 4 e e
        e 4 4 4 1 1 1 4 4 1 1 1 4 4 4 e
        e 4 4 4 1 1 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 1 1 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 1 1 1 1 1 1 4 4 4 4 4 e
        e 4 4 4 1 1 1 1 1 1 1 4 4 4 4 e
        e 4 4 4 1 1 1 4 4 1 1 1 4 4 4 e
        e 4 4 4 1 1 4 4 4 4 1 1 4 4 4 e
        e 4 4 4 1 1 1 4 4 1 1 1 4 4 4 e
        e e 4 4 4 1 1 1 1 1 1 4 4 4 e e
        . e e 4 4 4 1 1 1 1 4 4 4 e e .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . . . e e e e e e e e e e . . .
    `
    export const tileEnd = img`
        . . . e e e e e e e e e e . . .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . e e 4 4 4 4 4 4 4 4 4 4 e e .
        e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
        e e 4 4 4 4 4 4 4 4 4 4 4 4 e e
        . e e 4 4 4 4 4 4 4 4 4 4 e e .
        . . e e 4 4 4 4 4 4 4 4 e e . .
        . . . e e e e e e e e e e . . .
    `
    export const tileArr: Image[] = [
        tile0,
        tile1,
        tile1,
        tile3,
        tile4,
        tile5,
        tile6,
        tile7,
        tile8
    ]
}
tiles.setTilemap(tiles.createTilemap(
            hex`28001e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d000000000000000000000000000000000000000000000000000000000000000000000000000000010d0000000000000000000000000000000000000000000000000000000000000000000000000e000101020000000000000000000000000001000000000000000000000000000000000000000002020201010103030303030303030303030303030303030303030303030303030303030303030303010101`,
            img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2
                2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2
            `,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.dungeon.hazardLava1,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.castle.tilePath1,sprites.dungeon.floorLight0,sprites.castle.tilePath3,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
let tileColMin = 4
bellcurve = [0]
for (let index = 0; index < 10; index++) {
    bellcurve.push(0)
}
bellie = sprites.create(img`
    . . . . . . f f f f 4 4 f . . .
    . . . . f f b f 5 4 5 5 4 f . .
    . . . f b 3 3 e 4 5 5 5 5 f . .
    . . f b 3 3 3 3 e 4 4 4 e f . .
    . . f 3 3 3 3 3 3 3 3 3 3 f . .
    . . f 3 3 3 3 e b 3 e e 3 3 f .
    . . f 3 3 3 3 f f e e e 3 3 f .
    . . f b b b b f b f e e e 3 f .
    . . f b b b b e 1 f 4 4 e f . .
    . f f b b b b f 4 4 4 4 f . . .
    . f b b b b f f f e e e f . . .
    . . f b b f 4 4 e d d d f . . .
    . . . f f e 4 4 e d d d f . . .
    . . . . f b e e b d b d b f . .
    . . . . f f d 1 d 1 d 1 f f . .
    . . . . . . f f b b f f . . . .
`, SpriteKind.Player)
bellieDirection = "right"
bellie.vy = 100
bellie.ay = 500
scene.cameraFollowSprite(bellie)
scene.setBackgroundColor(9)
bellieVY = 100
bellieAY = 200
bellieOnSurface = 1
tiles.placeOnTile(bellie, tiles.getTileLocation(0, 25))
info.setScore(0)
info.setLife(3)
let tileColMax = 15
let tileRowMin = 2
let tileRowMax = 28
let numberOfBlocks = 80
let qBlockImage = myTiles.tile1
randoBlockImage = myTiles.tile1
let qBlockOne = myTiles.tile3
let qBlockTwo = myTiles.tile4
let qBlockThree = myTiles.tile5
let qBlockFour = myTiles.tile6
let qBlockFive = myTiles.tile7
let qBlockSix = myTiles.tile8
let qBlockLocation = tiles.getTileLocation(Math.randomRange(tileColMin, tileColMax), Math.randomRange(tileRowMin, tileRowMax))
qBlockList.push(qBlockLocation)
tiles.setTileAt(qBlockLocation, qBlockImage)
tiles.setWallAt(qBlockLocation, true)
tiles.setTileAt(tiles.getTileLocation(38, 27), myTiles.tileEnd)
// for your understanding first loop generates a
// random x-y coordinate second loop checks that
// random x-y coordinate against the x-y coordinates
// of existing blocks if repetition is discovered, the
// first loop is reset in the hope of generating a
// unique x-y coordinate if repetition is not
// discovered, the block is placed
for (let j = 1; j < numberOfBlocks; j++) {
    qBlockLocation = tiles.getTileLocation(Math.randomRange(tileColMin, tileColMax), Math.randomRange(tileRowMin, tileRowMax))
    let repetition = false
    for (let k = 0; k < qBlockList.length; k++) {
        if (qBlockList.get(k).x == qBlockLocation.x && qBlockList.get(k).y == qBlockLocation.y) {
            repetition = true
            break
        }
    }
    if (repetition == true) {
        j -= 1
    }
    else {
        qBlockList.push(qBlockLocation)
        tiles.setTileAt(qBlockLocation, qBlockImage)
        tiles.setWallAt(qBlockLocation, true)
    }
}
