let Temperatura = 0
basic.forever(function () {
    basic.showNumber(Temperatura)
})
basic.forever(function () {
    Temperatura = input.temperature()
})
basic.forever(function () {
    if (7 < Temperatura) {
        music.playTone(255, music.beat(BeatFraction.Breve))
        music.playTone(255, music.beat(BeatFraction.Breve))
        music.playTone(255, music.beat(BeatFraction.Breve))
        music.playTone(255, music.beat(BeatFraction.Breve))
    }
})
