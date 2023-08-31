package com.example.googleapi.controller;

import com.example.googleapi.dto.GoogleSheetDTO;
import com.example.googleapi.service.GoogleApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DashboardController {
    @Autowired
    private GoogleApiService googleApiService;
    @GetMapping("/check")
    public String Check (){
        return "Check API";
    }

    @GetMapping("/getData")
    public List<Map<Object,Object>> readDataFromSheet() throws GeneralSecurityException, IOException {
        return googleApiService.readDataFromSheet();
    }

    @PostMapping("/createSheet")
    public String createGoogleSheet(@RequestBody GoogleSheetDTO request) throws GeneralSecurityException,IOException{
        return googleApiService.createSheet(request);
    }
}
