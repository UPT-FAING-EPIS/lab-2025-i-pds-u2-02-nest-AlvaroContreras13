import { IMessageSender } from "./imessage-sender.interface";

/**
 * Implementación concreta de `IMessageSender` que simula el envío de mensajes por SMS.
 * 
 * Esta clase representa uno de los "implementadores concretos" del patrón **Bridge**,
 * utilizada por abstracciones como `ShortMessage` o `LongMessage` para delegar el envío.
 */
export class SmsMessageSender implements IMessageSender {
    /**
     * Envía un mensaje simuladamente por medio de SMS.
     * 
     * @param Message El contenido del mensaje a enviar.
     * @returns Cadena de confirmación indicando el uso del canal SMS.
     */
    SendMessage(Message: string): string {
        return "'" + Message + "' : This Message has been sent using SMS";
    }
}
