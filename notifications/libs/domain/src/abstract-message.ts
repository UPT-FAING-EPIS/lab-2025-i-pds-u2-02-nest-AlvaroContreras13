import { IMessageSender } from "./imessage-sender.interface";

/**
 * Clase abstracta que define la estructura común para los diferentes tipos de mensajes.
 * 
 * Aplica el patrón **Bridge**, donde esta clase actúa como la abstracción que utiliza
 * una implementación (`IMessageSender`) para enviar mensajes a través de distintos canales.
 */
export abstract class AbstractMessage {
    /**
     * Instancia de la implementación de envío de mensajes (SMS, Email, etc.).
     * Se inyecta en tiempo de ejecución mediante composición.
     */
    protected _messageSender: IMessageSender;

    /**
     * Método abstracto que debe ser implementado por las clases concretas para enviar mensajes.
     * 
     * @param Message El contenido del mensaje a enviar.
     * @returns Una cadena de texto como resultado de la operación de envío.
     */
    public abstract SendMessage(Message: string): string;
}
