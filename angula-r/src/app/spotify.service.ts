import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'BQABkSKLI6QWNLVFzkFiUOwJVMP0IjcGF7ZhuJK0qMN1ibsLbbrEN7yRXfhm4xvZmAdf26xD_CiXa2E63Ex2Y3PYFWD2GgRJi9sfgObor4NKVLuuT2QcYrgt_O8g3_ZUUfdZeiWZNO1NECMOmOr9HYSYTaQr-sk'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
