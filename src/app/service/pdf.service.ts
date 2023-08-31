import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  mergePdf(pdfUrls: string[]): Observable<Blob> {
    return this.http.post<Blob>(`${this.baseUrl}/merge-pdf`, pdfUrls, {
      responseType: 'blob' as 'json'
    });
  }
}
