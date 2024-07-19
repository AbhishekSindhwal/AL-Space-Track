import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api/v1';
  private apiUrl2='http://localhost:8000/api/v1/cabin'

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl2);
  }

  getService():Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/v1/service')
  }

  addCabin(body:any):Observable<any>{
    return this.http.post<any>('http://localhost:8000/api/v1/cabin',body)
  }
  addService(body:any):Observable<any>{
    return this.http.post<any>('http://localhost:8000/api/v1/service',body);
  }

  deleteCabin(id:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:8000/api/v1/cabin/${id}`);
  }
  deleteService(id:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:8000/api/v1/service/${id}`);
  }


  saveFormData(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData).pipe(finalize(()=>{
      this.getData(); 
    })) ;
  }
}
