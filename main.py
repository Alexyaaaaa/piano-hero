@namespace
class SpriteKind:
    Piano = SpriteKind.create()
    MusicNotes = SpriteKind.create()
    CheapPinano = SpriteKind.create()
    PianoAQueue = SpriteKind.create()
    Sapin1 = SpriteKind.create()
piano4: Sprite = None

def on_on_update():
    global piano4
    tiles.set_current_tilemap(tilemap("""
        niveau2
    """))
    scene.set_background_image(assets.image("""
        stage
    """))
    piano4 = sprites.create(assets.image("""
        PianoAQueue
    """), SpriteKind.enemy)
    piano4.set_image(assets.image("""
        PianoAQueue
    """))
    piano4.set_position(74, 78)
game.on_update(on_on_update)
