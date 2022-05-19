radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        Farbe = 1
    }
})
input.onButtonPressed(Button.A, function () {
    wunsch = 1
})
let Farbe = 0
let wunsch = 0
wunsch = 0
Farbe = 0
music.setTempo(224)
radio.setGroup(74)
basic.forever(function () {
    if (Farbe == 1) {
        basic.setLedColor(0x00ff00)
        basic.pause(9000)
        Farbe = 0
        wunsch = 0
        radio.sendNumber(3)
    } else {
        basic.setLedColor(0xff0000)
    }
})
basic.forever(function () {
    if (Farbe == 1) {
        music.setTempo(224)
        music.playTone(784, music.beat(BeatFraction.Double))
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else {
        music.setTempo(224)
        music.playTone(131, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Breve))
    }
})
basic.forever(function () {
    if (wunsch && Farbe == 0) {
        radio.sendNumber(1)
        basic.showString("kommt")
        basic.pause(0)
        wunsch = 0
    }
})
