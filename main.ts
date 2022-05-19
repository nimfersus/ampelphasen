input.onButtonPressed(Button.A, function () {
    wunsch = 1
})
let Farbe = 0
let wunsch = 0
wunsch = 0
basic.forever(function () {
    if (Farbe == 1) {
        basic.pause(9000)
        Farbe = 0
    }
    if (wunsch && Farbe == 0) {
        basic.showString("Grün kommt.")
        basic.pause(4000)
        Farbe = 1
        wunsch = 0
    }
})
