input.onButtonPressed(Button.A, function () {
    // add code
})
input.onButtonPressed(Button.B, function () {
    // add code
})
input.onButtonPressed(Button.AB, function () {
    // add code
})


/*
The code below is taken from an Elecfreaks library:
The CutebotPro code is copied from the ElecFreaks 'main.ts' library:
https://github.com/elecfreaks/pxt-Cutebot-Pro/blob/master/main.ts
(MIT-license)
*/

/*
The code below is taken from an Elecfreaks library:
The CutebotPro code is copied from the ElecFreaks 'v2.ts' library:
https://github.com/elecfreaks/pxt-Cutebot-Pro/blob/master/v2.ts
(MIT-license)
*/

namespace CSoccer {

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

    let GROUP = Group.Group1

    //% block="join %group"
    //% block.loc.nl="sluit aan bij %group"
    export function setGroup(group: Group) {
        GROUP = group + 1
        radio.setGroup(GROUP)
    }

}

//% color="#00CC00" icon="\uf1f9"
//% block="Soccer"
//% block.loc.nl="Voetbal"
namespace CPlayer {

    //% block="strategy"
    //% block.loc.nl="strategie"
    export function setStrategy() {
    }

}
