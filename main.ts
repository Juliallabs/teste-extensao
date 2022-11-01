enum sensor {
    //% block="POTENCIOMETRO"
    POTENCIOMETRO,
    //% block="LDR"
    LDR,
    //% block="IR"
    IR
}
namespace EletroBlocks {
    /**
     * Leitura Analogica para blocos EletroBlocks
     */
    //% blockId=leituraAnalogica="ping sensor %sensor|porta%porta"
    //% block= "teste"
    export function ping(trig: DigitalPin, unit: sensor, maxCmDistance = 500): number {
        return 1
    }
}