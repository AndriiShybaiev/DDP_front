import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, Reserva, Factura } from '../models/cliente.model';
import { StorageService } from '../services/storage.service';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  public cliente!: Cliente;
  public reservas: Reserva[] = [];

  constructor(
    private storage: StorageService,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.cliente = await this.storage.get('cliente');
    if (this.cliente && this.cliente.dni) {
      this.clienteService.dameReservas(this.cliente.dni).subscribe({
        next: (reservas) => {
          this.reservas = reservas;
        },
        error: (err) => {
          console.error('Error al recuperar reservas', err);
        }
      });
    }
  }

  verFactura(factura: Factura) {
    this.storage.set('factura_actual', factura);
    this.router.navigate(['/tabs/tab2']);
  }

  verReserva(reserva: Reserva) {
    this.storage.set('reserva_actual', reserva);
    this.router.navigate(['/tabs/tab3']);
  }

  async logout() {
    await this.storage.clear();
    this.router.navigate(['/login']);
  }
}
