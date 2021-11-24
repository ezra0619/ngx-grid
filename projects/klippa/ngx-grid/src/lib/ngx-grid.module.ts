import { NgModule } from '@angular/core';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { GridRowComponent } from './grid-row/grid-row.component';

@NgModule({
	declarations: [GridContainerComponent, GridColumnComponent, GridRowComponent],
	imports: [
	],
	exports: [GridContainerComponent, GridColumnComponent, GridRowComponent]
})
export class NgxGridModule { }
