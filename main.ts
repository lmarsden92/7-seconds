let Start = 0
let Elapsed = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    Elapsed = input.runningTime() - Start
    score = Math.abs(7000 - Elapsed)
    for (let index = 0; index < 2; index++) {
        basic.showNumber(score / 1000)
    }
    if (score < 6500) {
        basic.showString("BETTER LUCK NEXT TIME")
    } else if (score > 7500) {
        basic.showString("BETTER LUCK NEXT TIME")
    } else if (score < 7500) {
        basic.showString("WELL DONE!")
    } else {
        basic.showString("WELL DONE!")
    }
})
