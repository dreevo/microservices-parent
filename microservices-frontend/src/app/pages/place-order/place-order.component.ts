import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-place-order",
  templateUrl: "./place-order.component.html",
  styleUrls: ["./place-order.component.scss"],
})
export class PlaceOrderComponent implements OnInit {
  placeOrderForm: FormGroup;
  orderLineItemFormGroup = new FormGroup({
    orderNumber: new FormControl("", Validators.required),
    skuCode: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    quantity: new FormControl("", Validators.required),
  });
  constructor(private orderService: OrderService) {
    this.placeOrderForm = new FormGroup({
      orderLineItemsDto: new FormArray([]),
    });
  }

  get orderLineItemsDto() {
    return this.placeOrderForm.controls["orderLineItemsDto"] as FormArray;
  }

  ngOnInit(): void {
    this.addItem();
  }

  removeItem(index: number) {
    this.orderLineItemsDto.removeAt(index);
  }

  addItem() {
    this.orderLineItemsDto.push(this.orderLineItemFormGroup);
  }

  submit() {
    if (this.placeOrderForm.valid) {
      this.orderService.placeOrder(this.placeOrderForm.value).subscribe();
    }
  }
}
