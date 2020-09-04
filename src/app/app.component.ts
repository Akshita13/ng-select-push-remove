import { Component, NgModule, ViewChild } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgSelectModule, NgOption } from "@ng-select/ng-select";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  NgForm
} from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public high = true;
  conditions = [
    { id: 1, name: "if" },
    { id: 2, name: "end" },
    { id: 3, name: "delete cookies" },
    { id: 4, name: "delete" },
    { id: 5, name: "aaaaa" }
  ];

  addForm;
  storedIndex = [];
  array = [];
  startIndex: number;
  endIndex: number;
  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      rows: this.fb.array([])
    });
    this.initGroup();
  }
  initGroup() {
    let rows = this.addForm.get("rows") as FormArray;
    rows.push(
      this.fb.group({
        condition: [""]
      })
    );
  }

  onDeleteRow(i) {
    let rows = this.addForm.get("rows") as FormArray;
    rows.removeAt(i);
  }

  applyClass(i) {
    console.log(i);
    console.log(this.storedIndex, "this.storedIndex------");

    if (this.storedIndex.length==0) {
      return this.storedIndex.indexOf(i) == -1;
    } else {
      return;
    }
  }

  onSelectValue(value, i) {
    console.log(value, "value", i);

    if (value.name === "if") {
      this.storedIndex.push({ i: i, name: value.name });
    }
    console.log(this.storedIndex, "this.storedIndex");
  }
}
