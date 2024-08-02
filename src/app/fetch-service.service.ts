// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
// import { BehaviorSubject, Observable, Subject } from 'rxjs';
// import { finalize, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class FetchService {
//    serviceSource = new Subject<number>();
//   private cabinSource=new BehaviorSubject<any[]>([]);
//   // service$ = this.serviceSource.asObservable();

//   constructor(private apiService: ApiService) {}
//   fetchService(): Observable<any[]> {
//     return this.apiService.getService().pipe(
//       tap(service => this.serviceSource.next(service))
//     );
//   }


//   addService(newService: any): Observable<any> {
//     return this.apiService.addService(newService).pipe(
//       tap(service => {
//         // const currentService = this.serviceSource.value;
//         // this.serviceSource.next([...currentService, service]);
//       },finalize(()=> this.serviceSource.next(1)))
//     );
//   }

//   fetchCabin():Observable<any[]>{
//     return this.apiService.getService().pipe(
//       tap(cabin=>this.cabinSource.next(cabin))
//     )
//   }

//   addCabin(newCabin:any):Observable<any>{
//     return this.apiService.addCabin(newCabin).pipe(
//       tap(cabin=>{
//         const currentCabin=this.cabinSource.value;
//         this.cabinSource.next([...currentCabin,cabin]);
//       })
//     )
//   }
// }



