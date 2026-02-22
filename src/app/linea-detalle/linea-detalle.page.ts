import { Component, OnInit } from '@angular/core';
import { Linea } from '../models/cliente.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-linea-detalle',
  templateUrl: './linea-detalle.page.html',
  styleUrls: ['./linea-detalle.page.scss'],
  standalone: false,
})
export class LineaDetallePage implements OnInit {
  public linea!: Linea;

  constructor(private storage: StorageService) { }

  async ngOnInit() {
    this.linea = await this.storage.get('linea_actual');
  }

}
