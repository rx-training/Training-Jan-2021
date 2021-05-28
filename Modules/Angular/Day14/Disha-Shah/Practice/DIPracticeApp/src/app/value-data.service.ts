import { Inject, Injectable } from '@angular/core';

export const API_URL:string="API_URL";

@Injectable({
  providedIn: 'root'
})
export class ValueDataService {

  constructor(@Inject(API_URL) private apiUrl: string) { }

  get(): void {
    console.log(`Calling ${this.apiUrl}/endpoint...`);
  }
}

