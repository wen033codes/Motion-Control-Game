let old_y = 0
let old_x = 0
let x = 2
let y = 2
led.plot(x, y)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
basic.forever(function () {
    old_x = x
    old_y = y
    if (input.acceleration(Dimension.X) > 200) {
        x += 1
    }
})
