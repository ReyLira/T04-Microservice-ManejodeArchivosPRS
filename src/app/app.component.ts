import { Component } from '@angular/core';
import { DataService } from './service/info.service';
import { PdfService } from './service/pdf.service';
import { HttpClient } from '@angular/common/http';

interface CodigoToPalabraMapping {
  [codigo: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data: any;
  filteredData: any;
  searchTerm: string = '';
  showResults: boolean = false;
  searchButtonClicked: boolean = false;

  codigoToPalabra: CodigoToPalabraMapping = {
    'ANX00': 'FICHA DE INGRESO',
    'ANX01': 'ACTA DE COMPROMISO DE INSCRIPCIÓN',
    'ANX1B': 'ACTA DE COMPROMISO POR INCUMPLIMIENTO',
    'ANX1C': 'ACTA DE CONOCIMIENTO DEL PLAN DE TRATAMIENTO INDIVIDUAL',
    'ANX1E': 'ACTA DE COMPROMISO E INSCRIPCIÓN “PROGRAMA DE ESCUELA DE PADRES”',
    'ANX0A': 'ACTA DE COMPROMISO DEL ADOLESCENTE Y SUS PADRES',
    'ANX0B': 'CONSTANCIA DE VISITA DOMICILIARIA',
    'ANX05': 'SERVICIO DE ORIENTACIÓN AL ADOLESCENTE SOA CAÑETE - CITACIÓN',
    'ANX02': 'EVALUCIÓN DEL RIESGO DE VIOLENCIA EN JÓVENES (SAVRY)',
    'HCR20': 'HOJA DE CODIFICACIÓN (HCR20)',
    'ANX04': 'FICHA PSICOSOCIAL',
    'ANX1D': 'ACTA DE CONOCIMIENTO DE MODIFICACION DEL PLAN DE TRATAMIENTO INDIVIDAL',

    'INFPI': 'INFORME DE PLAN INDIVIDUAL',
    'INFSG': 'INFORME DE SEGUIMIENTO',
    'INFII': 'INFORME DE INCUMPLIMIENTO',
    'INFIC': 'INFORME DE INCIDENCIA',
    'INFIF': 'INFORME FINAL',
  };


  constructor(private dataService: DataService, private pdfService: PdfService, private http: HttpClient) { }

  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  realizarBusqueda(): void {
    if (this.searchTerm.length === 8) {
      this.filteredData = this.data.filter((item: any) =>
        item.dni.includes(this.searchTerm)
      );
      this.showResults = true;
    } else {
      this.showResults = false;
      this.filteredData = [];
    }
  }

  nuevaBusqueda(): void {
    this.searchTerm = '';
    this.showResults = false;
  }
}
