import { AbstractMessage } from "./abstract-message";
import { IMessageSender } from "./imessage-sender.interface";

/**
 * Representa un mensaje corto que debe tener 25 caracteres o menos.
 * 
 * Esta clase concreta extiende `AbstractMessage` y utiliza una implementación
 * de `IMessageSender` para enviar el mensaje por el canal adecuado.
 * 
 * Si el mensaje excede los 25 caracteres, se lanza una excepción controlada.
 */
export class ShortMessage extends AbstractMessage {
    /**
     * Mensaje de error mostrado cuando el mensaje excede el límite permitido.
     */
    public LARGE_ERROR_MESSAGE: string = "Unable to send the message as length > 25 characters";

    /**
     * Constructor que recibe la implementación concreta de `IMessageSender` (Ej: SMS o Email).
     * 
     * @param messageSender Canal de envío de mensaje (implementación del bridge).
     */
    constructor(messageSender: IMessageSender) {
        super();
        this._messageSender = messageSender;
    }

    /**
     * Envía el mensaje si su longitud es menor o igual a 25 caracteres.
     * 
     * @param Message El contenido del mensaje a enviar.
     * @returns Resultado del envío desde `IMessageSender`.
     * @throws Error si el mensaje excede los 25 caracteres.
     */
    public SendMessage(Message: string): string {
        if (Message.length <= 25)
            return this._messageSender.SendMessage(Message);
        else
            throw new Error(this.LARGE_ERROR_MESSAGE);
    }
}
