import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  queryBot(context: any): Promise<any> {
    return this.httpClient.post('/services/chat', context).toPromise();
  }
}
