import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxGridModule} from '@klippa/ngx-grid';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NgxGridModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
