(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"mat-typography\">\n  <mat-sidenav #sidenav>\n\n    <mat-toolbar color=\"accent\">\n\n      <img src=\"assets/images/logo.png\" class=\"logo\" alt=\"{{title}}\" />\n\n    </mat-toolbar>\n\n    <mat-nav-list>\n      <mat-list-item>\n        <mat-icon mat-list-icon>folder</mat-icon>\n        <a matLine>Dashboard</a>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon mat-list-icon>folder</mat-icon>\n        <a matLine>Logout</a>\n      </mat-list-item>\n    </mat-nav-list>\n\n  </mat-sidenav>\n\n  <mat-toolbar color=\"primary\">\n    <span>\n      <button mat-icon-button (click)=\"sidenav.open()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n\n    </span>\n    <span>{{title}}</span>\n\n  </mat-toolbar>\n\n  <div class=\"content\">\n\n    <mat-tab-group>\n      <mat-tab label=\"Background Sync\">\n\n        <app-post-tweet></app-post-tweet>\n\n      </mat-tab>\n      <mat-tab label=\"Push Notifications\">\n\n        <app-control-push></app-control-push>\n\n      </mat-tab>\n    </mat-tab-group>\n\n    <app-tweet-feeds></app-tweet-feeds>\n\n  </div>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _window_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-ref */ "./src/app/window-ref.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(snackBar, winRef) {
        this.snackBar = snackBar;
        this.winRef = winRef;
        this.title = 'PWAtter';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscribeToUpdates();
    };
    AppComponent.prototype.subscribeToUpdates = function () {
        var _this = this;
        var updateChannel = new BroadcastChannel('pwatter-channel');
        updateChannel.addEventListener('message', function (event) {
            console.log("[App] Cache updated: " + event.data.payload.updatedUrl);
            var snackBarRef = _this.snackBar.open('Newer version of the app is available', 'Refresh');
            snackBarRef.onAction().subscribe(function () {
                _this.winRef.nativeWindow.location.reload();
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _window_ref__WEBPACK_IMPORTED_MODULE_2__["WindowRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initConfiguration, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initConfiguration", function() { return initConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _push_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./push.service */ "./src/app/push.service.ts");
/* harmony import */ var _tweet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tweet.service */ "./src/app/tweet.service.ts");
/* harmony import */ var _tweet_list_tweet_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tweet-list/tweet-list.component */ "./src/app/tweet-list/tweet-list.component.ts");
/* harmony import */ var _tweet_feeds_tweet_feeds_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tweet-feeds/tweet-feeds.component */ "./src/app/tweet-feeds/tweet-feeds.component.ts");
/* harmony import */ var _post_tweet_post_tweet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post-tweet/post-tweet.component */ "./src/app/post-tweet/post-tweet.component.ts");
/* harmony import */ var _control_push_control_push_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./control-push/control-push.component */ "./src/app/control-push/control-push.component.ts");
/* harmony import */ var _window_ref__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./window-ref */ "./src/app/window-ref.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function initConfiguration(configService) {
    return function () { return configService.load(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _tweet_list_tweet_list_component__WEBPACK_IMPORTED_MODULE_11__["TweetListComponent"],
                _control_push_control_push_component__WEBPACK_IMPORTED_MODULE_14__["ControlPushComponent"],
                _tweet_feeds_tweet_feeds_component__WEBPACK_IMPORTED_MODULE_12__["TweetFeedsComponent"],
                _post_tweet_post_tweet_component__WEBPACK_IMPORTED_MODULE_13__["PostTweetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            providers: [
                _config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: initConfiguration,
                    deps: [_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]],
                    multi: true
                },
                _tweet_service__WEBPACK_IMPORTED_MODULE_10__["TweetService"],
                _push_service__WEBPACK_IMPORTED_MODULE_9__["PushService"],
                _window_ref__WEBPACK_IMPORTED_MODULE_15__["WindowRef"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfigService = /** @class */ (function () {
    function ConfigService(httpClient) {
        this.httpClient = httpClient;
        this.configUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? './assets/config/config.prod.json' : './assets/config/config.dev.json';
    }
    ConfigService.prototype.load = function () {
        var _this = this;
        var promise = new Promise(function (resolve) {
            _this.callApi(_this.configUrl)
                .subscribe(function (config) {
                _this._config = config;
                resolve(true);
            });
        });
        return promise;
    };
    ConfigService.prototype.getConfig = function (key) {
        return this._config[key];
    };
    ConfigService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = {};
            try {
                body = error.json();
            }
            catch (e) {
            }
            var err = body['error'] || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    ConfigService.prototype.callApi = function (url) {
        return this.httpClient
            .get(url)
            .catch(this.handleError);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/control-push/control-push.component.css":
/*!*********************************************************!*\
  !*** ./src/app/control-push/control-push.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/control-push/control-push.component.html":
/*!**********************************************************!*\
  !*** ./src/app/control-push/control-push.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"subscribeToPush()\">\n      <mat-icon>notifications_active</mat-icon>Subscribe for push</button>\n    <button mat-raised-button (click)=\"unsubscribeFromPush()\">\n      <mat-icon>notifications_off</mat-icon>Unsubscribe</button>\n  </mat-card-actions>\n\n</mat-card>\n\n<app-tweet-list [tweets]=\"tweets\"></app-tweet-list>\n"

/***/ }),

/***/ "./src/app/control-push/control-push.component.ts":
/*!********************************************************!*\
  !*** ./src/app/control-push/control-push.component.ts ***!
  \********************************************************/
/*! exports provided: ControlPushComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPushComponent", function() { return ControlPushComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _push_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../push.service */ "./src/app/push.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControlPushComponent = /** @class */ (function () {
    function ControlPushComponent(pushService, snackBar, configService) {
        this.pushService = pushService;
        this.snackBar = snackBar;
        this.configService = configService;
        this.snackBarDuration = 2000;
        this.swScope = './';
        this.tweets = [];
    }
    ControlPushComponent.prototype.ngOnInit = function () {
        this.VAPID_PUBLIC_KEY = this.configService.getConfig('VAPID_PUBLIC_KEY');
    };
    ControlPushComponent.prototype.subscribeToPush = function () {
        var _this = this;
        var convertedVapidKey = this.pushService.urlBase64ToUint8Array(this.VAPID_PUBLIC_KEY);
        navigator['serviceWorker']
            .getRegistration(this.swScope)
            .then(function (registration) {
            registration.pushManager
                .subscribe({ userVisibleOnly: true, applicationServerKey: convertedVapidKey })
                .then(function (pushSubscription) {
                _this.pushService.addSubscriber(pushSubscription)
                    .subscribe(function (res) {
                    console.log('[App] Add subscriber request answer', res);
                    var snackBarRef = _this.snackBar.open('Now you are subscribed', null, {
                        duration: _this.snackBarDuration
                    });
                }, function (err) {
                    console.error('[App] Add subscriber request failed', err);
                });
            });
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    ControlPushComponent.prototype.unsubscribeFromPush = function () {
        var _this = this;
        navigator['serviceWorker']
            .getRegistration(this.swScope)
            .then(function (registration) {
            registration.pushManager
                .getSubscription()
                .then(function (pushSubscription) {
                _this.pushService.deleteSubscriber(pushSubscription)
                    .subscribe(function (res) {
                    console.log('[App] Delete subscriber request answer', res);
                    var snackBarRef = _this.snackBar.open('Now you are unsubscribed', null, {
                        duration: _this.snackBarDuration
                    });
                    // Unsubscribe current client (browser)
                    pushSubscription.unsubscribe()
                        .then(function (success) {
                        console.log('[App] Unsubscription successful', success);
                    })
                        .catch(function (err) {
                        console.log('[App] Unsubscription failed', err);
                    });
                }, function (err) {
                    console.error('[App] Delete subscription request failed', err);
                });
            });
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    ControlPushComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-push',
            template: __webpack_require__(/*! ./control-push.component.html */ "./src/app/control-push/control-push.component.html"),
            styles: [__webpack_require__(/*! ./control-push.component.css */ "./src/app/control-push/control-push.component.css")]
        }),
        __metadata("design:paramtypes", [_push_service__WEBPACK_IMPORTED_MODULE_3__["PushService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], ControlPushComponent);
    return ControlPushComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/post-tweet/post-tweet.component.css":
/*!*****************************************************!*\
  !*** ./src/app/post-tweet/post-tweet.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-tweet/post-tweet.component.html":
/*!******************************************************!*\
  !*** ./src/app/post-tweet/post-tweet.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-icon mat-card-avatar>sync</mat-icon>\n    <mat-card-title>Background Sync</mat-card-title>\n    <mat-card-subtitle>Defer actions until the user has stable connectivity</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n\n    <form #messageForm=\"ngForm\" novalidate (submit)=\"messageFormSubmit(messageForm)\">\n\n      <mat-input-container style=\"width: 300px;\">\n        <input matInput placeholder=\"Message\" value=\"\" type=\"text\" required ngModel #messageRef name=\"message\">\n        <div *ngIf=\"messageRef.errors?.required && messageRef.touched\" class=\"error\">\n          Message is required\n        </div>\n      </mat-input-container>\n\n      <button mat-raised-button color=\"accent\" type=\"submit\"><mat-icon>message</mat-icon>Post!</button>\n      \n    </form>\n\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/post-tweet/post-tweet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/post-tweet/post-tweet.component.ts ***!
  \****************************************************/
/*! exports provided: PostTweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTweetComponent", function() { return PostTweetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _tweet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../tweet.service */ "./src/app/tweet.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostTweetComponent = /** @class */ (function () {
    function PostTweetComponent(tweetService, snackBar) {
        this.tweetService = tweetService;
        this.snackBar = snackBar;
        this.snackBarDuration = 2000;
    }
    PostTweetComponent.prototype.ngOnInit = function () {
    };
    PostTweetComponent.prototype.messageFormSubmit = function (messageForm) {
        var _this = this;
        if (messageForm.valid) {
            this.subscription = this.tweetService.postTweet(messageForm.value.message).subscribe(function (res) {
                console.log('[App] Tweet was posted', res);
                var snackBarRef = _this.snackBar.open('Tweet was posted', null, {
                    duration: _this.snackBarDuration
                });
            }, function (err) {
                var snackBarRef = _this.snackBar.open('Tweet will be posted after you go online', null, {
                    duration: _this.snackBarDuration
                });
            });
            messageForm.reset();
        }
    };
    PostTweetComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PostTweetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-tweet',
            template: __webpack_require__(/*! ./post-tweet.component.html */ "./src/app/post-tweet/post-tweet.component.html"),
            styles: [__webpack_require__(/*! ./post-tweet.component.css */ "./src/app/post-tweet/post-tweet.component.css")]
        }),
        __metadata("design:paramtypes", [_tweet_service__WEBPACK_IMPORTED_MODULE_1__["TweetService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], PostTweetComponent);
    return PostTweetComponent;
}());



/***/ }),

/***/ "./src/app/push.service.ts":
/*!*********************************!*\
  !*** ./src/app/push.service.ts ***!
  \*********************************/
/*! exports provided: PushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushService", function() { return PushService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PushService = /** @class */ (function () {
    function PushService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.API_URL = this.configService.getConfig('API_URL');
    }
    PushService.prototype.urlBase64ToUint8Array = function (base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);
        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    };
    PushService.prototype.addSubscriber = function (subscription) {
        var url = this.API_URL + "/webpush";
        console.log('[Push Service] Adding subscriber');
        var body = {
            action: 'subscribe',
            subscription: subscription
        };
        return this.http
            .post(url, body)
            .catch(this.handleError);
    };
    PushService.prototype.deleteSubscriber = function (subscription) {
        var url = this.API_URL + "/webpush";
        console.log('[Push Service] Deleting subscriber');
        var body = {
            action: 'unsubscribe',
            subscription: subscription
        };
        return this.http
            .post(url, body)
            .catch(this.handleError);
    };
    PushService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            errMsg = "" + (error.statusText || 'Network error');
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    PushService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], PushService);
    return PushService;
}());



/***/ }),

/***/ "./src/app/tweet-feeds/tweet-feeds.component.css":
/*!*******************************************************!*\
  !*** ./src/app/tweet-feeds/tweet-feeds.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tweet-feeds/tweet-feeds.component.html":
/*!********************************************************!*\
  !*** ./src/app/tweet-feeds/tweet-feeds.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-icon mat-card-avatar>grade</mat-icon>\n    <mat-card-title>Tweets</mat-card-title>\n    <mat-card-subtitle>Choose between your timeline or favorites</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions>\n    <button mat-button color=\"accent\" (click)=\"loadTimeLine()\"><mat-icon>list</mat-icon>Load my timeline</button>\n    <button mat-button color=\"accent\" (click)=\"loadFavorites()\"><mat-icon>favorite</mat-icon>Load my favorites</button>\n  </mat-card-actions>\n  <mat-card-content>\n\n    <div *ngIf=\"tweets$ | async; else loading; let tweets\">\n\n      <app-tweet-list [tweets]=\"tweets\"></app-tweet-list>\n\n    </div>\n\n    <ng-template #loading>\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"isInteractionStarted\"></mat-progress-bar>\n    </ng-template>\n\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/tweet-feeds/tweet-feeds.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tweet-feeds/tweet-feeds.component.ts ***!
  \******************************************************/
/*! exports provided: TweetFeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetFeedsComponent", function() { return TweetFeedsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tweet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../tweet.service */ "./src/app/tweet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TweetFeedsComponent = /** @class */ (function () {
    function TweetFeedsComponent(tweetService, snackBar) {
        this.tweetService = tweetService;
        this.snackBar = snackBar;
        this.snackBarDuration = 2000;
        this.isInteractionStarted = false;
    }
    TweetFeedsComponent.prototype.ngOnInit = function () {
    };
    TweetFeedsComponent.prototype.loadTimeLine = function () {
        var _this = this;
        this.isInteractionStarted = true;
        this.tweets$ = this.tweetService
            .getTimelineTweets()
            .catch(function (err) {
            var snackBarRef = _this.snackBar.open(err, null, {
                duration: _this.snackBarDuration
            });
        });
    };
    TweetFeedsComponent.prototype.loadFavorites = function () {
        var _this = this;
        this.isInteractionStarted = true;
        this.tweets$ = this.tweetService
            .getFavoriteTweets()
            .catch(function (err) {
            var snackBarRef = _this.snackBar.open(err, null, {
                duration: _this.snackBarDuration
            });
        });
    };
    TweetFeedsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tweet-feeds',
            template: __webpack_require__(/*! ./tweet-feeds.component.html */ "./src/app/tweet-feeds/tweet-feeds.component.html"),
            styles: [__webpack_require__(/*! ./tweet-feeds.component.css */ "./src/app/tweet-feeds/tweet-feeds.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_tweet_service__WEBPACK_IMPORTED_MODULE_2__["TweetService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], TweetFeedsComponent);
    return TweetFeedsComponent;
}());



/***/ }),

/***/ "./src/app/tweet-list/tweet-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tweet-list/tweet-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tweet-list/tweet-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/tweet-list/tweet-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list *ngIf=\"tweets\">\n  <a mat-list-item *ngFor=\"let tweet of tweets\" href=\"{{ 'https://twitter.com/statuses/' + tweet.id_str }}\">\n    <h3 matLine>{{tweet.user.name}}</h3>\n    <p matLine>\n      <span>{{tweet.text}}</span>\n    </p>\n    <p matLine>\n      <small><mat-icon>favorite</mat-icon> {{tweet.favorite_count || 0}} &nbsp; <mat-icon>autorenew</mat-icon> {{tweet.retweet_count || 0}}</small>\n    </p>\n  </a>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/tweet-list/tweet-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tweet-list/tweet-list.component.ts ***!
  \****************************************************/
/*! exports provided: TweetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetListComponent", function() { return TweetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TweetListComponent = /** @class */ (function () {
    function TweetListComponent() {
    }
    TweetListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TweetListComponent.prototype, "tweets", void 0);
    TweetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tweet-list',
            template: __webpack_require__(/*! ./tweet-list.component.html */ "./src/app/tweet-list/tweet-list.component.html"),
            styles: [__webpack_require__(/*! ./tweet-list.component.css */ "./src/app/tweet-list/tweet-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TweetListComponent);
    return TweetListComponent;
}());



/***/ }),

/***/ "./src/app/tweet.service.ts":
/*!**********************************!*\
  !*** ./src/app/tweet.service.ts ***!
  \**********************************/
/*! exports provided: TweetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetService", function() { return TweetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TweetService = /** @class */ (function () {
    function TweetService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.API_URL = this.configService.getConfig('API_URL');
    }
    TweetService.prototype.getTimelineTweets = function () {
        var url = this.API_URL + "/timeline";
        console.log('[Tweet Service] Requesting timeline');
        return this.http
            .get(url)
            .catch(this.handleError);
    };
    TweetService.prototype.getFavoriteTweets = function () {
        var url = this.API_URL + "/favorites";
        console.log('[Tweet Service] Requesting favorites');
        return this.http
            .get(url)
            .catch(this.handleError);
    };
    TweetService.prototype.postTweet = function (message) {
        var url = this.API_URL + "/post-tweet";
        console.log('[Tweet Service] Posting tweet');
        return this.http
            .post(url, { message: message })
            .catch(this.handleError);
    };
    TweetService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            errMsg = "" + (error.statusText || 'Network error');
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    TweetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], TweetService);
    return TweetService;
}());



/***/ }),

/***/ "./src/app/window-ref.ts":
/*!*******************************!*\
  !*** ./src/app/window-ref.ts ***!
  \*******************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the native window obj
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function () {
    //registerServiceWorker('sw')
    //This is not Angular Service Worker workshop, this is why we register SW in index.html
});
function registerServiceWorker(swName) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register("/" + swName + ".js")
            .then(function (reg) {
            console.log('[App] Successful service worker registration', reg);
        })
            .catch(function (err) {
            return console.error('[App] Service worker registration failed', err);
        });
    }
    else {
        console.error('[App] Service Worker API is not supported in current browser');
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emerson/Documents/workspace/pocs/pwatter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map