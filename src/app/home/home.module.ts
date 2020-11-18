import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Page2Component } from './page-2/page-2.component';

@NgModule({
    imports: [NativeScriptCommonModule, HomeRoutingModule],
    declarations: [HomeComponent, Page2Component],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
