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
 indexArray=[]
 otherIndex=[]
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
    if (value.name === "if" || value.name==="end") {
      this.indexArray.push({ i: i, name: value.name });
      this.indexArray.forEach((item)=>{
        if(item.i===i){
          this.storedIndex.push(i)
        }
      })
    }else{
      this.otherIndex=this.indexArray.filter((item)=>{return item.i!==i})
      this.storedIndex=[]
      this.indexArray=this.otherIndex
      console.log(this.indexArray,"indexarray")
      console.log(this.otherIndex,"abc")
      this.otherIndex.forEach((item)=>{
          this.storedIndex.push(item.i)
      })
    }
    // console.log(this.storedIndex, "this.storedIndex");
  }
}
