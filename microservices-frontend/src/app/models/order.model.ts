export interface OrderRequest {
  orderLineItemsDtos: OrderLineItemsDto[];
}

export interface OrderLineItemsDto {
  id: number;
  orderNumber: string;
  skuCode: string;
  price: number;
  quantity: number;
}
