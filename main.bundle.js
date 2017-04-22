webpackJsonp([1,4],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_ng2_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__d3_hierarchical_data_actions__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlareCsvReduxService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FlareCsvReduxService = (function () {
    function FlareCsvReduxService(http, d3Service, store, actions, url) {
        var _this = this;
        this.http = http;
        this.url = url;
        this.d3 = d3Service.getD3();
        this.stratify = this.d3.stratify()
            .id(function (d) { return d.name; })
            .parentId(function (d) { return d.name.substring(0, d.name.lastIndexOf(".")); });
        store.dispatch(actions.loadStarted());
        this.http.get('./assets/' + this.url).map(function (res) {
            var rawData = res['_body'] || '';
            var data = _this.d3.csvParse(rawData);
            store.dispatch(actions.loadSucceeded(_this.stratify(data)
                .sum(function (d) { return d.value; })
                .sort(function (a, b) { return b.value - a.value; })));
            return res;
        }).subscribe(function (res) {
        });
    }
    return FlareCsvReduxService;
}());
FlareCsvReduxService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_d3_ng2_service__["a" /* D3Service */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgRedux"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__d3_hierarchical_data_actions__["a" /* HierarchicalDataActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__d3_hierarchical_data_actions__["a" /* HierarchicalDataActions */]) === "function" && _d || Object, String])
], FlareCsvReduxService);

var _a, _b, _c, _d;
//# sourceMappingURL=flare-csv-redux.service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlareJsonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlareJsonService = (function () {
    function FlareJsonService(http, d3Service, url) {
        this.http = http;
        this.url = url;
        this.d3 = d3Service.getD3();
    }
    FlareJsonService.prototype.getRoot = function () {
        var _this = this;
        return this.http.get('./assets/' + this.url).map(function (res) {
            var rawData = res['_body'] || '';
            var parsedJson = JSON.parse(rawData);
            return _this.d3.hierarchy(parsedJson)
                .sum(function (d) { return d.size; })
                .sort(function (a, b) { return b.value - a.value; });
        });
    };
    return FlareJsonService;
}());
FlareJsonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]) === "function" && _b || Object, String])
], FlareJsonService);

var _a, _b;
//# sourceMappingURL=flare-json.service.js.map

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 326;


/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(359);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3_hierarchical_data_flare_json_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3_hierarchical_data_flare_csv_redux_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3_hierarchical_data_flare_csv_service_provider__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3_hierarchical_data_flare_csv_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__d3_hierarchical_data_flare_json_service_provider__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__d3_hierarchical_data_flare_csv_redux_service_provider__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FLARE_CSV = 'flare.csv';
var FLARE_JSON = 'flare.json';
var AppComponent = (function () {
    function AppComponent(flareCsvService, flareJsonService, flareCsvReduxService) {
        this.flareCsvService = flareCsvService;
        this.flareJsonService = flareJsonService;
        this.flareCsvReduxService = flareCsvReduxService;
        this.csvRoot = flareCsvService.getRoot();
        this.jsonRoot = flareJsonService.getRoot();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(711),
        styles: [__webpack_require__(698)],
        providers: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__d3_hierarchical_data_flare_csv_service_provider__["a" /* flareCsvServiceProvider */])(FLARE_CSV),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__d3_hierarchical_data_flare_json_service_provider__["a" /* flareJsonServiceProvider */])(FLARE_JSON),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__d3_hierarchical_data_flare_csv_redux_service_provider__["a" /* flareCsvReduxServiceProvider */])(FLARE_CSV),
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__d3_hierarchical_data_flare_csv_service__["a" /* FlareCsvService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__d3_hierarchical_data_flare_csv_service__["a" /* FlareCsvService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__d3_hierarchical_data_flare_json_service__["a" /* FlareJsonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__d3_hierarchical_data_flare_json_service__["a" /* FlareJsonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__d3_hierarchical_data_flare_csv_redux_service__["a" /* FlareCsvReduxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__d3_hierarchical_data_flare_csv_redux_service__["a" /* FlareCsvReduxService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__d3_circle_packing_d3_circle_packing_module__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_ng2_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__d3_hierarchical_data_d3_hierarchical_data_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__d3_hierarchical_data_flare_csv_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__d3_hierarchical_data_flare_json_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__d3_hierarchical_data_flare_csv_redux_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__d3_hierarchical_data_d3_hierarchical_data_actions__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_store_module__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_redux_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routes__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_14__angular_redux_router__["a" /* NgReduxRouterModule */],
            __WEBPACK_IMPORTED_MODULE_13__store_store_module__["a" /* StoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__d3_hierarchical_data_d3_hierarchical_data_module__["a" /* D3HierarchicalDataModule */],
            __WEBPACK_IMPORTED_MODULE_5__d3_circle_packing_d3_circle_packing_module__["a" /* D3CirclePackingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6_d3_ng2_service__["a" /* D3Service */],
            __WEBPACK_IMPORTED_MODULE_8__d3_hierarchical_data_flare_csv_service__["a" /* FlareCsvService */],
            __WEBPACK_IMPORTED_MODULE_9__d3_hierarchical_data_flare_json_service__["a" /* FlareJsonService */],
            __WEBPACK_IMPORTED_MODULE_11__d3_hierarchical_data_flare_csv_redux_service__["a" /* FlareCsvReduxService */],
            __WEBPACK_IMPORTED_MODULE_12__d3_hierarchical_data_d3_hierarchical_data_actions__["a" /* HierarchicalDataActions */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3CirclePackingAllInOneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var D3CirclePackingAllInOneComponent = (function () {
    function D3CirclePackingAllInOneComponent(http, element, d3Service) {
        this.http = http;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    D3CirclePackingAllInOneComponent.prototype.ngOnDestroy = function () {
        if (this.d3Svg.empty && !this.d3Svg.empty()) {
            this.d3Svg.selectAll('*').remove();
        }
    };
    D3CirclePackingAllInOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        var d3 = this.d3;
        function hovered(hover) {
            return function (d) {
                d3.selectAll(d.ancestors().map(function (d) { return d.node; })).classed("node--hover", hover);
            };
        }
        if (this.parentNativeElement == null) {
            return;
        }
        var d3ParentElement = d3.select(this.parentNativeElement);
        var d3Svg = this.d3Svg = d3ParentElement.select('svg');
        var svgWidth = +d3Svg.attr('width');
        var svgHeight = +d3Svg.attr('height');
        var format = d3.format(",d");
        var color = d3.scaleSequential(d3.interpolateMagma).domain([-4, 4]);
        var stratify = d3.stratify()
            .id(function (d) { return d.name; })
            .parentId(function (d) { return d.name.substring(0, d.name.lastIndexOf(".")); });
        var pack = d3.pack()
            .size([svgWidth - 2, svgHeight - 2])
            .padding(3);
        var processData = function (root) {
            pack(root);
            var node = d3Svg.select("g")
                .selectAll("g")
                .data(root.descendants())
                .enter().append("g")
                .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
                .attr("class", function (d) { return "node" + (!d.children ? " node--leaf" : d.depth ? "" : " node--root"); })
                .each(function (d) {
                d.node = this;
            })
                .on("mouseover", hovered(true))
                .on("mouseout", hovered(false));
            node.append("circle")
                .attr("id", function (d) {
                return "node-" + d.data.name;
            })
                .attr("r", function (d) { return d.r; })
                .style("fill", function (d) { return color(d.depth); });
            var leaf = node.filter(function (d) { return !d.children; });
            leaf.append("clipPath")
                .attr("id", function (d) { return "clip-" + d.data.name; })
                .append("use")
                .attr("xlink:href", function (d) { return "#node-" + d.data.name + ""; });
            leaf.append("text")
                .attr("clip-path", function (d) { return "url(#clip-" + d.data.name + ")"; })
                .selectAll("tspan")
                .data(function (d) {
                return d.data.name.substring(d.data.name.lastIndexOf(".") + 1).split(/(?=[A-Z][^A-Z])/g);
            })
                .enter().append("tspan")
                .attr("x", 0)
                .attr("y", function (d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
                .text(function (d) { return '' + d; });
            node.append("title")
                .text(function (d) { return d.data.name + "\n" + format(d.value); });
        };
        this.http.get('./assets/' + this.url).map(function (res) {
            var rawData = res['_body'] || '';
            var data = _this.d3.csvParse(rawData);
            return stratify(data)
                .sum(function (d) { return d.value; })
                .sort(function (a, b) { return b.value - a.value; });
        }).subscribe(function (root) { return processData(root); });
    };
    return D3CirclePackingAllInOneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], D3CirclePackingAllInOneComponent.prototype, "url", void 0);
D3CirclePackingAllInOneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'd3-circle-packing-all-in-one',
        template: __webpack_require__(712),
        styles: [__webpack_require__(699)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]) === "function" && _c || Object])
], D3CirclePackingAllInOneComponent);

var _a, _b, _c;
//# sourceMappingURL=d3-circle-packing-all-in-one.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3CirclePackingReduxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var D3CirclePackingReduxComponent = (function () {
    function D3CirclePackingReduxComponent(element, d3Service, store) {
        this.store = store;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    D3CirclePackingReduxComponent.prototype.ngOnDestroy = function () {
        if (this.d3Svg.empty && !this.d3Svg.empty()) {
            this.d3Svg.selectAll('*').remove();
        }
    };
    D3CirclePackingReduxComponent.prototype.ngOnInit = function () {
        this.hierarchicalData$ = this.store.select([this.field]);
        var d3 = this.d3;
        function hovered(hover) {
            return function (d) {
                d3.selectAll(d.ancestors().map(function (d) { return d.node; })).classed("node--hover", hover);
            };
        }
        if (this.parentNativeElement == null) {
            return;
        }
        var d3ParentElement = d3.select(this.parentNativeElement);
        var d3Svg = this.d3Svg = d3ParentElement.select('svg');
        var svgWidth = +d3Svg.attr('width');
        var svgHeight = +d3Svg.attr('height');
        var format = d3.format(",d");
        var color = d3.scaleSequential(d3.interpolateCubehelixDefault).domain([-4, 4]);
        var pack = d3.pack()
            .size([svgWidth - 2, svgHeight - 2])
            .padding(3);
        var processData = function (state) {
            if (state.loading || state.error) {
                return;
            }
            var root = state.item;
            pack(root);
            var node = d3Svg.select("g")
                .selectAll("g")
                .data(root.descendants())
                .enter().append("g")
                .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
                .attr("class", function (d) { return "node" + (!d.children ? " node--leaf" : d.depth ? "" : " node--root"); })
                .each(function (d) {
                d.node = this;
            })
                .on("mouseover", hovered(true))
                .on("mouseout", hovered(false));
            node.append("circle")
                .attr("id", function (d) {
                return "node-" + d.data.name;
            })
                .attr("r", function (d) { return d.r; })
                .style("fill", function (d) { return color(d.depth); });
            var leaf = node.filter(function (d) { return !d.children; });
            leaf.append("clipPath")
                .attr("id", function (d) { return "clip-" + d.data.name; })
                .append("use")
                .attr("xlink:href", function (d) { return "#node-" + d.data.name + ""; });
            leaf.append("text")
                .attr("clip-path", function (d) { return "url(#clip-" + d.data.name + ")"; })
                .selectAll("tspan")
                .data(function (d) {
                return d.data.name.substring(d.data.name.lastIndexOf(".") + 1).split(/(?=[A-Z][^A-Z])/g);
            })
                .enter().append("tspan")
                .attr("x", 0)
                .attr("y", function (d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
                .text(function (d) { return '' + d; });
            node.append("title")
                .text(function (d) { return d.data.name + "\n" + format(d.value); });
        };
        this.hierarchicalData$.subscribe(function (root) { return processData(root); });
    };
    return D3CirclePackingReduxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], D3CirclePackingReduxComponent.prototype, "field", void 0);
D3CirclePackingReduxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'd3-circle-packing-redux',
        template: __webpack_require__(713),
        styles: [__webpack_require__(700)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _c || Object])
], D3CirclePackingReduxComponent);

var _a, _b, _c;
//# sourceMappingURL=d3-circle-packing-redux.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3CirclePackingRendererComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var D3CirclePackingRendererComponent = (function () {
    function D3CirclePackingRendererComponent(element, d3Service) {
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    D3CirclePackingRendererComponent.prototype.ngOnDestroy = function () {
        if (this.d3Svg.empty && !this.d3Svg.empty()) {
            this.d3Svg.selectAll('*').remove();
        }
    };
    D3CirclePackingRendererComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        function hovered(hover) {
            return function (d) {
                d3.selectAll(d.ancestors().map(function (d) { return d.node; })).classed("node--hover", hover);
            };
        }
        if (this.parentNativeElement == null) {
            return;
        }
        var d3ParentElement = d3.select(this.parentNativeElement);
        var d3Svg = this.d3Svg = d3ParentElement.select('svg');
        var svgWidth = +d3Svg.attr('width');
        var svgHeight = +d3Svg.attr('height');
        var format = d3.format(",d");
        var color = d3.scaleSequential(d3.interpolateViridis).domain([-4, 4]);
        var pack = d3.pack()
            .size([svgWidth - 2, svgHeight - 2])
            .padding(3);
        var processData = function (root) {
            pack(root);
            var node = d3Svg.select("g")
                .selectAll("g")
                .data(root.descendants())
                .enter().append("g")
                .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
                .attr("class", function (d) { return "node" + (!d.children ? " node--leaf" : d.depth ? "" : " node--root"); })
                .each(function (d) {
                d.node = this;
            })
                .on("mouseover", hovered(true))
                .on("mouseout", hovered(false));
            node.append("circle")
                .attr("id", function (d) {
                return "node-" + d.data.name;
            })
                .attr("r", function (d) { return d.r; })
                .style("fill", function (d) { return color(d.depth); });
            var leaf = node.filter(function (d) { return !d.children; });
            leaf.append("clipPath")
                .attr("id", function (d) { return "clip-" + d.data.name; })
                .append("use")
                .attr("xlink:href", function (d) { return "#node-" + d.data.name + ""; });
            leaf.append("text")
                .attr("clip-path", function (d) { return "url(#clip-" + d.data.name + ")"; })
                .selectAll("tspan")
                .data(function (d) {
                return d.data.name.substring(d.data.name.lastIndexOf(".") + 1).split(/(?=[A-Z][^A-Z])/g);
            })
                .enter().append("tspan")
                .attr("x", 0)
                .attr("y", function (d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
                .text(function (d) { return '' + d; });
            node.append("title")
                .text(function (d) { return d.data.name + "\n" + format(d.value); });
        };
        this.root.subscribe(function (root) { return processData(root); });
    };
    return D3CirclePackingRendererComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _a || Object)
], D3CirclePackingRendererComponent.prototype, "root", void 0);
D3CirclePackingRendererComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'd3-circle-packing-renderer',
        template: __webpack_require__(714),
        styles: [__webpack_require__(701)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]) === "function" && _c || Object])
], D3CirclePackingRendererComponent);

var _a, _b, _c;
//# sourceMappingURL=d3-circle-packing-renderer.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_d3_circle_packing_all_in_one_d3_circle_packing_all_in_one_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_d3_circle_packing_renderer_d3_circle_packing_renderer_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_d3_circle_packing_redux_d3_circle_packing_redux_component__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3CirclePackingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var D3CirclePackingModule = (function () {
    function D3CirclePackingModule() {
    }
    return D3CirclePackingModule;
}());
D3CirclePackingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_d3_circle_packing_all_in_one_d3_circle_packing_all_in_one_component__["a" /* D3CirclePackingAllInOneComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_d3_circle_packing_renderer_d3_circle_packing_renderer_component__["a" /* D3CirclePackingRendererComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_d3_circle_packing_redux_d3_circle_packing_redux_component__["a" /* D3CirclePackingReduxComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__components_d3_circle_packing_all_in_one_d3_circle_packing_all_in_one_component__["a" /* D3CirclePackingAllInOneComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_d3_circle_packing_renderer_d3_circle_packing_renderer_component__["a" /* D3CirclePackingRendererComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_d3_circle_packing_redux_d3_circle_packing_redux_component__["a" /* D3CirclePackingReduxComponent */],
        ],
    })
], D3CirclePackingModule);

//# sourceMappingURL=d3-circle-packing.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flare_csv_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_ng2_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3HierarchicalDataModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var D3HierarchicalDataModule = (function () {
    function D3HierarchicalDataModule() {
    }
    return D3HierarchicalDataModule;
}());
D3HierarchicalDataModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3_d3_ng2_service__["a" /* D3Service */],
            __WEBPACK_IMPORTED_MODULE_2__flare_csv_service__["a" /* FlareCsvService */]
        ],
    })
], D3HierarchicalDataModule);

//# sourceMappingURL=d3-hierarchical-data.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__d3_hierarchical_data_actions__ = __webpack_require__(82);
/* harmony export (immutable) */ __webpack_exports__["a"] = createHierarchicalDataReducer;

var INITIAL_STATE = {
    item: null,
    loading: false,
    error: null,
};
// A higher-order reducer: returns a reducer
// that responds to actions for hierarchical data.
function createHierarchicalDataReducer() {
    return function hierarchicalDataReducer(state, action) {
        if (state === void 0) { state = INITIAL_STATE; }
        switch (action.type) {
            case __WEBPACK_IMPORTED_MODULE_0__d3_hierarchical_data_actions__["a" /* HierarchicalDataActions */].LOAD_STARTED:
                return {
                    item: null,
                    loading: true,
                    error: null,
                };
            case __WEBPACK_IMPORTED_MODULE_0__d3_hierarchical_data_actions__["a" /* HierarchicalDataActions */].LOAD_SUCCEEDED:
                return {
                    item: action.payload,
                    loading: false,
                    error: null
                };
            case __WEBPACK_IMPORTED_MODULE_0__d3_hierarchical_data_actions__["a" /* HierarchicalDataActions */].LOAD_FAILED:
                return {
                    item: null,
                    loading: false,
                    error: action.error
                };
        }
        return state;
    };
}
//# sourceMappingURL=d3-hierarchical-data.reducer.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flare_csv_redux_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3_hierarchical_data_actions__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flareCsvReduxServiceProvider; });





var flareCsvReduxServiceFactory = function (url) { return function (http, d3Service, store, actions) {
    return new __WEBPACK_IMPORTED_MODULE_2__flare_csv_redux_service__["a" /* FlareCsvReduxService */](http, d3Service, store, actions, url);
}; };
var flareCsvReduxServiceProvider = function (url) {
    return ({
        provide: __WEBPACK_IMPORTED_MODULE_2__flare_csv_redux_service__["a" /* FlareCsvReduxService */],
        useFactory: flareCsvReduxServiceFactory(url),
        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"], __WEBPACK_IMPORTED_MODULE_4__d3_hierarchical_data_actions__["a" /* HierarchicalDataActions */]],
    });
};
//# sourceMappingURL=flare-csv-redux.service.provider.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flare_csv_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ng2_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flareCsvServiceProvider; });



var flareCsvServiceFactory = function (url) { return function (http, d3Service) {
    return new __WEBPACK_IMPORTED_MODULE_0__flare_csv_service__["a" /* FlareCsvService */](http, d3Service, url);
}; };
var flareCsvServiceProvider = function (url) {
    return ({
        provide: __WEBPACK_IMPORTED_MODULE_0__flare_csv_service__["a" /* FlareCsvService */],
        useFactory: flareCsvServiceFactory(url),
        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_d3_ng2_service__["a" /* D3Service */]],
    });
};
//# sourceMappingURL=flare-csv.service.provider.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flare_json_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flareJsonServiceProvider; });



var flareJsonServiceFactory = function (url) { return function (http, d3Service) {
    return new __WEBPACK_IMPORTED_MODULE_2__flare_json_service__["a" /* FlareJsonService */](http, d3Service, url);
}; };
var flareJsonServiceProvider = function (url) {
    return ({
        provide: __WEBPACK_IMPORTED_MODULE_2__flare_json_service__["a" /* FlareJsonService */],
        useFactory: flareJsonServiceFactory(url),
        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]],
    });
};
//# sourceMappingURL=flare-json.service.provider.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_form_dist_source__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_form_dist_source___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_form_dist_source__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3_hierarchical_data_d3_hierarchical_data_reducer__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });




// Define the global store shape by combining our application's
// reducers together into a given structure.
var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_redux_form_dist_source__["composeReducers"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_redux_form_dist_source__["defaultFormReducer"])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    flareData: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__d3_hierarchical_data_d3_hierarchical_data_reducer__["a" /* createHierarchicalDataReducer */])(),
    router: __WEBPACK_IMPORTED_MODULE_0__angular_redux_router__["c" /* routerReducer */],
}));
//# sourceMappingURL=root.reducer.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_form__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_logger__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_reducer__ = __webpack_require__(357);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.



// Redux ecosystem stuff.


var StoreModule = (function () {
    function StoreModule(store, devTools, ngReduxRouter) {
        this.store = store;
        // Tell Redux about our reducers and epics. If the Redux DevTools
        // chrome extension is available in the browser, tell Redux about
        // it too.
        store.configureStore(__WEBPACK_IMPORTED_MODULE_5__root_reducer__["a" /* rootReducer */], {}, [__WEBPACK_IMPORTED_MODULE_4_redux_logger__["createLogger"]()], devTools.isEnabled() ? [devTools.enhancer()] : []);
        // Enable syncing of Angular router state with our Redux store.
        ngReduxRouter.initialize();
        // Enable syncing of Angular form state with our Redux store.
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_redux_form__["provideReduxForms"])(store);
    }
    return StoreModule;
}());
StoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgReduxModule"], __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["a" /* NgReduxRouterModule */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["DevToolsExtension"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["b" /* NgReduxRouter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["b" /* NgReduxRouter */]) === "function" && _c || Object])
], StoreModule);

var _a, _b, _c;
//# sourceMappingURL=store.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, ".widget {\r\n  display: inline-block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "/deep/ text {\r\n  font: 10px sans-serif;\r\n  text-anchor: middle;\r\n}\r\n\r\n/deep/ .node--hover circle {\r\n  stroke: #000;\r\n  stroke-width: 1.2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "/deep/ text {\r\n  font: 10px sans-serif;\r\n  text-anchor: middle;\r\n}\r\n\r\n/deep/ .node--hover circle {\r\n  stroke: #000;\r\n  stroke-width: 1.2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "/deep/ text {\r\n  font: 10px sans-serif;\r\n  text-anchor: middle;\r\n}\r\n\r\n/deep/ .node--hover circle {\r\n  stroke: #000;\r\n  stroke-width: 1.2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<h1>A case study in combining Angular, Redux and D3 using SOLID design principles</h1>\n<p>\n  This Angular page shows four variations on the display of D3's circle packing visualization. The differences in\n  implementation are:\n</p>\n<ol>\n  <li>An all-in-one component which reads csv data, processed it and renders the visualization</li>\n  <li>A data service and a rendering component, using a csv data source</li>\n  <li>A data service and a rendering component, using a json data source</li>\n  <li>A data service and a rendering component with a common Redux data store used for communicating between the two</li>\n</ol>\n<div class=\"widget\">\n  <h2>All in one component</h2>\n  <d3-circle-packing-all-in-one url=\"flare.csv\"></d3-circle-packing-all-in-one>\n</div>\n<div class=\"widget\">\n  <h2>Service & component with CSV data source</h2>\n  <d3-circle-packing-renderer [root]=\"csvRoot\"></d3-circle-packing-renderer>\n</div>\n<div class=\"widget\">\n  <h2>Service & component with JSON data source</h2>\n  <d3-circle-packing-renderer [root]=\"jsonRoot\"></d3-circle-packing-renderer>\n</div>\n<div class=\"widget\">\n  <h2>Redux</h2>\n  <d3-circle-packing-redux field=\"flareData\"></d3-circle-packing-redux>\n</div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<svg width=\"600\" height=\"600\"><g transform=\"translate(1,1)\"></g></svg>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<svg width=\"600\" height=\"600\"><g transform=\"translate(1,1)\"></g></svg>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<svg width=\"600\" height=\"600\"><g transform=\"translate(1,1)\"></g></svg>\n"

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HierarchicalDataActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HierarchicalDataActions = HierarchicalDataActions_1 = (function () {
    function HierarchicalDataActions() {
    }
    HierarchicalDataActions.prototype.loadStarted = function () {
        return {
            type: HierarchicalDataActions_1.LOAD_STARTED,
            meta: {},
        };
    };
    HierarchicalDataActions.prototype.loadSucceeded = function (payload) {
        return {
            type: HierarchicalDataActions_1.LOAD_SUCCEEDED,
            meta: {},
            payload: payload,
        };
    };
    HierarchicalDataActions.prototype.loadFailed = function (error) {
        return {
            type: HierarchicalDataActions_1.LOAD_FAILED,
            meta: {},
            error: error,
        };
    };
    return HierarchicalDataActions;
}());
HierarchicalDataActions.LOAD_STARTED = 'LOAD_STARTED';
HierarchicalDataActions.LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
HierarchicalDataActions.LOAD_FAILED = 'LOAD_FAILED';
HierarchicalDataActions = HierarchicalDataActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], HierarchicalDataActions);

var HierarchicalDataActions_1;
//# sourceMappingURL=d3-hierarchical-data.actions.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_ng2_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlareCsvService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlareCsvService = (function () {
    function FlareCsvService(http, d3Service, url) {
        this.http = http;
        this.url = url;
        this.d3 = d3Service.getD3();
        this.stratify = this.d3.stratify()
            .id(function (d) { return d.name; })
            .parentId(function (d) { return d.name.substring(0, d.name.lastIndexOf(".")); });
    }
    FlareCsvService.prototype.getRoot = function () {
        var _this = this;
        return this.http.get('./assets/' + this.url).map(function (res) {
            var rawData = res['_body'] || '';
            var data = _this.d3.csvParse(rawData);
            return _this.stratify(data)
                .sum(function (d) { return d.value; })
                .sort(function (a, b) { return b.value - a.value; });
        });
    };
    return FlareCsvService;
}());
FlareCsvService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_d3_ng2_service__["a" /* D3Service */]) === "function" && _b || Object, String])
], FlareCsvService);

var _a, _b;
//# sourceMappingURL=flare-csv.service.js.map

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(327);


/***/ })

},[984]);
//# sourceMappingURL=main.bundle.js.map