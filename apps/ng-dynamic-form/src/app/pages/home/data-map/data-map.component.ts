import {Component, OnInit} from '@angular/core';
import {DataMapService} from "./data-map.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd";
import {DataMapFormComponent} from "./data-map-form/data-map-form.component";
import {DataMap} from "../../../../../../../libs/api-interfaces/src/models/data-source/DataMap.entity";

@Component({
  selector: 'dynamic-form-data-map',
  templateUrl: './data-map.component.html',
  styleUrls: ['./data-map.component.less']
})
export class DataMapComponent implements OnInit {
  options = {
    pageNo: 1,
    pageSize: 10,
    total: 0,
    data: [],
    loading: false
  };

  constructor(
    private dataMapService: DataMapService,
    private fb: FormBuilder,
    private modalService: NzModalService,
  ) {
    this.initFilterForm();
  }

  filterForm: FormGroup;

  initFilterForm() {
    this.filterForm = this.fb.group({
      name: [''],
      type: ['']
    });
  }

  ngOnInit(): void {
    this.getDataMaps();
  }

  getDataMaps() {
    const {pageNo, pageSize} = this.options;
    const {name, type} = this.filterForm.value;
    this.options.loading = true;
    const observable = this.dataMapService.findDataMapList(pageNo, pageSize, type, name);
    observable.subscribe(({data}) => {
      const [res, total] = data;
      this.options.total = total;
      this.options.data = res;
      this.options.loading = false;
    });
  }

  showFormModal() {
    this.modalService.create({
      nzComponentParams: {
        type: 'add'
      },
      nzContent: DataMapFormComponent,
      nzOnOk: ({data, type}) => {
        this.addNewDataMap(data);
      }
    });
  }

  addNewDataMap(dataMap: DataMap) {
    const obserable = this.dataMapService.saveDataMap(dataMap);
    obserable.subscribe((result) => {
      this.options.pageNo = 1;
      this.getDataMaps();
    });
  }

  deleteDataMap(dataMap: DataMap) {
    const observable = this.dataMapService.deleteDataMap(dataMap);
    observable.subscribe((result) => {
      this.options.pageNo = 1;
      this.getDataMaps();
    });
  }

  confirmDelete(data) {
    this.deleteDataMap(data);
  }

}
