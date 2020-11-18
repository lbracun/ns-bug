import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    onButtonTap(): void {
        console.log("Button was pressed");
    }


    constructor(private router: RouterExtensions) {
    }

    ngOnInit(): void {
    }

    toPage2() {
        this.router.navigate(['/home', 'page-2']);
    }
}
