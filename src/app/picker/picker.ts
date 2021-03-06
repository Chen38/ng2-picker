// Import from Angular
import { NgModule, Component, Input, Output, OnChanges, OnInit, AfterViewInit, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import library
import { Picker } from '../../vendor/better-picker/picker';

/* ---------------- Define send data interface ---------------- */
export interface SendData {
	action: string;
	show: boolean;
	selectedValue: string[];
	selectedIndex: number[];
}

/* ---------------- Define component and export ---------------- */
@Component({
	selector: 'better-picker',
	templateUrl: './picker.template.html',
	styleUrls: ['./picker.style.scss']
})

export class BetterPickerComponent implements AfterViewInit, OnChanges {

	@Input() private data: any[];
	@Input() private show: boolean;
	@Input() private selectedIndex: number[];

	@Output() private onSelect: EventEmitter<SendData> = new EventEmitter<SendData>();
	@Output() private onChange: EventEmitter<any> = new EventEmitter<any>();

	private picker: any;

	/**
	 * make sure all datas and view rendered to init the wheels selector
	 */
	ngAfterViewInit() {
		if (this.data.length) {
			this.pickerInit();
		}
	}

	/**
	 * detect the change of data
	 */
	ngOnChanges(value: SimpleChanges) {
		let show: SimpleChange = value.show;
		if (show.currentValue) {
			setTimeout(() => {
				this.picker.refresh(this.data, this.selectedIndex);
			}, 0);
		}
	}

	/**
	 * initialize wheels selector
	 */
	pickerInit() {
		this.picker = new Picker({
			container: 'picker-any',
			data: this.data,
			selectedIndex: this.selectedIndex
		});
		// picker select event
		this.picker.on('picker.select', (selectedValue: string[], selectedIndex: number[]) => {
			let value: SendData = {
				action: 'confirm',
				show: false,
				selectedValue,
				selectedIndex
			};
			this.onSelect.emit(value);
		});
		// picker change event
		this.picker.on('picker.change', (wheel: number, index: number) => {
			this.onChange.emit({
				wheel,
				index
			});
			if (wheel === 0) {
				this.selectedIndex[1] = 0;
				this.selectedIndex[2] = 0;
			}
			if (wheel === 1) {
				this.selectedIndex[2] = 0;
			}
			setTimeout(() => {
				this.picker.refresh(this.data, this.selectedIndex);
			}, 0);
		});
	}

	/**
	 * cancel select no trigger event
	 */
	cancel() {
		this.picker.hide(() => {
			let value: SendData = {
				action: 'cancel',
				show: false,
				selectedValue: this.picker.selectedVal,
				selectedIndex: this.picker.selectedIndex
			};
			this.onSelect.emit(value);
		});
	}

	/**
	 * confirm select trigger picker.select event
	 */
	confirm() {
		this.picker.confirm();
	}

}

/* ---------------- Define module and export ---------------- */
@NgModule({
	imports: [ CommonModule ],
	exports: [ BetterPickerComponent ],
	declarations: [ BetterPickerComponent ]
})
export class BetterPickerModule { }
