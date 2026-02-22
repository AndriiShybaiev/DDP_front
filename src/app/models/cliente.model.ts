export interface Cliente {
  dni: string;
  pass: string;
  nombre?: string;
  direccion?: string;
  telefono?: string;
  facturas?: Factura[];
  reservas_oid?: number[];
}

export interface Factura {
  id: number;
  fecha: Date;
  esPagada: boolean;
  esAnulada: boolean;
  lineas: Linea[];
  dameTotal: number;
}

export interface Linea {
  numLinea: number;
  precio: number;
}

export interface Reserva {
  id: number;
  inicio: Date;
  final: Date;
  coches: Coche[];
  estado: number;
}

export interface Coche {
  numLicencia: number;
  categoria: number;
  estado: number;
}
