import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';

/**
 * Módulo que agrupa y exporta los servicios del dominio.
 * 
 * Este módulo proporciona el `DomainService` para ser usado en otros módulos de la aplicación.
 */
@Module({
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}
