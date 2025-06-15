import { Customer } from "./customer";
//import { MailerService } from '@nestjs-modules/mailer';

/**
 * Servicio encargado de enviar correos electrónicos al cliente.
 * Actualmente implementado como un simulador (mock) para pruebas.
 */
export class EmailService {
    // Constructor original con MailerService comentado por fines educativos
    // constructor(private readonly mailService: MailerService) {}

    /**
     * Envía un correo de confirmación de registro al cliente.
     * 
     * @param customer El cliente al que se enviará el correo de registro.
     * @returns `true` si la operación de envío fue exitosa (simulada).
     */
    public SendRegistrationEmail(customer: Customer): boolean {
        // Simulación del envío de correo electrónico.
        // Implementación real comentada para mantener el laboratorio simple.

        // this.mailService.sendMail({
        //     from: 'Kingsley Okure <kingsleyokgeorge@gmail.com>',
        //     to: customer.Email,
        //     subject: "Test mail",
        //     text: "<h1>Hello</h1>",
        // });

        return true;
    }         
}
