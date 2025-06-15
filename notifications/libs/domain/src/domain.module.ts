import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';

/**
 * Módulo del dominio que proporciona y exporta los servicios necesarios
 * para el envío de mensajes utilizando el patrón Bridge.
 */
@Module({
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}
