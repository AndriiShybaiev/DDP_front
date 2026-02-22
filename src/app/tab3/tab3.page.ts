import { Component, OnInit } from '@angular/core';
import { Reserva } from '../models/cliente.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  public reserva!: Reserva;

  constructor(private storage: StorageService) {}

  async ngOnInit() {
    this.reserva = await this.storage.get('reserva_actual');
  }

  async ionViewWillEnter() {
    this.reserva = await this.storage.get('reserva_actual');
  }

  getEstadoReserva(estado: number): string {
    switch (estado) {
      case 0: return 'Solicitada';
      case 1: return 'Confirmada';
      case 2: return 'Cancelada';
      default: return 'Desconocido';
    }
  }

  getCategoriaCoche(categoria: number): string {
    switch (categoria) {
      case 0: return 'Económico';
      case 1: return 'Estándar';
      case 2: return 'Lujo';
      default: return 'Desconocido';
    }
  }
}
