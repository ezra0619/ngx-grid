import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridContainerComponent } from '../grid-container/grid-container.component';
import { GridRowComponent } from './grid-row.component';

describe('GridRowComponent', () => {
	let component: GridRowComponent;
	let fixture: ComponentFixture<GridRowComponent>;

	describe('when there is a grid container parent', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [],
				declarations: [GridRowComponent],
				providers: [
					{
						provide: GridContainerComponent,
						useValue: new GridContainerComponent(null),
					},
				],
			}).compileComponents();

			fixture = TestBed.createComponent(GridRowComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});

	describe('when there is not grid container parent', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [],
				declarations: [GridRowComponent],
				providers: [],
			}).compileComponents();
		});
		it('should not create', () => {
			expect(() => TestBed.createComponent(GridRowComponent)).toThrowError();
		});
	});
});
