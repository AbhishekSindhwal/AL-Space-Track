import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api/saveFormData';
  private apiUrl2='http://localhost:8000/api/data'

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl2);
  }
  saveFormData(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData).pipe(finalize(()=>{
      this.getData(); 
    })) ;
  }
}
