import {
	AfterViewInit,
	Component,
	ElementRef,
	HostBinding,
	Input,
	OnInit,
	SkipSelf,
} from '@angular/core';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Sizes = Partial<Record<Size, number>>;

@Component({
	selector: 'klp-grid-column',
	templateUrl: './grid-column.component.html',
	styleUrls: ['./grid-column.component.scss'],
})
export class GridColumnComponent implements OnInit, AfterViewInit {
	@Input() width: Sizes = {};
	@Input() offset: Sizes = {};

	@HostBinding('class') @Input() class = '';

	private extractSizes(input: Sizes, infix?: string): string[] {
		return Object.keys(input).map((size) =>
			[size, infix, input[size].toString()]
				.filter((x) => x != null && x !== '')
				.join('-')
		);
	}

	constructor(private self: ElementRef) { }

	ngOnInit(): void {
		const classes: string[] = [];

		classes.push(...this.extractSizes(this.width, ''));
		classes.push(...this.extractSizes(this.offset, 'offset'));
		classes.push(...this.class.split(' '));

		this.class = classes.join(' ');
	}

	ngAfterViewInit(): void {
		if (!this.self.nativeElement.parentElement.matches('klp-grid-row')) {
			throw new Error('klp-grid-column must be child of klp-grid-row');
		}
	}
}
