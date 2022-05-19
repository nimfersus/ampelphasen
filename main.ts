input.onButtonPressed(Button.A, function () {
    wunsch = 1
})
let wunsch = 0
wunsch = 0
let Farbe = 0
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
        basic.showString("Grün kommt.")
        basic.pause(2000)
        Farbe = 1
        wunsch = 0
    }
})
