import {
	Component,
	HostBinding,
	Input,
	Optional,
	SkipSelf,
} from '@angular/core';

@Component({
	selector: 'klp-grid-container',
	templateUrl: './grid-container.component.html',
	styleUrls: ['./grid-container.component.scss'],
})
export class GridContainerComponent {
	@HostBinding('class.fluid') @Input() fluid: boolean;

	constructor(@SkipSelf() @Optional() parentContainer: GridContainerComponent) {
		if (parentContainer != null) {
			throw new Error(
				'klp-grid-container cannot contain another at any depth.'
			);
		}
	}
}
