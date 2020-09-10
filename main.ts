/*！
 * @file joystickbit/main.ts
 * @brief JoystickBit makecode library.
 *
 * @copyright	KH 2019
 * @copyright	GNU Lesser General Public License
 *
 * @author KH
 * @version  V1.0
 * @date  2019-08-30
 */

enum JoystickButtons {
    //% block="Button A"
    BUTTON_A,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="Button B"
    BUTTON_B,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="Button C"
    BUTTON_C,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="Button D"
    BUTTON_D,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="Button E"
    BUTTON_E,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="Button F"
    BUTTON_F,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    // //% block="released"
    // Up = DAL.MICROBIT_BUTTON_EVT_UP,
    // //% block="click"
    // Click = DAL.MICROBIT_BUTTON_EVT_CLICK,
}

/**
 * Functions for JoystickBit.
 */
//% weight=10 color=#DF6721 icon="\uf11b" block="joystickBit"
namespace joystickBit {
    
    let calX: number = 518;
    let calY: number = 518;
    
    //% shim=gamerpad::init
    function init(): void {
        return;
    }

    function PinInit(): void {
        // pins.setPull(DigitalPin.P1, PinPullMode.PullNone);
        // pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
        return;
    }

    /**
     * To scan a button whether be triggered : return '1' if pressed; return'0' if not.
     */
    //% weight=70
    //% blockId=joystickBit_keyState block="button|%button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    export function keyState(button: JoystickButtons): boolean {

        let an = pins.analogReadPin(AnalogPin.P2);
        let num = false;
        if (an < 256 && button == JoystickButtons.BUTTON_A) {
            return true;
        }
        else if (an < 597 && button == JoystickButtons.BUTTON_B) {
            return true;
        }
        else if (an < 725 && button == JoystickButtons.BUTTON_C) {
            return true;
        }
        else if (an < 793 && button == JoystickButtons.BUTTON_D) {
            return true;
        }
        else if (an < 836 && button == JoystickButtons.BUTTON_E) {
            return true;
        }
        else if (an < 938 && button == JoystickButtons.BUTTON_F) {
            return true;
        }
        return false;
    }

    /**
     * Read X value of Joystick
     */
    //% weight=70
    //% blockId=joystickBit_JoystickX block="read Joystick X value"
    export function joystickX(): number {
        return pins.analogReadPin(AnalogPin.P1) - calX;
    }

    /**
     * Read Y value of Joystick
     */
    //% weight=70
    //% blockId=joystickBit_JoystickY block="read Joystick Y value"
    export function joystickY(): number {
        return pins.analogReadPin(AnalogPin.P1) - calY;
    }

    /**
     * Calibrate Joystick X & Y center position
     */
    //% weight=70
    //% blockId=joystickBit_CalibrateJoystick block="Calibrate joystick |%xx|and |%yy| center position"
    export function calibrateJoystick(xx: number, yy: number) {
        calX = xx;
        calY = yy;
    }

    // /**
    //  * Registers code to run when a DFRobot gamer:bit event is detected.
    //  */
    // //% weight=60
    // //% blockGap=50
    // //% blockId=joystickBit_onEvent block="on button|%button|is %event"
    // //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    // //% event.fieldEditor="gridpicker" event.fieldOptions.columns=3
    // export function onEvent(button: GamerBitPin, event: GamerBitEvent, handler: Action) {
    //     control.onEvent(<number>button, <number>event, handler); // register handler
    // }

}
