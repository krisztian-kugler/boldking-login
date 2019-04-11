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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/api.ts":
/*!****************************!*\
  !*** ./src/app/api/api.ts ***!
  \****************************/
/*! exports provided: validate, submit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
function validate(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.8) {
                if (value && value.length > 8 && /^(a|e|i|o|u)/.test(value)) {
                    resolve();
                }
                else {
                    reject(new Error(getMessage(value)));
                }
            }
            else {
                reject(new Error("Network error"));
            }
        }, randomRange(100, 1000));
    });
}
function submit(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.5) {
                resolve(data);
                return;
            }
            reject(new Error("BANG! Try again later"));
        }, 2000);
    });
}
// --- utilities ---------------------------------------------------------------
function randomRange(x, y) {
    return Math.floor(Math.random() * (y - x) + x);
}
function getMessage(value) {
    if (!value) {
        return "User name can't be empty";
    }
    if (value.length <= 8) {
        return "User name must be longer than 8 letters";
    }
    return "The user name \"" + value + "\" is already taken. Please choose another one";
}


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n  <ng-template *ngIf=\"launched; then app; else login\"></ng-template>\n\n  <ng-template #login>\n    <i class=\"fas fa-user-circle\"></i>\n    <h1 class=\"title\">Login form</h1>\n    <app-form></app-form>\n    <p>Created by Krisztian Kugler</p>\n  </ng-template>\n\n  <ng-template #app>\n    <ng-template *ngIf=\"loading; then spinner; else response\"></ng-template>\n    <ng-template #spinner>\n      <div class=\"loading\">\n        <app-spinner [borderWidth]=\"'10px'\" [size]=\"'80px'\" [animationDuration]=\"'500ms'\"></app-spinner>\n        <p>Logging in...</p>\n      </div>\n    </ng-template>\n    <ng-template #response>\n      <h1 class=\"title\">{{ title }}</h1>\n      <p class=\"login-error\" *ngIf=\"!loginSuccessful\">{{ content }}</p>\n      <div class=\"login-data\" *ngIf=\"loginSuccessful\">\n        <p>Username: {{ content.username }}</p>\n        <p>Password: {{ content.password }}</p>\n      </div>\n      <button class=\"back-button\" (click)=\"launched = false\">Back</button>\n    </ng-template>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #e9e9e9; }\n  :host .login-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 420px;\n    height: 620px;\n    padding: 50px;\n    background-color: white;\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1); }\n  :host .login-box .title {\n      font-weight: normal; }\n  :host .login-box .fa-user-circle {\n      margin-bottom: 15px;\n      color: #6b55af;\n      color: #858585;\n      font-size: 80px; }\n  :host .login-box .loading {\n      display: flex;\n      flex-direction: column;\n      align-items: center; }\n  :host .login-box .loading p {\n        margin-top: 15px; }\n  :host .login-box .login-data, :host .login-box .login-error {\n      margin: 60px 0;\n      color: #b4b4b4;\n      font-size: 20px;\n      font-weight: bold; }\n  :host .login-box .back-button {\n      height: 40px;\n      padding: 0 30px;\n      border: none;\n      border-radius: 5px;\n      background-color: #19bf6b;\n      color: white;\n      font-family: Lato, sans-serif;\n      font-size: 16px;\n      font-weight: bold;\n      outline: none;\n      cursor: pointer; }\n  :host .login-box .back-button:hover {\n        background-color: #149252; }\n  @media (max-width: 425px) {\n  :host .login-box {\n    width: 100%;\n    height: auto;\n    min-height: 100vh;\n    padding: 0 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGRldlxcYm9sZGtpbmctbG9naW4vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBb0MsRUFBQTtFQUxyQztJQVFHLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMkNBQTBDLEVBQUE7RUFoQjdDO01BbUJLLG1CQUFtQixFQUFBO0VBbkJ4QjtNQXNCSyxtQkFBbUI7TUFDbkIsY0FBd0I7TUFDeEIsY0FBeUI7TUFDekIsZUFBZSxFQUFBO0VBekJwQjtNQTRCSyxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQixFQUFBO0VBOUJ4QjtRQWlDTyxnQkFBZ0IsRUFBQTtFQWpDdkI7TUFvQ0ssY0FBYztNQUNkLGNBQXlCO01BQ3pCLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQXZDdEI7TUEwQ0ssWUFBWTtNQUNaLGVBQWU7TUFDZixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHlCQUFtQztNQUNuQyxZQUFZO01BQ1osNkJBQTZCO01BQzdCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsYUFBYTtNQUNiLGVBQWUsRUFBQTtFQXBEcEI7UUF1RE8seUJBQWtDLEVBQUE7RUFFMUM7RUFFRztJQUdHLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcblxuICAubG9naW4tYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNDIwcHg7XG4gICAgaGVpZ2h0OiA2MjBweDtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIC4xKTtcblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbiAgICAuZmEtdXNlci1jaXJjbGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGNvbG9yOiByZ2IoMTA3LCA4NSwgMTc1KTtcbiAgICAgIGNvbG9yOiByZ2IoMTMzLCAxMzMsIDEzMyk7XG4gICAgICBmb250LXNpemU6IDgwcHg7IH1cblxuICAgIC5sb2FkaW5nIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7IH0gfVxuXG4gICAgLmxvZ2luLWRhdGEsIC5sb2dpbi1lcnJvciB7XG4gICAgICBtYXJnaW46IDYwcHggMDtcbiAgICAgIGNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMTkxLCAxMDcpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDE0NiwgODIpOyB9IH0gfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuXG4gICA6aG9zdCB7XG5cbiAgICAubG9naW4tYm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7IH0gfSB9XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/api */ "./src/app/api/api.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.launched = false;
        this.loading = false;
    }
    AppComponent.prototype.loginSuccess = function (loginData) {
        this.title = "Login successful";
        this.content = loginData;
        this.loading = false;
        this.loginSuccessful = true;
    };
    AppComponent.prototype.loginError = function (error) {
        this.title = "Login failed";
        this.content = error.message;
        this.loading = false;
        this.loginSuccessful = false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.submitFormSubscription = this.dataService.submitForm.subscribe(function (loginData) {
            _this.launched = true;
            _this.loading = true;
            Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["submit"])(loginData)
                .then(_this.loginSuccess.bind(_this))
                .catch(_this.loginError.bind(_this));
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.submitFormSubscription.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/form/form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      name=\"username\"\n      id=\"username\"\n      required\n      ngModel\n      #usernameInput=\"ngModel\"\n      autocomplete=\"off\"\n      (input)=\"onUsernameInput(usernameInput)\"\n    />\n    <ng-template *ngIf=\"validating; then loading; else content\"></ng-template>\n    <ng-template #content>\n      <div\n        class=\"validation\"\n        *ngIf=\"usernameInput.touched || usernameInput.dirty\"\n        [ngClass]=\"{ valid: username.valid, invalid: !username.valid && !networkError, error: !username.valid && networkError }\"\n        #content\n      >\n        <div class=\"message\">\n          <i class=\"fas fa-check\" *ngIf=\"username.valid\"></i>\n          <i class=\"fas fa-times\" *ngIf=\"!username.valid && !networkError\"></i>\n          <i class=\"fas fa-plug\" *ngIf=\"!username.valid && networkError\"></i>\n          <small>{{ username.validationResponse }}</small>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #loading>\n      <div class=\"validating\">\n        <app-spinner [borderWidth]=\"'2px'\" [size]=\"'16px'\" [animationDuration]=\"'200ms'\"></app-spinner>\n        <small>Validating...</small>\n      </div>\n    </ng-template>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" required ngModel #password=\"ngModel\" minlength=\"9\" [pattern]=\"passwordPattern\" />\n    <div class=\"validation\" *ngIf=\"password.touched || password.dirty\" [ngClass]=\"{ valid: password.valid, invalid: !password.valid }\">\n      <div class=\"message\" *ngIf=\"password.valid\">\n        <i class=\"fas fa-check\"></i>\n        <small>Password is valid</small>\n      </div>\n      <div class=\"message\" *ngIf=\"(!password.valid && password.errors.pattern) || !password.value.length\">\n        <i class=\"fas fa-times\"></i>\n        <small>Password has to contain at least one number</small>\n      </div>\n      <div class=\"message\" *ngIf=\"(!password.valid && password.errors.minlength) || !password.value.length\">\n        <i class=\"fas fa-times\"></i>\n        <small>Minimum password length is 9 characters</small>\n      </div>\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"login-button\" [disabled]=\"!password.valid || !username.valid\">Log in</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/form/form.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  margin: 30px 0; }\n\n.form-group {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 60px; }\n\n.form-group label {\n    margin-bottom: 5px;\n    color: #858585;\n    font-size: 12px; }\n\n.form-group .form-control {\n    height: 40px;\n    padding: 0 10px;\n    border: 1px solid #c8c8c8;\n    border-radius: 5px;\n    box-shadow: 0 0 40px 40px white inset;\n    font-family: Lato, sans-serif;\n    font-size: 16px;\n    outline: none; }\n\n.form-group .form-control:focus {\n      border-color: #646464; }\n\n.form-group .validation {\n    position: absolute;\n    top: calc(100% + 2px);\n    width: 100%;\n    padding: 5px 10px; }\n\n.form-group .validation.valid {\n      background-color: #cff3e0;\n      color: #149252; }\n\n.form-group .validation.invalid {\n      background-color: #f7dfe2;\n      color: #f32435; }\n\n.form-group .validation.error {\n      background-color: #f7ecd4;\n      color: #d47209; }\n\n.form-group .validation .message {\n      display: flex;\n      align-items: center;\n      min-height: 16px; }\n\n.form-group .validation .message small {\n        font-size: 12px; }\n\n.form-group .validation .message i {\n        margin-right: 5px; }\n\n.form-group .validating {\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 10px;\n    display: flex;\n    align-items: center;\n    height: 26px; }\n\n.form-group .validating small {\n      margin-right: 5px; }\n\n.login-button {\n  width: 100%;\n  height: 40px;\n  border: none;\n  border-radius: 5px;\n  background-color: #19bf6b;\n  color: white;\n  font-family: Lato, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  outline: none;\n  cursor: pointer; }\n\n.login-button:hover {\n    background-color: #149252; }\n\n.login-button:disabled {\n    background-color: #e9e9e9;\n    color: #b4b4b4;\n    cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL0M6XFxkZXZcXGJvbGRraW5nLWxvZ2luL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtXFxmb3JtLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBSnJCO0lBT0ksa0JBQWtCO0lBQ2xCLGNBQXlCO0lBQ3pCLGVBQWUsRUFBQTs7QUFUbkI7SUFZSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsYUFBYSxFQUFBOztBQW5CakI7TUFzQk0scUJBQWdDLEVBQUE7O0FBdEJ0QztJQXlCSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTs7QUE1QnJCO01BK0JNLHlCQUFvQztNQUNwQyxjQUF1QixFQUFBOztBQWhDN0I7TUFtQ00seUJBQW9DO01BQ3BDLGNBQXVCLEVBQUE7O0FBcEM3QjtNQXVDTSx5QkFBb0M7TUFDcEMsY0FBdUIsRUFBQTs7QUF4QzdCO01BMkNNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUE7O0FBN0N0QjtRQWdEUSxlQUFlLEVBQUE7O0FBaER2QjtRQW1EUSxpQkFBaUIsRUFBQTs7QUFuRHpCO0lBc0RJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWSxFQUFBOztBQTNEaEI7TUE4RE0saUJBQWlCLEVBQUE7O0FBRXZCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUFtQztFQUNuQyxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFYakI7SUFjSSx5QkFBa0MsRUFBQTs7QUFkdEM7SUFpQkkseUJBQW9DO0lBQ3BDLGNBQXlCO0lBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzBweCAwOyB9XG5cbi5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuXG4gIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IHJnYigxMzMsIDEzMywgMTMzKTtcbiAgICBmb250LXNpemU6IDEycHg7IH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldDtcbiAgICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7IH0gfVxuXG4gIC52YWxpZGF0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDEwMCUgKyAycHgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuXG4gICAgJi52YWxpZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyNDMsIDIyNCk7XG4gICAgICBjb2xvcjogcmdiKDIwLCAxNDYsIDgyKTsgfVxuXG4gICAgJi5pbnZhbGlkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIyMywgMjI2KTtcbiAgICAgIGNvbG9yOiByZ2IoMjQzLCAzNiwgNTMpOyB9XG5cbiAgICAmLmVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzNiwgMjEyKTtcbiAgICAgIGNvbG9yOiByZ2IoMjEyLCAxMTQsIDkpOyB9XG5cbiAgICAubWVzc2FnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XG5cbiAgICAgIHNtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG5cbiAgICAgIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfSB9IH1cblxuICAudmFsaWRhdGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYygxMDAlICsgMnB4KTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI2cHg7XG5cbiAgICBzbWFsbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfSB9IH1cblxuLmxvZ2luLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDE5MSwgMTA3KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTQ2LCA4Mik7IH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gICAgY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9IH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ "./src/app/api/api.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




var FormComponent = /** @class */ (function () {
    function FormComponent(dataService) {
        this.dataService = dataService;
        this.passwordPattern = /\d/;
        this.networkError = false;
        this.validating = false;
        this.username = {
            valid: false,
            validationResponse: "User name can't be empty"
        };
    }
    FormComponent.prototype.onUsernameInput = function (input) {
        var _this = this;
        clearTimeout(this.debouncer);
        this.debouncer = setTimeout(function () {
            _this.validating = true;
            Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["validate"])(input.value)
                .then(_this.validationSuccess.bind(_this))
                .catch(_this.validationError.bind(_this));
        }, 500);
    };
    FormComponent.prototype.validationSuccess = function () {
        this.validating = false;
        this.networkError = false;
        this.username.valid = true;
        this.username.validationResponse = "Username is valid";
    };
    FormComponent.prototype.validationError = function (error) {
        this.validating = false;
        this.username.valid = false;
        if (error.message.includes("Network error")) {
            this.networkError = true;
            this.username.validationResponse = error.message + ", validation failed. Try again later";
        }
        else {
            this.networkError = false;
            this.username.validationResponse = error.message;
        }
    };
    FormComponent.prototype.onSubmit = function (form) {
        var loginData = form.value;
        this.dataService.submitForm.next(loginData);
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form",
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/components/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.sass */ "./src/app/components/form/form.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  margin-right: 5px;\n  border-style: solid;\n  border-color: transparent dodgerblue dodgerblue dodgerblue;\n  border-radius: 50%;\n  -webkit-animation-name: spin;\n          animation-name: spin;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL0M6XFxkZXZcXGJvbGRraW5nLWxvZ2luL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwREFBMEQ7RUFDMUQsa0JBQWtCO0VBQ2xCLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyx5Q0FBaUM7VUFBakMsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFDekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFKN0I7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUN6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IGRvZGdlcmJsdWUgZG9kZ2VyYmx1ZSBkb2RnZXJibHVlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOyB9XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerComponent.prototype, "borderWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerComponent.prototype, "animationDuration", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-spinner",
            template: "\n    <div class=\"spinner\" [ngStyle]=\"{ 'border-width': borderWidth, width: size, height: size, 'animation-duration': animationDuration }\"></div>\n  ",
            styles: [__webpack_require__(/*! ./spinner.component.sass */ "./src/app/components/spinner/spinner.component.sass")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.submitForm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataService);
    return DataService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\boldking-login\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map