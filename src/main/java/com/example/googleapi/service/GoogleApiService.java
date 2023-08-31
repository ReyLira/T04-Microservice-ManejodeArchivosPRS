package com.example.googleapi.service;

import com.example.googleapi.dto.GoogleSheetDTO;
import com.example.googleapi.util.GoogleApiUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;
import java.util.Map;
@Service
public class GoogleApiService {
    @Autowired(required = true)
    GoogleApiUtil googleApiUtil;
    public List<Map<Object,Object>> readDataFromSheet() throws GeneralSecurityException, IOException {
        return googleApiUtil.getDataSheet();
    }

    public String createSheet(GoogleSheetDTO request) throws GeneralSecurityException, IOException{
        return googleApiUtil.createGoogleSheet(request);
    }
}
