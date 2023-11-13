import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = []

  private _tagsHistory: string[] = [];
  private apiKey: string = 'tAFt0wOG5Ii2OymG7OCop6KND96ri4yp';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag) ) {
      // DEVUELVE SOLO LOS ELEMENTOS QUE NO SEAN IGUAL AL TAG
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    // PONE EL TAG AL INICIO
    this._tagsHistory.unshift( tag );
    // LIMITAMOS EL HISTORIAL A 10
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();

  }

  private saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void{
    if (!localStorage.getItem('history'))return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0)return;
    this.searchTag( this._tagsHistory[0] );
  }

  searchTag(tag: string): void{
    if(tag.length === 0) return;

    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe( res => {

      this.gifList = res.data;
    })
  }
}
