package com.esprit.orderservice.service;

import com.esprit.orderservice.dto.InventoryResponse;
import com.esprit.orderservice.dto.OrderLineItemsDto;
import com.esprit.orderservice.dto.OrderRequest;
import com.esprit.orderservice.model.Order;
import com.esprit.orderservice.model.OrderLineItems;
import com.esprit.orderservice.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final WebClient.Builder webClientBuilder;

    @Transactional
    public void placeOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());
        List<OrderLineItems> orderLineItems = orderRequest.getOrderLineItemsDtos()
                .stream().map(this::mapToDto).collect(Collectors.toList());
        order.setOrderLineItems(orderLineItems);
        List<String> skuCodes = orderLineItems.stream().map(o -> o.getSkuCode()).collect(Collectors.toList());
        List<InventoryResponse> inventoryResponses = List.of(Objects.requireNonNull(webClientBuilder.build().get().
                uri("http://inventory-service/api/inventory",
                        uriBuilder -> uriBuilder.queryParam("sku-code", skuCodes).build())
                .retrieve().bodyToMono(InventoryResponse[].class).block()));
        Boolean result = inventoryResponses.size() > 0 && inventoryResponses.stream()
                .allMatch(inventoryResponse -> inventoryResponse.getIsInStock());
        if (result) {
            orderRepository.save(order);
        } else {
            throw new IllegalArgumentException("Product is not in stock, please try again later.");
        }
    }

    private OrderLineItems mapToDto(OrderLineItemsDto orderLineItemsDto) {
        OrderLineItems orderLineItems = new OrderLineItems();
        orderLineItems.setPrice(orderLineItemsDto.getPrice());
        orderLineItems.setQuantity(orderLineItemsDto.getQuantity());
        orderLineItems.setSkuCode(orderLineItemsDto.getSkuCode());
        return orderLineItems;
    }
}
