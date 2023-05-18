# Lưu ý khi chạy project bị lỗi package react-leaflet: *Module parse failed*

- Tại file package.json 
```
"browserslist": {
   "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
},
```
bằng 
```
"browserslist": [
   ">0.2%",
  "not dead",
  "not op_mini all"
],
```

- Sau đó, xóa folder node_modules/.cache
```
rm -r node_modules/.cache
```

- Cài đặt lại các package 
```
npm install 
```

- Chạy project
```
npm start
```

- Tham khảo tại: https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat

# API 
- Cần lấy api_key tại https://openrouteservice.org/, sau đó copy giá trị vào API_KEY tại file constant.js

- API sử dụng để tìm đường đi giữa 2 điểm đã chọn
https://openrouteservice.org/dev/#/api-docs/v2/directions/{profile}/get
