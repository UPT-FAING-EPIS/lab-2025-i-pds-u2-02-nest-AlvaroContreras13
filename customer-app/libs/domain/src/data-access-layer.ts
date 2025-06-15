import { Customer } from "./customer";

/**
 * Capa de acceso a datos simulada para almacenar clientes en memoria.
 * En una aplicación real, este componente interactuaría con una base de datos.
 */
export class DataAccessLayer {
    /** Lista de clientes almacenados en memoria */
    public Customers: Array<Customer>;

    /**
     * Constructor que inicializa la lista vacía de clientes.
     */
    constructor() {
        this.Customers = [];
    }

    /**
     * Guarda un cliente en la lista de clientes simulada.
     * 
     * @param customer El cliente a almacenar.
     * @returns `true` si el cliente fue agregado exitosamente.
     */
    public SaveCustomer(customer: Customer): boolean {
        this.Customers.push(customer);
        return true;
    }           
}
