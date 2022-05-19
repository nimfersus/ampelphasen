def on_button_pressed_a():
    global wunsch
    wunsch = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

wunsch = 0
wunsch = 0
Farbe = 0
music.set_tempo(224)

def on_forever():
    global Farbe, wunsch
    if Farbe == 1:
        basic.set_led_color(0x00ff00)
        basic.pause(9000)
        Farbe = 0
        wunsch = 0
    else:
        basic.set_led_color(0xff0000)
    if wunsch and Farbe == 0:
        basic.show_string("Signal kommt.")
        basic.pause(0)
        Farbe = 1
        wunsch = 0
basic.forever(on_forever)

def on_forever2():
    if Farbe == 1:
        music.set_tempo(224)
        music.play_tone(784, music.beat(BeatFraction.DOUBLE))
        music.play_tone(784, music.beat(BeatFraction.WHOLE))
        music.rest(music.beat(BeatFraction.WHOLE))
    else:
        music.set_tempo(224)
        music.play_tone(131, music.beat(BeatFraction.QUARTER))
        music.rest(music.beat(BeatFraction.BREVE))
basic.forever(on_forever2)
