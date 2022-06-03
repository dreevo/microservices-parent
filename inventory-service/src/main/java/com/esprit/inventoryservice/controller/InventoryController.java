package com.esprit.inventoryservice.controller;

import com.esprit.inventoryservice.dto.InventoryResponse;
import com.esprit.inventoryservice.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@RequiredArgsConstructor
public class InventoryController {

    private final InventoryService inventoryService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<InventoryResponse> isInStock(@RequestParam(name = "sku-code") List<String> skuCode) {
        return inventoryService.isInStock(skuCode);
    }
}
