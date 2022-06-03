import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;

  constructor(public ref: DynamicDialogRef) {
    this.addProductForm = new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {}

  submit() {
    const data = this.addProductForm.value;
    if (this.addProductForm.valid) {
      this.ref.close(data);
    } else {
      this.ref.close();
    }
  }
}
