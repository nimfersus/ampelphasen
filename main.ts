input.onButtonPressed(Button.A, function () {
    wunsch = 1
})
let wunsch = 0
wunsch = 0
let Farbe = 0
music.setTempo(224)
basic.forever(function () {
    if (Farbe == 1) {
        basic.setLedColor(0x00ff00)
        basic.pause(9000)
        Farbe = 0
        wunsch = 0
    } else {
        basic.setLedColor(0xff0000)
    }
    if (wunsch && Farbe == 0) {
        basic.showString("Signal kommt.")
        basic.pause(0)
        Farbe = 1
        wunsch = 0
    }
})
basic.forever(function () {
    if (Farbe == 1) {
        music.setTempo(224)
        music.playTone(784, music.beat(BeatFraction.Double))
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else {
        music.setTempo(400)
        music.playTone(131, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Breve))
    }
})
