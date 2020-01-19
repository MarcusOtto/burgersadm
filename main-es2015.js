(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n   \n    \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js\"></script>\n<link href=\"https://fonts.googleapis.com/css?family=Saira+Condensed&display=swap\" rel=\"stylesheet\">\n\n <div class=\"headerimg\">\n   <a routerLink=\"/list\" routerLinkActive=\"active\"><div class=\"logoburger\">\n   \n</div></a>\n</div>\n<!--<video autoplay muted loop id=\"myVideo\">\n  <source src=\"coffee.mp4\" type=\"video/mp4\">\n  Your browser does not support HTML5 video.\n<div class=\"logoburger\"></div>\n</video>-->\n \n\n<body ng-app=\"AngularDemo\">\n<div class=\"wrapperlist\">\n<div *ngFor=\"let restauranger of bokningsInfo; let i = index\" class=\"headertext\">\n    \n    \n    <div class=\"row\">\n        <div class=\"column\" style=\"background-color:#000000;\">\n      <h3><a routerLink=\"/list\" routerLinkActive=\"active\"> Startsida </a></h3>\n      \n       \n      </div>\n    <div class=\"column\" style=\"background-color:#000000;\">\n      <h3><a routerLink=\"/detail\" routerLinkActive=\"active\"> Inspektera bokningar </a></h3>\n      \n       \n      </div>\n      <div class=\"column\" style=\"background-color:#000000;\">\n      \n       <h3><a routerLink=\"/schema\" routerLinkActive=\"active\">Veckans Schema</a></h3>\n      \n      \n      </div>\n <div class=\"column\" style=\"background-color:#000000;\">\n      \n       <h3><a routerLink=\"/kontakter\" routerLinkActive=\"active\">Kontakter</a></h3>\n      \n      \n      </div>\n</div>\n\n    </div>\n\n<div class=\"bokningsinfo\">\n<h2>Info Bokade bord </h2>\n<div *ngFor=\"let restauranger of bokningsInfo; let i = index\">\n<div *ngFor=\"let item of restauranger.restaurangDetaljer\"> \n<div *ngFor=\"let booking of item.personBokning\"> \n\n    <p>\n    Namn: {{ booking.fornamn }} {{booking.efternamn}}\n    <br />Telefon: {{booking.telefonnummer}}\n    <br />E-post: {{booking.epost}}\n    </p> \n<div *ngFor=\"let bordinfo of booking.bokningInfo\"> \n    <p>\n    Boknings spec: <br />\n    Bokningsnummer: {{ bordinfo.Bokningsnummer }}\n    <br />Antal: {{bordinfo.Personer}}\n    <br />Datum: {{bordinfo.datum}}\n    <br />Tid: {{bordinfo.Tid}}\n    <!--<a [routerLink]=\"['/detail', restauranger.restaurangNamn]\">Bokade bord {{ item.restaurangNamn }}</a>\n    </p> -->\n    </div>\n    <!--<p>\n    <button (click)=\"logout()\">\n      Logout\n    </button>\n  </p>-->\n    </div>\n    </div>\n    </div>\n    </div>\n    </div>\n    </body>\n<footer>\n   <p>Burgers.com</p>\n    <div class=\"logo\"></div>\n    <p>Utvecklad i samarbete med Högskolan Väst. Stil och design: Marcus Nilsson </p>\n    <p></p>\n    </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kontakter/kontakter.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kontakter/kontakter.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<link href=\"https://fonts.googleapis.com/css?family=Saira+Condensed&display=swap\" rel=\"stylesheet\">\n\n <div class=\"headerimg\">\n   <a routerLink=\"/list\" routerLinkActive=\"active\"><div class=\"logoburger\">\n   \n</div></a>\n</div>\n<!--<video autoplay muted loop id=\"myVideo\">\n  <source src=\"coffee.mp4\" type=\"video/mp4\">\n  Your browser does not support HTML5 video.\n<div class=\"logoburger\"></div>\n</video>-->\n \n\n<body>\n<div class=\"wrapperlist\">\n<div *ngFor=\"let restauranger of bokningsInfo; let i = index\" class=\"headertext\">\n    \n    \n    <div class=\"row\">\n        <div class=\"column\" style=\"background-color:#000000;\">\n      <h3><a routerLink=\"/list\" routerLinkActive=\"active\"> Startsida </a></h3>\n      \n       \n      </div>\n    <div class=\"column\" style=\"background-color:#000000;\">\n      <h3><a routerLink=\"/detail\" routerLinkActive=\"active\"> Inspektera bokningar </a></h3>\n      \n       \n      </div>\n      <div class=\"column\" style=\"background-color:#000000;\">\n      \n       <h3><a routerLink=\"/schema\" routerLinkActive=\"active\">Veckans Schema</a></h3>\n      \n      \n      </div>\n   <div class=\"column\" style=\"background-color:#000000;\">\n      \n       <h3><a routerLink=\"/kontakter\" routerLinkActive=\"active\">Kontakter</a></h3>\n      \n      \n      </div>\n</div>\n\n    </div>\n\n<div class=\"wrapperkontakter\">\n\n<div *ngFor=\"let restauranger of bokningsInfo; let i = index\">\n<div *ngFor=\"let item of restauranger.restaurangDetaljer\"> \n\n    <h1>Kontakter</h1>\n    <div *ngFor=\"let kontakt of item.kontaktanst\">   \n    <div class=\"kontaktcolumn\"> \n    <h4>{{kontakt.knamn}}</h4>\n    Epost: {{kontakt.epost}} /\n    Nummer: {{kontakt.knr}}\n   </div>\n    </div>\n    <h2>Vikarier</h2>\n    <div *ngFor=\"let vkontakt of item.vikarie\"> \n    <div class=\"kontaktvcolumn\"> \n    <h4>{{vkontakt.knamn}}</h4>\n    Epost: {{vkontakt.epost}} /\n    Nummer: {{vkontakt.knr}}\n    \n    </div>\n    </div>\n    <!--<p>\n    <button (click)=\"logout()\">\n      Logout\n    </button>\n  </p>-->\n    \n    \n    </div>\n    </div>\n    </div>\n    </div>\n    </body>\n<footer>\n   <p>Burgers.com</p>\n    <div class=\"logo\"></div>\n    <p>Utvecklad i samarbete med Högskolan Väst. Stil och design: Marcus Nilsson </p>\n    <p></p>\n    </footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src = \"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n\n<link href=\"https://fonts.googleapis.com/css?family=Saira+Condensed&display=swap\" rel=\"stylesheet\">\n<div class=\"headerimg\">\n   <div class=\"logoburger\">\n   \n</div>\n</div>\n\n<body>\n    <div class=\"wrapperlist\">\n<div *ngFor=\"let restauranger of arrRestaurang; let i = index\" class=\"headertext\">\n    \n    \n      <div class=\"row\">\n  <div class=\"column\" style=\"background-color:#000000;\">\n      <h3><a routerLink=\"/list\" routerLinkActive=\"active\"> Startsida </a></h3>\n      \n       \n      </div>\n         <div class=\"column\" style=\"background-color:#000000;\">\n      <h3><a routerLink=\"/detail\" routerLinkActive=\"active\"> Inspektera bokningar </a></h3>\n      \n       \n      </div>\n      <div class=\"column\" style=\"background-color:#000000;\">\n      \n       <h3><a routerLink=\"/schema\" routerLinkActive=\"active\">Veckans Schema</a></h3>\n      \n      \n      </div>\n  <div class=\"column\" style=\"background-color:#000000;\">\n      \n       <h3><a routerLink=\"/kontakter\" routerLinkActive=\"active\">Kontakter</a></h3>\n      \n      \n      </div>\n</div>\n\n    </div>\n    \n <div class=\"info\">\n    <h2>Välkommen till Burgers admin sida</h2>\n     <p>På denna sidan hanterar du bokningar, kollar in veckans schema samt en kontaktlista för fastanställda och vikarier.  </p>\n     <p>Har du frågor? Kontakta din chef eller IT-ansvarig för mer information.</p>\n        </div>\n   <!--ref: https://www.w3schools.com/howto/howto_css_three_columns.asp-->\n  </div>\n    \n    </body>\n\n    <footer>\n   <p>Burgers.com</p>\n    <div class=\"logo\"></div>\n    <p>Utvecklad i samarbete med Högskolan Väst. Stil och design: Marcus Nilsson </p>\n    <p></p>\n    </footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<meta charset=\"utf-8\">\n<head>\n<link href=\"https://fonts.googleapis.com/css?family=Saira+Condensed&display=swap\" rel=\"stylesheet\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n    <body>\n<div class=\"headerimg\">\n   <div class=\"wrapper\">\n<h1 style=\"text-align:center\">Burgers Restaurang</h1>\n<div class=\"login\">\n  <h2 class=\"login-header\">Logga in</h2>\n  <form [formGroup]=\"loginForm\" class=\"login-container\" (ngSubmit)=\"login()\">\n\n    <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.email.errors }\">\n      <input type=\"email\" placeholder=\"Email\" formControlName=\"email\" >\n    </p>\n\n    <div *ngIf=\"isSubmitted && formControls.email.errors\" class=\"help-block\">\n      <div *ngIf=\"formControls.email.errors.required\">Email is required</div>\n    </div>\n\n    <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.password.errors }\">\n      <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" >\n    </p>\n\n    <div *ngIf=\"isSubmitted && formControls.password.errors\" class=\"help-block\">\n      <div *ngIf=\"formControls.password.errors.required\">Password is required</div>\n    </div>\n\n    <p>\n      <input type=\"submit\" value=\"Logga in\">\n    </p>\n  </form>\n</div>\n</div>\n</div>\n\n\n</body>\n<footer>\n   <p>Burgers.com</p>\n    <div class=\"logo\"></div>\n    <p>Utvecklad i samarbete med Högskolan Väst. Stil och design: Marcus Nilsson </p>\n    <p></p>\n    </footer>\n</html>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schema/schema.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schema/schema.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js\"></script>\n<script src = \"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<link href=\"https://fonts.googleapis.com/css?family=Saira+Condensed&display=swap\" rel=\"stylesheet\">\n <div class=\"headerimg\">\n   <a routerLink=\"/list\" routerLinkActive=\"active\"><div class=\"logoburger\">\n   \n</div></a>\n</div>\n\n<body ng-app=\"myApp\">\n    <div class=\"wrapperlist\">\n<div *ngFor=\"let restauranger of bokningsInfo; let i = index\" class=\"headertext\">\n    \n    \n      <div class=\"row\">\n  <div class=\"column\" style=\"background-color:#000000;\">\n      <h3><a routerLink=\"/list\" routerLinkActive=\"active\"> Startsida </a></h3>\n      \n       \n      </div>\n         <div class=\"column\" style=\"background-color:#000000;\">\n      <h3><a routerLink=\"/detail\" routerLinkActive=\"active\"> Inspektera bokningar </a></h3>\n      \n       \n      </div>\n      <div class=\"column\" style=\"background-color:#000000;\">\n      \n       <h3><a routerLink=\"/schema\" routerLinkActive=\"active\" >Veckans Schema</a></h3>\n       \n      </div>\n <div class=\"column\" style=\"background-color:#000000;\">\n      \n       <h3><a routerLink=\"/kontakter\" routerLinkActive=\"active\">Kontakter</a></h3>\n      \n      \n      </div>\n</div>\n\n    </div>\n  \n <h3>Schema</h3>\n<div *ngFor=\"let restauranger of bokningsInfo; let i = index\">\n<div *ngFor=\"let item of restauranger.restaurangDetaljer\"> \n<div *ngFor=\"let dag of item.schema\"> \n<div class=\"week\" *ngFor=\"let anstnr of dag.arbetstagare\"> \n    \n     <div class=\"mon\"> <h2>{{dag.dag1}}</h2> <br/> {{anstnr.n1}} {{dag.pass1}} <br /> {{anstnr.n6}} {{dag.pass2}} </div>\n     <div class =\"tue\"><h2>{{dag.dag2}}</h2> {{anstnr.n2}} {{dag.pass1}}</div>\n     <div class =\"wed\"><h2>{{dag.dag3}}</h2> {{anstnr.n4}} {{dag.pass1}}</div>\n     <div class=\"thu\"> <h2>{{dag.dag4}}</h2> <br/> {{anstnr.n3}} {{dag.pass1}} <br /> {{anstnr.n3}} {{dag.pass2}} </div>\n     <div class=\"fri\"> <h2>{{dag.dag5}}</h2> <br/> {{anstnr.n5}} {{dag.pass1}} <br /> {{anstnr.n3}} {{dag.pass2}} </div>\n     <div class=\"sat\"> <h2>{{dag.dag6}}</h2> <br/> {{anstnr.n5}} {{dag.pass1}} <br /> {{anstnr.n3}} {{dag.pass2}} </div>\n     <div class=\"sun\"> <h2>{{dag.dag7}}</h2> <br/> {{anstnr.n5}} {{dag.pass1}} <br /> {{anstnr.n2}} {{dag.pass2}} </div>\n         \n\n\n    \n    <!--<a [routerLink]=\"['/detail', restauranger.restaurangNamn]\">Bokade bord {{ item.restaurangNamn }}</a>\n    </p> -->\n    </div>\n    <!--<p>\n    <button (click)=\"logout()\">\n      Logout\n    </button>\n  </p>-->\n    </div>\n   <!--ref: https://www.w3schools.com/howto/howto_css_three_columns.asp-->\n  </div>\n        </div>\n    </div>\n    </body>\n<footer>\n   <p>Burgers.com</p>\n    <div class=\"logo\"></div>\n    <p>Utvecklad i samarbete med Högskolan Väst. Stil och design: Marcus Nilsson </p>\n    <p></p>\n    </footer>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _schema_schema_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schema/schema.component */ "./src/app/schema/schema.component.ts");
/* harmony import */ var _kontakter_kontakter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kontakter/kontakter.component */ "./src/app/kontakter/kontakter.component.ts");









const routes = [
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'schema', component: _schema_schema_component__WEBPACK_IMPORTED_MODULE_7__["SchemaComponent"] },
    { path: 'kontakter', component: _kontakter_kontakter_component__WEBPACK_IMPORTED_MODULE_8__["KontakterComponent"] },
    { path: 'detail', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Boka Restaurang';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _schema_schema_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schema/schema.component */ "./src/app/schema/schema.component.ts");
/* harmony import */ var _kontakter_kontakter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kontakter/kontakter.component */ "./src/app/kontakter/kontakter.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
            _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _schema_schema_component__WEBPACK_IMPORTED_MODULE_10__["SchemaComponent"],
            _kontakter_kontakter_component__WEBPACK_IMPORTED_MODULE_11__["KontakterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurang-service.service */ "./src/app/restaurang-service.service.ts");



let AuthGuard = class AuthGuard {
    constructor(restaurangService) {
        this.restaurangService = restaurangService;
    }
    canActivate(next, state) {
        return this.restaurangService.isLoggedIn();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__["RestaurangServiceService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerimg{\r\n  background-color: white; /* Used if the image is unavailable */\r\n  height:600px; /* You must set a specified height */\r\n  width: 100%;\r\n  background-position: center; /* Center the image */\r\n  background-repeat: no-repeat; /* Do not repeat the image */\r\n  background-size: cover; /* Resize the background image to cover the entire container */\r\n}\r\n.headertext {\r\n    text-align:center;\r\n    }\r\n.wrapperlist{\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    background-color: black;\r\n    width: 100%;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n    }\r\n.bokningsinfo{\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    padding:20px;\r\n}\r\nh3{\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n.footerinfo{\r\n    text-align:center;\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 10px\r\n    }\r\n.column {\r\n  \r\n  float: left;\r\n  width: 25%;\r\n  text-align: center;\r\n}\r\n.column1link{\r\n    background-color:white;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\nbody{\r\n   padding-bottom: 950px;\r\n}\r\n.logo{\r\n    height: 50px;\r\n    width:50px;\r\n    background-position: center; /* Center the image */\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 20px;\r\n    \r\n}\r\n.logoburger{\r\n    height: 300px;\r\n    width:300px;\r\n    background-position: center; /* Center the image */\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 45px;\r\n}\r\nfooter{\r\n    background-color:#696969;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    text-align: center;\r\n    color: lightgrey;\r\n    width: 100%;\r\n    height: 250px;\r\n    position: absolute;\r\n   }\r\n#myVideo {\r\n  width: 100%;\r\n  max-height: 100%;\r\n  \r\n  \r\n}\r\nheader{\r\n    height: 500px;\r\n    \r\n    background-color: black;\r\n}\r\n@media screen and (max-width: 700px) {\r\n  .column {\r\n    width: 100%;\r\n  }\r\n    .headerimg{\r\n     height: 300px\r\n    }\r\nbody{\r\n   padding-bottom: 1150px;\r\n}\r\n      .logoburger{\r\n        height: 150px;\r\n        width: 150px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCLEVBQUUscUNBQXFDO0VBQzlELFlBQVksRUFBRSxvQ0FBb0M7RUFDbEQsV0FBVztFQUNYLDJCQUEyQixFQUFFLHFCQUFxQjtFQUNsRCw0QkFBNEIsRUFBRSw0QkFBNEI7RUFDMUQsc0JBQXNCLEVBQUUsOERBQThEO0FBQ3hGO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjtJQUNJLDBDQUEwQztJQUMxQyx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Q7QUFDSjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1g7SUFDQTtBQUVKOztFQUVFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBO0dBQ0cscUJBQXFCO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtHQUNuQjtBQUNIO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjs7O0FBR2xCO0FBRUE7SUFDSSxhQUFhOztJQUViLHVCQUF1QjtBQUMzQjtBQUdBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7SUFDRTtLQUNDO0lBQ0Q7QUFDSjtHQUNHLHNCQUFzQjtBQUN6QjtNQUNNO1FBQ0UsYUFBYTtRQUNiLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJpbWd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgaGVpZ2h0OjYwMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxufVxyXG4uaGVhZGVydGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuLndyYXBwZXJsaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4uYm9rbmluZ3NpbmZve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxufVxyXG5oM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmZvb3RlcmluZm97XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAxMHB4XHJcbiAgICB9XHJcblxyXG4uY29sdW1uIHtcclxuICBcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29sdW1uMWxpbmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuYm9keXtcclxuICAgcGFkZGluZy1ib3R0b206IDk1MHB4O1xyXG59XHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6NTBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIFxyXG59XHJcbi5sb2dvYnVyZ2Vye1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA0NXB4O1xyXG59XHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzY5Njk2OTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmEgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIH1cclxuI215VmlkZW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcbmhlYWRlcntcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuY29sdW1uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAgIC5oZWFkZXJpbWd7XHJcbiAgICAgaGVpZ2h0OiAzMDBweFxyXG4gICAgfVxyXG5ib2R5e1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMTE1MHB4O1xyXG59XHJcbiAgICAgIC5sb2dvYnVyZ2Vye1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _restaurang_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../restaurang-service.service */ "./src/app/restaurang-service.service.ts");




let DetailComponent = class DetailComponent {
    constructor(activatedRoute, restaurangService) {
        this.activatedRoute = activatedRoute;
        this.restaurangService = restaurangService;
    }
    ngOnInit() {
        this.restaurangId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        console.log(this.restaurangId);
        this.restaurangService.getRestaurang().subscribe((data) => {
            console.log(data);
            this.bokningsInfo = data;
        });
    }
};
DetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _restaurang_service_service__WEBPACK_IMPORTED_MODULE_3__["RestaurangServiceService"] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")).default]
    })
], DetailComponent);



/***/ }),

/***/ "./src/app/kontakter/kontakter.component.css":
/*!***************************************************!*\
  !*** ./src/app/kontakter/kontakter.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerimg{\r\n  background-color: white; /* Used if the image is unavailable */\r\n  height:600px; /* You must set a specified height */\r\n  width: 100%;\r\n  background-position: center; /* Center the image */\r\n  background-repeat: no-repeat; /* Do not repeat the image */\r\n  background-size: cover; /* Resize the background image to cover the entire container */\r\n}\r\n.headertext {\r\n    text-align:center;\r\n    }\r\n.wrapperlist{\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    background-color: black;\r\n    width: 100%;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n    }\r\n.wrapperkontakter{\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    width: 100%;\r\n   }\r\n.kontaktcolumn{\r\n    float: left;\r\n    clear:both;\r\n    width: 50%;\r\n    text-align: center;\r\n}\r\nh3{\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n.footerinfo{\r\n    text-align:center;\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 10px\r\n    }\r\n.column {\r\n  \r\n  float: left;\r\n  width: 25%;\r\n  text-align: center;\r\n}\r\n.column1link{\r\n    background-color:white;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\nbody{\r\n   padding-bottom: 950px;\r\n}\r\n.logo{\r\n    height: 50px;\r\n    width:50px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 20px;\r\n    \r\n}\r\n.logoburger{\r\n    height: 300px;\r\n    width:300px;\r\n    background-position: center; \r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 45px;\r\n}\r\nfooter{\r\n    background-color:#696969;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    text-align: center;\r\n    color: lightgrey;\r\n    width: 100%;\r\n    height: 250px;\r\n    position: absolute;\r\n   }\r\n#myVideo {\r\n  width: 100%;\r\n  max-height: 100%;\r\n  \r\n  \r\n}\r\nheader{\r\n    height: 500px;\r\n    \r\n    background-color: black;\r\n}\r\n@media screen and (max-width: 700px) {\r\n  .column {\r\n    width: 100%;\r\n  }\r\n    .kontaktcolumn{\r\n        width: 100%;\r\n    }\r\n    .headerimg{\r\n     height: 300px\r\n    }\r\n    footer{\r\n        margin-top: 350px;\r\n    }\r\nbody{\r\n   padding-bottom: 1150px;\r\n}\r\n      .logoburger{\r\n        height: 150px;\r\n        width: 150px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29udGFrdGVyL2tvbnRha3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCLEVBQUUscUNBQXFDO0VBQzlELFlBQVksRUFBRSxvQ0FBb0M7RUFDbEQsV0FBVztFQUNYLDJCQUEyQixFQUFFLHFCQUFxQjtFQUNsRCw0QkFBNEIsRUFBRSw0QkFBNEI7RUFDMUQsc0JBQXNCLEVBQUUsOERBQThEO0FBQ3hGO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjtJQUNJLDBDQUEwQztJQUMxQyx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Q7QUFDSjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztHQUNaO0FBQ0g7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFHQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0lBQ0E7QUFFSjs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQTtHQUNHLHFCQUFxQjtBQUN4QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7R0FDbkI7QUFDSDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7OztBQUdsQjtBQUVBO0lBQ0ksYUFBYTs7SUFFYix1QkFBdUI7QUFDM0I7QUFHQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0lBQ0U7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtLQUNDO0lBQ0Q7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0dBQ0csc0JBQXNCO0FBQ3pCO01BQ007UUFDRSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAva29udGFrdGVyL2tvbnRha3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmltZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICBoZWlnaHQ6NjAwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG59XHJcbi5oZWFkZXJ0ZXh0IHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4ud3JhcHBlcmxpc3R7XHJcbiAgICBmb250LWZhbWlseTogJ1NhaXJhIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbi53cmFwcGVya29udGFrdGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbi5rb250YWt0Y29sdW1ue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjpib3RoO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbmgze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uZm9vdGVyaW5mb3tcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDEwcHhcclxuICAgIH1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIFxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb2x1bW4xbGlua3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICBwYWRkaW5nLWJvdHRvbTogOTUwcHg7XHJcbn1cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIFxyXG59XHJcbi5sb2dvYnVyZ2Vye1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDQ1cHg7XHJcbn1cclxuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjk2OTY5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgfVxyXG4jbXlWaWRlbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBcclxuICBcclxufVxyXG5cclxuaGVhZGVye1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICAgLmtvbnRha3Rjb2x1bW57XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyaW1ne1xyXG4gICAgIGhlaWdodDogMzAwcHhcclxuICAgIH1cclxuICAgIGZvb3RlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNTBweDtcclxuICAgIH1cclxuYm9keXtcclxuICAgcGFkZGluZy1ib3R0b206IDExNTBweDtcclxufVxyXG4gICAgICAubG9nb2J1cmdlcntcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/kontakter/kontakter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/kontakter/kontakter.component.ts ***!
  \**************************************************/
/*! exports provided: KontakterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontakterComponent", function() { return KontakterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../restaurang-service.service */ "./src/app/restaurang-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let KontakterComponent = class KontakterComponent {
    constructor(activatedRoute, restaurangService) {
        this.activatedRoute = activatedRoute;
        this.restaurangService = restaurangService;
    }
    ngOnInit() {
        this.restaurangId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        console.log(this.restaurangId);
        this.restaurangService.getRestaurang().subscribe((data) => {
            console.log(data);
            this.bokningsInfo = data;
        });
    }
};
KontakterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__["RestaurangServiceService"] }
];
KontakterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kontakter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kontakter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kontakter/kontakter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kontakter.component.css */ "./src/app/kontakter/kontakter.component.css")).default]
    })
], KontakterComponent);



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerimg{\r\n   \r\n  background-color: white; /* Used if the image is unavailable */\r\n  height:600px; /* You must set a specified height */\r\n  width: 100%;\r\n  background-position: center; /* Center the image */\r\n  background-repeat: no-repeat; /* Do not repeat the image */\r\n  background-size: cover; /* Resize the background image to cover the entire container */\r\n}\r\n.headertext {\r\n    text-align:center;\r\n    }\r\n.wrapperlist{\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    background-color: black;\r\n    width: 100%;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n    }\r\n.info{\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    padding:20px;\r\n}\r\nh3{\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n.footerinfo{\r\n    text-align:center;\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 10px\r\n    }\r\n.column {\r\n  \r\n  float: left;\r\n  width: 25%;\r\n  text-align: center;\r\n}\r\n.column1link{\r\n    background-color:white;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\nbody{\r\n   padding-bottom: 350px;\r\n}\r\n.logo{\r\n    height: 50px;\r\n    width:50px;\r\n    background-position: center; /* Center the image */\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 20px;\r\n    \r\n}\r\n.logoburger{\r\n    height: 300px;\r\n    width:300px;\r\n    background-position: center; /* Center the image */\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 45px;\r\n    \r\n    \r\n}\r\nfooter{\r\n    background-color:#696969;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    text-align: center;\r\n    color: lightgrey;\r\n    width: 100%;\r\n    height: 250px;\r\n    position: absolute;\r\n   }\r\n@media screen and (max-width: 700px) {\r\n  .column {\r\n    width: 100%;\r\n  }\r\n    .headerimg{\r\n     height: 300px\r\n    }\r\nbody{\r\n   padding-bottom: 600px;\r\n}\r\n    .logoburger{\r\n        height: 150px;\r\n        width: 150px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsdUJBQXVCLEVBQUUscUNBQXFDO0VBQzlELFlBQVksRUFBRSxvQ0FBb0M7RUFDbEQsV0FBVztFQUNYLDJCQUEyQixFQUFFLHFCQUFxQjtFQUNsRCw0QkFBNEIsRUFBRSw0QkFBNEI7RUFDMUQsc0JBQXNCLEVBQUUsOERBQThEO0FBQ3hGO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjtJQUNJLDBDQUEwQztJQUMxQyx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Q7QUFDSjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1g7SUFDQTtBQUVKOztFQUVFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBO0dBQ0cscUJBQXFCO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7OztBQUdqQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0dBQ25CO0FBRUg7RUFDRTtJQUNFLFdBQVc7RUFDYjtJQUNFO0tBQ0M7SUFDRDtBQUNKO0dBQ0cscUJBQXFCO0FBQ3hCO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyaW1ne1xyXG4gICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICBoZWlnaHQ6NjAwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG59XHJcbi5oZWFkZXJ0ZXh0IHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4ud3JhcHBlcmxpc3R7XHJcbiAgICBmb250LWZhbWlseTogJ1NhaXJhIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbi5pbmZve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxufVxyXG5oM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmZvb3RlcmluZm97XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAxMHB4XHJcbiAgICB9XHJcblxyXG4uY29sdW1uIHtcclxuICBcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29sdW1uMWxpbmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5ib2R5e1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMzUwcHg7XHJcbn1cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuLmxvZ29idXJnZXJ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzY5Njk2OTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmEgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgICAuaGVhZGVyaW1ne1xyXG4gICAgIGhlaWdodDogMzAwcHhcclxuICAgIH1cclxuYm9keXtcclxuICAgcGFkZGluZy1ib3R0b206IDYwMHB4O1xyXG59XHJcbiAgICAubG9nb2J1cmdlcntcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../restaurang-service.service */ "./src/app/restaurang-service.service.ts");



let ListComponent = class ListComponent {
    constructor(restaurangService) {
        this.restaurangService = restaurangService;
    }
    ngOnInit() {
        this.restaurangService.getRestaurang().subscribe((data) => {
            console.log(data);
            this.arrRestaurang = data;
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__["RestaurangServiceService"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\r\n/*ref: https://www.techiediaries.com/angular-tutorial-reactive-forms/*/\r\n.wrapper{\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    }\r\n.login {\r\n  width: 400px;\r\n  margin: 16px auto;\r\n  font-size: 16px;\r\n}\r\nbody{\r\n   padding-bottom: 0px;\r\n}\r\n.login-header,\r\n.login p {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.login-triangle {\r\n  width: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  border: 12px solid transparent;\r\n  border-bottom-color: rgb(15, 66, 107);\r\n}\r\n.login-header {\r\n  background: black;\r\n  padding: 20px;\r\n  font-size: 1.4em;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n}\r\n.login-container {\r\n  background: #ebebeb;\r\n  padding: 12px;\r\n}\r\n.login p {\r\n  padding: 12px;\r\n}\r\n.login input {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  width: 100%;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 16px;\r\n  outline: 0;\r\n  font-family: 'Saira Condensed', sans-serif;\r\n  font-size: 0.95em;\r\n}\r\n.login input[type=\"email\"],\r\n.login input[type=\"password\"] {\r\n  background: #fff;\r\n  border-color: #bbb;\r\n  color: #555;\r\n}\r\n.login input[type=\"email\"]:focus,\r\n.login input[type=\"password\"]:focus {\r\n  border-color: #888;\r\n}\r\n.login input[type=\"submit\"] {\r\n  background: rgb(1, 29, 51);\r\n  border-color: transparent;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.login input[type=\"submit\"]:hover {\r\n  background: #17c;\r\n}\r\n.login input[type=\"submit\"]:focus {\r\n  border-color: #05a;\r\n}\r\n.headerimg{\r\n   \r\n  background-color: white; /* Used if the image is unavailable */\r\n  height:600px; /* You must set a specified height */\r\n  width: 100%;\r\n  background-position: center; /* Center the image */\r\n  background-repeat: no-repeat; /* Do not repeat the image */\r\n  background-size: cover; /* Resize the background image to cover the entire container */\r\n}\r\n.logo{\r\n    height: 50px;\r\n    width:50px;\r\n    background-position: center; /* Center the image */\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 20px;\r\n    \r\n}\r\nh1{\r\n    margin-top: 0;\r\n}\r\nfooter{\r\n    background-color:#696969;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    text-align: center;\r\n    color: lightgrey;\r\n    width: 100%;\r\n    height: 300px;\r\n    position: absolute;\r\n   }\r\n@media screen and (max-width: 700px) { \r\n    .login{\r\n        width: 100%;\r\n       }\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0VBQXNFO0FBRHRFLHNFQUFzRTtBQUV0RTtJQUNJLDBDQUEwQztJQUMxQztBQUNKO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7R0FDRyxtQkFBbUI7QUFDdEI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyxpQkFBaUI7QUFDbkI7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRSx1QkFBdUIsRUFBRSxxQ0FBcUM7RUFDOUQsWUFBWSxFQUFFLG9DQUFvQztFQUNsRCxXQUFXO0VBQ1gsMkJBQTJCLEVBQUUscUJBQXFCO0VBQ2xELDRCQUE0QixFQUFFLDRCQUE0QjtFQUMxRCxzQkFBc0IsRUFBRSw4REFBOEQ7QUFDeEY7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtHQUNuQjtBQUVIO0lBQ0k7UUFDSSxXQUFXO09BQ1o7O0FBRVAiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qcmVmOiBodHRwczovL3d3dy50ZWNoaWVkaWFyaWVzLmNvbS9hbmd1bGFyLXR1dG9yaWFsLXJlYWN0aXZlLWZvcm1zLyovXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCk7XHJcbi53cmFwcGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4ubG9naW4ge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDE2cHggYXV0bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuYm9keXtcclxuICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG4ubG9naW4taGVhZGVyLFxyXG4ubG9naW4gcCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubG9naW4tdHJpYW5nbGUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDE1LCA2NiwgMTA3KTtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLmxvZ2luIHAge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LWZhbWlseTogJ1NhaXJhIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjk1ZW07XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMSwgMjksIDUxKTtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxN2M7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMwNWE7XHJcbn1cclxuXHJcbi5oZWFkZXJpbWd7XHJcbiAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gIGhlaWdodDo2MDBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbn1cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzY5Njk2OTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmEgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7IFxyXG4gICAgLmxvZ2lue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgfVxyXG4gIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../restaurang-service.service */ "./src/app/restaurang-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(restaurangService, router, formBuilder) {
        this.restaurangService = restaurangService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['Burgers.com', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['hello', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    get formControls() { return this.loginForm.controls; }
    login() {
        console.log(this.loginForm.value);
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.restaurangService.login(this.loginForm.value);
        this.router.navigateByUrl('/list');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__["RestaurangServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/restaurang-service.service.ts":
/*!***********************************************!*\
  !*** ./src/app/restaurang-service.service.ts ***!
  \***********************************************/
/*! exports provided: RestaurangServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurangServiceService", function() { return RestaurangServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RestaurangServiceService = class RestaurangServiceService {
    constructor(http) {
        this.http = http;
    }
    getRestaurang() {
        console.log('getRestaurang');
        return this.http.get('/assets/restauranger.json');
    }
    login(userInfo) {
        // info om anvnamn är korrekt
        localStorage.setItem('ACCESS_TOKEN', "access_token");
    }
    isLoggedIn() {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    }
    logout() {
        localStorage.removeItem('ACCESS_TOKEN');
    }
};
RestaurangServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RestaurangServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestaurangServiceService);



/***/ }),

/***/ "./src/app/schema/schema.component.css":
/*!*********************************************!*\
  !*** ./src/app/schema/schema.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerimg{\r\n   \r\n  background-color: white; /* Used if the image is unavailable */\r\n  height:600px; /* You must set a specified height */\r\n  width: 100%;\r\n  background-position: center; /* Center the image */\r\n  background-repeat: no-repeat; /* Do not repeat the image */\r\n  background-size: cover; /* Resize the background image to cover the entire container */\r\n}\r\n.headertext {\r\n    text-align:center;\r\n    }\r\n.wrapperlist{\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    background-color: black;\r\n    width: 100%;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n    }\r\n.info{\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    padding:20px;\r\n}\r\nh3{\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n.footerinfo{\r\n    text-align:center;\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 10px\r\n    }\r\n.column {\r\n  \r\n  float: left;\r\n  width: 25%;\r\n  text-align: center;\r\n}\r\n.column1link{\r\n    background-color:white;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.week{\r\n    text-align: center;\r\n    padding: 30px;\r\n}\r\nbody{\r\n   padding-bottom: 1200px;\r\n}\r\n.logo{\r\n    height: 50px;\r\n    width:50px;\r\n    background-position: center; /* Center the image */\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 20px;\r\n    \r\n}\r\n/*ref: https://hatchful.shopify.com/*/\r\n.logoburger{\r\n    height: 300px;\r\n    width:300px;\r\n    background-position: center; /* Center the image */\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 45px;\r\n    \r\n    \r\n}\r\nfooter{\r\n    background-color:#696969;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    text-align: center;\r\n    color: lightgrey;\r\n    width: 100%;\r\n    height: 250px;\r\n    position: absolute;\r\n   }\r\n@media screen and (max-width: 700px) {\r\n  .column {\r\n    width: 100%;\r\n  }\r\n    .headerimg{\r\n     height: 300px\r\n    }\r\n    body{\r\n   padding-bottom: 1400px;\r\n}\r\n      .logoburger{\r\n        height: 150px;\r\n        width: 150px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1hL3NjaGVtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHVCQUF1QixFQUFFLHFDQUFxQztFQUM5RCxZQUFZLEVBQUUsb0NBQW9DO0VBQ2xELFdBQVc7RUFDWCwyQkFBMkIsRUFBRSxxQkFBcUI7RUFDbEQsNEJBQTRCLEVBQUUsNEJBQTRCO0VBQzFELHNCQUFzQixFQUFFLDhEQUE4RDtBQUN4RjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7SUFDSSwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkO0FBQ0o7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0lBQ0E7QUFFSjs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7R0FDRyxzQkFBc0I7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTs7QUFFakI7QUFDQSxxQ0FBcUM7QUFDckM7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7OztBQUdqQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0dBQ25CO0FBQ0g7RUFDRTtJQUNFLFdBQVc7RUFDYjtJQUNFO0tBQ0M7SUFDRDtJQUNBO0dBQ0Qsc0JBQXNCO0FBQ3pCO01BQ007UUFDRSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2NoZW1hL3NjaGVtYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmltZ3tcclxuICAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgaGVpZ2h0OjYwMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxufVxyXG4uaGVhZGVydGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuLndyYXBwZXJsaXN0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4uaW5mb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5mb290ZXJpbmZve1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMTBweFxyXG4gICAgfVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW4xbGlua3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ud2Vla3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxMjAwcHg7XHJcbn1cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuLypyZWY6IGh0dHBzOi8vaGF0Y2hmdWwuc2hvcGlmeS5jb20vKi9cclxuLmxvZ29idXJnZXJ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzY5Njk2OTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmEgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuY29sdW1uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAgIC5oZWFkZXJpbWd7XHJcbiAgICAgaGVpZ2h0OiAzMDBweFxyXG4gICAgfVxyXG4gICAgYm9keXtcclxuICAgcGFkZGluZy1ib3R0b206IDE0MDBweDtcclxufVxyXG4gICAgICAubG9nb2J1cmdlcntcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/schema/schema.component.ts":
/*!********************************************!*\
  !*** ./src/app/schema/schema.component.ts ***!
  \********************************************/
/*! exports provided: SchemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaComponent", function() { return SchemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../restaurang-service.service */ "./src/app/restaurang-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SchemaComponent = class SchemaComponent {
    constructor(activatedRoute, restaurangService) {
        this.activatedRoute = activatedRoute;
        this.restaurangService = restaurangService;
    }
    ngOnInit() {
        this.restaurangId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        console.log(this.restaurangId);
        this.restaurangService.getRestaurang().subscribe((data) => {
            console.log(data);
            this.bokningsInfo = data;
        });
    }
};
SchemaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _restaurang_service_service__WEBPACK_IMPORTED_MODULE_2__["RestaurangServiceService"] }
];
SchemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schema',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schema.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schema/schema.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schema.component.css */ "./src/app/schema/schema.component.css")).default]
    })
], SchemaComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marcu\AngularDemo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map