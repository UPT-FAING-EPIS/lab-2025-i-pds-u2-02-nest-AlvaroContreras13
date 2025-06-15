import { AbstractMessage } from "./abstract-message";
import { IMessageSender } from "./imessage-sender.interface";

/**
 * Representa un mensaje largo que puede tener cualquier cantidad de caracteres.
 * 
 * Esta clase extiende `AbstractMessage` y delega el envío del mensaje a una implementación
 * concreta de `IMessageSender`, como parte del patrón de diseño **Bridge**.
 */
export class LongMessage extends AbstractMessage {
    /**
     * Constructor que recibe una implementación de `IMessageSender` (Ej: Email, SMS).
     * 
     * @param messageSender Objeto que maneja el envío del mensaje.
     */
    constructor(messageSender: IMessageSender) {
        super();
        this._messageSender = messageSender;
    }

    /**
     * Envía un mensaje largo utilizando el canal especificado por `_messageSender`.
     * 
     * @param Message El contenido del mensaje.
     * @returns Resultado del envío proporcionado por la implementación de `IMessageSender`.
     */
    public SendMessage(Message: string): string {
        return this._messageSender.SendMessage(Message);
    }
}
