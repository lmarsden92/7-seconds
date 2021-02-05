let Start = 0
let Elapsed = 0
let MUSIC = ""
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    Elapsed = input.runningTime() - Start
    for (let index = 0; index < 2; index++) {
        basic.showNumber(Elapsed / 1000)
    }
    if (Elapsed < 6500 || Elapsed > 7500) {
        MUSIC = "lose"
        basic.showString("BETTER LUCK NEXT TIME")
    } else {
        MUSIC = "win"
        basic.showString("WELL DONE!")
    }
})
control.inBackground(function () {
    while (0 == 0) {
        if (MUSIC == "win") {
            music.playMelody("G B A G C5 B A B ", 120)
            music.stopAllSounds()
        } else if (MUSIC == "lose") {
            music.playMelody("C5 A B G A F G E ", 120)
            music.stopAllSounds()
        } else {
        	
        }
        basic.pause(100)
    }
})
