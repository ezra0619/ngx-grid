import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridColumnComponent } from './grid-column.component';
import {ElementRef} from '@angular/core';

describe('GridColumnComponent', () => {
	let component: GridColumnComponent;
	let fixture: ComponentFixture<GridColumnComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GridColumnComponent],
		}).compileComponents();
	});

	const create = () => {
		fixture = TestBed.createComponent(GridColumnComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	};

	it('should not create if parent does not match klp-grid-row', () => {
		expect(create).toThrow(
			new Error('klp-grid-column must be child of klp-grid-row')
		);
	});
});
