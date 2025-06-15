/**
 * Interfaz que define el contrato para los servicios de envío de mensajes.
 * 
 * Forma parte del patrón de diseño **Bridge**, representando la "implementación" 
 * que puede variar independientemente de la abstracción (`AbstractMessage`).
 */
export interface IMessageSender {
  /**
   * Envía un mensaje por el canal implementado (Email, SMS, etc.).
   * 
   * @param Message El contenido del mensaje a enviar.
   * @returns Confirmación del envío como cadena de texto.
   */
  SendMessage(Message: string): string;
}
