(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktrading_app_demo"] = self["webpackChunktrading_app_demo"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
      }, {
        path: 'authentication',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./authentication/authentication.module */
          41082)).then(function (m) {
            return m.AuthenticationPageModule;
          });
        }
      }, {
        path: 'main-content',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_main-content_main-content_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./main-content/main-content.module */
          7091)).then(function (m) {
            return m.MainContentPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      _AppComponent.ctorParameters = function () {
        return [];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./authentication/authentication.module */
      41082);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      2945);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/compat */
      88939);
      /* harmony import */


      var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/compat/database */
      79978);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/compat/firestore */
      52182);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var ng2_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-tel-input */
      64897);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_2__.AuthenticationPageModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_13__.NgxChartsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig), _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_15__.AngularFireDatabaseModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, ng2_tel_input__WEBPACK_IMPORTED_MODULE_4__.Ng2TelInputModule],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    33365:
    /*!*****************************************************************!*\
      !*** ./src/app/authentication/authentication-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationPageRoutingModule": function AuthenticationPageRoutingModule() {
          return (
            /* binding */
            _AuthenticationPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login/login.component */
      67353);
      /* harmony import */


      var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otp/otp.component */
      47489);
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup/signup.component */
      7794);

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent
      }, {
        path: 'otp',
        component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent
      }];

      var _AuthenticationPageRoutingModule = function AuthenticationPageRoutingModule() {
        _classCallCheck(this, AuthenticationPageRoutingModule);
      };

      _AuthenticationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      })], _AuthenticationPageRoutingModule);
      /***/
    },

    /***/
    41082:
    /*!*********************************************************!*\
      !*** ./src/app/authentication/authentication.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationPageModule": function AuthenticationPageModule() {
          return (
            /* binding */
            _AuthenticationPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authentication-routing.module */
      33365);
      /* harmony import */


      var _authentication_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication.page */
      9973);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      67353);
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup/signup.component */
      7794);
      /* harmony import */


      var _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./otp/otp.component */
      47489);
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-otp-input */
      29362);
      /* harmony import */


      var ng2_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-tel-input */
      64897);

      var _AuthenticationPageModule = function AuthenticationPageModule() {
        _classCallCheck(this, AuthenticationPageModule);
      };

      _AuthenticationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationPageRoutingModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_11__.NgOtpInputModule, ng2_tel_input__WEBPACK_IMPORTED_MODULE_5__.Ng2TelInputModule],
        declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_1__.AuthenticationPage, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__.OtpComponent]
      })], _AuthenticationPageModule);
      /***/
    },

    /***/
    9973:
    /*!*******************************************************!*\
      !*** ./src/app/authentication/authentication.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationPage": function AuthenticationPage() {
          return (
            /* binding */
            _AuthenticationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./authentication.page.html */
      73504);
      /* harmony import */


      var _authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication.page.scss */
      60253);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AuthenticationPage = /*#__PURE__*/function () {
        function AuthenticationPage() {
          _classCallCheck(this, AuthenticationPage);
        }

        _createClass(AuthenticationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthenticationPage;
      }();

      _AuthenticationPage.ctorParameters = function () {
        return [];
      };

      _AuthenticationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-authentication',
        template: _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AuthenticationPage);
      /***/
    },

    /***/
    67353:
    /*!*********************************************************!*\
      !*** ./src/app/authentication/login/login.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.component.html */
      94469);
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component.scss */
      73835);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/compat/app */
      37841);
      /* harmony import */


      var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/compat/auth */
      36412);
      /* harmony import */


      var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/compat/firestore */
      52067);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      1325);
      /* harmony import */


      var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/data/data.service */
      59244);

      firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.firebaseConfig);

      var _LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, fireAuth, dataService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.fireAuth = fireAuth;
          this.dataService = dataService;
          this.OTP = '';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("[ngOnint - LoginComponent]");
          }
          /*---------------------------------------------------
                  navigate to signup page
          -----------------------------------------------------*/

        }, {
          key: "navigate",
          value: function navigate() {
            this.router.navigateByUrl('/authentication/signup');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.reCaptchaVerifier = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.RecaptchaVerifier('sign-in-button', {
                        size: 'invisible',
                        callback: function callback(response) {},
                        'expired-callback': function expiredCallback() {}
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            this.reCaptchaVerifier = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.RecaptchaVerifier('sign-in-button', {
              size: 'invisible',
              callback: function callback(response) {},
              'expired-callback': function expiredCallback() {}
            });
          }
        }, {
          key: "getCountryCode",
          value: function getCountryCode(event) {
            this.countryCode = event;
          }
          /*---------------------------------------------------
                Call fireauth signIn with phone number
                Navigate to otp page
          -----------------------------------------------------*/

        }, {
          key: "getOTP",
          value: function getOTP() {
            var _this = this;

            this.phoneNumber = this.countryCode + this.phoneNumber;
            localStorage.setItem('phoneNo', JSON.stringify(this.phoneNumber));
            this.phoneNumber = '+' + this.phoneNumber;
            console.log("phoneNumber" + this.phoneNumber);
            return new Promise(function (resolve, reject) {
              _this.fireAuth.signInWithPhoneNumber(_this.phoneNumber, _this.reCaptchaVerifier).then(function (confirmationResult) {
                // window.confirmationResult = confirmationResult;
                console.log(confirmationResult);
                resolve("confirmation result" + confirmationResult);
                localStorage.setItem('confirmationResult', JSON.stringify(confirmationResult));

                _this.dataService.setConfirmationResult(confirmationResult);

                _this.router.navigate(['/authentication/otp'], {
                  state: {
                    currentPage: 'signin'
                  }
                });
              })["catch"](function (error) {
                console.log(error);
                reject('SMS not sent');
              });
            });
          }
        }]);

        return LoginComponent;
      }();

      _LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth
        }, {
          type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
        }];
      };

      _LoginComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginComponent);
      /***/
    },

    /***/
    47489:
    /*!*****************************************************!*\
      !*** ./src/app/authentication/otp/otp.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpComponent": function OtpComponent() {
          return (
            /* binding */
            _OtpComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_otp_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./otp.component.html */
      59848);
      /* harmony import */


      var _otp_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otp.component.scss */
      69663);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/data/data.service */
      59244);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      1325);

      var _OtpComponent = /*#__PURE__*/function () {
        function OtpComponent(router, dataService, fireauth) {
          _classCallCheck(this, OtpComponent);

          this.router = router;
          this.dataService = dataService;
          this.fireauth = fireauth; //public previousPage="signin";

          this.previousPage = this.router.getCurrentNavigation().extras.state.currentPage ? this.router.getCurrentNavigation().extras.state.currentPage : '';
          this.config = {
            allowNumbersOnly: false,
            length: 6,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
              'width': '50px',
              'height': '50px'
            }
          };
        }

        _createClass(OtpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.confirmationResult = this.dataService.getConfirmationResult();
          }
        }, {
          key: "onOtpChange",
          value: function onOtpChange(otp) {
            this.otp = otp;
          }
        }, {
          key: "submit",
          value: function submit(type) {
            console.log("inside submit");
            this.enterVerificationCode(type);
            console.log(type);
          }
        }, {
          key: "enterVerificationCode",
          value: function enterVerificationCode(type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(this.otp);
                      return _context3.abrupt("return", new Promise(function (resolve, reject) {
                        _this2.confirmationResult.confirm(_this2.otp).then(function (result) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var user;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    user = result.user;
                                    resolve(user);
                                    console.log(JSON.stringify(user));
                                    localStorage.setItem("userId", user.phoneNumber.slice(1));
                                    _context2.t0 = type;
                                    _context2.next = _context2.t0 === 'signin' ? 7 : _context2.t0 === 'signup' ? 9 : 12;
                                    break;

                                  case 7:
                                    this.router.navigateByUrl('/main-content/dashboard');
                                    return _context2.abrupt("break", 12);

                                  case 9:
                                    this.dataService.setDocument();
                                    this.router.navigateByUrl('/main-content/search-profile'); // Add a new document in collection "cities"

                                    return _context2.abrupt("break", 12);

                                  case 12:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        })["catch"](function (error) {
                          reject(error.message); //alert("Invalid OTP! Please try again!");
                        });
                      }));

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return OtpComponent;
      }();

      _OtpComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth
        }];
      };

      _OtpComponent.propDecorators = {
        ngOtpInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
          args: ['ngOtpInput', {
            "static": false
          }]
        }]
      };
      _OtpComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-otp',
        template: _raw_loader_otp_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_otp_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OtpComponent);
      /***/
    },

    /***/
    7794:
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signup/signup.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupComponent": function SignupComponent() {
          return (
            /* binding */
            _SignupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./signup.component.html */
      3161);
      /* harmony import */


      var _signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.component.scss */
      25984);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/compat/app */
      37841);
      /* harmony import */


      var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/compat/auth */
      36412);
      /* harmony import */


      var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/compat/firestore */
      52067);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      1325);
      /* harmony import */


      var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/data/data.service */
      59244);

      var _SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(router, fireAuth, dataService) {
          _classCallCheck(this, SignupComponent);

          this.router = router;
          this.fireAuth = fireAuth;
          this.dataService = dataService;
          this.OTP = '';
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("[ngOnint - LoginComponent]");
          }
          /*---------------------------------------------------
                  navigate to signup page
          -----------------------------------------------------*/

        }, {
          key: "navigate",
          value: function navigate() {
            this.router.navigateByUrl('/authentication/signup');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.reCaptchaVerifier = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.RecaptchaVerifier('sign-in-button', {
                        size: 'invisible',
                        callback: function callback(response) {},
                        'expired-callback': function expiredCallback() {}
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            this.reCaptchaVerifier = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.RecaptchaVerifier('sign-in-button', {
              size: 'invisible',
              callback: function callback(response) {},
              'expired-callback': function expiredCallback() {}
            });
          }
        }, {
          key: "getCountryCode",
          value: function getCountryCode(event) {
            this.countryCode = event;
          }
          /*---------------------------------------------------
                Call fireauth signIn with phone number
                Navigate to otp page
          -----------------------------------------------------*/

        }, {
          key: "getOTP",
          value: function getOTP() {
            var _this3 = this;

            this.phoneNumber = this.countryCode + this.phoneNumber;
            localStorage.setItem('phoneNo', JSON.stringify(this.phoneNumber));
            this.phoneNumber = '+' + this.phoneNumber;
            console.log("phoneNumber" + this.phoneNumber);
            return new Promise(function (resolve, reject) {
              _this3.fireAuth.signInWithPhoneNumber(_this3.phoneNumber, _this3.reCaptchaVerifier).then(function (confirmationResult) {
                // window.confirmationResult = confirmationResult;
                console.log(confirmationResult);
                resolve("confirmation result" + confirmationResult);
                localStorage.setItem('confirmationResult', JSON.stringify(confirmationResult));

                _this3.dataService.setConfirmationResult(confirmationResult); //this.dataService.createDocument(this.phoneNumber);


                _this3.router.navigate(['/authentication/otp'], {
                  state: {
                    currentPage: 'signup'
                  }
                });
              })["catch"](function (error) {
                console.log(error);
                reject('SMS not sent');
              });
            });
          }
        }]);

        return SignupComponent;
      }();

      _SignupComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth
        }, {
          type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService
        }];
      };

      _SignupComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SignupComponent);
      /***/
    },

    /***/
    59244:
    /*!***********************************************!*\
      !*** ./src/app/services/data/data.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataService": function DataService() {
          return (
            /* binding */
            _DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/compat/firestore */
      52182);
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/firestore */
      72491);

      var _DataService = /*#__PURE__*/function () {
        function DataService(fireStore) {
          _classCallCheck(this, DataService);

          this.fireStore = fireStore;
          this.userId = localStorage.getItem('userId');
          this.phoneNo = localStorage.getItem('phoneNo');
        }

        _createClass(DataService, [{
          key: "getUserInformation",
          value: function getUserInformation() {
            return this.fireStore.collection('Users').doc(this.userId).valueChanges();
          }
        }, {
          key: "updateFollowList",
          value: function updateFollowList(followList) {
            this.fireStore.collection('Users').doc(this.userId).update({
              followList: followList
            });
          }
        }, {
          key: "updatewatchList",
          value: function updatewatchList(watchList) {
            this.fireStore.collection('Users').doc(this.userId).update({
              watchList: watchList
            });
          }
        }, {
          key: "setDocument",
          value: function setDocument() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.fireStore.collection("Users").doc(this.phoneNo).set({
                        availableBalance: "10000",
                        followList: [],
                        watchList: []
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "createTransactionBuy",
          value: function createTransactionBuy(transaction) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.fireStore.collection('Transactions').doc().set({
                        code: transaction.code,
                        quantity: transaction.quantity,
                        total: transaction.total,
                        price: transaction.price,
                        createDate: firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Timestamp.fromDate(transaction.createdDate),
                        phoneNo: this.phoneNo,
                        isBuy: true
                      });

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "setConfirmationResult",
          value: function setConfirmationResult(confirmationResult) {
            this.confirmationResult = confirmationResult;
          }
        }, {
          key: "getConfirmationResult",
          value: function getConfirmationResult() {
            return this.confirmationResult;
          }
        }, {
          key: "createDocument",
          value: function createDocument(phoneNumber) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var ref;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      ref = this.fireStore.collection("Users").doc(phoneNumber);
                      _context7.next = 3;
                      return ref.set({
                        availableBalance: "1000",
                        followList: [],
                        watchList: []
                      });

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getTransactionDetails",
          value: function getTransactionDetails() {
            var _this4 = this;

            return this.fireStore.collection('Transactions', function (ref) {
              return ref.where('phoneNo', '==', _this4.phoneNo);
            }).valueChanges();
          }
        }]);

        return DataService;
      }();

      _DataService.ctorParameters = function () {
        return [{
          type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore
        }];
      };

      _DataService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DataService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyAxN-_CBnCmvnjcZnF5doUXspjHGEavFWw",
          authDomain: "trading-app-demo-ba0a7.firebaseapp.com",
          projectId: "trading-app-demo-ba0a7",
          storageBucket: "trading-app-demo-ba0a7.appspot.com",
          messagingSenderId: "739646221736",
          appId: "1:739646221736:web:378205f202a2f37dc1419d"
        }
      }; //export const= initializeApp;

      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      32404);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      (0, _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    55899:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": [79437, "node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"],
        "./pwa-camera-modal-instance.entry.js": [18025, "node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"],
        "./pwa-camera-modal.entry.js": [64262, "node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"],
        "./pwa-camera.entry.js": [58206, "node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"],
        "./pwa-toast.entry.js": [24297, "node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 55899;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    60253:
    /*!*********************************************************!*\
      !*** ./src/app/authentication/authentication.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    73835:
    /*!***********************************************************!*\
      !*** ./src/app/authentication/login/login.component.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    69663:
    /*!*******************************************************!*\
      !*** ./src/app/authentication/otp/otp.component.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    25984:
    /*!*************************************************************!*\
      !*** ./src/app/authentication/signup/signup.component.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    73504:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    94469:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-header class=\"ion-text-center\">\n    <ion-title >Sign in!</ion-title>\n      <div class=\"card-holder\">\n        <ion-card class=\"ion-padding\">\n       \n          <ion-text class= \"text\">Enter Mobile Number</ion-text>\n        <!--<ion-input [(ngModel)]=\"phoneNumber\" type=\"number\" placeholder=\"6589090703\" min=\"10\" max=\"15\"></ion-input>-->\n        <div class=\"input-container\">\n          <input type=\"text\" ng2TelInput  [(ngModel)]=\"phoneNumber\" (countryChange)=\"getCountryCode($event.dialCode)\" style=\"border:none;border-bottom: 1px solid gray;outline:transparent;\" />\n        </div>\n          <!--<ngx-intl-tel-input [preferredCountries]=\"['es']\" [enableAutoCountrySelect]=\"true\" name=\"phoneNumber\"\n              formControlName=\"phoneNumber\" [(ngModel)]=\"phoneNumber\"></ngx-intl-tel-input>-->\n        </ion-card>\n      </div>\n  </ion-header>\n<ion-content class=\"auth-content\">\n  <ion-item lines=\"none\">  \n    <ion-grid >\n      <ion-row >\n        <ion-text class= \"text\">Don't have an account?</ion-text>\n      </ion-row>\n      <ion-row class= \"ion-margin-bottom\" >\n          <ion-text class= \"text\" (click)=\"navigate()\" style=\"text-decoration: underline;\">sign up</ion-text>\n      </ion-row>\n      <form>\n      <ion-row style=\"height:20%;\">\n        <ion-button color=\"secondary\" (click)=\"getOTP()\">Submit</ion-button>\n      </ion-row>\n      </form>\n    </ion-grid>\n  </ion-item>\n  <div id=\"sign-in-button\"></div>\n</ion-content>\n\n";
      /***/
    },

    /***/
    59848:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/otp/otp.component.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-text-center\">\n  <ion-title *ngIf=\"previousPage == 'signin'\" >Sign in!</ion-title>\n  <ion-title *ngIf=\"previousPage == 'signup'\">Sign up!</ion-title>\n    <div class=\"card-holder\">\n      <ion-card class=\"ion-padding\" style=\"position:absolute\">\n        <ion-text class= \"text\">Enter OTP</ion-text>\n        <ng-otp-input ngDefaultControl [(ngModel)]=\"otp\" (onInputChange)=\"onOtpChange($event)\" [config]=\"{length:6}\"></ng-otp-input>\n      </ion-card>\n    </div>\n</ion-header>\n<ion-content class=\"auth-content\">\n<ion-item lines=\"none\">  \n  <ion-grid >\n    <ion-row >\n      <ion-text class= \"text\">Don't recieve otp?</ion-text>\n    </ion-row>\n    <ion-row class= \"ion-margin-bottom\" >\n        <ion-text class= \"text\" style=\"text-decoration: underline;\">Resend OTP</ion-text>\n    </ion-row>\n    <form>\n    <ion-row style=\"height:20%;\">\n      <ion-button color=\"secondary\" *ngIf=\"previousPage == 'signin'\" (click)=\"submit('signin')\">Sign In</ion-button>\n      <ion-button color=\"secondary\" *ngIf=\"previousPage == 'signup'\" (click)=\"submit('signup')\">Register</ion-button>\n    </ion-row>\n    </form>\n  </ion-grid>\n</ion-item>\n</ion-content>\n\n";
      /***/
    },

    /***/
    3161:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-text-center\">\n  <ion-title >Sign up!</ion-title>\n  <div class=\"card-holder\">\n    <ion-card class=\"ion-padding\">\n      <ion-text class= \"text\">Enter Mobile Number</ion-text>\n      <div class=\"input-container\">\n        <input type=\"text\" ng2TelInput  [(ngModel)]=\"phoneNumber\" (countryChange)=\"getCountryCode($event.dialCode)\" style=\"border:none;border-bottom: 1px solid gray;outline:transparent;\" />\n      </div>    </ion-card>\n  </div>\n</ion-header>\n<ion-content class=\"auth-content\">\n  <ion-item lines=\"none\">  \n    <ion-grid >\n      <ion-row >\n        <ion-text class= \"text\">Already have an account?</ion-text>\n      </ion-row>\n      <ion-row class= \"ion-margin-bottom\" >\n          <ion-text class= \"text\" (click)=\"navigate()\" style=\"text-decoration: underline;\">sign in</ion-text>\n      </ion-row>\n      <ion-row style=\"height:20%;\">\n        <ion-button color=\"secondary\" (click)=\"getOTP()\">Submit</ion-button>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <div id=\"sign-in-button\"></div>\n</ion-content>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map