import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura, Linea } from '../models/cliente.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  public factura!: Factura;

  constructor(
    private storage: StorageService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.factura = await this.storage.get('factura_actual');
  }

  async ionViewWillEnter() {
    this.factura = await this.storage.get('factura_actual');
  }

  verLinea(linea: Linea) {
    this.storage.set('linea_actual', linea);
    this.router.navigate(['/linea-detalle']);
  }
}
