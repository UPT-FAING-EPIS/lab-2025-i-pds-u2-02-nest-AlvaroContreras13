import { IMessageSender } from "./imessage-sender.interface";

/**
 * Implementación concreta de `IMessageSender` que simula el envío de mensajes por correo electrónico.
 * 
 * Esta clase representa una de las implementaciones del patrón **Bridge**,
 * actuando como la "implementación concreta" en el lado del canal de comunicación.
 */
export class EmailMessageSender implements IMessageSender {
    /**
     * Envía un mensaje simuladamente usando correo electrónico.
     * 
     * @param Message El contenido del mensaje.
     * @returns Cadena de confirmación indicando el uso del canal Email.
     */
    SendMessage(Message: string): string {
        return "'" + Message + "'   : This Message has been sent using Email";
    }
}
