basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
    servos.P2.setAngle(90)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(500)
})
