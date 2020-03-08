import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IActivity } from './activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  constructor(protected http: HttpClient) {}
	getActivitiesByDestinationId(destinationId: string): Observable<IActivity[]> {
    const params = {} as any;
		params.destinationId = destinationId;
		return this.http.get<any>(`/api/activities`, { params: params });
	}
}
