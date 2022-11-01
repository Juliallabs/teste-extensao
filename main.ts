let angulo = 0
basic.forever(function on_forever() {
    
    angulo = Math.map(Math.abs(pins.analogReadPin(AnalogPin.P0) / 10), 0, 100, 0, 270)
    pins.servoWritePin(AnalogPin.P14, angulo)
    serial.writeValue("x", angulo)
})
