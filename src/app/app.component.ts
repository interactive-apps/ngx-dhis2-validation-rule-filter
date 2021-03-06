import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-dhis2-validation-rule-filter-library';

  selectedValidationRuleGroup: any;
  action: any;
  dataElements: Array<string>;
  preSelectedVRGs: Array<{id: string, name: string}>;

  editorOptions: JsonEditorOptions;
  initialConfiguration;
  data: any;
  @ViewChild(JsonEditorComponent, { static: false }) editor: JsonEditorComponent;

  ngOnInit() {
    this.dataElements = [
      'NQUI9v85csU',
      'SQ7kqkZkEwV',
      'Lnf095vgahq',
      'Lnf095vgahq',
      'Lnf095vgahq',
    ];

    this.preSelectedVRGs = [
      {
        id: 'Lnf095vgahq',
        name: 'PRE Selected VRGs'
      }
    ];

    this.selectedValidationRuleGroup = {
      items: [],
      periodType: [],
      dimension: {},
      changed: false
    };
  }

  constructor() { }

  onUpdateValidationRule = (selectedValidationRuleGroup, action?) => {
    this.selectedValidationRuleGroup = selectedValidationRuleGroup;
    this.action = action;
  }

  getContent = (data) => {
    this.dataElements = [data];
  }
}
