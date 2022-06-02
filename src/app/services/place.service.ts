import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Place } from '../model/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient) { }
  apiUrl = environment.apiURL;
  getAllPlace():Observable<Place>{
    return this.http.get<Place>(this.apiUrl+"place/getallplace");
  }

}
