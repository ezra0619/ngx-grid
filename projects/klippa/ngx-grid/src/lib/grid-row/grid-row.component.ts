import { Component } from '@angular/core';
import { GridContainerComponent } from '../grid-container/grid-container.component';

@Component({
	selector: 'klp-grid-row',
	templateUrl: './grid-row.component.html',
	styleUrls: ['./grid-row.component.scss'],
})
export class GridRowComponent {
	constructor(private _container: GridContainerComponent) {}
}
