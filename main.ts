//% color="#00CC00" icon="\uf1f9"
//% block="Robot soccer"
//% block.loc.nl="Robotvoetbal"
namespace CSoccer {

    //////////////////////
    // Playing progress //
    //////////////////////

    let PLAYING = false

    export function startPlaying() {
        PLAYING = true
    }

    export function stopPlaying() {
        PLAYING = false
    }

    export function isPlaying() : boolean {
        return PLAYING
    }

    /////////////////
    // Radio group //
    /////////////////

    export enum Group {
        //% block="group 1"
        //% block.loc.nl="groep 1"
        Group1,
        //% block="group 2"
        //% block.loc.nl="groep 2"
        Group2,
        //% block="group 3"
        //% block.loc.nl="groep 3"
        Group3,
        //% block="group 4"
        //% block.loc.nl="groep 4"
        Group4,
        //% block="group 5"
        //% block.loc.nl="groep 5"
        Group5,
        //% block="group 6"
        //% block.loc.nl="groep 6"
        Group6,
        //% block="group 7"
        //% block.loc.nl="groep 7"
        Group7,
        //% block="group 8"
        //% block.loc.nl="groep 8"
        Group8,
        //% block="group 9"
        //% block.loc.nl="groep 9"
        Group9
    }

    let GROUP = 1

    input.onLogoEvent(TouchButtonEvent.Pressed, function () {
        GROUP++
        if (GROUP > 9) GROUP = 1
        radio.setGroup(GROUP)
        basic.showNumber(GROUP)
        basic.pause(1000)
        display() // must be defined in the main program
    })

    ////////////////////////////
    // Communication commands //
    ////////////////////////////

    export enum COMMAND {
        Start,
        Stop,
        GoalGreen,
        GoalRed,
        ObstructGreen,
        ObstructRed,
        DisqualGreen,
        DisqualRed,
        Reset
    }

    radio.onReceivedNumber(function (cmd: number) {

        if (cmd == COMMAND.Start) PLAYING = true
        if (cmd == COMMAND.Stop) PLAYING = false

        handle(cmd) // must be defined in the main program
    })
}
