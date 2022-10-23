import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.scss'],
    imports: [MatToolbarModule, MatButtonModule]
})
export class ToolBarComponent implements OnInit {

    constructor(private router : Router) {}

    ngOnInit(): void {}

    navigate(url : string): void {
        this.router.navigate(['wiki', url])
    }

}
