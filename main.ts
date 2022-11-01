enum sensor {
    //% block="POTENCIOMETRO"
    POTENCIOMETRO,
    //% block="LDR"
    LDR,
    //% block="IR"
    IR
}

/**
 * Leitura Analogica EletroBlocks
 */
//% color="#2c3e50" weight=10
namespace EletroBlocks {
    /**
     */
    //% blockId=leituraAnalogica="ping sensor %sensor|porta%porta"
    export function ping(trig: DigitalPin, unit: sensor, maxCmDistance = 500): number {
        return 1
    }
}