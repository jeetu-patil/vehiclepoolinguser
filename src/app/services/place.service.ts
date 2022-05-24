import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../model/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient) { }

  getAllPlace():Observable<Place>{
    return this.http.get<Place>("https://ridesharely-backend-api.herokuapp.com/place/getallplace");
  }
  
}
