namespace SpriteKind {
    export const Piano = SpriteKind.create()
    export const MusicNotes = SpriteKind.create()
    export const CheapPinano = SpriteKind.create()
    export const PianoAQueue = SpriteKind.create()
    export const Sapin1 = SpriteKind.create()
}
let piano4: Sprite = null
game.onUpdate(function () {
    tiles.setCurrentTilemap(tilemap`niveau2`)
    scene.setBackgroundImage(assets.image`stage`)
    piano4 = sprites.create(assets.image`PianoAQueue`, SpriteKind.Enemy)
    piano4.setImage(assets.image`PianoAQueue`)
    piano4.setPosition(74, 78)
    tiles.setCurrentTilemap(tilemap`niveau3`)
    tileUtil.coverAllTiles(assets.tile`myTile0`, sprites.castle.tilePath5)
    tileUtil.coverAllTiles(assets.tile`myTile4`, sprites.castle.tileGrass3)
    tileUtil.coverAllTiles(assets.tile`waterBorder`, sprites.castle.tileGrass1)
    tileUtil.createSpritesOnTiles(assets.tile`myTile3`, assets.image`forestTree1`, SpriteKind.Sapin1)
})
