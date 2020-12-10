function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _public_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./public/profile/profile.component */
    "./src/app/public/profile/profile.component.ts");
    /* harmony import */


    var _public_welcome_image_by_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./public/welcome/image-by-tag.component */
    "./src/app/public/welcome/image-by-tag.component.ts");
    /* harmony import */


    var _security_auth_security_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./security/auth-security.guard */
    "./src/app/security/auth-security.guard.ts");
    /* harmony import */


    var _shared_dialog_wrapper_login_dialog_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/dialog-wrapper/login-dialog-wrapper.component */
    "./src/app/shared/dialog-wrapper/login-dialog-wrapper.component.ts");
    /* harmony import */


    var _private_file_upload_wrapper_file_upload_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./private/file-upload-wrapper/file-upload-wrapper.component */
    "./src/app/private/file-upload-wrapper/file-upload-wrapper.component.ts");
    /* harmony import */


    var _shared_user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/user-gallery/user-gallery.component */
    "./src/app/shared/user-gallery/user-gallery.component.ts");
    /* harmony import */


    var _private_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./private/edit-profile/edit-profile.component */
    "./src/app/private/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _public_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./public/image-details/image-details.component */
    "./src/app/public/image-details/image-details.component.ts");
    /* harmony import */


    var _serviceV2_image_details_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./serviceV2/image-details-resolver.service */
    "./src/app/serviceV2/image-details-resolver.service.ts");
    /* harmony import */


    var _public_download_cropper_download_cropper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./public/download-cropper/download-cropper.component */
    "./src/app/public/download-cropper/download-cropper.component.ts");
    /* harmony import */


    var _serviceV2_crop_and_download_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./serviceV2/crop-and-download-resolver.service */
    "./src/app/serviceV2/crop-and-download-resolver.service.ts");
    /* harmony import */


    var _public_startup_startup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./public/startup/startup.component */
    "./src/app/public/startup/startup.component.ts");
    /* harmony import */


    var _public_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./public/not-found-page/not-found-page.component */
    "./src/app/public/not-found-page/not-found-page.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _shared_dialog_wrapper_login_dialog_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["LoginDialogWrapperComponent"]
    }, {
      path: 'profile',
      component: _public_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
    }, {
      path: 'upload',
      component: _private_file_upload_wrapper_file_upload_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["FileUploadWrapperComponent"],
      canActivate: [_security_auth_security_guard__WEBPACK_IMPORTED_MODULE_4__["AuthSecurityGuard"]]
    }, {
      path: 'welcome',
      component: _public_startup_startup_component__WEBPACK_IMPORTED_MODULE_13__["StartupComponent"]
    }, {
      path: 'image-by-tags',
      component: _public_welcome_image_by_tag_component__WEBPACK_IMPORTED_MODULE_3__["ImageByTagComponent"]
    }, {
      path: 'gallery',
      component: _shared_user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_7__["UserGalleryComponent"]
    }, {
      path: 'crop-download',
      component: _public_download_cropper_download_cropper_component__WEBPACK_IMPORTED_MODULE_11__["DownloadCropperComponent"],
      resolve: {
        image: _serviceV2_crop_and_download_resolver_service__WEBPACK_IMPORTED_MODULE_12__["CropAndDownloadResolverService"]
      }
    }, {
      path: 'image',
      component: _public_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_9__["ImageDetailsComponent"],
      resolve: {
        image: _serviceV2_image_details_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ImageDetailsResolverService"]
      }
    }, {
      path: 'edit-profile',
      component: _private_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditProfileComponent"],
      canActivate: [_security_auth_security_guard__WEBPACK_IMPORTED_MODULE_4__["AuthSecurityGuard"]]
    }, {
      path: 'not-found',
      component: _public_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'angularJavaImageREST';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 1280px;\n  min-height: 500px;\n  margin: 70px auto 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 350px;\n  background: #fcefee;\n  margin: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .img-tile[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .img-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  transition: transform 0.5s;\n}\n\n.container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]:hover   .img-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.8);\n  transform: scaleY(0);\n  transition: transform 0.5s;\n}\n\n.container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%] {\n  top: 1.3%;\n  transform: scaleY(1.025);\n}\n\n.container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  padding: 15px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxwbGFuYlxccHJvZ3JhbWluZ1xcaHRsd2llbndlc3REaXBsb21Qcm9qZWt0XFxhbmd1bGFyX2phdmFfaW1hZ2VfcmVzdFxcYW5ndWxhckphdmFJbWFnZVJFU1Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDREY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0hGOztBREtBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FDRkY7O0FES0E7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEyODBweDtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW46ICA3MHB4IGF1dG8gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWluZXIgLnRpbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmNlZmVlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICAvL2JveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLnRpbGUgLmltZy10aWxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW1ne1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lciAudGlsZSAuaW1nLXRpbGUgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZTpob3ZlciAuaW1nLXRpbGUgaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLnRpbGUgLmRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZTpob3ZlciAuZGV0YWlscyB7XHJcbiAgdG9wOiAxLjMlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEuMDI1KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZSAuZGV0YWlscyAucHJvZmlsZS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTI4MHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luOiA3MHB4IGF1dG8gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29udGFpbmVyIC50aWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQ6ICNmY2VmZWU7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNvbnRhaW5lciAudGlsZSAuaW1nLXRpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmltZyB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIC50aWxlIC5pbWctdGlsZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4uY29udGFpbmVyIC50aWxlOmhvdmVyIC5pbWctdGlsZSBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5jb250YWluZXIgLnRpbGUgLmRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG59XG5cbi5jb250YWluZXIgLnRpbGU6aG92ZXIgLmRldGFpbHMge1xuICB0b3A6IDEuMyU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEuMDI1KTtcbn1cblxuLmNvbnRhaW5lciAudGlsZSAuZGV0YWlscyAucHJvZmlsZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./public/search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _public_welcome_image_by_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./public/welcome/image-by-tag.component */
    "./src/app/public/welcome/image-by-tag.component.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngxs/logger-plugin */
    "./node_modules/@ngxs/logger-plugin/__ivy_ngcc__/fesm2015/ngxs-logger-plugin.js");
    /* harmony import */


    var _shared_app_state_states_images_by_tag_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/app-state/states/images-by-tag-state */
    "./src/app/shared/app-state/states/images-by-tag-state.ts");
    /* harmony import */


    var _shared_app_state_states_search_by_tag_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/app-state/states/search-by-tag.state */
    "./src/app/shared/app-state/states/search-by-tag.state.ts");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _shared_image_content_image_content_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/image-content/image-content.component */
    "./src/app/shared/image-content/image-content.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ngxs/devtools-plugin */
    "./node_modules/@ngxs/devtools-plugin/__ivy_ngcc__/fesm2015/ngxs-devtools-plugin.js");
    /* harmony import */


    var _shared_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shared/signup/signup.component */
    "./src/app/shared/signup/signup.component.ts");
    /* harmony import */


    var _security_cookie_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./security/cookie-auth-interceptor.service */
    "./src/app/security/cookie-auth-interceptor.service.ts");
    /* harmony import */


    var _shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./shared/app-state/states/login.state.model */
    "./src/app/shared/app-state/states/login.state.model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./shared/login/login.component */
    "./src/app/shared/login/login.component.ts");
    /* harmony import */


    var _shared_app_state_states_address_validation_state__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./shared/app-state/states/address.validation.state */
    "./src/app/shared/app-state/states/address.validation.state.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _shared_app_state_states_signup_state__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./shared/app-state/states/signup.state */
    "./src/app/shared/app-state/states/signup.state.ts");
    /* harmony import */


    var _public_profile_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./public/profile/profile.component */
    "./src/app/public/profile/profile.component.ts");
    /* harmony import */


    var _shared_dialog_wrapper_login_dialog_wrapper_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./shared/dialog-wrapper/login-dialog-wrapper.component */
    "./src/app/shared/dialog-wrapper/login-dialog-wrapper.component.ts");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "./node_modules/@ngxs/router-plugin/__ivy_ngcc__/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./shared/app-state/states/User-details.state */
    "./src/app/shared/app-state/states/User-details.state.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _shared_app_state_states_images_by_user_id_state__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./shared/app-state/states/images-by-user-id.state */
    "./src/app/shared/app-state/states/images-by-user-id.state.ts");
    /* harmony import */


    var _private_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./private/file-upload/file-upload.component */
    "./src/app/private/file-upload/file-upload.component.ts");
    /* harmony import */


    var ngx_dropzone__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ngx-dropzone */
    "./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js");
    /* harmony import */


    var _private_file_upload_wrapper_file_upload_wrapper_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./private/file-upload-wrapper/file-upload-wrapper.component */
    "./src/app/private/file-upload-wrapper/file-upload-wrapper.component.ts");
    /* harmony import */


    var _shared_app_state_states_upload_image_state__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./shared/app-state/states/upload-image.state */
    "./src/app/shared/app-state/states/upload-image.state.ts");
    /* harmony import */


    var _shared_user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./shared/user-gallery/user-gallery.component */
    "./src/app/shared/user-gallery/user-gallery.component.ts");
    /* harmony import */


    var _shared_image_detail_view_image_detail_view_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./shared/image-detail-view/image-detail-view.component */
    "./src/app/shared/image-detail-view/image-detail-view.component.ts");
    /* harmony import */


    var _shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./shared/app-state/states/select-image.state */
    "./src/app/shared/app-state/states/select-image.state.ts");
    /* harmony import */


    var _private_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./private/edit-profile/edit-profile.component */
    "./src/app/private/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _shared_app_state_states_logged_user_details_state__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./shared/app-state/states/logged-user-details.state */
    "./src/app/shared/app-state/states/logged-user-details.state.ts");
    /* harmony import */


    var _private_add_tags_dialog_add_tags_dialog_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./private/add-tags-dialog/add-tags-dialog.component */
    "./src/app/private/add-tags-dialog/add-tags-dialog.component.ts");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _shared_app_state_states_update_user_profile_image_state__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./shared/app-state/states/update-user-profile-image.state */
    "./src/app/shared/app-state/states/update-user-profile-image.state.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ngx-virtual-scroller */
    "./node_modules/ngx-virtual-scroller/__ivy_ngcc__/fesm2015/ngx-virtual-scroller.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _private_change_image_details_dialog_change_image_details_dialog_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./private/change-image-details-dialog/change-image-details-dialog.component */
    "./src/app/private/change-image-details-dialog/change-image-details-dialog.component.ts");
    /* harmony import */


    var ngx_filesaver__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! ngx-filesaver */
    "./node_modules/ngx-filesaver/__ivy_ngcc__/fesm2015/ngx-filesaver.js");
    /* harmony import */


    var _shared_app_state_states_delete_image_state__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! ./shared/app-state/states/delete-image.state */
    "./src/app/shared/app-state/states/delete-image.state.ts");
    /* harmony import */


    var _private_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! ./private/image-cropper/image-cropper.component */
    "./src/app/private/image-cropper/image-cropper.component.ts");
    /* harmony import */


    var _shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! ./shared/app-state/states/crop-image.state */
    "./src/app/shared/app-state/states/crop-image.state.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _public_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! ./public/image-details/image-details.component */
    "./src/app/public/image-details/image-details.component.ts");
    /* harmony import */


    var _shared_app_state_states_download_details_state__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! ./shared/app-state/states/download-details.state */
    "./src/app/shared/app-state/states/download-details.state.ts");
    /* harmony import */


    var _shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! ./shared/app-state/states/get-image-by-id.state */
    "./src/app/shared/app-state/states/get-image-by-id.state.ts");
    /* harmony import */


    var _shared_app_state_states_related_images_state__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
    /*! ./shared/app-state/states/related-images.state */
    "./src/app/shared/app-state/states/related-images.state.ts");
    /* harmony import */


    var _shared_app_state_states_search_by_users_state__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
    /*! ./shared/app-state/states/search-by-users.state */
    "./src/app/shared/app-state/states/search-by-users.state.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _private_upload_image_dialog_upload_image_dialog_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
    /*! ./private/upload-image-dialog/upload-image-dialog.component */
    "./src/app/private/upload-image-dialog/upload-image-dialog.component.ts");
    /* harmony import */


    var _public_download_cropper_download_cropper_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
    /*! ./public/download-cropper/download-cropper.component */
    "./src/app/public/download-cropper/download-cropper.component.ts");
    /* harmony import */


    var _shared_app_state_states_get_base64_for_downloadCropper_state__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
    /*! ./shared/app-state/states/get-base64-for-downloadCropper.state */
    "./src/app/shared/app-state/states/get-base64-for-downloadCropper.state.ts");
    /* harmony import */


    var _shared_app_state_states_prepare_cropped_for_download_state__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
    /*! ./shared/app-state/states/prepare-cropped-for-download.state */
    "./src/app/shared/app-state/states/prepare-cropped-for-download.state.ts");
    /* harmony import */


    var _public_download_cropped_image_dialog_download_cropped_image_dialog_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
    /*! ./public/download-cropped-image-dialog/download-cropped-image-dialog.component */
    "./src/app/public/download-cropped-image-dialog/download-cropped-image-dialog.component.ts");
    /* harmony import */


    var _public_startup_startup_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
    /*! ./public/startup/startup.component */
    "./src/app/public/startup/startup.component.ts");
    /* harmony import */


    var _public_set_resolution_download_dialog_set_resolution_download_dialog_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
    /*! ./public/set-resolution-download-dialog/set-resolution-download-dialog.component */
    "./src/app/public/set-resolution-download-dialog/set-resolution-download-dialog.component.ts");
    /* harmony import */


    var _shared_app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
    /*! ./shared/app-state/states/request-status.state */
    "./src/app/shared/app-state/states/request-status.state.ts");
    /* harmony import */


    var _public_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
    /*! ./public/not-found-page/not-found-page.component */
    "./src/app/public/not-found-page/not-found-page.component.ts");
    /* harmony import */


    var _public_bootstrap_playground_bootstrap_playground_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
    /*! ./public/bootstrap-playground/bootstrap-playground.component */
    "./src/app/public/bootstrap-playground/bootstrap-playground.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _security_cookie_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["CookieAuthInterceptorService"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_37__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_37__["HashLocationStrategy"]
      }, {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [{
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_57__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_57__["GoogleLoginProvider"](_environments_environment__WEBPACK_IMPORTED_MODULE_64__["environment"].google_id)
          }]
        }
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_66__["FileSaverModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_70__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_76__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_60__["MatExpansionModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_59__["ImageCropperModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_62__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_58__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_63__["MatRadioModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_55__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_61__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_39__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_56__["VirtualScrollerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_44__["NgxDropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_57__["SocialLoginModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["NgxsModule"].forRoot([_shared_app_state_states_images_by_tag_state__WEBPACK_IMPORTED_MODULE_12__["ImagesByTagState"], _shared_app_state_states_search_by_tag_state__WEBPACK_IMPORTED_MODULE_13__["SearchByTagState"], _shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_26__["LoginStateModel"], _shared_app_state_states_address_validation_state__WEBPACK_IMPORTED_MODULE_31__["AddressValidationState"], _shared_app_state_states_related_images_state__WEBPACK_IMPORTED_MODULE_74__["RelatedImagesState"], _shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_73__["GetImageByIdState"], _shared_app_state_states_signup_state__WEBPACK_IMPORTED_MODULE_33__["SignupState"], _shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_40__["UserDetailsState"], _shared_app_state_states_download_details_state__WEBPACK_IMPORTED_MODULE_72__["DownloadDetailsState"], _shared_app_state_states_search_by_users_state__WEBPACK_IMPORTED_MODULE_75__["SearchByUsersState"], _shared_app_state_states_images_by_user_id_state__WEBPACK_IMPORTED_MODULE_42__["ImagesByUserIdState"], _shared_app_state_states_upload_image_state__WEBPACK_IMPORTED_MODULE_46__["UploadImageState"], _shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_49__["SelectImageState"], _shared_app_state_states_logged_user_details_state__WEBPACK_IMPORTED_MODULE_51__["LoggedUserDetailsState"], _shared_app_state_states_update_user_profile_image_state__WEBPACK_IMPORTED_MODULE_54__["UpdateUserProfileImageState"], _shared_app_state_states_delete_image_state__WEBPACK_IMPORTED_MODULE_67__["DeleteImageState"], _shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_69__["CropImageState"], _shared_app_state_states_get_base64_for_downloadCropper_state__WEBPACK_IMPORTED_MODULE_79__["GetBase64ForDownloadCropperState"], _shared_app_state_states_prepare_cropped_for_download_state__WEBPACK_IMPORTED_MODULE_80__["PrepareCroppedForDownloadState"], _shared_app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_84__["RequestStatusState"]]), _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsLoggerPluginModule"].forRoot(), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_23__["NgxsReduxDevtoolsPluginModule"].forRoot(), _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_36__["NgxsRouterPluginModule"].forRoot(), _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_87__["FlexModule"]], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchToolbarComponent"], _public_welcome_image_by_tag_component__WEBPACK_IMPORTED_MODULE_9__["ImageByTagComponent"], _shared_image_content_image_content_component__WEBPACK_IMPORTED_MODULE_21__["ImageContentComponent"], _shared_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"], _shared_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"], _public_profile_profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"], _shared_dialog_wrapper_login_dialog_wrapper_component__WEBPACK_IMPORTED_MODULE_35__["LoginDialogWrapperComponent"], _private_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_43__["FileUploadComponent"], _private_file_upload_wrapper_file_upload_wrapper_component__WEBPACK_IMPORTED_MODULE_45__["FileUploadWrapperComponent"], _shared_user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_47__["UserGalleryComponent"], _shared_image_detail_view_image_detail_view_component__WEBPACK_IMPORTED_MODULE_48__["ImageDetailViewComponent"], _private_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_50__["EditProfileComponent"], _private_add_tags_dialog_add_tags_dialog_component__WEBPACK_IMPORTED_MODULE_52__["AddTagsDialogComponent"], _private_change_image_details_dialog_change_image_details_dialog_component__WEBPACK_IMPORTED_MODULE_65__["ChangeImageDetailsDialogComponent"], _private_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_68__["ImageCropperComponent"], _public_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_71__["ImageDetailsComponent"], _private_upload_image_dialog_upload_image_dialog_component__WEBPACK_IMPORTED_MODULE_77__["UploadImageDialogComponent"], _public_download_cropper_download_cropper_component__WEBPACK_IMPORTED_MODULE_78__["DownloadCropperComponent"], _public_download_cropped_image_dialog_download_cropped_image_dialog_component__WEBPACK_IMPORTED_MODULE_81__["DownloadCroppedImageDialogComponent"], _public_startup_startup_component__WEBPACK_IMPORTED_MODULE_82__["StartupComponent"], _public_set_resolution_download_dialog_set_resolution_download_dialog_component__WEBPACK_IMPORTED_MODULE_83__["SetResolutionDownloadDialogComponent"], _public_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_85__["NotFoundPageComponent"], _public_bootstrap_playground_bootstrap_playground_component__WEBPACK_IMPORTED_MODULE_86__["BootstrapPlaygroundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_66__["FileSaverModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_70__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_76__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_60__["MatExpansionModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_59__["ImageCropperModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_62__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_58__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_63__["MatRadioModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_55__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_61__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_39__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_56__["VirtualScrollerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_44__["NgxDropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_57__["SocialLoginModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["ɵj"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsLoggerPluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_23__["NgxsReduxDevtoolsPluginModule"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_36__["NgxsRouterPluginModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_87__["FlexModule"]],
        exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchToolbarComponent"], _public_welcome_image_by_tag_component__WEBPACK_IMPORTED_MODULE_9__["ImageByTagComponent"], _shared_image_content_image_content_component__WEBPACK_IMPORTED_MODULE_21__["ImageContentComponent"], _shared_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"], _shared_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"], _public_profile_profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"], _shared_dialog_wrapper_login_dialog_wrapper_component__WEBPACK_IMPORTED_MODULE_35__["LoginDialogWrapperComponent"], _private_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_43__["FileUploadComponent"], _private_file_upload_wrapper_file_upload_wrapper_component__WEBPACK_IMPORTED_MODULE_45__["FileUploadWrapperComponent"], _shared_user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_47__["UserGalleryComponent"], _shared_image_detail_view_image_detail_view_component__WEBPACK_IMPORTED_MODULE_48__["ImageDetailViewComponent"], _private_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_50__["EditProfileComponent"], _private_add_tags_dialog_add_tags_dialog_component__WEBPACK_IMPORTED_MODULE_52__["AddTagsDialogComponent"], _private_change_image_details_dialog_change_image_details_dialog_component__WEBPACK_IMPORTED_MODULE_65__["ChangeImageDetailsDialogComponent"], _private_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_68__["ImageCropperComponent"], _public_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_71__["ImageDetailsComponent"], _private_upload_image_dialog_upload_image_dialog_component__WEBPACK_IMPORTED_MODULE_77__["UploadImageDialogComponent"], _public_download_cropper_download_cropper_component__WEBPACK_IMPORTED_MODULE_78__["DownloadCropperComponent"], _public_download_cropped_image_dialog_download_cropped_image_dialog_component__WEBPACK_IMPORTED_MODULE_81__["DownloadCroppedImageDialogComponent"], _public_startup_startup_component__WEBPACK_IMPORTED_MODULE_82__["StartupComponent"], _public_set_resolution_download_dialog_set_resolution_download_dialog_component__WEBPACK_IMPORTED_MODULE_83__["SetResolutionDownloadDialogComponent"], _public_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_85__["NotFoundPageComponent"], _public_bootstrap_playground_bootstrap_playground_component__WEBPACK_IMPORTED_MODULE_86__["BootstrapPlaygroundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_66__["FileSaverModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_70__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_76__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_60__["MatExpansionModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_59__["ImageCropperModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_62__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_58__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_63__["MatRadioModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_55__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_61__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_39__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_56__["VirtualScrollerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_44__["NgxDropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_57__["SocialLoginModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["NgxsModule"].forRoot([_shared_app_state_states_images_by_tag_state__WEBPACK_IMPORTED_MODULE_12__["ImagesByTagState"], _shared_app_state_states_search_by_tag_state__WEBPACK_IMPORTED_MODULE_13__["SearchByTagState"], _shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_26__["LoginStateModel"], _shared_app_state_states_address_validation_state__WEBPACK_IMPORTED_MODULE_31__["AddressValidationState"], _shared_app_state_states_related_images_state__WEBPACK_IMPORTED_MODULE_74__["RelatedImagesState"], _shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_73__["GetImageByIdState"], _shared_app_state_states_signup_state__WEBPACK_IMPORTED_MODULE_33__["SignupState"], _shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_40__["UserDetailsState"], _shared_app_state_states_download_details_state__WEBPACK_IMPORTED_MODULE_72__["DownloadDetailsState"], _shared_app_state_states_search_by_users_state__WEBPACK_IMPORTED_MODULE_75__["SearchByUsersState"], _shared_app_state_states_images_by_user_id_state__WEBPACK_IMPORTED_MODULE_42__["ImagesByUserIdState"], _shared_app_state_states_upload_image_state__WEBPACK_IMPORTED_MODULE_46__["UploadImageState"], _shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_49__["SelectImageState"], _shared_app_state_states_logged_user_details_state__WEBPACK_IMPORTED_MODULE_51__["LoggedUserDetailsState"], _shared_app_state_states_update_user_profile_image_state__WEBPACK_IMPORTED_MODULE_54__["UpdateUserProfileImageState"], _shared_app_state_states_delete_image_state__WEBPACK_IMPORTED_MODULE_67__["DeleteImageState"], _shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_69__["CropImageState"], _shared_app_state_states_get_base64_for_downloadCropper_state__WEBPACK_IMPORTED_MODULE_79__["GetBase64ForDownloadCropperState"], _shared_app_state_states_prepare_cropped_for_download_state__WEBPACK_IMPORTED_MODULE_80__["PrepareCroppedForDownloadState"], _shared_app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_84__["RequestStatusState"]]), _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsLoggerPluginModule"].forRoot(), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_23__["NgxsReduxDevtoolsPluginModule"].forRoot(), _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_36__["NgxsRouterPluginModule"].forRoot(), _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_87__["FlexModule"]],
          exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _security_cookie_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["CookieAuthInterceptorService"],
            multi: true
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_37__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_37__["HashLocationStrategy"]
          }, {
            provide: 'SocialAuthServiceConfig',
            useValue: {
              autoLogin: false,
              providers: [{
                id: angularx_social_login__WEBPACK_IMPORTED_MODULE_57__["GoogleLoginProvider"].PROVIDER_ID,
                provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_57__["GoogleLoginProvider"](_environments_environment__WEBPACK_IMPORTED_MODULE_64__["environment"].google_id)
              }]
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/private/add-tags-dialog/add-tags-dialog.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/private/add-tags-dialog/add-tags-dialog.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AddTagsDialogComponent */

  /***/
  function srcAppPrivateAddTagsDialogAddTagsDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTagsDialogComponent", function () {
      return AddTagsDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_app_state_actions_query_tag_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/app-state/actions/query-tag-action */
    "./src/app/shared/app-state/actions/query-tag-action.ts");
    /* harmony import */


    var _shared_app_state_states_search_by_tag_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/app-state/states/search-by-tag.state */
    "./src/app/shared/app-state/states/search-by-tag.state.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/app-state/states/select-image.state */
    "./src/app/shared/app-state/states/select-image.state.ts");
    /* harmony import */


    var _shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/app-state/states/login.state.model */
    "./src/app/shared/app-state/states/login.state.model.ts");
    /* harmony import */


    var _shared_app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/app-state/actions/user-details.action */
    "./src/app/shared/app-state/actions/user-details.action.ts");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["tagInput"];
    var _c1 = ["auto"];

    function AddTagsDialogComponent_mat_chip_14_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddTagsDialogComponent_mat_chip_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function AddTagsDialogComponent_mat_chip_14_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r170);

          var tag_r167 = ctx.$implicit;

          var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r169.remove(tag_r167);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddTagsDialogComponent_mat_chip_14_mat_icon_2_Template, 2, 0, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r167 = ctx.$implicit;

        var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", ctx_r162.selectable)("removable", ctx_r162.removable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r167.tag, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r162.removable);
      }
    }

    function AddTagsDialogComponent_mat_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r171 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r171.tag);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r171.tag, " ");
      }
    }

    var AddTagsDialogComponent =
    /*#__PURE__*/
    function () {
      function AddTagsDialogComponent(store, imageService, data, dialogRef) {
        _classCallCheck(this, AddTagsDialogComponent);

        this.store = store;
        this.imageService = imageService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addChip = [];
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["COMMA"]];
        this.tagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
      }

      _createClass(AddTagsDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.searchTerm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000)).subscribe(function (value) {
            console.log(value);

            _this.store.dispatch(new _shared_app_state_actions_query_tag_action__WEBPACK_IMPORTED_MODULE_5__["QueryTagAction"](new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](value)));
          });
          this.tags$.subscribe(function (value) {
            return _this.tagList = value.result;
          });
          this.selectedImage = this.store.selectSnapshot(_shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_10__["SelectImageState"].getSelectedImageId);
        }
      }, {
        key: "search",
        value: function search(value) {}
      }, {
        key: "remove",
        value: function remove(tag) {
          var index = this.addChip.findIndex(function (tagModel) {
            return tagModel.tag === tag.tag;
          });
          if (index >= 0) this.addChip.splice(index, 1);
        }
      }, {
        key: "add",
        value: function add($event) {
          var input = $event.input;
          var value = $event.value;

          if ((value || '').trim()) {
            var selectedTag = this.store.selectSnapshot(_shared_app_state_states_search_by_tag_state__WEBPACK_IMPORTED_MODULE_6__["SearchByTagState"].getFetchedTagList).find(function (tag) {
              return tag.tag === value;
            });
            if (selectedTag) this.addChip.push(selectedTag);
          }

          if (input) {
            input.value = '';
          }

          this.tagCtrl.setValue(null); // this.tagList.push(value);
        }
      }, {
        key: "selected",
        value: function selected($event) {
          var selectedTag = this.store.selectSnapshot(_shared_app_state_states_search_by_tag_state__WEBPACK_IMPORTED_MODULE_6__["SearchByTagState"].getFetchedTagList).find(function (tag) {
            return tag.tag === $event.option.viewValue;
          });
          if (selectedTag) this.addChip.push(selectedTag);
          this.tagInput.nativeElement.value = '';
          this.tagCtrl.setValue(null);
          console.log("SEAS?");
        }
      }, {
        key: "saveTags",
        value: function saveTags() {
          var _this2 = this;

          var selectedImage = this.store.selectSnapshot(_shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_10__["SelectImageState"].getSelectedImageId);
          var userId = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_11__["LoginStateModel"].loggedUserId);
          this.imageService.setTagToImage({
            userId: userId,
            imageId: selectedImage,
            tags: this.addChip
          }).subscribe(function (value) {
            // this.store.dispatch(new Navigate(['profile', {userId: userId}]))
            _this2.store.dispatch(new _shared_app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_12__["UserDetailsActions"].GetUserDetails(userId));

            _this2.dialogRef.close(); // this.store
            //   .dispatch(new ImagesByUserIDAction(userId))
            //   .subscribe(value1 => {
            //     this.store.dispatch(new Navigate(['profile', {userId: userId}]))
            //     this.dialogRef.close();
            //   })

          });
          this.addChip = [];
          this.tagCtrl.setValue(null);
        }
      }]);

      return AddTagsDialogComponent;
    }();

    AddTagsDialogComponent.ɵfac = function AddTagsDialogComponent_Factory(t) {
      return new (t || AddTagsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_13__["ImageRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"]));
    };

    AddTagsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddTagsDialogComponent,
      selectors: [["app-add-tags-dialog"]],
      viewQuery: function AddTagsDialogComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tagInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
        }
      },
      decls: 23,
      vars: 8,
      consts: [[1, "container"], [2, "font-family", "'agave Nerd Font',sans-serif"], ["width", "380px", "height", "400px", "alt", "", 1, "img-content", 3, "src"], [1, "tag-input"], [2, "width", "100%"], ["aria-label", "Tag selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["matInput", "", "id", "search-input", "type", "text", "placeholder", "New tag", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "keyup.enter", "keyup", "matChipInputTokenEnd"], ["element", "", "tagInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]],
      template: function AddTagsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Add tags ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Image : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-chip-list", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddTagsDialogComponent_mat_chip_14_Template, 3, 4, "mat-chip", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function AddTagsDialogComponent_Template_input_keyup_enter_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r172);

            var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

            return ctx.search(_r163.value);
          })("keyup", function AddTagsDialogComponent_Template_input_keyup_15_listener($event) {
            return ctx.searchTerm$.next($event.target.value);
          })("matChipInputTokenEnd", function AddTagsDialogComponent_Template_input_matChipInputTokenEnd_15_listener($event) {
            return ctx.add($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-autocomplete", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function AddTagsDialogComponent_Template_mat_autocomplete_optionSelected_18_listener($event) {
            return ctx.selected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddTagsDialogComponent_mat_option_20_Template, 2, 2, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTagsDialogComponent_Template_button_click_21_listener() {
            return ctx.saveTags();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          var _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.data.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.addChip);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.tagCtrl)("matAutocomplete", _r165)("matChipInputFor", _r161)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tagList);
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocomplete"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChip"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"]],
      styles: [".tag-input[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9hZGQtdGFncy1kaWFsb2cvQzpcXFVzZXJzXFxwbGFuYlxccHJvZ3JhbWluZ1xcaHRsd2llbndlc3REaXBsb21Qcm9qZWt0XFxhbmd1bGFyX2phdmFfaW1hZ2VfcmVzdFxcYW5ndWxhckphdmFJbWFnZVJFU1Qvc3JjXFxhcHBcXHByaXZhdGVcXGFkZC10YWdzLWRpYWxvZ1xcYWRkLXRhZ3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcml2YXRlL2FkZC10YWdzLWRpYWxvZy9hZGQtdGFncy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJpdmF0ZS9hZGQtdGFncy1kaWFsb2cvYWRkLXRhZ3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhZy1pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLy8ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4vLyAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbi8vfVxyXG4iLCIudGFnLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_shared_app_state_states_search_by_tag_state__WEBPACK_IMPORTED_MODULE_6__["SearchByTagState"])], AddTagsDialogComponent.prototype, "tags$", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddTagsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-add-tags-dialog',
          templateUrl: './add-tags-dialog.component.html',
          styleUrls: ['./add-tags-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_13__["ImageRequestService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"]
        }];
      }, {
        tags$: [],
        tagInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['tagInput']
        }],
        matAutocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['auto']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/private/change-image-details-dialog/change-image-details-dialog.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/private/change-image-details-dialog/change-image-details-dialog.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ChangeImageDetailsDialogComponent */

  /***/
  function srcAppPrivateChangeImageDetailsDialogChangeImageDetailsDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeImageDetailsDialogComponent", function () {
      return ChangeImageDetailsDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/app-state/states/select-image.state */
    "./src/app/shared/app-state/states/select-image.state.ts");
    /* harmony import */


    var _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _serviceV2_update_image_details_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../serviceV2/update-image-details.service */
    "./src/app/serviceV2/update-image-details.service.ts");
    /* harmony import */


    var _serviceV2_delete_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../serviceV2/delete-image.service */
    "./src/app/serviceV2/delete-image.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function ChangeImageDetailsDialogComponent_div_0_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "cloud_download");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Downloads");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "visibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Views");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "thumb_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Likes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r177 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r177.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r177.downloaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+ ", img_r177.downloaded, " downloads since last month");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r177.downloaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+ ", img_r177.downloaded, " view since last month");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r177.liked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+ ", img_r177.liked, " view since last month");
      }
    }

    function ChangeImageDetailsDialogComponent_div_0_button_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangeImageDetailsDialogComponent_div_0_button_34_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r179);

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r178.saveChanges();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save changes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChangeImageDetailsDialogComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Change image details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Image : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "lock");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Private");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-slide-toggle", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ChangeImageDetailsDialogComponent_div_0_Template_mat_slide_toggle_change_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181);

          var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r180.changeStuff($event);
        })("ngModelChange", function ChangeImageDetailsDialogComponent_div_0_Template_mat_slide_toggle_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r182.tempPublic = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "public");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Public");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ChangeImageDetailsDialogComponent_div_0_div_21_Template, 37, 7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "public");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " URL link reference : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "URL to image");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChangeImageDetailsDialogComponent_div_0_Template_input_ngModelChange_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181);

          var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r183.urlReferenceValidator();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Invalid url");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ChangeImageDetailsDialogComponent_div_0_button_34_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangeImageDetailsDialogComponent_div_0_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181);

          var img_r174 = ctx.ngIf;

          var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r184.deleteImage(img_r174);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Delete image");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r173.data.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r173.tempPublic);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 5, ctx_r173.$selectedImage));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r173.urlReference);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 7, ctx_r173.$detailsChanged));
      }
    }

    var ChangeImageDetailsDialogComponent =
    /*#__PURE__*/
    function () {
      function ChangeImageDetailsDialogComponent(store, imageService, data, formBuilder, snackBar, dialogRef, updateImgService, deleteImageService) {
        _classCallCheck(this, ChangeImageDetailsDialogComponent);

        this.store = store;
        this.imageService = imageService;
        this.data = data;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.updateImgService = updateImgService;
        this.deleteImageService = deleteImageService;
        this.urlReference = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.isPublic = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.$detailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
      }

      _createClass(ChangeImageDetailsDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedImage = this.store.selectSnapshot(_shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_5__["SelectImageState"].getSelectedImage);
          this.urlReference = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedImage.linkReference === 'null' ? "" : this.selectedImage.linkReference);
          this.$selectedImage.subscribe(function (val) {
            return console.log(val["public"]);
          });
          this.isPublic = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedImage.isPublic);
          this.formGroup = this.formBuilder.group({
            urlReference: this.urlReference
          }); // this.urlReference.registerOnChange(foo => this.$detailsChanged.next(true));
          // this.isPublic.registerOnChange(foo => this.$detailsChanged.next(true));

          this.tempPublic = this.selectedImage.isPublic;
        }
      }, {
        key: "urlReferenceValidator",
        value: function urlReferenceValidator() {
          var value = this.formGroup.get('urlReference').value;
          console.log(value);
          var regExp = new RegExp("[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(.*)[.]{1}[a-zA-Z]{2,}");

          if (regExp.test(value) || value.length === 0) {
            this.$detailsChanged.next(this.selectedImage.linkReference !== value);
            this.formGroup.controls['urlReference'].setErrors(null);
          } else {
            this.formGroup.controls['urlReference'].setErrors({
              'error': true
            });
          }
        }
      }, {
        key: "changeStuff",
        value: function changeStuff(mrChange) {
          console.log();
          console.log(this.selectedImage.isPublic);
          console.log(this.tempPublic);
          if (this.tempPublic !== this.store.selectSnapshot(_shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_5__["SelectImageState"].getSelectedImage).isPublic) this.$detailsChanged.next(true);else this.$detailsChanged.next(false); // if ((mrChange.value === '1') !==
          //   this.store.selectSnapshot(SelectImageState.getSelectedImage).isPublic) {
          //   console.log(" mr. change value  " + mrChange.value === '1');
          //   this.tempPublic = mrChange.value === '1';
          //   this.$detailsChanged.next(true);
          // } else this.$detailsChanged.next(false);
          // this.isPublic = mrChange.value === '1';
        }
      }, {
        key: "changeDetails",
        value: function changeDetails(img) {
          console.log(this.selectedImage);
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          var _this3 = this;

          this.selectedImage.isPublic = this.tempPublic;
          this.selectedImage.linkReference = this.urlReference.value.length == 0 ? null : this.urlReference.value;
          console.log(this.tempPublic);
          this.updateImgService.changeImageDetails(this.selectedImage).subscribe(function (value) {
            if (value.status === 200) {
              _this3.snackBar.open("Image details update was successful.", "Details updated", {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "top"
              });

              _this3.$detailsChanged.next(false);
            }
          });
          console.log(this.selectedImage);
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(img) {
          console.log(img);
          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__["DeleteImage"](img)).subscribe(function (value) {
            return console.log(value);
          });
        }
      }]);

      return ChangeImageDetailsDialogComponent;
    }();

    ChangeImageDetailsDialogComponent.ɵfac = function ChangeImageDetailsDialogComponent_Factory(t) {
      return new (t || ChangeImageDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_8__["ImageRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_update_image_details_service__WEBPACK_IMPORTED_MODULE_10__["UpdateImageDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_delete_image_service__WEBPACK_IMPORTED_MODULE_11__["DeleteImageService"]));
    };

    ChangeImageDetailsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChangeImageDetailsDialogComponent,
      selectors: [["app-change-image-details-dialog"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [2, "font-family", "'agave Nerd Font',sans-serif"], ["id", "access-type"], ["matTooltip", "When you change to private your images can not be viewed by the community", "matTooltipPosition", "below", "disabled", "", "disableRipple", "", "mat-icon-button", "", 2, "color", "black", "margin-right", "15px", "margin-bottom", "5px"], [2, "margin-left", "20px", 3, "ngModel", "change", "ngModelChange"], ["matTooltip", "When you change to public your images can be viewed by the community", "matTooltipPosition", "below", "disabled", "", "disableRipple", "", "mat-icon-button", "", 2, "color", "black", "margin-left", "10px", "margin-bottom", "3px"], ["class", "image-details", 4, "ngIf"], ["mat-icon-button", "", "disabled", "", 1, "link_ref_label", 2, "color", "black"], ["id", "url_input", "appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "http:\\\\www.xxx.com", 3, "formControl", "ngModelChange"], ["style", "margin-right: 5px", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["color", "warn", "mat-raised-button", "", 3, "click"], [1, "image-details"], ["width", "380px", "height", "400px", "alt", "", 1, "img-content", 3, "src"], [1, "image-detail"], ["disabled", "", "disableRipple", "", "mat-icon-button", "", 2, "color", "black"], ["id", "downloaded"], ["id", "testus"], [1, "image-views"], ["id", "views"], [1, "image-likes"], ["id", "likes"], ["color", "primary", "mat-raised-button", "", 2, "margin-right", "5px", 3, "click"]],
      template: function ChangeImageDetailsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChangeImageDetailsDialogComponent_div_0_Template, 38, 9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.$selectedImage));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n#access-type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n}\n\n#access-type[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 17px;\n}\n\n#access-type[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-content: space-between;\n  align-items: center;\n}\n\n#access-type[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n#url_input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.image-detail[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 330px;\n  margin-left: 40px;\n  margin-top: 20px;\n}\n\n.image-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n.image-detail[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n\n.image-detail[_ngcontent-%COMP%]   .image-views[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.image-likes[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n#likes[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  margin-bottom: 0;\n  font-size: 27px;\n}\n\n.download-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n#views[_ngcontent-%COMP%] {\n  font-size: 27px;\n  margin-bottom: 0;\n}\n\n#downloaded[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-top: 10px;\n  font-size: 27px;\n}\n\n.image-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9jaGFuZ2UtaW1hZ2UtZGV0YWlscy1kaWFsb2cvQzpcXFVzZXJzXFxwbGFuYlxccHJvZ3JhbWluZ1xcaHRsd2llbndlc3REaXBsb21Qcm9qZWt0XFxhbmd1bGFyX2phdmFfaW1hZ2VfcmVzdFxcYW5ndWxhckphdmFJbWFnZVJFU1Qvc3JjXFxhcHBcXHByaXZhdGVcXGNoYW5nZS1pbWFnZS1kZXRhaWxzLWRpYWxvZ1xcY2hhbmdlLWltYWdlLWRldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcml2YXRlL2NoYW5nZS1pbWFnZS1kZXRhaWxzLWRpYWxvZy9jaGFuZ2UtaW1hZ2UtZGV0YWlscy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURJRTtFQUNFLGlCQUFBO0FDRko7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURHRTtFQUNFLGlCQUFBO0FDREo7O0FER0U7RUFDRSxlQUFBO0FDREo7O0FER0U7RUFDRSxnQkFBQTtBQ0RKOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wcml2YXRlL2NoYW5nZS1pbWFnZS1kZXRhaWxzLWRpYWxvZy9jaGFuZ2UtaW1hZ2UtZGV0YWlscy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcbiNhY2Nlc3MtdHlwZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgLm9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLm1hdC1zbGlkZS10b2dnbGUge1xyXG5cclxuICB9XHJcbiAgLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICB9XHJcbn1cclxuI3VybF9pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZS1kZXRhaWwge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIH1cclxuICAubWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gIH1cclxuICAuaW1hZ2Utdmlld3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZS1saWtlcyB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuI2xpa2VzIHtcclxuICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbn1cclxuXHJcbi5kb3dubG9hZC1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiN2aWV3cyB7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbiNkb3dubG9hZGVkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcblxyXG4uaW1hZ2UtZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5cclxuIiwiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4jYWNjZXNzLXR5cGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuI2FjY2Vzcy10eXBlIHAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbiNhY2Nlc3MtdHlwZSAub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jYWNjZXNzLXR5cGUgLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4jdXJsX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1kZXRhaWwge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmltYWdlLWRldGFpbCBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4uaW1hZ2UtZGV0YWlsIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cbi5pbWFnZS1kZXRhaWwgLmltYWdlLXZpZXdzIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmltYWdlLWxpa2VzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI2xpa2VzIHtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5kb3dubG9hZC1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3ZpZXdzIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4jZG93bmxvYWRlZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmltYWdlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufSJdfQ== */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_5__["SelectImageState"].getSelectedImage)], ChangeImageDetailsDialogComponent.prototype, "$selectedImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_5__["SelectImageState"].getIsPublic)], ChangeImageDetailsDialogComponent.prototype, "$isPublic", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangeImageDetailsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-change-image-details-dialog',
          templateUrl: './change-image-details-dialog.component.html',
          styleUrls: ['./change-image-details-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_8__["ImageRequestService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: _serviceV2_update_image_details_service__WEBPACK_IMPORTED_MODULE_10__["UpdateImageDetailsService"]
        }, {
          type: _serviceV2_delete_image_service__WEBPACK_IMPORTED_MODULE_11__["DeleteImageService"]
        }];
      }, {
        $selectedImage: [],
        $isPublic: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/private/edit-profile/edit-profile.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/private/edit-profile/edit-profile.component.ts ***!
    \****************************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppPrivateEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/app-state/states/login.state.model */
    "./src/app/shared/app-state/states/login.state.model.ts");
    /* harmony import */


    var _shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/app-state/states/User-details.state */
    "./src/app/shared/app-state/states/User-details.state.ts");
    /* harmony import */


    var _shared_app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/app-state/actions/user-details.action */
    "./src/app/shared/app-state/actions/user-details.action.ts");
    /* harmony import */


    var _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/app-state/actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "./node_modules/@ngxs/router-plugin/__ivy_ngcc__/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");
    /* harmony import */


    var _public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../public/search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function EditProfileComponent_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "account_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditProfileComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r98.$profile), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    var EditProfileComponent =
    /*#__PURE__*/
    function () {
      function EditProfileComponent(store, service, formBuilder) {
        _classCallCheck(this, EditProfileComponent);

        this.store = store;
        this.service = service;
        this.formBuilder = formBuilder;
        this.firstNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.lastNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.userNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var loggedUser = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_3__["LoginStateModel"].loggedInUser);
          var userDetails = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_3__["LoginStateModel"].loggedInUser);

          if (userDetails.userId === undefined) {
            this.store.dispatch(new _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_6__["AuthenticationActions"].LoggedUserDetails(loggedUser.userId)).subscribe(function (userDetailsResp) {
              _this4.initFormGroup(userDetailsResp);
            });
          } else {
            this.firstNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](userDetails.firstName);
            this.lastNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](userDetails.lastName);
            this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](userDetails.email);
            this.userNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](userDetails.username);
            this.formGroup = this.formBuilder.group({
              firstName: this.firstNameControl,
              lastName: this.lastNameControl,
              email: this.emailControl,
              userName: this.userNameControl
            });
          }

          this.firstNameControl.valueChanges.subscribe(function (value) {
            return console.log(value);
          }); // this.formGroup = this.formBuilder.group({
          //   firstName: null
          // })
          // if (loggedUser !== undefined && loggedUser !== null) {
          //   this.store.dispatch(
          //     new UserDetailsActions
          //       .GetUserDetails(loggedUser.userId)
          //   )
          // } else this.store.dispatch(new Navigate(['/login']))
        }
      }, {
        key: "initFormGroup",
        value: function initFormGroup(userDetailsResp) {
          console.log(userDetailsResp.LoggedDetails);
          this.firstNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](userDetailsResp.LoggedDetails.firstName);
          this.lastNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](userDetailsResp.LoggedDetails.lastName);
          this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](userDetailsResp.LoggedDetails.email);
          this.userNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](userDetailsResp.LoggedDetails.userName);
          this.formGroup = this.formBuilder.group({
            firstName: this.firstNameControl,
            lastName: this.lastNameControl,
            email: this.emailControl,
            userName: this.userNameControl
          });
        }
      }, {
        key: "navigateToUpload",
        value: function navigateToUpload() {
          this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_7__["Navigate"](['upload']));
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          var loggedUser = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_3__["LoginStateModel"].loggedInUser);
          var formData = new FormData();
          formData.append('file', files[0]);
          this.store.dispatch(new _shared_app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_5__["UserDetailsActions"].UploadUserProfile(loggedUser.userId, formData));
        }
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) {
      return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_9__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]));
    };

    EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditProfileComponent,
      selectors: [["app-edit-profile"]],
      decls: 45,
      vars: 11,
      consts: [[1, "container"], [1, "top"], [1, "top_left_filler"], [1, "profile-icon"], ["id", "icon", "style", "font-size: 200px; color: grey", 4, "ngIf"], ["class", "profile-img", 3, "src", 4, "ngIf"], ["id", "select-profile"], ["type", "file", 2, "display", "none", 3, "change"], [1, "form"], [1, "example-form", 3, "formGroup"], ["appearance", "fill", "id", "first", 1, "example-full-width"], ["matInput", "", "placeholder", "John", 3, "formControl"], ["matSuffix", ""], ["appearance", "fill", 1, "example-full-width"], ["readonly", "", "matInput", "", "placeholder", "Doe", 3, "formControl"], ["readonly", "", "matInput", "", "placeholder", "doe@gmail.com", 3, "formControl"], [1, "bottom"], [1, "form-2"], ["id", "userName", "appearance", "fill", 1, "example-full-width"], ["readonly", "", "matInput", "", "placeholder", "johnDoe", 3, "formControl"], [1, "actions"], [1, "change-pswd"], ["mat-raised-button", ""], ["id", "icon", 2, "font-size", "200px", "color", "grey"], [1, "profile-img", 3, "src"]],
      template: function EditProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-search-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditProfileComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditProfileComponent_img_7_Template, 2, 3, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditProfileComponent_Template_input_change_10_listener($event) {
            return ctx.handleFileInput($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Change profile image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Firstname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Lastname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Change password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, ctx.$profile));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 9, ctx.$profile));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.firstNameControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.lastNameControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.emailControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.userNameControl);
        }
      },
      directives: [_public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["SearchToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: ["@media screen and (min-width: 837px) {\n  .top[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 5% 25% 50% 20%;\n    margin-top: 5%;\n  }\n}\n@media screen and (min-width: 837px) {\n  #icon[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n}\n@media screen and (max-width: 837px) {\n  #icon[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media screen and (min-width: 837px) {\n  #select-profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: 18ch;\n    cursor: pointer;\n  }\n}\n@media screen and (max-width: 837px) {\n  #select-profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 4%;\n  }\n}\n@media screen and (min-width: 837px) {\n  .bottom[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 17% 63% 20%;\n    margin-top: 1%;\n  }\n}\n@media screen and (max-width: 837px) {\n  .bottom[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 1%;\n  }\n}\n#userName[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-items: center;\n}\n.container[_ngcontent-%COMP%]   .form-2[_ngcontent-%COMP%] {\n  grid-row: 1;\n  grid-column: 2;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (min-width: 837px) {\n  .bottom[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    grid-row: 2;\n    grid-column: 2;\n  }\n}\n@media screen and (min-width: 837px) {\n  .profile-img[_ngcontent-%COMP%] {\n    margin-left: 150px;\n    width: 175px;\n    height: 175px;\n    border-radius: 100%;\n  }\n}\n@media screen and (max-width: 837px) {\n  .profile-img[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    border-radius: 100%;\n  }\n}\n.profile-icon[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9lZGl0LXByb2ZpbGUvQzpcXFVzZXJzXFxwbGFuYlxccHJvZ3JhbWluZ1xcaHRsd2llbndlc3REaXBsb21Qcm9qZWt0XFxhbmd1bGFyX2phdmFfaW1hZ2VfcmVzdFxcYW5ndWxhckphdmFJbWFnZVJFU1Qvc3JjXFxhcHBcXHByaXZhdGVcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcml2YXRlL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxxQ0FBQTtJQUNBLGNBQUE7RUNDRjtBQUNGO0FERUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUNERjtBQUNGO0FESUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDRkY7QUFDRjtBRE1BO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0NBQUE7SUFDQSxjQUFBO0VDTEY7QUFDRjtBRFFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0VDTkY7QUFDRjtBRFVBO0VBQ0UsV0FBQTtBQ1JGO0FEV0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDUkY7QURXQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDUkY7QURXQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1JGO0FEVUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VDUEY7QUFDRjtBRFNBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUNQRjtBQUNGO0FEVUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzN3B4KSAge1xyXG4gIC50b3Age1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUyNSU1MCUyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzN3B4KSB7XHJcbiAgI2ljb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XHJcbiAgI2ljb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzdweCkge1xyXG4gICNzZWxlY3QtcHJvZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOGNoO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XHJcbiAgI3NlbGVjdC1wcm9maWxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODM3cHgpICB7XHJcbiAgLmJvdHRvbSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNyU2MyUyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSAge1xyXG4gIC5ib3R0b20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4jdXNlck5hbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5leGFtcGxlLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmZvcm0tMiB7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzdweCkge1xyXG4gIC5ib3R0b20gLmFjdGlvbnMge1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODM3cHgpIHtcclxuICAucHJvZmlsZS1pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzdweCkge1xyXG4gIC5wcm9maWxlLWltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlLWljb24ge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICByb3ctZ2FwOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLmV4YW1wbGUtZm9ybSB7XHJcbi8vICBtaW4td2lkdGg6IDE1MHB4O1xyXG4vLyAgbWF4LXdpZHRoOiA0NTBweDtcclxuLy8gIHdpZHRoOiAxMDAlO1xyXG4vL31cclxuLy9cclxuLy8uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuLy8gIHdpZHRoOiAxMDAlO1xyXG4vL31cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODM3cHgpIHtcbiAgLnRvcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDI1JSA1MCUgMjAlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzdweCkge1xuICAjaWNvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XG4gICNpY29uIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzN3B4KSB7XG4gICNzZWxlY3QtcHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tbGVmdDogMThjaDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XG4gICNzZWxlY3QtcHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzN3B4KSB7XG4gIC5ib3R0b20ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNyUgNjMlIDIwJTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODM3cHgpIHtcbiAgLmJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICB9XG59XG4jdXNlck5hbWUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciAuZXhhbXBsZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciAuZm9ybS0yIHtcbiAgZ3JpZC1yb3c6IDE7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODM3cHgpIHtcbiAgLmJvdHRvbSAuYWN0aW9ucyB7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzN3B4KSB7XG4gIC5wcm9maWxlLWltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNzVweDtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XG4gIC5wcm9maWxlLWltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgfVxufVxuLnByb2ZpbGUtaWNvbiB7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_4__["UserDetailsState"].userDetails)], EditProfileComponent.prototype, "$userDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_3__["LoginStateModel"].profileImg)], EditProfileComponent.prototype, "$profile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_3__["LoginStateModel"].loggedUserId)], EditProfileComponent.prototype, "$userId", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-edit-profile',
          templateUrl: './edit-profile.component.html',
          styleUrls: ['./edit-profile.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_9__["UserAuthenticationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      }, {
        $userDetails: [],
        $profile: [],
        $userId: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/private/file-upload-wrapper/file-upload-wrapper.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/private/file-upload-wrapper/file-upload-wrapper.component.ts ***!
    \******************************************************************************/

  /*! exports provided: FileUploadWrapperComponent */

  /***/
  function srcAppPrivateFileUploadWrapperFileUploadWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadWrapperComponent", function () {
      return FileUploadWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../file-upload/file-upload.component */
    "./src/app/private/file-upload/file-upload.component.ts");
    /* harmony import */


    var _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/app-state/actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../public/search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");

    var LoggedUserDetails = _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_3__["AuthenticationActions"].LoggedUserDetails;

    var FileUploadWrapperComponent =
    /*#__PURE__*/
    function () {
      function FileUploadWrapperComponent(dialog, route, store) {
        _classCallCheck(this, FileUploadWrapperComponent);

        this.dialog = dialog;
        this.route = route;
        this.store = store;
      }

      _createClass(FileUploadWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.paramMap.subscribe(function (param) {
            var userId = param.get('userId');

            _this5.store.dispatch(new LoggedUserDetails(userId));

            var ref = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"](); // this.dialog.open(UploadImageDialogComponent,
            //   {
            //     width: '900px',
            //     height: '750px',
            //     disableClose: true,
            //     autoFocus: false,
            //     data: userId
            //   });

            _this5.dialog.open(_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__["FileUploadComponent"], {
              width: '1300px',
              height: '950px',
              disableClose: true,
              autoFocus: false,
              data: userId
            });
          });
        }
      }]);

      return FileUploadWrapperComponent;
    }();

    FileUploadWrapperComponent.ɵfac = function FileUploadWrapperComponent_Factory(t) {
      return new (t || FileUploadWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    FileUploadWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileUploadWrapperComponent,
      selectors: [["app-file-upload-wrapper"]],
      decls: 1,
      vars: 0,
      template: function FileUploadWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-toolbar");
        }
      },
      directives: [_public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchToolbarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZmlsZS11cGxvYWQtd3JhcHBlci9maWxlLXVwbG9hZC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-file-upload-wrapper',
          templateUrl: './file-upload-wrapper.component.html',
          styleUrls: ['./file-upload-wrapper.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/private/file-upload/file-upload.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/private/file-upload/file-upload.component.ts ***!
    \**************************************************************/

  /*! exports provided: FileUploadComponent */

  /***/
  function srcAppPrivateFileUploadFileUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
      return FileUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var _shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/app-state/states/login.state.model */
    "./src/app/shared/app-state/states/login.state.model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "./node_modules/@ngxs/router-plugin/__ivy_ngcc__/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../image-cropper/image-cropper.component */
    "./src/app/private/image-cropper/image-cropper.component.ts");
    /* harmony import */


    var _shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/app-state/states/crop-image.state */
    "./src/app/shared/app-state/states/crop-image.state.ts");
    /* harmony import */


    var _shared_util_Base64ToBlobConverter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/util/Base64ToBlobConverter */
    "./src/app/shared/util/Base64ToBlobConverter.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _serviceV2_image_upload_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../serviceV2/image-upload.service */
    "./src/app/serviceV2/image-upload.service.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var ngx_dropzone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-dropzone */
    "./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function FileUploadComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Select image");
      }
    }

    function FileUploadComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "add_photo_alternate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FileUploadComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Validating image... This can take a while..");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FileUploadComponent_h1_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Drag and drop a file");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FileUploadComponent_ngx_dropzone_preview_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-preview", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function FileUploadComponent_ngx_dropzone_preview_47_Template_ngx_dropzone_preview_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82);

          var f_r80 = ctx.$implicit;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r81.onRemove(f_r80);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-dropzone-label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r80 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("removable", true)("file", f_r80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", f_r80.name, " (", f_r80.type, ")");
      }
    }

    function FileUploadComponent_ng_template_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Edit image for your gallery view");
      }
    }

    function FileUploadComponent_div_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 39);
      }
    }

    function FileUploadComponent_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r72.$imageData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function FileUploadComponent_ng_template_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Edit image for the download view");
      }
    }

    function FileUploadComponent_div_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 39);
      }
    }

    function FileUploadComponent_div_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r75.$croppedDownloadViewImage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function FileUploadComponent_ng_template_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Upload file");
      }
    }

    function FileUploadComponent_button_86_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileUploadComponent_button_86_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r83.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FileUploadComponent_button_88_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileUploadComponent_button_88_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r85.upload();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FileUploadComponent_mat_spinner_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
      }
    }

    var FileUploadComponent =
    /*#__PURE__*/
    function () {
      function FileUploadComponent(store, dialogRef, router, location, snackBar, dialog, userId, formBuilder, http, dialogRef2, uploadService) {
        _classCallCheck(this, FileUploadComponent);

        this.store = store;
        this.dialogRef = dialogRef;
        this.router = router;
        this.location = location;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.userId = userId;
        this.formBuilder = formBuilder;
        this.http = http;
        this.dialogRef2 = dialogRef2;
        this.uploadService = uploadService;
        this.isLinear = true;
        this.uploadSuccess = false;
        this.files = [];
        this.spinner = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.isValidating = false;
        this.showCropper = false;
        this.isPublic = true;
        this.fooControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](false);
        this.imageUrlReference = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('');
        this.isValidToUpload = false;
        this.displayCroppedImage = false;
        this.formGroup = this.formBuilder.group({
          url: this.imageUrlReference
        });
        this.getDimensionFromCropper = this.formBuilder.group({
          isPublic: this.fooControl
        });
        this.firstFormGroup = this.formBuilder.group({
          uploadCtr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
      }

      _createClass(FileUploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeStuff",
        value: function changeStuff(mrChange) {
          console.log(mrChange.value);
          this.isPublic = mrChange.value === '1';
        }
      }, {
        key: "validate",
        value: function validate(value) {
          var regExp = new RegExp("[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(.*)[.]{1}[a-zA-Z]{2,}");
          return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
        }
      }, {
        key: "urlReferenceValidator",
        value: function urlReferenceValidator() {
          var value = this.formGroup.get('url').value;
          var regExp = new RegExp("[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(.*)[.]{1}[a-zA-Z]{2,}");

          if (regExp.test(value)) {
            this.formGroup.controls['url'].setErrors(null);
          } else {
            this.formGroup.controls['url'].setErrors({
              'error': true
            });
          }
        }
      }, {
        key: "onSelect",
        value: function onSelect($event) {
          var _this6 = this;

          this.isValidating = true;
          var typeIndex = $event.addedFiles[0].name.lastIndexOf('.');
          var type = $event.addedFiles[0].name.substr(typeIndex + 1);

          if ((type === 'jpg' || type === 'png') && $event.addedFiles[0].size <= 5000000) {
            var request = new FormData();
            request.append('file', $event.addedFiles[0]);
            this.uploadService.validateImage($event.addedFiles[0]).subscribe(function (value) {
              var message = value.message;
              console.log(value.status);

              if (value.status === 200) {
                var _this6$files;

                (_this6$files = _this6.files).push.apply(_this6$files, _toConsumableArray($event.addedFiles));

                _this6.isValidToUpload = true;
                _this6.isLinear = true;
                _this6.uploadSuccess = true;
                _this6.isValidating = false; // getting uploaded file and passing it to crop image

                var reader = new FileReader();

                reader.onload = function (e) {
                  var base64Temp = e.target.result;
                  _this6.croppedGalleryImage = base64Temp;
                  _this6.croppedDownloadViewImage = base64Temp;

                  _this6.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["CropDownloadViewImage"](_this6.croppedGalleryImage));

                  _this6.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["CropGalleryViewImage"](_this6.croppedDownloadViewImage)).subscribe(function (value) {// open imageCropper dialog(component) to let user decide
                    // which part of th uploaded image should be displayed
                    // this.dialog.open(ImageCropperComponent,{
                    //   data: e.target.result,
                    //   height: '1200px',
                    //   width: '1400px'
                    // })
                  });
                };

                reader.readAsDataURL($event.addedFiles[0]);
              } else {
                _this6.onRemove($event.addedFiles[0]);

                _this6.isValidToUpload = false;
                console.log(_this6.isValidToUpload);

                _this6.snackBar.open(message, "Validation was unsuccessful", {
                  duration: 3000,
                  horizontalPosition: "center",
                  verticalPosition: "top"
                });
              }
            });
          }
        }
      }, {
        key: "cropImageForDownloadView",
        value: function cropImageForDownloadView() {
          this.dialog.open(_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_8__["ImageCropperComponent"], {
            data: {
              img: this.store.selectSnapshot(_shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_9__["CropImageState"].getCroppedDownloadImage),
              width: 1200,
              height: 670,
              viewName: 'Download'
            },
            height: '1000px'
          });
        }
      }, {
        key: "cropImageForGallery",
        value: function cropImageForGallery() {
          this.dialog.open(_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_8__["ImageCropperComponent"], {
            data: {
              img: this.store.selectSnapshot(_shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_9__["CropImageState"].getData),
              width: 500,
              height: 460,
              viewName: 'Gallery'
            },
            height: '1000px'
          });
          this.displayCroppedImage = true; // this.store.dispatch(new CropGalleryViewImage(this.croppedGalleryImage))
          //   .subscribe(value => console.log(value));
        }
      }, {
        key: "onRemove",
        value: function onRemove(f) {
          this.files.splice(this.files.indexOf(f), 1);
          this.isValidToUpload = false;
          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["CropGalleryViewImage"](null));
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this7 = this;

          this.spinner.next(true);
          var loggedInUserModel = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_4__["LoginStateModel"].loggedInUser);
          var request = new FormData();
          request.append('file', this.files[0]);
          var isP = this.isPublic ? 'true' : 'false';
          var galleryBase64 = this.store.selectSnapshot(_shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_9__["CropImageState"].getData); //cropped image to file(base64 to file)

          var imageBlob = _shared_util_Base64ToBlobConverter__WEBPACK_IMPORTED_MODULE_10__["Base64ToBlobConverter"].dataURItoBlob(galleryBase64.substr(galleryBase64.lastIndexOf(',') + 1));

          var imageFile = new File([imageBlob], "cropped-" + this.files[0].name, {
            type: 'image/jpeg'
          });
          var downloadBase64 = this.store.selectSnapshot(_shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_9__["CropImageState"].getCroppedDownloadImage);

          var downloadBlob = _shared_util_Base64ToBlobConverter__WEBPACK_IMPORTED_MODULE_10__["Base64ToBlobConverter"].dataURItoBlob(downloadBase64.substr(downloadBase64.lastIndexOf(',') + 1));

          var downloadImageFile = new File([downloadBlob], "cropped-" + this.files[0].name, {
            type: 'image/jpeg'
          }); // setting response object with needed values

          var uploadModel = {
            userId: loggedInUserModel.userId,
            orgFile: this.files[0],
            isPublic: isP,
            urlReference: this.validate(this.imageUrlReference.value) === true ? this.imageUrlReference.value : null,
            file: request,
            galleryFile: imageFile,
            downloadFile: downloadImageFile
          }; // sending request

          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["UploadImage"](uploadModel)).subscribe(function (value1) {
            request = null;
            _this7.files = [];
            _this7.isValidToUpload = false;

            if (value1.Upload.status) {
              _this7.snackBar.open("File uploaded successfully", "File uploaded", {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "top"
              });

              _this7.spinner.next(false);

              _this7.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["CropGalleryViewImage"](null));
            } // window.location.reload();

          }, function (error) {
            _this7.spinner.next(false);

            _this7.snackBar.open(error.error, "File uploaded error", {
              duration: 3000,
              horizontalPosition: "center",
              verticalPosition: "top",
              panelClass: ['uploadError']
            });

            request = null;
            _this7.files = [];
            _this7.isValidToUpload = false;
            _this7.imageUrlReference = null;

            _this7.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["CropGalleryViewImage"](null));
          });
        }
      }, {
        key: "close",
        value: function close() {
          var userId = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_4__["LoginStateModel"].loggedUserId); // this.router.navigate(['profile'])

          this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_6__["Navigate"](['profile', {
            userId: userId
          }]));
          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["CropGalleryViewImage"](null));
          this.dialogRef.close();
        }
      }, {
        key: "imageCropped",
        value: function imageCropped($event) {
          console.log("dfghdfjkgh");
          this.croppedGalleryImage = $event.base64;
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {
          console.log("dfghdfjkgh666666666");
          this.showCropper = true;
          console.log('Image loaded');
        }
      }, {
        key: "cropperReady",
        value: function cropperReady($event) {
          console.log("what");
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {}
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent($event) {
          this.imageChangedEvent = $event;
        }
      }]);

      return FileUploadComponent;
    }();

    FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
      return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_upload_service__WEBPACK_IMPORTED_MODULE_16__["ImageUploadService"]));
    };

    FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FileUploadComponent,
      selectors: [["app-file-upload"]],
      outputs: {
        change: "change"
      },
      decls: 92,
      vars: 29,
      consts: [["id", "header"], [3, "linear"], ["stepper", ""], [3, "completed", "stepControl"], ["matStepLabel", ""], ["id", "access-type"], ["aria-label", "Select an option", 3, "formControl", "change"], ["value", "1", 3, "checked"], [1, "options"], ["value", "0"], [1, "drop-zone", 3, "change"], [1, "drop-label"], ["class", "label-content", 4, "ngIf"], ["style", "display: flex; flex-direction: column; justify-content: center; align-items: center", 4, "ngIf"], [1, "label-header"], [4, "ngIf"], [1, "label-description"], [1, "list-item"], ["class", "preview", 3, "removable", "file", "removed", 4, "ngFor", "ngForOf"], [1, "link_ref_label"], ["id", "url_input", "appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "http:\\\\www.xxx.com", 3, "formControl", "ngModelChange"], ["mat-button", "", "matTooltip", "Select the part of your image which will be displayed as an thumbnail.", "matTooltipPosition", "below", "mat-raised-button", "", 3, "disabled", "click"], [1, "cropped-image"], ["style", "width: 500px; height: 460px", 4, "ngIf"], ["class", "cropped", 4, "ngIf"], ["mat-button", "", "matTooltip", "Select the part of your image which will be displayed in the download view.", "matTooltipPosition", "below", "mat-raised-button", "", 3, "disabled", "click"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""], [1, "action", 2, "margin-top", "100px"], ["mat-raised-button", "", "style", "margin-right: 5px", "color", "primary", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "mat-flat-button", "", 3, "click", 4, "ngIf"], [1, "label-content"], ["mat-icon-button", ""], [2, "font-size", "100px"], [2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center"], [2, "margin-top", "20px"], [1, "preview", 3, "removable", "file", "removed"], [1, "label-header", 2, "color", "black"], [2, "width", "500px", "height", "460px"], [1, "cropped"], ["matTooltip", "This is how your image will look like as a thumbnail.", "matTooltipPosition", "below", 3, "src"], ["mat-raised-button", "", "color", "primary", "mat-flat-button", "", 2, "margin-right", "5px", 3, "click"], ["mat-raised-button", "", "mat-flat-button", "", 3, "click"]],
      template: function FileUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Publish to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SpecShots");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-horizontal-stepper", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-step", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FileUploadComponent_ng_template_7_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Choose Access type :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-radio-group", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FileUploadComponent_Template_mat_radio_group_change_12_listener($event) {
            return ctx.changeStuff($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-radio-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "public");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Public ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-radio-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "lock");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Private ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ngx-dropzone", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FileUploadComponent_Template_ngx_dropzone_change_23_listener($event) {
            return ctx.onSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-dropzone-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, FileUploadComponent_div_25_Template, 4, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FileUploadComponent_div_26_Template, 4, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-dropzone-label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, FileUploadComponent_h1_28_Template, 2, 0, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-dropzone-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "High quality photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Only upload photos you ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "own the rights to");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Respect the intellectual property of others");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Photos are ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "clear and original");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Zero tolerance for nudity, violence or hate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Read the provider terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, FileUploadComponent_ngx_dropzone_preview_47_Template, 3, 4, "ngx-dropzone-preview", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "public");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " URL link reference : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "URL to image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FileUploadComponent_Template_input_ngModelChange_55_listener() {
            return ctx.urlReferenceValidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Invalid url");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, FileUploadComponent_ng_template_59_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_61_listener() {
            return ctx.cropImageForGallery();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, FileUploadComponent_div_65_Template, 1, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, FileUploadComponent_div_66_Template, 3, 3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, FileUploadComponent_ng_template_68_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_70_listener() {
            return ctx.cropImageForDownloadView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, FileUploadComponent_div_74_Template, 1, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, FileUploadComponent_div_75_Template, 3, 3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, FileUploadComponent_ng_template_78_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, FileUploadComponent_button_86_Template, 2, 0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](87, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, FileUploadComponent_button_88_Template, 2, 0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](89, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, FileUploadComponent_mat_spinner_90_Template, 1, 0, "mat-spinner", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](91, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", ctx.isLinear);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("completed", ctx.uploadSuccess)("stepControl", ctx.firstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.fooControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isValidating == false && ctx.uploadSuccess == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isValidating == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isValidating == false && ctx.uploadSuccess == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.imageUrlReference);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 19, ctx.$imageData));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.displayCroppedImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayCroppedImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](71, 21, ctx.$imageData));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.displayCroppedImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayCroppedImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](87, 23, ctx.spinner));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isValidToUpload && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](89, 25, ctx.spinner));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](91, 27, ctx.spinner));
        }
      },
      directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepLabel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_20__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_20__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperNext"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDivider"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatSpinner"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_20__["NgxDropzonePreviewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
      styles: ["#header[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-bottom: 5px;\n}\n\n#link_ref[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin-top: 15px;\n}\n\n.cropped-image[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.cropped-image[_ngcontent-%COMP%]   .crop-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.cropped-image[_ngcontent-%COMP%]   .cropped[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.link_ref_label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 17px;\n}\n\n#access-type[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n}\n\n#access-type[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 17px;\n}\n\n#access-type[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-content: space-between;\n  align-items: center;\n}\n\n#access-type[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n#url_input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.drop-zone[_ngcontent-%COMP%] {\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.drop-zone[_ngcontent-%COMP%] {\n  height: 300px;\n  display: grid;\n  grid-template-columns: 100%;\n  justify-content: center;\n}\n\n.label-header[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n\n.label-content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-right: 70px;\n}\n\n.drop-label[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  width: 270px;\n  text-align: left;\n  margin-left: 10px;\n  font-size: 12px;\n}\n\n@media screen and (min-width: 837px) {\n  .label-description[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 30% 33% 30%;\n    justify-content: center;\n  }\n}\n\n@media screen and (max-width: 1110px) {\n  .label-description[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 100%;\n    justify-content: center;\n  }\n}\n\n.action[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9maWxlLXVwbG9hZC9DOlxcVXNlcnNcXHBsYW5iXFxwcm9ncmFtaW5nXFxodGx3aWVud2VzdERpcGxvbVByb2pla3RcXGFuZ3VsYXJfamF2YV9pbWFnZV9yZXN0XFxhbmd1bGFySmF2YUltYWdlUkVTVC9zcmNcXGFwcFxccHJpdmF0ZVxcZmlsZS11cGxvYWRcXGZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcml2YXRlL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURTQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDTkY7O0FET0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNMSjs7QURPRTtFQUNFLGdCQUFBO0FDTEo7O0FEU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTkY7O0FEV0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUkY7O0FEU0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNQSjs7QURTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURTRTtFQUNFLGlCQUFBO0FDUEo7O0FEV0E7RUFDRSxXQUFBO0FDUkY7O0FEaUJBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNkRjs7QURrQkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUNmRjs7QUQ0QkE7RUFDRSxjQUFBO0FDekJGOztBRDRCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN6QkY7O0FENEJBO0VBQ0UsYUFBQTtBQ3pCRjs7QUQ0QkE7RUFDRSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUMxQkY7O0FEa0NBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0NBQUE7SUFDQSx1QkFBQTtFQy9CRjtBQUNGOztBRGtDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsdUJBQUE7RUNoQ0Y7QUFDRjs7QURtQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ2pDRiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4vLy5jcm9wcGVyIHtcclxuLy8gIHdpZHRoOiAzMDBweDtcclxuLy8gIGhlaWdodDogMzAwcHg7XHJcbi8vICBkaXNwbGF5OiBmbGV4O1xyXG4vL31cclxuXHJcbiNsaW5rX3JlZiB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uY3JvcHBlZC1pbWFnZSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLmNyb3AtaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5jcm9wcGVkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlua19yZWZfbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcblxyXG5cclxuI2FjY2Vzcy10eXBlIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICAub3B0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuI3VybF9pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLmxpbmtfcmVmZXJlbmNlIHtcclxuLy8gIGRpc3BsYXk6IGZsZXg7XHJcbi8vICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy99XHJcblxyXG4uZHJvcC16b25lIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZHJvcC16b25lIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLy8uY29udGFpbmVyIHtcclxuLy8gIGRpc3BsYXk6IGZsZXg7XHJcbi8vICBtaW4taGVpZ2h0OiA0NjBweDtcclxuLy8gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy9cclxuLy99XHJcblxyXG4ubGFiZWwtaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuLmxhYmVsLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uZHJvcC1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxpc3QtaXRlbSB7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG5cclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbi5saXN0IHtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzN3B4KSB7XHJcbiAgLmxhYmVsLWRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJTMzJTMwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTExMHB4KSB7XHJcbiAgLmxhYmVsLWRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuIiwiI2hlYWRlciB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4jbGlua19yZWYge1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jcm9wcGVkLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jcm9wcGVkLWltYWdlIC5jcm9wLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jcm9wcGVkLWltYWdlIC5jcm9wcGVkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxpbmtfcmVmX2xhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jYWNjZXNzLXR5cGUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuI2FjY2Vzcy10eXBlIHAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbiNhY2Nlc3MtdHlwZSAub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jYWNjZXNzLXR5cGUgLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4jdXJsX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kcm9wLXpvbmUge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHJvcC16b25lIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxhYmVsLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDQlO1xufVxuXG4ubGFiZWwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmRyb3AtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgd2lkdGg6IDI3MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzdweCkge1xuICAubGFiZWwtZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzMlIDMwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTExMHB4KSB7XG4gIC5sYWJlbC1kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5hY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59Il19 */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_4__["LoginStateModel"].loggedInUser)], FileUploadComponent.prototype, "$loggedUser", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_9__["CropImageState"].getData)], FileUploadComponent.prototype, "$imageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_9__["CropImageState"].getCroppedDownloadImage)], FileUploadComponent.prototype, "$croppedDownloadViewImage", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-file-upload',
          templateUrl: './file-upload.component.html',
          styleUrls: ['./file-upload.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: _serviceV2_image_upload_service__WEBPACK_IMPORTED_MODULE_16__["ImageUploadService"]
        }];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        $loggedUser: [],
        $imageData: [],
        $croppedDownloadViewImage: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/private/image-cropper/image-cropper.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/private/image-cropper/image-cropper.component.ts ***!
    \******************************************************************/

  /*! exports provided: ImageCropperComponent */

  /***/
  function srcAppPrivateImageCropperImageCropperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function () {
      return ImageCropperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/app-state/states/crop-image.state */
    "./src/app/shared/app-state/states/crop-image.state.ts");
    /* harmony import */


    var _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    var ImageCropperComponent =
    /*#__PURE__*/
    function () {
      function ImageCropperComponent($event, dialogRef, store) {
        _classCallCheck(this, ImageCropperComponent);

        this.$event = $event;
        this.dialogRef = dialogRef;
        this.store = store;
        this.showCropper = false;
      }

      _createClass(ImageCropperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.croppedImage = this.$event.img;
          this.width = this.$event.width;
          console.log(this.width);
          this.height = this.$event.height;
          console.log(this.height);
          this.cropForView = this.$event.viewName;
        }
      }, {
        key: "imageCropped",
        value: function imageCropped($event) {
          if (this.cropForView === 'Gallery') this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_5__["CropGalleryViewImage"]($event.base64));else this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_5__["CropDownloadViewImage"]($event.base64));
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {
          console.log("dfghdfjkgh666666666");
          this.showCropper = true;
          console.log('Image loaded');
        }
      }, {
        key: "cropperReady",
        value: function cropperReady($event) {}
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {}
      }, {
        key: "close",
        value: function close() {
          // this.store.dispatch(new CropGalleryViewImage(this.cropped2));
          this.dialogRef.close(this.cropped2);
        }
      }]);

      return ImageCropperComponent;
    }();

    ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
      return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    ImageCropperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageCropperComponent,
      selectors: [["app-image-cropper"]],
      decls: 7,
      vars: 6,
      consts: [[2, "margin-bottom", "10px", "display", "flex", "flex-direction", "row", "align-content", "center", "align-items", "center"], ["color", "primary", "mat-raised-button", "", 2, "margin-left", "10px", 3, "click"], [1, "cropper"], [3, "imageBase64", "maintainAspectRatio", "resizeToWidth", "resizeToHeight", "cropperStaticWidth", "cropperStaticHeight", "imageCropped"]],
      template: function ImageCropperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select the part of the image which should be displayed as an thumbnail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_3_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Crop image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "image-cropper", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCropped", function ImageCropperComponent_Template_image_cropper_imageCropped_6_listener($event) {
            return ctx.imageCropped($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageBase64", ctx.croppedImage)("maintainAspectRatio", true)("resizeToWidth", ctx.width)("resizeToHeight", ctx.height)("cropperStaticWidth", ctx.width)("cropperStaticHeight", ctx.height);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvaW1hZ2UtY3JvcHBlci9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_shared_app_state_states_crop_image_state__WEBPACK_IMPORTED_MODULE_4__["CropImageState"].getData)], ImageCropperComponent.prototype, "$imageData", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageCropperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-image-cropper',
          templateUrl: './image-cropper.component.html',
          styleUrls: ['./image-cropper.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, {
        $imageData: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/private/upload-image-dialog/upload-image-dialog.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/private/upload-image-dialog/upload-image-dialog.component.ts ***!
    \******************************************************************************/

  /*! exports provided: UploadImageDialogComponent */

  /***/
  function srcAppPrivateUploadImageDialogUploadImageDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadImageDialogComponent", function () {
      return UploadImageDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function UploadImageDialogComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
      }
    }

    function UploadImageDialogComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
      }
    }

    function UploadImageDialogComponent_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
      }
    }

    var UploadImageDialogComponent =
    /*#__PURE__*/
    function () {
      function UploadImageDialogComponent() {
        _classCallCheck(this, UploadImageDialogComponent);

        this.isLinear = false;
      }

      _createClass(UploadImageDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UploadImageDialogComponent;
    }();

    UploadImageDialogComponent.ɵfac = function UploadImageDialogComponent_Factory(t) {
      return new (t || UploadImageDialogComponent)();
    };

    UploadImageDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UploadImageDialogComponent,
      selectors: [["app-upload-image-dialog"]],
      decls: 37,
      vars: 7,
      consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "completed", "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], [3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]],
      template: function UploadImageDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImageDialogComponent_Template_button_click_0_listener() {
            return ctx.isLinear = !ctx.isLinear;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-vertical-stepper", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UploadImageDialogComponent_ng_template_6_Template, 1, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-step", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UploadImageDialogComponent_ng_template_16_Template, 1, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UploadImageDialogComponent_ng_template_27_Template, 1, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "You are now done.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImageDialogComponent_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return _r87.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "FOOO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", ctx.isLinear)("stepControl", ctx.firstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperPrevious"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvdXBsb2FkLWltYWdlLWRpYWxvZy91cGxvYWQtaW1hZ2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadImageDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-upload-image-dialog',
          templateUrl: './upload-image-dialog.component.html',
          styleUrls: ['./upload-image-dialog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/public/bootstrap-playground/bootstrap-playground.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/public/bootstrap-playground/bootstrap-playground.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: BootstrapPlaygroundComponent */

  /***/
  function srcAppPublicBootstrapPlaygroundBootstrapPlaygroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapPlaygroundComponent", function () {
      return BootstrapPlaygroundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var BootstrapPlaygroundComponent =
    /*#__PURE__*/
    function () {
      function BootstrapPlaygroundComponent() {
        _classCallCheck(this, BootstrapPlaygroundComponent);
      }

      _createClass(BootstrapPlaygroundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BootstrapPlaygroundComponent;
    }();

    BootstrapPlaygroundComponent.ɵfac = function BootstrapPlaygroundComponent_Factory(t) {
      return new (t || BootstrapPlaygroundComponent)();
    };

    BootstrapPlaygroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BootstrapPlaygroundComponent,
      selectors: [["app-bootstrap-playground"]],
      decls: 19,
      vars: 0,
      consts: [[1, "brand"], ["id", "android"], [2, "margin-top", "5px"], ["id", "donut", 2, "margin-left", "10px"], [2, "text-align", "center", "margin-top", "5px"], ["id", "widget", 2, "margin-left", "10px"], ["id", "api_name"], [1, "form-ang"], ["type", "text", "matInput", "", 1, "search"], [1, "profile_info"], [2, "color", "white"]],
      template: function BootstrapPlaygroundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "donut_small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "widgets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to SpecShots");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " android ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"]],
      styles: ["[_nghost-%COMP%] {\n  background-color: #3f51b5;\n  display: grid;\n  grid-template: \"brand        main       profile\" 120px/1fr 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n  place-items: center;\n  place-content: center;\n  border-bottom: 0.8px solid black;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11), 0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11);\n}\n\n.brand[_ngcontent-%COMP%] {\n  grid-area: brand;\n  display: grid;\n  grid-template: \"android   donut   widget   api_name\" auto;\n  place-items: center;\n  grid-column-gap: 5px;\n}\n\n.brand[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: white;\n}\n\n#android[_ngcontent-%COMP%] {\n  grid-area: android;\n}\n\n#donut[_ngcontent-%COMP%] {\n  grid-area: donut;\n}\n\n#widget[_ngcontent-%COMP%] {\n  grid-area: widget;\n}\n\n#api_name[_ngcontent-%COMP%] {\n  grid-area: api_name;\n}\n\n.form-ang[_ngcontent-%COMP%] {\n  grid-area: main;\n  display: grid;\n  grid-template: \"search\";\n  place-items: center;\n}\n\n.search[_ngcontent-%COMP%] {\n  grid-area: search;\n  width: 350px;\n  font-size: 20px;\n  border-radius: 20px;\n  outline: none;\n}\n\n.ang-form[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.profile_info[_ngcontent-%COMP%] {\n  grid-area: profile;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2Jvb3RzdHJhcC1wbGF5Z3JvdW5kL0M6XFxVc2Vyc1xccGxhbmJcXHByb2dyYW1pbmdcXGh0bHdpZW53ZXN0RGlwbG9tUHJvamVrdFxcYW5ndWxhcl9qYXZhX2ltYWdlX3Jlc3RcXGFuZ3VsYXJKYXZhSW1hZ2VSRVNUL3NyY1xcYXBwXFxwdWJsaWNcXGJvb3RzdHJhcC1wbGF5Z3JvdW5kXFxib290c3RyYXAtcGxheWdyb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljL2Jvb3RzdHJhcC1wbGF5Z3JvdW5kL2Jvb3RzdHJhcC1wbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBRUEsa0VBQ0U7RUFFQSxxQkFBQTtFQUNGLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0tBQUE7QUNGRjs7QURTQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlEQUNFO0VBQ0YsbUJBQUE7RUFDQSxvQkFBQTtBQ1BGOztBRFdBO0VBQ0UsWUFBQTtBQ1JGOztBRFdBO0VBQ0Usa0JBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSxpQkFBQTtBQ1JGOztBRFdBO0VBQ0UsbUJBQUE7QUNSRjs7QURXQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQ0U7RUFDRixtQkFBQTtBQ1RGOztBRFlBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ1RGOztBRGFBO0VBQ0UsWUFBQTtBQ1ZGOztBRGFBO0VBQ0Usa0JBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9ib290c3RyYXAtcGxheWdyb3VuZC9ib290c3RyYXAtcGxheWdyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gIGdyaWQtdGVtcGxhdGU6XHJcbiAgICBcImJyYW5kICAgICAgICBtYWluICAgICAgIHByb2ZpbGVcIiAxMjBweFxyXG4gICAgLyAxZnIgICAgICAgICAxZnIgICAgICAgIDFmcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDAuOHB4IHNvbGlkIGJsYWNrO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcclxufVxyXG5cclxuLmJyYW5ke1xyXG4gIGdyaWQtYXJlYTogYnJhbmQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOlxyXG4gICAgXCJhbmRyb2lkICAgZG9udXQgICB3aWRnZXQgICBhcGlfbmFtZVwiIGF1dG87XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBncmlkLWNvbHVtbi1nYXA6IDVweDtcclxuXHJcbn1cclxuXHJcbi5icmFuZCA+ICoge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2FuZHJvaWQge1xyXG4gIGdyaWQtYXJlYTogYW5kcm9pZDtcclxufVxyXG5cclxuI2RvbnV0IHtcclxuICBncmlkLWFyZWE6IGRvbnV0O1xyXG59XHJcblxyXG4jd2lkZ2V0IHtcclxuICBncmlkLWFyZWE6IHdpZGdldDtcclxufVxyXG5cclxuI2FwaV9uYW1lIHtcclxuICBncmlkLWFyZWE6IGFwaV9uYW1lO1xyXG59XHJcblxyXG4uZm9ybS1hbmcge1xyXG4gIGdyaWQtYXJlYTogbWFpbjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6XHJcbiAgICBcInNlYXJjaFwiO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIGdyaWQtYXJlYTogc2VhcmNoO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxufVxyXG5cclxuLmFuZy1mb3JtIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX2luZm8ge1xyXG4gIGdyaWQtYXJlYTogcHJvZmlsZTtcclxuXHJcbn1cclxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiBcImJyYW5kICAgICAgICBtYWluICAgICAgIHByb2ZpbGVcIiAxMjBweC8xZnIgMWZyIDFmcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDAuOHB4IHNvbGlkIGJsYWNrO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjExKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xufVxuXG4uYnJhbmQge1xuICBncmlkLWFyZWE6IGJyYW5kO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiBcImFuZHJvaWQgICBkb251dCAgIHdpZGdldCAgIGFwaV9uYW1lXCIgYXV0bztcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XG59XG5cbi5icmFuZCA+ICoge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNhbmRyb2lkIHtcbiAgZ3JpZC1hcmVhOiBhbmRyb2lkO1xufVxuXG4jZG9udXQge1xuICBncmlkLWFyZWE6IGRvbnV0O1xufVxuXG4jd2lkZ2V0IHtcbiAgZ3JpZC1hcmVhOiB3aWRnZXQ7XG59XG5cbiNhcGlfbmFtZSB7XG4gIGdyaWQtYXJlYTogYXBpX25hbWU7XG59XG5cbi5mb3JtLWFuZyB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogXCJzZWFyY2hcIjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaCB7XG4gIGdyaWQtYXJlYTogc2VhcmNoO1xuICB3aWR0aDogMzUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmFuZy1mb3JtIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ucHJvZmlsZV9pbmZvIHtcbiAgZ3JpZC1hcmVhOiBwcm9maWxlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapPlaygroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bootstrap-playground',
          templateUrl: './bootstrap-playground.component.html',
          styleUrls: ['./bootstrap-playground.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/public/download-cropped-image-dialog/download-cropped-image-dialog.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/public/download-cropped-image-dialog/download-cropped-image-dialog.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: DownloadCroppedImageDialogComponent */

  /***/
  function srcAppPublicDownloadCroppedImageDialogDownloadCroppedImageDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadCroppedImageDialogComponent", function () {
      return DownloadCroppedImageDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_states_prepare_cropped_for_download_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/app-state/states/prepare-cropped-for-download.state */
    "./src/app/shared/app-state/states/prepare-cropped-for-download.state.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function DownloadCroppedImageDialogComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "download");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var res_r102 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", res_r102, " ");
      }
    }

    function DownloadCroppedImageDialogComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DownloadCroppedImageDialogComponent_div_0_div_1_Template, 5, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var croppedValues_r100 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", croppedValues_r100.possibleResolutions);
      }
    }

    var DownloadCroppedImageDialogComponent =
    /*#__PURE__*/
    function () {
      function DownloadCroppedImageDialogComponent() {
        _classCallCheck(this, DownloadCroppedImageDialogComponent);
      }

      _createClass(DownloadCroppedImageDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DownloadCroppedImageDialogComponent;
    }();

    DownloadCroppedImageDialogComponent.ɵfac = function DownloadCroppedImageDialogComponent_Factory(t) {
      return new (t || DownloadCroppedImageDialogComponent)();
    };

    DownloadCroppedImageDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DownloadCroppedImageDialogComponent,
      selectors: [["app-download-cropped-image-dialog"]],
      decls: 2,
      vars: 3,
      consts: [["style", "display: flex;\n flex-direction: column;\njustify-content: center;\n align-items: center;\n  justify-items: center;\n   align-content: center; gap: 15px", "class", "cropped-values", 4, "ngIf"], [1, "cropped-values", 2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "justify-items", "center", "align-content", "center", "gap", "15px"], ["style", "display: flex; flex-direction: column;\n   justify-content: center; align-items: center; gap: 10px", 4, "ngFor", "ngForOf"], [2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "gap", "10px"], ["mat-raised-button", "", 2, "width", "150px", "height", "80px"]],
      template: function DownloadCroppedImageDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DownloadCroppedImageDialogComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.$croppedValueState));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9kb3dubG9hZC1jcm9wcGVkLWltYWdlLWRpYWxvZy9kb3dubG9hZC1jcm9wcGVkLWltYWdlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_prepare_cropped_for_download_state__WEBPACK_IMPORTED_MODULE_3__["PrepareCroppedForDownloadState"].getCroppedValues)], DownloadCroppedImageDialogComponent.prototype, "$croppedValueState", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DownloadCroppedImageDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-download-cropped-image-dialog',
          templateUrl: './download-cropped-image-dialog.component.html',
          styleUrls: ['./download-cropped-image-dialog.component.scss']
        }]
      }], function () {
        return [];
      }, {
        $croppedValueState: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/public/download-cropper/download-cropper.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/public/download-cropper/download-cropper.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DownloadCropperComponent */

  /***/
  function srcAppPublicDownloadCropperDownloadCropperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadCropperComponent", function () {
      return DownloadCropperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_states_get_base64_for_downloadCropper_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/app-state/states/get-base64-for-downloadCropper.state */
    "./src/app/shared/app-state/states/get-base64-for-downloadCropper.state.ts");
    /* harmony import */


    var _shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/app-state/states/get-image-by-id.state */
    "./src/app/shared/app-state/states/get-image-by-id.state.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var _shared_app_state_states_prepare_cropped_for_download_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/app-state/states/prepare-cropped-for-download.state */
    "./src/app/shared/app-state/states/prepare-cropped-for-download.state.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");
    /* harmony import */


    var _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../serviceV2/image-download.service */
    "./src/app/serviceV2/image-download.service.ts");
    /* harmony import */


    var _search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    function DownloadCropperComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading image please wait");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DownloadCropperComponent_div_3_mat_hint_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

        var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Original width : ", (_r106.value * ctx_r107.diffRatio).toFixed(2), " ");
      }
    }

    function DownloadCropperComponent_div_3_mat_hint_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Original height : ", (_r108.value * ctx_r109.diffRatio).toFixed(2), " ");
      }
    }

    function DownloadCropperComponent_div_3_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadCropperComponent_div_3_div_23_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r118);

          var detail_r116 = ctx.$implicit;

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r117.download(detail_r116);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "download");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r116 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](detail_r116);
      }
    }

    function DownloadCropperComponent_div_3_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DownloadCropperComponent_div_3_div_23_div_1_Template, 7, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var croppedDetails_r114 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", croppedDetails_r114.possibleResolutions);
      }
    }

    function DownloadCropperComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Width");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DownloadCropperComponent_div_3_Template_input_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120);

          var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

          var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r119.changedWidthFunc(_r106.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DownloadCropperComponent_div_3_mat_hint_8_Template, 2, 1, "mat-hint", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Height");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DownloadCropperComponent_div_3_mat_hint_16_Template, 2, 1, "mat-hint", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onMenuOpen", function DownloadCropperComponent_div_3_Template_button_onMenuOpen_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120);

          var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

          var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r121.cropAndDownload(_r106.value, _r108.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Download");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-menu", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DownloadCropperComponent_div_3_div_23_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

        var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r104.widthInputField);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, ctx_r104.$details));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r104.heightInputField);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 8, ctx_r104.$details));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 10, ctx_r104.$croppedValues));
      }
    }

    function DownloadCropperComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "image-cropper", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageLoaded", function DownloadCropperComponent_div_5_Template_image_cropper_imageLoaded_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125);

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r124.imageLoaded();
        })("imageCropped", function DownloadCropperComponent_div_5_Template_image_cropper_imageCropped_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125);

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r126.imageCropped($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r122 = ctx.ngIf;

        var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageBase64", img_r122)("maintainAspectRatio", true)("cropper", ctx_r105.cropper)("aspectRatio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx_r105.$ratio));
      }
    }

    var DownloadCropperComponent =
    /*#__PURE__*/
    function () {
      function DownloadCropperComponent(store, fb, route, dialog, service, downloadService) {
        _classCallCheck(this, DownloadCropperComponent);

        this.store = store;
        this.fb = fb;
        this.route = route;
        this.dialog = dialog;
        this.service = service;
        this.downloadService = downloadService;
        this.showDimensions = false;
        this.croppedWidth = false;
        this.croppedHeight = false;
        this.loaded = 0;
        this.cropper = {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
        };
      }

      _createClass(DownloadCropperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var imageFileDetails = this.store.selectSnapshot(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getFileDetails);
          this.extractImageIdFromRequest(imageFileDetails);
          /*this.subscribeToWidthInput(imageFileDetails);
          this.subscribeToHeightInput(imageFileDetails);*/
        }
      }, {
        key: "extractImageIdFromRequest",
        value: function extractImageIdFromRequest(imageFileDetails) {
          var _this8 = this;

          this.route.paramMap.subscribe(function (param) {
            var imageId = param.get("imageId");

            _this8.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__["GetImageAsByse64"](imageId));

            _this8.initFormFields(imageFileDetails);
          });
        }
      }, {
        key: "initFormFields",
        value: function initFormFields(imageFileDetails) {
          this.widthInputField = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](imageFileDetails.width);
          this.heightInputField = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](imageFileDetails.height);
          this.formGroup = this.fb.group({
            width: this.widthInputField,
            height: this.heightInputField
          });
        }
      }, {
        key: "imageCropped",
        value: function imageCropped($event) {
          var imageFileDetails = this.store.selectSnapshot(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getFileDetails);
          console.log("Starting Cropper method.....................................................");
          var ratio = imageFileDetails.width / imageFileDetails.height;
          var width = $event.cropperPosition.x2 - $event.cropperPosition.x1;
          console.log($event.cropperPosition.x1);
          console.log($event.cropperPosition.x2);

          if (!this.croppedWidth || !this.croppedHeight) {
            console.log("Cropper width : " + width);
            this.wasCropped = true;
            this.widthInputField.setValue(width.toFixed(2));
            var height = $event.cropperPosition.y2 - $event.cropperPosition.y1;
            console.log("Cropper height : " + height);
            this.heightInputField.setValue(height.toFixed(2));
            this.wasCropped = false;
          }

          if (this.loaded == 0) {
            this.diffRatio = imageFileDetails.width / width;
            this.diffRatio.toFixed(2);
          } // this.croppedWidth.next($event.cropperPosition.x2 - $event.cropperPosition.x1);
          // this.croppedHeight.next($event.cropperPosition.y2 - $event.cropperPosition.y1)


          this.loaded++;
          console.log("Method cropper finished............................................");
        }
      }, {
        key: "close",
        value: function close() {}
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {
          var _this9 = this;

          setTimeout(function () {
            var imageFileDetails = _this9.store.selectSnapshot(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getFileDetails);

            var width = imageFileDetails.width;
            _this9.cropper = {
              x1: 0,
              y1: 0,
              x2: width,
              y2: imageFileDetails.height
            };
            _this9.showDimensions = true;
          });
        }
      }, {
        key: "changeStuff",
        value: function changeStuff($event) {}
      }, {
        key: "changedWidthFunc",
        value: function changedWidthFunc(value) {
          console.log(value);
        }
      }, {
        key: "cropAndDownload",
        value: function cropAndDownload(width, height) {
          var parsedWidth = Number.parseFloat(width);
          var parsedHeight = Number.parseFloat(height);
          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__["SetCroppedOffsetValues"](this.store.selectSnapshot(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getImageDetail).imageId, this.cropper.x1 * this.diffRatio, this.cropper.y1 * this.diffRatio, parsedWidth * this.diffRatio, parsedHeight * this.diffRatio));
        }
      }, {
        key: "download",
        value: function download(detail) {
          var croppedDownloadRequest = this.store.selectSnapshot(_shared_app_state_states_prepare_cropped_for_download_state__WEBPACK_IMPORTED_MODULE_7__["PrepareCroppedForDownloadState"].getCroppedValues);
          croppedDownloadRequest.imageId = this.store.selectSnapshot(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getImageDetail).imageId;
          croppedDownloadRequest.selectedWidth = Number.parseFloat(detail.split(' x ')[0]);
          croppedDownloadRequest.selectedHeight = Number.parseFloat(detail.split(' x ')[1]);
          console.log(croppedDownloadRequest.selectedWidth);
          this.downloadService.downloadIndividualImage(croppedDownloadRequest, true).subscribe(function (res) {
            return res;
          });
        }
      }]);

      return DownloadCropperComponent;
    }();

    DownloadCropperComponent.ɵfac = function DownloadCropperComponent_Factory(t) {
      return new (t || DownloadCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_10__["ImageRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_11__["ImageDownloadService"]));
    };

    DownloadCropperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DownloadCropperComponent,
      selectors: [["app-download-cropper"]],
      decls: 7,
      vars: 5,
      consts: [[2, "margin-top", "30px", "margin-bottom", "10px", "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center"], ["class", "load-image", "style", "margin: 0 auto;\n  display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 10px", 4, "ngIf"], ["class", "dimensions", "style", "width: 700px; padding: 20px; margin-top: 10px; display: flex; flex-direction: row", 4, "ngIf"], ["class", "cropper", 4, "ngIf"], [1, "load-image", 2, "margin", "0 auto", "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "gap", "10px"], ["diameter", "100"], [2, "font-size", "20px", "margin-top", "20px"], [1, "dimensions", 2, "width", "700px", "padding", "20px", "margin-top", "10px", "display", "flex", "flex-direction", "row"], [1, "input-flex-wrapper", 2, "width", "500px", "margin-bottom", "15px"], [1, "width"], ["disabled", "true", 2, "font-size", "20px", "width", "100%"], ["readonly", "", "type", "number", "matInput", "", 3, "formControl", "change"], ["input", ""], [4, "ngIf"], [1, "height"], ["disabled", "true", 2, "font-size", "20px", "width", "100%", "; margin-top", "20px"], ["readonly", "", "type", "number", "matInput", "", 3, "formControl"], ["input2", ""], [1, "crop-download-wrapper", 2, "margin-left", "30px", "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center"], ["mat-raised-button", "", "color", "primary", 3, "matMenuTriggerFor", "onMenuOpen"], [2, "width", "100%"], ["menu", "matMenu"], ["class", "hoverable", 4, "ngFor", "ngForOf"], [1, "hoverable"], ["mat-menu-item", "", 2, "width", "100%", "border-radius", "50%", 3, "click"], [1, "cropper"], [3, "imageBase64", "maintainAspectRatio", "cropper", "aspectRatio", "imageLoaded", "imageCropped"], ["event", ""]],
      template: function DownloadCropperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-search-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DownloadCropperComponent_div_2_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DownloadCropperComponent_div_3_Template, 25, 12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DownloadCropperComponent_div_5_Template, 5, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showDimensions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDimensions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, ctx.$base64));
        }
      },
      directives: [_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["SearchToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["_MatMenu"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__["ImageCropperComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
      styles: [".hoverable[_ngcontent-%COMP%]:hover {\n  background: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2Rvd25sb2FkLWNyb3BwZXIvQzpcXFVzZXJzXFxwbGFuYlxccHJvZ3JhbWluZ1xcaHRsd2llbndlc3REaXBsb21Qcm9qZWt0XFxhbmd1bGFyX2phdmFfaW1hZ2VfcmVzdFxcYW5ndWxhckphdmFJbWFnZVJFU1Qvc3JjXFxhcHBcXHB1YmxpY1xcZG93bmxvYWQtY3JvcHBlclxcZG93bmxvYWQtY3JvcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljL2Rvd25sb2FkLWNyb3BwZXIvZG93bmxvYWQtY3JvcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvZG93bmxvYWQtY3JvcHBlci9kb3dubG9hZC1jcm9wcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdmVyYWJsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxufVxyXG4iLCIuaG92ZXJhYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbn0iXX0= */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_prepare_cropped_for_download_state__WEBPACK_IMPORTED_MODULE_7__["PrepareCroppedForDownloadState"].getCroppedValues)], DownloadCropperComponent.prototype, "$croppedValues", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_get_base64_for_downloadCropper_state__WEBPACK_IMPORTED_MODULE_3__["GetBase64ForDownloadCropperState"].getBase64)], DownloadCropperComponent.prototype, "$base64", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getRatioAsString)], DownloadCropperComponent.prototype, "$ratio", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getFileDetails)], DownloadCropperComponent.prototype, "$details", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DownloadCropperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-download-cropper',
          templateUrl: './download-cropper.component.html',
          styleUrls: ['./download-cropper.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_10__["ImageRequestService"]
        }, {
          type: _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_11__["ImageDownloadService"]
        }];
      }, {
        $croppedValues: [],
        $base64: [],
        $ratio: [],
        $details: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/public/image-details/image-details.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/public/image-details/image-details.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ImageDetailsComponent */

  /***/
  function srcAppPublicImageDetailsImageDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageDetailsComponent", function () {
      return ImageDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var _shared_app_state_states_download_details_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/app-state/states/download-details.state */
    "./src/app/shared/app-state/states/download-details.state.ts");
    /* harmony import */


    var _shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/app-state/states/get-image-by-id.state */
    "./src/app/shared/app-state/states/get-image-by-id.state.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/app-state/states/User-details.state */
    "./src/app/shared/app-state/states/User-details.state.ts");
    /* harmony import */


    var _shared_domain_imageModel_ImagesByTagNameQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/domain/imageModel/ImagesByTagNameQuery */
    "./src/app/shared/domain/imageModel/ImagesByTagNameQuery.ts");
    /* harmony import */


    var _shared_app_state_states_related_images_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/app-state/states/related-images.state */
    "./src/app/shared/app-state/states/related-images.state.ts");
    /* harmony import */


    var _set_resolution_download_dialog_set_resolution_download_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../set-resolution-download-dialog/set-resolution-download-dialog.component */
    "./src/app/public/set-resolution-download-dialog/set-resolution-download-dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../serviceV2/image-download.service */
    "./src/app/serviceV2/image-download.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");
    /* harmony import */


    var _search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_image_content_image_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../shared/image-content/image-content.component */
    "./src/app/shared/image-content/image-content.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    function ImageDetailsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r141 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", data_r141.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r141.name);
      }
    }

    function ImageDetailsComponent_div_4_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageDetailsComponent_div_4_div_34_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r149);

          var detail_r147 = ctx.$implicit;

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r148.download(detail_r147);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "aspect_ratio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r147 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](detail_r147.width + " x " + detail_r147.height);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((detail_r147.size / 1024).toFixed(1) + " kB");
      }
    }

    function ImageDetailsComponent_div_4_div_54_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageDetailsComponent_div_4_div_54_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r154);

          var i_r152 = ctx.$implicit;

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r153.clickedTag(i_r152.tag);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r152 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", "# " + i_r152.tag, " ");
      }
    }

    function ImageDetailsComponent_div_4_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageDetailsComponent_div_4_div_54_a_1_Template, 2, 1, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r150 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r150.tags);
      }
    }

    function ImageDetailsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-chip-list", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-chip", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "thumb_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-chip", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "save_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "mat-divider", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Download ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-menu", 33, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ImageDetailsComponent_div_4_div_34_Template, 10, 2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "settings_applications");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Download options ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-menu", 37, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageDetailsComponent_div_4_Template_button_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r156);

          var data_r142 = ctx.ngIf;

          var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r155.cropImageForDownload(data_r142.imageDetails[0]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "photo_size_select_large");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Crop image ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageDetailsComponent_div_4_Template_button_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r156);

          var data_r142 = ctx.ngIf;

          var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r157.getIndividualResolutionDownloadDialog(data_r142.imageDetails[0]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "transform");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Set individual dimensions");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Related tags : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ImageDetailsComponent_div_4_div_54_Template, 2, 1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r142 = ctx.ngIf;

        var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);

        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);

        var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", data_r142.user.profileImgPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r142.user.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r142.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r142.liked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r142.downloaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r143);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r142.imageDetails);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-menu-trigger-for", _r145);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 9, ctx_r140.$selectedImage));
      }
    }

    var ImageDetailsComponent =
    /*#__PURE__*/
    function () {
      function ImageDetailsComponent(store, route, downloadService, dialog, service, router) {
        _classCallCheck(this, ImageDetailsComponent);

        this.store = store;
        this.route = route;
        this.downloadService = downloadService;
        this.dialog = dialog;
        this.service = service;
        this.router = router;
        this.formattedDetails = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }

      _createClass(ImageDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.paramMap.subscribe(function (param) {
            var imageId = param.get('imageId');
            _this10.imageId = imageId;
            console.log(_this10.imageId);
          });
        }
      }, {
        key: "download",
        value: function download(detail) {
          var _this11 = this;

          var imageId = this.store.selectSnapshot(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_5__["GetImageByIdState"].getImageDetail).imageId;
          console.log(detail);
          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["GetDownloadDetails"](imageId, detail)).subscribe(function (value1) {
            console.log(value1.downloadDetails);
            window.location.href = value1.downloadDetails.downloadLink;

            _this11.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["GetImageByImageId"](_this11.imageId));
          }); // window.location.href = detail.downloadLink;
        }
      }, {
        key: "clickedTag",
        value: function clickedTag(tag) {
          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["ImagesByTagsAction"](new _shared_domain_imageModel_ImagesByTagNameQuery__WEBPACK_IMPORTED_MODULE_8__["ImagesByTagNameQueryImpl"](tag)));
        }
      }, {
        key: "cropImageForDownload",
        value: function cropImageForDownload(imageDetail) {
          console.log(imageDetail);
          var imageId = this.store.selectSnapshot(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_5__["GetImageByIdState"].getImageDetail).imageId;
          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["GetImageByImageId"](imageId));
          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["GetImageAsByse64"](imageId));
          this.router.navigate(['crop-download', {
            imageId: imageId
          }]);
          console.log(imageDetail); // this.service
          //   .getImageBytes(imageId)
          //   .subscribe(byteArray => {
          //     let blob = new Blob([byteArray],{type:'application/octet-binary'});
          //     let reader = new FileReader();
          //     reader.onload = (evt: any) => {
          //       this.store
          //         .dispatch(new CropAndDownload(evt.target.result))
          //       this.router
          //         .navigate(['crop-download', {imageId: imageId}])
          //     };
          //     // this.dialog.open(DownloadCropperComponent,{
          //     //   data: { img: evt.target.result,
          //     //     width: imageDetail.width,
          //     //     height: imageDetail.height, viewName: 'Download' }
          //     // })
          //     reader.readAsDataURL(blob);
          //   })
        }
      }, {
        key: "getIndividualResolutionDownloadDialog",
        value: function getIndividualResolutionDownloadDialog(imageDetail) {
          console.log(imageDetail);
          this.dialog.open(_set_resolution_download_dialog_set_resolution_download_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SetResolutionDownloadDialogComponent"], {
            width: '450px',
            height: '460px',
            panelClass: 'setIndividualResDialog'
          });
        }
      }]);

      return ImageDetailsComponent;
    }();

    ImageDetailsComponent.ɵfac = function ImageDetailsComponent_Factory(t) {
      return new (t || ImageDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_12__["ImageDownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_14__["ImageRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]));
    };

    ImageDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageDetailsComponent,
      selectors: [["app-image-details"]],
      decls: 11,
      vars: 9,
      consts: [[3, "filterable"], [1, "container"], ["class", "content", 4, "ngIf"], ["class", "download", 4, "ngIf"], [1, "related-images-container"], [1, "header"], [3, "isProfile", "data"], [1, "content"], [1, "img"], ["alt", "", 1, "img-content", 3, "src"], [1, "content-details"], [1, "data-name"], [1, "download"], [1, "spacer", 2, "margin-bottom", "20px"], [1, "profile-detail"], ["mat-icon-button", ""], ["width", "60px", "height", "60px", "alt", "", 1, "shadow", 2, "border-radius", "100%", 3, "src"], [2, "margin-left", "30px", "font-size", "18px"], [2, "margin-top", "40px", "margin-bottom", "20px"], [1, "img-detail"], [1, "img-name", 2, "display", "flex", "flex-direction", "row", "align-items", "baseline", "flex-wrap", "wrap", "max-width", "220px"], ["mat-icon-button", "", 2, "height", "50px", "font-size", "18px", "word-break", "break-all"], ["color", "primary", 2, "font-size", "40px"], [2, "margin-left", "30px", "font-size", "18px", "max-width", "130px"], [1, "img-stats"], ["aria-label", "Fish selection", 2, "margin-top", "20px", "margin-bottom", "10px"], [1, "chips", 2, "display", "flex", "flex-direction", "row", "margin-top", "20px"], ["color", "primary", "selected", "", 1, "shadow"], [2, "margin-right", "3px", "margin-left", "3px"], [2, "margin-left", "3px", "margin-right", "3px"], [2, "margin-top", "20px", "margin-bottom", "10px"], [1, "download-image"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Click to open menu", "aria-label", "Example icon-button with a menu", 1, "shadow", 2, "color", "white", "width", "300px", "height", "50px", 3, "matMenuTriggerFor"], ["backdropClass", "img-download-detail"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "mat-menu-trigger-for"], ["xPosition", "before"], ["cropImage", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "related-tags"], ["class", "tags", 4, "ngIf"], [2, "margin-top", "20px"], ["mat-menu-item", "", 2, "width", "700px", "height", "100%", 3, "click"], [2, "display", "inline-block", "width", "15px"], [2, "display", "inline-block", "width", "25px"], [1, "tags"], ["class", "shadow", "style", "background-color: #fcefee;\n        color: black;\n        text-decoration: none;\n        padding: 5px 20px;\n        border-radius: 20px;\n        margin-top: 2%; margin-right: 1%", 3, "click", 4, "ngFor", "ngForOf"], [1, "shadow", 2, "background-color", "#fcefee", "color", "black", "text-decoration", "none", "padding", "5px 20px", "border-radius", "20px", "margin-top", "2%", "margin-right", "1%", 3, "click"]],
      template: function ImageDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-search-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageDetailsComponent_div_2_Template, 6, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImageDetailsComponent_div_4_Template, 57, 11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Related images : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-image-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filterable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.$selectedImage));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx.$selectedImage));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isProfile", false)("data", ctx.$relatedImages);
        }
      },
      directives: [_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["SearchToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _shared_image_content_image_content_component__WEBPACK_IMPORTED_MODULE_17__["ImageContentComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuItem"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]],
      styles: ["@media screen and (min-width: 837px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    \n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: flex-start;\n  }\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    position: relative;\n    margin-left: 7%;\n  }\n\n  .related-images-container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .download[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    max-width: 340px;\n    height: 100%;\n    padding: 20px;\n  }\n\n  .shadow2[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 1px #777, 0 2px 2px #777, 0 4px 4px #777, 0 6px 8px #777, 0 8px 16px #777;\n  }\n\n  .shadow[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11), 0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11);\n  }\n\n  \n  .content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%] {\n    width: 100%;\n    transform: scaleY(1.02);\n  }\n\n  .content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%] {\n    transition: transform 2s;\n  }\n\n  .data-name[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 25px;\n  }\n\n  .content-details[_ngcontent-%COMP%] {\n    height: 5%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.09);\n    transform: scaleY(0);\n    transition: transform 0.5s;\n  }\n\n  .download-image[_ngcontent-%COMP%] {\n    height: 50%;\n    margin-top: 20px;\n    display: flex;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    height: 55%;\n    \n    padding: 20px;\n    border-radius: 7%;\n    max-height: 350px;\n    border: 0.8px solid rgba(0, 0, 0, 0.09);\n    box-shadow: 0 10px 20px #777;\n  }\n}\n#data-name[_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n  word-wrap: break-word;\n}\n.img-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.img-detail[_ngcontent-%COMP%]   .img-name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  \n}\n.img-detail[_ngcontent-%COMP%]   .img-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (min-width: 837px) {\n  .img-content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    \n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n}\n@media screen and (max-width: 837px) {\n  .img-content[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    \n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n}\n.related-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  align-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2ltYWdlLWRldGFpbHMvQzpcXFVzZXJzXFxwbGFuYlxccHJvZ3JhbWluZ1xcaHRsd2llbndlc3REaXBsb21Qcm9qZWt0XFxhbmd1bGFyX2phdmFfaW1hZ2VfcmVzdFxcYW5ndWxhckphdmFJbWFnZVJFU1Qvc3JjXFxhcHBcXHB1YmxpY1xcaW1hZ2UtZGV0YWlsc1xcaW1hZ2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljL2ltYWdlLWRldGFpbHMvaW1hZ2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQTttQ0FBQTtJQUVBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0lBQ0EsdUJBQUE7RUNDQTtFREdBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUVBLGVBQUE7RUNGRjs7RURPRjtJQUNFLFlBQUE7RUNKQTs7RURnQkE7SUFDRSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUVBLGdCQUFBO0lBQ0EsWUFBQTtJQUlBLGFBQUE7RUNqQkY7O0VEMkNGO0lBQ0UsMkZBQUE7RUN4Q0E7O0VEK0NBO0lBQ0Usc0tBQUE7RUM1Q0Y7O0VEb0RBOztJQUFBO0VBMENBO0lBRUUsV0FBQTtJQUNBLHVCQUFBO0VDekZGOztFRDRGQTtJQUVFLHdCQUFBO0VDMUZGOztFRGlHQTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VDOUZGOztFRGlHQTtJQUVFLFVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsK0JBQUE7SUFFQSxvQkFBQTtJQUNBLDBCQUFBO0VDaEdGOztFRHNHQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUNuR0Y7O0VEd0dBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLHVDQUFBO0lBQ0EsNEJBQUE7RUNyR0Y7QUFDRjtBRHlHQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUN2R0Y7QUQwR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUN2R0Y7QUR5R0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0E7O2dCQUFBO0FDckdKO0FEMEdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDeEdKO0FENEdBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBO21CQUFBO0lBRUEsb0JBQUE7T0FBQSxpQkFBQTtFQ3pHRjtBQUNGO0FEZ0hBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBO2tCQUFBO0lBRUEsb0JBQUE7T0FBQSxpQkFBQTtFQzlHRjtBQUNGO0FEb0hBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ2xIRjtBRHFIQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNuSEY7QURzSEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ25IRiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9pbWFnZS1kZXRhaWxzL2ltYWdlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzdweCkge1xyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLypkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlMzUlOyovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgLy9mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL3dpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnJlbGF0ZWQtaW1hZ2VzLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLy8uaW1nLWNvbnRlbnQge1xyXG4gIC8vICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLy8gIGhlaWdodDogYXV0bztcclxuICAvL31cclxuXHJcbiAgLmRvd25sb2FkIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8vYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAvL2JvcmRlcjogMC44cHggc29saWQgYmxhY2s7XHJcbiAgICAvL2JhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDclO1xyXG4gICAgLy9ib3JkZXI6IDAuOHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA5KTs7XHJcbiAgICAvL2JhY2tncm91bmQ6ICM1YmMwZGU7XHJcbiAgICAvL3dpZHRoOiAzMCU7XHJcbiAgfVxyXG5cclxuICAvLy5jb250ZW50OmhvdmVyIHtcclxuICAvLyAgLy90b3A6IDEuMyU7XHJcbiAgLy8gIHRyYW5zZm9ybTogc2NhbGVZKDEuMDIpO1xyXG4gIC8vXHJcbiAgLy99XHJcblxyXG4gIC5pbWctY29udGVudCB7XHJcbiAgICAvL3dpZHRoOiAxMDAlO1xyXG4gICAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgICAvL2JveC1zaGFkb3c6XHJcbiAgICAvLyAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcclxuICAgIC8vICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxyXG4gICAgLy8gIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcclxuICAgIC8vICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXHJcbiAgICAvLyAgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLFxyXG4gICAgLy8gIDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMTIpXHJcbiAgfVxyXG5cclxuXHJcbi5zaGFkb3cye1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAjNzc3LFxyXG4gIDAgMnB4IDJweCAjNzc3LFxyXG4gIDAgNHB4IDRweCAjNzc3LFxyXG4gIDAgNnB4IDhweCAjNzc3LFxyXG4gIDAgOHB4IDE2cHggIzc3NztcclxufVxyXG5cclxuICAuc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gICAgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMSksXHJcbiAgICAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjExKSxcclxuICAgIDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gICAgMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qLmltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9Ki9cclxuXHJcbiAgLy8uaW1nXHJcbiAgLy97XHJcbiAgLy8gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL31cclxuICAvLy5pbWc6YmVmb3JlLCAuaW1nOmFmdGVyXHJcbiAgLy97XHJcbiAgLy8gIHotaW5kZXg6IC0xO1xyXG4gIC8vICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLy8gIGJvdHRvbTogMjVweDtcclxuICAvLyAgbGVmdDogMTBweDtcclxuICAvLyAgd2lkdGg6IDUwJTtcclxuICAvLyAgdG9wOiA4MCU7XHJcbiAgLy8gIG1heC13aWR0aDozMDBweDtcclxuICAvLyAgYmFja2dyb3VuZDogIzc3NztcclxuICAvLyAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDM1cHggMjBweCAjNzc3O1xyXG4gIC8vICAtbW96LWJveC1zaGFkb3c6IDAgMzVweCAyMHB4ICM3Nzc7XHJcbiAgLy8gIGJveC1zaGFkb3c6IDEycHggMzVweCAyMHB4ICM3Nzc7XHJcbiAgLy8gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xyXG4gIC8vICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcclxuICAvLyAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xyXG4gIC8vICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xyXG4gIC8vICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcbiAgLy99XHJcbiAgLy9cclxuICAvL1xyXG4gIC8vLmltZzphZnRlclxyXG4gIC8ve1xyXG4gIC8vICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDhkZWcpO1xyXG4gIC8vICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDhkZWcpO1xyXG4gIC8vICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4ZGVnKTtcclxuICAvLyAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDhkZWcpO1xyXG4gIC8vICB0cmFuc2Zvcm06IHJvdGF0ZSg4ZGVnKTtcclxuICAvLyAgcmlnaHQ6IDEwcHg7XHJcbiAgLy8gIGxlZnQ6IGF1dG87XHJcbiAgLy99XHJcblxyXG5cclxuICAuY29udGVudDpob3ZlciAuY29udGVudC1kZXRhaWxzIHtcclxuICAgIC8vdG9wOiAxLjMlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxLjAyKTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IC5pbWcgLmltZy1jb250ZW50IHtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCAuaW1nOmhvdmVyIC5pbWctY29udGVudCB7XHJcbiAgICAvL3RyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcblxyXG4gIC5kYXRhLW5hbWUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtZGV0YWlscyB7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDMwJTtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA5KTtcclxuICAgIC8vYmFja2dyb3VuZDogeWVsbG93O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xyXG4gICAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gICAgLy9mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcblxyXG4gIC5kb3dubG9hZC1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy9iYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnNwYWNlciB7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuICAgIC8qd2lkdGg6IDEwMCU7Ki9cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3JTtcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm9yZGVyOiAwLjhweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wOSk7O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggIzc3NztcclxuICAgIC8vYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIH1cclxufVxyXG5cclxuI2RhdGEtbmFtZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmltZy1kZXRhaWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLmltZy1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLyphbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogODBweDsqL1xyXG4gIH1cclxuXHJcbiAgLmltZy1zdGF0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzN3B4KSB7XHJcbiAgLmltZy1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyp3aWR0aDogMTIwMHB4O1xyXG4gICAgaGVpZ2h0OiA2NzBweDsqL1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAvL2hlaWdodDogNTAwcHg7XHJcbiAgICAvL3dpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzdweCkge1xyXG4gIC5pbWctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qaGVpZ2h0OiAyODBweDtcclxuICAgIHdpZHRoOiAzMDRweDsqL1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAvL2hlaWdodDogNTAwcHg7XHJcbiAgICAvL3dpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5yZWxhdGVkLXRhZ3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udGFncyB7XHJcbiAgLy9tYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODM3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJTM1JTsqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuY29udGFpbmVyIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gIH1cblxuICAucmVsYXRlZC1pbWFnZXMtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZG93bmxvYWQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuc2hhZG93MiB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4ICM3NzcsIDAgMnB4IDJweCAjNzc3LCAwIDRweCA0cHggIzc3NywgMCA2cHggOHB4ICM3NzcsIDAgOHB4IDE2cHggIzc3NztcbiAgfVxuXG4gIC5zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gIH1cblxuICAvKi5pbWd7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9Ki9cbiAgLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtZGV0YWlscyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4wMik7XG4gIH1cblxuICAuY29udGVudCAuaW1nIC5pbWctY29udGVudCB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xuICB9XG5cbiAgLmRhdGEtbmFtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5jb250ZW50LWRldGFpbHMge1xuICAgIGhlaWdodDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICB9XG5cbiAgLmRvd25sb2FkLWltYWdlIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuc3BhY2VyIHtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICAvKndpZHRoOiAxMDAlOyovXG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3JTtcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICBib3JkZXI6IDAuOHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggIzc3NztcbiAgfVxufVxuI2RhdGEtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTUwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmltZy1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmltZy1kZXRhaWwgLmltZy1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICAvKmFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogODBweDsqL1xufVxuLmltZy1kZXRhaWwgLmltZy1zdGF0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzN3B4KSB7XG4gIC5pbWctY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qd2lkdGg6IDEyMDBweDtcbiAgICBoZWlnaHQ6IDY3MHB4OyovXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XG4gIC5pbWctY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qaGVpZ2h0OiAyODBweDtcbiAgICB3aWR0aDogMzA0cHg7Ki9cbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuLnJlbGF0ZWQtdGFncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50YWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59Il19 */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_related_images_state__WEBPACK_IMPORTED_MODULE_9__["RelatedImagesState"].getRelatedImages)], ImageDetailsComponent.prototype, "$relatedImages", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_7__["UserDetailsState"].profileImgPath)], ImageDetailsComponent.prototype, "$profileImg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_download_details_state__WEBPACK_IMPORTED_MODULE_4__["DownloadDetailsState"].getDetails)], ImageDetailsComponent.prototype, "$downloadDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_5__["GetImageByIdState"].getImageDetail)], ImageDetailsComponent.prototype, "$selectedImage", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-image-details',
          templateUrl: './image-details.component.html',
          styleUrls: ['./image-details.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_12__["ImageDownloadService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_14__["ImageRequestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }];
      }, {
        $relatedImages: [],
        $profileImg: [],
        $downloadDetails: [],
        $selectedImage: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/public/not-found-page/not-found-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/public/not-found-page/not-found-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NotFoundPageComponent */

  /***/
  function srcAppPublicNotFoundPageNotFoundPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
      return NotFoundPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/app-state/states/request-status.state */
    "./src/app/shared/app-state/states/request-status.state.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    function NotFoundPageComponent_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r159 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" The requested Page could not be found Reason : ", status_r159.message, " ");
      }
    }

    var NotFoundPageComponent =
    /*#__PURE__*/
    function () {
      function NotFoundPageComponent(store) {
        _classCallCheck(this, NotFoundPageComponent);

        this.store = store;
      }

      _createClass(NotFoundPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*this.store.dispatch(new RequestMessageAction(null));*/
        }
      }]);

      return NotFoundPageComponent;
    }();

    NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) {
      return new (t || NotFoundPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NotFoundPageComponent,
      selectors: [["app-not-found-page"]],
      decls: 3,
      vars: 3,
      consts: [[2, "display", "flex", "justify-content", "center", "align-items", "center"], ["style", ";margin: 0 auto; font-size: 30px", 4, "ngIf"], [2, ";margin", "0 auto", "font-size", "30px"]],
      template: function NotFoundPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotFoundPageComponent_mat_error_1_Template, 2, 1, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.$requestStatus));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_3__["RequestStatusState"].getStatus)], NotFoundPageComponent.prototype, "$requestStatus", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-not-found-page',
          templateUrl: './not-found-page.component.html',
          styleUrls: ['./not-found-page.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, {
        $requestStatus: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/public/profile/profile.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/public/profile/profile.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPublicProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/app-state/states/login.state.model */
    "./src/app/shared/app-state/states/login.state.model.ts");
    /* harmony import */


    var _shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/app-state/states/User-details.state */
    "./src/app/shared/app-state/states/User-details.state.ts");
    /* harmony import */


    var _shared_app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/app-state/actions/user-details.action */
    "./src/app/shared/app-state/actions/user-details.action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/app-state/states/request-status.state */
    "./src/app/shared/app-state/states/request-status.state.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");
    /* harmony import */


    var _search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _shared_image_content_image_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/image-content/image-content.component */
    "./src/app/shared/image-content/image-content.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ProfileComponent_mat_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r50.errorMessage, " ");
      }
    }

    function ProfileComponent_div_3_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " account_circle ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_3_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 22);
      }

      if (rf & 2) {
        var src_r60 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", src_r60, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ProfileComponent_div_3_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var name_r61 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", name_r61, " ");
      }
    }

    function ProfileComponent_div_3_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var name_r62 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", name_r62, " ");
      }
    }

    function ProfileComponent_div_3_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Edit profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_3_mat_icon_2_Template, 2, 0, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_3_img_4_Template, 1, 1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileComponent_div_3_span_8_Template, 3, 1, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Download free, beautiful high-quality photos curated ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " by\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProfileComponent_div_3_span_16_Template, 2, 1, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProfileComponent_div_3_div_19_Template, 5, 0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx_r51.$profileImg));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx_r51.$profileImg));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, ctx_r51.$firstLast));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, ctx_r51.$firstLast));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 13, ctx_r51.editableProfile));
      }
    }

    function ProfileComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "photo_library");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Images ");
      }
    }

    function ProfileComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "thumb_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Likes ");
      }
    }

    function ProfileComponent_mat_tab_11_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "lock");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Private ");
      }
    }

    function ProfileComponent_mat_tab_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_mat_tab_11_ng_template_1_Template, 3, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(store, route, service, router) {
        _classCallCheck(this, ProfileComponent);

        this.store = store;
        this.route = route;
        this.service = service;
        this.router = router;
        this.weekFilter = false;
        this.$imgs = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]();
        this.$likeds = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]();
        this.requestError = false;
        this.editableProfile = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false); // this.route.data.subscribe((value: { userDetails: ProfileViewModel }) => {
        //   this.userDetails = value.userDetails;
        //   this.$imgs = of(value.userDetails.userProfile.images);
        //   this.$likeds = of(value.userDetails.userProfile.likes)
        // })
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.$userImages.subscribe(function (model) {
            if (model !== undefined) {// ImageModelFilter.apply(model, 3600000 * 24 * 7)
              //   .forEach(image => console.log("Week : " + image.uploadDate));
              // ImageModelFilter.apply(model, 3600000 * 24 * 30)
              //   .forEach(image => console.log("Month : " + image.uploadDate))
              //
              // ImageModelFilter
              //   .apply(model, 3600000 * 24 * 365)
              //   .forEach(image => console.log("Year : " + image.uploadDate))
            }
          });
          console.log(this.userDetails);
          this.route.paramMap.subscribe(function (param) {
            var userId = param.get('userId');

            _this12.store.dispatch(new _shared_app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_5__["UserDetailsActions"].GetUserDetails(userId)).subscribe(function (value) {
              console.log(value.UserDetails);
              _this12.requestError = false;
            }, function (error) {
              _this12.requestError = true;
              _this12.errorMessage = 'Unable to find requested user';

              _this12.router.navigate(['profile', {
                error: error.error.message
              }]);
            });

            _this12.$logged.subscribe(function (loggedUser) {
              if (loggedUser) {
                _this12.editableProfile.next(loggedUser.userId === param.get('userId'));
              }
            });
          });
          var loggedUser = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_3__["LoginStateModel"].loggedInUser);

          if (loggedUser !== undefined && loggedUser !== null) {// this.store.dispatch([
            //     new AuthenticationActions.IsLoggedIn(),
            //     new ImagesByUserIDAction(loggedUser.userId)
            //   ]
            // )
          }
        }
      }, {
        key: "download",
        value: function download(name, userId) {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "imageWasLiked",
        value: function imageWasLiked($event) {
          var label = $event.tab.textLabel;
          console.log(label);

          if (label === 'Likes') {
            console.log("da schau her");
            this.store.dispatch(new _shared_app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_5__["UserDetailsActions"].GetUserDetails(this.store.selectSnapshot(_shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_4__["UserDetailsState"].userDetails).userId));
          }
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_9__["ImageRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 13,
      vars: 10,
      consts: [[3, "filterable"], [1, "container"], ["style", "font-size: 40px", 4, "ngIf"], ["class", "center", 4, "ngIf"], [1, "mat-tab-group", 3, "selectedTabChange"], ["label", "Gallery", 1, "tab"], ["mat-tab-label", ""], [3, "isProfile", "data"], ["label", "Likes"], ["label", "Third", 4, "ngIf"], [2, "font-size", "40px"], [1, "center"], [1, "profile_icon"], ["class", "profile-img", "style", "font-size: 165px; color: lightgray; margin-right: 5px", 4, "ngIf"], ["class", "profile-img", 3, "src", 4, "ngIf"], [1, "title"], [1, "user-name"], ["style", "font-size: 40px; margin-top: 2%; margin-bottom: 6px; line-height: 40px", 4, "ngIf"], [2, "font-size", "17px", "line-height", "28px"], [4, "ngIf"], ["class", "edit", 4, "ngIf"], [1, "profile-img", 2, "font-size", "165px", "color", "lightgray", "margin-right", "5px"], [1, "profile-img", 3, "src"], [2, "font-size", "40px", "margin-top", "2%", "margin-bottom", "6px", "line-height", "40px"], [1, "edit"], ["routerLink", "/edit-profile", "mat-icon-button", ""], [1, "example-tab-icon"], ["label", "Third"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-search-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_mat_error_2_Template, 2, 1, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 21, 15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tab-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function ProfileComponent_Template_mat_tab_group_selectedTabChange_4_listener($event) {
            return ctx.imageWasLiked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_ng_template_6_Template, 3, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-image-content", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-tab", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProfileComponent_ng_template_9_Template, 3, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-image-content", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProfileComponent_mat_tab_11_Template, 2, 0, "mat-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filterable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestError);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestError === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isProfile", true)("data", ctx.$userImages);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isProfile", false)("data", ctx.$userLikes);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, ctx.editableProfile));
        }
      },
      directives: [_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["SearchToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabLabel"], _shared_image_content_image_content_component__WEBPACK_IMPORTED_MODULE_13__["ImageContentComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  width: 100vw;\n}\n\n@media screen and (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    display: grid;\n    height: 280px;\n    grid-template-columns: 100%;\n    place-items: center;\n  }\n}\n\n@media screen and (max-width: 1198px) {\n  .container[_ngcontent-%COMP%] {\n    display: grid;\n    height: 280px;\n    grid-template-columns: 100%;\n    place-items: center;\n  }\n}\n\n@media screen and (max-width: 1198px) {\n  .center[_ngcontent-%COMP%] {\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 10px;\n  }\n}\n\n@media screen and (max-width: 1198px) {\n  .title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 100%;\n  font-family: \"agave NF\", sans-serif;\n}\n\n@media screen and (min-width: 1200px) {\n  .center[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    -moz-column-gap: 10px;\n         column-gap: 10px;\n  }\n}\n\n@media screen and (max-width: 1198px) {\n  .mat-tab-group[_ngcontent-%COMP%] {\n    margin-top: 12%;\n    height: 100vh;\n    overflow: hidden !important;\n  }\n}\n\n.mat-tab-group[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n@media screen and (max-width: 570px) {\n  .mat-tab-group[_ngcontent-%COMP%] {\n    margin-top: 35%;\n    height: 100vh;\n    \n  }\n}\n\n.mat-tab-body-content[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: pink;\n  overflow: hidden !important;\n}\n\n\n\n.profile_icon[_ngcontent-%COMP%] {\n  width: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.example-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 450px;\n  width: 100%;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 100%;\n  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09), 0 32px 16px rgba(0, 0, 0, 0.09);\n}\n\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 10px;\n}\n\n.load-btn[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3Byb2ZpbGUvQzpcXFVzZXJzXFxwbGFuYlxccHJvZ3JhbWluZ1xcaHRsd2llbndlc3REaXBsb21Qcm9qZWt0XFxhbmd1bGFyX2phdmFfaW1hZ2VfcmVzdFxcYW5ndWxhckphdmFJbWFnZVJFU1Qvc3JjXFxhcHBcXHB1YmxpY1xccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBRUEsMkJBQUE7SUFDQSxtQkFBQTtFQ0RGO0FBQ0Y7O0FET0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtFQ0xGO0FBQ0Y7O0FEUUE7RUFDRTtJQUNFLGNBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFQ05GO0FBQ0Y7O0FEUUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUNORjtBQUNGOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBQ1BGOztBRFVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7U0FBQSxnQkFBQTtFQ1BGO0FBQ0Y7O0FEZUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7RUNiRjtBQUNGOztBRGdCQTtFQUNFLDJCQUFBO0FDZEY7O0FEaUJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtJQUNBLCtCQUFBO0VDZEY7QUFDRjs7QURvQkE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFFQSwyQkFBQTtBQ25CRjs7QUR3QkE7OztFQUFBOztBQUtBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ3RCRjs7QUQyQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ3hCRjs7QUQ2QkE7RUFDRSxpQkFBQTtBQzFCRjs7QUQ2QkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQzFCRjs7QURnQ0E7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdLQUFBO0FDOUJGOztBRHFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDbENGOztBRHFDQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ2xDRjs7QUQ0Q0E7RUFDRSxrQkFBQTtBQ3pDRjs7QUQ0Q0E7RUFDRSxnQkFBQTtBQ3pDRiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYlMjMuNSUzMCUzMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk4cHgpIHtcclxuICAuY2VudGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICByb3ctZ2FwOiAxMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk4cHgpIHtcclxuICAudGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcImFnYXZlIE5GXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRhYiB7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OHB4KSB7XHJcbiAgLm1hdC10YWItZ3JvdXAge1xyXG4gICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XHJcbiAgLm1hdC10YWItZ3JvdXAge1xyXG4gICAgbWFyZ2luLXRvcDogMzUlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC8qb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50OyovXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyppbWd7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufSovXHJcblxyXG4ucHJvZmlsZV9pY29uIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuXHJcblxyXG4udXNlci1uYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGFtcGxlLXRhYi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuaW1ne1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5wcm9maWxlLWltZyB7XHJcbiAgLy9tYXJnaW4tbGVmdDogMTMwcHg7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggcmdiYSgwLDAsMCwwLjA5KSxcclxuICAwIDRweCAycHggcmdiYSgwLDAsMCwwLjA5KSxcclxuICAwIDhweCA0cHggcmdiYSgwLDAsMCwwLjA5KSxcclxuICAwIDE2cHggOHB4IHJnYmEoMCwwLDAsMC4wOSksXHJcbiAgMCAzMnB4IDE2cHggcmdiYSgwLDAsMCwwLjA5KTtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubG9hZC1idG4ge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLmNvbnRlbnQtYnRuIGJ1dHRvbntcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLnNwYWNlX2ZpbGxlciB7XHJcbi8vICB3aWR0aDogNjAlO1xyXG4vL1xyXG4vL31cclxuXHJcblxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OHB4KSB7XG4gIC5jZW50ZXIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOThweCkge1xuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4udGl0bGUge1xuICBoZWlnaHQ6IDYwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcImFnYXZlIE5GXCIsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk4cHgpIHtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDEyJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxufVxuLm1hdC10YWItZ3JvdXAge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiAzNSU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAvKm92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDsqL1xuICB9XG59XG4ubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLyppbWd7XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSovXG4ucHJvZmlsZV9pY29uIHtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udXNlci1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZXhhbXBsZS10YWItaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOSksIDAgNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwIDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA5KSwgMCAxNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwIDMycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4udGFncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubG9hZC1idG4ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5jb250ZW50LWJ0biBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5idG4ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_4__["UserDetailsState"].profileImgPath)], ProfileComponent.prototype, "$profileImg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_3__["LoginStateModel"].loggedInUser)], ProfileComponent.prototype, "$logged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_4__["UserDetailsState"].firstLastName)], ProfileComponent.prototype, "$firstLast", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_4__["UserDetailsState"].getUserImages)], ProfileComponent.prototype, "$userImages", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_4__["UserDetailsState"].getUserLikes)], ProfileComponent.prototype, "$userLikes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_4__["UserDetailsState"].userDetails)], ProfileComponent.prototype, "$userDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_7__["RequestStatusState"].getStatus)], ProfileComponent.prototype, "$requestStatus", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_9__["ImageRequestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      }, {
        $profileImg: [],
        $logged: [],
        $firstLast: [],
        $userImages: [],
        $userLikes: [],
        $userDetails: [],
        $requestStatus: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/public/search-toolbar/search.toolbar.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/public/search-toolbar/search.toolbar.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SearchToolbarComponent */

  /***/
  function srcAppPublicSearchToolbarSearchToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchToolbarComponent", function () {
      return SearchToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var _shared_app_state_actions_query_tag_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/app-state/actions/query-tag-action */
    "./src/app/shared/app-state/actions/query-tag-action.ts");
    /* harmony import */


    var _shared_app_state_states_search_by_tag_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/app-state/states/search-by-tag.state */
    "./src/app/shared/app-state/states/search-by-tag.state.ts");
    /* harmony import */


    var _shared_domain_imageModel_ImagesByTagNameQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/domain/imageModel/ImagesByTagNameQuery */
    "./src/app/shared/domain/imageModel/ImagesByTagNameQuery.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/signup/signup.component */
    "./src/app/shared/signup/signup.component.ts");
    /* harmony import */


    var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/login/login.component */
    "./src/app/shared/login/login.component.ts");
    /* harmony import */


    var _shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/app-state/states/login.state.model */
    "./src/app/shared/app-state/states/login.state.model.ts");
    /* harmony import */


    var _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/app-state/actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "./node_modules/@ngxs/router-plugin/__ivy_ngcc__/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _shared_app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/app-state/actions/user-details.action */
    "./src/app/shared/app-state/actions/user-details.action.ts");
    /* harmony import */


    var _shared_app_state_states_logged_user_details_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../shared/app-state/states/logged-user-details.state */
    "./src/app/shared/app-state/states/logged-user-details.state.ts");
    /* harmony import */


    var _shared_app_state_states_search_by_users_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../shared/app-state/states/search-by-users.state */
    "./src/app/shared/app-state/states/search-by-users.state.ts");
    /* harmony import */


    var _serviceV2_tag_request_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../serviceV2/tag-request.service */
    "./src/app/serviceV2/tag-request.service.ts");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var LoggedUserDetails = _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_13__["AuthenticationActions"].LoggedUserDetails;
    var SearchUsers = _shared_app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_15__["UserDetailsActions"].SearchUsers;

    function SearchToolbarComponent_div_21_mat_option_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 30, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_div_21_mat_option_1_Template_mat_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r15.search(_r14.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r13.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r13.username, " ");
      }
    }

    function SearchToolbarComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchToolbarComponent_div_21_mat_option_1_Template, 3, 2, "mat-option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r4.$users));
      }
    }

    function SearchToolbarComponent_div_22_mat_option_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 30, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_div_22_mat_option_1_Template_mat_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r20.search(_r19.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r18.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r18.value, " ");
      }
    }

    function SearchToolbarComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchToolbarComponent_div_22_mat_option_1_Template, 3, 2, "mat-option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r5.$tagOptions));
      }
    }

    function SearchToolbarComponent_button_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_button_35_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SearchToolbarComponent_button_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_button_37_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.signup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SearchToolbarComponent_button_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_button_39_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r26.navigateUploadImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit a picture");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SearchToolbarComponent_div_41_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Hi, " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r28.$userName) || false);
      }
    }

    function SearchToolbarComponent_div_41_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "account_circle ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SearchToolbarComponent_div_41_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r30.$profileImage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function SearchToolbarComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchToolbarComponent_div_41_span_2_Template, 4, 3, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SearchToolbarComponent_div_41_mat_icon_5_Template, 2, 0, "mat-icon", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchToolbarComponent_div_41_img_7_Template, 2, 3, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-menu", null, 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_div_41_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r32.navigateToUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "View profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_div_41_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r34.navigateToSettings();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Account settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_div_41_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r35.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "exit_to_app");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx_r9.$isLoggedIn) == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, ctx_r9.$profileImage));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, ctx_r9.$profileImage));
      }
    }

    function SearchToolbarComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_div_43_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r36.closeFilterDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "expand_more");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Search details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SearchToolbarComponent_div_44_div_1_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchToolbarComponent_div_44_div_1_li_6_Template_mat_checkbox_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);

          var timeFilter_r40 = ctx.$implicit;
          return timeFilter_r40.checked = $event;
        })("change", function SearchToolbarComponent_div_44_div_1_li_6_Template_mat_checkbox_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);

          var timeFilter_r40 = ctx.$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r43.updateAll($event, timeFilter_r40);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var timeFilter_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", timeFilter_r40.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", timeFilter_r40.name, " ");
      }
    }

    function SearchToolbarComponent_div_44_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Filter : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SearchToolbarComponent_div_44_div_1_li_6_Template, 3, 2, "li", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sort : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-checkbox", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchToolbarComponent_div_44_div_1_Template_mat_checkbox_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r44.filterOptions.mostDownloads.checked = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-checkbox", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchToolbarComponent_div_44_div_1_Template_mat_checkbox_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r46.filterOptions.mostLiked.checked = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r38.filterOptions.timeFilterOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r38.filterOptions.mostDownloads.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r38.filterOptions.mostDownloads.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r38.filterOptions.mostLiked.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r38.filterOptions.mostLiked.name, " ");
      }
    }

    function SearchToolbarComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchToolbarComponent_div_44_div_1_Template, 18, 5, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.searchOption === "Tags");
      }
    }

    var SearchToolbarComponent =
    /*#__PURE__*/
    function () {
      // ng until destroy
      function SearchToolbarComponent(service, store, imageService, dialog, authService, router, route) {
        var _this13 = this;

        _classCallCheck(this, SearchToolbarComponent);

        this.service = service;
        this.store = store;
        this.imageService = imageService;
        this.dialog = dialog;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.openCloseDetails = false; // searchOption can be set either to tags or to users
        // if one of both is set then individual filter-options can be applied

        this.searchOption = "Tags"; // observable-searchTerm changes when the value in the
        // autocomplete input changes

        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.filterOptions = {
          timeFilterOptions: [{
            name: 'Last 7 Days',
            checked: false,
            value: 7
          }, {
            name: 'Last 30 Days',
            checked: false,
            value: 30
          }, {
            name: 'Last 365 Days',
            checked: false,
            value: 365
          }, {
            name: 'All',
            checked: true,
            disabled: false,
            value: -1
          }],
          mostDownloads: {
            name: 'Most downloaded',
            checked: false
          },
          mostLiked: {
            name: 'Most liked',
            checked: false
          }
        };
        this.weekFilter = false;
        this.monthFilter = false;
        this.yearFilter = false;
        this.searchTerm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(function (value) {
          switch (_this13.searchOption) {
            case 'Tags':
              _this13.store.dispatch(new _shared_app_state_actions_query_tag_action__WEBPACK_IMPORTED_MODULE_6__["QueryTagAction"](new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](value)));

              break;

            case 'Users':
              _this13.store.dispatch(new SearchUsers(new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](value)));

              break;
          }
        });
      }

      _createClass(SearchToolbarComponent, [{
        key: "foo",
        value: function foo(evt) {
          console.log(evt.target.value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          var val = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_12__["LoginStateModel"].loggedInUser);
          if (val === undefined || val === null) this.store.dispatch(new _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_13__["AuthenticationActions"].IsLoggedIn()).subscribe(function (value) {
            _this14.store.dispatch(new LoggedUserDetails(value.Authentication.user.userId)).subscribe(function (value1) {
              return console.log(value1);
            });
          });
        }
      }, {
        key: "search",
        value: function search(selected) {
          var _this15 = this;

          /*const filter: ImagesByTagNameWithFilterOpt;*/
          var filters = new Map();
          filters.set(_shared_domain_imageModel_ImagesByTagNameQuery__WEBPACK_IMPORTED_MODULE_8__["FilterName"].FILTER_BY_DATE_WEEK, this.weekFilter);
          filters.set(_shared_domain_imageModel_ImagesByTagNameQuery__WEBPACK_IMPORTED_MODULE_8__["FilterName"].FILTER_BY_DATE_MONTH, this.monthFilter);
          filters.set(_shared_domain_imageModel_ImagesByTagNameQuery__WEBPACK_IMPORTED_MODULE_8__["FilterName"].FILTER_BY_DATE_YEAR, this.yearFilter);

          switch (this.searchOption) {
            case 'Tags':
              this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_5__["ImagesByTagsAction"](new _shared_domain_imageModel_ImagesByTagNameQuery__WEBPACK_IMPORTED_MODULE_8__["ImagesByTagNameWithFilterOpt"](this.filterOptions, selected))).subscribe(function (value) {
                console.log(value);
                console.log("Search pressed..");

                _this15.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["Navigate"](['/image-by-tags']));
              });
              break;

            case 'Users':
              var userId = this.store.selectSnapshot(_shared_app_state_states_search_by_users_state__WEBPACK_IMPORTED_MODULE_17__["SearchByUsersState"].getFetchedUsers).filter(function (user) {
                return user.username === selected;
              }).map(function (filteredUser) {
                return filteredUser.userId;
              });
              this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["Navigate"](['profile', {
                userId: userId
              }]));
          }
        }
      }, {
        key: "signup",
        value: function signup() {
          var ref = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
          this.dialog.open(_shared_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], {
            width: '660px',
            disableClose: true,
            autoFocus: false
          });
        }
      }, {
        key: "login",
        value: function login() {
          var ref = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
          ref.disableClose = true;
          this.dialog.open(_shared_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], {
            width: '380px'
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this16 = this;

          this.store.dispatch(new _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_13__["AuthenticationActions"].Logout()).subscribe(function (value) {
            return _this16.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["Navigate"](['welcome']));
          });
        }
      }, {
        key: "navigateUploadImage",
        value: function navigateUploadImage() {
          var loggedUser = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_12__["LoginStateModel"].loggedInUser);
          this.router.navigate(['upload', {
            userId: loggedUser.userId
          }]);
        }
      }, {
        key: "navigateToSettings",
        value: function navigateToSettings() {
          this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["Navigate"](['edit-profile']));
        }
      }, {
        key: "navigateToUser",
        value: function navigateToUser() {
          var loggedUser = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_12__["LoginStateModel"].loggedInUser);
          this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["Navigate"](['profile', {
            userId: loggedUser.userId
          }]));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "testing",
        value: function testing(el) {
          console.log(el);
          console.log("AHAHAHAHAH");
        }
      }, {
        key: "closeFilterDetails",
        value: function closeFilterDetails() {
          this.openCloseDetails = !this.openCloseDetails;
        }
      }, {
        key: "updateAll",
        value: function updateAll(checked, timeFilter) {
          this.filterOptions.timeFilterOptions.filter(function (value) {
            return value.name != timeFilter.name;
          }).forEach(function (value) {
            return value.checked = false;
          });
        }
      }]);

      return SearchToolbarComponent;
    }();

    SearchToolbarComponent.ɵfac = function SearchToolbarComponent_Factory(t) {
      return new (t || SearchToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_tag_request_service__WEBPACK_IMPORTED_MODULE_18__["TagRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_19__["ImageRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_20__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"]));
    };

    SearchToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SearchToolbarComponent,
      selectors: [["app-search-toolbar"]],
      inputs: {
        filterable: "filterable"
      },
      decls: 45,
      vars: 18,
      consts: [[1, "container"], [1, "left"], [2, "margin-top", "5px"], [2, "margin-left", "10px"], [2, "text-align", "center", "margin-top", "5px"], [2, "margin-left", "10px", "font-family", "Epilogue,serif"], [1, "center-wrapper", 2, "display", "flex", "flex-direction", "column"], [1, "center"], ["id", "srh", 2, "display", "flex", "flex-direction", "row"], ["id", "search-input", "type", "text", "matInput", "", 1, "shadow", 2, "margin-bottom", "50px", 3, "matAutocomplete", "keyup.enter", "keyup"], ["element", ""], ["auto", "matAutocomplete"], ["class", "user-search", 4, "ngIf"], ["class", "tag-search", 4, "ngIf"], ["id", "btn", 2, "margin-left", "20px", "display", "flex", "flex-direction", "row", "align-items", "center"], ["mat-button", "", 1, "search-btn", "shadow", 2, "background", "white", "margin-bottom", "2px", 3, "click"], ["matPrefix", "", 2, "font-size", "20px"], [1, "btn", 2, "display", "flex", "flex-direction", "row", "align-items", "center"], ["name", "search-by", 1, "shadow", 2, "margin-left", "20px", "margin-top", "1px", "height", "37px", "background", "white", "border-radius", "10%", "outline", "none", 3, "ngModel", "ngModelChange"], ["value", "Tags", 1, "q_options"], ["value", "Users", 1, "q_options"], [1, "unregistered_actions"], ["mat-raised-button", "", "id", "login", "class", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "id", "sign-up", 3, "click", 4, "ngIf"], ["class", "shadow", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["class", "account_icon_container", 4, "ngIf"], ["class", "open-filter-details", 4, "ngIf"], ["class", "container filterDetails", 4, "ngIf"], [1, "user-search"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["matOption", ""], [1, "tag-search"], ["mat-raised-button", "", "id", "login", 1, "", 3, "click"], ["mat-raised-button", "", "id", "sign-up", 3, "click"], ["mat-flat-button", "", 1, "shadow", 3, "click"], [1, "account_icon_container"], [1, "msg"], ["class", "welcome_msg", "style", "color: white; margin-left: 10%; font-size: 15px", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["style", "color: white;font-size: 50px", 4, "ngIf"], ["class", "img shadow", 3, "src", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "welcome_msg", 2, "color", "white", "margin-left", "10%", "font-size", "15px"], [2, "color", "white", "font-size", "50px"], [1, "img", "shadow", 3, "src"], [1, "open-filter-details"], ["mat-icon-button", "", 1, "expand_btn", 2, "color", "white", 3, "click"], [2, "color", "white"], [1, "container", "filterDetails"], ["class", "center2", "style", "padding: 10px; display: flex; justify-content: center", 4, "ngIf"], [1, "center2", 2, "padding", "10px", "display", "flex", "justify-content", "center"], ["id", "id_Section"], [1, "align_ul", 2, "list-style-type", "none"], [2, "color", "white", "font-size", "18px", "margin-bottom", "10px"], ["style", "color: white;", 4, "ngFor", "ngForOf"], [2, "display", "flex", "flex-direction", "column"], [3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", "change"]],
      template: function SearchToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "android");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "donut_small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "widgets");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Welcome to SpecShots");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function SearchToolbarComponent_Template_input_keyup_enter_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);

            return ctx.search(_r2.value);
          })("keyup", function SearchToolbarComponent_Template_input_keyup_17_listener($event) {
            return ctx.searchTerm$.next($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-autocomplete", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SearchToolbarComponent_div_21_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SearchToolbarComponent_div_22_Template, 3, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchToolbarComponent_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);

            return ctx.search(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchToolbarComponent_Template_select_ngModelChange_29_listener($event) {
            return ctx.searchOption = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SearchToolbarComponent_button_35_Template, 2, 0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, SearchToolbarComponent_button_37_Template, 2, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, SearchToolbarComponent_button_39_Template, 2, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, SearchToolbarComponent_div_41_Template, 27, 10, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SearchToolbarComponent_div_43_Template, 6, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, SearchToolbarComponent_div_44_Template, 2, 1, "div", 27);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchOption === "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchOption === "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 10, ctx.$isLoggedIn) == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 12, ctx.$isLoggedIn) == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 14, ctx.$isLoggedIn) == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 16, ctx.$isLoggedIn) == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filterable && ctx.searchOption !== "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filterable && ctx.openCloseDetails);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatOption"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDivider"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__["MatCheckbox"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  width: 99.1%;\n  \n}\n\n.container[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11), 0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11);\n  border: none;\n  background-color: #3f51b5;\n  \n}\n\n\n\n@media screen and (min-width: 1592px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: #3f51b5;\n    text-align: center;\n    min-width: 100%;\n    display: grid;\n    \n    \n    \n    grid-template: \"api-logo         search            user_actions   account_info\" auto \".                search_detail     .              .           \" auto \"filter_details   filter_details    filter_details  filter_details\" auto/0.5fr 1.5fr 0.3fr 0.3fr;\n    padding: 10px;\n  }\n}\n\n@media screen and (max-width: 1590px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: #3f51b5;\n    width: 100%;\n    min-width: 98%;\n    display: grid;\n    place-items: center;\n    grid-template: \"api-logo          .                account_info\" auto \"search            search           search\" auto \"search_detail     search_detail    search_detail\" auto \"user_actions      user_actions    user_actions\" auto \".                 filter_details  .\" auto/1fr 1fr 0.2fr;\n    \n    padding: 10px;\n  }\n}\n\n.center2[_ngcontent-%COMP%] {\n  grid-area: filter_details;\n  display: grid;\n  place-items: center;\n  \n}\n\n#id_Section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.filterDetails[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.expand_btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.open-filter-details[_ngcontent-%COMP%] {\n  grid-area: search_detail;\n  display: grid;\n  place-items: center;\n}\n\n.left[_ngcontent-%COMP%] {\n  grid-area: api-logo;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.account_icon_container[_ngcontent-%COMP%] {\n  grid-area: account_info;\n  display: flex;\n  justify-content: flex-end;\n}\n\n#login[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.center-wrapper[_ngcontent-%COMP%] {\n  grid-area: search;\n}\n\n.unregistered_actions[_ngcontent-%COMP%] {\n  grid-area: user_actions;\n  \n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  place-items: center;\n}\n\n.left[_ngcontent-%COMP%] {\n  place-items: center;\n  justify-items: center;\n  color: white;\n}\n\n.filterDetails[_ngcontent-%COMP%] {\n  \n}\n\n\n\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.align_ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n}\n\n.account_icon_container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: space-around;\n  font-family: \"Epilogue\", cursive;\n  color: white;\n  max-height: 85px;\n}\n\n.welcome_msg[_ngcontent-%COMP%] {\n  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media screen and (max-width: 837px) {\n  .welcome_msg[_ngcontent-%COMP%] {\n    text-align: right;\n    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);\n  }\n}\n\n\n\n.center[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n  padding: 15px;\n}\n\n#srh[_ngcontent-%COMP%] {\n  max-height: 32px;\n}\n\n#search-input[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 27px;\n  height: 34px;\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  background-color: white;\n  width: 100%;\n}\n\n\n\n@media screen and (min-width: 730px) {\n  .signUp[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 15px;\n  }\n}\n\n.auth-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n}\n\n.signUp[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n}\n\n#login[_ngcontent-%COMP%] {\n  background-color: #FFEBEE;\n  \n}\n\n#sign-up[_ngcontent-%COMP%] {\n  background-color: #FFEBEE;\n  \n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n#toolbar[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 100%;\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: 500px;\n  display: flex;\n  flex-direction: row;\n  justify-items: center;\n  margin: 0 auto;\n}\n\n.foo[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.example-item-detail[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 300px;\n}\n\n#search-input[_ngcontent-%COMP%] {\n  font-family: \"agave Nerd Font\", cursive;\n  width: 95%;\n  outline: none;\n  border-left: none;\n  background-color: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11), 0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11);\n}\n\n.search-details-filter[_ngcontent-%COMP%] {\n  \n  \n  min-width: 100%;\n  background: #3f51b5;\n  display: grid;\n  place-items: center;\n  width: 100%;\n  margin: 0;\n}\n\n.filter-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n}\n\n.checkbox_color[_ngcontent-%COMP%] {\n  color: white;\n}\n\n  .mat-checkbox-frame {\n  border-color: white;\n}\n\n.q_options[_ngcontent-%COMP%] {\n  font-family: \"agave NF\", monospace;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  background-color: #FFEBEE;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3NlYXJjaC10b29sYmFyL0M6XFxVc2Vyc1xccGxhbmJcXHByb2dyYW1pbmdcXGh0bHdpZW53ZXN0RGlwbG9tUHJvamVrdFxcYW5ndWxhcl9qYXZhX2ltYWdlX3Jlc3RcXGFuZ3VsYXJKYXZhSW1hZ2VSRVNUL3NyY1xcYXBwXFxwdWJsaWNcXHNlYXJjaC10b29sYmFyXFxzZWFyY2gudG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljL3NlYXJjaC10b29sYmFyL3NlYXJjaC50b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0tBQUE7RUFLQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ0hGOztBRE1BOzs7Ozs7Ozs7OztFQUFBOztBQWVBO0VBQ0U7SUFDRSx5QkFBQTtJQUVBLGtCQUFBO0lBQ0EsZUFBQTtJQUVBLGFBQUE7SUFFQSx1Q0FBQTtJQUNBLGdFQUFBO0lBQ0EsZ0RBQUE7SUFDQSwyUEFDRTtJQUlGLGFBQUE7RUNiRjtBQUNGOztBRGlCQTtFQUNFO0lBRUUseUJBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDZSQUNFO0lBTUYseURBQUE7SUFDQSxhQUFBO0VDdEJGO0FBQ0Y7O0FEeUJBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQTt1QkFBQTtBQ3ZCRjs7QUQyQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUN4QkY7O0FEMkJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDeEJGOztBRDJCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN4QkY7O0FENEJBO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN6QkY7O0FENEJBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ3pCRjs7QUQ0QkE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ3pCRjs7QUQ0QkE7RUFDRSxrQkFBQTtBQ3pCRjs7QUQ0QkE7RUFDRSxpQkFBQTtBQ3pCRjs7QUQ0QkE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDekJGOztBRDZCQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDMUJGOztBRG9DQTtFQUNFOzs7O2tDQUFBO0FDN0JGOztBRG9DQTs7Ozs7O0VBQUE7O0FBU0E7RUFDRSxZQUFBO0FDbkNGOztBRHNDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNuQ0Y7O0FEc0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ25DRjs7QURzQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNuQ0Y7O0FEc0NBO0VBQ0UseUNBQUE7QUNuQ0Y7O0FEc0NBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLDJDQUFBO0VDbkNGO0FBQ0Y7O0FEc0NBOzs7Ozs7Ozs7Ozs7Ozs7OztFQUFBOztBQW1CQTtFQUNFLFlBQUE7RUFJQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDeENGOztBRDRDQTtFQUNFLGdCQUFBO0FDekNGOztBRDZDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDMUNGOztBRDhDQTs7Ozs7Ozs7OztFQUFBOztBQVlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7RUM1Q0Y7QUFDRjs7QURpREE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUMvQ0Y7O0FEbURBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDaERGOztBRG9EQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ2pERjs7QURvREE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNqREY7O0FEcURBO0VBQ0UsY0FBQTtBQ2xERjs7QURxREE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ2xERjs7QURzREE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDbkRGOztBRHNEQTtFQUNFLFlBQUE7QUNuREY7O0FEc0RBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNuREY7O0FEc0RBO0VBQ0UsdUNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNuREY7O0FEMERBO0VBRUUsa0JBQUE7QUN4REY7O0FENERBO0VBQ0Usc0tBQUE7QUN6REY7O0FEa0VBO0VBQ0U7Ozs7dUJBQUE7RUFLQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUMvREY7O0FEc0VBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ25FRjs7QURzRUE7RUFDRSxZQUFBO0FDbkVGOztBRHNFQTtFQUNFLG1CQUFBO0FDbkVGOztBRHNFQTtFQUNFLGtDQUFBO0FDbkVGOztBRHVFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ3BFRiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zZWFyY2gtdG9vbGJhci9zZWFyY2gudG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiA5OS4xJTtcclxuICAvKm1pbi13aWR0aDogMTAwJTsqL1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjExKSxcclxuICAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjExKSxcclxuICAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjExKSxcclxuICAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjExKSxcclxuICAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgLypwbGFjZS1pdGVtczogY2VudGVyOyovXHJcbn1cclxuXHJcbi8qQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODM3cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgISpncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJTUwJTE1JTEyJTsqIVxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMTNweCAtNnB4ICM1ODIyMzM7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDEzcHggLTZweCAjNTgyMjMzO1xyXG4gICAgISpib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjazsqIVxyXG4gIH1cclxufSovXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1OTJweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIC8vYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAvL2hlaWdodDogMTglO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgICAvKmdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlNTAlMTUlMTIlOyovXHJcbiAgICAvKmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQ1MHB4LCAxZnIpKTsqL1xyXG4gICAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmciAwLjNmciAwLjNmcjsqL1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTpcclxuICAgICAgXCJhcGktbG9nbyAgICAgICAgIHNlYXJjaCAgICAgICAgICAgIHVzZXJfYWN0aW9ucyAgIGFjY291bnRfaW5mb1wiIGF1dG9cclxuICAgICAgXCIuICAgICAgICAgICAgICAgIHNlYXJjaF9kZXRhaWwgICAgIC4gICAgICAgICAgICAgIC4gICAgICAgICAgIFwiIGF1dG9cclxuICAgICAgXCJmaWx0ZXJfZGV0YWlscyAgIGZpbHRlcl9kZXRhaWxzICAgIGZpbHRlcl9kZXRhaWxzICBmaWx0ZXJfZGV0YWlsc1wiIGF1dG9cclxuICAgIC8gMC41ZnIgICAgICAgICAgICAgMS41ZnIgICAgICAgICAgICAgMC4zZnIgICAgICAgICAgIDAuM2ZyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTkwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDk4JTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTpcclxuICAgICAgXCJhcGktbG9nbyAgICAgICAgICAuICAgICAgICAgICAgICAgIGFjY291bnRfaW5mb1wiIGF1dG9cclxuICAgICAgXCJzZWFyY2ggICAgICAgICAgICBzZWFyY2ggICAgICAgICAgIHNlYXJjaFwiICAgICAgIGF1dG9cclxuICAgICAgXCJzZWFyY2hfZGV0YWlsICAgICBzZWFyY2hfZGV0YWlsICAgIHNlYXJjaF9kZXRhaWxcImF1dG9cclxuICAgICAgXCJ1c2VyX2FjdGlvbnMgICAgICB1c2VyX2FjdGlvbnMgICAgdXNlcl9hY3Rpb25zXCIgIGF1dG9cclxuICAgICAgXCIuICAgICAgICAgICAgICAgICBmaWx0ZXJfZGV0YWlscyAgLlwiIGF1dG9cclxuICAgICAgLyAxZnIgICAgICAgICAgICAgIDFmciAgICAgICAgICAgICAgIDAuMmZyO1xyXG4gICAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNDUwcHgsIDFmcikpOzsqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jZW50ZXIyIHtcclxuICBncmlkLWFyZWE6IGZpbHRlcl9kZXRhaWxzO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLypkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7Ki9cclxufVxyXG5cclxuI2lkX1NlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmZpbHRlckRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leHBhbmRfYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG59XHJcblxyXG5cclxuLm9wZW4tZmlsdGVyLWRldGFpbHMge1xyXG4gIGdyaWQtYXJlYTogc2VhcmNoX2RldGFpbDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBncmlkLWFyZWE6IGFwaS1sb2dvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5hY2NvdW50X2ljb25fY29udGFpbmVyIHtcclxuICBncmlkLWFyZWE6IGFjY291bnRfaW5mbztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbiNsb2dpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY2VudGVyLXdyYXBwZXIge1xyXG4gIGdyaWQtYXJlYTogc2VhcmNoO1xyXG59XHJcblxyXG4udW5yZWdpc3RlcmVkX2FjdGlvbnMge1xyXG4gIGdyaWQtYXJlYTogdXNlcl9hY3Rpb25zO1xyXG4gIC8qZGlzcGxheTogZ3JpZDsqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubGVmdCB7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG5cclxufVxyXG5cclxuXHJcbi5maWx0ZXJEZXRhaWxzIHtcclxuICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjExKTsqL1xyXG59XHJcblxyXG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XHJcbiAgLmFjY291bnRfaWNvbl9jb250YWluZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiYWdhdmUgTkZcIiwgbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMTtcclxuICB9XHJcbn0qL1xyXG5cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFsaWduX3VsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYWNjb3VudF9pY29uX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmb250LWZhbWlseTogXCJFcGlsb2d1ZVwiLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXgtaGVpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4ud2VsY29tZV9tc2cge1xyXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzdweCkge1xyXG4gIC53ZWxjb21lX21zZyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRleHQtc2hhZG93OiA2cHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG59XHJcblxyXG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XHJcbiAgLnN1Ym1pdF9pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnN1Ym1pdF9pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXgtaGVpZ2h0OiA2M3B4O1xyXG59Ki9cclxuXHJcbi5jZW50ZXIge1xyXG4gIGhlaWdodDogNjBweDtcclxuICAvL2Rpc3BsYXk6IGdyaWQ7XHJcbiAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJTIwJTtcclxuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4jc3JoIHtcclxuICBtYXgtaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG5cclxuI3NlYXJjaC1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzMwcHgpIHtcclxuICAuYXV0aC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG59Ki9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDczMHB4KSB7XHJcbiAgLnNpZ25VcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4uYXV0aC1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5cclxuLnNpZ25VcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4jbG9naW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkVCRUU7XHJcbiAgLyp3aWR0aDogNjAlOyovXHJcbn1cclxuXHJcbiNzaWduLXVwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFQkVFO1xyXG4gIC8qd2lkdGg6IDEwMCU7Ki9cclxufVxyXG5cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbiN0b29sYmFyIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb28ge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaXRlbS1kZXRhaWwge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4jc2VhcmNoLWlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJhZ2F2ZSBOZXJkIEZvbnRcIiwgY3Vyc2l2ZTtcclxuICB3aWR0aDogOTUlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLy9ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAvL2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWluZXJcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcclxufVxyXG5cclxuXHJcblxyXG4uc2VhcmNoLWRldGFpbHMtZmlsdGVyIHtcclxuICAvKmRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyovXHJcbiAgLyp3aWR0aDogMTAwJTsqL1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5kZXRhaWxzLWFuZC1zby1vbiB7XHJcblxyXG59XHJcblxyXG4uZmlsdGVyLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3hfY29sb3Ige1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtZnJhbWUge1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGVcclxufVxyXG5cclxuLnFfb3B0aW9ucyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiYWdhdmUgTkZcIiwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG5cclxuLnNlYXJjaC1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkVCRUU7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG5cclxuICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAvL2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgLy8vL21hcmdpbi1ib3R0b206IDAuMiU7XHJcbiAgLy9ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIC8vYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIC8vYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlO1xyXG4gIC8vYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiA5OS4xJTtcbiAgLyptaW4td2lkdGg6IDEwMCU7Ki9cbn1cblxuLmNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgLypwbGFjZS1pdGVtczogY2VudGVyOyovXG59XG5cbi8qQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODM3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAhKmdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlNTAlMTUlMTIlOyohXG4gICAgcGFkZGluZzogMTBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDEzcHggLTZweCAjNTgyMjMzO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAzcHggMTNweCAtNnB4ICM1ODIyMzM7XG4gICAgISpib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjazsqIVxuICB9XG59Ki9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1OTJweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKmdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlNTAlMTUlMTIlOyovXG4gICAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7Ki9cbiAgICAvKmdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMmZyIDAuM2ZyIDAuM2ZyOyovXG4gICAgZ3JpZC10ZW1wbGF0ZTogXCJhcGktbG9nbyAgICAgICAgIHNlYXJjaCAgICAgICAgICAgIHVzZXJfYWN0aW9ucyAgIGFjY291bnRfaW5mb1wiIGF1dG8gXCIuICAgICAgICAgICAgICAgIHNlYXJjaF9kZXRhaWwgICAgIC4gICAgICAgICAgICAgIC4gICAgICAgICAgIFwiIGF1dG8gXCJmaWx0ZXJfZGV0YWlscyAgIGZpbHRlcl9kZXRhaWxzICAgIGZpbHRlcl9kZXRhaWxzICBmaWx0ZXJfZGV0YWlsc1wiIGF1dG8vMC41ZnIgMS41ZnIgMC4zZnIgMC4zZnI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU5MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA5OCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGU6IFwiYXBpLWxvZ28gICAgICAgICAgLiAgICAgICAgICAgICAgICBhY2NvdW50X2luZm9cIiBhdXRvIFwic2VhcmNoICAgICAgICAgICAgc2VhcmNoICAgICAgICAgICBzZWFyY2hcIiBhdXRvIFwic2VhcmNoX2RldGFpbCAgICAgc2VhcmNoX2RldGFpbCAgICBzZWFyY2hfZGV0YWlsXCIgYXV0byBcInVzZXJfYWN0aW9ucyAgICAgIHVzZXJfYWN0aW9ucyAgICB1c2VyX2FjdGlvbnNcIiBhdXRvIFwiLiAgICAgICAgICAgICAgICAgZmlsdGVyX2RldGFpbHMgIC5cIiBhdXRvLzFmciAxZnIgMC4yZnI7XG4gICAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNDUwcHgsIDFmcikpOzsqL1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbi5jZW50ZXIyIHtcbiAgZ3JpZC1hcmVhOiBmaWx0ZXJfZGV0YWlscztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgLypkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyOyovXG59XG5cbiNpZF9TZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmZpbHRlckRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4cGFuZF9idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9wZW4tZmlsdGVyLWRldGFpbHMge1xuICBncmlkLWFyZWE6IHNlYXJjaF9kZXRhaWw7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0IHtcbiAgZ3JpZC1hcmVhOiBhcGktbG9nbztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uYWNjb3VudF9pY29uX2NvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogYWNjb3VudF9pbmZvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4jbG9naW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jZW50ZXItd3JhcHBlciB7XG4gIGdyaWQtYXJlYTogc2VhcmNoO1xufVxuXG4udW5yZWdpc3RlcmVkX2FjdGlvbnMge1xuICBncmlkLWFyZWE6IHVzZXJfYWN0aW9ucztcbiAgLypkaXNwbGF5OiBncmlkOyovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdCB7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmlsdGVyRGV0YWlscyB7XG4gIC8qYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMSksXG4gIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxuICAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjExKSxcbiAgMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMSksXG4gIDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjExKTsqL1xufVxuXG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XG4gIC5hY2NvdW50X2ljb25fY29udGFpbmVyIHtcbiAgICBmb250LWZhbWlseTogXCJhZ2F2ZSBORlwiLCBtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGdyaWQtYXJlYTogMiAvIDE7XG4gIH1cbn0qL1xuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFsaWduX3VsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5hY2NvdW50X2ljb25fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZm9udC1mYW1pbHk6IFwiRXBpbG9ndWVcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXgtaGVpZ2h0OiA4NXB4O1xufVxuXG4ud2VsY29tZV9tc2cge1xuICB0ZXh0LXNoYWRvdzogNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODM3cHgpIHtcbiAgLndlbGNvbWVfbXNnIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG59XG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzN3B4KSB7XG4gIC5zdWJtaXRfaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cblxuXG4uc3VibWl0X2ltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgbWF4LWhlaWdodDogNjNweDtcbn0qL1xuLmNlbnRlciB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI3NyaCB7XG4gIG1heC1oZWlnaHQ6IDMycHg7XG59XG5cbiNzZWFyY2gtaW5wdXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDI3cHg7XG4gIGhlaWdodDogMzRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLypAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzBweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG59Ki9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDczMHB4KSB7XG4gIC5zaWduVXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbi5hdXRoLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnNpZ25VcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI2xvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRUJFRTtcbiAgLyp3aWR0aDogNjAlOyovXG59XG5cbiNzaWduLXVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRUJFRTtcbiAgLyp3aWR0aDogMTAwJTsqL1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuI3Rvb2xiYXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZvbyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmV4YW1wbGUtaXRlbS1kZXRhaWwge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbiNzZWFyY2gtaW5wdXQge1xuICBmb250LWZhbWlseTogXCJhZ2F2ZSBOZXJkIEZvbnRcIiwgY3Vyc2l2ZTtcbiAgd2lkdGg6IDk1JTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcbn1cblxuLnNlYXJjaC1kZXRhaWxzLWZpbHRlciB7XG4gIC8qZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyovXG4gIC8qd2lkdGg6IDEwMCU7Ki9cbiAgbWluLXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZmlsdGVyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNoZWNrYm94X2NvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi5xX29wdGlvbnMge1xuICBmb250LWZhbWlseTogXCJhZ2F2ZSBORlwiLCBtb25vc3BhY2U7XG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRUJFRTtcbiAgbWFyZ2luLXRvcDogM3B4O1xufSJdfQ== */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_shared_app_state_states_search_by_tag_state__WEBPACK_IMPORTED_MODULE_7__["SearchByTagState"].getFetchedTagListAsOption)], SearchToolbarComponent.prototype, "$tagOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_shared_app_state_states_search_by_users_state__WEBPACK_IMPORTED_MODULE_17__["SearchByUsersState"].getFetchedUsers)], SearchToolbarComponent.prototype, "$users", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_12__["LoginStateModel"].isLoggedIn)], SearchToolbarComponent.prototype, "$isLoggedIn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_12__["LoginStateModel"].profileImg)], SearchToolbarComponent.prototype, "$profileImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_12__["LoginStateModel"].loggedInUser)], SearchToolbarComponent.prototype, "$loggedUser", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_shared_app_state_states_logged_user_details_state__WEBPACK_IMPORTED_MODULE_16__["LoggedUserDetailsState"].loggedUsername)], SearchToolbarComponent.prototype, "$userName", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-search-toolbar',
          templateUrl: './search.toolbar.component.html',
          styleUrls: ['./search.toolbar.component.scss']
        }]
      }], function () {
        return [{
          type: _serviceV2_tag_request_service__WEBPACK_IMPORTED_MODULE_18__["TagRequestService"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_19__["ImageRequestService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_20__["UserAuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"]
        }];
      }, {
        filterable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['filterable']
        }],
        $tagOptions: [],
        $users: [],
        $isLoggedIn: [],
        $profileImage: [],
        $loggedUser: [],
        $userName: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/public/set-resolution-download-dialog/set-resolution-download-dialog.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/public/set-resolution-download-dialog/set-resolution-download-dialog.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: SetResolutionDownloadDialogComponent, imgSizeValidator */

  /***/
  function srcAppPublicSetResolutionDownloadDialogSetResolutionDownloadDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetResolutionDownloadDialogComponent", function () {
      return SetResolutionDownloadDialogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "imgSizeValidator", function () {
      return imgSizeValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/app-state/states/get-image-by-id.state */
    "./src/app/shared/app-state/states/get-image-by-id.state.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../serviceV2/image-download.service */
    "./src/app/serviceV2/image-download.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function SetResolutionDownloadDialogComponent_mat_error_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Invalid width : " + ctx_r131.width.errors.forbiddenValue.value, " ");
      }
    }

    function SetResolutionDownloadDialogComponent_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SetResolutionDownloadDialogComponent_mat_error_5_div_1_Template, 2, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r127.width.errors.forbiddenValue);
      }
    }

    function SetResolutionDownloadDialogComponent_mat_error_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Invalid height : " + ctx_r132.height.errors.forbiddenValue.value, " ");
      }
    }

    function SetResolutionDownloadDialogComponent_mat_error_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SetResolutionDownloadDialogComponent_mat_error_10_div_1_Template, 2, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r128.height.errors.forbiddenValue);
      }
    }

    function SetResolutionDownloadDialogComponent_div_11_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var selectedImg_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Selected size is invalid.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Size cannot be bigger than : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](selectedImg_r133.width + " X " + selectedImg_r133.height);
      }
    }

    function SetResolutionDownloadDialogComponent_div_11_mat_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Image is to small");
      }
    }

    function SetResolutionDownloadDialogComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SetResolutionDownloadDialogComponent_div_11_div_1_Template, 7, 3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SetResolutionDownloadDialogComponent_div_11_mat_error_2_Template, 2, 1, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r129.width.value > 100 || ctx_r129.height.value > 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r129.width.value < 100 || ctx_r129.height.value < 100);
      }
    }

    function SetResolutionDownloadDialogComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetResolutionDownloadDialogComponent_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r138);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r137.downloadImage(ctx_r137.width.value, ctx_r137.height.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "download");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var SetResolutionDownloadDialogComponent =
    /*#__PURE__*/
    function () {
      function SetResolutionDownloadDialogComponent(dialogRef, fb, store, downloadService) {
        _classCallCheck(this, SetResolutionDownloadDialogComponent);

        this.dialogRef = dialogRef;
        this.fb = fb;
        this.store = store;
        this.downloadService = downloadService;
        this.widthFocus = false;
        this.heightFocus = false;
      }

      _createClass(SetResolutionDownloadDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          var imageFileDetails = this.store.selectSnapshot(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getFileDetails);
          this.initFormFields(imageFileDetails);
          var ratio = imageFileDetails.width / imageFileDetails.height;
          this.widthInputField.valueChanges.subscribe(function (val) {
            if (!_this17.heightFocus && _this17.widthFocus) _this17.heightInputField.setValue((val / ratio).toFixed(2));
          });
          this.heightInputField.valueChanges.subscribe(function (val) {
            if (!_this17.widthFocus && _this17.heightFocus) _this17.widthInputField.setValue((val * ratio).toFixed(2));
          });
        }
      }, {
        key: "initFormFields",
        value: function initFormFields(imageFileDetails) {
          this.widthInputField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](imageFileDetails.width, [imgSizeValidator(imageFileDetails.width)]);
          this.heightInputField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](imageFileDetails.height, [imgSizeValidator(imageFileDetails.height)]);
          this.formGroup = this.fb.group({
            width: this.widthInputField,
            height: this.heightInputField
          });
        }
      }, {
        key: "focusedInWidth",
        value: function focusedInWidth($event) {
          console.log($event);
          this.widthFocus = true;
          this.heightFocus = false;
        }
      }, {
        key: "focusInHeight",
        value: function focusInHeight($event) {
          console.log($event);
          this.heightFocus = true;
          this.widthFocus = false;
        }
      }, {
        key: "downloadImage",
        value: function downloadImage(width, height) {
          this.downloadService.downloadIndividualImage({
            imageId: this.store.selectSnapshot(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getImageDetail).imageId,
            width: width,
            height: height
          }, false).subscribe(function (value) {
            return console.log(value);
          });
        }
      }, {
        key: "width",
        get: function get() {
          return this.formGroup.get('width');
        }
      }, {
        key: "height",
        get: function get() {
          return this.formGroup.get('height');
        }
      }]);

      return SetResolutionDownloadDialogComponent;
    }();

    SetResolutionDownloadDialogComponent.ɵfac = function SetResolutionDownloadDialogComponent_Factory(t) {
      return new (t || SetResolutionDownloadDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_6__["ImageDownloadService"]));
    };

    SetResolutionDownloadDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SetResolutionDownloadDialogComponent,
      selectors: [["app-set-resolution-download-dialog"]],
      decls: 14,
      vars: 8,
      consts: [[1, "container", 2, "display", "flex", "flex-direction", "column", "font-size", "23px"], [2, "margin-top", "40px"], ["type", "text", "matInput", "", 2, "width", "250px", 3, "formControl", "focusin"], [4, "ngIf"], ["style", "margin: 40px auto;font-size: 30px", "mat-fab", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-fab", "", "color", "primary", 2, "margin", "40px auto", "font-size", "30px", 3, "click"]],
      template: function SetResolutionDownloadDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Width");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusin", function SetResolutionDownloadDialogComponent_Template_input_focusin_4_listener($event) {
            return ctx.focusedInWidth($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SetResolutionDownloadDialogComponent_mat_error_5_Template, 2, 1, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusin", function SetResolutionDownloadDialogComponent_Template_input_focusin_9_listener($event) {
            return ctx.focusInHeight($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetResolutionDownloadDialogComponent_mat_error_10_Template, 2, 1, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SetResolutionDownloadDialogComponent_div_11_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SetResolutionDownloadDialogComponent_button_13_Template, 3, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.widthInputField);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.width.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.heightInputField);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.height.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, (ctx.width.errors || ctx.height.errors) && ctx.$selectedImage));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.width.errors || !ctx.height.errors);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zZXQtcmVzb2x1dGlvbi1kb3dubG9hZC1kaWFsb2cvc2V0LXJlc29sdXRpb24tZG93bmxvYWQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_shared_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getFileDetails)], SetResolutionDownloadDialogComponent.prototype, "$selectedImage", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SetResolutionDownloadDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-set-resolution-download-dialog',
          templateUrl: './set-resolution-download-dialog.component.html',
          styleUrls: ['./set-resolution-download-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_6__["ImageDownloadService"]
        }];
      }, {
        $selectedImage: []
      });
    })();

    function imgSizeValidator(value) {
      return function (control) {
        var forbidden = value < Number.parseFloat(control.value) || control.value < 100;
        return forbidden ? {
          forbiddenValue: {
            value: control.value
          }
        } : null;
      };
    }
    /***/

  },

  /***/
  "./src/app/public/startup/startup.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/public/startup/startup.component.ts ***!
    \*****************************************************/

  /*! exports provided: StartupComponent */

  /***/
  function srcAppPublicStartupStartupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartupComponent", function () {
      return StartupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");

    var StartupComponent =
    /*#__PURE__*/
    function () {
      function StartupComponent() {
        _classCallCheck(this, StartupComponent);
      }

      _createClass(StartupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartupComponent;
    }();

    StartupComponent.ɵfac = function StartupComponent_Factory(t) {
      return new (t || StartupComponent)();
    };

    StartupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StartupComponent,
      selectors: [["app-startup"]],
      decls: 31,
      vars: 1,
      consts: [[3, "filterable"], ["id", "top", 1, "banner"], [1, "container-banner"], [1, "row"], [1, "banner-caption"], [1, "line-dec"], [1, "container-1"], [1, "box-1"], [1, "box-2"], [1, "box-3"]],
      template: function StartupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The most Spectacle Photography for You");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Here is some filler text to work with.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "High quality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Straightforward APIs with consistent cross platform behaviour.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Versatile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Provide tools that help developers build their own custom components with common interaction patterns.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Customizable within the bounds of the Material Design specification.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Box Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterable", false);
        }
      },
      directives: [_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SearchToolbarComponent"]],
      styles: ["#top[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  padding: 30px;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  max-width: auto;\n  text-align: center;\n  font-size: 25px;\n  color: white;\n  column-break-inside: avoid;\n}\n#top[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 45px;\n  line-height: 20%;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n@media (min-width: 468px) {\n  .container-1[_ngcontent-%COMP%] {\n    padding-left: 270px;\n    padding-right: 270px;\n    display: flex;\n    justify-content: space-around;\n    flex-direction: row;\n  }\n}\n.container-1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  \n  padding: 50px;\n  font-size: 18px;\n  color: darkgray;\n}\n.container-1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.box-1[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  order: 1;\n}\n.box-2[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  order: 2;\n}\n.box-3[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  order: 3;\n}\n@media screen and (max-width: 768px) {\n  .container-1[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  #top[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 20%;\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  opacity: 0.9;\n  padding: 60px 0px;\n  max-width: auto;\n  text-align: center;\n  font-size: 25px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3N0YXJ0dXAvQzpcXFVzZXJzXFxwbGFuYlxccHJvZ3JhbWluZ1xcaHRsd2llbndlc3REaXBsb21Qcm9qZWt0XFxhbmd1bGFyX2phdmFfaW1hZ2VfcmVzdFxcYW5ndWxhckphdmFJbWFnZVJFU1Qvc3JjXFxhcHBcXHB1YmxpY1xcc3RhcnR1cFxcc3RhcnR1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljL3N0YXJ0dXAvc3RhcnR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxxQkFBQTtBQUNBO0VBQ0UseUJBSlE7RUFNUixhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNGRjtBREtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7QUNGRjtBREtBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0lBQ0EsbUJBQUE7RUNGRjtBQUNGO0FES0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0hGO0FETUE7RUFDRSxlQUFBO0FDSEY7QURPQTtFQUNFLGNBQUE7RUFDQSxRQUFBO0FDSkY7QURPQTtFQUNFLGNBQUE7RUFDQSxRQUFBO0FDSkY7QURPQTtFQUNFLGNBQUE7RUFDQSxRQUFBO0FDSkY7QURPQTtFQUNFO0lBQ0Usc0JBQUE7RUNKRjs7RURPQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFLHlCQTFFUTtFQTJFUixZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL3N0YXJ0dXAvc3RhcnR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiAjM2Y1MWI1O1xyXG5cclxuLyogU3R5bGUgdGhlIGhlYWRlciAqL1xyXG4jdG9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAvL29wYWNpdHk6IDAuOTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOjEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwMHB4O1xyXG4gIG1heC13aWR0aDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZFxyXG59XHJcblxyXG4jdG9wIGgyIHtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgbGluZS1oZWlnaHQ6MjAlO1xyXG59XHJcblxyXG5odG1sLCBib2R5e1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjQ2OHB4KXtcclxuICAuY29udGFpbmVyLTF7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI3MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjcwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLTEgZGl2e1xyXG4gIC8qYm9yZGVyOjFweCAjY2NjIHNvbGlkOyovXHJcbiAgcGFkZGluZzo1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuXHJcbi5jb250YWluZXItMSBkaXYgaDN7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5cclxuLmJveC0xe1xyXG4gIGZsZXg6IDAgMSBhdXRvO1xyXG4gIG9yZGVyOjE7XHJcbn1cclxuXHJcbi5ib3gtMntcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICBvcmRlcjoyO1xyXG59XHJcblxyXG4uYm94LTN7XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgb3JkZXI6IDM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAuY29udGFpbmVyLTF7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgI3RvcCBoMiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDoyMCVcclxuICB9XHJcbn1cclxuXHJcbmZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgcGFkZGluZzogNjBweCAwcHg7XHJcbiAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIi8qIFN0eWxlIHRoZSBoZWFkZXIgKi9cbiN0b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBwYWRkaW5nOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcbn1cblxuI3RvcCBoMiB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDIwJTtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ2OHB4KSB7XG4gIC5jb250YWluZXItMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cbi5jb250YWluZXItMSBkaXYge1xuICAvKmJvcmRlcjoxcHggI2NjYyBzb2xpZDsqL1xuICBwYWRkaW5nOiA1MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLmNvbnRhaW5lci0xIGRpdiBoMyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmJveC0xIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIG9yZGVyOiAxO1xufVxuXG4uYm94LTIge1xuICBmbGV4OiAwIDEgYXV0bztcbiAgb3JkZXI6IDI7XG59XG5cbi5ib3gtMyB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBvcmRlcjogMztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lci0xIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgI3RvcCBoMiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMCU7XG4gIH1cbn1cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgcGFkZGluZzogNjBweCAwcHg7XG4gIG1heC13aWR0aDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-startup',
          templateUrl: './startup.component.html',
          styleUrls: ['./startup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/public/welcome/image-by-tag.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/public/welcome/image-by-tag.component.ts ***!
    \**********************************************************/

  /*! exports provided: ImageByTagComponent */

  /***/
  function srcAppPublicWelcomeImageByTagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageByTagComponent", function () {
      return ImageByTagComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_states_images_by_tag_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/app-state/states/images-by-tag-state */
    "./src/app/shared/app-state/states/images-by-tag-state.ts");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");
    /* harmony import */


    var _shared_image_content_image_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/image-content/image-content.component */
    "./src/app/shared/image-content/image-content.component.ts");

    var ImageByTagComponent =
    /*#__PURE__*/
    function () {
      function ImageByTagComponent(store, service, deviceService) {
        _classCallCheck(this, ImageByTagComponent);

        this.store = store;
        this.service = service;
        this.deviceService = deviceService;
        this.getDimensionFromCropper = "IHUTiYJ6Wdk.jpg";
      }

      _createClass(ImageByTagComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.deviceService.isMobile());
        }
      }]);

      return ImageByTagComponent;
    }();

    ImageByTagComponent.ɵfac = function ImageByTagComponent_Factory(t) {
      return new (t || ImageByTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_4__["ImageRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]));
    };

    ImageByTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageByTagComponent,
      selectors: [["app-welcome"]],
      decls: 2,
      vars: 3,
      consts: [[3, "filterable"], [3, "isProfile", "data"]],
      template: function ImageByTagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-search-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-image-content", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filterable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isProfile", false)("data", ctx.$imagesByTags);
        }
      },
      directives: [_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchToolbarComponent"], _shared_image_content_image_content_component__WEBPACK_IMPORTED_MODULE_7__["ImageContentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy93ZWxjb21lL2ltYWdlLWJ5LXRhZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_app_state_states_images_by_tag_state__WEBPACK_IMPORTED_MODULE_3__["ImagesByTagState"].getData)], ImageByTagComponent.prototype, "$imagesByTags", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageByTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './image-by-tag.component.html',
          styleUrls: ['./image-by-tag.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_4__["ImageRequestService"]
        }, {
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]
        }];
      }, {
        $imagesByTags: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/security/auth-security.guard.ts":
  /*!*************************************************!*\
    !*** ./src/app/security/auth-security.guard.ts ***!
    \*************************************************/

  /*! exports provided: AuthSecurityGuard */

  /***/
  function srcAppSecurityAuthSecurityGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSecurityGuard", function () {
      return AuthSecurityGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/app-state/states/login.state.model */
    "./src/app/shared/app-state/states/login.state.model.ts");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "./node_modules/@ngxs/router-plugin/__ivy_ngcc__/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/app-state/actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");

    var AuthSecurityGuard =
    /*#__PURE__*/
    function () {
      function AuthSecurityGuard(store, router, authService) {
        _classCallCheck(this, AuthSecurityGuard);

        this.store = store;
        this.router = router;
        this.authService = authService;
        this.$test = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(AuthSecurityGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this18 = this;

          // return this.$isLoggedIn;
          var isLoggedIn = this.store.selectSnapshot(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_4__["LoginStateModel"].isLoggedIn);

          if (!isLoggedIn) {
            console.log("could not login");
            this.store.dispatch(new _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_6__["AuthenticationActions"].IsLoggedIn()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (loggedUser) {
              if (loggedUser) return loggedUser.Authentication.status;
            })).subscribe(function (status) {
              if (!status) _this18.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__["Navigate"](['login']));

              _this18.$test.next(status);
            });
          } else return isLoggedIn;

          return this.$test; // this.store.dispatch(new AuthenticationActions.IsLoggedIn())
          //   .pipe(
          //     map(value => {
          //       return !!value.Authentication.status;
          //     })
          //   ).subscribe(value => this.$diffRatio.next(value),
          //   error => {
          //     console.log(error)
          //   });
          // return this.$diffRatio;
        }
      }]);

      return AuthSecurityGuard;
    }();

    AuthSecurityGuard.ɵfac = function AuthSecurityGuard_Factory(t) {
      return new (t || AuthSecurityGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_9__["UserAuthenticationService"]));
    };

    AuthSecurityGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthSecurityGuard,
      factory: AuthSecurityGuard.ɵfac,
      providedIn: 'root'
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_shared_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_4__["LoginStateModel"].isLoggedIn)], AuthSecurityGuard.prototype, "$isLoggedIn", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthSecurityGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_9__["UserAuthenticationService"]
        }];
      }, {
        $isLoggedIn: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/security/cookie-auth-interceptor.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/security/cookie-auth-interceptor.service.ts ***!
    \*************************************************************/

  /*! exports provided: CookieAuthInterceptorService */

  /***/
  function srcAppSecurityCookieAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookieAuthInterceptorService", function () {
      return CookieAuthInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");
    /* harmony import */


    var _shared_app_state_actions_request_message_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/app-state/actions/request-message.action */
    "./src/app/shared/app-state/actions/request-message.action.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");

    var CookieAuthInterceptorService =
    /*#__PURE__*/
    function () {
      function CookieAuthInterceptorService(store, router, deviceService) {
        _classCallCheck(this, CookieAuthInterceptorService);

        this.store = store;
        this.router = router;
        this.deviceService = deviceService;
      }

      _createClass(CookieAuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this19 = this;

          var isMobile = this.deviceService.isMobile() ? 1 : 0;
          var clonedReq = req.clone({
            withCredentials: true,
            headers: req.headers.set('isMobile', isMobile + "")
          });
          return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            if (error.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              console.log('An error occurred:', error.error.message);
            } else {
              // this.store.dispatch(new Navigate(['/login']))
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.log(error);
              console.log(error.message);
              console.log();

              if (error.url === 'http://localhost:8880/image-app/images/insert/') {
                console.log(error.error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
              } else if (error.url === 'http://localhost:8880/image-app/users/signUp') {
                console.log(error.error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
              } else if (error.url === _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthenticationService"].USER_LOGIN || error.url === _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthenticationService"].GOOGLE_LOGIN) {
                _this19.store.dispatch(new _shared_app_state_actions_request_message_action__WEBPACK_IMPORTED_MODULE_4__["RequestMessageAction"]({
                  message: error.error
                }));
              } else if (error.url.indexOf(_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthenticationService"].USER_DETAILS) !== -1) {
                _this19.store.dispatch(new _shared_app_state_actions_request_message_action__WEBPACK_IMPORTED_MODULE_4__["RequestMessageAction"]({
                  message: error.error
                }));
                /*this.router.navigate(['not-found']);*/


                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
              }

              console.log(error.statusText);

              if (error.error !== null && error.error.message !== null) {
                console.log("Backend returned code ".concat(error.status, ", body was: ").concat(error.error.message));
              }
            } // If you want to return a new response:
            //return of(new HttpResponse({body: [{name: "Default value..."}]}));
            // If you want to return the error on the upper level:
            //return throwError(error);
            // or just return nothing:


            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }));
        }
      }]);

      return CookieAuthInterceptorService;
    }();

    CookieAuthInterceptorService.ɵfac = function CookieAuthInterceptorService_Factory(t) {
      return new (t || CookieAuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"]));
    };

    CookieAuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CookieAuthInterceptorService,
      factory: CookieAuthInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieAuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/crop-and-download-resolver.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/serviceV2/crop-and-download-resolver.service.ts ***!
    \*****************************************************************/

  /*! exports provided: CropAndDownloadResolverService */

  /***/
  function srcAppServiceV2CropAndDownloadResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CropAndDownloadResolverService", function () {
      return CropAndDownloadResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_state_states_get_base64_for_downloadCropper_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/app-state/states/get-base64-for-downloadCropper.state */
    "./src/app/shared/app-state/states/get-base64-for-downloadCropper.state.ts");
    /* harmony import */


    var _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _image_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./image-request.service */
    "./src/app/serviceV2/image-request.service.ts");

    var CropAndDownloadResolverService =
    /*#__PURE__*/
    function () {
      function CropAndDownloadResolverService(store, service) {
        _classCallCheck(this, CropAndDownloadResolverService);

        this.store = store;
        this.service = service;
      }

      _createClass(CropAndDownloadResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this20 = this;

          this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_2__["GetImageByImageId"](route.params.imageId));
          return this.service.getImageBytes(route.params.imageId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (byteArray) {
            var blob = new Blob([byteArray], {
              type: 'application/octet-binary'
            });
            var reader = new FileReader();

            reader.onload = function (evt) {
              _this20.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_2__["CropAndDownload"](evt.target.result));
            }; // this.dialog.open(DownloadCropperComponent,{
            //   data: { img: evt.target.result,
            //     width: imageDetail.width,
            //     height: imageDetail.height, viewName: 'Download' }
            // })


            reader.readAsDataURL(blob);
            return _this20.store.selectSnapshot(_shared_app_state_states_get_base64_for_downloadCropper_state__WEBPACK_IMPORTED_MODULE_1__["GetBase64ForDownloadCropperState"].getModel);
          }));
        }
      }]);

      return CropAndDownloadResolverService;
    }();

    CropAndDownloadResolverService.ɵfac = function CropAndDownloadResolverService_Factory(t) {
      return new (t || CropAndDownloadResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]));
    };

    CropAndDownloadResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CropAndDownloadResolverService,
      factory: CropAndDownloadResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropAndDownloadResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/delete-image.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/serviceV2/delete-image.service.ts ***!
    \***************************************************/

  /*! exports provided: DeleteImageService */

  /***/
  function srcAppServiceV2DeleteImageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteImageService", function () {
      return DeleteImageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DeleteImageService =
    /*#__PURE__*/
    function () {
      function DeleteImageService(http) {
        _classCallCheck(this, DeleteImageService);

        this.http = http;
      }

      _createClass(DeleteImageService, [{
        key: "deleteImage",
        value: function deleteImage(image) {
          return this.http.post(DeleteImageService.DELETE_IMAGE_URL, image, {
            observe: 'response'
          });
        }
      }]);

      return DeleteImageService;
    }();

    DeleteImageService.DELETE_IMAGE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "image/delete";

    DeleteImageService.ɵfac = function DeleteImageService_Factory(t) {
      return new (t || DeleteImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DeleteImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DeleteImageService,
      factory: DeleteImageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/image-details-resolver.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/serviceV2/image-details-resolver.service.ts ***!
    \*************************************************************/

  /*! exports provided: ImageDetailsResolverService */

  /***/
  function srcAppServiceV2ImageDetailsResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageDetailsResolverService", function () {
      return ImageDetailsResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/app-state/actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");

    var ImageDetailsResolverService =
    /*#__PURE__*/
    function () {
      function ImageDetailsResolverService(store) {
        _classCallCheck(this, ImageDetailsResolverService);

        this.store = store;
      }

      _createClass(ImageDetailsResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this21 = this;

          return this.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_1__["GetImageByImageId"](route.params.imageId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (state) {
            return _this21.store.dispatch(new _shared_app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_1__["GetRelatedImagesByTagIDs"](state.modelDetails.tags));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (val) {
            _this21.store.dispatch(new _shared_app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_3__["AuthenticationActions"].IsLoggedIn());

            console.log("ImageDetailResolver was called with value : " + val);
          }));
        }
      }]);

      return ImageDetailsResolverService;
    }();

    ImageDetailsResolverService.ɵfac = function ImageDetailsResolverService_Factory(t) {
      return new (t || ImageDetailsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    ImageDetailsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImageDetailsResolverService,
      factory: ImageDetailsResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageDetailsResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/image-download.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/serviceV2/image-download.service.ts ***!
    \*****************************************************/

  /*! exports provided: ImageDownloadService */

  /***/
  function srcAppServiceV2ImageDownloadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageDownloadService", function () {
      return ImageDownloadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_util_blob_to_base64_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/util/blob-to-base64-pipe */
    "./src/app/shared/util/blob-to-base64-pipe.ts");

    var ImageDownloadService =
    /*#__PURE__*/
    function () {
      function ImageDownloadService(http, base64Pipe) {
        _classCallCheck(this, ImageDownloadService);

        this.http = http;
        this.base64Pipe = base64Pipe;
      }

      _createClass(ImageDownloadService, [{
        key: "downloadImage",
        value: function downloadImage(imageId, imageFileDetail) {
          return this.http.post(ImageDownloadService.DOWNLOAD_BY_API_RESOLUTION_URL + imageId, imageFileDetail);
        }
      }, {
        key: "downloadIndividualImage",
        value: function downloadIndividualImage(croppedDetails, wasCropped) {
          console.log("seas");
          var url = wasCropped ? ImageDownloadService.DOWNLOAD_BY_CROPPED_RESOLUTION_URL : ImageDownloadService.DOWNLOAD_BY_INDIVIDUAL_RESOLUTION_URL;
          console.log(url);
          return this.base64Pipe.getBase64(this.http.post(url, croppedDetails, {
            responseType: 'arraybuffer'
          }));
        }
      }]);

      return ImageDownloadService;
    }();

    ImageDownloadService.DOWNLOAD_BY_API_RESOLUTION_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "library/download/file/";
    ImageDownloadService.DOWNLOAD_BY_CROPPED_RESOLUTION_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "library/download/cropped/file/";
    ImageDownloadService.DOWNLOAD_BY_INDIVIDUAL_RESOLUTION_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "library/download/resized/file";

    ImageDownloadService.ɵfac = function ImageDownloadService_Factory(t) {
      return new (t || ImageDownloadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_util_blob_to_base64_pipe__WEBPACK_IMPORTED_MODULE_3__["BlobToBase64Pipe"]));
    };

    ImageDownloadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImageDownloadService,
      factory: ImageDownloadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageDownloadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _shared_util_blob_to_base64_pipe__WEBPACK_IMPORTED_MODULE_3__["BlobToBase64Pipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/image-request.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/serviceV2/image-request.service.ts ***!
    \****************************************************/

  /*! exports provided: ImageRequestService */

  /***/
  function srcAppServiceV2ImageRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageRequestService", function () {
      return ImageRequestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var ImageRequestService =
    /*#__PURE__*/
    function () {
      function ImageRequestService(http, sanitizer) {
        _classCallCheck(this, ImageRequestService);

        this.http = http;
        this.sanitizer = sanitizer; // 178.112.217.30

        this.$bSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null); // private readonly SEARCH_URL: string = "http://localhost:8880/image-app/images/search/by/tag/";

        this.SEARCH_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "library/search-by/tag/";
        this.UPLOAD_PROFILE_IMAGE = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "user/set/profile-image/";
        this.UPLOAD_TAG = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "image/update/tags/";
      }

      _createClass(ImageRequestService, [{
        key: "getRelatedImagesByTagList",
        value: function getRelatedImagesByTagList(tags) {
          console.log(tags);
          return this.http.post(ImageRequestService.RELATED_IMAGES_BY_TAG_IDS, {
            tags: tags
          }, {
            responseType: "json"
          });
        }
      }, {
        key: "setTagToImage",
        value: function setTagToImage(data) {
          console.log(data);
          return this.http.post(this.UPLOAD_TAG, data, {
            observe: 'response'
          });
        }
      }, {
        key: "getResolutions",
        value: function getResolutions() {
          return this.http.get(ImageRequestService.GET_API_RESOLTIONS, {
            responseType: "json"
          });
        }
      }, {
        key: "getImageBytes",
        value: function getImageBytes(imgId) {
          return this.http.get(ImageRequestService.GET_IMAGE_BYTES_BY_ID_URL + imgId, {
            responseType: "arraybuffer"
          });
        }
      }, {
        key: "getImagesByImgId",
        value: function getImagesByImgId(imgId) {
          return this.http.get(ImageRequestService.ALL_IMAGES_BY_IMG_ID + imgId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) {
            return console.log(x);
          }));
        }
      }, {
        key: "getImagesByUserId",
        value: function getImagesByUserId(userId) {
          return this.http.get(ImageRequestService.ALL_IMAGES_BY_USERID + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) {
            return console.log(x);
          }));
        }
      }, {
        key: "getImagesByTag",
        value: function getImagesByTag(req, page) {
          return this.http.post(this.SEARCH_URL, req, {
            observe: "response"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            console.log(resp.status);
            return resp.body;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log(err.error.message);
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }));
        }
      }]);

      return ImageRequestService;
    }();

    ImageRequestService.ALL_IMAGES_BY_USERID = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "library/search-by/user/";
    ImageRequestService.ALL_IMAGES_BY_IMG_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "library/search-by/image/";
    ImageRequestService.RELATED_IMAGES_BY_TAG_IDS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "library/search-by/tags/";
    ImageRequestService.GET_IMAGE_BYTES_BY_ID_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "library/search-by/image/raw/";
    ImageRequestService.GET_API_RESOLTIONS = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "api/resolutions/";

    ImageRequestService.ɵfac = function ImageRequestService_Factory(t) {
      return new (t || ImageRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
    };

    ImageRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImageRequestService,
      factory: ImageRequestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/image-upload.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/serviceV2/image-upload.service.ts ***!
    \***************************************************/

  /*! exports provided: ImageUploadService */

  /***/
  function srcAppServiceV2ImageUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageUploadService", function () {
      return ImageUploadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ImageUploadService =
    /*#__PURE__*/
    function () {
      function ImageUploadService(http) {
        _classCallCheck(this, ImageUploadService);

        this.http = http;
        this.UPLOAD_IMAGE = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "images/insert/";
        this.VALIDATE_IMAGE = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "library/validate-image/";
      }

      _createClass(ImageUploadService, [{
        key: "addToUserLibrary",
        value: function addToUserLibrary(uploadModel) {
          var request = new FormData();
          request.append("file", uploadModel.orgFile);
          request.append("userId", uploadModel.userId);
          request.append("urlReference", uploadModel.urlReference);
          request.append("isPublic", uploadModel.isPublic);
          request.append('galleryFile', uploadModel.galleryFile);
          request.append("downloadFile", uploadModel.downloadFile);
          console.log(uploadModel.urlReference);
          return this.http.post(this.UPLOAD_IMAGE, request, {
            observe: 'response'
          });
        }
      }, {
        key: "validateImage",
        value: function validateImage(data) {
          var request = new FormData();
          request.append("file", data);
          return this.http.post(this.VALIDATE_IMAGE, request, {
            responseType: 'json'
          });
        }
      }]);

      return ImageUploadService;
    }();

    ImageUploadService.ɵfac = function ImageUploadService_Factory(t) {
      return new (t || ImageUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ImageUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImageUploadService,
      factory: ImageUploadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/search-by-users.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/serviceV2/search-by-users.service.ts ***!
    \******************************************************/

  /*! exports provided: SearchByUsersService */

  /***/
  function srcAppServiceV2SearchByUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchByUsersService", function () {
      return SearchByUsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _search_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.request.service */
    "./src/app/serviceV2/search.request.service.ts");

    var SearchByUsersService =
    /*#__PURE__*/
    function () {
      function SearchByUsersService(http, searchReqService) {
        _classCallCheck(this, SearchByUsersService);

        this.http = http;
        this.searchReqService = searchReqService;
        this.SEARCH_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "query/searchUsers/";
      }

      _createClass(SearchByUsersService, [{
        key: "searchByTagName",
        value: function searchByTagName(searchTerm$) {
          return this.searchReqService.search(searchTerm$, this.SEARCH_URL);
        }
      }]);

      return SearchByUsersService;
    }();

    SearchByUsersService.ɵfac = function SearchByUsersService_Factory(t) {
      return new (t || SearchByUsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_search_request_service__WEBPACK_IMPORTED_MODULE_3__["SearchRequestService"]));
    };

    SearchByUsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchByUsersService,
      factory: SearchByUsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchByUsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _search_request_service__WEBPACK_IMPORTED_MODULE_3__["SearchRequestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/search.request.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/serviceV2/search.request.service.ts ***!
    \*****************************************************/

  /*! exports provided: SearchRequestService */

  /***/
  function srcAppServiceV2SearchRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchRequestService", function () {
      return SearchRequestService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SearchRequestService =
    /*#__PURE__*/
    function () {
      function SearchRequestService(http) {
        _classCallCheck(this, SearchRequestService);

        this.http = http;
      }

      _createClass(SearchRequestService, [{
        key: "search",
        value: function search(searchTerm$, url) {
          var _this22 = this;

          return searchTerm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (searchTerm) {
            return _this22.getSearchResult(searchTerm, url);
          }));
        }
      }, {
        key: "getSearchResult",
        value: function getSearchResult(term, url) {
          return SearchRequestService.validateTerm(term) ? this.sendSearchRequest(term, url) : new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }
      }, {
        key: "sendSearchRequest",
        value: function sendSearchRequest(terms, url) {
          return this.http.get(url + terms);
        }
      }], [{
        key: "validateTerm",
        value: function validateTerm(term) {
          return term.length > 0;
        }
      }]);

      return SearchRequestService;
    }();

    SearchRequestService.ɵfac = function SearchRequestService_Factory(t) {
      return new (t || SearchRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SearchRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SearchRequestService,
      factory: SearchRequestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SearchRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/tag-request.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/serviceV2/tag-request.service.ts ***!
    \**************************************************/

  /*! exports provided: TagRequestService */

  /***/
  function srcAppServiceV2TagRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagRequestService", function () {
      return TagRequestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _search_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.request.service */
    "./src/app/serviceV2/search.request.service.ts");

    var TagRequestService =
    /*#__PURE__*/
    function () {
      function TagRequestService(http, searchReqService) {
        _classCallCheck(this, TagRequestService);

        this.http = http;
        this.searchReqService = searchReqService;
        this.secr = "user/HJeDHE2XBFwgJ81pzuLNj3MshJqXbU/images/all"; //178.112.217.30

        this.SEARCH_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "query/searchByTag/";
      }

      _createClass(TagRequestService, [{
        key: "searchByTagName",
        value: function searchByTagName(searchTerm$) {
          return this.searchReqService.search(searchTerm$, this.SEARCH_URL);
        }
      }]);

      return TagRequestService;
    }();

    TagRequestService.REQUEST_DELAY = 2000;

    TagRequestService.ɵfac = function TagRequestService_Factory(t) {
      return new (t || TagRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_search_request_service__WEBPACK_IMPORTED_MODULE_3__["SearchRequestService"]));
    };

    TagRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TagRequestService,
      factory: TagRequestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _search_request_service__WEBPACK_IMPORTED_MODULE_3__["SearchRequestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/update-image-details.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/serviceV2/update-image-details.service.ts ***!
    \***********************************************************/

  /*! exports provided: UpdateImageDetailsService */

  /***/
  function srcAppServiceV2UpdateImageDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateImageDetailsService", function () {
      return UpdateImageDetailsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UpdateImageDetailsService =
    /*#__PURE__*/
    function () {
      function UpdateImageDetailsService(http) {
        _classCallCheck(this, UpdateImageDetailsService);

        this.http = http;
        this.UPDATE_IMAGE_DETAILS_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "image/update/details";
      }

      _createClass(UpdateImageDetailsService, [{
        key: "changeImageDetails",
        value: function changeImageDetails(imageToUpdate) {
          console.log(imageToUpdate);
          return this.http.post(this.UPDATE_IMAGE_DETAILS_URL, imageToUpdate, {
            observe: 'response'
          });
        }
      }]);

      return UpdateImageDetailsService;
    }();

    UpdateImageDetailsService.ɵfac = function UpdateImageDetailsService_Factory(t) {
      return new (t || UpdateImageDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UpdateImageDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UpdateImageDetailsService,
      factory: UpdateImageDetailsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateImageDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/update-user.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/serviceV2/update-user.service.ts ***!
    \**************************************************/

  /*! exports provided: UpdateUserService */

  /***/
  function srcAppServiceV2UpdateUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserService", function () {
      return UpdateUserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UpdateUserService =
    /*#__PURE__*/
    function () {
      function UpdateUserService(http) {
        _classCallCheck(this, UpdateUserService);

        this.http = http;
        this.UPLOAD_PROFILE_IMAGE = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "user/set/profile-image/";
        this.ADD_USER_LIKE = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "user/set/likes/";
      }

      _createClass(UpdateUserService, [{
        key: "setUserProfile",
        value: function setUserProfile(userId, image) {
          return this.http.post(this.UPLOAD_PROFILE_IMAGE + userId, image, {
            observe: 'response'
          });
        }
      }, {
        key: "addUserLike",
        value: function addUserLike(imageId, userId) {
          return this.http.post(this.ADD_USER_LIKE + imageId + "/" + userId, {
            observe: 'response'
          });
        }
      }]);

      return UpdateUserService;
    }();

    UpdateUserService.ɵfac = function UpdateUserService_Factory(t) {
      return new (t || UpdateUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UpdateUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UpdateUserService,
      factory: UpdateUserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/serviceV2/user-authentication.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/serviceV2/user-authentication.service.ts ***!
    \**********************************************************/

  /*! exports provided: UserAuthenticationService */

  /***/
  function srcAppServiceV2UserAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAuthenticationService", function () {
      return UserAuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserAuthenticationService =
    /*#__PURE__*/
    function () {
      function UserAuthenticationService(http) {
        _classCallCheck(this, UserAuthenticationService);

        this.http = http;
        this.USER_SIGNUP = "http://localhost:8880/image-app/users/signUp";
        this.USER_LOGOUT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "logout";
        this.AUTH_STATUS = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "auth/identify/user";
      }

      _createClass(UserAuthenticationService, [{
        key: "getUserDetails",
        value: function getUserDetails(userId) {
          return this.http.get(UserAuthenticationService.USER_DETAILS + userId, {
            responseType: "json"
          });
        }
      }, {
        key: "createNewUser",
        value: function createNewUser(userSignupModel) {
          return this.http.post(this.USER_SIGNUP, userSignupModel, {
            observe: "body",
            responseType: "json"
          });
        }
      }, {
        key: "login",
        value: function login(userLoginModel, loginMethod) {
          var URL = loginMethod === "GOOGLE" ? UserAuthenticationService.GOOGLE_LOGIN : UserAuthenticationService.USER_LOGIN;
          console.log(userLoginModel);
          return this.http.post(URL, userLoginModel, {
            observe: 'response'
          });
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.http.get(this.AUTH_STATUS, {
            responseType: "json",
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) {
            console.log(value);
            return value;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.http.post(this.USER_LOGOUT, {
            responseType: "json"
          });
        }
      }]);

      return UserAuthenticationService;
    }();

    UserAuthenticationService.USER_LOGIN = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "users/login";
    UserAuthenticationService.USER_DETAILS = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "user/details/";
    UserAuthenticationService.GOOGLE_LOGIN = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "users/oauth/login";

    UserAuthenticationService.ɵfac = function UserAuthenticationService_Factory(t) {
      return new (t || UserAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    UserAuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserAuthenticationService,
      factory: UserAuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/actions/address-validation-action.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/app-state/actions/address-validation-action.ts ***!
    \***********************************************************************/

  /*! exports provided: GetZipCodesAndCitiesByRegion, GetCountriesAction, GetRegionsAction */

  /***/
  function srcAppSharedAppStateActionsAddressValidationActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetZipCodesAndCitiesByRegion", function () {
      return GetZipCodesAndCitiesByRegion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetCountriesAction", function () {
      return GetCountriesAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetRegionsAction", function () {
      return GetRegionsAction;
    });

    var GetZipCodesAndCitiesByRegion = function GetZipCodesAndCitiesByRegion(zipcode, region) {
      _classCallCheck(this, GetZipCodesAndCitiesByRegion);

      this.zipcode = zipcode;
      this.region = region;
    };

    GetZipCodesAndCitiesByRegion.type = '[AddressValidation] Get Zipcodes and Cities';

    var GetCountriesAction = function GetCountriesAction() {
      _classCallCheck(this, GetCountriesAction);
    };

    GetCountriesAction.type = '[AddressValidation] Get Countries';

    var GetRegionsAction = function GetRegionsAction(countryName) {
      _classCallCheck(this, GetRegionsAction);

      this.countryName = countryName;
    };

    GetRegionsAction.type = '[AddressValidation] Get Regions';
    /***/
  },

  /***/
  "./src/app/shared/app-state/actions/authentication-action.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/app-state/actions/authentication-action.ts ***!
    \*******************************************************************/

  /*! exports provided: AuthenticationActions */

  /***/
  function srcAppSharedAppStateActionsAuthenticationActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationActions", function () {
      return AuthenticationActions;
    });

    var AuthenticationActions;

    (function (AuthenticationActions) {
      var LoginAction = function LoginAction(userLoginModel) {
        _classCallCheck(this, LoginAction);

        this.userLoginModel = userLoginModel;
      };

      LoginAction.type = '[Authentication] Login';
      AuthenticationActions.LoginAction = LoginAction;

      var LogoutAction = function LogoutAction(userLoginModel) {
        _classCallCheck(this, LogoutAction);

        this.userLoginModel = userLoginModel;
      };

      LogoutAction.type = '[Authentication] Logout';
      AuthenticationActions.LogoutAction = LogoutAction;

      var SignUpAction = function SignUpAction(userRegistration) {
        _classCallCheck(this, SignUpAction);

        this.userRegistration = userRegistration;
      };

      SignUpAction.type = '[Authentication] Signup';
      AuthenticationActions.SignUpAction = SignUpAction;

      var IsLoggedIn = function IsLoggedIn() {
        _classCallCheck(this, IsLoggedIn);
      };

      IsLoggedIn.type = '[Authentication] Is logged in';
      AuthenticationActions.IsLoggedIn = IsLoggedIn;

      var Logout = function Logout() {
        _classCallCheck(this, Logout);
      };

      Logout.type = '[Authentication] Logout';
      AuthenticationActions.Logout = Logout;

      var LoggedUserDetails = function LoggedUserDetails(userId) {
        _classCallCheck(this, LoggedUserDetails);

        this.userId = userId;
      };

      LoggedUserDetails.type = '[Authentication] Logged userDetails';
      AuthenticationActions.LoggedUserDetails = LoggedUserDetails;
    })(AuthenticationActions || (AuthenticationActions = {}));
    /***/

  },

  /***/
  "./src/app/shared/app-state/actions/image.action.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/app-state/actions/image.action.ts ***!
    \**********************************************************/

  /*! exports provided: ImagesByUserIDAction, ImagesByTagsAction, ImagesNextPageAction, UploadImage, FilterByDate, DeleteImage, SelectImage, GetDownloadDetails, GetImageByImageId, GetRelatedImagesByTagIDs, GetImageAsByse64, CropAndDownload, CropDownloadViewImage, CropGalleryViewImage, SetCroppedOffsetValues */

  /***/
  function srcAppSharedAppStateActionsImageActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesByUserIDAction", function () {
      return ImagesByUserIDAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesByTagsAction", function () {
      return ImagesByTagsAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesNextPageAction", function () {
      return ImagesNextPageAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadImage", function () {
      return UploadImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterByDate", function () {
      return FilterByDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteImage", function () {
      return DeleteImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectImage", function () {
      return SelectImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetDownloadDetails", function () {
      return GetDownloadDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetImageByImageId", function () {
      return GetImageByImageId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetRelatedImagesByTagIDs", function () {
      return GetRelatedImagesByTagIDs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetImageAsByse64", function () {
      return GetImageAsByse64;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CropAndDownload", function () {
      return CropAndDownload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CropDownloadViewImage", function () {
      return CropDownloadViewImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CropGalleryViewImage", function () {
      return CropGalleryViewImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetCroppedOffsetValues", function () {
      return SetCroppedOffsetValues;
    });

    var ImagesByUserIDAction = function ImagesByUserIDAction(userId) {
      _classCallCheck(this, ImagesByUserIDAction);

      this.userId = userId;
    };

    ImagesByUserIDAction.type = '[ImageAPI] Images by userId';

    var ImagesByTagsAction = function ImagesByTagsAction(imagesByTag) {
      _classCallCheck(this, ImagesByTagsAction);

      this.imagesByTag = imagesByTag;
    };

    ImagesByTagsAction.type = '[ImageAPI] ImagesByTagsAction';

    var ImagesNextPageAction = function ImagesNextPageAction(imageResponseModel) {
      _classCallCheck(this, ImagesNextPageAction);

      this.imageResponseModel = imageResponseModel;
    };

    ImagesNextPageAction.type = '[ImageAPI] NextImagePage';

    var UploadImage = function UploadImage(uploadModel) {
      _classCallCheck(this, UploadImage);

      this.uploadModel = uploadModel;
    };

    UploadImage.type = '[ImageAPI] Upload image';

    var FilterByDate = function FilterByDate(limit) {
      _classCallCheck(this, FilterByDate);

      this.limit = limit;
    };

    FilterByDate.type = '[ImageAPI] Filter image';

    var DeleteImage = function DeleteImage(image) {
      _classCallCheck(this, DeleteImage);

      this.image = image;
    };

    DeleteImage.type = '[ImageAPI] Delete image';

    var SelectImage = function SelectImage(image) {
      _classCallCheck(this, SelectImage);

      this.image = image;
    };

    SelectImage.type = '[ImageAPI] Select image';

    var GetDownloadDetails = function GetDownloadDetails(imageId, imageFileDetail) {
      _classCallCheck(this, GetDownloadDetails);

      this.imageId = imageId;
      this.imageFileDetail = imageFileDetail;
    };

    GetDownloadDetails.type = '[ImageAPI] Get download details';

    var GetImageByImageId = function GetImageByImageId(imageId) {
      _classCallCheck(this, GetImageByImageId);

      this.imageId = imageId;
    };

    GetImageByImageId.type = '[ImageAPI] Get image by imageId';

    var GetRelatedImagesByTagIDs = function GetRelatedImagesByTagIDs(tagIds) {
      _classCallCheck(this, GetRelatedImagesByTagIDs);

      this.tagIds = tagIds;
    };

    GetRelatedImagesByTagIDs.type = '[ImageAPI] Related images';

    var GetImageAsByse64 = function GetImageAsByse64(imageId) {
      _classCallCheck(this, GetImageAsByse64);

      this.imageId = imageId;
    };

    GetImageAsByse64.type = '[ImageAPI] Get image bytes';

    var CropAndDownload = function CropAndDownload(base64) {
      _classCallCheck(this, CropAndDownload);

      this.base64 = base64;
    };

    CropAndDownload.type = '[ImageAPI] Crop and download';

    var CropDownloadViewImage = function CropDownloadViewImage(data) {
      _classCallCheck(this, CropDownloadViewImage);

      this.data = data;
    };

    CropDownloadViewImage.type = '[ImageAPI] Crop download view image';

    var CropGalleryViewImage = function CropGalleryViewImage(data) {
      _classCallCheck(this, CropGalleryViewImage);

      this.data = data;
    };

    CropGalleryViewImage.type = '[ImageAPI] Crop gallery view image';

    var SetCroppedOffsetValues = function SetCroppedOffsetValues(imgId, offsetX, offsetY, subImageWidth, subImageHeight) {
      _classCallCheck(this, SetCroppedOffsetValues);

      this.imgId = imgId;
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.subImageWidth = subImageWidth;
      this.subImageHeight = subImageHeight;
    };

    SetCroppedOffsetValues.type = '[ImageAPI] Set cropped image values';
    /***/
  },

  /***/
  "./src/app/shared/app-state/actions/query-tag-action.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/app-state/actions/query-tag-action.ts ***!
    \**************************************************************/

  /*! exports provided: QueryTagAction */

  /***/
  function srcAppSharedAppStateActionsQueryTagActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueryTagAction", function () {
      return QueryTagAction;
    });

    var QueryTagAction = function QueryTagAction(searchTerm) {
      _classCallCheck(this, QueryTagAction);

      this.searchTerm = searchTerm;
    };

    QueryTagAction.type = '[Tag] Query tags';
    /***/
  },

  /***/
  "./src/app/shared/app-state/actions/request-message.action.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/app-state/actions/request-message.action.ts ***!
    \********************************************************************/

  /*! exports provided: RequestMessageAction */

  /***/
  function srcAppSharedAppStateActionsRequestMessageActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestMessageAction", function () {
      return RequestMessageAction;
    });

    var RequestMessageAction = function RequestMessageAction(requestStatus) {
      _classCallCheck(this, RequestMessageAction);

      this.requestStatus = requestStatus;
    };

    RequestMessageAction.type = '[Request] Check request status';
    /***/
  },

  /***/
  "./src/app/shared/app-state/actions/update-user-profile.action.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/app-state/actions/update-user-profile.action.ts ***!
    \************************************************************************/

  /*! exports provided: UpdateUserProfileActions */

  /***/
  function srcAppSharedAppStateActionsUpdateUserProfileActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserProfileActions", function () {
      return UpdateUserProfileActions;
    });

    var UpdateUserProfileActions;

    (function (UpdateUserProfileActions) {
      var UploadUserProfileImg = function UploadUserProfileImg(userId, file) {
        _classCallCheck(this, UploadUserProfileImg);

        this.userId = userId;
        this.file = file;
      };

      UploadUserProfileImg.type = '[Update profile] Set user profile';
      UpdateUserProfileActions.UploadUserProfileImg = UploadUserProfileImg;
    })(UpdateUserProfileActions || (UpdateUserProfileActions = {}));
    /***/

  },

  /***/
  "./src/app/shared/app-state/actions/user-details.action.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/app-state/actions/user-details.action.ts ***!
    \*****************************************************************/

  /*! exports provided: UserDetailsActions */

  /***/
  function srcAppSharedAppStateActionsUserDetailsActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsActions", function () {
      return UserDetailsActions;
    });

    var UserDetailsActions;

    (function (UserDetailsActions) {
      var UploadUserProfile = function UploadUserProfile(userId, file) {
        _classCallCheck(this, UploadUserProfile);

        this.userId = userId;
        this.file = file;
      };

      UploadUserProfile.type = '[User Action] Upload user-profile';
      UserDetailsActions.UploadUserProfile = UploadUserProfile;

      var GetUserDetails = function GetUserDetails(userId) {
        _classCallCheck(this, GetUserDetails);

        this.userId = userId;
      };

      GetUserDetails.type = '[User Action] Get user details';
      UserDetailsActions.GetUserDetails = GetUserDetails;

      var SearchUsers = function SearchUsers(searchTerm) {
        _classCallCheck(this, SearchUsers);

        this.searchTerm = searchTerm;
      };

      SearchUsers.type = '[User Action] Get user profiles';
      UserDetailsActions.SearchUsers = SearchUsers;
    })(UserDetailsActions || (UserDetailsActions = {}));
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/User-details.state.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/app-state/states/User-details.state.ts ***!
    \***************************************************************/

  /*! exports provided: UserDetailsState */

  /***/
  function srcAppSharedAppStateStatesUserDetailsStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsState", function () {
      return UserDetailsState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_user_details_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/user-details.action */
    "./src/app/shared/app-state/actions/user-details.action.ts");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");

    var UserDetailsState =
    /*#__PURE__*/
    function () {
      function UserDetailsState(authService, imageRequestService) {
        _classCallCheck(this, UserDetailsState);

        this.authService = authService;
        this.imageRequestService = imageRequestService;
      }

      _createClass(UserDetailsState, [{
        key: "userDetails",
        value: function userDetails(ctx, action) {
          return this.authService.getUserDetails(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            console.log(response);
            var state = ctx.getState();
            console.log(response);
            console.log(response.images);
            ctx.setState(Object.assign(Object.assign({}, state), {
              firstName: response.firstName,
              lastName: response.lastName,
              email: response.email,
              userId: response.userId,
              profileImgPath: response.profileImgPath,
              username: response.username,
              likes: response.likes,
              images: response.images
            }));
          }));
        }
      }], [{
        key: "profileImgPath",
        value: function profileImgPath(state) {
          return state.profileImgPath;
        }
      }, {
        key: "userDetails",
        value: function userDetails(state) {
          return state;
        }
      }, {
        key: "firstLastName",
        value: function firstLastName(state) {
          return state.firstName + " " + state.lastName;
        }
      }, {
        key: "getState",
        value: function getState(state) {
          return state;
        }
      }, {
        key: "getUserImages",
        value: function getUserImages(state) {
          return state.images;
        }
      }, {
        key: "getUserLikes",
        value: function getUserLikes(state) {
          return state.likes;
        }
      }]);

      return UserDetailsState;
    }();

    UserDetailsState.ɵfac = function UserDetailsState_Factory(t) {
      return new (t || UserDetailsState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_6__["ImageRequestService"]));
    };

    UserDetailsState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: UserDetailsState,
      factory: UserDetailsState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_user_details_action__WEBPACK_IMPORTED_MODULE_4__["UserDetailsActions"].GetUserDetails)], UserDetailsState.prototype, "userDetails", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], UserDetailsState, "profileImgPath", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], UserDetailsState, "userDetails", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], UserDetailsState, "firstLastName", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], UserDetailsState, "getState", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], UserDetailsState, "getUserImages", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], UserDetailsState, "getUserLikes", null);
    UserDetailsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'UserDetails',
      defaults: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: undefined
      }
    })], UserDetailsState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserDetailsState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthenticationService"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_6__["ImageRequestService"]
        }];
      }, {
        userDetails: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/address.validation.state.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/app-state/states/address.validation.state.ts ***!
    \*********************************************************************/

  /*! exports provided: AddressValidationState */

  /***/
  function srcAppSharedAppStateStatesAddressValidationStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressValidationState", function () {
      return AddressValidationState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_address_validation_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/address-validation-action */
    "./src/app/shared/app-state/actions/address-validation-action.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_address_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/address-validation.service */
    "./src/app/shared/service/address-validation.service.ts");

    var AddressValidationState =
    /*#__PURE__*/
    function () {
      function AddressValidationState(addressService) {
        _classCallCheck(this, AddressValidationState);

        this.addressService = addressService;
      }

      _createClass(AddressValidationState, [{
        key: "getCountries",
        value: function getCountries(ctx, action) {
          var state = ctx.getState();
          return this.addressService.getCountries().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            ctx.setState(Object.assign(Object.assign({}, state), {
              name: res
            }));
          }));
        }
      }, {
        key: "getRegionsByCountry",
        value: function getRegionsByCountry(ctx, action) {
          var state = ctx.getState();
          return this.addressService.getRegionsByCountry(action.countryName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            console.log("Du Hund du");
            console.log(res);
            ctx.setState(Object.assign(Object.assign({}, state), {
              regions: res
            }));
          }));
        }
      }, {
        key: "getZipCodesAndCitiesByRegion",
        value: function getZipCodesAndCitiesByRegion(ctx, action) {
          var state = ctx.getState();
          return this.addressService.getZipCodesAndCitiesByRegion2(action.zipcode, action.region).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            console.log(res);
            ctx.setState(Object.assign(Object.assign({}, state), {
              zipCodesAndCity: res
            }));
          }));
        }
      }], [{
        key: "zipCodesAndCities",
        value: function zipCodesAndCities(state) {
          return state.zipCodesAndCity;
        }
      }, {
        key: "regions",
        value: function regions(state) {
          return state.regions;
        }
      }, {
        key: "countries",
        value: function countries(state) {
          return state.name;
        }
      }]);

      return AddressValidationState;
    }();

    AddressValidationState.ɵfac = function AddressValidationState_Factory(t) {
      return new (t || AddressValidationState)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_service_address_validation_service__WEBPACK_IMPORTED_MODULE_5__["AddressValidationService"]));
    };

    AddressValidationState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AddressValidationState,
      factory: AddressValidationState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_address_validation_action__WEBPACK_IMPORTED_MODULE_3__["GetCountriesAction"])], AddressValidationState.prototype, "getCountries", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_address_validation_action__WEBPACK_IMPORTED_MODULE_3__["GetRegionsAction"])], AddressValidationState.prototype, "getRegionsByCountry", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_address_validation_action__WEBPACK_IMPORTED_MODULE_3__["GetZipCodesAndCitiesByRegion"])], AddressValidationState.prototype, "getZipCodesAndCitiesByRegion", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], AddressValidationState, "zipCodesAndCities", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], AddressValidationState, "regions", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], AddressValidationState, "countries", null);
    AddressValidationState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'AddressValidation'
    })], AddressValidationState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AddressValidationState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
      }], function () {
        return [{
          type: _service_address_validation_service__WEBPACK_IMPORTED_MODULE_5__["AddressValidationService"]
        }];
      }, {
        getCountries: [],
        getRegionsByCountry: [],
        getZipCodesAndCitiesByRegion: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/crop-image.state.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/app-state/states/crop-image.state.ts ***!
    \*************************************************************/

  /*! exports provided: CropImageState */

  /***/
  function srcAppSharedAppStateStatesCropImageStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CropImageState", function () {
      return CropImageState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");

    var CropImageState =
    /*#__PURE__*/
    function () {
      function CropImageState() {
        _classCallCheck(this, CropImageState);
      }

      _createClass(CropImageState, [{
        key: "cropImage",
        value: function cropImage(ctx, action) {
          var state = ctx.getState();
          console.log(state);
          ctx.patchState(Object.assign(Object.assign({}, state), {
            data: action.data
          }));
        }
      }, {
        key: "cropDownloadViewImage",
        value: function cropDownloadViewImage(ctx, action) {
          var state = ctx.getState();
          console.log(state);
          ctx.patchState(Object.assign(Object.assign({}, state), {
            downloadViewFile: action.data
          }));
        }
      }], [{
        key: "getCroppedDownloadImage",
        value: function getCroppedDownloadImage(state) {
          return state.downloadViewFile;
        }
      }, {
        key: "getData",
        value: function getData(state) {
          return state.data;
        }
      }]);

      return CropImageState;
    }();

    CropImageState.ɵfac = function CropImageState_Factory(t) {
      return new (t || CropImageState)();
    };

    CropImageState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CropImageState,
      factory: CropImageState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["CropGalleryViewImage"])], CropImageState.prototype, "cropImage", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["CropDownloadViewImage"])], CropImageState.prototype, "cropDownloadViewImage", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], CropImageState, "getCroppedDownloadImage", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], CropImageState, "getData", null);
    CropImageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'cropImage',
      defaults: {
        data: ''
      }
    })], CropImageState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CropImageState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [];
      }, {
        cropImage: [],
        cropDownloadViewImage: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/delete-image.state.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/app-state/states/delete-image.state.ts ***!
    \***************************************************************/

  /*! exports provided: DeleteImageState */

  /***/
  function srcAppSharedAppStateStatesDeleteImageStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteImageState", function () {
      return DeleteImageState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _serviceV2_delete_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/delete-image.service */
    "./src/app/serviceV2/delete-image.service.ts");

    var DeleteImageState =
    /*#__PURE__*/
    function () {
      function DeleteImageState(deleteService) {
        _classCallCheck(this, DeleteImageState);

        this.deleteService = deleteService;
      }

      _createClass(DeleteImageState, [{
        key: "deleteUserImage",
        value: function deleteUserImage(ctx, action) {
          return this.deleteService.deleteImage(action.image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
          }));
        }
      }]);

      return DeleteImageState;
    }();

    DeleteImageState.ɵfac = function DeleteImageState_Factory(t) {
      return new (t || DeleteImageState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_delete_image_service__WEBPACK_IMPORTED_MODULE_5__["DeleteImageService"]));
    };

    DeleteImageState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DeleteImageState,
      factory: DeleteImageState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["DeleteImage"])], DeleteImageState.prototype, "deleteUserImage", null);
    DeleteImageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'Delete'
    })], DeleteImageState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DeleteImageState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_delete_image_service__WEBPACK_IMPORTED_MODULE_5__["DeleteImageService"]
        }];
      }, {
        deleteUserImage: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/download-details.state.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/app-state/states/download-details.state.ts ***!
    \*******************************************************************/

  /*! exports provided: DownloadDetailsState */

  /***/
  function srcAppSharedAppStateStatesDownloadDetailsStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadDetailsState", function () {
      return DownloadDetailsState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/image-download.service */
    "./src/app/serviceV2/image-download.service.ts");

    var DownloadDetailsState =
    /*#__PURE__*/
    function () {
      function DownloadDetailsState(downloadService) {
        _classCallCheck(this, DownloadDetailsState);

        this.downloadService = downloadService;
      }

      _createClass(DownloadDetailsState, [{
        key: "getDownloadDetails",
        value: function getDownloadDetails(ctx, action) {
          var state = ctx.getState();
          return this.downloadService.downloadImage(action.imageId, action.imageFileDetail).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            console.log(res);
            ctx.setState(Object.assign(Object.assign({}, state), {
              downloadLink: res.downloadLink,
              width: res.width,
              height: res.height,
              size: res.size,
              contentType: res.contentType
            }));
            return res;
          }));
        }
      }], [{
        key: "getFile",
        value: function getFile(state) {
          return state.image;
        }
      }, {
        key: "getDetails",
        value: function getDetails(state) {
          return state.fileDetails;
        }
      }]);

      return DownloadDetailsState;
    }();

    DownloadDetailsState.ɵfac = function DownloadDetailsState_Factory(t) {
      return new (t || DownloadDetailsState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_5__["ImageDownloadService"]));
    };

    DownloadDetailsState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DownloadDetailsState,
      factory: DownloadDetailsState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["GetDownloadDetails"])], DownloadDetailsState.prototype, "getDownloadDetails", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], DownloadDetailsState, "getFile", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], DownloadDetailsState, "getDetails", null);
    DownloadDetailsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'downloadDetails'
    })], DownloadDetailsState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DownloadDetailsState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_5__["ImageDownloadService"]
        }];
      }, {
        getDownloadDetails: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/get-base64-for-downloadCropper.state.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/app-state/states/get-base64-for-downloadCropper.state.ts ***!
    \*********************************************************************************/

  /*! exports provided: GetBase64ForDownloadCropperState */

  /***/
  function srcAppSharedAppStateStatesGetBase64ForDownloadCropperStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetBase64ForDownloadCropperState", function () {
      return GetBase64ForDownloadCropperState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");

    var GetBase64ForDownloadCropperState_1;

    var GetBase64ForDownloadCropperState = GetBase64ForDownloadCropperState_1 =
    /*#__PURE__*/
    function () {
      function GetBase64ForDownloadCropperState(service) {
        _classCallCheck(this, GetBase64ForDownloadCropperState);

        this.service = service;
      }

      _createClass(GetBase64ForDownloadCropperState, [{
        key: "getDataAsBytes",
        value: function getDataAsBytes(ctx, action) {
          return this.service.getImageBytes(action.imageId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (byteArray) {
            var blob = new Blob([byteArray], {
              type: 'application/octet-binary'
            });
            var reader = new FileReader();
            var state = ctx.getState();

            reader.onload = function (evt) {
              ctx.patchState(Object.assign(Object.assign({}, state), {
                base64: evt.target.result
              }));
            };

            reader.readAsDataURL(blob);
            return GetBase64ForDownloadCropperState_1.getModel(state);
          }));
        }
      }, {
        key: "getData",
        value: function getData(ctx, action) {
          var state = ctx.getState();
          console.log(state);
          ctx.patchState(Object.assign(Object.assign({}, state), {
            base64: action.base64
          }));
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ctx.getState());
        }
      }], [{
        key: "getBase64",
        value: function getBase64(state) {
          return state.base64;
        }
      }, {
        key: "getModel",
        value: function getModel(state) {
          return state;
        }
      }]);

      return GetBase64ForDownloadCropperState;
    }();

    GetBase64ForDownloadCropperState.ɵfac = function GetBase64ForDownloadCropperState_Factory(t) {
      return new (t || GetBase64ForDownloadCropperState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_6__["ImageRequestService"]));
    };

    GetBase64ForDownloadCropperState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: GetBase64ForDownloadCropperState,
      factory: GetBase64ForDownloadCropperState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["GetImageAsByse64"])], GetBase64ForDownloadCropperState.prototype, "getDataAsBytes", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["CropAndDownload"])], GetBase64ForDownloadCropperState.prototype, "getData", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], GetBase64ForDownloadCropperState, "getBase64", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], GetBase64ForDownloadCropperState, "getModel", null);
    GetBase64ForDownloadCropperState = GetBase64ForDownloadCropperState_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'CropAndDownload',
      defaults: {
        base64: ''
      }
    })], GetBase64ForDownloadCropperState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GetBase64ForDownloadCropperState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_6__["ImageRequestService"]
        }];
      }, {
        getDataAsBytes: [],
        getData: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/get-image-by-id.state.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/app-state/states/get-image-by-id.state.ts ***!
    \******************************************************************/

  /*! exports provided: GetImageByIdState */

  /***/
  function srcAppSharedAppStateStatesGetImageByIdStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetImageByIdState", function () {
      return GetImageByIdState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");

    var GetImageByIdState =
    /*#__PURE__*/
    function () {
      function GetImageByIdState(imgReqService) {
        _classCallCheck(this, GetImageByIdState);

        this.imgReqService = imgReqService;
      }

      _createClass(GetImageByIdState, [{
        key: "getImageById",
        value: function getImageById(ctx, action) {
          return this.imgReqService.getImagesByImgId(action.imageId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (req) {
            var state = ctx.getState();
            var newState = {
              imageId: req.imageId,
              link: req.link,
              name: req.name,
              profileImg: req.profileImg,
              linkReference: req.linkReference,
              isPublic: req.isPublic,
              tags: req.tags,
              user: req.user,
              downloaded: req.downloaded,
              liked: req.liked,
              imageDetails: req.imageDetails
            };
            ctx.setState(newState);
            return newState;
          }));
        }
      }], [{
        key: "getImageDetail",
        value: function getImageDetail(state) {
          return state;
        }
      }, {
        key: "getFileDetails",
        value: function getFileDetails(state) {
          return state.imageDetails[0];
        }
      }, {
        key: "getRatioAsString",
        value: function getRatioAsString(state) {
          return state.imageDetails[0].width / state.imageDetails[0].height;
        }
      }]);

      return GetImageByIdState;
    }();

    GetImageByIdState.ɵfac = function GetImageByIdState_Factory(t) {
      return new (t || GetImageByIdState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]));
    };

    GetImageByIdState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: GetImageByIdState,
      factory: GetImageByIdState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["GetImageByImageId"])], GetImageByIdState.prototype, "getImageById", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], GetImageByIdState, "getImageDetail", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], GetImageByIdState, "getFileDetails", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], GetImageByIdState, "getRatioAsString", null);
    GetImageByIdState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'modelDetails'
    })], GetImageByIdState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GetImageByIdState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]
        }];
      }, {
        getImageById: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/images-by-tag-state.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/app-state/states/images-by-tag-state.ts ***!
    \****************************************************************/

  /*! exports provided: ImagesByTagState */

  /***/
  function srcAppSharedAppStateStatesImagesByTagStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesByTagState", function () {
      return ImagesByTagState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");

    var ImagesByTagState =
    /*#__PURE__*/
    function () {
      function ImagesByTagState(imageRequestService) {
        _classCallCheck(this, ImagesByTagState);

        this.imageRequestService = imageRequestService;
      }

      _createClass(ImagesByTagState, [{
        key: "searchByTags",
        value: function searchByTags(ctx, action) {
          var state = ctx.getState();
          var term = action.imagesByTag.searchTerm;
          console.log(action.imagesByTag.filterOpt);
          var dayFilterVal;

          if (action.imagesByTag.filterOpt && action.imagesByTag.filterOpt.timeFilterOptions) {
            dayFilterVal = action.imagesByTag.filterOpt.timeFilterOptions.filter(function (value) {
              return value.checked;
            }).map(function (filterByDays) {
              return filterByDays.value;
            });
          }

          console.log(dayFilterVal);
          var page = state.page;
          page = term !== state.searchTerm ? 0 : page;
          return this.imageRequestService.getImagesByTag({
            tagName: term,
            filterByDays: dayFilterVal !== undefined ? dayFilterVal[0] : null,
            mostDownloaded: action.imagesByTag.filterOpt !== null ? action.imagesByTag.filterOpt.mostDownloads.checked : null,
            mostLiked: action.imagesByTag.filterOpt !== null ? action.imagesByTag.filterOpt.mostLiked.checked : null
          }, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            ctx.patchState(Object.assign(Object.assign({}, state), {
              page: page,
              searchTerm: term,
              imagResponseList: res
            }));
            return state.imagResponseList;
          }));
        }
      }], [{
        key: "getData",
        value: function getData(state) {
          return state.imagResponseList;
        }
      }]);

      return ImagesByTagState;
    }();

    ImagesByTagState.ɵfac = function ImagesByTagState_Factory(t) {
      return new (t || ImagesByTagState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]));
    };

    ImagesByTagState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ImagesByTagState,
      factory: ImagesByTagState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["ImagesByTagsAction"])], ImagesByTagState.prototype, "searchByTags", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], ImagesByTagState, "getData", null);
    ImagesByTagState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'image',
      defaults: {
        page: 0,
        searchTerm: "",
        imagResponseList: null
      }
    })], ImagesByTagState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ImagesByTagState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]
        }];
      }, {
        searchByTags: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/images-by-user-id.state.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/app-state/states/images-by-user-id.state.ts ***!
    \********************************************************************/

  /*! exports provided: ImagesByUserIdState */

  /***/
  function srcAppSharedAppStateStatesImagesByUserIdStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesByUserIdState", function () {
      return ImagesByUserIdState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");

    var ImagesByUserIdState =
    /*#__PURE__*/
    function () {
      function ImagesByUserIdState(imageRequestService) {
        _classCallCheck(this, ImagesByUserIdState);

        this.imageRequestService = imageRequestService;
      }

      _createClass(ImagesByUserIdState, [{
        key: "searchByTags",
        value: function searchByTags(ctx, action) {
          var state = ctx.getState();
          return this.imageRequestService.getImagesByUserId(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            ctx.setState(Object.assign(Object.assign({}, state), {
              models: res
            }));
          }));
        }
      }], [{
        key: "getData",
        value: function getData(state) {
          return state.models;
        }
      }]);

      return ImagesByUserIdState;
    }();

    ImagesByUserIdState.ɵfac = function ImagesByUserIdState_Factory(t) {
      return new (t || ImagesByUserIdState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]));
    };

    ImagesByUserIdState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ImagesByUserIdState,
      factory: ImagesByUserIdState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["ImagesByUserIDAction"])], ImagesByUserIdState.prototype, "searchByTags", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], ImagesByUserIdState, "getData", null);
    ImagesByUserIdState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'ImagesByUserId'
    })], ImagesByUserIdState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ImagesByUserIdState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]
        }];
      }, {
        searchByTags: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/logged-user-details.state.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/app-state/states/logged-user-details.state.ts ***!
    \**********************************************************************/

  /*! exports provided: LoggedUserDetailsState */

  /***/
  function srcAppSharedAppStateStatesLoggedUserDetailsStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedUserDetailsState", function () {
      return LoggedUserDetailsState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_user_details_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/user-details.action */
    "./src/app/shared/app-state/actions/user-details.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_authentication_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");
    /* harmony import */


    var _serviceV2_update_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../serviceV2/update-user.service */
    "./src/app/serviceV2/update-user.service.ts");

    var LoggedUserDetailsState =
    /*#__PURE__*/
    function () {
      function LoggedUserDetailsState(authService, imageRequestService, store) {
        _classCallCheck(this, LoggedUserDetailsState);

        this.authService = authService;
        this.imageRequestService = imageRequestService;
        this.store = store;
      }

      _createClass(LoggedUserDetailsState, [{
        key: "getUserDetails",
        value: function getUserDetails(ctx, action) {
          return this.authService.getUserDetails(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            var state = ctx.getState();
            ctx.setState(Object.assign(Object.assign({}, state), {
              firstName: response.firstName,
              lastName: response.lastName,
              email: response.email,
              userId: response.userId,
              profileImgPath: response.profileImgPath,
              username: response.username
            }));
          }));
        }
      }, {
        key: "uploadProfileImage",
        value: function uploadProfileImage(ctx, action) {
          var _this23 = this;

          return this.imageRequestService.setUserProfile(action.userId, action.file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.status === 200) {
              console.log(res.body);
              var state = ctx.getState();
              return _this23.store.dispatch(new _actions_authentication_action__WEBPACK_IMPORTED_MODULE_5__["AuthenticationActions"].IsLoggedIn());
            }
          }));
        }
      }], [{
        key: "getProfile",
        value: function getProfile(state) {
          return state.profileImgPath;
        }
      }, {
        key: "loggedUserDetails",
        value: function loggedUserDetails(state) {
          return state;
        }
      }, {
        key: "loggedUserId",
        value: function loggedUserId(state) {
          return state.userId;
        }
      }, {
        key: "loggedFirstLastName",
        value: function loggedFirstLastName(state) {
          return state.firstName + " " + state.lastName;
        }
      }, {
        key: "loggedUsername",
        value: function loggedUsername(state) {
          return state.username;
        }
      }, {
        key: "getLoggedState",
        value: function getLoggedState(state) {
          return state;
        }
      }]);

      return LoggedUserDetailsState;
    }();

    LoggedUserDetailsState.ɵfac = function LoggedUserDetailsState_Factory(t) {
      return new (t || LoggedUserDetailsState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_update_user_service__WEBPACK_IMPORTED_MODULE_7__["UpdateUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    LoggedUserDetailsState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LoggedUserDetailsState,
      factory: LoggedUserDetailsState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_authentication_action__WEBPACK_IMPORTED_MODULE_5__["AuthenticationActions"].LoggedUserDetails)], LoggedUserDetailsState.prototype, "getUserDetails", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_user_details_action__WEBPACK_IMPORTED_MODULE_3__["UserDetailsActions"].UploadUserProfile)], LoggedUserDetailsState.prototype, "uploadProfileImage", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoggedUserDetailsState, "getProfile", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoggedUserDetailsState, "loggedUserDetails", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoggedUserDetailsState, "loggedUserId", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoggedUserDetailsState, "loggedFirstLastName", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoggedUserDetailsState, "loggedUsername", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoggedUserDetailsState, "getLoggedState", null);
    LoggedUserDetailsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'LoggedDetails'
    })], LoggedUserDetailsState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoggedUserDetailsState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthenticationService"]
        }, {
          type: _serviceV2_update_user_service__WEBPACK_IMPORTED_MODULE_7__["UpdateUserService"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, {
        getUserDetails: [],
        uploadProfileImage: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/login.state.model.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/app-state/states/login.state.model.ts ***!
    \**************************************************************/

  /*! exports provided: LoginStateModel */

  /***/
  function srcAppSharedAppStateStatesLoginStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginStateModel", function () {
      return LoginStateModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_authentication_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginStateModel =
    /*#__PURE__*/
    function () {
      function LoginStateModel(authService, router) {
        _classCallCheck(this, LoginStateModel);

        this.authService = authService;
        this.router = router;
      }

      _createClass(LoginStateModel, [{
        key: "login",
        value: function login(ctx, action) {
          var loginType = action.userLoginModel.password === undefined ? "GOOGLE" : "DEFAULT";
          return this.authService.login(action.userLoginModel, loginType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            var status = response.status === 200;
            var userId = response.headers.get("UserId");
            var state = ctx.getState();
            console.log(response);
            var body = response.body;
            console.log(body);
            ctx.patchState(Object.assign(Object.assign({}, state), {
              user: {
                userId: body.userId,
                username: body.username,
                firstName: body.firstName,
                lastName: body.lastName,
                profileImgPath: body.profileImgPath,
                email: body.email
              },
              status: status
            }));
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn(ctx, action) {
          return this.authService.isLoggedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var status = response.status === 200;
            var state = ctx.getState();
            var body = response.body;
            ctx.patchState(Object.assign(Object.assign({}, state), {
              user: {
                userId: body.userId,
                username: body.username,
                firstName: body.firstName,
                lastName: body.lastName,
                profileImgPath: body.profileImgPath,
                email: body.email
              },
              status: status
            }));
            return status;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log("Error in isLoggedin");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
          }));
        }
      }, {
        key: "logout",
        value: function logout(ctx, action) {
          return this.authService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            var state = ctx.getState();
            ctx.setState(Object.assign(Object.assign({}, state), {
              user: null,
              status: false
            }));
          }));
        }
      }], [{
        key: "loggedUserId",
        value: function loggedUserId(state) {
          return state.user.userId;
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn(state) {
          return state.status;
        }
      }, {
        key: "loggedInUser",
        value: function loggedInUser(state) {
          return state.user;
        }
      }, {
        key: "loggedFirstName",
        value: function loggedFirstName(state) {
          return state.user.firstName;
        }
      }, {
        key: "loggedLastName",
        value: function loggedLastName(state) {
          return state.user.lastName;
        }
      }, {
        key: "userName",
        value: function userName(state) {
          return state.user.username;
        }
      }, {
        key: "userId",
        value: function userId(state) {
          return state.user.userId;
        }
      }, {
        key: "profileImg",
        value: function profileImg(state) {
          return state.user.profileImgPath;
        }
      }]);

      return LoginStateModel;
    }();

    LoginStateModel.ɵfac = function LoginStateModel_Factory(t) {
      return new (t || LoginStateModel)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    LoginStateModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LoginStateModel,
      factory: LoginStateModel.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_authentication_action__WEBPACK_IMPORTED_MODULE_4__["AuthenticationActions"].LoginAction)], LoginStateModel.prototype, "login", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_authentication_action__WEBPACK_IMPORTED_MODULE_4__["AuthenticationActions"].IsLoggedIn)], LoginStateModel.prototype, "isLoggedIn", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_authentication_action__WEBPACK_IMPORTED_MODULE_4__["AuthenticationActions"].Logout)], LoginStateModel.prototype, "logout", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoginStateModel, "loggedUserId", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoginStateModel, "isLoggedIn", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoginStateModel, "loggedInUser", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoginStateModel, "loggedFirstName", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoginStateModel, "loggedLastName", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoginStateModel, "userName", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoginStateModel, "userId", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], LoginStateModel, "profileImg", null);
    LoginStateModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'Authentication',
      defaults: {
        user: undefined,
        status: false
      }
    })], LoginStateModel);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginStateModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, {
        login: [],
        isLoggedIn: [],
        logout: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/prepare-cropped-for-download.state.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared/app-state/states/prepare-cropped-for-download.state.ts ***!
    \*******************************************************************************/

  /*! exports provided: PrepareCroppedForDownloadState */

  /***/
  function srcAppSharedAppStateStatesPrepareCroppedForDownloadStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrepareCroppedForDownloadState", function () {
      return PrepareCroppedForDownloadState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../serviceV2/image-download.service */
    "./src/app/serviceV2/image-download.service.ts");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");

    var PrepareCroppedForDownloadState =
    /*#__PURE__*/
    function () {
      function PrepareCroppedForDownloadState(downloadService, imgReqService) {
        _classCallCheck(this, PrepareCroppedForDownloadState);

        this.downloadService = downloadService;
        this.imgReqService = imgReqService;
      }

      _createClass(PrepareCroppedForDownloadState, [{
        key: "setCroppedOffsetValues",
        value: function setCroppedOffsetValues(ctx, action) {
          var subImageWidth = action.subImageWidth;
          var subImageHeight = action.subImageHeight;
          var possibleResolutions = []; // put cropped image resolution into the resolutionList

          possibleResolutions.push(subImageWidth.toFixed(0) + " x " + subImageHeight.toFixed(0)); // get possible app resolution array from endpoint

          return this.imgReqService.getResolutions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (response) {
            var state = ctx.getState();
            var ratio = subImageWidth / subImageHeight; // check if querformat or hochformat

            if (subImageWidth > subImageHeight) {
              response.widthList.forEach(function (widthResolution) {
                if (subImageWidth > widthResolution) {
                  var height = widthResolution / ratio;
                  possibleResolutions.push(widthResolution + " x " + height.toFixed(0));
                }
              }); // only take lower resolutions from response array
            } else if (subImageHeight > subImageWidth) {
              response.heightList.forEach(function (heightResolution) {
                if (subImageHeight > heightResolution) {
                  var width = heightResolution * ratio;
                  possibleResolutions.push(width.toFixed(0) + " x " + heightResolution.toFixed(0));
                }
              });
            }

            ctx.patchState(Object.assign(Object.assign({}, state), {
              offsetX: action.offsetX,
              offsetY: action.offsetY,
              subImageWidth: subImageWidth,
              subImageHeight: subImageHeight,
              possibleResolutions: possibleResolutions
            }));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ctx.getState());
          }));
        }
      }], [{
        key: "getCroppedValues",
        value: function getCroppedValues(state) {
          return state;
        }
      }]);

      return PrepareCroppedForDownloadState;
    }();

    PrepareCroppedForDownloadState.ɵfac = function PrepareCroppedForDownloadState_Factory(t) {
      return new (t || PrepareCroppedForDownloadState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_6__["ImageDownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_7__["ImageRequestService"]));
    };

    PrepareCroppedForDownloadState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PrepareCroppedForDownloadState,
      factory: PrepareCroppedForDownloadState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["SetCroppedOffsetValues"])], PrepareCroppedForDownloadState.prototype, "setCroppedOffsetValues", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], PrepareCroppedForDownloadState, "getCroppedValues", null);
    PrepareCroppedForDownloadState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'prepareForCroppedDownloadRequest'
    })], PrepareCroppedForDownloadState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PrepareCroppedForDownloadState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_6__["ImageDownloadService"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_7__["ImageRequestService"]
        }];
      }, {
        setCroppedOffsetValues: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/related-images.state.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/app-state/states/related-images.state.ts ***!
    \*****************************************************************/

  /*! exports provided: RelatedImagesState */

  /***/
  function srcAppSharedAppStateStatesRelatedImagesStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelatedImagesState", function () {
      return RelatedImagesState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");

    var RelatedImagesState =
    /*#__PURE__*/
    function () {
      function RelatedImagesState(imageReqService) {
        _classCallCheck(this, RelatedImagesState);

        this.imageReqService = imageReqService;
      }

      _createClass(RelatedImagesState, [{
        key: "userDetails",
        value: function userDetails(ctx, action) {
          return this.imageReqService.getRelatedImagesByTagList(action.tagIds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log(response);
            var state = ctx.getState();
            state.data = response;
            ctx.setState({
              data: response
            });
            return response;
          }));
        }
      }], [{
        key: "getRelatedImages",
        value: function getRelatedImages(state) {
          return state.data;
        }
      }]);

      return RelatedImagesState;
    }();

    RelatedImagesState.ɵfac = function RelatedImagesState_Factory(t) {
      return new (t || RelatedImagesState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]));
    };

    RelatedImagesState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RelatedImagesState,
      factory: RelatedImagesState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_4__["GetRelatedImagesByTagIDs"])], RelatedImagesState.prototype, "userDetails", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], RelatedImagesState, "getRelatedImages", null);
    RelatedImagesState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'RelatedImages'
    })], RelatedImagesState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RelatedImagesState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_5__["ImageRequestService"]
        }];
      }, {
        userDetails: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/request-status.state.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/app-state/states/request-status.state.ts ***!
    \*****************************************************************/

  /*! exports provided: RequestStatusState */

  /***/
  function srcAppSharedAppStateStatesRequestStatusStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestStatusState", function () {
      return RequestStatusState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_request_message_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/request-message.action */
    "./src/app/shared/app-state/actions/request-message.action.ts");

    var RequestStatusState =
    /*#__PURE__*/
    function () {
      function RequestStatusState() {
        _classCallCheck(this, RequestStatusState);
      }

      _createClass(RequestStatusState, [{
        key: "getRequestStatus",
        value: function getRequestStatus(ctx, action) {
          var state = ctx.getState();
          state.message = '';

          if (action.requestStatus !== null) {
            ctx.setState({
              message: action.requestStatus.message,
              status: action.requestStatus.status !== null ? action.requestStatus.status : null
            });
          }
        }
      }], [{
        key: "getStatus",
        value: function getStatus(state) {
          return state;
        }
      }]);

      return RequestStatusState;
    }();

    RequestStatusState.ɵfac = function RequestStatusState_Factory(t) {
      return new (t || RequestStatusState)();
    };

    RequestStatusState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RequestStatusState,
      factory: RequestStatusState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_request_message_action__WEBPACK_IMPORTED_MODULE_3__["RequestMessageAction"])], RequestStatusState.prototype, "getRequestStatus", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], RequestStatusState, "getStatus", null);
    RequestStatusState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'RequestStatus'
    })], RequestStatusState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RequestStatusState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], null, {
        getRequestStatus: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/search-by-tag.state.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/app-state/states/search-by-tag.state.ts ***!
    \****************************************************************/

  /*! exports provided: SearchByTagState */

  /***/
  function srcAppSharedAppStateStatesSearchByTagStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchByTagState", function () {
      return SearchByTagState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_query_tag_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/query-tag-action */
    "./src/app/shared/app-state/actions/query-tag-action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _serviceV2_tag_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/tag-request.service */
    "./src/app/serviceV2/tag-request.service.ts");

    var SearchByTagState =
    /*#__PURE__*/
    function () {
      function SearchByTagState(tagService) {
        _classCallCheck(this, SearchByTagState);

        this.tagService = tagService;
      }

      _createClass(SearchByTagState, [{
        key: "queryTags",
        value: function queryTags(ctx, action) {
          return this.tagService.searchByTagName(action.searchTerm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            var state = ctx.getState(); //ctx.patchState({result: res})

            ctx.setState(Object.assign(Object.assign({}, state), {
              result: res
            }));
          }));
        }
      }], [{
        key: "tags",
        value: function tags(state) {
          return state;
        }
      }, {
        key: "getFetchedTagListAsOption",
        value: function getFetchedTagListAsOption(state) {
          return state.result.map(function (val) {
            return {
              value: val.tag
            };
          });
        }
      }, {
        key: "getFetchedTagList",
        value: function getFetchedTagList(state) {
          return state.result;
        }
      }]);

      return SearchByTagState;
    }();

    SearchByTagState.ɵfac = function SearchByTagState_Factory(t) {
      return new (t || SearchByTagState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_tag_request_service__WEBPACK_IMPORTED_MODULE_5__["TagRequestService"]));
    };

    SearchByTagState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SearchByTagState,
      factory: SearchByTagState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_query_tag_action__WEBPACK_IMPORTED_MODULE_3__["QueryTagAction"])], SearchByTagState.prototype, "queryTags", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], SearchByTagState, "tags", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], SearchByTagState, "getFetchedTagListAsOption", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], SearchByTagState, "getFetchedTagList", null);
    SearchByTagState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'tag'
    })], SearchByTagState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SearchByTagState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_tag_request_service__WEBPACK_IMPORTED_MODULE_5__["TagRequestService"]
        }];
      }, {
        queryTags: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/search-by-users.state.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/app-state/states/search-by-users.state.ts ***!
    \******************************************************************/

  /*! exports provided: SearchByUsersState */

  /***/
  function srcAppSharedAppStateStatesSearchByUsersStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchByUsersState", function () {
      return SearchByUsersState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_user_details_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/user-details.action */
    "./src/app/shared/app-state/actions/user-details.action.ts");
    /* harmony import */


    var _serviceV2_search_by_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/search-by-users.service */
    "./src/app/serviceV2/search-by-users.service.ts");

    var SearchUsers = _actions_user_details_action__WEBPACK_IMPORTED_MODULE_4__["UserDetailsActions"].SearchUsers;

    var SearchByUsersState =
    /*#__PURE__*/
    function () {
      function SearchByUsersState(userSearchService) {
        _classCallCheck(this, SearchByUsersState);

        this.userSearchService = userSearchService;
      }

      _createClass(SearchByUsersState, [{
        key: "queryTags",
        value: function queryTags(ctx, action) {
          return this.userSearchService.searchByEmail(action.searchTerm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log(response);
            var users = {
              data: response
            };
            var state = ctx.getState();
            ctx.patchState(Object.assign(Object.assign({}, state), {
              data: response
            }));
            return ctx.getState();
          }));
        }
      }], [{
        key: "getFetchedUsersAsOptions",
        value: function getFetchedUsersAsOptions(state) {
          console.log(state.data);
          return state.data.map(function (val) {
            return {
              value: val.username
            };
          });
        }
      }, {
        key: "getFetchedUsers",
        value: function getFetchedUsers(state) {
          console.log(state.data);
          return state.data;
        }
      }]);

      return SearchByUsersState;
    }();

    SearchByUsersState.ɵfac = function SearchByUsersState_Factory(t) {
      return new (t || SearchByUsersState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_serviceV2_search_by_users_service__WEBPACK_IMPORTED_MODULE_5__["SearchByUsersService"]));
    };

    SearchByUsersState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SearchByUsersState,
      factory: SearchByUsersState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(SearchUsers)], SearchByUsersState.prototype, "queryTags", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], SearchByUsersState, "getFetchedUsersAsOptions", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], SearchByUsersState, "getFetchedUsers", null);
    SearchByUsersState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
      name: 'users'
    })], SearchByUsersState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchByUsersState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_search_by_users_service__WEBPACK_IMPORTED_MODULE_5__["SearchByUsersService"]
        }];
      }, {
        queryTags: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/select-image.state.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/app-state/states/select-image.state.ts ***!
    \***************************************************************/

  /*! exports provided: SelectImageState */

  /***/
  function srcAppSharedAppStateStatesSelectImageStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectImageState", function () {
      return SelectImageState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");

    var SelectImageState =
    /*#__PURE__*/
    function () {
      function SelectImageState() {
        _classCallCheck(this, SelectImageState);
      }

      _createClass(SelectImageState, [{
        key: "selectImage",
        value: function selectImage(ctx, action) {
          var state = ctx.getState();
          ctx.setState(Object.assign(Object.assign({}, state), {
            image: action.image
          }));
        }
      }], [{
        key: "getSelectedImage",
        value: function getSelectedImage(state) {
          return state.image;
        }
      }, {
        key: "getSelectedImageUrlReference",
        value: function getSelectedImageUrlReference(state) {
          return state.image.linkReference;
        }
      }, {
        key: "getSelectedImageId",
        value: function getSelectedImageId(state) {
          return state.image.imageId;
        }
      }, {
        key: "getSelectedLink",
        value: function getSelectedLink(state) {
          return state.link;
        }
      }, {
        key: "getIsPublic",
        value: function getIsPublic(state) {
          return state.image.isPublic;
        }
      }]);

      return SelectImageState;
    }();

    SelectImageState.ɵfac = function SelectImageState_Factory(t) {
      return new (t || SelectImageState)();
    };

    SelectImageState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SelectImageState,
      factory: SelectImageState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_3__["SelectImage"])], SelectImageState.prototype, "selectImage", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], SelectImageState, "getSelectedImage", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], SelectImageState, "getSelectedImageUrlReference", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], SelectImageState, "getSelectedImageId", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], SelectImageState, "getSelectedLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], SelectImageState, "getIsPublic", null);
    SelectImageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'SelectImage'
    })], SelectImageState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SelectImageState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [];
      }, {
        selectImage: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/signup.state.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/app-state/states/signup.state.ts ***!
    \*********************************************************/

  /*! exports provided: SignupState */

  /***/
  function srcAppSharedAppStateStatesSignupStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupState", function () {
      return SignupState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _actions_authentication_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions_request_message_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../actions/request-message.action */
    "./src/app/shared/app-state/actions/request-message.action.ts");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");

    var SignupState =
    /*#__PURE__*/
    function () {
      function SignupState(authService) {
        _classCallCheck(this, SignupState);

        this.authService = authService;
      }

      _createClass(SignupState, [{
        key: "createNewUser",
        value: function createNewUser(ctx, action) {
          return this.authService.createNewUser(action.userRegistration).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var state = ctx.getState();
            ctx.setState(Object.assign(Object.assign({}, state), {
              firstName: action.userRegistration.firstName,
              lastName: action.userRegistration.lastName,
              email: action.userRegistration.email,
              password: action.userRegistration.password,
              address: action.userRegistration.address
            }));
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            ctx.dispatch(new _actions_request_message_action__WEBPACK_IMPORTED_MODULE_6__["RequestMessageAction"]({
              status: err.status,
              message: err.error.message
            }));
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
          }));
        }
      }], [{
        key: "registrationModel",
        value: function registrationModel(state) {
          return state;
        }
      }]);

      return SignupState;
    }();

    SignupState.ɵfac = function SignupState_Factory(t) {
      return new (t || SignupState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_7__["UserAuthenticationService"]));
    };

    SignupState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SignupState,
      factory: SignupState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_authentication_action__WEBPACK_IMPORTED_MODULE_3__["AuthenticationActions"].SignUpAction)], SignupState.prototype, "createNewUser", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], SignupState, "registrationModel", null);
    SignupState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
      name: 'Signup',
      defaults: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: undefined
      }
    })], SignupState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_7__["UserAuthenticationService"]
        }];
      }, {
        createNewUser: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/update-user-profile-image.state.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/app-state/states/update-user-profile-image.state.ts ***!
    \****************************************************************************/

  /*! exports provided: UpdateUserProfileImageState */

  /***/
  function srcAppSharedAppStateStatesUpdateUserProfileImageStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserProfileImageState", function () {
      return UpdateUserProfileImageState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _actions_update_user_profile_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/update-user-profile.action */
    "./src/app/shared/app-state/actions/update-user-profile.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _serviceV2_update_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/update-user.service */
    "./src/app/serviceV2/update-user.service.ts");

    var UpdateUserProfileImageState =
    /*#__PURE__*/
    function () {
      function UpdateUserProfileImageState(updateProfileService) {
        _classCallCheck(this, UpdateUserProfileImageState);

        this.updateProfileService = updateProfileService;
      }

      _createClass(UpdateUserProfileImageState, [{
        key: "setProfile",
        value: function setProfile(ctx, action) {
          return this.updateProfileService.setUserProfile(action.userId, action.file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            var state = ctx.getState();
            state.file = action.file;
            state.userId = action.userId;
            ctx.patchState(Object.assign({}, state));
          }));
        }
      }]);

      return UpdateUserProfileImageState;
    }();

    UpdateUserProfileImageState.ɵfac = function UpdateUserProfileImageState_Factory(t) {
      return new (t || UpdateUserProfileImageState)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_serviceV2_update_user_service__WEBPACK_IMPORTED_MODULE_5__["UpdateUserService"]));
    };

    UpdateUserProfileImageState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: UpdateUserProfileImageState,
      factory: UpdateUserProfileImageState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_update_user_profile_action__WEBPACK_IMPORTED_MODULE_2__["UpdateUserProfileActions"].UploadUserProfileImg)], UpdateUserProfileImageState.prototype, "setProfile", null);
    UpdateUserProfileImageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'foo'
    })], UpdateUserProfileImageState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](UpdateUserProfileImageState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_update_user_service__WEBPACK_IMPORTED_MODULE_5__["UpdateUserService"]
        }];
      }, {
        setProfile: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-state/states/upload-image.state.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/app-state/states/upload-image.state.ts ***!
    \***************************************************************/

  /*! exports provided: UploadImageState */

  /***/
  function srcAppSharedAppStateStatesUploadImageStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadImageState", function () {
      return UploadImageState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_image_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var _serviceV2_image_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../serviceV2/image-upload.service */
    "./src/app/serviceV2/image-upload.service.ts");

    var UploadImageState =
    /*#__PURE__*/
    function () {
      function UploadImageState(uploadService) {
        _classCallCheck(this, UploadImageState);

        this.uploadService = uploadService;
      }

      _createClass(UploadImageState, [{
        key: "uploadImage",
        value: function uploadImage(ctx, action) {
          // const userId = action.uploadModel.userId;
          // const image = action.uploadModel.file;
          return this.uploadService.addToUserLibrary(action.uploadModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            // console.log(response.status)
            var state = ctx.getState();
            ctx.setState(Object.assign(Object.assign({}, state), {
              userId: action.uploadModel.userId,
              orgFile: action.uploadModel.orgFile,
              downloadFile: action.uploadModel.downloadFile,
              status: response.status === 200
            }));
          }));
        }
      }], [{
        key: "userDetails",
        value: function userDetails(state) {
          return state;
        }
      }]);

      return UploadImageState;
    }();

    UploadImageState.ɵfac = function UploadImageState_Factory(t) {
      return new (t || UploadImageState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serviceV2_image_upload_service__WEBPACK_IMPORTED_MODULE_5__["ImageUploadService"]));
    };

    UploadImageState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: UploadImageState,
      factory: UploadImageState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_image_action__WEBPACK_IMPORTED_MODULE_4__["UploadImage"])], UploadImageState.prototype, "uploadImage", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], UploadImageState, "userDetails", null);
    UploadImageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'Upload'
    })], UploadImageState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UploadImageState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _serviceV2_image_upload_service__WEBPACK_IMPORTED_MODULE_5__["ImageUploadService"]
        }];
      }, {
        uploadImage: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/dialog-wrapper/login-dialog-wrapper.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/dialog-wrapper/login-dialog-wrapper.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LoginDialogWrapperComponent */

  /***/
  function srcAppSharedDialogWrapperLoginDialogWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginDialogWrapperComponent", function () {
      return LoginDialogWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/shared/login/login.component.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../public/search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");

    var LoginDialogWrapperComponent =
    /*#__PURE__*/
    function () {
      function LoginDialogWrapperComponent(dialog, store) {
        _classCallCheck(this, LoginDialogWrapperComponent);

        this.dialog = dialog;
        this.store = store;
      }

      _createClass(LoginDialogWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ref = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], {
            width: '750px',
            height: '400px',
            disableClose: true,
            autoFocus: false
          });
        }
      }]);

      return LoginDialogWrapperComponent;
    }();

    LoginDialogWrapperComponent.ɵfac = function LoginDialogWrapperComponent_Factory(t) {
      return new (t || LoginDialogWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    LoginDialogWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginDialogWrapperComponent,
      selectors: [["app-dialog-wrapper"]],
      decls: 1,
      vars: 0,
      template: function LoginDialogWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-toolbar");
        }
      },
      directives: [_public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["SearchToolbarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2ctd3JhcHBlci9sb2dpbi1kaWFsb2ctd3JhcHBlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginDialogWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-wrapper',
          templateUrl: './login-dialog-wrapper.component.html',
          styleUrls: ['./login-dialog-wrapper.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/domain/address-model/user-address-model.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/domain/address-model/user-address-model.ts ***!
    \*******************************************************************/

  /*! exports provided: UserAddressModel */

  /***/
  function srcAppSharedDomainAddressModelUserAddressModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAddressModel", function () {
      return UserAddressModel;
    });

    var UserAddressModel = function UserAddressModel(street, region, zipcode, country) {
      _classCallCheck(this, UserAddressModel);

      this.street = street;
      this.region = region;
      this.zipcode = zipcode;
      this.country = country;
    };
    /***/

  },

  /***/
  "./src/app/shared/domain/imageModel/ImagesByTagNameQuery.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/domain/imageModel/ImagesByTagNameQuery.ts ***!
    \******************************************************************/

  /*! exports provided: FilterName, ImagesByTagNameWithFilterArgs, ImagesByTagNameWithFilterOpt, ImagesByTagNameQueryImpl, ImagesByTagNameStateModel */

  /***/
  function srcAppSharedDomainImageModelImagesByTagNameQueryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterName", function () {
      return FilterName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesByTagNameWithFilterArgs", function () {
      return ImagesByTagNameWithFilterArgs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesByTagNameWithFilterOpt", function () {
      return ImagesByTagNameWithFilterOpt;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesByTagNameQueryImpl", function () {
      return ImagesByTagNameQueryImpl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesByTagNameStateModel", function () {
      return ImagesByTagNameStateModel;
    });

    var FilterName = function FilterName() {
      _classCallCheck(this, FilterName);
    };

    FilterName.FILTER_BY_DATE_WEEK = "WEEK";
    FilterName.FILTER_BY_DATE_MONTH = "MONTH";
    FilterName.FILTER_BY_DATE_YEAR = "YEAR";
    FilterName.FILTER_BY_MOST_DOWNLOADS = "DOWNLOADS";
    FilterName.FILTER_BY_MOST_LIKES = "LIKES";

    var ImagesByTagNameWithFilterArgs = function ImagesByTagNameWithFilterArgs(searchTerm, filters) {
      _classCallCheck(this, ImagesByTagNameWithFilterArgs);

      this.searchTerm = searchTerm;
      this.filters = filters;
    };

    var ImagesByTagNameWithFilterOpt = function ImagesByTagNameWithFilterOpt(filterOpt, searchTerm) {
      _classCallCheck(this, ImagesByTagNameWithFilterOpt);

      this.filterOpt = filterOpt;
      this.searchTerm = searchTerm;
    };

    var ImagesByTagNameQueryImpl = function ImagesByTagNameQueryImpl(searchTerm) {
      _classCallCheck(this, ImagesByTagNameQueryImpl);

      this.searchTerm = searchTerm;
    };

    var ImagesByTagNameStateModel = function ImagesByTagNameStateModel(page, searchTerm, imagResponseList) {
      _classCallCheck(this, ImagesByTagNameStateModel);

      this.page = page;
      this.searchTerm = searchTerm;
      this.imagResponseList = imagResponseList;
    };
    /***/

  },

  /***/
  "./src/app/shared/domain/userModel/UserLoginModel.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/domain/userModel/UserLoginModel.ts ***!
    \***********************************************************/

  /*! exports provided: UserLoginModel, LoggedInUserModel, GoogleUserLogin */

  /***/
  function srcAppSharedDomainUserModelUserLoginModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginModel", function () {
      return UserLoginModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedInUserModel", function () {
      return LoggedInUserModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleUserLogin", function () {
      return GoogleUserLogin;
    });

    var UserLoginModel = function UserLoginModel(email, password) {
      _classCallCheck(this, UserLoginModel);

      this.email = email;
      this.password = password;
    };

    var LoggedInUserModel = function LoggedInUserModel(userId, email) {
      _classCallCheck(this, LoggedInUserModel);

      this.email = email;
      this.userId = userId;
    };

    var GoogleUserLogin = function GoogleUserLogin(email, firstName, lastName, profileImg, tokenId) {
      _classCallCheck(this, GoogleUserLogin);

      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.profileImg = profileImg;
      this.tokenId = tokenId;
    };
    /***/

  },

  /***/
  "./src/app/shared/domain/userModel/user-details.model.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/domain/userModel/user-details.model.ts ***!
    \***************************************************************/

  /*! exports provided: UserRegistrationModel, UserDetailsImpl */

  /***/
  function srcAppSharedDomainUserModelUserDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationModel", function () {
      return UserRegistrationModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsImpl", function () {
      return UserDetailsImpl;
    });
    /* harmony import */


    var _address_model_user_address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../address-model/user-address-model */
    "./src/app/shared/domain/address-model/user-address-model.ts");

    var UserRegistrationModel = function UserRegistrationModel(firstName, lastName, email, password, street, region, zipcode, country) {
      _classCallCheck(this, UserRegistrationModel);

      this.address = new _address_model_user_address_model__WEBPACK_IMPORTED_MODULE_0__["UserAddressModel"](street, region, zipcode, country);
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.password = password;
    };

    var UserDetailsImpl = function UserDetailsImpl(userId, email, firstName, lastName, profileImgPath, username) {
      _classCallCheck(this, UserDetailsImpl);

      this.userId = userId;
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.profileImgPath = profileImgPath;
      this.username = username;
    };
    /***/

  },

  /***/
  "./src/app/shared/image-content/image-content.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/image-content/image-content.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ImageContentComponent */

  /***/
  function srcAppSharedImageContentImageContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageContentComponent", function () {
      return ImageContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _app_state_states_images_by_tag_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app-state/states/images-by-tag-state */
    "./src/app/shared/app-state/states/images-by-tag-state.ts");
    /* harmony import */


    var _app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var _domain_imageModel_ImagesByTagNameQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../domain/imageModel/ImagesByTagNameQuery */
    "./src/app/shared/domain/imageModel/ImagesByTagNameQuery.ts");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "./node_modules/@ngxs/router-plugin/__ivy_ngcc__/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _image_detail_view_image_detail_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../image-detail-view/image-detail-view.component */
    "./src/app/shared/image-detail-view/image-detail-view.component.ts");
    /* harmony import */


    var _app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../app-state/states/login.state.model */
    "./src/app/shared/app-state/states/login.state.model.ts");
    /* harmony import */


    var _private_add_tags_dialog_add_tags_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../private/add-tags-dialog/add-tags-dialog.component */
    "./src/app/private/add-tags-dialog/add-tags-dialog.component.ts");
    /* harmony import */


    var _app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../app-state/actions/user-details.action */
    "./src/app/shared/app-state/actions/user-details.action.ts");
    /* harmony import */


    var _app_state_states_images_by_user_id_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../app-state/states/images-by-user-id.state */
    "./src/app/shared/app-state/states/images-by-user-id.state.ts");
    /* harmony import */


    var _image_row_mapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../image-row-mapper */
    "./src/app/shared/image-row-mapper.ts");
    /* harmony import */


    var _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../app-state/actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var _private_change_image_details_dialog_change_image_details_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../private/change-image-details-dialog/change-image-details-dialog.component */
    "./src/app/private/change-image-details-dialog/change-image-details-dialog.component.ts");
    /* harmony import */


    var _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../serviceV2/image-request.service */
    "./src/app/serviceV2/image-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _serviceV2_update_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../serviceV2/update-user.service */
    "./src/app/serviceV2/update-user.service.ts");
    /* harmony import */


    var _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../serviceV2/image-download.service */
    "./src/app/serviceV2/image-download.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var IsLoggedIn = _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_16__["AuthenticationActions"].IsLoggedIn;

    function ImageContentComponent_div_1_div_5_a_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_1_div_5_a_4_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r199);

          var item_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r197.navigateToUser(item_r187);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r187.user.email.substr(0, item_r187.user.email.indexOf("@")), " ");
      }
    }

    function ImageContentComponent_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImageContentComponent_div_1_div_5_a_4_Template, 2, 1, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r187.user.profileImgPath);
      }
    }

    function ImageContentComponent_div_1_div_6_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_1_div_6_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r205);

          var item_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r203.navigateToUser(item_r187);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r187.user.profileImgPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r187.user.email.substr(0, item_r187.user.email.indexOf("@")));
      }
    }

    function ImageContentComponent_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageContentComponent_div_1_div_6_a_1_Template, 4, 2, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r187.user.profileImgPath);
      }
    }

    function ImageContentComponent_div_1_mat_icon_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_1_mat_icon_9_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r210);

          var item_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r208.changeImageDetails(item_r187);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "public ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ImageContentComponent_div_1_mat_icon_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_1_mat_icon_10_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r213);

          var item_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r211.changeImageDetails(item_r187);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "lock ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ImageContentComponent_div_1_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_1_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r216);

          var item_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r214.showAddTagsDialog(item_r187);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add tags");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ImageContentComponent_div_1_a_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_1_a_38_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r219);

          var i_r217 = ctx.$implicit;

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r218.clickedTag(i_r217.tag);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r217 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", "# " + i_r217.tag, " ");
      }
    }

    function ImageContentComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ImageContentComponent_div_1_div_5_Template, 5, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ImageContentComponent_div_1_div_6_Template, 2, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ImageContentComponent_div_1_mat_icon_9_Template, 2, 0, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ImageContentComponent_div_1_mat_icon_10_Template, 2, 0, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-menu", null, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ImageContentComponent_div_1_button_17_Template, 5, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r221);

          var item_r187 = ctx.$implicit;

          var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r220.showImageDetailDialog(item_r187);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "fullscreen");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Fullscreen");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_1_Template_a_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r221);

          var item_r187 = ctx.$implicit;

          var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r222.download(item_r187);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "save_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Download image");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "public");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Go to source");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_1_Template_a_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r221);

          var item_r187 = ctx.$implicit;

          var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r223.likeImage(item_r187, item_r187.userId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "thumb_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ImageContentComponent_div_1_a_38_Template, 2, 1, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r187 = ctx.$implicit;

        var _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

        var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r187.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r187.user.profileImgPath);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r187.user.profileImgPath);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r187.isPublic);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r187.isPublic);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r185.editable && ctx_r185.isProfile);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("matTooltip", "Go to ", item_r187.linkReference, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r187.linkReference, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r187.tags);
      }
    }

    function ImageContentComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageContentComponent_div_4_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r225);

          var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r224.loadNextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Load more ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "more_horiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ImageContentComponent =
    /*#__PURE__*/
    function () {
      function ImageContentComponent(store, imgReqService, router, updateUserService, dialog, downloadService) {
        _classCallCheck(this, ImageContentComponent);

        this.store = store;
        this.imgReqService = imgReqService;
        this.router = router;
        this.updateUserService = updateUserService;
        this.dialog = dialog;
        this.downloadService = downloadService;
        this.panelOpenState = false;
        this.hover = false;
        this.editable = false;
        this.setCropperObjectWithMinimumProperties = new Array();
        this.end = false;
        this.offset = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.evenRowLimit = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.rows = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(ImageContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.models.subscribe(function (value) {
            var imageRowViews = _image_row_mapper__WEBPACK_IMPORTED_MODULE_15__["ImageRowMapper"].mapToImageRow(value); // if (imageRowViews) console.log(imageRowViews.length);


            _this24.rows.next(imageRowViews); // let countRow: number = 0;
            // let countItem: number = 0;
            // let rowModels: ImageRowView[] = [];
            // let temp: ImageModel[] = [];
            // let diffRatio: ImageRowView = {row: null, content: []};
            // if (value !== undefined && value !== null) {
            //   value.forEach((value1, index) => {
            //     countItem++;
            //     if (countItem <= 3) temp.push(value1);
            //     if (countItem == 3) {
            //       countItem = 0;
            //       rowModels.push({row: countRow, content: temp});
            //       temp = [];
            //       countRow++;
            //     }
            //     if (index == value.length - 1) {
            //       rowModels.push({row: countRow, content: temp});
            //     }
            //   })
            //   console.log(rowModels);
            // }

          });
          this.$loggedUserId.subscribe(function (id) {
            console.log(id);

            _this24.models.subscribe(function (data) {
              if (data) {
                for (var i = 0; i < data.length; i++) {
                  if (data[i].user.userId !== id) {
                    // console.log(data[i]);
                    // console.log(id);
                    _this24.editable = false;
                    break;
                  } else {
                    _this24.editable = true;
                  }
                }
              }
            });
          });
          console.log(this.editable); // const batchMap = this.offset.pipe(
          //   throttleTime(500),
          //   tap(x => console.log(x))
          // );
          //
          //
          // batchMap.subscribe(value => console.log(value))
          // this.fData$.subscribe(value => {
          //   if (value !== undefined && value != null) {
          //     this.dataEvenRowSize = Math.floor(value.length / 3);
          //     this.data = value;
          //     this.evenRowLimit.next(true)
          //   }
          // })
        }
      }, {
        key: "nextBatch",
        value: function nextBatch(e, offset) {
          if (this.end) {
            return;
          }

          var end = this.viewport.getRenderedRange().end;
          var total = this.viewport.getDataLength();
          console.log(total);
          console.log(end);
          this.offset.subscribe(function (value) {
            return console.log(value);
          });
          if (end == total) this.offset.next(offset);
        }
      }, {
        key: "getBatch",
        value: function getBatch(lastSeen) {}
      }, {
        key: "onResize",
        value: function onResize($event) {}
      }, {
        key: "enter",
        value: function enter() {
          this.hover = true;
          console.log(this.hover);
        }
      }, {
        key: "leave",
        value: function leave() {
          this.hover = false;
          console.log(this.hover);
        }
      }, {
        key: "download",
        value: function download(img) {
          console.log(img);
          this.store.dispatch(new _app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__["GetImageByImageId"](img.imageId));
          this.router.navigate(['image', {
            imageId: img.imageId
          }]);
        }
      }, {
        key: "clickedTag",
        value: function clickedTag(tag) {
          var _this25 = this;

          this.store.dispatch(new _app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__["ImagesByTagsAction"](new _domain_imageModel_ImagesByTagNameQuery__WEBPACK_IMPORTED_MODULE_7__["ImagesByTagNameWithFilterOpt"](null, tag))).subscribe(function (value) {
            console.log(value);
            console.log("Search pressed..");

            _this25.router.navigate(['/image-by-tags']);
          });
          /*this.store.dispatch(
            new ImagesByTagsAction(new ImagesByTagNameQueryImpl(tag))
          ).subscribe(value => {
            /!*this.store.dispatch(new Navigate(['/image-by-tags']))*!/
            this.router.navigate(['image-by-tags'])
          });*/
        }
      }, {
        key: "reachedLastEvenElement",
        value: function reachedLastEvenElement(val) {
          console.log(val);
        }
      }, {
        key: "track",
        value: function track(index, el) {
          return index;
        }
      }, {
        key: "loadNextPage",
        value: function loadNextPage() {
          this.store.dispatch(new _app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__["ImagesNextPageAction"](this.data));
        }
      }, {
        key: "navigateToUser",
        value: function navigateToUser(item) {
          console.log(item.user.userId);
          this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__["Navigate"](['profile', {
            userId: item.user.userId
          }]));
        }
      }, {
        key: "showImageDetailDialog",
        value: function showImageDetailDialog(item) {
          var _this26 = this;

          this.store.dispatch(new _app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__["SelectImage"](item)).subscribe(function (value) {
            var ref = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();

            _this26.dialog.open(_image_detail_view_image_detail_view_component__WEBPACK_IMPORTED_MODULE_10__["ImageDetailViewComponent"], {
              width: '1150px',
              height: '600px',
              data: item // disableClose: true,
              // autoFocus: false

            });
          });
        }
      }, {
        key: "changeImageDetails",
        value: function changeImageDetails(item) {
          if (this.isProfile && this.editable) {
            this.store.dispatch(new _app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__["SelectImage"](item));
            this.dialog.open(_private_change_image_details_dialog_change_image_details_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ChangeImageDetailsDialogComponent"], {
              width: '780px',
              height: '780px',
              data: item
            });
          }
        }
      }, {
        key: "showAddTagsDialog",
        value: function showAddTagsDialog(item) {
          var _this27 = this;

          var ref = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"](); // ref.disableClose = true;

          this.store.dispatch(new _app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_6__["SelectImage"](item));
          this.dialog.open(_private_add_tags_dialog_add_tags_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AddTagsDialogComponent"], {
            width: '435px',
            height: '600px',
            data: item,
            panelClass: 'add-tag-dialog'
          });
          this.dialog.afterAllClosed.subscribe(function (value) {
            console.log("FOO");

            _this27.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__["Navigate"](['profile', {
              userId: item.user.userId
            }]));
          });
        } // when not logged user likes image then redirect to login page

      }, {
        key: "likeImage",
        value: function likeImage(item, userId) {
          var _this28 = this;

          console.log(this.store.selectSnapshot(_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_11__["LoginStateModel"].loggedUserId));
          this.store.dispatch(new IsLoggedIn()).subscribe(function (value1) {
            _this28.updateUserService.addUserLike(item.imageId, value1.Authentication.user.userId).subscribe(function (value) {
              return console.log(value);
            });

            _this28.store.dispatch(new _app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_13__["UserDetailsActions"].GetUserDetails(userId));
          });
        }
      }]);

      return ImageContentComponent;
    }();

    ImageContentComponent.ɵfac = function ImageContentComponent_Factory(t) {
      return new (t || ImageContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_18__["ImageRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_update_user_service__WEBPACK_IMPORTED_MODULE_20__["UpdateUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_21__["ImageDownloadService"]));
    };

    ImageContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageContentComponent,
      selectors: [["app-image-content"]],
      viewQuery: function ImageContentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.viewport = _t.first);
        }
      },
      inputs: {
        models: ["data", "models"],
        isProfile: "isProfile"
      },
      decls: 6,
      vars: 7,
      consts: [[1, "container"], ["class", "tile", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "load-btn", 4, "ngIf"], [1, "tile"], [1, "tile-container"], [1, "img-tile"], [1, "img", 3, "src"], [1, "details"], ["class", "profile-icon", 4, "ngIf"], ["class", "profile-img", 4, "ngIf"], [1, "link"], ["mat-button", ""], ["matTooltip", "This image is public", 3, "click", 4, "ngIf"], ["matTooltip", "This image is private", 3, "click", 4, "ngIf"], [1, "content-btn"], ["matTooltip", "Click to open menu", "mat-icon-button", "", "aria-label", "Example icon-button with a menu", 2, "color", "white", "font-size", "50px", 3, "matMenuTriggerFor"], [2, "font-size", "30px"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "matTooltip", "href"], [1, "likes"], ["mat-icon-button", "", 1, "thumbUp", 3, "click"], [2, "font-size", "30px", "color", "white"], [1, "tags"], ["class", "shadow", "href", "#", "style", "background-color: #fcefee;\n        color: black;\n        text-decoration: none;\n        padding: 5px 20px;\n        border-radius: 20px;\n        margin-top: 2%; margin-right: 1%", 3, "click", 4, "ngFor", "ngForOf"], [1, "profile-icon"], ["mat-icon-button", "", 1, "btn"], [2, "font-size", "70px", "color", "white"], ["mat-button", "", "style", "font-size: 20px", "class", "header", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "header", 2, "font-size", "20px", 3, "click"], [1, "profile-img"], ["mat-button", "", "class", "account-btn", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "account-btn", 3, "click"], ["id", "img-profile", "alt", "", 1, "shadow3", 3, "src"], ["id", "user-txt"], ["matTooltip", "This image is public", 3, "click"], ["matTooltip", "This image is private", 3, "click"], ["href", "#", 1, "shadow", 2, "background-color", "#fcefee", "color", "black", "text-decoration", "none", "padding", "5px 20px", "border-radius", "20px", "margin-top", "2%", "margin-right", "1%", 3, "click"], [1, "load-btn"], ["color", "primary", "mat-raised-button", "", 2, "margin-bottom", "2%", "width", "100%", "height", "60px", "font-size", "30px", 3, "click"]],
      template: function ImageContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageContentComponent_div_1_Template, 39, 10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImageContentComponent_div_4_Template, 5, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx.models))("ngForTrackBy", ctx.track);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx.evenRowLimit));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuItem"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  width: 98%;\n}\n\n@media screen and (max-width: 1054px) {\n  .tile-container[_ngcontent-%COMP%] {\n    height: 100%;\n    display: grid;\n    place-items: center;\n    \n  }\n}\n\n.tab[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n@media screen and (min-width: 1054px) {\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 98%;\n    padding: 10px;\n    display: grid;\n    \n    grid-template-columns: repeat(auto-fill, minmax(500px, 0.5fr));\n    overflow: hidden;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n    \n    padding: 10px;\n    display: grid;\n    grid-column-gap: 10px;\n    grid-row-gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(340px, 0.5fr));\n    place-items: baseline;\n    overflow: hidden;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.05), 0 2px 1px rgba(0, 0, 0, 0.08);\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .img-tile[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.img-tile[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n.img[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n@media screen and (max-width: 540px) {\n  img[_ngcontent-%COMP%] {\n    width: 340px;\n    height: 313px;\n  }\n}\n\n@media screen and (min-width: 830px) {\n  img[_ngcontent-%COMP%] {\n    width: 500px;\n    height: 460px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .img-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 2s;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]:hover   .img-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 10px;\n}\n\n.load-btn[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  width: 100%;\n}\n\n.details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.09);\n  transform: scaleY(0);\n  transition: transform 0.8s;\n  display: flex;\n  flex-direction: column;\n}\n\n@media screen and (min-width: 550px) {\n  .details[_ngcontent-%COMP%] {\n    width: 500px;\n    height: 460px;\n  }\n}\n\n@media screen and (max-width: 530px) {\n  .details[_ngcontent-%COMP%] {\n    width: 350px;\n    height: 313px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%] {\n  top: 1.3%;\n  transform: scaleY(1.02);\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 89%;\n  transform: translateY(-50%);\n  padding: 15px;\n  color: #fff;\n  width: 100%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 89%;\n  transform: translateY(-50%);\n  padding: 15px;\n  color: #fff;\n  width: 100%;\n  height: 10%;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n#username-span[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n#user-txt[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  font-size: 20px;\n}\n\n#img-profile[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  font-size: 70px;\n  height: 50px;\n  width: 50px;\n}\n\n.shadow3[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11), 0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11);\n}\n\n\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]   .header2[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 10px;\n  font-size: 20px;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-top: 5px;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 70%;\n  bottom: 0;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6%;\n  left: 0;\n  bottom: 50%;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 80%;\n  bottom: 80%;\n  text-align: center;\n  padding: 15px;\n  color: #fff;\n  height: 60px;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4%;\n  left: 70%;\n  bottom: 80%;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .full-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ltYWdlLWNvbnRlbnQvQzpcXFVzZXJzXFxwbGFuYlxccHJvZ3JhbWluZ1xcaHRsd2llbndlc3REaXBsb21Qcm9qZWt0XFxhbmd1bGFyX2phdmFfaW1hZ2VfcmVzdFxcYW5ndWxhckphdmFJbWFnZVJFU1Qvc3JjXFxhcHBcXHNoYXJlZFxcaW1hZ2UtY29udGVudFxcaW1hZ2UtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2ltYWdlLWNvbnRlbnQvaW1hZ2UtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURHQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLCtCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQTt3QkFBQTtJQUVBLDhEQUFBO0lBQ0EsZ0JBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLDhEQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtFQ0ZGO0FBQ0Y7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FEUUE7RUFDRSx3RUFBQTtBQ0xGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFVBO0VBQ0MsYUFBQTtFQUNDLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNQRjs7QURVQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNQRjtBQUNGOztBRFVBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ1JGO0FBQ0Y7O0FEYUE7RUFFRSx3QkFBQTtBQ1pGOztBRGdCQTtFQUNFLHNCQUFBO0FDYkY7O0FEaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ2RGOztBRGlCQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ2RGOztBRGlCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ2RGOztBRGlCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNkRjtBQUNGOztBRGtCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNoQkY7QUFDRjs7QURtQkE7RUFDRSxTQUFBO0VBQ0EsdUJBQUE7QUNqQkY7O0FEb0JBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFHQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNuQkY7O0FEc0JBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDbkJGOztBRHVCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDcEJGOztBRHVCQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ3BCRjs7QUR3QkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtBQ3RCRjs7QUR5QkE7RUFDRSxzS0FBQTtBQ3RCRjs7QUQ2QkE7OztFQUFBOztBQUtBO0VBQ0UsZ0JBQUE7RUFFQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FDN0JGOztBRGdDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQzdCRjs7QURpQ0E7RUFFRSxlQUFBO0FDL0JGOztBRGtDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDL0JGOztBRGtDQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQy9CRjs7QURtQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENGOztBRG9DQTtFQUNFLGtCQUFBO0FDakNGOztBRHlDQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDdENGOztBRHlDQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtBQ3RDRjs7QUR5Q0E7RUFDRSxnQkFBQTtBQ3RDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbWFnZS1jb250ZW50L2ltYWdlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTRweCkge1xyXG4gIC50aWxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIC8qZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlOyovXHJcbiAgfVxyXG59XHJcblxyXG4udGFiIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDU0cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8qZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAxMHB4OyovXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MDBweCwgMC41ZnIpKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyp3aWR0aDogOTglOyovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICAgIGdyaWQtcm93LWdhcDogMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM0MHB4LCAwLjVmcikpO1xyXG4gICAgcGxhY2UtaXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy9ib3gtc2hhZG93OiAwIDEwcHggOHB4IHJnYmEoMCwwLDAsMC4xMCksIDAgNnB4IDRweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuaW1nLXRpbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLmltZy10aWxlIHtcclxuIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBoZWlnaHQ6IDMxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODMwcHgpIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NjBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXIgLmltZy10aWxlIGltZyB7XHJcbiAgLy9tYXgtd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXI6aG92ZXIgLmltZy10aWxlIGltZyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuXHJcbn1cclxuXHJcbi50YWdzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmxvYWQtYnRuIHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDkpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gIC5kZXRhaWxzIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNDYwcHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAuZGV0YWlscyB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDMxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXI6aG92ZXIgLmRldGFpbHMge1xyXG4gIHRvcDogMS4zJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgxLjAyKTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLnByb2ZpbGUtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODklO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAvL3RleHQtYWxpZ246IGxlZnQ7XHJcbiAgLy9yaWdodDogMTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5wcm9maWxlLWltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODklO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG5cclxuLnByb2ZpbGUtaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN1c2VybmFtZS1zcGFuIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3VzZXItdHh0IHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4jaW1nLXByb2ZpbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICAvL21hcmdpbi1yaWdodDogMTVweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnNoYWRvdzMge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTEpLFxyXG4gIDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcclxufVxyXG5cclxuLyouYWNjb3VudC1idG4ge1xyXG4gIC8vbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufSovXHJcblxyXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAucHJvZmlsZS1pbWcgLmhlYWRlcjIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLy9tYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIC8vbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLnByb2ZpbGUtaWNvbiAuaGVhZGVyIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy9tYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAucHJvZmlsZS1pY29uIGEge1xyXG5cclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiA3MCU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAubGluayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNiU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAuY29udGVudC1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogODAlO1xyXG4gIGJvdHRvbTogODAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogNjBweDtcclxuICAvL3dpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLmNvbnRlbnQtYnRuIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4vLy5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5jb250ZW50LWJ0biAudGh1bWJVcCB7XHJcbi8vICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4vLyAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuLy99XHJcblxyXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAubGlrZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQlO1xyXG4gIGxlZnQ6IDcwJTtcclxuICBib3R0b206IDgwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLmZ1bGwtc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0JTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuXHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDk4JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1NHB4KSB7XG4gIC50aWxlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAvKmdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTsqL1xuICB9XG59XG4udGFiIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA1NHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogOTglO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKmdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7Ki9cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MDBweCwgMC41ZnIpKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyp3aWR0aDogOTglOyovXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgICBncmlkLXJvdy1nYXA6IDIwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzQwcHgsIDAuNWZyKSk7XG4gICAgcGxhY2UtaXRlbXM6IGJhc2VsaW5lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbi5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuaW1nLXRpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWctdGlsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICBpbWcge1xuICAgIHdpZHRoOiAzNDBweDtcbiAgICBoZWlnaHQ6IDMxM3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzBweCkge1xuICBpbWcge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDQ2MHB4O1xuICB9XG59XG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuaW1nLXRpbGUgaW1nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xufVxuXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lcjpob3ZlciAuaW1nLXRpbGUgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5sb2FkLWJ0biB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTBweCkge1xuICAuZGV0YWlscyB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XG4gIC5kZXRhaWxzIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzMTNweDtcbiAgfVxufVxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXI6aG92ZXIgLmRldGFpbHMge1xuICB0b3A6IDEuMyU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEuMDIpO1xufVxuXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAucHJvZmlsZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDg5JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5wcm9maWxlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4OSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdXNlcm5hbWUtc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN1c2VyLXR4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNpbWctcHJvZmlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLnNoYWRvdzMge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjExKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xufVxuXG4vKi5hY2NvdW50LWJ0biB7XG4gIC8vbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59Ki9cbi5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5wcm9maWxlLWltZyAuaGVhZGVyMiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLnByb2ZpbGUtaWNvbiAuaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLnByb2ZpbGUtaWNvbiBhIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAuY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNzAlO1xuICBib3R0b206IDA7XG59XG5cbi5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5saW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAuY29udGVudC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogODAlO1xuICBib3R0b206IDgwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAuY29udGVudC1idG4gYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uY29udGFpbmVyIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAubGlrZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNCU7XG4gIGxlZnQ6IDcwJTtcbiAgYm90dG9tOiA4MCU7XG59XG5cbi5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5mdWxsLXNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0JTtcbn1cblxuLmJ0biB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_app_state_states_images_by_tag_state__WEBPACK_IMPORTED_MODULE_5__["ImagesByTagState"].getData)], ImageContentComponent.prototype, "fData$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_11__["LoginStateModel"].loggedUserId)], ImageContentComponent.prototype, "$loggedUserId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_11__["LoginStateModel"].loggedInUser)], ImageContentComponent.prototype, "$loggedUser", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_app_state_states_images_by_user_id_state__WEBPACK_IMPORTED_MODULE_14__["ImagesByUserIdState"].getData)], ImageContentComponent.prototype, "$imageData", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-image-content',
          templateUrl: './image-content.component.html',
          styleUrls: ['./image-content.component.scss']
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _serviceV2_image_request_service__WEBPACK_IMPORTED_MODULE_18__["ImageRequestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]
        }, {
          type: _serviceV2_update_user_service__WEBPACK_IMPORTED_MODULE_20__["UpdateUserService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _serviceV2_image_download_service__WEBPACK_IMPORTED_MODULE_21__["ImageDownloadService"]
        }];
      }, {
        models: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['data']
        }],
        isProfile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['isProfile']
        }],
        fData$: [],
        $loggedUserId: [],
        $loggedUser: [],
        $imageData: [],
        viewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/image-detail-view/image-detail-view.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/image-detail-view/image-detail-view.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ImageDetailViewComponent */

  /***/
  function srcAppSharedImageDetailViewImageDetailViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageDetailViewComponent", function () {
      return ImageDetailViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app-state/states/select-image.state */
    "./src/app/shared/app-state/states/select-image.state.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var ImageDetailViewComponent =
    /*#__PURE__*/
    function () {
      function ImageDetailViewComponent(data) {
        _classCallCheck(this, ImageDetailViewComponent);

        this.data = data;
        this.link = '';
      }

      _createClass(ImageDetailViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageDetailViewComponent;
    }();

    ImageDetailViewComponent.ɵfac = function ImageDetailViewComponent_Factory(t) {
      return new (t || ImageDetailViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]));
    };

    ImageDetailViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageDetailViewComponent,
      selectors: [["app-image-detail-view"]],
      decls: 34,
      vars: 2,
      consts: [[1, "container"], [1, "content"], ["alt", "", 1, "img-content", 3, "src"], [1, "download"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Click to open menu", "aria-label", "Example icon-button with a menu", 2, "color", "white", "width", "300px", "height", "50px", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 2, "width", "500px", "height", "100%"], [2, "display", "inline-block", "width", "15px"], [2, "display", "inline-block", "width", "25px"]],
      template: function ImageDetailViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "image-detail-view works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Download image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "aspect_ratio");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1920 x 1080");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "jpg");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "620kB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "aspect_ratio");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "1280 x 780");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "jpg");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "120kB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.data.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r160);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 90%;\n  text-align: center;\n}\n\n.img-content[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ltYWdlLWRldGFpbC12aWV3L0M6XFxVc2Vyc1xccGxhbmJcXHByb2dyYW1pbmdcXGh0bHdpZW53ZXN0RGlwbG9tUHJvamVrdFxcYW5ndWxhcl9qYXZhX2ltYWdlX3Jlc3RcXGFuZ3VsYXJKYXZhSW1hZ2VSRVNUL3NyY1xcYXBwXFxzaGFyZWRcXGltYWdlLWRldGFpbC12aWV3XFxpbWFnZS1kZXRhaWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2ltYWdlLWRldGFpbC12aWV3L2ltYWdlLWRldGFpbC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbWFnZS1kZXRhaWwtdmlldy9pbWFnZS1kZXRhaWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctY29udGVudCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLWNvbnRlbnQge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG59Il19 */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_app_state_states_select_image_state__WEBPACK_IMPORTED_MODULE_3__["SelectImageState"].getSelectedLink)], ImageDetailViewComponent.prototype, "selectedImage", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageDetailViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-image-detail-view',
          templateUrl: './image-detail-view.component.html',
          styleUrls: ['./image-detail-view.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, {
        selectedImage: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/image-row-mapper.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/image-row-mapper.ts ***!
    \********************************************/

  /*! exports provided: ImageRowMapper */

  /***/
  function srcAppSharedImageRowMapperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageRowMapper", function () {
      return ImageRowMapper;
    });

    var ImageRowMapper =
    /*#__PURE__*/
    function () {
      function ImageRowMapper() {
        _classCallCheck(this, ImageRowMapper);
      }

      _createClass(ImageRowMapper, null, [{
        key: "mapToImageRow",
        value: function mapToImageRow(imageModels) {
          var countRow = 0;
          var countItem = 0;
          var rowModels = [];
          var temp = [];
          var test = {
            row: null,
            content: []
          };

          if (imageModels !== undefined && imageModels !== null) {
            imageModels.forEach(function (value1, index) {
              countItem++;
              if (countItem <= 3) temp.push(value1);

              if (countItem == 3) {
                countItem = 0;
                rowModels.push({
                  row: countRow,
                  content: temp
                });
                temp = [];
                countRow++;
              }

              if (index == imageModels.length - 1) {
                rowModels.push({
                  row: countRow,
                  content: temp
                });
              }
            });
            return rowModels;
          }

          return null;
        }
      }]);

      return ImageRowMapper;
    }();
    /***/

  },

  /***/
  "./src/app/shared/login/login.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/login/login.component.ts ***!
    \*************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppSharedLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app-state/actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var _domain_userModel_UserLoginModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../domain/userModel/UserLoginModel */
    "./src/app/shared/domain/userModel/UserLoginModel.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app-state/states/request-status.state */
    "./src/app/shared/app-state/states/request-status.state.ts");
    /* harmony import */


    var _app_state_actions_request_message_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../app-state/actions/request-message.action */
    "./src/app/shared/app-state/actions/request-message.action.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var LoggedUserDetails = _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_4__["AuthenticationActions"].LoggedUserDetails;

    function LoginComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r1.message, " ");
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, store, dialogRef, authService, location, googleAuthService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.store = store;
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.location = location;
        this.googleAuthService = googleAuthService;
        this.emailFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.passwordFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.formGroup = this.formBuilder.group({
          email: this.emailFormField,
          password: this.passwordFormField
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(new _app_state_actions_request_message_action__WEBPACK_IMPORTED_MODULE_8__["RequestMessageAction"](null));
        }
      }, {
        key: "login",
        value: function login() {
          var _this29 = this;

          var email = this.formGroup.get('email').value;
          var password = this.formGroup.get('password').value;
          this.store.dispatch(new _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_4__["AuthenticationActions"].LoginAction(new _domain_userModel_UserLoginModel__WEBPACK_IMPORTED_MODULE_5__["UserLoginModel"](email, password))).subscribe(function (value) {
            return _this29.authService.isLoggedIn().subscribe(function (value1) {
              console.log(value1);

              _this29.store.dispatch(new LoggedUserDetails(value1.body.userId));

              _this29.close();
            });
          });
        }
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this30 = this;

          this.googleAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID).then(function (value) {
            _this30.store.dispatch(new _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_4__["AuthenticationActions"].LoginAction(new _domain_userModel_UserLoginModel__WEBPACK_IMPORTED_MODULE_5__["GoogleUserLogin"](value.email, value.firstName, value.lastName, value.photoUrl, value.idToken))).subscribe(function (value1) {
              _this30.store.dispatch(new _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_4__["AuthenticationActions"].IsLoggedIn()).subscribe(function (value2) {
                return _this30.store.dispatch(new LoggedUserDetails(value2.Authentication.user.userId));
              });
            });
          });
          this.close();
        }
      }, {
        key: "close",
        value: function close() {
          // this.store.dispatch(new Navigate(['welcome']))
          this.dialogRef.close();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_10__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialAuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 25,
      vars: 14,
      consts: [[1, "content", 3, "formGroup"], [2, "font-family", "'agave Nerd Font',cursive"], ["matInput", "", 3, "formControl"], ["type", "password", "matInput", "", 3, "formControl"], [1, "container"], [2, "display", "flex", "flex-direction", "row", "align-content", "space-evenly"], ["id", "loginBtn", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-icon-button", "", 3, "click"], ["src", "../../../assets/btn_google_signin_dark_normal_web.png", "alt", "FOO"], ["style", "margin-top: 10px; display: flex; justify-content: flex-start", 4, "ngIf"], [2, "margin-top", "10px", "display", "flex", "justify-content", "flex-start"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() {
            return ctx.googleLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_mat_error_23_Template, 2, 1, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 330, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", 15, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.emailFormField);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 330, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", 15, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.passwordFormField);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 12, ctx.$requestStatus));
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: [".form-p[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.profile-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.container2[_ngcontent-%COMP%] {\n  width: 620px;\n  height: 100%;\n}\n\n#loginBtn[_ngcontent-%COMP%] {\n  height: 46px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvZ2luL0M6XFxVc2Vyc1xccGxhbmJcXHByb2dyYW1pbmdcXGh0bHdpZW53ZXN0RGlwbG9tUHJvamVrdFxcYW5ndWxhcl9qYXZhX2ltYWdlX3Jlc3RcXGFuZ3VsYXJKYXZhSW1hZ2VSRVNUL3NyY1xcYXBwXFxzaGFyZWRcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRFFBO0VBQ0Usa0JBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEYUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1ZGOztBRGFBO0VBQ0UsWUFBQTtBQ1ZGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tcCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4vLy5jb250YWluZXIge1xyXG4vLyAgZGlzcGxheTogZmxleDtcclxuLy8gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vL31cclxuXHJcbi5wcm9maWxlLWljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy90b3A6IDA7XHJcbiAgLy9ib3R0b206IDEwcHg7XHJcbiAgLy9sZWZ0OiAwO1xyXG4gIC8vcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIyIHtcclxuICB3aWR0aDogNjIwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jbG9naW5CdG4ge1xyXG4gIGhlaWdodDogNDZweDtcclxufVxyXG4iLCIuZm9ybS1wIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4ucHJvZmlsZS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyMiB7XG4gIHdpZHRoOiA2MjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbG9naW5CdG4ge1xuICBoZWlnaHQ6IDQ2cHg7XG59Il19 */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_7__["RequestStatusState"].getStatus)], LoginComponent.prototype, "$requestStatus", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"]
        }, {
          type: _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_10__["UserAuthenticationService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialAuthService"]
        }];
      }, {
        $requestStatus: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/address-validation.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/service/address-validation.service.ts ***!
    \**************************************************************/

  /*! exports provided: AddressValidationService */

  /***/
  function srcAppSharedServiceAddressValidationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressValidationService", function () {
      return AddressValidationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _serviceV2_search_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../serviceV2/search.request.service */
    "./src/app/serviceV2/search.request.service.ts");

    var AddressValidationService =
    /*#__PURE__*/
    function () {
      function AddressValidationService(http, searchReqService) {
        _classCallCheck(this, AddressValidationService);

        this.http = http;
        this.searchReqService = searchReqService;
        this.SEARCH_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "addresses/validate/";
        this.COUNTRIES = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "addresses/get/all/countries";
        this.REGIONS = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "addresses/regions/";
        this.ZIPCODES = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "query/searchByZipAndRegion/";
      }

      _createClass(AddressValidationService, [{
        key: "getCountries",
        value: function getCountries() {
          return this.http.get(this.COUNTRIES);
        }
      }, {
        key: "getRegionsByCountry",
        value: function getRegionsByCountry(countryName) {
          return this.http.get(this.REGIONS + countryName);
        }
      }, {
        key: "getZipCodesAndCitiesByRegion",
        value: function getZipCodesAndCitiesByRegion(region) {
          return this.http.get(this.ZIPCODES + region);
        }
      }, {
        key: "getZipCodesAndCitiesByRegion2",
        value: function getZipCodesAndCitiesByRegion2(zipcode, region) {
          return this.searchReqService.search(zipcode, this.ZIPCODES + region + ", ");
        }
      }]);

      return AddressValidationService;
    }();

    AddressValidationService.ɵfac = function AddressValidationService_Factory(t) {
      return new (t || AddressValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_serviceV2_search_request_service__WEBPACK_IMPORTED_MODULE_3__["SearchRequestService"]));
    };

    AddressValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AddressValidationService,
      factory: AddressValidationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _serviceV2_search_request_service__WEBPACK_IMPORTED_MODULE_3__["SearchRequestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/signup/signup.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/signup/signup.component.ts ***!
    \***************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSharedSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _domain_userModel_user_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../domain/userModel/user-details.model */
    "./src/app/shared/domain/userModel/user-details.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _domain_userModel_UserLoginModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../domain/userModel/UserLoginModel */
    "./src/app/shared/domain/userModel/UserLoginModel.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app-state/actions/authentication-action */
    "./src/app/shared/app-state/actions/authentication-action.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_state_actions_address_validation_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../app-state/actions/address-validation-action */
    "./src/app/shared/app-state/actions/address-validation-action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_state_states_address_validation_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../app-state/states/address.validation.state */
    "./src/app/shared/app-state/states/address.validation.state.ts");
    /* harmony import */


    var _app_state_states_signup_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../app-state/states/signup.state */
    "./src/app/shared/app-state/states/signup.state.ts");
    /* harmony import */


    var _app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../app-state/states/request-status.state */
    "./src/app/shared/app-state/states/request-status.state.ts");
    /* harmony import */


    var _app_state_actions_request_message_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../app-state/actions/request-message.action */
    "./src/app/shared/app-state/actions/request-message.action.ts");
    /* harmony import */


    var _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../serviceV2/user-authentication.service */
    "./src/app/serviceV2/user-authentication.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _service_address_validation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../service/address-validation.service */
    "./src/app/shared/service/address-validation.service.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_mat_error_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r49 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r49.message, " ");
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(authService, store, formBuilder, dialogRef, addressService) {
        var _this31 = this;

        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.store = store;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.addressService = addressService;
        this.disabled = true;
        this.invalid = true;
        this.countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.regions$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.color = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("Warn");
        this.zipCodeAndCities$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.errorMsg = "Password required"; // form fields

        this.countryFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.lastNameFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.firstNameFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.cityFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
          value: '',
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.emailFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.passwordFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.confirmPwdFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.streetFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
          value: '',
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.regionFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
          value: '',
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.zipCodeFormField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({
          value: '',
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

        this.hasError = function (controlName, errorName) {
          return _this31.formGroup.controls['firstName'].hasError(errorName);
        };

        this.formGroup = this.formBuilder.group({
          firstName: this.firstNameFormField,
          lastName: this.lastNameFormField,

          /*street: this.streetFormField,
          city: this.cityFormField,
          country: this.countryFormField,
          region: this.regionFormField,
          zipcode: this.zipCodeFormField,*/
          email: this.emailFormField,
          password: this.passwordFormField,
          confirmPassword: this.confirmPwdFormField
        });
        /*this.formGroup.get('zipcode').disable();*/
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.store.dispatch(new _app_state_actions_request_message_action__WEBPACK_IMPORTED_MODULE_13__["RequestMessageAction"](null));
          this.registrationModel$.subscribe(function (value) {
            if (value.email.length > 1) {
              _this32.store.dispatch(new _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_6__["AuthenticationActions"].LoginAction(new _domain_userModel_UserLoginModel__WEBPACK_IMPORTED_MODULE_4__["UserLoginModel"](value.email, value.password))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (resp) {
                return _this32.store.dispatch(new _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_6__["AuthenticationActions"].LoggedUserDetails(resp.Authentication.user.userId));
              })).subscribe(function (value1) {
                return value1;
              });
            }
          });
          /*this.validateCityAndZipFormFields();*/

          this.store.dispatch(new _app_state_actions_address_validation_action__WEBPACK_IMPORTED_MODULE_8__["GetCountriesAction"]());
          /*this.fetchedZipcodesAndCities$
            .subscribe(value => this.zipAndCities = value)*/
        }
        /*private validateCityAndZipFormFields() {
          this.validateZipCodeFormField();
          this.validateStreetFormField();
        }
            private validateZipCodeFormField() {
          this.formGroup
            .controls['zipcode']
            .valueChanges
            .subscribe(val => {
              if (this.formGroup.controls['city'].disabled)
                this.invalid = true;
            })
        }
            private validateStreetFormField() {
          this.formGroup
            .controls['street']
            .valueChanges
            .subscribe(val => {
              if (this.formGroup.controls['street'].value.length > 0)
                this.invalid = false;
              else this.invalid = true;
            })
        }*/

      }, {
        key: "closeDialog",
        value: function closeDialog() {
          // this.dialogRef.close(this.formGroup.value);
          this.dialogRef.close();
        }
      }, {
        key: "selectPostalAndSetCity",
        value: function selectPostalAndSetCity(value) {
          var _this33 = this;

          this.zipAndCities.filter(function (value1) {
            return value1.zipCode === value;
          }).forEach(function (value1) {
            return _this33.cityFormField.setValue(value1.city);
          });
          this.streetFormField.enable();
        }
      }, {
        key: "register",
        value: function register() {
          var _this34 = this;

          var registrationModel = new _domain_userModel_user_details_model__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationModel"](this.formGroup.controls['firstName'].value, this.formGroup.controls['lastName'].value, this.formGroup.controls['email'].value, this.formGroup.controls['password'].value, null, null, null, null);
          /*const registrationModel = new UserRegistrationModel(
            this.formGroup.controls['firstName'].value,
            this.formGroup.controls['lastName'].value,
            this.formGroup.controls['email'].value,
            this.formGroup.controls['password'].value,
            this.formGroup.controls['street'].value,
            this.formGroup.controls['region'].value,
            this.formGroup.controls['zipcode'].value,
            this.formGroup.controls['country'].value
          );*/

          this.store.dispatch(new _app_state_actions_authentication_action__WEBPACK_IMPORTED_MODULE_6__["AuthenticationActions"].SignUpAction(registrationModel)).subscribe(function (value) {
            return _this34.authService.isLoggedIn();
          });
          /*this.closeDialog();*/
        }
        /*selectedCountry($event: MatSelectChange) {
          console.log(this.disabled);
          this.disabled = false;
          console.log(this.disabled);
          this.store.dispatch(new GetRegionsAction($event.value))
            .subscribe(value => this.regionFormField.enable());
        }*/

      }, {
        key: "selectedRegion",
        value: function selectedRegion($event) {
          var _this35 = this;

          this.formGroup.get('zipcode').enable();
          this.searchTerm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(function (value) {
            _this35.store.dispatch(new _app_state_actions_address_validation_action__WEBPACK_IMPORTED_MODULE_8__["GetZipCodesAndCitiesByRegion"](new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](value), $event.value));
          });
        }
      }, {
        key: "changeZipCode",
        value: function changeZipCode($event) {}
      }, {
        key: "checkPasswords",
        value: function checkPasswords() {
          var length = this.formGroup.get('password').value.length > 0;
          var confirmPwd = this.formGroup.controls['confirmPassword'].value;
          var pwd = this.formGroup.get('password').value;
          if (confirmPwd !== pwd && confirmPwd.length > 0 && length) this.formGroup.controls['password'].setErrors({
            'incorrect': true
          });else if (length && confirmPwd.length > 0 && confirmPwd === pwd) {
            this.formGroup.controls['password'].setErrors(null);
            this.invalid = false;
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_14__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_address_validation_service__WEBPACK_IMPORTED_MODULE_16__["AddressValidationService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 48,
      vars: 31,
      consts: [[1, "profile-icon", 3, "formGroup"], [2, "font-family", "'agave Nerd Font',cursive"], ["gutterSize", "10px", "cols", "2", "rowHeight", "290px"], [1, "container2"], ["matInput", "", 3, "formControl"], ["name", "email", "type", "email", "ngModel", "", "matInput", "", "pattern", "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}", 3, "email", "formControl"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["style", "margin-top: 10px", 4, "ngIf"], ["type", "password", "matInput", "", 3, "formControl", "ngModelChange"], [1, "container"], [2, "margin-top", "10px"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-grid-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Firstname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Firstname is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Lastname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Lastname is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Invalid email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_26_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_28_listener() {
            return ctx.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SignupComponent_mat_error_31_Template, 2, 1, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_38_listener() {
            return ctx.checkPasswords();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Invalid password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_44_listener() {
            return ctx.checkPasswords();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Invalid password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 300, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", 15, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.firstNameFormField);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 300, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", 15, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.formGroup.get("lastName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 300, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", 15, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("email", true)("formControl", ctx.emailFormField);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.formGroup.valid || ctx.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 29, ctx.$requestStatus));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 300, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", 15, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.passwordFormField);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 300, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", 15, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.confirmPwdFormField);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["AsyncPipe"]],
      styles: [".form-p[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.profile-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.container2[_ngcontent-%COMP%] {\n  width: 620px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZ251cC9DOlxcVXNlcnNcXHBsYW5iXFxwcm9ncmFtaW5nXFxodGx3aWVud2VzdERpcGxvbVByb2pla3RcXGFuZ3VsYXJfamF2YV9pbWFnZV9yZXN0XFxhbmd1bGFySmF2YUltYWdlUkVTVC9zcmNcXGFwcFxcc2hhcmVkXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEUUE7RUFDRSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURhQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXAge1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLy8uY29udGFpbmVyIHtcclxuLy8gIGRpc3BsYXk6IGZsZXg7XHJcbi8vICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy99XHJcblxyXG4ucHJvZmlsZS1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vdG9wOiAwO1xyXG4gIC8vYm90dG9tOiAxMHB4O1xyXG4gIC8vbGVmdDogMDtcclxuICAvL3JpZ2h0OiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyMiB7XHJcbiAgd2lkdGg6IDYyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbiIsIi5mb3JtLXAge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5wcm9maWxlLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIyIHtcbiAgd2lkdGg6IDYyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_app_state_states_address_validation_state__WEBPACK_IMPORTED_MODULE_10__["AddressValidationState"].countries)], SignupComponent.prototype, "fetchedCountries$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_app_state_states_address_validation_state__WEBPACK_IMPORTED_MODULE_10__["AddressValidationState"].regions)], SignupComponent.prototype, "fetchedRegions$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_app_state_states_address_validation_state__WEBPACK_IMPORTED_MODULE_10__["AddressValidationState"].zipCodesAndCities)], SignupComponent.prototype, "fetchedZipcodesAndCities$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_app_state_states_signup_state__WEBPACK_IMPORTED_MODULE_11__["SignupState"].registrationModel)], SignupComponent.prototype, "registrationModel$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_app_state_states_request_status_state__WEBPACK_IMPORTED_MODULE_12__["RequestStatusState"].getStatus)], SignupComponent.prototype, "$requestStatus", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [{
          type: _serviceV2_user_authentication_service__WEBPACK_IMPORTED_MODULE_14__["UserAuthenticationService"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogRef"]
        }, {
          type: _service_address_validation_service__WEBPACK_IMPORTED_MODULE_16__["AddressValidationService"]
        }];
      }, {
        fetchedCountries$: [],
        fetchedRegions$: [],
        fetchedZipcodesAndCities$: [],
        registrationModel$: [],
        $requestStatus: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/user-gallery/user-gallery.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/user-gallery/user-gallery.component.ts ***!
    \***************************************************************/

  /*! exports provided: UserGalleryComponent */

  /***/
  function srcAppSharedUserGalleryUserGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGalleryComponent", function () {
      return UserGalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _app_state_states_images_by_user_id_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app-state/states/images-by-user-id.state */
    "./src/app/shared/app-state/states/images-by-user-id.state.ts");
    /* harmony import */


    var _app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app-state/actions/image.action */
    "./src/app/shared/app-state/actions/image.action.ts");
    /* harmony import */


    var _app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app-state/actions/user-details.action */
    "./src/app/shared/app-state/actions/user-details.action.ts");
    /* harmony import */


    var _app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app-state/states/User-details.state */
    "./src/app/shared/app-state/states/User-details.state.ts");
    /* harmony import */


    var _app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app-state/states/login.state.model */
    "./src/app/shared/app-state/states/login.state.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../public/search-toolbar/search.toolbar.component */
    "./src/app/public/search-toolbar/search.toolbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _image_content_image_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../image-content/image-content.component */
    "./src/app/shared/image-content/image-content.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function UserGalleryComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "account_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserGalleryComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r93.$name), " ");
      }
    }

    function UserGalleryComponent_button_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Edit profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserGalleryComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "photo_library");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Images ");
      }
    }

    function UserGalleryComponent_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "thumb_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Likes ");
      }
    }

    var UserGalleryComponent =
    /*#__PURE__*/
    function () {
      function UserGalleryComponent(route, store) {
        _classCallCheck(this, UserGalleryComponent);

        this.route = route;
        this.store = store;
        this.$isOwner = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](false);
      }

      _createClass(UserGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.route.paramMap.subscribe(function (param) {
            var userId = param.get('userId');

            _this36.store.dispatch([new _app_state_actions_user_details_action__WEBPACK_IMPORTED_MODULE_5__["UserDetailsActions"].GetUserDetails(userId), new _app_state_actions_image_action__WEBPACK_IMPORTED_MODULE_4__["ImagesByUserIDAction"](userId)]);

            _this36.$loggedUser.subscribe(function (user) {
              if (user !== undefined && user !== null) if (user.userId === userId) {
                _this36.$isOwner.next(true);
              }
            });
          }); // this.$state.subscribe(state => {
          //   if (userId === state.userId) {
          //     console.log("Super!!!!!!!!!")
          //   }
          // })
          // this.store.dispatch(new AuthenticationActions.IsLoggedIn())
          //   .subscribe(value => {})
          //
          // this.$loggedUser.subscribe(user => {
          //   if (user !== undefined && user !== null)
          //     if (user.userId === userId) {
          //       this.$isOwner.next(true);
          //     }
          //
          //
          // })
        }
      }, {
        key: "download",
        value: function download(name, userId) {}
      }]);

      return UserGalleryComponent;
    }();

    UserGalleryComponent.ɵfac = function UserGalleryComponent_Factory(t) {
      return new (t || UserGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    UserGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserGalleryComponent,
      selectors: [["app-user-gallery"]],
      decls: 30,
      vars: 19,
      consts: [[1, "container"], [1, "filler_left"], [1, "left"], [1, "profile_icon"], ["disabled", "", "mat-icon-button", "", "aria-label", "Example icon button with a home icon", 4, "ngIf"], ["alt", "", 1, "profile-img", 3, "src"], [1, "right"], [1, "title"], [1, "user-name"], ["style", "font-size: 40px; margin-top: 2%; margin-bottom: 6px", 4, "ngIf"], [2, "font-size", "17px", "line-height", "28px"], ["style", "", "mat-icon-button", "", 4, "ngIf"], ["mat-stretch-tabs", "", 1, "mat-tab-group"], ["label", "Gallery", 1, "tab"], ["mat-tab-label", ""], [3, "isProfile", "data"], ["label", "Likes"], ["label", "Third"], ["disabled", "", "mat-icon-button", "", "aria-label", "Example icon button with a home icon"], [2, "font-size", "195px"], [2, "font-size", "40px", "margin-top", "2%", "margin-bottom", "6px"], ["mat-icon-button", ""], [1, "example-tab-icon"]],
      template: function UserGalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-search-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserGalleryComponent_button_5_Template, 3, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserGalleryComponent_span_12_Template, 4, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserGalleryComponent_button_19_Template, 4, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-tab-group", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-tab", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UserGalleryComponent_ng_template_23_Template, 3, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-image-content", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-tab", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UserGalleryComponent_ng_template_27_Template, 3, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-tab", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Content 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, ctx.$profileImg));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 9, ctx.$profileImg), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 11, ctx.$name));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Download free, beautiful high-quality photos curated by ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 13, ctx.$name), ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 15, ctx.$isOwner));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isProfile", true)("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 17, ctx.$byUserIdData));
        }
      },
      directives: [_public_search_toolbar_search_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["SearchToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabLabel"], _image_content_image_content_component__WEBPACK_IMPORTED_MODULE_13__["ImageContentComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: grid;\n  height: 280px;\n  grid-template-columns: 6% 23.5% 30% 30%;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: 155px;\n  height: 155px;\n  border-radius: 100%;\n}\n\n.container-2[_ngcontent-%COMP%] {\n  width: 98%;\n  min-height: 453px;\n  margin-top: 30px;\n  margin-left: 10px;\n  display: grid;\n  grid-column-gap: 10px;\n  grid-template-columns: 33% 33% 33%;\n  overflow: hidden !important;\n}\n\n.mat-tab-body-content[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: pink;\n  overflow: hidden !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 450px;\n  width: 100%;\n}\n\n.left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  justify-content: space-around;\n}\n\n.profile_icon[_ngcontent-%COMP%] {\n  margin-right: 50px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  place-items: center;\n  height: 60%;\n  width: 90%;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  line-height: 20px;\n  margin-top: 10px;\n  height: 60%;\n  width: 100%;\n  font-family: \"agave NF\", sans-serif;\n}\n\n.example-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  font-size: 40px;\n}\n\n.container-2[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 450px;\n  margin: 10px;\n  width: 98%;\n  overflow: hidden;\n}\n\n.container-2[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .img-tile[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 450px;\n  width: 100%;\n}\n\n.container-2[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .img-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 2s;\n}\n\n.container-2[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]:hover   .img-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 10px;\n}\n\n.load-btn[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  width: 100%;\n}\n\n.container-2[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.4);\n  transform: scaleY(0);\n  transition: transform 0.5s;\n  display: flex;\n  flex-direction: column;\n}\n\n.container-2[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%] {\n  top: 1.3%;\n  transform: scaleY(1.02);\n}\n\n.container-2[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 93%;\n  transform: translateY(-50%);\n  padding: 15px;\n  color: #fff;\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n}\n\n.container-2[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.container-2[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.container-2[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 75%;\n  bottom: 80%;\n  text-align: center;\n  padding: 15px;\n  color: #fff;\n  height: 60px;\n  width: 60px;\n}\n\n.container[_ngcontent-%COMP%]   .tile-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VzZXItZ2FsbGVyeS9DOlxcVXNlcnNcXHBsYW5iXFxwcm9ncmFtaW5nXFxodGx3aWVud2VzdERpcGxvbVByb2pla3RcXGFuZ3VsYXJfamF2YV9pbWFnZV9yZXN0XFxhbmd1bGFySmF2YUltYWdlUkVTVC9zcmNcXGFwcFxcc2hhcmVkXFx1c2VyLWdhbGxlcnlcXHVzZXItZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VzZXItZ2FsbGVyeS91c2VyLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FER0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBRUEsMkJBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDSkY7O0FETUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUlBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNORjs7QURTQTtFQUNFLGlCQUFBO0FDTkY7O0FEYUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRGFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ1ZGOztBRGFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ1ZGOztBRFlBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNURjs7QURXQTtFQUVFLHdCQUFBO0FDVEY7O0FEWUE7RUFDRSxxQkFBQTtBQ1RGOztBRFlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNURjs7QURZQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ1RGOztBRGFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDVkY7O0FEYUE7RUFDRSxTQUFBO0VBQ0EsdUJBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBRUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDWEY7O0FEY0E7RUFDRSxpQkFBQTtBQ1hGOztBRGFBO0VBRUUsZUFBQTtBQ1hGOztBRGVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNaRjs7QURlQTtFQUNFLGtCQUFBO0FDWkY7O0FEZUE7RUFDRSxnQkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VzZXItZ2FsbGVyeS91c2VyLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2JTIzLjUlMzAlMzAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWcge1xyXG4gIHdpZHRoOiAxNTVweDtcclxuICBoZWlnaHQ6IDE1NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi8vQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpe1xyXG4uY29udGFpbmVyLTIge1xyXG4gIHdpZHRoOiA5OCU7XHJcbiAgbWluLWhlaWdodDogNDUzcHg7XHJcbiAgLy9oZWlnaHQ6IDQ1M3B4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUzMyUzMyU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbi8vfVxyXG5cclxuXHJcbi5tYXQtdGFiLWJvZHktY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1ne1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnByb2ZpbGVfaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiYWdhdmUgTkZcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmV4YW1wbGUtdGFiLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uZmlsbGVyX2xlZnQge1xyXG5cclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLTIgLnRpbGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyLTIgLnRpbGUtY29udGFpbmVyIC5pbWctdGlsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuaW1ne1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lci0yIC50aWxlLWNvbnRhaW5lciAuaW1nLXRpbGUgaW1nIHtcclxuICAvL21heC13aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XHJcbn1cclxuXHJcbi5jb250YWluZXItMiAudGlsZS1jb250YWluZXI6aG92ZXIgLmltZy10aWxlIGltZyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4udGFncyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5sb2FkLWJ0biB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyLTIgLnRpbGUgLmRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250YWluZXItMiAudGlsZS1jb250YWluZXI6aG92ZXIgLmRldGFpbHMge1xyXG4gIHRvcDogMS4zJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgxLjAyKTtcclxufVxyXG5cclxuLmNvbnRhaW5lci0yIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAucHJvZmlsZS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5MyU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC8vdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY29udGFpbmVyLTIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5wcm9maWxlLWljb24gaDEge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5jb250YWluZXItMiAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLnByb2ZpbGUtaWNvbiBhIHtcclxuXHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lci0yIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAuY29udGVudC1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogNzUlO1xyXG4gIGJvdHRvbTogODAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLmNvbnRlbnQtYnRuIGJ1dHRvbntcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLnNwYWNlX2ZpbGxlciB7XHJcbi8vICB3aWR0aDogNjAlO1xyXG4vL1xyXG4vL31cclxuXHJcblxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAyODBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2JSAyMy41JSAzMCUgMzAlO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICB3aWR0aDogMTU1cHg7XG4gIGhlaWdodDogMTU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5jb250YWluZXItMiB7XG4gIHdpZHRoOiA5OCU7XG4gIG1pbi1oZWlnaHQ6IDQ1M3B4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ucHJvZmlsZV9pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwJTtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogNjAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiYWdhdmUgTkZcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmV4YW1wbGUtdGFiLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5jb250YWluZXItMiAudGlsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDUwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDk4JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lci0yIC50aWxlLWNvbnRhaW5lciAuaW1nLXRpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmltZyB7XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyLTIgLnRpbGUtY29udGFpbmVyIC5pbWctdGlsZSBpbWcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XG59XG5cbi5jb250YWluZXItMiAudGlsZS1jb250YWluZXI6aG92ZXIgLmltZy10aWxlIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmxvYWQtYnRuIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyLTIgLnRpbGUgLmRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250YWluZXItMiAudGlsZS1jb250YWluZXI6aG92ZXIgLmRldGFpbHMge1xuICB0b3A6IDEuMyU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEuMDIpO1xufVxuXG4uY29udGFpbmVyLTIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5wcm9maWxlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTMlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGFpbmVyLTIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5wcm9maWxlLWljb24gaDEge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmNvbnRhaW5lci0yIC50aWxlLWNvbnRhaW5lciAuZGV0YWlscyAucHJvZmlsZS1pY29uIGEge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jb250YWluZXItMiAudGlsZS1jb250YWluZXIgLmRldGFpbHMgLmNvbnRlbnQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDc1JTtcbiAgYm90dG9tOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5jb250YWluZXIgLnRpbGUtY29udGFpbmVyIC5kZXRhaWxzIC5jb250ZW50LWJ0biBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5idG4ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_app_state_states_images_by_user_id_state__WEBPACK_IMPORTED_MODULE_3__["ImagesByUserIdState"].getData)], UserGalleryComponent.prototype, "$byUserIdData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_6__["UserDetailsState"].firstLastName)], UserGalleryComponent.prototype, "$name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_6__["UserDetailsState"].profileImgPath)], UserGalleryComponent.prototype, "$profileImg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_app_state_states_User_details_state__WEBPACK_IMPORTED_MODULE_6__["UserDetailsState"].getState)], UserGalleryComponent.prototype, "$state", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_app_state_states_login_state_model__WEBPACK_IMPORTED_MODULE_7__["LoginStateModel"].loggedInUser)], UserGalleryComponent.prototype, "$loggedUser", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-user-gallery',
          templateUrl: './user-gallery.component.html',
          styleUrls: ['./user-gallery.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, {
        $byUserIdData: [],
        $name: [],
        $profileImg: [],
        $state: [],
        $loggedUser: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/util/Base64ToBlobConverter.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/util/Base64ToBlobConverter.ts ***!
    \******************************************************/

  /*! exports provided: Base64ToBlobConverter */

  /***/
  function srcAppSharedUtilBase64ToBlobConverterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Base64ToBlobConverter", function () {
      return Base64ToBlobConverter;
    });

    var Base64ToBlobConverter =
    /*#__PURE__*/
    function () {
      function Base64ToBlobConverter() {
        _classCallCheck(this, Base64ToBlobConverter);
      }

      _createClass(Base64ToBlobConverter, null, [{
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          var byteString = window.atob(dataURI);
          var arrayBuffer = new ArrayBuffer(byteString.length);
          var int8Array = new Uint8Array(arrayBuffer);

          for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
          }

          var blob = new Blob([int8Array], {
            type: 'image/png'
          });
          return blob;
        }
      }]);

      return Base64ToBlobConverter;
    }();
    /***/

  },

  /***/
  "./src/app/shared/util/blob-to-base64-pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/util/blob-to-base64-pipe.ts ***!
    \****************************************************/

  /*! exports provided: BlobToBase64Pipe */

  /***/
  function srcAppSharedUtilBlobToBase64PipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlobToBase64Pipe", function () {
      return BlobToBase64Pipe;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_state_states_get_base64_for_downloadCropper_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-state/states/get-base64-for-downloadCropper.state */
    "./src/app/shared/app-state/states/get-base64-for-downloadCropper.state.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app-state/states/get-image-by-id.state */
    "./src/app/shared/app-state/states/get-image-by-id.state.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");

    var BlobToBase64Pipe =
    /*#__PURE__*/
    function () {
      function BlobToBase64Pipe(store) {
        _classCallCheck(this, BlobToBase64Pipe);

        this.store = store;
      }

      _createClass(BlobToBase64Pipe, [{
        key: "getBase64",
        value: function getBase64(source) {
          var _this37 = this;

          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (byteArray) {
            var blob = new Blob([byteArray], {
              type: 'application/octet-binary'
            });
            file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](blob, _this37.store.selectSnapshot(_app_state_states_get_image_by_id_state__WEBPACK_IMPORTED_MODULE_4__["GetImageByIdState"].getImageDetail).name);
            return _this37.store.selectSnapshot(_app_state_states_get_base64_for_downloadCropper_state__WEBPACK_IMPORTED_MODULE_2__["GetBase64ForDownloadCropperState"].getModel).base64;
          }));
        }
      }]);

      return BlobToBase64Pipe;
    }();

    BlobToBase64Pipe.ɵfac = function BlobToBase64Pipe_Factory(t) {
      return new (t || BlobToBase64Pipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    BlobToBase64Pipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BlobToBase64Pipe,
      factory: BlobToBase64Pipe.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlobToBase64Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8880/image-app/',
      google_id: '200318745451-u9viua8onpt25sdmknka7i89uhdrknsd.apps.googleusercontent.com'
    };
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\planb\programing\htlwienwestDiplomProjekt\angular_java_image_rest\angularJavaImageREST\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
