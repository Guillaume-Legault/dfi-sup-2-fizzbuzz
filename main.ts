let nombre = 0
basic.forever(function () {
    for (let index = 0; index <= 100; index++) {
        nombre = index
    }
    if (nombre % 3 == 0 && nombre % 5 == 0) {
        basic.showString("FB")
    } else if (nombre % 3 == 0) {
        basic.showString("F")
    } else if (nombre % 5 == 0) {
        basic.showString("B")
    } else {
        basic.showNumber(nombre)
    }
    basic.pause(100)
})
