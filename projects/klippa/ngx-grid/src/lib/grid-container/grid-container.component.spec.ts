import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridContainerComponent } from './grid-container.component';

describe('GridContainerComponent', () => {
	let component: GridContainerComponent;
	let fixture: ComponentFixture<GridContainerComponent>;

	const create = () => {
		fixture = TestBed.createComponent(GridContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	};

	describe('when there is no parent grid container', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				declarations: [GridContainerComponent],
			}).compileComponents();
		});

		it('should create', () => {
			create();
			expect(component).toBeTruthy();
		});
	});

	describe('when there is a parent grid container', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				declarations: [GridContainerComponent],
				providers: [{ provide: GridContainerComponent, useValue: '' }],
			}).compileComponents();
		});

		it('should not create', () => {
			expect(create).toThrow(
				new Error('klp-grid-container cannot contain another at any depth.')
			);
		});
	});
});
