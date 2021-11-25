import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridColumnComponent } from './grid-column.component';

describe('GridColumnComponent', () => {
	let component: GridColumnComponent;
	let fixture: ComponentFixture<GridColumnComponent>;

	let mockParentElement;

	beforeEach(async () => {
		mockParentElement = jasmine.createSpyObj({
			matches: true,
		});

		await TestBed.configureTestingModule({
			declarations: [GridColumnComponent],
			providers: [
				{
					provide: ElementRef,
					useValue: {
						nativeElement: {
							parentElement: mockParentElement,
						},
					},
				},
			],
		}).compileComponents();

	});

	const create = () => {
		fixture = TestBed.createComponent(GridColumnComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

	};
  /*
	it('should create if parent matches klp-grid-row', () => {
		mockParentElement.matches.and.returnValue(true);
		create();

		expect(mockParentElement.matches).toHaveBeenCalledWith('klp-grid-row');
		expect(component).toBeTruthy();
	});

	it('should not create if parent does not match klp-grid-row', () => {
		mockParentElement.matches.and.returnValue(false);

		expect(create).toThrow(
			new Error('klp-grid-column must be child of klp-grid-row')
		);

		expect(mockParentElement.matches).toHaveBeenCalledWith('klp-grid-row');
	});
   */
});
