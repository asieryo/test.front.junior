import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationThumbnailComponent, DestinationGalleryComponent } from './components';
import { DestinationResolver } from './destination.resolver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivitiesService } from './components/activities/activities.service';

@NgModule({
	imports: [
		DestinationRoutingModule,
		CommonModule,
		HttpClientModule,
		ApiModule,
	],
	providers: [
		DestinationService,
		DestinationResolver,
		ActivitiesService
	],
	declarations: [
		DestinationComponent,
		DestinationThumbnailComponent,
		DestinationGalleryComponent,
		ActivitiesComponent,
	],
	exports: [
		DestinationThumbnailComponent,
	]
})
export class DestinationModule {}
