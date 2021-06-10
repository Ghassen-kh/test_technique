import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HttpClientModule } from '@angular/common/http';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TimelineResourcesComponent } from './timeline-resources/timeline-resources.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TimelineResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    FullCalendarModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
