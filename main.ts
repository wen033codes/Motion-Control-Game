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
    } else {
        if (input.acceleration(Dimension.X) < -200) {
            x += -1
        }
    }
    if (input.acceleration(Dimension.Y) > 200) {
        y += 1
    } else {
        if (input.acceleration(Dimension.Y) < -200) {
            y += -1
        }
    }
    x = Math.min(4, Math.max(0, x))
    y = Math.min(4, Math.max(0, y))
    if (x != old_x || y != old_y) {
        led.plot(x, y)
        led.unplot(old_x, old_y)
    }
})
