import { Customer } from "./customer";

/**
 * Servicio que valida los datos ingresados por el cliente.
 * Se asegura de que los campos obligatorios no estén vacíos.
 */
export class Validator {
    
    /**
     * Valida un objeto `Customer` verificando que sus campos esenciales no estén vacíos.
     * 
     * @param customer El cliente a validar.
     * @returns `true` si todos los campos requeridos están correctamente definidos.
     * @throws Error si alguno de los campos obligatorios está vacío.
     */
    public ValidateCustomer(customer: Customer): boolean {
        if (typeof customer.Name === 'string' && customer.Name.trim().length === 0)
            throw new Error("Name can't be null or empty");

        if (typeof customer.Email === 'string' && customer.Email.trim().length === 0)
            throw new Error("Email can't be null or empty");

        if (typeof customer.MobileNumber === 'string' && customer.MobileNumber.trim().length === 0)
            throw new Error("MobileNumber can't be null or empty");

        if (typeof customer.Address === 'string' && customer.Address.trim().length === 0)
            throw new Error("Address can't be null or empty");

        return true;
    }
}
