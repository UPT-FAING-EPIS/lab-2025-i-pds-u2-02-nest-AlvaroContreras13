import { Customer } from "./customer";
import { DataAccessLayer } from "./data-access-layer";
import { EmailService } from "./email-service";
import { Validator } from "./validator";

/**
 * Clase que encapsula el proceso de registro de un cliente.
 * Aplica el patrón de diseño **Facade** para abstraer la complejidad
 * de validación, almacenamiento y notificación.
 */
export class CustomerRegistration {
    
    /**
     * Registra un nuevo cliente ejecutando la secuencia completa:
     * validación, almacenamiento en base de datos y envío de email.
     * 
     * @param customer Objeto del tipo `Customer` que contiene los datos del cliente a registrar.
     * @returns `true` si el registro fue exitoso.
     * 
     * @throws Error si falla la validación del cliente.
     */
    public RegisterCustomer(customer: Customer): boolean
    {
        // Paso 1: Validar al cliente
        const validator = new Validator();
        validator.ValidateCustomer(customer);

        // Paso 2: Guardar al cliente en la base de datos (simulada)
        const customerDataAccessLayer = new DataAccessLayer();
        customerDataAccessLayer.SaveCustomer(customer);

        // Paso 3: Enviar correo de registro
        const email = new EmailService();
        email.SendRegistrationEmail(customer);

        return true;
    }    
}
