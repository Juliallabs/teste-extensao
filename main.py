angulo = 0

def on_forever():
    global angulo
    angulo = Math.map(abs(pins.analog_read_pin(AnalogPin.P0) / 10), 0, 100, 0, 270)
    pins.servo_write_pin(AnalogPin.P14, angulo)
    serial.write_value("x", angulo)
basic.forever(on_forever)
