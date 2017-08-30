import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-assignment-body',
    templateUrl: './assignment-body.component.html',
    styleUrls: ['./assignment-body.component.css']
})
export class AssignmentBodyComponent {
    username = '';

    constructor() { }

    ngOnInit() { }
    
    resetUsername() {
        this.username = '';
    }
}
