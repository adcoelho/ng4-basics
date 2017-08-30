import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-assignment-body',
    templateUrl: './assignment-body.component.html',
    styleUrls: ['./assignment-body.component.css']
})
export class AssignmentBodyComponent {
    clicks = [];
    displayDetails:boolean = true;

    constructor() { }

    ngOnInit() { }
    
    onClickDisplayDetails() {
        this.displayDetails = !this.displayDetails;
        this.clicks.push("Clicked at " + new Date().toLocaleString());
    }
}
