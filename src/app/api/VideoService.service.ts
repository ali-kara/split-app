import { Injectable } from "@angular/core";
import { API_CONSTANT } from "../core/api-contants";
import { BaseService } from "./BaseService";
import { Observable } from "rxjs";
import { VideoBilgi } from "../models/VideoBilgi";

@Injectable({
  providedIn: 'root',
})
export class VideoService extends BaseService {
  apiUrl: string = API_CONSTANT.API_BASE_URL + 'Trade/GetStreamInfo';

  getStreamInfo(): Observable<VideoBilgi> {
    return this.httpClient.get<VideoBilgi>(this.apiUrl);
  }
}