import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';
import { Page2Component } from './page-2/page-2.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "page-2", component: Page2Component },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
