!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    var i, r;
    function a() {
      var e = {
        appContainer: document.body,
        mainContainer: document.getElementById("viewerContainer"),
        viewerContainer: document.getElementById("viewer"),
        eventBus: null,
        toolbar: {
          container: document.getElementById("toolbarViewer"),
          numPages: document.getElementById("numPages"),
          pageNumber: document.getElementById("pageNumber"),
          scaleSelectContainer: document.getElementById("scaleSelectContainer"),
          scaleSelect: document.getElementById("scaleSelect"),
          customScaleOption: document.getElementById("customScaleOption"),
          previous: document.getElementById("previous"),
          next: document.getElementById("next"),
          zoomIn: document.getElementById("zoomIn"),
          zoomOut: document.getElementById("zoomOut"),
          viewFind: document.getElementById("viewFind"),
          openFile: document.getElementById("openFile"),
          print: document.getElementById("print"),
          presentationModeButton: document.getElementById("presentationMode"),
          download: document.getElementById("download"),
          viewBookmark: document.getElementById("viewBookmark"),
        },
        secondaryToolbar: {
          toolbar: document.getElementById("secondaryToolbar"),
          toggleButton: document.getElementById("secondaryToolbarToggle"),
          toolbarButtonContainer: document.getElementById(
            "secondaryToolbarButtonContainer"
          ),
          presentationModeButton: document.getElementById(
            "secondaryPresentationMode"
          ),
          openFileButton: document.getElementById("secondaryOpenFile"),
          printButton: document.getElementById("secondaryPrint"),
          downloadButton: document.getElementById("secondaryDownload"),
          viewBookmarkButton: document.getElementById("secondaryViewBookmark"),
          firstPageButton: document.getElementById("firstPage"),
          lastPageButton: document.getElementById("lastPage"),
          pageRotateCwButton: document.getElementById("pageRotateCw"),
          pageRotateCcwButton: document.getElementById("pageRotateCcw"),
          cursorSelectToolButton: document.getElementById("cursorSelectTool"),
          cursorHandToolButton: document.getElementById("cursorHandTool"),
          scrollVerticalButton: document.getElementById("scrollVertical"),
          scrollHorizontalButton: document.getElementById("scrollHorizontal"),
          scrollWrappedButton: document.getElementById("scrollWrapped"),
          spreadNoneButton: document.getElementById("spreadNone"),
          spreadOddButton: document.getElementById("spreadOdd"),
          spreadEvenButton: document.getElementById("spreadEven"),
          documentPropertiesButton:
            document.getElementById("documentProperties"),
        },
        fullscreen: {
          contextFirstPage: document.getElementById("contextFirstPage"),
          contextLastPage: document.getElementById("contextLastPage"),
          contextPageRotateCw: document.getElementById("contextPageRotateCw"),
          contextPageRotateCcw: document.getElementById("contextPageRotateCcw"),
        },
        sidebar: {
          outerContainer: document.getElementById("outerContainer"),
          viewerContainer: document.getElementById("viewerContainer"),
          toggleButton: document.getElementById("sidebarToggle"),
          thumbnailButton: document.getElementById("viewThumbnail"),
          outlineButton: document.getElementById("viewOutline"),
          attachmentsButton: document.getElementById("viewAttachments"),
          thumbnailView: document.getElementById("thumbnailView"),
          outlineView: document.getElementById("outlineView"),
          attachmentsView: document.getElementById("attachmentsView"),
        },
        sidebarResizer: {
          outerContainer: document.getElementById("outerContainer"),
          resizer: document.getElementById("sidebarResizer"),
        },
        findBar: {
          bar: document.getElementById("findbar"),
          toggleButton: document.getElementById("viewFind"),
          findField: document.getElementById("findInput"),
          highlightAllCheckbox: document.getElementById("findHighlightAll"),
          caseSensitiveCheckbox: document.getElementById("findMatchCase"),
          entireWordCheckbox: document.getElementById("findEntireWord"),
          findMsg: document.getElementById("findMsg"),
          findResultsCount: document.getElementById("findResultsCount"),
          findPreviousButton: document.getElementById("findPrevious"),
          findNextButton: document.getElementById("findNext"),
        },
        passwordOverlay: {
          overlayName: "passwordOverlay",
          container: document.getElementById("passwordOverlay"),
          label: document.getElementById("passwordText"),
          input: document.getElementById("password"),
          submitButton: document.getElementById("passwordSubmit"),
          cancelButton: document.getElementById("passwordCancel"),
        },
        documentProperties: {
          overlayName: "documentPropertiesOverlay",
          container: document.getElementById("documentPropertiesOverlay"),
          closeButton: document.getElementById("documentPropertiesClose"),
          fields: {
            fileName: document.getElementById("fileNameField"),
            fileSize: document.getElementById("fileSizeField"),
            title: document.getElementById("titleField"),
            author: document.getElementById("authorField"),
            subject: document.getElementById("subjectField"),
            keywords: document.getElementById("keywordsField"),
            creationDate: document.getElementById("creationDateField"),
            modificationDate: document.getElementById("modificationDateField"),
            creator: document.getElementById("creatorField"),
            producer: document.getElementById("producerField"),
            version: document.getElementById("versionField"),
            pageCount: document.getElementById("pageCountField"),
            pageSize: document.getElementById("pageSizeField"),
            linearized: document.getElementById("linearizedField"),
          },
        },
        errorWrapper: {
          container: document.getElementById("errorWrapper"),
          errorMessage: document.getElementById("errorMessage"),
          closeButton: document.getElementById("errorClose"),
          errorMoreInfo: document.getElementById("errorMoreInfo"),
          moreInfoButton: document.getElementById("errorShowMore"),
          lessInfoButton: document.getElementById("errorShowLess"),
        },
        printContainer: document.getElementById("printContainer"),
        openFileInputName: "fileInput",
        debuggerScriptPath: "./debugger.js",
      };
      (window.PDFViewerApplication = i.PDFViewerApplication),
        (window.PDFViewerApplicationOptions = r.AppOptions);
      var t = document.createEvent("CustomEvent");
      t.initCustomEvent("webviewerloaded", !0, !0, { source: window });
      try {
        parent.document.dispatchEvent(t);
      } catch (e) {
        console.error("webviewerloaded: ".concat(e)), document.dispatchEvent(t);
      }
      i.PDFViewerApplication.run(e);
    }
    (i = n(1)),
      (r = n(6)),
      n(36),
      n(41),
      "interactive" === document.readyState ||
      "complete" === document.readyState
        ? a()
        : document.addEventListener("DOMContentLoaded", a, !0);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFPrintServiceFactory =
        t.DefaultExternalServices =
        t.PDFViewerApplication =
          void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i },
      a = n(5),
      o = n(6),
      s = n(8),
      u = n(9),
      l = n(11),
      c = n(12),
      d = n(13),
      h = n(14),
      f = n(15),
      p = n(16),
      v = n(17),
      g = n(18),
      m = n(20),
      y = n(21),
      b = n(22),
      w = n(23),
      _ = n(24),
      P = n(25),
      S = n(27),
      k = n(32),
      E = n(34),
      L = n(35);
    function C(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (n = I(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var i = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (e) {
              throw e;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        o = !0,
        s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return (o = e.done), e;
        },
        e: function (e) {
          (s = !0), (a = e);
        },
        f: function () {
          try {
            o || null == n.return || n.return();
          } finally {
            if (s) throw a;
          }
        },
      };
    }
    function x(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            i = !0,
            r = !1,
            a = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(i = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              i = !0
            );
          } catch (e) {
            (r = !0), (a = e);
          } finally {
            try {
              i || null == s.return || s.return();
            } finally {
              if (r) throw a;
            }
          }
          return n;
        })(e, t) ||
        I(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function I(e, t) {
      if (e) {
        if ("string" == typeof e) return T(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? T(e, t)
            : void 0
        );
      }
    }
    function T(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function N(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function M(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var a = e.apply(t, n);
          function o(e) {
            N(a, i, r, o, s, "next", e);
          }
          function s(e) {
            N(a, i, r, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    function B(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var O = 1e3,
      A = "enablePermissions",
      R = -1,
      D = 1,
      V = (function () {
        function e() {
          throw (
            ((function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            new Error("Cannot initialize DefaultExternalServices."))
          );
        }
        var t, n, i;
        return (
          (t = e),
          (i = [
            { key: "updateFindControlState", value: function (e) {} },
            { key: "updateFindMatchesCount", value: function (e) {} },
            { key: "initPassiveLoading", value: function (e) {} },
            { key: "fallback", value: function (e, t) {} },
            { key: "reportTelemetry", value: function (e) {} },
            {
              key: "createDownloadManager",
              value: function (e) {
                throw new Error("Not implemented: createDownloadManager");
              },
            },
            {
              key: "createPreferences",
              value: function () {
                throw new Error("Not implemented: createPreferences");
              },
            },
            {
              key: "createL10n",
              value: function (e) {
                throw new Error("Not implemented: createL10n");
              },
            },
            {
              key: "supportsIntegratedFind",
              get: function () {
                return (0, s.shadow)(this, "supportsIntegratedFind", !1);
              },
            },
            {
              key: "supportsDocumentFonts",
              get: function () {
                return (0, s.shadow)(this, "supportsDocumentFonts", !0);
              },
            },
            {
              key: "supportedMouseWheelZoomModifierKeys",
              get: function () {
                return (0, s.shadow)(
                  this,
                  "supportedMouseWheelZoomModifierKeys",
                  { ctrlKey: !0, metaKey: !0 }
                );
              },
            },
            {
              key: "isInAutomation",
              get: function () {
                return (0, s.shadow)(this, "isInAutomation", !1);
              },
            },
          ]),
          (n = null) && B(t.prototype, n),
          i && B(t, i),
          e
        );
      })();
    t.DefaultExternalServices = V;
    var F,
      U = {
        initialBookmark: document.location.hash.substring(1),
        _initializedCapability: (0, s.createPromiseCapability)(),
        fellback: !1,
        appConfig: null,
        pdfDocument: null,
        pdfLoadingTask: null,
        printService: null,
        pdfViewer: null,
        pdfThumbnailViewer: null,
        pdfRenderingQueue: null,
        pdfPresentationMode: null,
        pdfDocumentProperties: null,
        pdfLinkService: null,
        pdfHistory: null,
        pdfSidebar: null,
        pdfSidebarResizer: null,
        pdfOutlineViewer: null,
        pdfAttachmentViewer: null,
        pdfCursorTools: null,
        store: null,
        downloadManager: null,
        overlayManager: null,
        preferences: null,
        toolbar: null,
        secondaryToolbar: null,
        eventBus: null,
        l10n: null,
        isInitialViewSet: !1,
        downloadComplete: !1,
        isViewerEmbedded: window.parent !== window,
        url: "",
        baseUrl: "",
        externalServices: V,
        _boundEvents: {},
        contentDispositionFilename: null,
        initialize: function (e) {
          var t = this;
          return M(
            r.default.mark(function n() {
              var i;
              return r.default.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t.preferences =
                          t.externalServices.createPreferences()),
                        (t.appConfig = e),
                        (n.next = 4),
                        t._readPreferences()
                      );
                    case 4:
                      return (n.next = 6), t._parseHashParameters();
                    case 6:
                      return (n.next = 8), t._initializeL10n();
                    case 8:
                      return (
                        t.isViewerEmbedded &&
                          o.AppOptions.get("externalLinkTarget") ===
                            s.LinkTarget.NONE &&
                          o.AppOptions.set(
                            "externalLinkTarget",
                            s.LinkTarget.TOP
                          ),
                        (n.next = 11),
                        t._initializeViewerComponents()
                      );
                    case 11:
                      t.bindEvents(),
                        t.bindWindowEvents(),
                        (i = e.appContainer || document.documentElement),
                        t.l10n.translate(i).then(function () {
                          t.eventBus.dispatch("localized", { source: t });
                        }),
                        t._initializedCapability.resolve();
                    case 16:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        _readPreferences: function () {
          var e = this;
          return M(
            r.default.mark(function t() {
              var n, i;
              return r.default.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!o.AppOptions.get("disablePreferences")) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (
                          (t.prev = 2), (t.next = 5), e.preferences.getAll()
                        );
                      case 5:
                        for (i in (n = t.sent)) o.AppOptions.set(i, n[i]);
                        t.next = 12;
                        break;
                      case 9:
                        (t.prev = 9),
                          (t.t0 = t.catch(2)),
                          console.error(
                            '_readPreferences: "'.concat(t.t0.message, '".')
                          );
                      case 12:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[2, 9]]
              );
            })
          )();
        },
        _parseHashParameters: function () {
          var e = this;
          return M(
            r.default.mark(function t() {
              var n, i, s, u;
              return r.default.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (o.AppOptions.get("pdfBugEnabled")) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", void 0);
                    case 2:
                      if ((n = document.location.hash.substring(1))) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return", void 0);
                    case 5:
                      if (
                        ((i = (0, a.parseQueryString)(n)),
                        (s = []),
                        "disableworker" in i &&
                          "true" === i.disableworker &&
                          s.push(q()),
                        "disablerange" in i &&
                          o.AppOptions.set(
                            "disableRange",
                            "true" === i.disablerange
                          ),
                        "disablestream" in i &&
                          o.AppOptions.set(
                            "disableStream",
                            "true" === i.disablestream
                          ),
                        "disableautofetch" in i &&
                          o.AppOptions.set(
                            "disableAutoFetch",
                            "true" === i.disableautofetch
                          ),
                        "disablefontface" in i &&
                          o.AppOptions.set(
                            "disableFontFace",
                            "true" === i.disablefontface
                          ),
                        "disablehistory" in i &&
                          o.AppOptions.set(
                            "disableHistory",
                            "true" === i.disablehistory
                          ),
                        "webgl" in i &&
                          o.AppOptions.set("enableWebGL", "true" === i.webgl),
                        "verbosity" in i &&
                          o.AppOptions.set("verbosity", 0 | i.verbosity),
                        !("textlayer" in i))
                      ) {
                        t.next = 23;
                        break;
                      }
                      (t.t0 = i.textlayer),
                        (t.next =
                          "off" === t.t0
                            ? 18
                            : "visible" === t.t0
                            ? 20
                            : "shadow" === t.t0
                            ? 20
                            : "hover" === t.t0
                            ? 20
                            : 23);
                      break;
                    case 18:
                      return (
                        o.AppOptions.set(
                          "textLayerMode",
                          a.TextLayerMode.DISABLE
                        ),
                        t.abrupt("break", 23)
                      );
                    case 20:
                      return (
                        e.appConfig.viewerContainer.classList.add(
                          "textLayer-" + i.textlayer
                        ),
                        t.abrupt("break", 23)
                      );
                    case 23:
                      return (
                        "pdfbug" in i &&
                          (o.AppOptions.set("pdfBug", !0),
                          o.AppOptions.set("fontExtraProperties", !0),
                          (u = i.pdfbug.split(",")),
                          s.push(K(u))),
                        "locale" in i && o.AppOptions.set("locale", i.locale),
                        t.abrupt(
                          "return",
                          Promise.all(s).catch(function (e) {
                            console.error(
                              '_parseHashParameters: "'.concat(e.message, '".')
                            );
                          })
                        )
                      );
                    case 26:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        _initializeL10n: function () {
          var e = this;
          return M(
            r.default.mark(function t() {
              var n;
              return r.default.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e.l10n = e.externalServices.createL10n({
                          locale: o.AppOptions.get("locale"),
                        })),
                        (t.next = 3),
                        e.l10n.getDirection()
                      );
                    case 3:
                      (n = t.sent),
                        (document.getElementsByTagName("html")[0].dir = n);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        _initializeViewerComponents: function () {
          var e = this;
          return M(
            r.default.mark(function t() {
              var n, i, s, L, C, x, I, T;
              return r.default.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (n = e.appConfig),
                        (i =
                          n.eventBus ||
                          new a.EventBus({
                            isInAutomation: e.externalServices.isInAutomation,
                          })),
                        (e.eventBus = i),
                        (e.overlayManager = new d.OverlayManager()),
                        ((s = new l.PDFRenderingQueue()).onIdle =
                          e.cleanup.bind(e)),
                        (e.pdfRenderingQueue = s),
                        (L = new y.PDFLinkService({
                          eventBus: i,
                          externalLinkTarget:
                            o.AppOptions.get("externalLinkTarget"),
                          externalLinkRel: o.AppOptions.get("externalLinkRel"),
                          ignoreDestinationZoom: o.AppOptions.get(
                            "ignoreDestinationZoom"
                          ),
                        })),
                        (e.pdfLinkService = L),
                        (C = e.externalServices.createDownloadManager({
                          disableCreateObjectURL: o.AppOptions.get(
                            "disableCreateObjectURL"
                          ),
                        })),
                        (e.downloadManager = C),
                        (x = new g.PDFFindController({
                          linkService: L,
                          eventBus: i,
                        })),
                        (e.findController = x),
                        (I = n.mainContainer),
                        (T = n.viewerContainer),
                        (e.pdfViewer = new S.PDFViewer({
                          container: I,
                          viewer: T,
                          eventBus: i,
                          renderingQueue: s,
                          linkService: L,
                          downloadManager: C,
                          findController: x,
                          renderer: o.AppOptions.get("renderer"),
                          enableWebGL: o.AppOptions.get("enableWebGL"),
                          l10n: e.l10n,
                          textLayerMode: o.AppOptions.get("textLayerMode"),
                          imageResourcesPath:
                            o.AppOptions.get("imageResourcesPath"),
                          renderInteractiveForms: o.AppOptions.get(
                            "renderInteractiveForms"
                          ),
                          enablePrintAutoRotate: o.AppOptions.get(
                            "enablePrintAutoRotate"
                          ),
                          useOnlyCssZoom: o.AppOptions.get("useOnlyCssZoom"),
                          maxCanvasPixels: o.AppOptions.get("maxCanvasPixels"),
                        })),
                        s.setViewer(e.pdfViewer),
                        L.setViewer(e.pdfViewer),
                        (e.pdfThumbnailViewer = new P.PDFThumbnailViewer({
                          container: n.sidebar.thumbnailView,
                          renderingQueue: s,
                          linkService: L,
                          l10n: e.l10n,
                        })),
                        s.setThumbnailViewer(e.pdfThumbnailViewer),
                        (e.pdfHistory = new m.PDFHistory({
                          linkService: L,
                          eventBus: i,
                        })),
                        L.setHistory(e.pdfHistory),
                        e.supportsIntegratedFind ||
                          (e.findBar = new v.PDFFindBar(n.findBar, i, e.l10n)),
                        (e.pdfDocumentProperties = new p.PDFDocumentProperties(
                          n.documentProperties,
                          e.overlayManager,
                          i,
                          e.l10n
                        )),
                        (e.pdfCursorTools = new u.PDFCursorTools({
                          container: I,
                          eventBus: i,
                          cursorToolOnLoad:
                            o.AppOptions.get("cursorToolOnLoad"),
                        })),
                        (e.toolbar = new E.Toolbar(n.toolbar, i, e.l10n)),
                        (e.secondaryToolbar = new k.SecondaryToolbar(
                          n.secondaryToolbar,
                          I,
                          i
                        )),
                        e.supportsFullscreen &&
                          (e.pdfPresentationMode = new w.PDFPresentationMode({
                            container: I,
                            pdfViewer: e.pdfViewer,
                            eventBus: i,
                            contextMenuItems: n.fullscreen,
                          })),
                        (e.passwordPrompt = new h.PasswordPrompt(
                          n.passwordOverlay,
                          e.overlayManager,
                          e.l10n
                        )),
                        (e.pdfOutlineViewer = new b.PDFOutlineViewer({
                          container: n.sidebar.outlineView,
                          eventBus: i,
                          linkService: L,
                        })),
                        (e.pdfAttachmentViewer = new f.PDFAttachmentViewer({
                          container: n.sidebar.attachmentsView,
                          eventBus: i,
                          downloadManager: C,
                        })),
                        (e.pdfSidebar = new c.PDFSidebar({
                          elements: n.sidebar,
                          pdfViewer: e.pdfViewer,
                          pdfThumbnailViewer: e.pdfThumbnailViewer,
                          eventBus: i,
                          l10n: e.l10n,
                        })),
                        (e.pdfSidebar.onToggled = e.forceRendering.bind(e)),
                        (e.pdfSidebarResizer = new _.PDFSidebarResizer(
                          n.sidebarResizer,
                          i,
                          e.l10n
                        ));
                    case 34:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        run: function (e) {
          this.initialize(e).then(Q);
        },
        get initialized() {
          return this._initializedCapability.settled;
        },
        get initializedPromise() {
          return this._initializedCapability.promise;
        },
        zoomIn: function (e) {
          if (!this.pdfViewer.isInPresentationMode) {
            var t = this.pdfViewer.currentScale;
            do {
              (t = (1.1 * t).toFixed(2)),
                (t = Math.ceil(10 * t) / 10),
                (t = Math.min(a.MAX_SCALE, t));
            } while (--e > 0 && t < a.MAX_SCALE);
            this.pdfViewer.currentScaleValue = t;
          }
        },
        zoomOut: function (e) {
          if (!this.pdfViewer.isInPresentationMode) {
            var t = this.pdfViewer.currentScale;
            do {
              (t = (t / 1.1).toFixed(2)),
                (t = Math.floor(10 * t) / 10),
                (t = Math.max(a.MIN_SCALE, t));
            } while (--e > 0 && t > a.MIN_SCALE);
            this.pdfViewer.currentScaleValue = t;
          }
        },
        zoomReset: function () {
          this.pdfViewer.isInPresentationMode ||
            (this.pdfViewer.currentScaleValue = a.DEFAULT_SCALE_VALUE);
        },
        get pagesCount() {
          return this.pdfDocument ? this.pdfDocument.numPages : 0;
        },
        get page() {
          return this.pdfViewer.currentPageNumber;
        },
        set page(e) {
          this.pdfViewer.currentPageNumber = e;
        },
        get printing() {
          return !!this.printService;
        },
        get supportsPrinting() {
          return Ve.instance.supportsPrinting;
        },
        get supportsFullscreen() {
          var e,
            t = document.documentElement;
          return (
            (e = !!(
              t.requestFullscreen ||
              t.mozRequestFullScreen ||
              t.webkitRequestFullScreen ||
              t.msRequestFullscreen
            )),
            (!1 !== document.fullscreenEnabled &&
              !1 !== document.mozFullScreenEnabled &&
              !1 !== document.webkitFullscreenEnabled &&
              !1 !== document.msFullscreenEnabled) ||
              (e = !1),
            (0, s.shadow)(this, "supportsFullscreen", e)
          );
        },
        get supportsIntegratedFind() {
          return this.externalServices.supportsIntegratedFind;
        },
        get supportsDocumentFonts() {
          return this.externalServices.supportsDocumentFonts;
        },
        get loadingBar() {
          var e = new a.ProgressBar("#loadingBar");
          return (0, s.shadow)(this, "loadingBar", e);
        },
        get supportedMouseWheelZoomModifierKeys() {
          return this.externalServices.supportedMouseWheelZoomModifierKeys;
        },
        initPassiveLoading: function () {
          throw new Error("Not implemented: initPassiveLoading");
        },
        setTitleUsingUrl: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          (this.url = e), (this.baseUrl = e.split("#")[0]);
          var t = (0, a.getPDFFileNameFromURL)(e, "");
          if (!t)
            try {
              t = decodeURIComponent((0, s.getFilenameFromUrl)(e)) || e;
            } catch (n) {
              t = e;
            }
          this.setTitle(t);
        },
        setTitle: function (e) {
          this.isViewerEmbedded || (document.title = e);
        },
        close: function () {
          var e = this;
          return M(
            r.default.mark(function t() {
              var n;
              return r.default.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (e.appConfig.errorWrapper.container.setAttribute(
                          "hidden",
                          "true"
                        ),
                        e.pdfLoadingTask)
                      ) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return", void 0);
                    case 4:
                      return (
                        (n = e.pdfLoadingTask.destroy()),
                        (e.pdfLoadingTask = null),
                        e.pdfDocument &&
                          ((e.pdfDocument = null),
                          e.pdfThumbnailViewer.setDocument(null),
                          e.pdfViewer.setDocument(null),
                          e.pdfLinkService.setDocument(null),
                          e.pdfDocumentProperties.setDocument(null)),
                        Z(),
                        (e.store = null),
                        (e.isInitialViewSet = !1),
                        (e.downloadComplete = !1),
                        (e.url = ""),
                        (e.baseUrl = ""),
                        (e.contentDispositionFilename = null),
                        e.pdfSidebar.reset(),
                        e.pdfOutlineViewer.reset(),
                        e.pdfAttachmentViewer.reset(),
                        e.pdfHistory && e.pdfHistory.reset(),
                        e.findBar && e.findBar.reset(),
                        e.toolbar.reset(),
                        e.secondaryToolbar.reset(),
                        "undefined" != typeof PDFBug && PDFBug.cleanup(),
                        t.abrupt("return", n)
                      );
                    case 23:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        open: function (e, t) {
          var n = this;
          return M(
            r.default.mark(function i() {
              var a, u, l, c, d, h, f, p, v;
              return r.default.wrap(function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!n.pdfLoadingTask) {
                        i.next = 3;
                        break;
                      }
                      return (i.next = 3), n.close();
                    case 3:
                      for (u in (a = o.AppOptions.getAll(o.OptionKind.WORKER)))
                        s.GlobalWorkerOptions[u] = a[u];
                      for (d in ((l = Object.create(null)),
                      "string" == typeof e
                        ? (n.setTitleUsingUrl(e), (l.url = e))
                        : e && "byteLength" in e
                        ? (l.data = e)
                        : e.url &&
                          e.originalUrl &&
                          (n.setTitleUsingUrl(e.originalUrl), (l.url = e.url)),
                      (c = o.AppOptions.getAll(o.OptionKind.API))))
                        (h = c[d]), (l[d] = h);
                      if (t)
                        for (f in t)
                          (p = t[f]),
                            "length" === f &&
                              n.pdfDocumentProperties.setFileSize(p),
                            (l[f] = p);
                      return (
                        (v = (0, s.getDocument)(l)),
                        (n.pdfLoadingTask = v),
                        (v.onPassword = function (e, t) {
                          (n.pdfLinkService.externalLinkEnabled = !1),
                            n.passwordPrompt.setUpdateCallback(e, t),
                            n.passwordPrompt.open();
                        }),
                        (v.onProgress = function (e) {
                          var t = e.loaded,
                            i = e.total;
                          n.progress(t / i);
                        }),
                        (v.onUnsupportedFeature = n.fallback.bind(n)),
                        i.abrupt(
                          "return",
                          v.promise.then(
                            function (e) {
                              n.load(e);
                            },
                            function (e) {
                              if (v === n.pdfLoadingTask) {
                                var t = e && e.message;
                                return (
                                  e instanceof s.InvalidPDFException
                                    ? n.l10n.get(
                                        "invalid_file_error",
                                        null,
                                        "Invalid or corrupted PDF file."
                                      )
                                    : e instanceof s.MissingPDFException
                                    ? n.l10n.get(
                                        "missing_file_error",
                                        null,
                                        "Missing PDF file."
                                      )
                                    : e instanceof s.UnexpectedResponseException
                                    ? n.l10n.get(
                                        "unexpected_response_error",
                                        null,
                                        "Unexpected server response."
                                      )
                                    : n.l10n.get(
                                        "loading_error",
                                        null,
                                        "An error occurred while loading the PDF."
                                      )
                                ).then(function (i) {
                                  throw (n.error(i, { message: t }), e);
                                });
                              }
                            }
                          )
                        )
                      );
                    case 16:
                    case "end":
                      return i.stop();
                  }
              }, i);
            })
          )();
        },
        download: function () {
          var e = this;
          function t() {
            r.downloadUrl(n, i);
          }
          var n = this.baseUrl,
            i =
              this.contentDispositionFilename ||
              (0, a.getPDFFileNameFromURL)(this.url),
            r = this.downloadManager;
          (r.onerror = function (t) {
            e.error("PDF failed to download: ".concat(t));
          }),
            this.pdfDocument && this.downloadComplete
              ? this.pdfDocument
                  .getData()
                  .then(function (e) {
                    var t = new Blob([e], { type: "application/pdf" });
                    r.download(t, n, i);
                  })
                  .catch(t)
              : t();
        },
        fallback: function (e) {
          this.fellback ||
            ((this.fellback = !0),
            this.externalServices.fallback(
              { featureId: e, url: this.baseUrl },
              function (e) {
                e && U.download();
              }
            ));
        },
        error: function (e, t) {
          var n = [
            this.l10n.get(
              "error_version_info",
              { version: s.version || "?", build: s.build || "?" },
              "PDF.js v{{version}} (build: {{build}})"
            ),
          ];
          t &&
            (n.push(
              this.l10n.get(
                "error_message",
                { message: t.message },
                "Message: {{message}}"
              )
            ),
            t.stack
              ? n.push(
                  this.l10n.get(
                    "error_stack",
                    { stack: t.stack },
                    "Stack: {{stack}}"
                  )
                )
              : (t.filename &&
                  n.push(
                    this.l10n.get(
                      "error_file",
                      { file: t.filename },
                      "File: {{file}}"
                    )
                  ),
                t.lineNumber &&
                  n.push(
                    this.l10n.get(
                      "error_line",
                      { line: t.lineNumber },
                      "Line: {{line}}"
                    )
                  )));
          var i = this.appConfig.errorWrapper,
            r = i.container;
          r.removeAttribute("hidden"), (i.errorMessage.textContent = e);
          var o = i.closeButton;
          o.onclick = function () {
            r.setAttribute("hidden", "true");
          };
          var u = i.errorMoreInfo,
            l = i.moreInfoButton,
            c = i.lessInfoButton;
          (l.onclick = function () {
            u.removeAttribute("hidden"),
              l.setAttribute("hidden", "true"),
              c.removeAttribute("hidden"),
              (u.style.height = u.scrollHeight + "px");
          }),
            (c.onclick = function () {
              u.setAttribute("hidden", "true"),
                l.removeAttribute("hidden"),
                c.setAttribute("hidden", "true");
            }),
            (l.oncontextmenu = a.noContextMenuHandler),
            (c.oncontextmenu = a.noContextMenuHandler),
            (o.oncontextmenu = a.noContextMenuHandler),
            l.removeAttribute("hidden"),
            c.setAttribute("hidden", "true"),
            Promise.all(n).then(function (e) {
              u.value = e.join("\n");
            });
        },
        progress: function (e) {
          var t = this;
          if (!this.downloadComplete) {
            var n = Math.round(100 * e);
            if (n > this.loadingBar.percent || isNaN(n))
              (this.loadingBar.percent = n),
                (this.pdfDocument
                  ? this.pdfDocument.loadingParams.disableAutoFetch
                  : o.AppOptions.get("disableAutoFetch")) &&
                  n &&
                  (this.disableAutoFetchLoadingBarTimeout &&
                    (clearTimeout(this.disableAutoFetchLoadingBarTimeout),
                    (this.disableAutoFetchLoadingBarTimeout = null)),
                  this.loadingBar.show(),
                  (this.disableAutoFetchLoadingBarTimeout = setTimeout(
                    function () {
                      t.loadingBar.hide(),
                        (t.disableAutoFetchLoadingBarTimeout = null);
                    },
                    5e3
                  )));
          }
        },
        load: function (e) {
          var t = this;
          (this.pdfDocument = e),
            e.getDownloadInfo().then(function () {
              (t.downloadComplete = !0),
                t.loadingBar.hide(),
                l.then(function () {
                  t.eventBus.dispatch("documentloaded", { source: t });
                });
            });
          var n = e.getPageLayout().catch(function () {}),
            i = e.getPageMode().catch(function () {}),
            s = e.getOpenAction().catch(function () {});
          this.toolbar.setPagesCount(e.numPages, !1),
            this.secondaryToolbar.setPagesCount(e.numPages),
            this.pdfLinkService.setDocument(e, null),
            this.pdfDocumentProperties.setDocument(e, this.url);
          var u = this.pdfViewer;
          u.setDocument(e);
          var l = u.firstPagePromise,
            d = u.onePageRendered,
            h = u.pagesPromise;
          this.pdfThumbnailViewer.setDocument(e);
          var f = (this.store = new L.ViewHistory(e.fingerprint))
            .getMultiple({
              page: null,
              zoom: a.DEFAULT_SCALE_VALUE,
              scrollLeft: "0",
              scrollTop: "0",
              rotation: null,
              sidebarView: c.SidebarView.UNKNOWN,
              scrollMode: a.ScrollMode.UNKNOWN,
              spreadMode: a.SpreadMode.UNKNOWN,
            })
            .catch(function () {
              return Object.create(null);
            });
          l.then(function (l) {
            t.loadingBar.setWidth(t.appConfig.viewerContainer),
              Promise.all([a.animationStarted, f, n, i, s])
                .then(
                  (function () {
                    var n = M(
                      r.default.mark(function n(i) {
                        var s, l, d, f, p, v, g, m, y, b, w, _, P;
                        return r.default.wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (s = x(i, 5)),
                                  s[0],
                                  (l = s[1]),
                                  (d = s[2]),
                                  (f = s[3]),
                                  (p = s[4]),
                                  (v = o.AppOptions.get("viewOnLoad")),
                                  t._initializePdfHistory({
                                    fingerprint: e.fingerprint,
                                    viewOnLoad: v,
                                    initialDest: p && p.dest,
                                  }),
                                  (g = t.initialBookmark),
                                  (m = o.AppOptions.get("defaultZoomValue")),
                                  (y = m ? "zoom=".concat(m) : null),
                                  (b = null),
                                  (w = o.AppOptions.get("sidebarViewOnLoad")),
                                  (_ = o.AppOptions.get("scrollModeOnLoad")),
                                  (P = o.AppOptions.get("spreadModeOnLoad")),
                                  l.page &&
                                    v !== D &&
                                    ((y =
                                      "page="
                                        .concat(l.page, "&zoom=")
                                        .concat(m || l.zoom, ",") +
                                      ""
                                        .concat(l.scrollLeft, ",")
                                        .concat(l.scrollTop)),
                                    (b = parseInt(l.rotation, 10)),
                                    w === c.SidebarView.UNKNOWN &&
                                      (w = 0 | l.sidebarView),
                                    _ === a.ScrollMode.UNKNOWN &&
                                      (_ = 0 | l.scrollMode),
                                    P === a.SpreadMode.UNKNOWN &&
                                      (P = 0 | l.spreadMode)),
                                  f &&
                                    w === c.SidebarView.UNKNOWN &&
                                    (w = De(f)),
                                  d &&
                                    P === a.SpreadMode.UNKNOWN &&
                                    (P = Re(d)),
                                  t.setInitialView(y, {
                                    rotation: b,
                                    sidebarView: w,
                                    scrollMode: _,
                                    spreadMode: P,
                                  }),
                                  t.eventBus.dispatch("documentinit", {
                                    source: t,
                                  }),
                                  t.isViewerEmbedded || u.focus(),
                                  t._initializePermissions(e),
                                  (n.next = 19),
                                  Promise.race([
                                    h,
                                    new Promise(function (e) {
                                      setTimeout(e, 1e4);
                                    }),
                                  ])
                                );
                              case 19:
                                if (g || y) {
                                  n.next = 21;
                                  break;
                                }
                                return n.abrupt("return");
                              case 21:
                                if (!u.hasEqualPageSizes) {
                                  n.next = 23;
                                  break;
                                }
                                return n.abrupt("return");
                              case 23:
                                (t.initialBookmark = g),
                                  (u.currentScaleValue = u.currentScaleValue),
                                  t.setInitialView(y);
                              case 26:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    );
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  })()
                )
                .catch(function () {
                  t.setInitialView();
                })
                .then(function () {
                  u.update();
                });
          }),
            h.then(function () {
              t._initializeAutoPrint(e, s);
            }),
            d.then(function () {
              e.getOutline().then(function (e) {
                t.pdfOutlineViewer.render({ outline: e });
              }),
                e.getAttachments().then(function (e) {
                  t.pdfAttachmentViewer.render({ attachments: e });
                });
            }),
            this._initializePageLabels(e),
            this._initializeMetadata(e);
        },
        _initializeAutoPrint: function (e, t) {
          var n = this;
          return M(
            r.default.mark(function i() {
              var o, u, l, c, d, h, f, p;
              return r.default.wrap(
                function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          (i.next = 2), Promise.all([t, e.getJavaScript()])
                        );
                      case 2:
                        if (
                          ((o = i.sent),
                          (u = x(o, 2)),
                          (l = u[0]),
                          (c = u[1]),
                          e === n.pdfDocument)
                        ) {
                          i.next = 8;
                          break;
                        }
                        return i.abrupt("return");
                      case 8:
                        if (
                          ((d = !1), l && "Print" === l.action && (d = !0), !c)
                        ) {
                          i.next = 31;
                          break;
                        }
                        if (
                          (c.some(function (e) {
                            return (
                              !!e &&
                              (console.warn(
                                "Warning: JavaScript is not supported"
                              ),
                              n.fallback(s.UNSUPPORTED_FEATURES.javaScript),
                              !0)
                            );
                          }),
                          d)
                        ) {
                          i.next = 31;
                          break;
                        }
                        (h = C(c)), (i.prev = 14), h.s();
                      case 16:
                        if ((f = h.n()).done) {
                          i.next = 23;
                          break;
                        }
                        if (!(p = f.value) || !a.AutoPrintRegExp.test(p)) {
                          i.next = 21;
                          break;
                        }
                        return (d = !0), i.abrupt("break", 23);
                      case 21:
                        i.next = 16;
                        break;
                      case 23:
                        i.next = 28;
                        break;
                      case 25:
                        (i.prev = 25), (i.t0 = i.catch(14)), h.e(i.t0);
                      case 28:
                        return (i.prev = 28), h.f(), i.finish(28);
                      case 31:
                        if (n.supportsPrinting) {
                          i.next = 33;
                          break;
                        }
                        return i.abrupt("return");
                      case 33:
                        d &&
                          setTimeout(function () {
                            window.print();
                          });
                      case 34:
                      case "end":
                        return i.stop();
                    }
                },
                i,
                null,
                [[14, 25, 28, 31]]
              );
            })
          )();
        },
        _initializeMetadata: function (e) {
          var t = this;
          return M(
            r.default.mark(function n() {
              var i, a, o, u, l, c, d, h, f, p, v, g;
              return r.default.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), e.getMetadata();
                    case 2:
                      if (
                        ((i = n.sent),
                        (a = i.info),
                        (o = i.metadata),
                        (u = i.contentDispositionFilename),
                        e === t.pdfDocument)
                      ) {
                        n.next = 8;
                        break;
                      }
                      return n.abrupt("return");
                    case 8:
                      (t.documentInfo = a),
                        (t.metadata = o),
                        (t.contentDispositionFilename = u),
                        console.log(
                          "PDF "
                            .concat(e.fingerprint, " [")
                            .concat(a.PDFFormatVersion, " ") +
                            ""
                              .concat((a.Producer || "-").trim(), " / ")
                              .concat((a.Creator || "-").trim(), "] ") +
                            "(PDF.js: ".concat(s.version || "-") +
                            "".concat(
                              t.pdfViewer.enableWebGL ? " [WebGL]" : "",
                              ")"
                            )
                        ),
                        (c = a && a.Title) && (l = c),
                        (d = o && o.get("dc:title")) &&
                          ("Untitled" === d ||
                            /[\uFFF0-\uFFFF]/g.test(d) ||
                            (l = d)),
                        l
                          ? t.setTitle(
                              "".concat(l, " - ").concat(u || document.title)
                            )
                          : u && t.setTitle(u),
                        a.IsAcroFormPresent &&
                          (console.warn(
                            "Warning: AcroForm/XFA is not supported"
                          ),
                          t.fallback(s.UNSUPPORTED_FEATURES.forms)),
                        (h = "other"),
                        [
                          "1.0",
                          "1.1",
                          "1.2",
                          "1.3",
                          "1.4",
                          "1.5",
                          "1.6",
                          "1.7",
                          "1.8",
                          "1.9",
                          "2.0",
                          "2.1",
                          "2.2",
                          "2.3",
                        ].includes(a.PDFFormatVersion) &&
                          (h = "v".concat(
                            a.PDFFormatVersion.replace(".", "_")
                          )),
                        (f = "other"),
                        (p = [
                          "acrobat distiller",
                          "acrobat pdfwriter",
                          "adobe livecycle",
                          "adobe pdf library",
                          "adobe photoshop",
                          "ghostscript",
                          "tcpdf",
                          "cairo",
                          "dvipdfm",
                          "dvips",
                          "pdftex",
                          "pdfkit",
                          "itext",
                          "prince",
                          "quarkxpress",
                          "mac os x",
                          "microsoft",
                          "openoffice",
                          "oracle",
                          "luradocument",
                          "pdf-xchange",
                          "antenna house",
                          "aspose.cells",
                          "fpdf",
                        ]),
                        a.Producer &&
                          ((v = a.Producer.toLowerCase()),
                          p.some(function (e) {
                            return (
                              !!v.includes(e) &&
                              ((f = e.replace(/[ .\-]/g, "_")), !0)
                            );
                          })),
                        (g = null),
                        a.IsAcroFormPresent &&
                          (g = a.IsXFAPresent ? "xfa" : "acroform"),
                        t.externalServices.reportTelemetry({
                          type: "documentInfo",
                          version: h,
                          generator: f,
                          formType: g,
                        });
                    case 27:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        _initializePageLabels: function (e) {
          var t = this;
          return M(
            r.default.mark(function n() {
              var i, a, s, u, l, c;
              return r.default.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), e.getPageLabels();
                    case 2:
                      if (((i = n.sent), e === t.pdfDocument)) {
                        n.next = 5;
                        break;
                      }
                      return n.abrupt("return");
                    case 5:
                      if (i && !o.AppOptions.get("disablePageLabels")) {
                        n.next = 7;
                        break;
                      }
                      return n.abrupt("return");
                    case 7:
                      if ((a = i.length) === t.pagesCount) {
                        n.next = 11;
                        break;
                      }
                      return (
                        console.error(
                          "The number of Page Labels does not match the number of pages in the document."
                        ),
                        n.abrupt("return")
                      );
                    case 11:
                      for (s = 0; s < a && i[s] === (s + 1).toString(); ) s++;
                      if (s !== a) {
                        n.next = 15;
                        break;
                      }
                      return n.abrupt("return");
                    case 15:
                      (u = t.pdfViewer),
                        (l = t.pdfThumbnailViewer),
                        (c = t.toolbar),
                        u.setPageLabels(i),
                        l.setPageLabels(i),
                        c.setPagesCount(a, !0),
                        c.setPageNumber(
                          u.currentPageNumber,
                          u.currentPageLabel
                        );
                    case 20:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        _initializePdfHistory: function (e) {
          var t = e.fingerprint,
            n = e.viewOnLoad,
            i = e.initialDest,
            r = void 0 === i ? null : i;
          this.isViewerEmbedded ||
            o.AppOptions.get("disableHistory") ||
            (this.pdfHistory.initialize({
              fingerprint: t,
              resetHistory: n === D,
              updateUrl: o.AppOptions.get("historyUpdateUrl"),
            }),
            this.pdfHistory.initialBookmark &&
              ((this.initialBookmark = this.pdfHistory.initialBookmark),
              (this.initialRotation = this.pdfHistory.initialRotation)),
            r &&
              !this.initialBookmark &&
              n === R &&
              ((this.initialBookmark = JSON.stringify(r)),
              this.pdfHistory.push({ explicitDest: r, pageNumber: null })));
        },
        _initializePermissions: function (e) {
          var t = this;
          return M(
            r.default.mark(function n() {
              var i;
              return r.default.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), e.getPermissions();
                    case 2:
                      if (((i = n.sent), e === t.pdfDocument)) {
                        n.next = 5;
                        break;
                      }
                      return n.abrupt("return");
                    case 5:
                      if (i && o.AppOptions.get("enablePermissions")) {
                        n.next = 7;
                        break;
                      }
                      return n.abrupt("return");
                    case 7:
                      i.includes(s.PermissionFlag.COPY) ||
                        t.appConfig.viewerContainer.classList.add(A);
                    case 8:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        setInitialView: function (e) {
          var t,
            n,
            i = this,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = r.rotation,
            s = r.sidebarView,
            u = r.scrollMode,
            l = r.spreadMode,
            c = function (e) {
              (0, a.isValidRotation)(e) && (i.pdfViewer.pagesRotation = e);
            };
          (this.isInitialViewSet = !0),
            this.pdfSidebar.setInitialView(s),
            (t = u),
            (n = l),
            (0, a.isValidScrollMode)(t) && (i.pdfViewer.scrollMode = t),
            (0, a.isValidSpreadMode)(n) && (i.pdfViewer.spreadMode = n),
            this.initialBookmark
              ? (c(this.initialRotation),
                delete this.initialRotation,
                this.pdfLinkService.setHash(this.initialBookmark),
                (this.initialBookmark = null))
              : e && (c(o), this.pdfLinkService.setHash(e)),
            this.toolbar.setPageNumber(
              this.pdfViewer.currentPageNumber,
              this.pdfViewer.currentPageLabel
            ),
            this.secondaryToolbar.setPageNumber(
              this.pdfViewer.currentPageNumber
            ),
            this.pdfViewer.currentScaleValue ||
              (this.pdfViewer.currentScaleValue = a.DEFAULT_SCALE_VALUE);
        },
        cleanup: function () {
          this.pdfDocument &&
            (this.pdfViewer.cleanup(),
            this.pdfThumbnailViewer.cleanup(),
            this.pdfViewer.renderer !== a.RendererType.SVG &&
              this.pdfDocument.cleanup());
        },
        forceRendering: function () {
          (this.pdfRenderingQueue.printing = this.printing),
            (this.pdfRenderingQueue.isThumbnailViewEnabled =
              this.pdfSidebar.isThumbnailViewVisible),
            this.pdfRenderingQueue.renderHighestPriority();
        },
        beforePrint: function () {
          var e = this;
          if (!this.printService)
            if (this.supportsPrinting)
              if (this.pdfViewer.pageViewsReady) {
                var t = this.pdfViewer.getPagesOverview(),
                  n = this.appConfig.printContainer,
                  i = Ve.instance.createPrintService(
                    this.pdfDocument,
                    t,
                    n,
                    this.l10n
                  );
                (this.printService = i),
                  this.forceRendering(),
                  i.layout(),
                  this.externalServices.reportTelemetry({ type: "print" });
              } else
                this.l10n
                  .get(
                    "printing_not_ready",
                    null,
                    "Warning: The PDF is not fully loaded for printing."
                  )
                  .then(function (e) {
                    window.alert(e);
                  });
            else
              this.l10n
                .get(
                  "printing_not_supported",
                  null,
                  "Warning: Printing is not fully supported by this browser."
                )
                .then(function (t) {
                  e.error(t);
                });
        },
        afterPrint: function () {
          this.printService &&
            (this.printService.destroy(), (this.printService = null)),
            this.forceRendering();
        },
        rotatePages: function (e) {
          if (this.pdfDocument) {
            var t = (this.pdfViewer.pagesRotation + 360 + e) % 360;
            this.pdfViewer.pagesRotation = t;
          }
        },
        requestPresentationMode: function () {
          this.pdfPresentationMode && this.pdfPresentationMode.request();
        },
        bindEvents: function () {
          var e = this.eventBus,
            t = this._boundEvents;
          (t.beforePrint = this.beforePrint.bind(this)),
            (t.afterPrint = this.afterPrint.bind(this)),
            e._on("resize", re),
            e._on("hashchange", ae),
            e._on("beforeprint", t.beforePrint),
            e._on("afterprint", t.afterPrint),
            e._on("pagerendered", X),
            e._on("updateviewarea", te),
            e._on("pagechanging", Ie),
            e._on("scalechanging", Ce),
            e._on("rotationchanging", xe),
            e._on("sidebarviewchanged", ee),
            e._on("pagemode", Y),
            e._on("namedaction", $),
            e._on("presentationmodechanged", J),
            e._on("presentationmode", oe),
            e._on("print", se),
            e._on("download", ue),
            e._on("firstpage", le),
            e._on("lastpage", ce),
            e._on("nextpage", de),
            e._on("previouspage", he),
            e._on("zoomin", fe),
            e._on("zoomout", pe),
            e._on("zoomreset", ve),
            e._on("pagenumberchanged", ge),
            e._on("scalechanged", me),
            e._on("rotatecw", ye),
            e._on("rotateccw", be),
            e._on("switchscrollmode", we),
            e._on("scrollmodechanged", ne),
            e._on("switchspreadmode", _e),
            e._on("spreadmodechanged", ie),
            e._on("documentproperties", Pe),
            e._on("find", Se),
            e._on("findfromurlhash", ke),
            e._on("updatefindmatchescount", Ee),
            e._on("updatefindcontrolstate", Le),
            e._on("fileinputchange", j),
            e._on("openfile", H);
        },
        bindWindowEvents: function () {
          var e = this.eventBus,
            t = this._boundEvents;
          (t.windowResize = function () {
            e.dispatch("resize", { source: window });
          }),
            (t.windowHashChange = function () {
              e.dispatch("hashchange", {
                source: window,
                hash: document.location.hash.substring(1),
              });
            }),
            (t.windowBeforePrint = function () {
              e.dispatch("beforeprint", { source: window });
            }),
            (t.windowAfterPrint = function () {
              e.dispatch("afterprint", { source: window });
            }),
            window.addEventListener("visibilitychange", Te),
            window.addEventListener("wheel", Be, { passive: !1 }),
            window.addEventListener("click", Oe),
            window.addEventListener("keydown", Ae),
            window.addEventListener("resize", t.windowResize),
            window.addEventListener("hashchange", t.windowHashChange),
            window.addEventListener("beforeprint", t.windowBeforePrint),
            window.addEventListener("afterprint", t.windowAfterPrint);
        },
        unbindEvents: function () {
          var e = this.eventBus,
            t = this._boundEvents;
          e._off("resize", re),
            e._off("hashchange", ae),
            e._off("beforeprint", t.beforePrint),
            e._off("afterprint", t.afterPrint),
            e._off("pagerendered", X),
            e._off("updateviewarea", te),
            e._off("pagechanging", Ie),
            e._off("scalechanging", Ce),
            e._off("rotationchanging", xe),
            e._off("sidebarviewchanged", ee),
            e._off("pagemode", Y),
            e._off("namedaction", $),
            e._off("presentationmodechanged", J),
            e._off("presentationmode", oe),
            e._off("print", se),
            e._off("download", ue),
            e._off("firstpage", le),
            e._off("lastpage", ce),
            e._off("nextpage", de),
            e._off("previouspage", he),
            e._off("zoomin", fe),
            e._off("zoomout", pe),
            e._off("zoomreset", ve),
            e._off("pagenumberchanged", ge),
            e._off("scalechanged", me),
            e._off("rotatecw", ye),
            e._off("rotateccw", be),
            e._off("switchscrollmode", we),
            e._off("scrollmodechanged", ne),
            e._off("switchspreadmode", _e),
            e._off("spreadmodechanged", ie),
            e._off("documentproperties", Pe),
            e._off("find", Se),
            e._off("findfromurlhash", ke),
            e._off("updatefindmatchescount", Ee),
            e._off("updatefindcontrolstate", Le),
            e._off("fileinputchange", j),
            e._off("openfile", H),
            (t.beforePrint = null),
            (t.afterPrint = null);
        },
        unbindWindowEvents: function () {
          var e = this._boundEvents;
          window.removeEventListener("visibilitychange", Te),
            window.removeEventListener("wheel", Be, { passive: !1 }),
            window.removeEventListener("click", Oe),
            window.removeEventListener("keydown", Ae),
            window.removeEventListener("resize", e.windowResize),
            window.removeEventListener("hashchange", e.windowHashChange),
            window.removeEventListener("beforeprint", e.windowBeforePrint),
            window.removeEventListener("afterprint", e.windowAfterPrint),
            (e.windowResize = null),
            (e.windowHashChange = null),
            (e.windowBeforePrint = null),
            (e.windowAfterPrint = null);
        },
      };
    t.PDFViewerApplication = U;
    var z,
      j,
      H,
      W = ["null", "http://mozilla.github.io", "https://mozilla.github.io"];
    function q() {
      return G.apply(this, arguments);
    }
    function G() {
      return (G = M(
        r.default.mark(function e() {
          return r.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    s.GlobalWorkerOptions.workerSrc ||
                      (s.GlobalWorkerOptions.workerSrc =
                        o.AppOptions.get("workerSrc")),
                    e.abrupt(
                      "return",
                      (0, s.loadScript)(s.PDFWorker.getWorkerSrc())
                    )
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function K(e) {
      var t = U.appConfig;
      return (0, s.loadScript)(t.debuggerScriptPath).then(function () {
        PDFBug.enable(e), PDFBug.init({ OPS: s.OPS }, t.mainContainer);
      });
    }
    function Q() {
      var e,
        t = U.appConfig,
        n = document.location.search.substring(1),
        i = (0, a.parseQueryString)(n);
      (e = "file" in i ? i.file : o.AppOptions.get("defaultUrl")), F(e);
      var r = document.createElement("input");
      (r.id = t.openFileInputName),
        (r.className = "fileInput"),
        r.setAttribute("type", "file"),
        (r.oncontextmenu = a.noContextMenuHandler),
        document.body.appendChild(r),
        window.File && window.FileReader && window.FileList && window.Blob
          ? (r.value = null)
          : (t.toolbar.openFile.setAttribute("hidden", "true"),
            t.secondaryToolbar.openFileButton.setAttribute("hidden", "true")),
        r.addEventListener("change", function (e) {
          var t = e.target.files;
          t &&
            0 !== t.length &&
            U.eventBus.dispatch("fileinputchange", {
              source: this,
              fileInput: e.target,
            });
        }),
        t.mainContainer.addEventListener("dragover", function (e) {
          e.preventDefault(), (e.dataTransfer.dropEffect = "move");
        }),
        t.mainContainer.addEventListener("drop", function (e) {
          e.preventDefault();
          var t = e.dataTransfer.files;
          t &&
            0 !== t.length &&
            U.eventBus.dispatch("fileinputchange", {
              source: this,
              fileInput: e.dataTransfer,
            });
        }),
        U.supportsDocumentFonts ||
          (o.AppOptions.set("disableFontFace", !0),
          U.l10n
            .get(
              "web_fonts_disabled",
              null,
              "Web fonts are disabled: unable to use embedded PDF fonts."
            )
            .then(function (e) {
              console.warn(e);
            })),
        U.supportsPrinting ||
          (t.toolbar.print.classList.add("hidden"),
          t.secondaryToolbar.printButton.classList.add("hidden")),
        U.supportsFullscreen ||
          (t.toolbar.presentationModeButton.classList.add("hidden"),
          t.secondaryToolbar.presentationModeButton.classList.add("hidden")),
        U.supportsIntegratedFind && t.toolbar.viewFind.classList.add("hidden"),
        t.mainContainer.addEventListener(
          "transitionend",
          function (e) {
            e.target === this &&
              U.eventBus.dispatch("resize", { source: this });
          },
          !0
        );
      try {
        z(e);
      } catch (e) {
        U.l10n
          .get(
            "loading_error",
            null,
            "An error occurred while loading the PDF."
          )
          .then(function (t) {
            U.error(t, e);
          });
      }
    }
    function Z() {
      var e = U.appConfig;
      e && e.viewerContainer.classList.remove(A);
    }
    function X(e) {
      var t = e.pageNumber,
        n = t - 1,
        i = U.pdfViewer.getPageView(n);
      if ((t === U.page && U.toolbar.updateLoadingIndicatorState(!1), i)) {
        if (U.pdfSidebar.isThumbnailViewVisible)
          U.pdfThumbnailViewer.getThumbnail(n).setImage(i);
        "undefined" != typeof Stats &&
          Stats.enabled &&
          i.stats &&
          Stats.add(t, i.stats),
          i.error &&
            U.l10n
              .get(
                "rendering_error",
                null,
                "An error occurred while rendering the page."
              )
              .then(function (e) {
                U.error(e, i.error);
              }),
          U.externalServices.reportTelemetry({
            type: "pageInfo",
            timestamp: e.timestamp,
          }),
          U.pdfDocument.getStats().then(function (e) {
            U.externalServices.reportTelemetry({
              type: "documentStats",
              stats: e,
            });
          });
      }
    }
    function Y(e) {
      var t,
        n = e.mode;
      switch (n) {
        case "thumbs":
          t = c.SidebarView.THUMBS;
          break;
        case "bookmarks":
        case "outline":
          t = c.SidebarView.OUTLINE;
          break;
        case "attachments":
          t = c.SidebarView.ATTACHMENTS;
          break;
        case "none":
          t = c.SidebarView.NONE;
          break;
        default:
          return void console.error('Invalid "pagemode" hash parameter: ' + n);
      }
      U.pdfSidebar.switchView(t, !0);
    }
    function $(e) {
      switch (e.action) {
        case "GoToPage":
          U.appConfig.toolbar.pageNumber.select();
          break;
        case "Find":
          U.supportsIntegratedFind || U.findBar.toggle();
      }
    }
    function J(e) {
      var t = e.active,
        n = e.switchInProgress,
        i = a.PresentationModeState.NORMAL;
      n
        ? (i = a.PresentationModeState.CHANGING)
        : t && (i = a.PresentationModeState.FULLSCREEN),
        (U.pdfViewer.presentationModeState = i);
    }
    function ee(e) {
      U.pdfRenderingQueue.isThumbnailViewEnabled =
        U.pdfSidebar.isThumbnailViewVisible;
      var t = U.store;
      t &&
        U.isInitialViewSet &&
        t.set("sidebarView", e.view).catch(function () {});
    }
    function te(e) {
      var t = e.location,
        n = U.store;
      n &&
        U.isInitialViewSet &&
        n
          .setMultiple({
            page: t.pageNumber,
            zoom: t.scale,
            scrollLeft: t.left,
            scrollTop: t.top,
            rotation: t.rotation,
          })
          .catch(function () {});
      var i = U.pdfLinkService.getAnchorUrl(t.pdfOpenParams);
      (U.appConfig.toolbar.viewBookmark.href = i),
        (U.appConfig.secondaryToolbar.viewBookmarkButton.href = i);
      var r =
        U.pdfViewer.getPageView(U.page - 1).renderingState !==
        l.RenderingStates.FINISHED;
      U.toolbar.updateLoadingIndicatorState(r);
    }
    function ne(e) {
      var t = U.store;
      t &&
        U.isInitialViewSet &&
        t.set("scrollMode", e.mode).catch(function () {});
    }
    function ie(e) {
      var t = U.store;
      t &&
        U.isInitialViewSet &&
        t.set("spreadMode", e.mode).catch(function () {});
    }
    function re() {
      var e = U.pdfDocument,
        t = U.pdfViewer;
      if (e) {
        var n = t.currentScaleValue;
        ("auto" !== n && "page-fit" !== n && "page-width" !== n) ||
          (t.currentScaleValue = n),
          t.update();
      }
    }
    function ae(e) {
      var t = e.hash;
      t &&
        (U.isInitialViewSet
          ? U.pdfHistory.popStateInProgress || U.pdfLinkService.setHash(t)
          : (U.initialBookmark = t));
    }
    function oe() {
      U.requestPresentationMode();
    }
    function se() {
      window.print();
    }
    function ue() {
      U.download();
    }
    function le() {
      U.pdfDocument && (U.page = 1);
    }
    function ce() {
      U.pdfDocument && (U.page = U.pagesCount);
    }
    function de() {
      U.page++;
    }
    function he() {
      U.page--;
    }
    function fe() {
      U.zoomIn();
    }
    function pe() {
      U.zoomOut();
    }
    function ve() {
      U.zoomReset();
    }
    function ge(e) {
      var t = U.pdfViewer;
      "" !== e.value && (t.currentPageLabel = e.value),
        e.value !== t.currentPageNumber.toString() &&
          e.value !== t.currentPageLabel &&
          U.toolbar.setPageNumber(t.currentPageNumber, t.currentPageLabel);
    }
    function me(e) {
      U.pdfViewer.currentScaleValue = e.value;
    }
    function ye() {
      U.rotatePages(90);
    }
    function be() {
      U.rotatePages(-90);
    }
    function we(e) {
      U.pdfViewer.scrollMode = e.mode;
    }
    function _e(e) {
      U.pdfViewer.spreadMode = e.mode;
    }
    function Pe() {
      U.pdfDocumentProperties.open();
    }
    function Se(e) {
      U.findController.executeCommand("find" + e.type, {
        query: e.query,
        phraseSearch: e.phraseSearch,
        caseSensitive: e.caseSensitive,
        entireWord: e.entireWord,
        highlightAll: e.highlightAll,
        findPrevious: e.findPrevious,
      });
    }
    function ke(e) {
      U.findController.executeCommand("find", {
        query: e.query,
        phraseSearch: e.phraseSearch,
        caseSensitive: !1,
        entireWord: !1,
        highlightAll: !0,
        findPrevious: !1,
      });
    }
    function Ee(e) {
      var t = e.matchesCount;
      U.supportsIntegratedFind
        ? U.externalServices.updateFindMatchesCount(t)
        : U.findBar.updateResultsCount(t);
    }
    function Le(e) {
      var t = e.state,
        n = e.previous,
        i = e.matchesCount;
      U.supportsIntegratedFind
        ? U.externalServices.updateFindControlState({
            result: t,
            findPrevious: n,
            matchesCount: i,
          })
        : U.findBar.updateUIState(t, n, i);
    }
    function Ce(e) {
      U.toolbar.setPageScale(e.presetValue, e.scale), U.pdfViewer.update();
    }
    function xe(e) {
      (U.pdfThumbnailViewer.pagesRotation = e.pagesRotation),
        U.forceRendering(),
        (U.pdfViewer.currentPageNumber = e.pageNumber);
    }
    function Ie(e) {
      var t = e.pageNumber;
      if (
        (U.toolbar.setPageNumber(t, e.pageLabel || null),
        U.secondaryToolbar.setPageNumber(t),
        U.pdfSidebar.isThumbnailViewVisible &&
          U.pdfThumbnailViewer.scrollThumbnailIntoView(t),
        "undefined" != typeof Stats && Stats.enabled)
      ) {
        var n = U.pdfViewer.getPageView(t - 1);
        n && n.stats && Stats.add(t, n.stats);
      }
    }
    function Te(e) {
      "visible" === document.visibilityState && Me();
    }
    (F = function (e) {
      if (void 0 !== e)
        try {
          var t = new URL(window.location.href).origin || "null";
          if (W.includes(t)) return;
          var n = new URL(e, window.location.href);
          n.origin, n.protocol;
        } catch (e) {
          var i = e && e.message;
          throw (
            (U.l10n
              .get(
                "loading_error",
                null,
                "An error occurred while loading the PDF."
              )
              .then(function (e) {
                U.error(e, { message: i });
              }),
            e)
          );
        }
    }),
      (z = function (e) {
        if (e && 0 === e.lastIndexOf("file:", 0)) {
          U.setTitleUsingUrl(e);
          var t = new XMLHttpRequest();
          return (
            (t.onload = function () {
              U.open(new Uint8Array(t.response));
            }),
            t.open("GET", e),
            (t.responseType = "arraybuffer"),
            void t.send()
          );
        }
        e && U.open(e);
      }),
      (j = function (e) {
        if (!U.pdfViewer || !U.pdfViewer.isInPresentationMode) {
          var t = e.fileInput.files[0];
          if (o.AppOptions.get("disableCreateObjectURL")) {
            U.setTitleUsingUrl(t.name);
            var n = new FileReader();
            (n.onload = function (e) {
              var t = e.target.result;
              U.open(new Uint8Array(t));
            }),
              n.readAsArrayBuffer(t);
          } else {
            var i = URL.createObjectURL(t);
            t.name && (i = { url: i, originalUrl: t.name }), U.open(i);
          }
          var r = U.appConfig;
          r.toolbar.viewBookmark.setAttribute("hidden", "true"),
            r.secondaryToolbar.viewBookmarkButton.setAttribute(
              "hidden",
              "true"
            ),
            r.toolbar.download.setAttribute("hidden", "true"),
            r.secondaryToolbar.downloadButton.setAttribute("hidden", "true");
        }
      }),
      (H = function (e) {
        var t = U.appConfig.openFileInputName;
        document.getElementById(t).click();
      });
    var Ne = null;
    function Me() {
      Ne && clearTimeout(Ne),
        (Ne = setTimeout(function () {
          Ne = null;
        }, O));
    }
    function Be(e) {
      var t = U.pdfViewer,
        n = U.supportedMouseWheelZoomModifierKeys;
      if (!t.isInPresentationMode)
        if ((e.ctrlKey && n.ctrlKey) || (e.metaKey && n.metaKey)) {
          if ((e.preventDefault(), Ne || "hidden" === document.visibilityState))
            return;
          var i = t.currentScale,
            r = 3 * (0, a.normalizeWheelEventDelta)(e);
          r < 0 ? U.zoomOut(-r) : U.zoomIn(r);
          var o = t.currentScale;
          if (i !== o) {
            var s = o / i - 1,
              u = t.container.getBoundingClientRect(),
              l = e.clientX - u.left,
              c = e.clientY - u.top;
            (t.container.scrollLeft += l * s), (t.container.scrollTop += c * s);
          }
        } else Me();
    }
    function Oe(e) {
      if (U.secondaryToolbar.isOpen) {
        var t = U.appConfig;
        (U.pdfViewer.containsElement(e.target) ||
          (t.toolbar.container.contains(e.target) &&
            e.target !== t.secondaryToolbar.toggleButton)) &&
          U.secondaryToolbar.close();
      }
    }
    function Ae(e) {
      if (!U.overlayManager.active) {
        var t = !1,
          n = !1,
          i =
            (e.ctrlKey ? 1 : 0) |
            (e.altKey ? 2 : 0) |
            (e.shiftKey ? 4 : 0) |
            (e.metaKey ? 8 : 0),
          r = U.pdfViewer,
          a = r && r.isInPresentationMode;
        if (1 === i || 8 === i || 5 === i || 12 === i)
          switch (e.keyCode) {
            case 70:
              U.supportsIntegratedFind || (U.findBar.open(), (t = !0));
              break;
            case 71:
              if (!U.supportsIntegratedFind) {
                var o = U.findController.state;
                o &&
                  U.findController.executeCommand("findagain", {
                    query: o.query,
                    phraseSearch: o.phraseSearch,
                    caseSensitive: o.caseSensitive,
                    entireWord: o.entireWord,
                    highlightAll: o.highlightAll,
                    findPrevious: 5 === i || 12 === i,
                  }),
                  (t = !0);
              }
              break;
            case 61:
            case 107:
            case 187:
            case 171:
              a || U.zoomIn(), (t = !0);
              break;
            case 173:
            case 109:
            case 189:
              a || U.zoomOut(), (t = !0);
              break;
            case 48:
            case 96:
              a ||
                (setTimeout(function () {
                  U.zoomReset();
                }),
                (t = !1));
              break;
            case 38:
              (a || U.page > 1) && ((U.page = 1), (t = !0), (n = !0));
              break;
            case 40:
              (a || U.page < U.pagesCount) &&
                ((U.page = U.pagesCount), (t = !0), (n = !0));
          }
        var s = U.eventBus;
        if (1 === i || 8 === i)
          switch (e.keyCode) {
            case 83:
              s.dispatch("download", { source: window }), (t = !0);
              break;
            case 79:
              s.dispatch("openfile", { source: window }), (t = !0);
          }
        if (3 === i || 10 === i)
          switch (e.keyCode) {
            case 80:
              U.requestPresentationMode(), (t = !0);
              break;
            case 71:
              U.appConfig.toolbar.pageNumber.select(), (t = !0);
          }
        if (t) return n && !a && r.focus(), void e.preventDefault();
        var l = document.activeElement || document.querySelector(":focus"),
          c = l && l.tagName.toUpperCase();
        if (
          !(
            "INPUT" === c ||
            "TEXTAREA" === c ||
            "SELECT" === c ||
            (l && l.isContentEditable)
          ) ||
          27 === e.keyCode
        ) {
          if (0 === i) {
            var d = 0,
              h = !1;
            switch (e.keyCode) {
              case 38:
              case 33:
                r.isVerticalScrollbarEnabled && (h = !0), (d = -1);
                break;
              case 8:
                a || (h = !0), (d = -1);
                break;
              case 37:
                r.isHorizontalScrollbarEnabled && (h = !0);
              case 75:
              case 80:
                d = -1;
                break;
              case 27:
                U.secondaryToolbar.isOpen &&
                  (U.secondaryToolbar.close(), (t = !0)),
                  !U.supportsIntegratedFind &&
                    U.findBar.opened &&
                    (U.findBar.close(), (t = !0));
                break;
              case 40:
              case 34:
                r.isVerticalScrollbarEnabled && (h = !0), (d = 1);
                break;
              case 13:
              case 32:
                a || (h = !0), (d = 1);
                break;
              case 39:
                r.isHorizontalScrollbarEnabled && (h = !0);
              case 74:
              case 78:
                d = 1;
                break;
              case 36:
                (a || U.page > 1) && ((U.page = 1), (t = !0), (n = !0));
                break;
              case 35:
                (a || U.page < U.pagesCount) &&
                  ((U.page = U.pagesCount), (t = !0), (n = !0));
                break;
              case 83:
                U.pdfCursorTools.switchTool(u.CursorTool.SELECT);
                break;
              case 72:
                U.pdfCursorTools.switchTool(u.CursorTool.HAND);
                break;
              case 82:
                U.rotatePages(90);
                break;
              case 115:
                U.pdfSidebar.toggle();
            }
            0 === d ||
              (h && "page-fit" !== r.currentScaleValue) ||
              (d > 0
                ? U.page < U.pagesCount && U.page++
                : U.page > 1 && U.page--,
              (t = !0));
          }
          if (4 === i)
            switch (e.keyCode) {
              case 13:
              case 32:
                if (!a && "page-fit" !== r.currentScaleValue) break;
                U.page > 1 && U.page--, (t = !0);
                break;
              case 82:
                U.rotatePages(-90);
            }
          t ||
            a ||
            (((e.keyCode >= 33 && e.keyCode <= 40) ||
              (32 === e.keyCode && "BUTTON" !== c)) &&
              (n = !0)),
            n && !r.containsElement(l) && r.focus(),
            t && e.preventDefault();
        }
      }
    }
    function Re(e) {
      switch (e) {
        case "SinglePage":
        case "OneColumn":
          return a.SpreadMode.NONE;
        case "TwoColumnLeft":
        case "TwoPageLeft":
          return a.SpreadMode.ODD;
        case "TwoColumnRight":
        case "TwoPageRight":
          return a.SpreadMode.EVEN;
      }
      return a.SpreadMode.NONE;
    }
    function De(e) {
      switch (e) {
        case "UseNone":
          return c.SidebarView.NONE;
        case "UseThumbs":
          return c.SidebarView.THUMBS;
        case "UseOutlines":
          return c.SidebarView.OUTLINE;
        case "UseAttachments":
          return c.SidebarView.ATTACHMENTS;
      }
      return c.SidebarView.NONE;
    }
    var Ve = {
      instance: {
        supportsPrinting: !1,
        createPrintService: function () {
          throw new Error("Not implemented: createPrintService");
        },
      },
    };
    t.PDFPrintServiceFactory = Ve;
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(3);
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      function t(e) {
        return (t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var n = (function (e) {
        var n,
          i = Object.prototype,
          r = i.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(e, t, n, i) {
          var r = t && t.prototype instanceof g ? t : g,
            a = Object.create(r.prototype),
            o = new x(i || []);
          return (
            (a._invoke = (function (e, t, n) {
              var i = d;
              return function (r, a) {
                if (i === f) throw new Error("Generator is already running");
                if (i === p) {
                  if ("throw" === r) throw a;
                  return T();
                }
                for (n.method = r, n.arg = a; ; ) {
                  var o = n.delegate;
                  if (o) {
                    var s = E(o, n);
                    if (s) {
                      if (s === v) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if (i === d) throw ((i = p), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  i = f;
                  var u = c(e, t, n);
                  if ("normal" === u.type) {
                    if (((i = n.done ? p : h), u.arg === v)) continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((i = p), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(e, n, o)),
            a
          );
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var d = "suspendedStart",
          h = "suspendedYield",
          f = "executing",
          p = "completed",
          v = {};
        function g() {}
        function m() {}
        function y() {}
        var b = {};
        b[o] = function () {
          return this;
        };
        var w = Object.getPrototypeOf,
          _ = w && w(w(I([])));
        _ && _ !== i && r.call(_, o) && (b = _);
        var P = (y.prototype = g.prototype = Object.create(b));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            e[t] = function (e) {
              return this._invoke(t, e);
            };
          });
        }
        function k(e, n) {
          var i;
          this._invoke = function (a, o) {
            function s() {
              return new n(function (i, s) {
                !(function i(a, o, s, u) {
                  var l = c(e[a], e, o);
                  if ("throw" !== l.type) {
                    var d = l.arg,
                      h = d.value;
                    return h && "object" === t(h) && r.call(h, "__await")
                      ? n.resolve(h.__await).then(
                          function (e) {
                            i("next", e, s, u);
                          },
                          function (e) {
                            i("throw", e, s, u);
                          }
                        )
                      : n.resolve(h).then(
                          function (e) {
                            (d.value = e), s(d);
                          },
                          function (e) {
                            return i("throw", e, s, u);
                          }
                        );
                  }
                  u(l.arg);
                })(a, o, i, s);
              });
            }
            return (i = i ? i.then(s, s) : s());
          };
        }
        function E(e, t) {
          var i = e.iterator[t.method];
          if (i === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = n),
                E(e, t),
                "throw" === t.method)
              )
                return v;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return v;
          }
          var r = c(i, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), v
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method && ((t.method = "next"), (t.arg = n)),
                (t.delegate = null),
                v)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              v);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function I(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                a = function t() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (t.value = e[i]), (t.done = !1), t;
                  return (t.value = n), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: n, done: !0 };
        }
        return (
          (m.prototype = P.constructor = y),
          (y.constructor = m),
          (y[u] = m.displayName = "GeneratorFunction"),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, y)
                : ((e.__proto__ = y), u in e || (e[u] = "GeneratorFunction")),
              (e.prototype = Object.create(P)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          S(k.prototype),
          (k.prototype[s] = function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, n, i, r, a) {
            void 0 === a && (a = Promise);
            var o = new k(l(t, n, i, r), a);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          S(P),
          (P[u] = "Generator"),
          (P[o] = function () {
            return this;
          }),
          (P.toString = function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var i = t.pop();
                  if (i in e) return (n.value = i), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = I),
          (x.prototype = {
            constructor: x,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = n),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = n);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function i(i, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = i),
                  r && ((t.method = "next"), (t.arg = n)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  s = o.completion;
                if ("root" === o.tryLoc) return i("end");
                if (o.tryLoc <= this.prev) {
                  var u = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (u && l) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  } else if (u) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var o = a ? a.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), v)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                v
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), C(n), v;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var r = i.arg;
                    C(n);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, i) {
              return (
                (this.delegate = { iterator: I(e), resultName: t, nextLoc: i }),
                "next" === this.method && (this.arg = n),
                v
              );
            },
          }),
          e
        );
      })("object" === t(e) ? e.exports : {});
      try {
        regeneratorRuntime = n;
      } catch (e) {
        Function("r", "regeneratorRuntime = r")(n);
      }
    }.call(this, n(4)(e)));
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isValidRotation = function (e) {
        return Number.isInteger(e) && e % 90 == 0;
      }),
      (t.isValidScrollMode = function (e) {
        return (
          Number.isInteger(e) && Object.values(h).includes(e) && e !== h.UNKNOWN
        );
      }),
      (t.isValidSpreadMode = function (e) {
        return (
          Number.isInteger(e) && Object.values(f).includes(e) && e !== f.UNKNOWN
        );
      }),
      (t.isPortraitOrientation = function (e) {
        return e.width <= e.height;
      }),
      (t.clamp = _),
      (t.getPDFFileNameFromURL = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "document.pdf";
        if ("string" != typeof e) return t;
        if (
          (function (e) {
            var t = 0,
              n = e.length;
            for (; t < n && "" === e[t].trim(); ) t++;
            return "data:" === e.substring(t, t + 5).toLowerCase();
          })(e)
        )
          return (
            console.warn(
              'getPDFFileNameFromURL: ignoring "data:" URL for performance reasons.'
            ),
            t
          );
        var n = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
          i = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(e),
          r = n.exec(i[1]) || n.exec(i[2]) || n.exec(i[3]);
        if (r && (r = r[0]).includes("%"))
          try {
            r = n.exec(decodeURIComponent(r))[0];
          } catch (e) {}
        return r || t;
      }),
      (t.noContextMenuHandler = function (e) {
        e.preventDefault();
      }),
      (t.parseQueryString = function (e) {
        for (
          var t = e.split("&"), n = Object.create(null), i = 0, r = t.length;
          i < r;
          ++i
        ) {
          var a = t[i].split("="),
            o = a[0].toLowerCase(),
            s = a.length > 1 ? a[1] : null;
          n[decodeURIComponent(o)] = decodeURIComponent(s);
        }
        return n;
      }),
      (t.backtrackBeforeAllVisibleElements = m),
      (t.getVisibleElements = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = e.scrollTop,
          a = r + e.clientHeight,
          o = e.scrollLeft,
          s = o + e.clientWidth;
        var u = [],
          l = t.length,
          c =
            0 === l
              ? 0
              : g(
                  t,
                  i
                    ? function (e) {
                        var t = e.div;
                        return t.offsetLeft + t.clientLeft + t.clientWidth > o;
                      }
                    : function (e) {
                        var t = e.div;
                        return t.offsetTop + t.clientTop + t.clientHeight > r;
                      }
                );
        c > 0 && c < l && !i && (c = m(c, t, r));
        for (var d = i ? s : -1, h = c; h < l; h++) {
          var f = t[h],
            p = f.div,
            v = p.offsetLeft + p.clientLeft,
            y = p.offsetTop + p.clientTop,
            b = p.clientWidth,
            w = p.clientHeight,
            _ = v + b,
            P = y + w;
          if (-1 === d) P >= a && (d = P);
          else if ((i ? v : y) > d) break;
          if (!(P <= r || y >= a || _ <= o || v >= s)) {
            var S = Math.max(0, r - y) + Math.max(0, P - a),
              k = Math.max(0, o - v) + Math.max(0, _ - s),
              E = (((w - S) * (b - k) * 100) / w / b) | 0;
            u.push({ id: f.id, x: v, y: y, view: f, percent: E });
          }
        }
        var L = u[0],
          C = u[u.length - 1];
        n &&
          u.sort(function (e, t) {
            var n = e.percent - t.percent;
            return Math.abs(n) > 0.001 ? -n : e.id - t.id;
          });
        return { first: L, last: C, views: u };
      }),
      (t.roundToDivide = function (e, t) {
        var n = e % t;
        return 0 === n ? e : Math.round(e - n + t);
      }),
      (t.getPageSizeInches = function (e) {
        var t = e.view,
          n = e.userUnit,
          i = e.rotate,
          r =
            ((f = t),
            (p = 4),
            (function (e) {
              if (Array.isArray(e)) return e;
            })(f) ||
              (function (e, t) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(e)
                ) {
                  var n = [],
                    i = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var o, s = e[Symbol.iterator]();
                      !(i = (o = s.next()).done) &&
                      (n.push(o.value), !t || n.length !== t);
                      i = !0
                    );
                  } catch (e) {
                    (r = !0), (a = e);
                  } finally {
                    try {
                      i || null == s.return || s.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                  return n;
                }
              })(f, p) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return l(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(e)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? l(e, t)
                      : void 0
                  );
                }
              })(f, p) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          a = r[0],
          o = r[1],
          s = r[2],
          u = r[3],
          c = i % 180 != 0,
          d = ((s - a) / 72) * n,
          h = ((u - o) / 72) * n;
        var f, p;
        return { width: c ? h : d, height: c ? d : h };
      }),
      (t.approximateFraction = function (e) {
        if (Math.floor(e) === e) return [e, 1];
        var t = 1 / e;
        if (t > 8) return [1, 8];
        if (Math.floor(t) === t) return [1, t];
        var n,
          i = e > 1 ? t : e,
          r = 0,
          a = 1,
          o = 1,
          s = 1;
        for (;;) {
          var u = r + o,
            l = a + s;
          if (l > 8) break;
          i <= u / l ? ((o = u), (s = l)) : ((r = u), (a = l));
        }
        n =
          i - r / a < o / s - i
            ? i === e
              ? [r, a]
              : [a, r]
            : i === e
            ? [o, s]
            : [s, o];
        return n;
      }),
      (t.getOutputScale = function (e) {
        var t = window.devicePixelRatio || 1,
          n =
            e.webkitBackingStorePixelRatio ||
            e.mozBackingStorePixelRatio ||
            e.msBackingStorePixelRatio ||
            e.oBackingStorePixelRatio ||
            e.backingStorePixelRatio ||
            1,
          i = t / n;
        return { sx: i, sy: i, scaled: 1 !== i };
      }),
      (t.scrollIntoView = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = e.offsetParent;
        if (!i)
          return void console.error("offsetParent is not set -- cannot scroll");
        var r = e.offsetTop + e.clientTop,
          a = e.offsetLeft + e.clientLeft;
        for (
          ;
          (i.clientHeight === i.scrollHeight &&
            i.clientWidth === i.scrollWidth) ||
          (n && "hidden" === getComputedStyle(i).overflow);

        )
          if (
            (i.dataset._scaleY &&
              ((r /= i.dataset._scaleY), (a /= i.dataset._scaleX)),
            (r += i.offsetTop),
            (a += i.offsetLeft),
            !(i = i.offsetParent))
          )
            return;
        t &&
          (void 0 !== t.top && (r += t.top),
          void 0 !== t.left && ((a += t.left), (i.scrollLeft = a)));
        i.scrollTop = r;
      }),
      (t.watchScroll = function (e, t) {
        var n = function (n) {
            r ||
              (r = window.requestAnimationFrame(function () {
                r = null;
                var n = e.scrollLeft,
                  a = i.lastX;
                n !== a && (i.right = n > a), (i.lastX = n);
                var o = e.scrollTop,
                  s = i.lastY;
                o !== s && (i.down = o > s), (i.lastY = o), t(i);
              }));
          },
          i = {
            right: !0,
            down: !0,
            lastX: e.scrollLeft,
            lastY: e.scrollTop,
            _eventHandler: n,
          },
          r = null;
        return e.addEventListener("scroll", n, !0), i;
      }),
      (t.binarySearchFirstItem = g),
      (t.normalizeWheelEventDelta = function (e) {
        var t = Math.sqrt(e.deltaX * e.deltaX + e.deltaY * e.deltaY),
          n = Math.atan2(e.deltaY, e.deltaX);
        -0.25 * Math.PI < n && n < 0.75 * Math.PI && (t = -t);
        0 === e.deltaMode ? (t /= 900) : 1 === e.deltaMode && (t /= 30);
        return t;
      }),
      (t.waitOnEventOrTimeout = function (e) {
        var t = e.target,
          n = e.name,
          i = e.delay,
          r = void 0 === i ? 0 : i;
        return new Promise(function (e, i) {
          if (
            "object" !== u(t) ||
            !n ||
            "string" != typeof n ||
            !(Number.isInteger(r) && r >= 0)
          )
            throw new Error("waitOnEventOrTimeout - invalid parameters.");
          function a(i) {
            t instanceof w ? t._off(n, o) : t.removeEventListener(n, o),
              l && clearTimeout(l),
              e(i);
          }
          var o = a.bind(null, y.EVENT);
          t instanceof w ? t._on(n, o) : t.addEventListener(n, o);
          var s = a.bind(null, y.TIMEOUT),
            l = setTimeout(s, r);
        });
      }),
      (t.moveToEndOfArray = function (e, t) {
        for (var n = [], i = e.length, r = 0, a = 0; a < i; ++a)
          t(e[a]) ? n.push(e[a]) : ((e[r] = e[a]), ++r);
        for (var o = 0; r < i; ++o, ++r) e[r] = n[o];
      }),
      (t.WaitOnType =
        t.animationStarted =
        t.ProgressBar =
        t.EventBus =
        t.NullL10n =
        t.SpreadMode =
        t.ScrollMode =
        t.TextLayerMode =
        t.RendererType =
        t.PresentationModeState =
        t.VERTICAL_PADDING =
        t.SCROLLBAR_PADDING =
        t.MAX_AUTO_SCALE =
        t.UNKNOWN_SCALE =
        t.MAX_SCALE =
        t.MIN_SCALE =
        t.DEFAULT_SCALE =
        t.DEFAULT_SCALE_VALUE =
        t.CSS_UNITS =
        t.AutoPrintRegExp =
          void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i };
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function s(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    }
    function u(e) {
      return (u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function l(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function c(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function d(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var a = e.apply(t, n);
          function o(e) {
            c(a, i, r, o, s, "next", e);
          }
          function s(e) {
            c(a, i, r, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    t.CSS_UNITS = 96 / 72;
    t.DEFAULT_SCALE_VALUE = "auto";
    t.DEFAULT_SCALE = 1;
    t.MIN_SCALE = 0.1;
    t.MAX_SCALE = 10;
    t.UNKNOWN_SCALE = 0;
    t.MAX_AUTO_SCALE = 1.25;
    t.SCROLLBAR_PADDING = 40;
    t.VERTICAL_PADDING = 5;
    t.PresentationModeState = {
      UNKNOWN: 0,
      NORMAL: 1,
      CHANGING: 2,
      FULLSCREEN: 3,
    };
    t.RendererType = { CANVAS: "canvas", SVG: "svg" };
    t.TextLayerMode = { DISABLE: 0, ENABLE: 1, ENABLE_ENHANCE: 2 };
    var h = { UNKNOWN: -1, VERTICAL: 0, HORIZONTAL: 1, WRAPPED: 2 };
    t.ScrollMode = h;
    var f = { UNKNOWN: -1, NONE: 0, ODD: 1, EVEN: 2 };
    t.SpreadMode = f;
    function p(e, t) {
      return t
        ? e.replace(/\{\{\s*(\w+)\s*\}\}/g, function (e, n) {
            return n in t ? t[n] : "{{" + n + "}}";
          })
        : e;
    }
    t.AutoPrintRegExp = /\bprint\s*\(/;
    var v = {
      getLanguage: function () {
        return d(
          r.default.mark(function e() {
            return r.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", "en-us");
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      getDirection: function () {
        return d(
          r.default.mark(function e() {
            return r.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", "ltr");
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      get: function (e, t, n) {
        return d(
          r.default.mark(function e() {
            return r.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", p(n, t));
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      translate: function (e) {
        return d(
          r.default.mark(function e() {
            return r.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
    };
    function g(e, t) {
      var n = 0,
        i = e.length - 1;
      if (i < 0 || !t(e[i])) return e.length;
      if (t(e[n])) return n;
      for (; n < i; ) {
        var r = (n + i) >> 1;
        t(e[r]) ? (i = r) : (n = r + 1);
      }
      return n;
    }
    function m(e, t, n) {
      if (e < 2) return e;
      var i = t[e].div,
        r = i.offsetTop + i.clientTop;
      r >= n && (r = (i = t[e - 1].div).offsetTop + i.clientTop);
      for (
        var a = e - 2;
        a >= 0 &&
        !((i = t[a].div).offsetTop + i.clientTop + i.clientHeight <= r);
        --a
      )
        e = a;
      return e;
    }
    t.NullL10n = v;
    var y = { EVENT: "event", TIMEOUT: "timeout" };
    t.WaitOnType = y;
    var b = new Promise(function (e) {
      window.requestAnimationFrame(e);
    });
    t.animationStarted = b;
    var w = (function () {
      function e(t) {
        a(this, e), (this._listeners = Object.create(null));
      }
      return (
        s(e, [
          {
            key: "on",
            value: function (e, t) {
              this._on(e, t, { external: !0 });
            },
          },
          {
            key: "off",
            value: function (e, t) {
              this._off(e, t, { external: !0 });
            },
          },
          {
            key: "dispatch",
            value: function (e) {
              var t = this._listeners[e];
              if (t && 0 !== t.length) {
                var n,
                  i = Array.prototype.slice.call(arguments, 1);
                t.slice(0).forEach(function (e) {
                  var t = e.listener;
                  if (e.external) return n || (n = []), void n.push(t);
                  t.apply(null, i);
                }),
                  n &&
                    (n.forEach(function (e) {
                      e.apply(null, i);
                    }),
                    (n = null));
              }
            },
          },
          {
            key: "_on",
            value: function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                i = this._listeners[e];
              i || (this._listeners[e] = i = []),
                i.push({ listener: t, external: !0 === (n && n.external) });
            },
          },
          {
            key: "_off",
            value: function (e, t) {
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              var n = this._listeners[e];
              if (n)
                for (var i = 0, r = n.length; i < r; i++)
                  if (n[i].listener === t) return void n.splice(i, 1);
            },
          },
        ]),
        e
      );
    })();
    function _(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    t.EventBus = w;
    var P = (function () {
      function e(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = n.height,
          r = n.width,
          o = n.units;
        a(this, e),
          (this.visible = !0),
          (this.div = document.querySelector(t + " .progress")),
          (this.bar = this.div.parentNode),
          (this.height = i || 100),
          (this.width = r || 100),
          (this.units = o || "%"),
          (this.div.style.height = this.height + this.units),
          (this.percent = 0);
      }
      return (
        s(e, [
          {
            key: "_updateBar",
            value: function () {
              if (this._indeterminate)
                return (
                  this.div.classList.add("indeterminate"),
                  void (this.div.style.width = this.width + this.units)
                );
              this.div.classList.remove("indeterminate");
              var e = (this.width * this._percent) / 100;
              this.div.style.width = e + this.units;
            },
          },
          {
            key: "setWidth",
            value: function (e) {
              if (e) {
                var t = e.parentNode.offsetWidth - e.offsetWidth;
                t > 0 &&
                  (this.bar.style.width = "calc(100% - ".concat(t, "px)"));
              }
            },
          },
          {
            key: "hide",
            value: function () {
              this.visible &&
                ((this.visible = !1),
                this.bar.classList.add("hidden"),
                document.body.classList.remove("loadingInProgress"));
            },
          },
          {
            key: "show",
            value: function () {
              this.visible ||
                ((this.visible = !0),
                document.body.classList.add("loadingInProgress"),
                this.bar.classList.remove("hidden"));
            },
          },
          {
            key: "percent",
            get: function () {
              return this._percent;
            },
            set: function (e) {
              (this._indeterminate = isNaN(e)),
                (this._percent = _(e, 0, 100)),
                this._updateBar();
            },
          },
        ]),
        e
      );
    })();
    t.ProgressBar = P;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.OptionKind = t.AppOptions = void 0);
    var i = n(7);
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var o = { VIEWER: 2, API: 4, WORKER: 8, PREFERENCE: 128 };
    t.OptionKind = o;
    var s = {
      cursorToolOnLoad: { value: 0, kind: o.VIEWER + o.PREFERENCE },
      defaultUrl: {
        value: "compressed.tracemonkey-pldi-09.pdf",
        kind: o.VIEWER,
      },
      defaultZoomValue: { value: "", kind: o.VIEWER + o.PREFERENCE },
      disableCreateObjectURL: {
        value: !1,
        compatibility: i.viewerCompatibilityParams.disableCreateObjectURL,
        kind: o.VIEWER,
      },
      disableHistory: { value: !1, kind: o.VIEWER },
      disablePageLabels: { value: !1, kind: o.VIEWER + o.PREFERENCE },
      enablePermissions: { value: !1, kind: o.VIEWER + o.PREFERENCE },
      enablePrintAutoRotate: { value: !1, kind: o.VIEWER + o.PREFERENCE },
      enableWebGL: { value: !1, kind: o.VIEWER + o.PREFERENCE },
      externalLinkRel: {
        value: "noopener noreferrer nofollow",
        kind: o.VIEWER,
      },
      externalLinkTarget: { value: 0, kind: o.VIEWER + o.PREFERENCE },
      historyUpdateUrl: { value: !1, kind: o.VIEWER + o.PREFERENCE },
      ignoreDestinationZoom: { value: !1, kind: o.VIEWER + o.PREFERENCE },
      imageResourcesPath: { value: "./images/", kind: o.VIEWER },
      maxCanvasPixels: {
        value: 16777216,
        compatibility: i.viewerCompatibilityParams.maxCanvasPixels,
        kind: o.VIEWER,
      },
      pdfBugEnabled: { value: !1, kind: o.VIEWER + o.PREFERENCE },
      printResolution: { value: 150, kind: o.VIEWER },
      renderer: { value: "canvas", kind: o.VIEWER + o.PREFERENCE },
      renderInteractiveForms: { value: !1, kind: o.VIEWER + o.PREFERENCE },
      sidebarViewOnLoad: { value: -1, kind: o.VIEWER + o.PREFERENCE },
      scrollModeOnLoad: { value: -1, kind: o.VIEWER + o.PREFERENCE },
      spreadModeOnLoad: { value: -1, kind: o.VIEWER + o.PREFERENCE },
      textLayerMode: { value: 1, kind: o.VIEWER + o.PREFERENCE },
      useOnlyCssZoom: { value: !1, kind: o.VIEWER + o.PREFERENCE },
      viewOnLoad: { value: 0, kind: o.VIEWER + o.PREFERENCE },
      cMapPacked: { value: !0, kind: o.API },
      cMapUrl: { value: "../web/cmaps/", kind: o.API },
      disableAutoFetch: { value: !1, kind: o.API + o.PREFERENCE },
      disableFontFace: { value: !1, kind: o.API + o.PREFERENCE },
      disableRange: { value: !1, kind: o.API + o.PREFERENCE },
      disableStream: { value: !1, kind: o.API + o.PREFERENCE },
      docBaseUrl: { value: "", kind: o.API },
      fontExtraProperties: { value: !1, kind: o.API },
      isEvalSupported: { value: !0, kind: o.API },
      maxImageSize: { value: -1, kind: o.API },
      pdfBug: { value: !1, kind: o.API },
      verbosity: { value: 1, kind: o.API },
      workerPort: { value: null, kind: o.WORKER },
      workerSrc: { value: "../build/pdf.worker.js", kind: o.WORKER },
    };
    (s.disablePreferences = { value: !1, kind: o.VIEWER }),
      (s.locale = {
        value: "undefined" != typeof navigator ? navigator.language : "en-US",
        kind: o.VIEWER,
      });
    var u = Object.create(null),
      l = (function () {
        function e() {
          throw (
            ((function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            new Error("Cannot initialize AppOptions."))
          );
        }
        var t, n, i;
        return (
          (t = e),
          (i = [
            {
              key: "get",
              value: function (e) {
                var t = u[e];
                if (void 0 !== t) return t;
                var n = s[e];
                return void 0 !== n ? n.compatibility || n.value : void 0;
              },
            },
            {
              key: "getAll",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  t = Object.create(null);
                for (var n in s) {
                  var i = s[n];
                  if (e) {
                    if (0 == (e & i.kind)) continue;
                    if (e === o.PREFERENCE) {
                      var a = i.value,
                        l = r(a);
                      if (
                        "boolean" === l ||
                        "string" === l ||
                        ("number" === l && Number.isInteger(a))
                      ) {
                        t[n] = a;
                        continue;
                      }
                      throw new Error(
                        "Invalid type for preference: ".concat(n)
                      );
                    }
                  }
                  var c = u[n];
                  t[n] = void 0 !== c ? c : i.compatibility || i.value;
                }
                return t;
              },
            },
            {
              key: "set",
              value: function (e, t) {
                u[e] = t;
              },
            },
            {
              key: "remove",
              value: function (e) {
                delete u[e];
              },
            },
          ]),
          (n = null) && a(t.prototype, n),
          i && a(t, i),
          e
        );
      })();
    t.AppOptions = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.viewerCompatibilityParams = void 0);
    var i = Object.create(null),
      r = ("undefined" != typeof navigator && navigator.userAgent) || "",
      a = ("undefined" != typeof navigator && navigator.platform) || "",
      o = ("undefined" != typeof navigator && navigator.maxTouchPoints) || 1,
      s = /Android/.test(r),
      u = /Trident/.test(r),
      l = /\b(iPad|iPhone|iPod)(?=;)/.test(r) || ("MacIntel" === a && o > 1),
      c = /CriOS/.test(r);
    (u || c) && (i.disableCreateObjectURL = !0),
      (l || s) && (i.maxCanvasPixels = 5242880);
    var d = Object.freeze(i);
    t.viewerCompatibilityParams = d;
  },
  function (e, t, n) {
    "use strict";
    var i;
    (i =
      "undefined" != typeof window && window["pdfjs-dist/build/pdf"]
        ? window["pdfjs-dist/build/pdf"]
        : require("../build/pdf.js")),
      (e.exports = i);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFCursorTools = t.CursorTool = void 0);
    var i = n(10);
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var a = { SELECT: 0, HAND: 1, ZOOM: 2 };
    t.CursorTool = a;
    var o = (function () {
      function e(t) {
        var n = this,
          r = t.container,
          o = t.eventBus,
          s = t.cursorToolOnLoad,
          u = void 0 === s ? a.SELECT : s;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.container = r),
          (this.eventBus = o),
          (this.active = a.SELECT),
          (this.activeBeforePresentationMode = null),
          (this.handTool = new i.GrabToPan({ element: this.container })),
          this._addEventListeners(),
          Promise.resolve().then(function () {
            n.switchTool(u);
          });
      }
      var t, n, o;
      return (
        (t = e),
        (n = [
          {
            key: "switchTool",
            value: function (e) {
              var t = this;
              if (
                null === this.activeBeforePresentationMode &&
                e !== this.active
              ) {
                var n = function () {
                  switch (t.active) {
                    case a.SELECT:
                      break;
                    case a.HAND:
                      t.handTool.deactivate();
                      break;
                    case a.ZOOM:
                  }
                };
                switch (e) {
                  case a.SELECT:
                    n();
                    break;
                  case a.HAND:
                    n(), this.handTool.activate();
                    break;
                  case a.ZOOM:
                  default:
                    return void console.error(
                      'switchTool: "'.concat(e, '" is an unsupported value.')
                    );
                }
                (this.active = e), this._dispatchEvent();
              }
            },
          },
          {
            key: "_dispatchEvent",
            value: function () {
              this.eventBus.dispatch("cursortoolchanged", {
                source: this,
                tool: this.active,
              });
            },
          },
          {
            key: "_addEventListeners",
            value: function () {
              var e = this;
              this.eventBus._on("switchcursortool", function (t) {
                e.switchTool(t.tool);
              }),
                this.eventBus._on("presentationmodechanged", function (t) {
                  var n;
                  t.switchInProgress ||
                    (t.active
                      ? ((n = e.active),
                        e.switchTool(a.SELECT),
                        (e.activeBeforePresentationMode = n))
                      : ((n = e.activeBeforePresentationMode),
                        (e.activeBeforePresentationMode = null),
                        e.switchTool(n)));
                });
            },
          },
          {
            key: "activeTool",
            get: function () {
              return this.active;
            },
          },
        ]) && r(t.prototype, n),
        o && r(t, o),
        e
      );
    })();
    t.PDFCursorTools = o;
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      (this.element = e.element),
        (this.document = e.element.ownerDocument),
        "function" == typeof e.ignoreTarget &&
          (this.ignoreTarget = e.ignoreTarget),
        (this.onActiveChanged = e.onActiveChanged),
        (this.activate = this.activate.bind(this)),
        (this.deactivate = this.deactivate.bind(this)),
        (this.toggle = this.toggle.bind(this)),
        (this._onmousedown = this._onmousedown.bind(this)),
        (this._onmousemove = this._onmousemove.bind(this)),
        (this._endPan = this._endPan.bind(this)),
        ((this.overlay = document.createElement("div")).className =
          "grab-to-pan-grabbing");
    }
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GrabToPan = i),
      (i.prototype = {
        CSS_CLASS_GRAB: "grab-to-pan-grab",
        activate: function () {
          this.active ||
            ((this.active = !0),
            this.element.addEventListener("mousedown", this._onmousedown, !0),
            this.element.classList.add(this.CSS_CLASS_GRAB),
            this.onActiveChanged && this.onActiveChanged(!0));
        },
        deactivate: function () {
          this.active &&
            ((this.active = !1),
            this.element.removeEventListener(
              "mousedown",
              this._onmousedown,
              !0
            ),
            this._endPan(),
            this.element.classList.remove(this.CSS_CLASS_GRAB),
            this.onActiveChanged && this.onActiveChanged(!1));
        },
        toggle: function () {
          this.active ? this.deactivate() : this.activate();
        },
        ignoreTarget: function (e) {
          return e[r](
            "a[href], a[href] *, input, textarea, button, button *, select, option"
          );
        },
        _onmousedown: function (e) {
          if (0 === e.button && !this.ignoreTarget(e.target)) {
            if (e.originalTarget)
              try {
                e.originalTarget.tagName;
              } catch (e) {
                return;
              }
            (this.scrollLeftStart = this.element.scrollLeft),
              (this.scrollTopStart = this.element.scrollTop),
              (this.clientXStart = e.clientX),
              (this.clientYStart = e.clientY),
              this.document.addEventListener(
                "mousemove",
                this._onmousemove,
                !0
              ),
              this.document.addEventListener("mouseup", this._endPan, !0),
              this.element.addEventListener("scroll", this._endPan, !0),
              e.preventDefault(),
              e.stopPropagation();
            var t = document.activeElement;
            t && !t.contains(e.target) && t.blur();
          }
        },
        _onmousemove: function (e) {
          if (
            (this.element.removeEventListener("scroll", this._endPan, !0),
            (function (e) {
              if ("buttons" in e && a) return !(1 & e.buttons);
              if (s || u) return 0 === e.which;
              return !1;
            })(e))
          )
            this._endPan();
          else {
            var t = e.clientX - this.clientXStart,
              n = e.clientY - this.clientYStart,
              i = this.scrollTopStart - n,
              r = this.scrollLeftStart - t;
            this.element.scrollTo
              ? this.element.scrollTo({ top: i, left: r, behavior: "instant" })
              : ((this.element.scrollTop = i), (this.element.scrollLeft = r)),
              this.overlay.parentNode ||
                document.body.appendChild(this.overlay);
          }
        },
        _endPan: function () {
          this.element.removeEventListener("scroll", this._endPan, !0),
            this.document.removeEventListener(
              "mousemove",
              this._onmousemove,
              !0
            ),
            this.document.removeEventListener("mouseup", this._endPan, !0),
            this.overlay.remove();
        },
      }),
      ["webkitM", "mozM", "msM", "oM", "m"].some(function (e) {
        var t = e + "atches";
        return (
          t in document.documentElement && (r = t),
          (t += "Selector") in document.documentElement && (r = t),
          r
        );
      });
    var a = !document.documentMode || document.documentMode > 9,
      o = window.chrome,
      s = o && (o.webstore || o.app),
      u =
        /Apple/.test(navigator.vendor) &&
        /Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent);
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFRenderingQueue = t.RenderingStates = void 0);
    var r = { INITIAL: 0, RUNNING: 1, PAUSED: 2, FINISHED: 3 };
    t.RenderingStates = r;
    var a = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.pdfViewer = null),
          (this.pdfThumbnailViewer = null),
          (this.onIdle = null),
          (this.highestPriorityPage = null),
          (this.idleTimeout = null),
          (this.printing = !1),
          (this.isThumbnailViewEnabled = !1);
      }
      var t, n, a;
      return (
        (t = e),
        (n = [
          {
            key: "setViewer",
            value: function (e) {
              this.pdfViewer = e;
            },
          },
          {
            key: "setThumbnailViewer",
            value: function (e) {
              this.pdfThumbnailViewer = e;
            },
          },
          {
            key: "isHighestPriority",
            value: function (e) {
              return this.highestPriorityPage === e.renderingId;
            },
          },
          {
            key: "renderHighestPriority",
            value: function (e) {
              this.idleTimeout &&
                (clearTimeout(this.idleTimeout), (this.idleTimeout = null)),
                this.pdfViewer.forceRendering(e) ||
                  (this.pdfThumbnailViewer &&
                    this.isThumbnailViewEnabled &&
                    this.pdfThumbnailViewer.forceRendering()) ||
                  this.printing ||
                  (this.onIdle &&
                    (this.idleTimeout = setTimeout(
                      this.onIdle.bind(this),
                      3e4
                    )));
            },
          },
          {
            key: "getHighestPriority",
            value: function (e, t, n) {
              var i = e.views,
                r = i.length;
              if (0 === r) return null;
              for (var a = 0; a < r; ++a) {
                var o = i[a].view;
                if (!this.isViewFinished(o)) return o;
              }
              if (n) {
                var s = e.last.id;
                if (t[s] && !this.isViewFinished(t[s])) return t[s];
              } else {
                var u = e.first.id - 2;
                if (t[u] && !this.isViewFinished(t[u])) return t[u];
              }
              return null;
            },
          },
          {
            key: "isViewFinished",
            value: function (e) {
              return e.renderingState === r.FINISHED;
            },
          },
          {
            key: "renderView",
            value: function (e) {
              var t = this;
              switch (e.renderingState) {
                case r.FINISHED:
                  return !1;
                case r.PAUSED:
                  (this.highestPriorityPage = e.renderingId), e.resume();
                  break;
                case r.RUNNING:
                  this.highestPriorityPage = e.renderingId;
                  break;
                case r.INITIAL:
                  (this.highestPriorityPage = e.renderingId),
                    e
                      .draw()
                      .finally(function () {
                        t.renderHighestPriority();
                      })
                      .catch(function (e) {
                        console.error('renderView: "'.concat(e, '"'));
                      });
              }
              return !0;
            },
          },
        ]) && i(t.prototype, n),
        a && i(t, a),
        e
      );
    })();
    t.PDFRenderingQueue = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFSidebar = t.SidebarView = void 0);
    var i = n(5),
      r = n(11);
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var o = {
      UNKNOWN: -1,
      NONE: 0,
      THUMBS: 1,
      OUTLINE: 2,
      ATTACHMENTS: 3,
      LAYERS: 4,
    };
    t.SidebarView = o;
    var s = (function () {
      function e(t) {
        var n = t.elements,
          r = t.pdfViewer,
          a = t.pdfThumbnailViewer,
          s = t.eventBus,
          u = t.l10n,
          l = void 0 === u ? i.NullL10n : u,
          c = t.disableNotification,
          d = void 0 !== c && c;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.isOpen = !1),
          (this.active = o.THUMBS),
          (this.isInitialViewSet = !1),
          (this.onToggled = null),
          (this.pdfViewer = r),
          (this.pdfThumbnailViewer = a),
          (this.outerContainer = n.outerContainer),
          (this.viewerContainer = n.viewerContainer),
          (this.toggleButton = n.toggleButton),
          (this.thumbnailButton = n.thumbnailButton),
          (this.outlineButton = n.outlineButton),
          (this.attachmentsButton = n.attachmentsButton),
          (this.thumbnailView = n.thumbnailView),
          (this.outlineView = n.outlineView),
          (this.attachmentsView = n.attachmentsView),
          (this.eventBus = s),
          (this.l10n = l),
          (this._disableNotification = d),
          this._addEventListeners();
      }
      var t, n, s;
      return (
        (t = e),
        (n = [
          {
            key: "reset",
            value: function () {
              (this.isInitialViewSet = !1),
                this._hideUINotification(null),
                this.switchView(o.THUMBS),
                (this.outlineButton.disabled = !1),
                (this.attachmentsButton.disabled = !1);
            },
          },
          {
            key: "setInitialView",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : o.NONE;
              this.isInitialViewSet ||
                ((this.isInitialViewSet = !0),
                (e !== o.NONE && e !== o.UNKNOWN && this._switchView(e, !0)) ||
                  this._dispatchEvent());
            },
          },
          {
            key: "switchView",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              this._switchView(e, t);
            },
          },
          {
            key: "_switchView",
            value: function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = e !== this.active,
                i = !1;
              switch (e) {
                case o.NONE:
                  return !!this.isOpen && (this.close(), !0);
                case o.THUMBS:
                  this.isOpen && n && (i = !0);
                  break;
                case o.OUTLINE:
                  if (this.outlineButton.disabled) return !1;
                  break;
                case o.ATTACHMENTS:
                  if (this.attachmentsButton.disabled) return !1;
                  break;
                default:
                  return (
                    console.error(
                      'PDFSidebar._switchView: "'.concat(
                        e,
                        '" is not a valid view.'
                      )
                    ),
                    !1
                  );
              }
              return (
                (this.active = e),
                this.thumbnailButton.classList.toggle(
                  "toggled",
                  e === o.THUMBS
                ),
                this.outlineButton.classList.toggle("toggled", e === o.OUTLINE),
                this.attachmentsButton.classList.toggle(
                  "toggled",
                  e === o.ATTACHMENTS
                ),
                this.thumbnailView.classList.toggle("hidden", e !== o.THUMBS),
                this.outlineView.classList.toggle("hidden", e !== o.OUTLINE),
                this.attachmentsView.classList.toggle(
                  "hidden",
                  e !== o.ATTACHMENTS
                ),
                t && !this.isOpen
                  ? (this.open(), !0)
                  : (i &&
                      (this._updateThumbnailViewer(), this._forceRendering()),
                    n && this._dispatchEvent(),
                    this._hideUINotification(this.active),
                    n)
              );
            },
          },
          {
            key: "open",
            value: function () {
              this.isOpen ||
                ((this.isOpen = !0),
                this.toggleButton.classList.add("toggled"),
                this.outerContainer.classList.add(
                  "sidebarMoving",
                  "sidebarOpen"
                ),
                this.active === o.THUMBS && this._updateThumbnailViewer(),
                this._forceRendering(),
                this._dispatchEvent(),
                this._hideUINotification(this.active));
            },
          },
          {
            key: "close",
            value: function () {
              this.isOpen &&
                ((this.isOpen = !1),
                this.toggleButton.classList.remove("toggled"),
                this.outerContainer.classList.add("sidebarMoving"),
                this.outerContainer.classList.remove("sidebarOpen"),
                this._forceRendering(),
                this._dispatchEvent());
            },
          },
          {
            key: "toggle",
            value: function () {
              this.isOpen ? this.close() : this.open();
            },
          },
          {
            key: "_dispatchEvent",
            value: function () {
              this.eventBus.dispatch("sidebarviewchanged", {
                source: this,
                view: this.visibleView,
              });
            },
          },
          {
            key: "_forceRendering",
            value: function () {
              this.onToggled
                ? this.onToggled()
                : (this.pdfViewer.forceRendering(),
                  this.pdfThumbnailViewer.forceRendering());
            },
          },
          {
            key: "_updateThumbnailViewer",
            value: function () {
              for (
                var e = this.pdfViewer,
                  t = this.pdfThumbnailViewer,
                  n = e.pagesCount,
                  i = 0;
                i < n;
                i++
              ) {
                var a = e.getPageView(i);
                if (a && a.renderingState === r.RenderingStates.FINISHED)
                  t.getThumbnail(i).setImage(a);
              }
              t.scrollThumbnailIntoView(e.currentPageNumber);
            },
          },
          {
            key: "_showUINotification",
            value: function (e) {
              var t = this;
              if (!this._disableNotification) {
                if (
                  (this.l10n
                    .get(
                      "toggle_sidebar_notification.title",
                      null,
                      "Toggle Sidebar (document contains outline/attachments)"
                    )
                    .then(function (e) {
                      t.toggleButton.title = e;
                    }),
                  this.isOpen)
                ) {
                  if (e === this.active) return;
                } else
                  this.toggleButton.classList.add("pdfSidebarNotification");
                switch (e) {
                  case o.OUTLINE:
                    this.outlineButton.classList.add("pdfSidebarNotification");
                    break;
                  case o.ATTACHMENTS:
                    this.attachmentsButton.classList.add(
                      "pdfSidebarNotification"
                    );
                }
              }
            },
          },
          {
            key: "_hideUINotification",
            value: function (e) {
              var t = this;
              if (!this._disableNotification) {
                var n = function (e) {
                  switch (e) {
                    case o.OUTLINE:
                      t.outlineButton.classList.remove(
                        "pdfSidebarNotification"
                      );
                      break;
                    case o.ATTACHMENTS:
                      t.attachmentsButton.classList.remove(
                        "pdfSidebarNotification"
                      );
                  }
                };
                if (this.isOpen || null === e)
                  if (
                    (this.toggleButton.classList.remove(
                      "pdfSidebarNotification"
                    ),
                    null === e)
                  ) {
                    for (e in o) n(o[e]);
                    this.l10n
                      .get("toggle_sidebar.title", null, "Toggle Sidebar")
                      .then(function (e) {
                        t.toggleButton.title = e;
                      });
                  } else n(e);
              }
            },
          },
          {
            key: "_addEventListeners",
            value: function () {
              var e = this;
              this.viewerContainer.addEventListener(
                "transitionend",
                function (t) {
                  t.target === e.viewerContainer &&
                    e.outerContainer.classList.remove("sidebarMoving");
                }
              ),
                this.toggleButton.addEventListener("click", function () {
                  e.toggle();
                }),
                this.thumbnailButton.addEventListener("click", function () {
                  e.switchView(o.THUMBS);
                }),
                this.outlineButton.addEventListener("click", function () {
                  e.switchView(o.OUTLINE);
                }),
                this.outlineButton.addEventListener("dblclick", function () {
                  e.eventBus.dispatch("toggleoutlinetree", { source: e });
                }),
                this.attachmentsButton.addEventListener("click", function () {
                  e.switchView(o.ATTACHMENTS);
                }),
                this.eventBus._on("outlineloaded", function (t) {
                  var n = t.outlineCount;
                  (e.outlineButton.disabled = !n),
                    n
                      ? e._showUINotification(o.OUTLINE)
                      : e.active === o.OUTLINE && e.switchView(o.THUMBS);
                }),
                this.eventBus._on("attachmentsloaded", function (t) {
                  if (t.attachmentsCount)
                    return (
                      (e.attachmentsButton.disabled = !1),
                      void e._showUINotification(o.ATTACHMENTS)
                    );
                  Promise.resolve().then(function () {
                    e.attachmentsView.hasChildNodes() ||
                      ((e.attachmentsButton.disabled = !0),
                      e.active === o.ATTACHMENTS && e.switchView(o.THUMBS));
                  });
                }),
                this.eventBus._on("presentationmodechanged", function (t) {
                  t.active ||
                    t.switchInProgress ||
                    !e.isThumbnailViewVisible ||
                    e._updateThumbnailViewer();
                });
            },
          },
          {
            key: "visibleView",
            get: function () {
              return this.isOpen ? this.active : o.NONE;
            },
          },
          {
            key: "isThumbnailViewVisible",
            get: function () {
              return this.isOpen && this.active === o.THUMBS;
            },
          },
          {
            key: "isOutlineViewVisible",
            get: function () {
              return this.isOpen && this.active === o.OUTLINE;
            },
          },
          {
            key: "isAttachmentsViewVisible",
            get: function () {
              return this.isOpen && this.active === o.ATTACHMENTS;
            },
          },
        ]) && a(t.prototype, n),
        s && a(t, s),
        e
      );
    })();
    t.PDFSidebar = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.OverlayManager = void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i };
    function a(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function o(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = e.apply(t, n);
          function s(e) {
            a(o, i, r, s, u, "next", e);
          }
          function u(e) {
            a(o, i, r, s, u, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var u = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._overlays = {}),
          (this._active = null),
          (this._keyDownBound = this._keyDown.bind(this));
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "register",
            value: (function () {
              var e = o(
                r.default.mark(function e(t, n) {
                  var i,
                    a,
                    o,
                    s = arguments;
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((i =
                                s.length > 2 && void 0 !== s[2] ? s[2] : null),
                              (a = s.length > 3 && void 0 !== s[3] && s[3]),
                              t && n && (o = n.parentNode))
                            ) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Not enough parameters.");
                          case 6:
                            if (!this._overlays[t]) {
                              e.next = 8;
                              break;
                            }
                            throw new Error(
                              "The overlay is already registered."
                            );
                          case 8:
                            this._overlays[t] = {
                              element: n,
                              container: o,
                              callerCloseMethod: i,
                              canForceClose: a,
                            };
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "unregister",
            value: (function () {
              var e = o(
                r.default.mark(function e(t) {
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this._overlays[t]) {
                              e.next = 4;
                              break;
                            }
                            throw new Error("The overlay does not exist.");
                          case 4:
                            if (this._active !== t) {
                              e.next = 6;
                              break;
                            }
                            throw new Error(
                              "The overlay cannot be removed while it is active."
                            );
                          case 6:
                            delete this._overlays[t];
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "open",
            value: (function () {
              var e = o(
                r.default.mark(function e(t) {
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this._overlays[t]) {
                              e.next = 4;
                              break;
                            }
                            throw new Error("The overlay does not exist.");
                          case 4:
                            if (!this._active) {
                              e.next = 14;
                              break;
                            }
                            if (!this._overlays[t].canForceClose) {
                              e.next = 9;
                              break;
                            }
                            this._closeThroughCaller(), (e.next = 14);
                            break;
                          case 9:
                            if (this._active !== t) {
                              e.next = 13;
                              break;
                            }
                            throw new Error("The overlay is already active.");
                          case 13:
                            throw new Error(
                              "Another overlay is currently active."
                            );
                          case 14:
                            (this._active = t),
                              this._overlays[
                                this._active
                              ].element.classList.remove("hidden"),
                              this._overlays[
                                this._active
                              ].container.classList.remove("hidden"),
                              window.addEventListener(
                                "keydown",
                                this._keyDownBound
                              );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "close",
            value: (function () {
              var e = o(
                r.default.mark(function e(t) {
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this._overlays[t]) {
                              e.next = 4;
                              break;
                            }
                            throw new Error("The overlay does not exist.");
                          case 4:
                            if (this._active) {
                              e.next = 8;
                              break;
                            }
                            throw new Error(
                              "The overlay is currently not active."
                            );
                          case 8:
                            if (this._active === t) {
                              e.next = 10;
                              break;
                            }
                            throw new Error(
                              "Another overlay is currently active."
                            );
                          case 10:
                            this._overlays[
                              this._active
                            ].container.classList.add("hidden"),
                              this._overlays[
                                this._active
                              ].element.classList.add("hidden"),
                              (this._active = null),
                              window.removeEventListener(
                                "keydown",
                                this._keyDownBound
                              );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "_keyDown",
            value: function (e) {
              this._active &&
                27 === e.keyCode &&
                (this._closeThroughCaller(), e.preventDefault());
            },
          },
          {
            key: "_closeThroughCaller",
            value: function () {
              this._overlays[this._active].callerCloseMethod &&
                this._overlays[this._active].callerCloseMethod(),
                this._active && this.close(this._active);
            },
          },
          {
            key: "active",
            get: function () {
              return this._active;
            },
          },
        ]) && s(t.prototype, n),
        i && s(t, i),
        e
      );
    })();
    t.OverlayManager = u;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PasswordPrompt = void 0);
    var i = n(5),
      r = n(8);
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var o = (function () {
      function e(t, n) {
        var r = this,
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : i.NullL10n;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.overlayName = t.overlayName),
          (this.container = t.container),
          (this.label = t.label),
          (this.input = t.input),
          (this.submitButton = t.submitButton),
          (this.cancelButton = t.cancelButton),
          (this.overlayManager = n),
          (this.l10n = a),
          (this.updateCallback = null),
          (this.reason = null),
          this.submitButton.addEventListener("click", this.verify.bind(this)),
          this.cancelButton.addEventListener("click", this.close.bind(this)),
          this.input.addEventListener("keydown", function (e) {
            13 === e.keyCode && r.verify();
          }),
          this.overlayManager.register(
            this.overlayName,
            this.container,
            this.close.bind(this),
            !0
          );
      }
      var t, n, o;
      return (
        (t = e),
        (n = [
          {
            key: "open",
            value: function () {
              var e = this;
              this.overlayManager.open(this.overlayName).then(function () {
                e.input.focus(),
                  (e.reason === r.PasswordResponses.INCORRECT_PASSWORD
                    ? e.l10n.get(
                        "password_invalid",
                        null,
                        "Invalid password. Please try again."
                      )
                    : e.l10n.get(
                        "password_label",
                        null,
                        "Enter the password to open this PDF file."
                      )
                  ).then(function (t) {
                    e.label.textContent = t;
                  });
              });
            },
          },
          {
            key: "close",
            value: function () {
              var e = this;
              this.overlayManager.close(this.overlayName).then(function () {
                e.input.value = "";
              });
            },
          },
          {
            key: "verify",
            value: function () {
              var e = this.input.value;
              e && e.length > 0 && (this.close(), this.updateCallback(e));
            },
          },
          {
            key: "setUpdateCallback",
            value: function (e, t) {
              (this.updateCallback = e), (this.reason = t);
            },
          },
        ]) && a(t.prototype, n),
        o && a(t, o),
        e
      );
    })();
    t.PasswordPrompt = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFAttachmentViewer = void 0);
    var i = n(8);
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var a = (function () {
      function e(t) {
        var n = t.container,
          i = t.eventBus,
          r = t.downloadManager;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.container = n),
          (this.eventBus = i),
          (this.downloadManager = r),
          this.reset(),
          this.eventBus._on(
            "fileattachmentannotation",
            this._appendAttachment.bind(this)
          );
      }
      var t, n, a;
      return (
        (t = e),
        (n = [
          {
            key: "reset",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              (this.attachments = null),
                (this.container.textContent = ""),
                e ||
                  (this._renderedCapability = (0, i.createPromiseCapability)());
            },
          },
          {
            key: "_dispatchEvent",
            value: function (e) {
              this._renderedCapability.resolve(),
                this.eventBus.dispatch("attachmentsloaded", {
                  source: this,
                  attachmentsCount: e,
                });
            },
          },
          {
            key: "_bindPdfLink",
            value: function (e, t, n) {
              var i,
                r = this;
              e.onclick = function () {
                var e;
                i ||
                  (i = URL.createObjectURL(
                    new Blob([t], { type: "application/pdf" })
                  )),
                  (e = "?file=" + encodeURIComponent(i + "#" + n));
                try {
                  window.open(e);
                } catch (e) {
                  console.error("_bindPdfLink: ".concat(e)),
                    URL.revokeObjectURL(i),
                    (i = null),
                    r.downloadManager.downloadData(t, n, "application/pdf");
                }
                return !1;
              };
            },
          },
          {
            key: "_bindLink",
            value: function (e, t, n) {
              var i = this;
              e.onclick = function () {
                return i.downloadManager.downloadData(t, n, ""), !1;
              };
            },
          },
          {
            key: "render",
            value: function (e) {
              var t = e.attachments,
                n = e.keepRenderedCapability,
                r = void 0 !== n && n,
                a = 0;
              if (
                (this.attachments && this.reset(!0 === r),
                (this.attachments = t || null),
                t)
              ) {
                var o = Object.keys(t).sort(function (e, t) {
                  return e.toLowerCase().localeCompare(t.toLowerCase());
                });
                a = o.length;
                for (var s = 0; s < a; s++) {
                  var u = t[o[s]],
                    l = (0, i.removeNullCharacters)(
                      (0, i.getFilenameFromUrl)(u.filename)
                    ),
                    c = document.createElement("div");
                  c.className = "attachmentsItem";
                  var d = document.createElement("button");
                  (d.textContent = l),
                    /\.pdf$/i.test(l) &&
                    !this.downloadManager.disableCreateObjectURL
                      ? this._bindPdfLink(d, u.content, l)
                      : this._bindLink(d, u.content, l),
                    c.appendChild(d),
                    this.container.appendChild(c);
                }
                this._dispatchEvent(a);
              } else this._dispatchEvent(a);
            },
          },
          {
            key: "_appendAttachment",
            value: function (e) {
              var t = this,
                n = e.id,
                i = e.filename,
                r = e.content;
              this._renderedCapability.promise.then(function () {
                var e = t.attachments;
                if (e) {
                  for (var a in e) if (n === a) return;
                } else e = Object.create(null);
                (e[n] = { filename: i, content: r }),
                  t.render({ attachments: e, keepRenderedCapability: !0 });
              });
            },
          },
        ]) && r(t.prototype, n),
        a && r(t, a),
        e
      );
    })();
    t.PDFAttachmentViewer = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFDocumentProperties = void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i },
      a = n(8),
      o = n(5);
    function s(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function u(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var a = e.apply(t, n);
          function o(e) {
            s(a, i, r, o, u, "next", e);
          }
          function u(e) {
            s(a, i, r, o, u, "throw", e);
          }
          o(void 0);
        });
      };
    }
    function l(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            i = !0,
            r = !1,
            a = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(i = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              i = !0
            );
          } catch (e) {
            (r = !0), (a = e);
          } finally {
            try {
              i || null == s.return || s.return();
            } finally {
              if (r) throw a;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return c(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return c(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function c(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var h = ["en-us", "en-lr", "my"],
      f = { "8.5x11": "Letter", "8.5x14": "Legal" },
      p = { "297x420": "A3", "210x297": "A4" };
    function v(e, t, n) {
      var i = t ? e.width : e.height,
        r = t ? e.height : e.width;
      return n["".concat(i, "x").concat(r)];
    }
    var g = (function () {
      function e(t, n, i) {
        var r = this,
          a = t.overlayName,
          s = t.fields,
          u = t.container,
          l = t.closeButton,
          c =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : o.NullL10n;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.overlayName = a),
          (this.fields = s),
          (this.container = u),
          (this.overlayManager = n),
          (this.l10n = c),
          this._reset(),
          l.addEventListener("click", this.close.bind(this)),
          this.overlayManager.register(
            this.overlayName,
            this.container,
            this.close.bind(this)
          ),
          i._on("pagechanging", function (e) {
            r._currentPageNumber = e.pageNumber;
          }),
          i._on("rotationchanging", function (e) {
            r._pagesRotation = e.pagesRotation;
          }),
          (this._isNonMetricLocale = !0),
          c.getLanguage().then(function (e) {
            r._isNonMetricLocale = h.includes(e);
          });
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "open",
            value: function () {
              var e = this,
                t = function (t) {
                  Object.defineProperty(e, "fieldData", {
                    value: Object.freeze(t),
                    writable: !1,
                    enumerable: !0,
                    configurable: !0,
                  });
                };
              Promise.all([
                this.overlayManager.open(this.overlayName),
                this._dataAvailableCapability.promise,
              ]).then(function () {
                var n = e._currentPageNumber,
                  i = e._pagesRotation;
                e.fieldData &&
                n === e.fieldData._currentPageNumber &&
                i === e.fieldData._pagesRotation
                  ? e._updateUI()
                  : e.pdfDocument
                      .getMetadata()
                      .then(function (t) {
                        var r = t.info,
                          a = t.metadata,
                          s = t.contentDispositionFilename;
                        return Promise.all([
                          r,
                          a,
                          s || (0, o.getPDFFileNameFromURL)(e.url),
                          e._parseFileSize(e.maybeFileSize),
                          e._parseDate(r.CreationDate),
                          e._parseDate(r.ModDate),
                          e.pdfDocument.getPage(n).then(function (t) {
                            return e._parsePageSize(
                              (0, o.getPageSizeInches)(t),
                              i
                            );
                          }),
                          e._parseLinearization(r.IsLinearized),
                        ]);
                      })
                      .then(function (r) {
                        var a = l(r, 8),
                          o = a[0],
                          s = (a[1], a[2]),
                          u = a[3],
                          c = a[4],
                          d = a[5],
                          h = a[6],
                          f = a[7];
                        return (
                          t({
                            fileName: s,
                            fileSize: u,
                            title: o.Title,
                            author: o.Author,
                            subject: o.Subject,
                            keywords: o.Keywords,
                            creationDate: c,
                            modificationDate: d,
                            creator: o.Creator,
                            producer: o.Producer,
                            version: o.PDFFormatVersion,
                            pageCount: e.pdfDocument.numPages,
                            pageSize: h,
                            linearized: f,
                            _currentPageNumber: n,
                            _pagesRotation: i,
                          }),
                          e._updateUI(),
                          e.pdfDocument.getDownloadInfo()
                        );
                      })
                      .then(function (t) {
                        var n = t.length;
                        return (e.maybeFileSize = n), e._parseFileSize(n);
                      })
                      .then(function (n) {
                        if (n !== e.fieldData.fileSize) {
                          var i = Object.assign(
                            Object.create(null),
                            e.fieldData
                          );
                          (i.fileSize = n), t(i), e._updateUI();
                        }
                      });
              });
            },
          },
          {
            key: "close",
            value: function () {
              this.overlayManager.close(this.overlayName);
            },
          },
          {
            key: "setDocument",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              this.pdfDocument && (this._reset(), this._updateUI(!0)),
                e &&
                  ((this.pdfDocument = e),
                  (this.url = t),
                  this._dataAvailableCapability.resolve());
            },
          },
          {
            key: "setFileSize",
            value: function (e) {
              Number.isInteger(e) && e > 0 && (this.maybeFileSize = e);
            },
          },
          {
            key: "_reset",
            value: function () {
              (this.pdfDocument = null),
                (this.url = null),
                (this.maybeFileSize = 0),
                delete this.fieldData,
                (this._dataAvailableCapability = (0,
                a.createPromiseCapability)()),
                (this._currentPageNumber = 1),
                (this._pagesRotation = 0);
            },
          },
          {
            key: "_updateUI",
            value: function () {
              if (
                !(
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0]
                ) &&
                this.fieldData
              ) {
                if (this.overlayManager.active === this.overlayName)
                  for (var e in this.fields) {
                    var t = this.fieldData[e];
                    this.fields[e].textContent = t || 0 === t ? t : "-";
                  }
              } else
                for (var n in this.fields) this.fields[n].textContent = "-";
            },
          },
          {
            key: "_parseFileSize",
            value: (function () {
              var e = u(
                r.default.mark(function e() {
                  var t,
                    n,
                    i = arguments;
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = i.length > 0 && void 0 !== i[0] ? i[0] : 0),
                              (n = t / 1024))
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return", void 0);
                          case 6:
                            if (!(n < 1024)) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              this.l10n.get(
                                "document_properties_kb",
                                {
                                  size_kb: (+n.toPrecision(3)).toLocaleString(),
                                  size_b: t.toLocaleString(),
                                },
                                "{{size_kb}} KB ({{size_b}} bytes)"
                              )
                            );
                          case 8:
                            return e.abrupt(
                              "return",
                              this.l10n.get(
                                "document_properties_mb",
                                {
                                  size_mb: (+(n / 1024).toPrecision(
                                    3
                                  )).toLocaleString(),
                                  size_b: t.toLocaleString(),
                                },
                                "{{size_mb}} MB ({{size_b}} bytes)"
                              )
                            );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "_parsePageSize",
            value: (function () {
              var e = u(
                r.default.mark(function e(t, n) {
                  var i,
                    a,
                    s,
                    u,
                    c,
                    d,
                    h,
                    g = this;
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return", void 0);
                          case 2:
                            return (
                              n % 180 != 0 &&
                                (t = { width: t.height, height: t.width }),
                              (i = (0, o.isPortraitOrientation)(t)),
                              (a = {
                                width: Math.round(100 * t.width) / 100,
                                height: Math.round(100 * t.height) / 100,
                              }),
                              (s = {
                                width: Math.round(25.4 * t.width * 10) / 10,
                                height: Math.round(25.4 * t.height * 10) / 10,
                              }),
                              (u = null),
                              (c = v(a, i, f) || v(s, i, p)) ||
                                (Number.isInteger(s.width) &&
                                  Number.isInteger(s.height)) ||
                                ((d = {
                                  width: 25.4 * t.width,
                                  height: 25.4 * t.height,
                                }),
                                (h = {
                                  width: Math.round(s.width),
                                  height: Math.round(s.height),
                                }),
                                Math.abs(d.width - h.width) < 0.1 &&
                                  Math.abs(d.height - h.height) < 0.1 &&
                                  (c = v(h, i, p)) &&
                                  ((a = {
                                    width:
                                      Math.round((h.width / 25.4) * 100) / 100,
                                    height:
                                      Math.round((h.height / 25.4) * 100) / 100,
                                  }),
                                  (s = h))),
                              c &&
                                (u = this.l10n.get(
                                  "document_properties_page_size_name_" +
                                    c.toLowerCase(),
                                  null,
                                  c
                                )),
                              e.abrupt(
                                "return",
                                Promise.all([
                                  this._isNonMetricLocale ? a : s,
                                  this.l10n.get(
                                    "document_properties_page_size_unit_" +
                                      (this._isNonMetricLocale
                                        ? "inches"
                                        : "millimeters"),
                                    null,
                                    this._isNonMetricLocale ? "in" : "mm"
                                  ),
                                  u,
                                  this.l10n.get(
                                    "document_properties_page_size_orientation_" +
                                      (i ? "portrait" : "landscape"),
                                    null,
                                    i ? "portrait" : "landscape"
                                  ),
                                ]).then(function (e) {
                                  var t = l(e, 4),
                                    n = t[0],
                                    i = n.width,
                                    r = n.height,
                                    a = t[1],
                                    o = t[2],
                                    s = t[3];
                                  return g.l10n.get(
                                    "document_properties_page_size_dimension_" +
                                      (o ? "name_" : "") +
                                      "string",
                                    {
                                      width: i.toLocaleString(),
                                      height: r.toLocaleString(),
                                      unit: a,
                                      name: o,
                                      orientation: s,
                                    },
                                    "{{width}} × {{height}} {{unit}} (" +
                                      (o ? "{{name}}, " : "") +
                                      "{{orientation}})"
                                  );
                                })
                              )
                            );
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "_parseDate",
            value: (function () {
              var e = u(
                r.default.mark(function e(t) {
                  var n;
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = a.PDFDateString.toDateObject(t))) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", void 0);
                          case 3:
                            return e.abrupt(
                              "return",
                              this.l10n.get(
                                "document_properties_date_string",
                                {
                                  date: n.toLocaleDateString(),
                                  time: n.toLocaleTimeString(),
                                },
                                "{{date}}, {{time}}"
                              )
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "_parseLinearization",
            value: function (e) {
              return this.l10n.get(
                "document_properties_linearized_" + (e ? "yes" : "no"),
                null,
                e ? "Yes" : "No"
              );
            },
          },
        ]) && d(t.prototype, n),
        i && d(t, i),
        e
      );
    })();
    t.PDFDocumentProperties = g;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFFindBar = void 0);
    var i = n(18),
      r = n(5);
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var o = (function () {
      function e(t, n) {
        var i = this,
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.NullL10n;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.opened = !1),
          (this.bar = t.bar || null),
          (this.toggleButton = t.toggleButton || null),
          (this.findField = t.findField || null),
          (this.highlightAll = t.highlightAllCheckbox || null),
          (this.caseSensitive = t.caseSensitiveCheckbox || null),
          (this.entireWord = t.entireWordCheckbox || null),
          (this.findMsg = t.findMsg || null),
          (this.findResultsCount = t.findResultsCount || null),
          (this.findPreviousButton = t.findPreviousButton || null),
          (this.findNextButton = t.findNextButton || null),
          (this.eventBus = n),
          (this.l10n = a),
          this.toggleButton.addEventListener("click", function () {
            i.toggle();
          }),
          this.findField.addEventListener("input", function () {
            i.dispatchEvent("");
          }),
          this.bar.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
              case 13:
                e.target === i.findField &&
                  i.dispatchEvent("again", e.shiftKey);
                break;
              case 27:
                i.close();
            }
          }),
          this.findPreviousButton.addEventListener("click", function () {
            i.dispatchEvent("again", !0);
          }),
          this.findNextButton.addEventListener("click", function () {
            i.dispatchEvent("again", !1);
          }),
          this.highlightAll.addEventListener("click", function () {
            i.dispatchEvent("highlightallchange");
          }),
          this.caseSensitive.addEventListener("click", function () {
            i.dispatchEvent("casesensitivitychange");
          }),
          this.entireWord.addEventListener("click", function () {
            i.dispatchEvent("entirewordchange");
          }),
          this.eventBus._on("resize", this._adjustWidth.bind(this));
      }
      var t, n, o;
      return (
        (t = e),
        (n = [
          {
            key: "reset",
            value: function () {
              this.updateUIState();
            },
          },
          {
            key: "dispatchEvent",
            value: function (e, t) {
              this.eventBus.dispatch("find", {
                source: this,
                type: e,
                query: this.findField.value,
                phraseSearch: !0,
                caseSensitive: this.caseSensitive.checked,
                entireWord: this.entireWord.checked,
                highlightAll: this.highlightAll.checked,
                findPrevious: t,
              });
            },
          },
          {
            key: "updateUIState",
            value: function (e, t, n) {
              var r = this,
                a = !1,
                o = "",
                s = "";
              switch (e) {
                case i.FindState.FOUND:
                  break;
                case i.FindState.PENDING:
                  s = "pending";
                  break;
                case i.FindState.NOT_FOUND:
                  (o = this.l10n.get(
                    "find_not_found",
                    null,
                    "Phrase not found"
                  )),
                    (a = !0);
                  break;
                case i.FindState.WRAPPED:
                  o = t
                    ? this.l10n.get(
                        "find_reached_top",
                        null,
                        "Reached top of document, continued from bottom"
                      )
                    : this.l10n.get(
                        "find_reached_bottom",
                        null,
                        "Reached end of document, continued from top"
                      );
              }
              this.findField.classList.toggle("notFound", a),
                this.findField.setAttribute("data-status", s),
                Promise.resolve(o).then(function (e) {
                  (r.findMsg.textContent = e), r._adjustWidth();
                }),
                this.updateResultsCount(n);
            },
          },
          {
            key: "updateResultsCount",
            value: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.current,
                i = void 0 === n ? 0 : n,
                r = t.total,
                a = void 0 === r ? 0 : r;
              if (this.findResultsCount) {
                var o = "";
                a > 0 &&
                  (o =
                    a > 1e3
                      ? this.l10n.get(
                          "find_match_count_limit",
                          { limit: 1e3 },
                          "More than {{limit}} matches"
                        )
                      : this.l10n.get(
                          "find_match_count",
                          { current: i, total: a },
                          "{{current}} of {{total}} match" +
                            (1 !== a ? "es" : "")
                        )),
                  Promise.resolve(o).then(function (t) {
                    (e.findResultsCount.textContent = t),
                      e.findResultsCount.classList.toggle("hidden", !a),
                      e._adjustWidth();
                  });
              }
            },
          },
          {
            key: "open",
            value: function () {
              this.opened ||
                ((this.opened = !0),
                this.toggleButton.classList.add("toggled"),
                this.bar.classList.remove("hidden")),
                this.findField.select(),
                this.findField.focus(),
                this._adjustWidth();
            },
          },
          {
            key: "close",
            value: function () {
              this.opened &&
                ((this.opened = !1),
                this.toggleButton.classList.remove("toggled"),
                this.bar.classList.add("hidden"),
                this.eventBus.dispatch("findbarclose", { source: this }));
            },
          },
          {
            key: "toggle",
            value: function () {
              this.opened ? this.close() : this.open();
            },
          },
          {
            key: "_adjustWidth",
            value: function () {
              this.opened &&
                (this.bar.classList.remove("wrapContainers"),
                this.bar.clientHeight >
                  this.bar.firstElementChild.clientHeight &&
                  this.bar.classList.add("wrapContainers"));
            },
          },
        ]) && a(t.prototype, n),
        o && a(t, o),
        e
      );
    })();
    t.PDFFindBar = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFFindController = t.FindState = void 0);
    var i = n(8),
      r = n(19),
      a = n(5);
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var s = { FOUND: 0, NOT_FOUND: 1, WRAPPED: 2, PENDING: 3 };
    t.FindState = s;
    var u = {
        "‘": "'",
        "’": "'",
        "‚": "'",
        "‛": "'",
        "“": '"',
        "”": '"',
        "„": '"',
        "‟": '"',
        "¼": "1/4",
        "½": "1/2",
        "¾": "3/4",
      },
      l = null;
    function c(e) {
      if (!l) {
        var t = Object.keys(u).join("");
        l = new RegExp("[".concat(t, "]"), "g");
      }
      return e.replace(l, function (e) {
        return u[e];
      });
    }
    var d = (function () {
      function e(t) {
        var n = t.linkService,
          i = t.eventBus;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._linkService = n),
          (this._eventBus = i),
          this._reset(),
          i._on("findbarclose", this._onFindBarClose.bind(this));
      }
      var t, n, u;
      return (
        (t = e),
        (n = [
          {
            key: "setDocument",
            value: function (e) {
              this._pdfDocument && this._reset(),
                e &&
                  ((this._pdfDocument = e),
                  this._firstPageCapability.resolve());
            },
          },
          {
            key: "executeCommand",
            value: function (e, t) {
              var n = this;
              if (t) {
                var i = this._pdfDocument;
                (null === this._state || this._shouldDirtyMatch(e, t)) &&
                  (this._dirtyMatch = !0),
                  (this._state = t),
                  "findhighlightallchange" !== e &&
                    this._updateUIState(s.PENDING),
                  this._firstPageCapability.promise.then(function () {
                    if (n._pdfDocument && (!i || n._pdfDocument === i)) {
                      n._extractText();
                      var t = !n._highlightMatches,
                        r = !!n._findTimeout;
                      n._findTimeout &&
                        (clearTimeout(n._findTimeout), (n._findTimeout = null)),
                        "find" === e
                          ? (n._findTimeout = setTimeout(function () {
                              n._nextMatch(), (n._findTimeout = null);
                            }, 250))
                          : n._dirtyMatch
                          ? n._nextMatch()
                          : "findagain" === e
                          ? (n._nextMatch(),
                            t && n._state.highlightAll && n._updateAllPages())
                          : "findhighlightallchange" === e
                          ? (r ? n._nextMatch() : (n._highlightMatches = !0),
                            n._updateAllPages())
                          : n._nextMatch();
                    }
                  });
              }
            },
          },
          {
            key: "scrollMatchIntoView",
            value: function (e) {
              var t = e.element,
                n = void 0 === t ? null : t,
                i = e.pageIndex,
                r = void 0 === i ? -1 : i,
                o = e.matchIndex,
                s = void 0 === o ? -1 : o;
              if (
                this._scrollMatches &&
                n &&
                -1 !== s &&
                s === this._selected.matchIdx &&
                -1 !== r &&
                r === this._selected.pageIdx
              ) {
                this._scrollMatches = !1;
                var u = { top: -50, left: -400 };
                (0, a.scrollIntoView)(n, u, !0);
              }
            },
          },
          {
            key: "_reset",
            value: function () {
              (this._highlightMatches = !1),
                (this._scrollMatches = !1),
                (this._pdfDocument = null),
                (this._pageMatches = []),
                (this._pageMatchesLength = []),
                (this._state = null),
                (this._selected = { pageIdx: -1, matchIdx: -1 }),
                (this._offset = { pageIdx: null, matchIdx: null, wrapped: !1 }),
                (this._extractTextPromises = []),
                (this._pageContents = []),
                (this._matchesCountTotal = 0),
                (this._pagesToSearch = null),
                (this._pendingFindMatches = Object.create(null)),
                (this._resumePageIdx = null),
                (this._dirtyMatch = !1),
                clearTimeout(this._findTimeout),
                (this._findTimeout = null),
                (this._firstPageCapability = (0, i.createPromiseCapability)());
            },
          },
          {
            key: "_shouldDirtyMatch",
            value: function (e, t) {
              if (t.query !== this._state.query) return !0;
              switch (e) {
                case "findagain":
                  var n = this._selected.pageIdx + 1,
                    i = this._linkService;
                  return (
                    n >= 1 &&
                    n <= i.pagesCount &&
                    n !== i.page &&
                    !i.isPageVisible(n)
                  );
                case "findhighlightallchange":
                  return !1;
              }
              return !0;
            },
          },
          {
            key: "_prepareMatches",
            value: function (e, t, n) {
              function i(t) {
                var n = e[t],
                  i = e[t + 1];
                if (t < e.length - 1 && n.match === i.match)
                  return (n.skipped = !0), !0;
                for (var r = t - 1; r >= 0; r--) {
                  var a = e[r];
                  if (!a.skipped) {
                    if (a.match + a.matchLength < n.match) break;
                    if (a.match + a.matchLength >= n.match + n.matchLength)
                      return (n.skipped = !0), !0;
                  }
                }
                return !1;
              }
              e.sort(function (e, t) {
                return e.match === t.match
                  ? e.matchLength - t.matchLength
                  : e.match - t.match;
              });
              for (var r = 0, a = e.length; r < a; r++)
                i(r) || (t.push(e[r].match), n.push(e[r].matchLength));
            },
          },
          {
            key: "_isEntireWord",
            value: function (e, t, n) {
              if (t > 0) {
                var i = e.charCodeAt(t),
                  a = e.charCodeAt(t - 1);
                if ((0, r.getCharacterType)(i) === (0, r.getCharacterType)(a))
                  return !1;
              }
              var o = t + n - 1;
              if (o < e.length - 1) {
                var s = e.charCodeAt(o),
                  u = e.charCodeAt(o + 1);
                if ((0, r.getCharacterType)(s) === (0, r.getCharacterType)(u))
                  return !1;
              }
              return !0;
            },
          },
          {
            key: "_calculatePhraseMatch",
            value: function (e, t, n, i) {
              for (
                var r = [], a = e.length, o = -a;
                -1 !== (o = n.indexOf(e, o + a));

              )
                (i && !this._isEntireWord(n, o, a)) || r.push(o);
              this._pageMatches[t] = r;
            },
          },
          {
            key: "_calculateWordMatch",
            value: function (e, t, n, i) {
              for (
                var r = [], a = e.match(/\S+/g), o = 0, s = a.length;
                o < s;
                o++
              )
                for (
                  var u = a[o], l = u.length, c = -l;
                  -1 !== (c = n.indexOf(u, c + l));

                )
                  (i && !this._isEntireWord(n, c, l)) ||
                    r.push({ match: c, matchLength: l, skipped: !1 });
              (this._pageMatchesLength[t] = []),
                (this._pageMatches[t] = []),
                this._prepareMatches(
                  r,
                  this._pageMatches[t],
                  this._pageMatchesLength[t]
                );
            },
          },
          {
            key: "_calculateMatch",
            value: function (e) {
              var t = this._pageContents[e],
                n = this._query,
                i = this._state,
                r = i.caseSensitive,
                a = i.entireWord,
                o = i.phraseSearch;
              if (0 !== n.length) {
                r || ((t = t.toLowerCase()), (n = n.toLowerCase())),
                  o
                    ? this._calculatePhraseMatch(n, e, t, a)
                    : this._calculateWordMatch(n, e, t, a),
                  this._state.highlightAll && this._updatePage(e),
                  this._resumePageIdx === e &&
                    ((this._resumePageIdx = null), this._nextPageMatch());
                var s = this._pageMatches[e].length;
                s > 0 &&
                  ((this._matchesCountTotal += s),
                  this._updateUIResultsCount());
              }
            },
          },
          {
            key: "_extractText",
            value: function () {
              var e = this;
              if (!(this._extractTextPromises.length > 0))
                for (
                  var t = Promise.resolve(),
                    n = function (n, r) {
                      var a = (0, i.createPromiseCapability)();
                      (e._extractTextPromises[n] = a.promise),
                        (t = t.then(function () {
                          return e._pdfDocument
                            .getPage(n + 1)
                            .then(function (e) {
                              return e.getTextContent({
                                normalizeWhitespace: !0,
                              });
                            })
                            .then(
                              function (t) {
                                for (
                                  var i = t.items, r = [], o = 0, s = i.length;
                                  o < s;
                                  o++
                                )
                                  r.push(i[o].str);
                                (e._pageContents[n] = c(r.join(""))),
                                  a.resolve(n);
                              },
                              function (t) {
                                console.error(
                                  "Unable to get text content for page ".concat(
                                    n + 1
                                  ),
                                  t
                                ),
                                  (e._pageContents[n] = ""),
                                  a.resolve(n);
                              }
                            );
                        }));
                    },
                    r = 0,
                    a = this._linkService.pagesCount;
                  r < a;
                  r++
                )
                  n(r);
            },
          },
          {
            key: "_updatePage",
            value: function (e) {
              this._scrollMatches &&
                this._selected.pageIdx === e &&
                (this._linkService.page = e + 1),
                this._eventBus.dispatch("updatetextlayermatches", {
                  source: this,
                  pageIndex: e,
                });
            },
          },
          {
            key: "_updateAllPages",
            value: function () {
              this._eventBus.dispatch("updatetextlayermatches", {
                source: this,
                pageIndex: -1,
              });
            },
          },
          {
            key: "_nextMatch",
            value: function () {
              var e = this,
                t = this._state.findPrevious,
                n = this._linkService.page - 1,
                i = this._linkService.pagesCount;
              if (((this._highlightMatches = !0), this._dirtyMatch)) {
                (this._dirtyMatch = !1),
                  (this._selected.pageIdx = this._selected.matchIdx = -1),
                  (this._offset.pageIdx = n),
                  (this._offset.matchIdx = null),
                  (this._offset.wrapped = !1),
                  (this._resumePageIdx = null),
                  (this._pageMatches.length = 0),
                  (this._pageMatchesLength.length = 0),
                  (this._matchesCountTotal = 0),
                  this._updateAllPages();
                for (var r = 0; r < i; r++)
                  !0 !== this._pendingFindMatches[r] &&
                    ((this._pendingFindMatches[r] = !0),
                    this._extractTextPromises[r].then(function (t) {
                      delete e._pendingFindMatches[t], e._calculateMatch(t);
                    }));
              }
              if ("" !== this._query) {
                if (!this._resumePageIdx) {
                  var a = this._offset;
                  if (((this._pagesToSearch = i), null !== a.matchIdx)) {
                    var o = this._pageMatches[a.pageIdx].length;
                    if ((!t && a.matchIdx + 1 < o) || (t && a.matchIdx > 0))
                      return (
                        (a.matchIdx = t ? a.matchIdx - 1 : a.matchIdx + 1),
                        void this._updateMatch(!0)
                      );
                    this._advanceOffsetPage(t);
                  }
                  this._nextPageMatch();
                }
              } else this._updateUIState(s.FOUND);
            },
          },
          {
            key: "_matchesReady",
            value: function (e) {
              var t = this._offset,
                n = e.length,
                i = this._state.findPrevious;
              return n
                ? ((t.matchIdx = i ? n - 1 : 0), this._updateMatch(!0), !0)
                : (this._advanceOffsetPage(i),
                  !!(
                    t.wrapped && ((t.matchIdx = null), this._pagesToSearch < 0)
                  ) && (this._updateMatch(!1), !0));
            },
          },
          {
            key: "_nextPageMatch",
            value: function () {
              null !== this._resumePageIdx &&
                console.error("There can only be one pending page.");
              var e = null;
              do {
                var t = this._offset.pageIdx;
                if (!(e = this._pageMatches[t])) {
                  this._resumePageIdx = t;
                  break;
                }
              } while (!this._matchesReady(e));
            },
          },
          {
            key: "_advanceOffsetPage",
            value: function (e) {
              var t = this._offset,
                n = this._linkService.pagesCount;
              (t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1),
                (t.matchIdx = null),
                this._pagesToSearch--,
                (t.pageIdx >= n || t.pageIdx < 0) &&
                  ((t.pageIdx = e ? n - 1 : 0), (t.wrapped = !0));
            },
          },
          {
            key: "_updateMatch",
            value: function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = s.NOT_FOUND,
                n = this._offset.wrapped;
              if (((this._offset.wrapped = !1), e)) {
                var i = this._selected.pageIdx;
                (this._selected.pageIdx = this._offset.pageIdx),
                  (this._selected.matchIdx = this._offset.matchIdx),
                  (t = n ? s.WRAPPED : s.FOUND),
                  -1 !== i &&
                    i !== this._selected.pageIdx &&
                    this._updatePage(i);
              }
              this._updateUIState(t, this._state.findPrevious),
                -1 !== this._selected.pageIdx &&
                  ((this._scrollMatches = !0),
                  this._updatePage(this._selected.pageIdx));
            },
          },
          {
            key: "_onFindBarClose",
            value: function (e) {
              var t = this,
                n = this._pdfDocument;
              this._firstPageCapability.promise.then(function () {
                !t._pdfDocument ||
                  (n && t._pdfDocument !== n) ||
                  (t._findTimeout &&
                    (clearTimeout(t._findTimeout), (t._findTimeout = null)),
                  t._resumePageIdx &&
                    ((t._resumePageIdx = null), (t._dirtyMatch = !0)),
                  t._updateUIState(s.FOUND),
                  (t._highlightMatches = !1),
                  t._updateAllPages());
              });
            },
          },
          {
            key: "_requestMatchesCount",
            value: function () {
              var e = this._selected,
                t = e.pageIdx,
                n = e.matchIdx,
                i = 0,
                r = this._matchesCountTotal;
              if (-1 !== n) {
                for (var a = 0; a < t; a++)
                  i +=
                    (this._pageMatches[a] && this._pageMatches[a].length) || 0;
                i += n + 1;
              }
              return (i < 1 || i > r) && (i = r = 0), { current: i, total: r };
            },
          },
          {
            key: "_updateUIResultsCount",
            value: function () {
              this._eventBus.dispatch("updatefindmatchescount", {
                source: this,
                matchesCount: this._requestMatchesCount(),
              });
            },
          },
          {
            key: "_updateUIState",
            value: function (e, t) {
              this._eventBus.dispatch("updatefindcontrolstate", {
                source: this,
                state: e,
                previous: t,
                matchesCount: this._requestMatchesCount(),
              });
            },
          },
          {
            key: "highlightMatches",
            get: function () {
              return this._highlightMatches;
            },
          },
          {
            key: "pageMatches",
            get: function () {
              return this._pageMatches;
            },
          },
          {
            key: "pageMatchesLength",
            get: function () {
              return this._pageMatchesLength;
            },
          },
          {
            key: "selected",
            get: function () {
              return this._selected;
            },
          },
          {
            key: "state",
            get: function () {
              return this._state;
            },
          },
          {
            key: "_query",
            get: function () {
              return (
                this._state.query !== this._rawQuery &&
                  ((this._rawQuery = this._state.query),
                  (this._normalizedQuery = c(this._state.query))),
                this._normalizedQuery
              );
            },
          },
        ]) && o(t.prototype, n),
        u && o(t, u),
        e
      );
    })();
    t.PDFFindController = d;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getCharacterType = function (e) {
        if (
          (function (e) {
            return e < 11904;
          })(e)
        )
          return (function (e) {
            return 0 == (65408 & e);
          })(e)
            ? (function (e) {
                return 32 === e || 9 === e || 13 === e || 10 === e;
              })(e)
              ? i.SPACE
              : (function (e) {
                  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
                })(e) ||
                (function (e) {
                  return e >= 48 && e <= 57;
                })(e) ||
                95 === e
              ? i.ALPHA_LETTER
              : i.PUNCT
            : (function (e) {
                return 3584 == (65408 & e);
              })(e)
            ? i.THAI_LETTER
            : 160 === e
            ? i.SPACE
            : i.ALPHA_LETTER;
        if (
          (function (e) {
            return (e >= 13312 && e <= 40959) || (e >= 63744 && e <= 64255);
          })(e)
        )
          return i.HAN_LETTER;
        if (
          (function (e) {
            return e >= 12448 && e <= 12543;
          })(e)
        )
          return i.KATAKANA_LETTER;
        if (
          (function (e) {
            return e >= 12352 && e <= 12447;
          })(e)
        )
          return i.HIRAGANA_LETTER;
        if (
          (function (e) {
            return e >= 65376 && e <= 65439;
          })(e)
        )
          return i.HALFWIDTH_KATAKANA_LETTER;
        return i.ALPHA_LETTER;
      }),
      (t.CharacterType = void 0);
    var i = {
      SPACE: 0,
      ALPHA_LETTER: 1,
      PUNCT: 2,
      HAN_LETTER: 3,
      KATAKANA_LETTER: 4,
      HIRAGANA_LETTER: 5,
      HALFWIDTH_KATAKANA_LETTER: 6,
      THAI_LETTER: 7,
    };
    t.CharacterType = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isDestHashesEqual = c),
      (t.isDestArraysEqual = d),
      (t.PDFHistory = void 0);
    var i = n(5);
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function a(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            i = !0,
            r = !1,
            a = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(i = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              i = !0
            );
          } catch (e) {
            (r = !0), (a = e);
          } finally {
            try {
              i || null == s.return || s.return();
            } finally {
              if (r) throw a;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return o(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function u() {
      return document.location.hash;
    }
    var l = (function () {
      function e(t) {
        var n = this,
          i = t.linkService,
          r = t.eventBus;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.linkService = i),
          (this.eventBus = r),
          (this._initialized = !1),
          (this._fingerprint = ""),
          this.reset(),
          (this._boundEvents = null),
          (this._isViewerInPresentationMode = !1),
          this.eventBus._on("presentationmodechanged", function (e) {
            n._isViewerInPresentationMode = e.active || e.switchInProgress;
          }),
          this.eventBus._on("pagesinit", function () {
            n._isPagesLoaded = !1;
            n.eventBus._on("pagesloaded", function e(t) {
              n.eventBus._off("pagesloaded", e),
                (n._isPagesLoaded = !!t.pagesCount);
            });
          });
      }
      var t, n, o;
      return (
        (t = e),
        (n = [
          {
            key: "initialize",
            value: function (e) {
              var t = e.fingerprint,
                n = e.resetHistory,
                i = void 0 !== n && n,
                r = e.updateUrl,
                a = void 0 !== r && r;
              if (t && "string" == typeof t) {
                this._initialized && this.reset();
                var o = "" !== this._fingerprint && this._fingerprint !== t;
                (this._fingerprint = t),
                  (this._updateUrl = !0 === a),
                  (this._initialized = !0),
                  this._bindEvents();
                var s = window.history.state;
                if (
                  ((this._popStateInProgress = !1),
                  (this._blockHashChange = 0),
                  (this._currentHash = u()),
                  (this._numPositionUpdates = 0),
                  (this._uid = this._maxUid = 0),
                  (this._destination = null),
                  (this._position = null),
                  !this._isValidState(s, !0) || i)
                ) {
                  var l = this._parseCurrentHash(!0),
                    c = l.hash,
                    d = l.page,
                    h = l.rotation;
                  return !c || o || i
                    ? void this._pushOrReplaceState(null, !0)
                    : void this._pushOrReplaceState(
                        { hash: c, page: d, rotation: h },
                        !0
                      );
                }
                var f = s.destination;
                this._updateInternalState(f, s.uid, !0),
                  this._uid > this._maxUid && (this._maxUid = this._uid),
                  void 0 !== f.rotation && (this._initialRotation = f.rotation),
                  f.dest
                    ? ((this._initialBookmark = JSON.stringify(f.dest)),
                      (this._destination.page = null))
                    : f.hash
                    ? (this._initialBookmark = f.hash)
                    : f.page &&
                      (this._initialBookmark = "page=".concat(f.page));
              } else
                console.error(
                  'PDFHistory.initialize: The "fingerprint" must be a non-empty string.'
                );
            },
          },
          {
            key: "reset",
            value: function () {
              this._initialized &&
                (this._pageHide(),
                (this._initialized = !1),
                this._unbindEvents()),
                this._updateViewareaTimeout &&
                  (clearTimeout(this._updateViewareaTimeout),
                  (this._updateViewareaTimeout = null)),
                (this._initialBookmark = null),
                (this._initialRotation = null);
            },
          },
          {
            key: "push",
            value: function (e) {
              var t = this,
                n = e.namedDest,
                i = void 0 === n ? null : n,
                r = e.explicitDest,
                a = e.pageNumber;
              if (this._initialized)
                if (i && "string" != typeof i)
                  console.error(
                    "PDFHistory.push: " +
                      '"'.concat(i, '" is not a valid namedDest parameter.')
                  );
                else if (Array.isArray(r))
                  if (
                    (Number.isInteger(a) &&
                      a > 0 &&
                      a <= this.linkService.pagesCount) ||
                    (null === a && !this._destination)
                  ) {
                    var o = i || JSON.stringify(r);
                    if (o) {
                      var s = !1;
                      if (
                        this._destination &&
                        (c(this._destination.hash, o) ||
                          d(this._destination.dest, r))
                      ) {
                        if (this._destination.page) return;
                        s = !0;
                      }
                      (this._popStateInProgress && !s) ||
                        (this._pushOrReplaceState(
                          {
                            dest: r,
                            hash: o,
                            page: a,
                            rotation: this.linkService.rotation,
                          },
                          s
                        ),
                        this._popStateInProgress ||
                          ((this._popStateInProgress = !0),
                          Promise.resolve().then(function () {
                            t._popStateInProgress = !1;
                          })));
                    }
                  } else
                    console.error(
                      "PDFHistory.push: " +
                        '"'.concat(a, '" is not a valid pageNumber parameter.')
                    );
                else
                  console.error(
                    "PDFHistory.push: " +
                      '"'.concat(r, '" is not a valid explicitDest parameter.')
                  );
            },
          },
          {
            key: "pushCurrentPosition",
            value: function () {
              this._initialized &&
                !this._popStateInProgress &&
                this._tryPushCurrentPosition();
            },
          },
          {
            key: "back",
            value: function () {
              if (this._initialized && !this._popStateInProgress) {
                var e = window.history.state;
                this._isValidState(e) && e.uid > 0 && window.history.back();
              }
            },
          },
          {
            key: "forward",
            value: function () {
              if (this._initialized && !this._popStateInProgress) {
                var e = window.history.state;
                this._isValidState(e) &&
                  e.uid < this._maxUid &&
                  window.history.forward();
              }
            },
          },
          {
            key: "_pushOrReplaceState",
            value: function (e) {
              var t,
                n =
                  (arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1]) ||
                  !this._destination,
                i = {
                  fingerprint: this._fingerprint,
                  uid: n ? this._uid : this._uid + 1,
                  destination: e,
                };
              if (
                (this._updateInternalState(e, i.uid),
                this._updateUrl && e && e.hash)
              ) {
                var r = document.location.href.split("#")[0];
                r.startsWith("file://") ||
                  (t = "".concat(r, "#").concat(e.hash));
              }
              n
                ? window.history.replaceState(i, "", t)
                : ((this._maxUid = this._uid),
                  window.history.pushState(i, "", t));
            },
          },
          {
            key: "_tryPushCurrentPosition",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (this._position) {
                var t = this._position;
                if (
                  (e &&
                    ((t = Object.assign(
                      Object.create(null),
                      this._position
                    )).temporary = !0),
                  this._destination)
                ) {
                  if (this._destination.temporary)
                    this._pushOrReplaceState(t, !0);
                  else if (
                    this._destination.hash !== t.hash &&
                    (this._destination.page ||
                      !(this._numPositionUpdates <= 50))
                  ) {
                    var n = !1;
                    if (
                      this._destination.page >= t.first &&
                      this._destination.page <= t.page
                    ) {
                      if (this._destination.dest || !this._destination.first)
                        return;
                      n = !0;
                    }
                    this._pushOrReplaceState(t, n);
                  }
                } else this._pushOrReplaceState(t);
              }
            },
          },
          {
            key: "_isValidState",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!e) return !1;
              if (e.fingerprint !== this._fingerprint) {
                if (!t) return !1;
                if (
                  "string" != typeof e.fingerprint ||
                  e.fingerprint.length !== this._fingerprint.length
                )
                  return !1;
                var n = a(performance.getEntriesByType("navigation"), 1)[0];
                if (!n || "reload" !== n.type) return !1;
              }
              return (
                !(!Number.isInteger(e.uid) || e.uid < 0) &&
                null !== e.destination &&
                "object" === r(e.destination)
              );
            },
          },
          {
            key: "_updateInternalState",
            value: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              this._updateViewareaTimeout &&
                (clearTimeout(this._updateViewareaTimeout),
                (this._updateViewareaTimeout = null)),
                n && e && e.temporary && delete e.temporary,
                (this._destination = e),
                (this._uid = t),
                (this._numPositionUpdates = 0);
            },
          },
          {
            key: "_parseCurrentHash",
            value: function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = unescape(u()).substring(1),
                n = (0, i.parseQueryString)(t),
                r = n.nameddest || "",
                a = 0 | n.page;
              return (
                (Number.isInteger(a) &&
                  a > 0 &&
                  a <= this.linkService.pagesCount &&
                  !(e && r.length > 0)) ||
                  (a = null),
                { hash: t, page: a, rotation: this.linkService.rotation }
              );
            },
          },
          {
            key: "_updateViewarea",
            value: function (e) {
              var t = this,
                n = e.location;
              this._updateViewareaTimeout &&
                (clearTimeout(this._updateViewareaTimeout),
                (this._updateViewareaTimeout = null)),
                (this._position = {
                  hash: this._isViewerInPresentationMode
                    ? "page=".concat(n.pageNumber)
                    : n.pdfOpenParams.substring(1),
                  page: this.linkService.page,
                  first: n.pageNumber,
                  rotation: n.rotation,
                }),
                this._popStateInProgress ||
                  (this._isPagesLoaded &&
                    this._destination &&
                    !this._destination.page &&
                    this._numPositionUpdates++,
                  (this._updateViewareaTimeout = setTimeout(function () {
                    t._popStateInProgress || t._tryPushCurrentPosition(!0),
                      (t._updateViewareaTimeout = null);
                  }, 1e3)));
            },
          },
          {
            key: "_popState",
            value: function (e) {
              var t = this,
                n = e.state,
                r = u(),
                a = this._currentHash !== r;
              if (((this._currentHash = r), n)) {
                if (this._isValidState(n)) {
                  (this._popStateInProgress = !0),
                    a &&
                      (this._blockHashChange++,
                      (0, i.waitOnEventOrTimeout)({
                        target: window,
                        name: "hashchange",
                        delay: 1e3,
                      }).then(function () {
                        t._blockHashChange--;
                      }));
                  var o = n.destination;
                  this._updateInternalState(o, n.uid, !0),
                    this._uid > this._maxUid && (this._maxUid = this._uid),
                    (0, i.isValidRotation)(o.rotation) &&
                      (this.linkService.rotation = o.rotation),
                    o.dest
                      ? this.linkService.navigateTo(o.dest)
                      : o.hash
                      ? this.linkService.setHash(o.hash)
                      : o.page && (this.linkService.page = o.page),
                    Promise.resolve().then(function () {
                      t._popStateInProgress = !1;
                    });
                }
              } else {
                this._uid++;
                var s = this._parseCurrentHash(),
                  l = s.hash,
                  c = s.page,
                  d = s.rotation;
                this._pushOrReplaceState({ hash: l, page: c, rotation: d }, !0);
              }
            },
          },
          {
            key: "_pageHide",
            value: function () {
              (this._destination && !this._destination.temporary) ||
                this._tryPushCurrentPosition();
            },
          },
          {
            key: "_bindEvents",
            value: function () {
              this._boundEvents ||
                ((this._boundEvents = {
                  updateViewarea: this._updateViewarea.bind(this),
                  popState: this._popState.bind(this),
                  pageHide: this._pageHide.bind(this),
                }),
                this.eventBus._on(
                  "updateviewarea",
                  this._boundEvents.updateViewarea
                ),
                window.addEventListener("popstate", this._boundEvents.popState),
                window.addEventListener(
                  "pagehide",
                  this._boundEvents.pageHide
                ));
            },
          },
          {
            key: "_unbindEvents",
            value: function () {
              this._boundEvents &&
                (this.eventBus._off(
                  "updateviewarea",
                  this._boundEvents.updateViewarea
                ),
                window.removeEventListener(
                  "popstate",
                  this._boundEvents.popState
                ),
                window.removeEventListener(
                  "pagehide",
                  this._boundEvents.pageHide
                ),
                (this._boundEvents = null));
            },
          },
          {
            key: "popStateInProgress",
            get: function () {
              return (
                this._initialized &&
                (this._popStateInProgress || this._blockHashChange > 0)
              );
            },
          },
          {
            key: "initialBookmark",
            get: function () {
              return this._initialized ? this._initialBookmark : null;
            },
          },
          {
            key: "initialRotation",
            get: function () {
              return this._initialized ? this._initialRotation : null;
            },
          },
        ]) && s(t.prototype, n),
        o && s(t, o),
        e
      );
    })();
    function c(e, t) {
      return (
        "string" == typeof e &&
        "string" == typeof t &&
        (e === t || (0, i.parseQueryString)(e).nameddest === t)
      );
    }
    function d(e, t) {
      function n(e, t) {
        if (r(e) !== r(t)) return !1;
        if (Array.isArray(e) || Array.isArray(t)) return !1;
        if (null !== e && "object" === r(e) && null !== t) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (var i in e) if (!n(e[i], t[i])) return !1;
          return !0;
        }
        return e === t || (Number.isNaN(e) && Number.isNaN(t));
      }
      if (!Array.isArray(e) || !Array.isArray(t)) return !1;
      if (e.length !== t.length) return !1;
      for (var i = 0, a = e.length; i < a; i++) if (!n(e[i], t[i])) return !1;
      return !0;
    }
    t.PDFHistory = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SimpleLinkService = t.PDFLinkService = void 0);
    var i = n(5);
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function s(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    }
    var u = (function () {
      function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.eventBus,
          i = t.externalLinkTarget,
          r = void 0 === i ? null : i,
          o = t.externalLinkRel,
          s = void 0 === o ? null : o,
          u = t.externalLinkEnabled,
          l = void 0 === u || u,
          c = t.ignoreDestinationZoom,
          d = void 0 !== c && c;
        a(this, e),
          (this.eventBus = n),
          (this.externalLinkTarget = r),
          (this.externalLinkRel = s),
          (this.externalLinkEnabled = l),
          (this._ignoreDestinationZoom = d),
          (this.baseUrl = null),
          (this.pdfDocument = null),
          (this.pdfViewer = null),
          (this.pdfHistory = null),
          (this._pagesRefCache = null);
      }
      return (
        s(e, [
          {
            key: "setDocument",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              (this.baseUrl = t),
                (this.pdfDocument = e),
                (this._pagesRefCache = Object.create(null));
            },
          },
          {
            key: "setViewer",
            value: function (e) {
              this.pdfViewer = e;
            },
          },
          {
            key: "setHistory",
            value: function (e) {
              this.pdfHistory = e;
            },
          },
          {
            key: "navigateTo",
            value: function (e) {
              var t = this;
              new Promise(function (n, i) {
                "string" != typeof e
                  ? n({ namedDest: "", explicitDest: e })
                  : t.pdfDocument.getDestination(e).then(function (t) {
                      n({ namedDest: e, explicitDest: t });
                    });
              }).then(function (n) {
                Array.isArray(n.explicitDest)
                  ? (function n(i) {
                      var r,
                        a = i.namedDest,
                        o = i.explicitDest,
                        s = o[0];
                      if (s instanceof Object) {
                        if (null === (r = t._cachedPageNumber(s)))
                          return void t.pdfDocument
                            .getPageIndex(s)
                            .then(function (e) {
                              t.cachePageRef(e + 1, s),
                                n({ namedDest: a, explicitDest: o });
                            })
                            .catch(function () {
                              console.error(
                                'PDFLinkService.navigateTo: "'.concat(
                                  s,
                                  '" is not '
                                ) +
                                  'a valid page reference, for dest="'.concat(
                                    e,
                                    '".'
                                  )
                              );
                            });
                      } else {
                        if (!Number.isInteger(s))
                          return void console.error(
                            'PDFLinkService.navigateTo: "'.concat(
                              s,
                              '" is not '
                            ) +
                              'a valid destination reference, for dest="'.concat(
                                e,
                                '".'
                              )
                          );
                        r = s + 1;
                      }
                      !r || r < 1 || r > t.pagesCount
                        ? console.error(
                            'PDFLinkService.navigateTo: "'.concat(
                              r,
                              '" is not '
                            ) +
                              'a valid page number, for dest="'.concat(e, '".')
                          )
                        : (t.pdfHistory &&
                            (t.pdfHistory.pushCurrentPosition(),
                            t.pdfHistory.push({
                              namedDest: a,
                              explicitDest: o,
                              pageNumber: r,
                            })),
                          t.pdfViewer.scrollPageIntoView({
                            pageNumber: r,
                            destArray: o,
                            ignoreDestinationZoom: t._ignoreDestinationZoom,
                          }));
                    })(n)
                  : console.error(
                      'PDFLinkService.navigateTo: "'.concat(
                        n.explicitDest,
                        '" is'
                      ) +
                        ' not a valid destination array, for dest="'.concat(
                          e,
                          '".'
                        )
                    );
              });
            },
          },
          {
            key: "getDestinationHash",
            value: function (e) {
              if ("string" == typeof e)
                return this.getAnchorUrl("#" + escape(e));
              if (Array.isArray(e)) {
                var t = JSON.stringify(e);
                return this.getAnchorUrl("#" + escape(t));
              }
              return this.getAnchorUrl("");
            },
          },
          {
            key: "getAnchorUrl",
            value: function (e) {
              return (this.baseUrl || "") + e;
            },
          },
          {
            key: "setHash",
            value: function (e) {
              var t, n;
              if (e.includes("=")) {
                var a = (0, i.parseQueryString)(e);
                if (
                  ("search" in a &&
                    this.eventBus.dispatch("findfromurlhash", {
                      source: this,
                      query: a.search.replace(/"/g, ""),
                      phraseSearch: "true" === a.phrase,
                    }),
                  "page" in a && (t = 0 | a.page || 1),
                  "zoom" in a)
                ) {
                  var o = a.zoom.split(","),
                    s = o[0],
                    u = parseFloat(s);
                  s.includes("Fit")
                    ? "Fit" === s || "FitB" === s
                      ? (n = [null, { name: s }])
                      : "FitH" === s ||
                        "FitBH" === s ||
                        "FitV" === s ||
                        "FitBV" === s
                      ? (n = [
                          null,
                          { name: s },
                          o.length > 1 ? 0 | o[1] : null,
                        ])
                      : "FitR" === s
                      ? 5 !== o.length
                        ? console.error(
                            'PDFLinkService.setHash: Not enough parameters for "FitR".'
                          )
                        : (n = [
                            null,
                            { name: s },
                            0 | o[1],
                            0 | o[2],
                            0 | o[3],
                            0 | o[4],
                          ])
                      : console.error(
                          'PDFLinkService.setHash: "'.concat(s, '" is not ') +
                            "a valid zoom value."
                        )
                    : (n = [
                        null,
                        { name: "XYZ" },
                        o.length > 1 ? 0 | o[1] : null,
                        o.length > 2 ? 0 | o[2] : null,
                        u ? u / 100 : s,
                      ]);
                }
                n
                  ? this.pdfViewer.scrollPageIntoView({
                      pageNumber: t || this.page,
                      destArray: n,
                      allowNegativeOffset: !0,
                    })
                  : t && (this.page = t),
                  "pagemode" in a &&
                    this.eventBus.dispatch("pagemode", {
                      source: this,
                      mode: a.pagemode,
                    }),
                  "nameddest" in a && this.navigateTo(a.nameddest);
              } else {
                n = unescape(e);
                try {
                  (n = JSON.parse(n)), Array.isArray(n) || (n = n.toString());
                } catch (e) {}
                if (
                  "string" == typeof n ||
                  (function (e) {
                    if (!Array.isArray(e)) return !1;
                    var t = e.length;
                    if (t < 2) return !1;
                    var n = e[0];
                    if (
                      !(
                        ("object" === r(n) &&
                          Number.isInteger(n.num) &&
                          Number.isInteger(n.gen)) ||
                        (Number.isInteger(n) && n >= 0)
                      )
                    )
                      return !1;
                    var i = e[1];
                    if ("object" !== r(i) || "string" != typeof i.name)
                      return !1;
                    var a = !0;
                    switch (i.name) {
                      case "XYZ":
                        if (5 !== t) return !1;
                        break;
                      case "Fit":
                      case "FitB":
                        return 2 === t;
                      case "FitH":
                      case "FitBH":
                      case "FitV":
                      case "FitBV":
                        if (3 !== t) return !1;
                        break;
                      case "FitR":
                        if (6 !== t) return !1;
                        a = !1;
                        break;
                      default:
                        return !1;
                    }
                    for (var o = 2; o < t; o++) {
                      var s = e[o];
                      if (!("number" == typeof s || (a && null === s)))
                        return !1;
                    }
                    return !0;
                  })(n)
                )
                  return void this.navigateTo(n);
                console.error(
                  'PDFLinkService.setHash: "'.concat(unescape(e), '" is not ') +
                    "a valid destination."
                );
              }
            },
          },
          {
            key: "executeNamedAction",
            value: function (e) {
              switch (e) {
                case "GoBack":
                  this.pdfHistory && this.pdfHistory.back();
                  break;
                case "GoForward":
                  this.pdfHistory && this.pdfHistory.forward();
                  break;
                case "NextPage":
                  this.page < this.pagesCount && this.page++;
                  break;
                case "PrevPage":
                  this.page > 1 && this.page--;
                  break;
                case "LastPage":
                  this.page = this.pagesCount;
                  break;
                case "FirstPage":
                  this.page = 1;
              }
              this.eventBus.dispatch("namedaction", {
                source: this,
                action: e,
              });
            },
          },
          {
            key: "cachePageRef",
            value: function (e, t) {
              if (t) {
                var n =
                  0 === t.gen
                    ? "".concat(t.num, "R")
                    : "".concat(t.num, "R").concat(t.gen);
                this._pagesRefCache[n] = e;
              }
            },
          },
          {
            key: "_cachedPageNumber",
            value: function (e) {
              var t =
                0 === e.gen
                  ? "".concat(e.num, "R")
                  : "".concat(e.num, "R").concat(e.gen);
              return (this._pagesRefCache && this._pagesRefCache[t]) || null;
            },
          },
          {
            key: "isPageVisible",
            value: function (e) {
              return this.pdfViewer.isPageVisible(e);
            },
          },
          {
            key: "pagesCount",
            get: function () {
              return this.pdfDocument ? this.pdfDocument.numPages : 0;
            },
          },
          {
            key: "page",
            get: function () {
              return this.pdfViewer.currentPageNumber;
            },
            set: function (e) {
              this.pdfViewer.currentPageNumber = e;
            },
          },
          {
            key: "rotation",
            get: function () {
              return this.pdfViewer.pagesRotation;
            },
            set: function (e) {
              this.pdfViewer.pagesRotation = e;
            },
          },
        ]),
        e
      );
    })();
    t.PDFLinkService = u;
    var l = (function () {
      function e() {
        a(this, e),
          (this.externalLinkTarget = null),
          (this.externalLinkRel = null),
          (this.externalLinkEnabled = !0),
          (this._ignoreDestinationZoom = !1);
      }
      return (
        s(e, [
          { key: "navigateTo", value: function (e) {} },
          {
            key: "getDestinationHash",
            value: function (e) {
              return "#";
            },
          },
          {
            key: "getAnchorUrl",
            value: function (e) {
              return "#";
            },
          },
          { key: "setHash", value: function (e) {} },
          { key: "executeNamedAction", value: function (e) {} },
          { key: "cachePageRef", value: function (e, t) {} },
          {
            key: "isPageVisible",
            value: function (e) {
              return !0;
            },
          },
          {
            key: "pagesCount",
            get: function () {
              return 0;
            },
          },
          {
            key: "page",
            get: function () {
              return 0;
            },
            set: function (e) {},
          },
          {
            key: "rotation",
            get: function () {
              return 0;
            },
            set: function (e) {},
          },
        ]),
        e
      );
    })();
    t.SimpleLinkService = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFOutlineViewer = void 0);
    var i = n(8);
    function r(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return a(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var i = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (e) {
              throw e;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o,
        s = !0,
        u = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return (s = e.done), e;
        },
        e: function (e) {
          (u = !0), (o = e);
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (u) throw o;
          }
        },
      };
    }
    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var s = (function () {
      function e(t) {
        var n = t.container,
          i = t.linkService,
          r = t.eventBus;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.container = n),
          (this.linkService = i),
          (this.eventBus = r),
          this.reset(),
          r._on("toggleoutlinetree", this.toggleOutlineTree.bind(this));
      }
      var t, n, a;
      return (
        (t = e),
        (n = [
          {
            key: "reset",
            value: function () {
              (this.outline = null),
                (this.lastToggleIsShow = !0),
                (this.container.textContent = ""),
                this.container.classList.remove("outlineWithDeepNesting");
            },
          },
          {
            key: "_dispatchEvent",
            value: function (e) {
              this.eventBus.dispatch("outlineloaded", {
                source: this,
                outlineCount: e,
              });
            },
          },
          {
            key: "_bindLink",
            value: function (e, t) {
              var n = t.url,
                r = t.newWindow,
                a = t.dest,
                o = this.linkService;
              n
                ? (0, i.addLinkAttributes)(e, {
                    url: n,
                    target: r ? i.LinkTarget.BLANK : o.externalLinkTarget,
                    rel: o.externalLinkRel,
                    enabled: o.externalLinkEnabled,
                  })
                : ((e.href = o.getDestinationHash(a)),
                  (e.onclick = function () {
                    return a && o.navigateTo(a), !1;
                  }));
            },
          },
          {
            key: "_setStyles",
            value: function (e, t) {
              var n = t.bold,
                i = t.italic;
              n && (e.style.fontWeight = "bold"),
                i && (e.style.fontStyle = "italic");
            },
          },
          {
            key: "_addToggleButton",
            value: function (e, t) {
              var n = this,
                i = t.count,
                r = t.items,
                a = document.createElement("div");
              (a.className = "outlineItemToggler"),
                i < 0 &&
                  Math.abs(i) === r.length &&
                  a.classList.add("outlineItemsHidden"),
                (a.onclick = function (t) {
                  if (
                    (t.stopPropagation(),
                    a.classList.toggle("outlineItemsHidden"),
                    t.shiftKey)
                  ) {
                    var i = !a.classList.contains("outlineItemsHidden");
                    n._toggleOutlineItem(e, i);
                  }
                }),
                e.insertBefore(a, e.firstChild);
            },
          },
          {
            key: "_toggleOutlineItem",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              this.lastToggleIsShow = t;
              var n,
                i = r(e.querySelectorAll(".outlineItemToggler"));
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  n.value.classList.toggle("outlineItemsHidden", !t);
                }
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
            },
          },
          {
            key: "toggleOutlineTree",
            value: function () {
              this.outline &&
                this._toggleOutlineItem(this.container, !this.lastToggleIsShow);
            },
          },
          {
            key: "render",
            value: function (e) {
              var t = e.outline,
                n = 0;
              if (
                (this.outline && this.reset(), (this.outline = t || null), t)
              ) {
                for (
                  var a = document.createDocumentFragment(),
                    o = [{ parent: a, items: this.outline }],
                    s = !1;
                  o.length > 0;

                ) {
                  var u,
                    l = o.shift(),
                    c = r(l.items);
                  try {
                    for (c.s(); !(u = c.n()).done; ) {
                      var d = u.value,
                        h = document.createElement("div");
                      h.className = "outlineItem";
                      var f = document.createElement("a");
                      if (
                        (this._bindLink(f, d),
                        this._setStyles(f, d),
                        (f.textContent =
                          (0, i.removeNullCharacters)(d.title) || "–"),
                        h.appendChild(f),
                        d.items.length > 0)
                      ) {
                        (s = !0), this._addToggleButton(h, d);
                        var p = document.createElement("div");
                        (p.className = "outlineItems"),
                          h.appendChild(p),
                          o.push({ parent: p, items: d.items });
                      }
                      l.parent.appendChild(h), n++;
                    }
                  } catch (e) {
                    c.e(e);
                  } finally {
                    c.f();
                  }
                }
                s &&
                  (this.container.classList.add("outlineWithDeepNesting"),
                  (this.lastToggleIsShow =
                    0 === a.querySelectorAll(".outlineItemsHidden").length)),
                  this.container.appendChild(a),
                  this._dispatchEvent(n);
              } else this._dispatchEvent(n);
            },
          },
        ]) && o(t.prototype, n),
        a && o(t, a),
        e
      );
    })();
    t.PDFOutlineViewer = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFPresentationMode = void 0);
    var i = n(5);
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var a = Math.PI / 6,
      o = (function () {
        function e(t) {
          var n = this,
            i = t.container,
            r = t.pdfViewer,
            a = t.eventBus,
            o = t.contextMenuItems,
            s = void 0 === o ? null : o;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.container = i),
            (this.pdfViewer = r),
            (this.eventBus = a),
            (this.active = !1),
            (this.args = null),
            (this.contextMenuOpen = !1),
            (this.mouseScrollTimeStamp = 0),
            (this.mouseScrollDelta = 0),
            (this.touchSwipeState = null),
            s &&
              (s.contextFirstPage.addEventListener("click", function () {
                (n.contextMenuOpen = !1),
                  n.eventBus.dispatch("firstpage", { source: n });
              }),
              s.contextLastPage.addEventListener("click", function () {
                (n.contextMenuOpen = !1),
                  n.eventBus.dispatch("lastpage", { source: n });
              }),
              s.contextPageRotateCw.addEventListener("click", function () {
                (n.contextMenuOpen = !1),
                  n.eventBus.dispatch("rotatecw", { source: n });
              }),
              s.contextPageRotateCcw.addEventListener("click", function () {
                (n.contextMenuOpen = !1),
                  n.eventBus.dispatch("rotateccw", { source: n });
              }));
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "request",
              value: function () {
                if (
                  this.switchInProgress ||
                  this.active ||
                  !this.pdfViewer.pagesCount
                )
                  return !1;
                if (
                  (this._addFullscreenChangeListeners(),
                  this._setSwitchInProgress(),
                  this._notifyStateChange(),
                  this.container.requestFullscreen)
                )
                  this.container.requestFullscreen();
                else if (this.container.mozRequestFullScreen)
                  this.container.mozRequestFullScreen();
                else if (this.container.webkitRequestFullscreen)
                  this.container.webkitRequestFullscreen(
                    Element.ALLOW_KEYBOARD_INPUT
                  );
                else {
                  if (!this.container.msRequestFullscreen) return !1;
                  this.container.msRequestFullscreen();
                }
                return (
                  (this.args = {
                    page: this.pdfViewer.currentPageNumber,
                    previousScale: this.pdfViewer.currentScaleValue,
                  }),
                  !0
                );
              },
            },
            {
              key: "_mouseWheel",
              value: function (e) {
                if (this.active) {
                  e.preventDefault();
                  var t = (0, i.normalizeWheelEventDelta)(e),
                    n = new Date().getTime(),
                    r = this.mouseScrollTimeStamp;
                  if (
                    !(n > r && n - r < 50) &&
                    (((this.mouseScrollDelta > 0 && t < 0) ||
                      (this.mouseScrollDelta < 0 && t > 0)) &&
                      this._resetMouseScrollState(),
                    (this.mouseScrollDelta += t),
                    Math.abs(this.mouseScrollDelta) >= 0.1)
                  ) {
                    var a = this.mouseScrollDelta;
                    this._resetMouseScrollState(),
                      (a > 0
                        ? this._goToPreviousPage()
                        : this._goToNextPage()) &&
                        (this.mouseScrollTimeStamp = n);
                  }
                }
              },
            },
            {
              key: "_goToPreviousPage",
              value: function () {
                var e = this.pdfViewer.currentPageNumber;
                return (
                  !(e <= 1) && ((this.pdfViewer.currentPageNumber = e - 1), !0)
                );
              },
            },
            {
              key: "_goToNextPage",
              value: function () {
                var e = this.pdfViewer.currentPageNumber;
                return (
                  !(e >= this.pdfViewer.pagesCount) &&
                  ((this.pdfViewer.currentPageNumber = e + 1), !0)
                );
              },
            },
            {
              key: "_notifyStateChange",
              value: function () {
                this.eventBus.dispatch("presentationmodechanged", {
                  source: this,
                  active: this.active,
                  switchInProgress: !!this.switchInProgress,
                });
              },
            },
            {
              key: "_setSwitchInProgress",
              value: function () {
                var e = this;
                this.switchInProgress && clearTimeout(this.switchInProgress),
                  (this.switchInProgress = setTimeout(function () {
                    e._removeFullscreenChangeListeners(),
                      delete e.switchInProgress,
                      e._notifyStateChange();
                  }, 1500));
              },
            },
            {
              key: "_resetSwitchInProgress",
              value: function () {
                this.switchInProgress &&
                  (clearTimeout(this.switchInProgress),
                  delete this.switchInProgress);
              },
            },
            {
              key: "_enter",
              value: function () {
                var e = this;
                (this.active = !0),
                  this._resetSwitchInProgress(),
                  this._notifyStateChange(),
                  this.container.classList.add("pdfPresentationMode"),
                  setTimeout(function () {
                    (e.pdfViewer.currentPageNumber = e.args.page),
                      (e.pdfViewer.currentScaleValue = "page-fit");
                  }, 0),
                  this._addWindowListeners(),
                  this._showControls(),
                  (this.contextMenuOpen = !1),
                  this.container.setAttribute(
                    "contextmenu",
                    "viewerContextMenu"
                  ),
                  window.getSelection().removeAllRanges();
              },
            },
            {
              key: "_exit",
              value: function () {
                var e = this,
                  t = this.pdfViewer.currentPageNumber;
                this.container.classList.remove("pdfPresentationMode"),
                  setTimeout(function () {
                    (e.active = !1),
                      e._removeFullscreenChangeListeners(),
                      e._notifyStateChange(),
                      (e.pdfViewer.currentScaleValue = e.args.previousScale),
                      (e.pdfViewer.currentPageNumber = t),
                      (e.args = null);
                  }, 0),
                  this._removeWindowListeners(),
                  this._hideControls(),
                  this._resetMouseScrollState(),
                  this.container.removeAttribute("contextmenu"),
                  (this.contextMenuOpen = !1);
              },
            },
            {
              key: "_mouseDown",
              value: function (e) {
                if (this.contextMenuOpen)
                  return (this.contextMenuOpen = !1), void e.preventDefault();
                0 === e.button &&
                  ((e.target.href &&
                    e.target.classList.contains("internalLink")) ||
                    (e.preventDefault(),
                    e.shiftKey
                      ? this._goToPreviousPage()
                      : this._goToNextPage()));
              },
            },
            {
              key: "_contextMenu",
              value: function () {
                this.contextMenuOpen = !0;
              },
            },
            {
              key: "_showControls",
              value: function () {
                var e = this;
                this.controlsTimeout
                  ? clearTimeout(this.controlsTimeout)
                  : this.container.classList.add("pdfPresentationModeControls"),
                  (this.controlsTimeout = setTimeout(function () {
                    e.container.classList.remove("pdfPresentationModeControls"),
                      delete e.controlsTimeout;
                  }, 3e3));
              },
            },
            {
              key: "_hideControls",
              value: function () {
                this.controlsTimeout &&
                  (clearTimeout(this.controlsTimeout),
                  this.container.classList.remove(
                    "pdfPresentationModeControls"
                  ),
                  delete this.controlsTimeout);
              },
            },
            {
              key: "_resetMouseScrollState",
              value: function () {
                (this.mouseScrollTimeStamp = 0), (this.mouseScrollDelta = 0);
              },
            },
            {
              key: "_touchSwipe",
              value: function (e) {
                if (this.active)
                  if (e.touches.length > 1) this.touchSwipeState = null;
                  else
                    switch (e.type) {
                      case "touchstart":
                        this.touchSwipeState = {
                          startX: e.touches[0].pageX,
                          startY: e.touches[0].pageY,
                          endX: e.touches[0].pageX,
                          endY: e.touches[0].pageY,
                        };
                        break;
                      case "touchmove":
                        if (null === this.touchSwipeState) return;
                        (this.touchSwipeState.endX = e.touches[0].pageX),
                          (this.touchSwipeState.endY = e.touches[0].pageY),
                          e.preventDefault();
                        break;
                      case "touchend":
                        if (null === this.touchSwipeState) return;
                        var t = 0,
                          n =
                            this.touchSwipeState.endX -
                            this.touchSwipeState.startX,
                          i =
                            this.touchSwipeState.endY -
                            this.touchSwipeState.startY,
                          r = Math.abs(Math.atan2(i, n));
                        Math.abs(n) > 50 && (r <= a || r >= Math.PI - a)
                          ? (t = n)
                          : Math.abs(i) > 50 &&
                            Math.abs(r - Math.PI / 2) <= a &&
                            (t = i),
                          t > 0
                            ? this._goToPreviousPage()
                            : t < 0 && this._goToNextPage();
                    }
              },
            },
            {
              key: "_addWindowListeners",
              value: function () {
                (this.showControlsBind = this._showControls.bind(this)),
                  (this.mouseDownBind = this._mouseDown.bind(this)),
                  (this.mouseWheelBind = this._mouseWheel.bind(this)),
                  (this.resetMouseScrollStateBind =
                    this._resetMouseScrollState.bind(this)),
                  (this.contextMenuBind = this._contextMenu.bind(this)),
                  (this.touchSwipeBind = this._touchSwipe.bind(this)),
                  window.addEventListener("mousemove", this.showControlsBind),
                  window.addEventListener("mousedown", this.mouseDownBind),
                  window.addEventListener("wheel", this.mouseWheelBind, {
                    passive: !1,
                  }),
                  window.addEventListener(
                    "keydown",
                    this.resetMouseScrollStateBind
                  ),
                  window.addEventListener("contextmenu", this.contextMenuBind),
                  window.addEventListener("touchstart", this.touchSwipeBind),
                  window.addEventListener("touchmove", this.touchSwipeBind),
                  window.addEventListener("touchend", this.touchSwipeBind);
              },
            },
            {
              key: "_removeWindowListeners",
              value: function () {
                window.removeEventListener("mousemove", this.showControlsBind),
                  window.removeEventListener("mousedown", this.mouseDownBind),
                  window.removeEventListener("wheel", this.mouseWheelBind, {
                    passive: !1,
                  }),
                  window.removeEventListener(
                    "keydown",
                    this.resetMouseScrollStateBind
                  ),
                  window.removeEventListener(
                    "contextmenu",
                    this.contextMenuBind
                  ),
                  window.removeEventListener("touchstart", this.touchSwipeBind),
                  window.removeEventListener("touchmove", this.touchSwipeBind),
                  window.removeEventListener("touchend", this.touchSwipeBind),
                  delete this.showControlsBind,
                  delete this.mouseDownBind,
                  delete this.mouseWheelBind,
                  delete this.resetMouseScrollStateBind,
                  delete this.contextMenuBind,
                  delete this.touchSwipeBind;
              },
            },
            {
              key: "_fullscreenChange",
              value: function () {
                this.isFullscreen ? this._enter() : this._exit();
              },
            },
            {
              key: "_addFullscreenChangeListeners",
              value: function () {
                (this.fullscreenChangeBind = this._fullscreenChange.bind(this)),
                  window.addEventListener(
                    "fullscreenchange",
                    this.fullscreenChangeBind
                  ),
                  window.addEventListener(
                    "mozfullscreenchange",
                    this.fullscreenChangeBind
                  ),
                  window.addEventListener(
                    "webkitfullscreenchange",
                    this.fullscreenChangeBind
                  ),
                  window.addEventListener(
                    "MSFullscreenChange",
                    this.fullscreenChangeBind
                  );
              },
            },
            {
              key: "_removeFullscreenChangeListeners",
              value: function () {
                window.removeEventListener(
                  "fullscreenchange",
                  this.fullscreenChangeBind
                ),
                  window.removeEventListener(
                    "mozfullscreenchange",
                    this.fullscreenChangeBind
                  ),
                  window.removeEventListener(
                    "webkitfullscreenchange",
                    this.fullscreenChangeBind
                  ),
                  window.removeEventListener(
                    "MSFullscreenChange",
                    this.fullscreenChangeBind
                  ),
                  delete this.fullscreenChangeBind;
              },
            },
            {
              key: "isFullscreen",
              get: function () {
                return !!(
                  document.fullscreenElement ||
                  document.mozFullScreen ||
                  document.webkitIsFullScreen ||
                  document.msFullscreenElement
                );
              },
            },
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        );
      })();
    t.PDFPresentationMode = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFSidebarResizer = void 0);
    var i = n(5);
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var a = "--sidebar-width",
      o = 200,
      s = (function () {
        function e(t, n) {
          var r = this,
            s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : i.NullL10n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.enabled = !1),
            (this.isRTL = !1),
            (this.sidebarOpen = !1),
            (this.doc = document.documentElement),
            (this._width = null),
            (this._outerContainerWidth = null),
            (this._boundEvents = Object.create(null)),
            (this.outerContainer = t.outerContainer),
            (this.resizer = t.resizer),
            (this.eventBus = n),
            (this.l10n = s),
            "undefined" != typeof CSS &&
            "function" == typeof CSS.supports &&
            CSS.supports(a, "calc(-1 * ".concat(o, "px)"))
              ? ((this.enabled = !0),
                this.resizer.classList.remove("hidden"),
                this.l10n.getDirection().then(function (e) {
                  r.isRTL = "rtl" === e;
                }),
                this._addEventListeners())
              : console.warn(
                  "PDFSidebarResizer: The browser does not support resizing of the sidebar."
                );
        }
        var t, n, s;
        return (
          (t = e),
          (n = [
            {
              key: "_updateWidth",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                if (!this.enabled) return !1;
                var t = (0, i.clamp)(
                  e,
                  o,
                  Math.floor(this.outerContainerWidth / 2)
                );
                return (
                  t !== this._width &&
                  ((this._width = t),
                  this.doc.style.setProperty(a, "".concat(t, "px")),
                  !0)
                );
              },
            },
            {
              key: "_mouseMove",
              value: function (e) {
                var t = e.clientX;
                this.isRTL && (t = this.outerContainerWidth - t),
                  this._updateWidth(t);
              },
            },
            {
              key: "_mouseUp",
              value: function (e) {
                this.outerContainer.classList.remove("sidebarResizing"),
                  this.eventBus.dispatch("resize", { source: this });
                var t = this._boundEvents;
                window.removeEventListener("mousemove", t.mouseMove),
                  window.removeEventListener("mouseup", t.mouseUp);
              },
            },
            {
              key: "_addEventListeners",
              value: function () {
                var e = this;
                if (this.enabled) {
                  var t = this._boundEvents;
                  (t.mouseMove = this._mouseMove.bind(this)),
                    (t.mouseUp = this._mouseUp.bind(this)),
                    this.resizer.addEventListener("mousedown", function (n) {
                      0 === n.button &&
                        (e.outerContainer.classList.add("sidebarResizing"),
                        window.addEventListener("mousemove", t.mouseMove),
                        window.addEventListener("mouseup", t.mouseUp));
                    }),
                    this.eventBus._on("sidebarviewchanged", function (t) {
                      e.sidebarOpen = !(!t || !t.view);
                    }),
                    this.eventBus._on("resize", function (t) {
                      if (
                        t &&
                        t.source === window &&
                        ((e._outerContainerWidth = null), e._width)
                      )
                        if (e.sidebarOpen) {
                          e.outerContainer.classList.add("sidebarResizing");
                          var n = e._updateWidth(e._width);
                          Promise.resolve().then(function () {
                            e.outerContainer.classList.remove(
                              "sidebarResizing"
                            ),
                              n && e.eventBus.dispatch("resize", { source: e });
                          });
                        } else e._updateWidth(e._width);
                    });
                }
              },
            },
            {
              key: "outerContainerWidth",
              get: function () {
                return (
                  this._outerContainerWidth ||
                    (this._outerContainerWidth =
                      this.outerContainer.clientWidth),
                  this._outerContainerWidth
                );
              },
            },
          ]) && r(t.prototype, n),
          s && r(t, s),
          e
        );
      })();
    t.PDFSidebarResizer = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFThumbnailViewer = void 0);
    var i = n(5),
      r = n(26);
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var o = (function () {
      function e(t) {
        var n = t.container,
          r = t.linkService,
          a = t.renderingQueue,
          o = t.l10n,
          s = void 0 === o ? i.NullL10n : o;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.container = n),
          (this.linkService = r),
          (this.renderingQueue = a),
          (this.l10n = s),
          (this.scroll = (0, i.watchScroll)(
            this.container,
            this._scrollUpdated.bind(this)
          )),
          this._resetView();
      }
      var t, n, o;
      return (
        (t = e),
        (n = [
          {
            key: "_scrollUpdated",
            value: function () {
              this.renderingQueue.renderHighestPriority();
            },
          },
          {
            key: "getThumbnail",
            value: function (e) {
              return this._thumbnails[e];
            },
          },
          {
            key: "_getVisibleThumbs",
            value: function () {
              return (0, i.getVisibleElements)(
                this.container,
                this._thumbnails
              );
            },
          },
          {
            key: "scrollThumbnailIntoView",
            value: function (e) {
              if (this.pdfDocument) {
                var t = this._thumbnails[e - 1];
                if (t) {
                  if (e !== this._currentPageNumber)
                    this._thumbnails[
                      this._currentPageNumber - 1
                    ].div.classList.remove("selected"),
                      t.div.classList.add("selected");
                  var n = this._getVisibleThumbs(),
                    r = n.views.length;
                  if (r > 0) {
                    var a = n.first.id,
                      o = r > 1 ? n.last.id : a,
                      s = !1;
                    e <= a || e >= o
                      ? (s = !0)
                      : n.views.some(function (t) {
                          return t.id === e && ((s = t.percent < 100), !0);
                        }),
                      s && (0, i.scrollIntoView)(t.div, { top: -19 });
                  }
                  this._currentPageNumber = e;
                } else
                  console.error(
                    'scrollThumbnailIntoView: Invalid "pageNumber" parameter.'
                  );
              }
            },
          },
          {
            key: "cleanup",
            value: function () {
              r.PDFThumbnailView.cleanup();
            },
          },
          {
            key: "_resetView",
            value: function () {
              (this._thumbnails = []),
                (this._currentPageNumber = 1),
                (this._pageLabels = null),
                (this._pagesRotation = 0),
                (this._pagesRequests = new WeakMap()),
                (this.container.textContent = "");
            },
          },
          {
            key: "setDocument",
            value: function (e) {
              var t = this;
              this.pdfDocument && (this._cancelRendering(), this._resetView()),
                (this.pdfDocument = e),
                e &&
                  e
                    .getPage(1)
                    .then(function (n) {
                      for (
                        var i = e.numPages,
                          a = n.getViewport({ scale: 1 }),
                          o = 1;
                        o <= i;
                        ++o
                      ) {
                        var s = new r.PDFThumbnailView({
                          container: t.container,
                          id: o,
                          defaultViewport: a.clone(),
                          linkService: t.linkService,
                          renderingQueue: t.renderingQueue,
                          disableCanvasToImageConversion: !1,
                          l10n: t.l10n,
                        });
                        t._thumbnails.push(s);
                      }
                      var u = t._thumbnails[0];
                      u && u.setPdfPage(n),
                        t._thumbnails[
                          t._currentPageNumber - 1
                        ].div.classList.add("selected");
                    })
                    .catch(function (e) {
                      console.error("Unable to initialize thumbnail viewer", e);
                    });
            },
          },
          {
            key: "_cancelRendering",
            value: function () {
              for (var e = 0, t = this._thumbnails.length; e < t; e++)
                this._thumbnails[e] && this._thumbnails[e].cancelRendering();
            },
          },
          {
            key: "setPageLabels",
            value: function (e) {
              if (this.pdfDocument) {
                e
                  ? Array.isArray(e) && this.pdfDocument.numPages === e.length
                    ? (this._pageLabels = e)
                    : ((this._pageLabels = null),
                      console.error(
                        "PDFThumbnailViewer_setPageLabels: Invalid page labels."
                      ))
                  : (this._pageLabels = null);
                for (var t = 0, n = this._thumbnails.length; t < n; t++) {
                  var i = this._pageLabels && this._pageLabels[t];
                  this._thumbnails[t].setPageLabel(i);
                }
              }
            },
          },
          {
            key: "_ensurePdfPageLoaded",
            value: function (e) {
              var t = this;
              if (e.pdfPage) return Promise.resolve(e.pdfPage);
              if (this._pagesRequests.has(e)) return this._pagesRequests.get(e);
              var n = this.pdfDocument
                .getPage(e.id)
                .then(function (n) {
                  return (
                    e.pdfPage || e.setPdfPage(n), t._pagesRequests.delete(e), n
                  );
                })
                .catch(function (n) {
                  console.error("Unable to get page for thumb view", n),
                    t._pagesRequests.delete(e);
                });
              return this._pagesRequests.set(e, n), n;
            },
          },
          {
            key: "forceRendering",
            value: function () {
              var e = this,
                t = this._getVisibleThumbs(),
                n = this.renderingQueue.getHighestPriority(
                  t,
                  this._thumbnails,
                  this.scroll.down
                );
              return (
                !!n &&
                (this._ensurePdfPageLoaded(n).then(function () {
                  e.renderingQueue.renderView(n);
                }),
                !0)
              );
            },
          },
          {
            key: "pagesRotation",
            get: function () {
              return this._pagesRotation;
            },
            set: function (e) {
              if (!(0, i.isValidRotation)(e))
                throw new Error("Invalid thumbnails rotation angle.");
              if (this.pdfDocument && this._pagesRotation !== e) {
                this._pagesRotation = e;
                for (var t = 0, n = this._thumbnails.length; t < n; t++)
                  this._thumbnails[t].update(e);
              }
            },
          },
        ]) && a(t.prototype, n),
        o && a(t, o),
        e
      );
    })();
    t.PDFThumbnailViewer = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFThumbnailView = void 0);
    var i = n(8),
      r = n(5),
      a = n(11);
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var s,
      u = 1,
      l = 98,
      c =
        ((s = null),
        {
          getCanvas: function (e, t) {
            var n = s;
            n || ((n = document.createElement("canvas")), (s = n)),
              (n.width = e),
              (n.height = t),
              (n.mozOpaque = !0);
            var i = n.getContext("2d", { alpha: !1 });
            return (
              i.save(),
              (i.fillStyle = "rgb(255, 255, 255)"),
              i.fillRect(0, 0, e, t),
              i.restore(),
              n
            );
          },
          destroyCanvas: function () {
            var e = s;
            e && ((e.width = 0), (e.height = 0)), (s = null);
          },
        }),
      d = (function () {
        function e(t) {
          var n = t.container,
            i = t.id,
            o = t.defaultViewport,
            s = t.linkService,
            c = t.renderingQueue,
            d = t.disableCanvasToImageConversion,
            h = void 0 !== d && d,
            f = t.l10n,
            p = void 0 === f ? r.NullL10n : f;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.id = i),
            (this.renderingId = "thumbnail" + i),
            (this.pageLabel = null),
            (this.pdfPage = null),
            (this.rotation = 0),
            (this.viewport = o),
            (this.pdfPageRotate = o.rotation),
            (this.linkService = s),
            (this.renderingQueue = c),
            (this.renderTask = null),
            (this.renderingState = a.RenderingStates.INITIAL),
            (this.resume = null),
            (this.disableCanvasToImageConversion = h),
            (this.pageWidth = this.viewport.width),
            (this.pageHeight = this.viewport.height),
            (this.pageRatio = this.pageWidth / this.pageHeight),
            (this.canvasWidth = l),
            (this.canvasHeight = (this.canvasWidth / this.pageRatio) | 0),
            (this.scale = this.canvasWidth / this.pageWidth),
            (this.l10n = p);
          var v = document.createElement("a");
          (v.href = s.getAnchorUrl("#page=" + i)),
            this._thumbPageTitle.then(function (e) {
              v.title = e;
            }),
            (v.onclick = function () {
              return (s.page = i), !1;
            }),
            (this.anchor = v);
          var g = document.createElement("div");
          (g.className = "thumbnail"),
            g.setAttribute("data-page-number", this.id),
            (this.div = g);
          var m = document.createElement("div");
          m.className = "thumbnailSelectionRing";
          var y = 2 * u;
          (m.style.width = this.canvasWidth + y + "px"),
            (m.style.height = this.canvasHeight + y + "px"),
            (this.ring = m),
            g.appendChild(m),
            v.appendChild(g),
            n.appendChild(v);
        }
        var t, n, s;
        return (
          (t = e),
          (s = [
            {
              key: "cleanup",
              value: function () {
                c.destroyCanvas();
              },
            },
          ]),
          (n = [
            {
              key: "setPdfPage",
              value: function (e) {
                (this.pdfPage = e), (this.pdfPageRotate = e.rotate);
                var t = (this.rotation + this.pdfPageRotate) % 360;
                (this.viewport = e.getViewport({ scale: 1, rotation: t })),
                  this.reset();
              },
            },
            {
              key: "reset",
              value: function () {
                this.cancelRendering(),
                  (this.renderingState = a.RenderingStates.INITIAL),
                  (this.pageWidth = this.viewport.width),
                  (this.pageHeight = this.viewport.height),
                  (this.pageRatio = this.pageWidth / this.pageHeight),
                  (this.canvasHeight = (this.canvasWidth / this.pageRatio) | 0),
                  (this.scale = this.canvasWidth / this.pageWidth),
                  this.div.removeAttribute("data-loaded");
                for (
                  var e = this.ring, t = e.childNodes, n = t.length - 1;
                  n >= 0;
                  n--
                )
                  e.removeChild(t[n]);
                var i = 2 * u;
                (e.style.width = this.canvasWidth + i + "px"),
                  (e.style.height = this.canvasHeight + i + "px"),
                  this.canvas &&
                    ((this.canvas.width = 0),
                    (this.canvas.height = 0),
                    delete this.canvas),
                  this.image &&
                    (this.image.removeAttribute("src"), delete this.image);
              },
            },
            {
              key: "update",
              value: function (e) {
                void 0 !== e && (this.rotation = e);
                var t = (this.rotation + this.pdfPageRotate) % 360;
                (this.viewport = this.viewport.clone({
                  scale: 1,
                  rotation: t,
                })),
                  this.reset();
              },
            },
            {
              key: "cancelRendering",
              value: function () {
                this.renderTask &&
                  (this.renderTask.cancel(), (this.renderTask = null)),
                  (this.resume = null);
              },
            },
            {
              key: "_getPageDrawContext",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = document.createElement("canvas");
                (this.canvas = t), (t.mozOpaque = !0);
                var n = t.getContext("2d", { alpha: !1 }),
                  i = (0, r.getOutputScale)(n);
                return (
                  (t.width = (this.canvasWidth * i.sx) | 0),
                  (t.height = (this.canvasHeight * i.sy) | 0),
                  (t.style.width = this.canvasWidth + "px"),
                  (t.style.height = this.canvasHeight + "px"),
                  !e && i.scaled && n.scale(i.sx, i.sy),
                  n
                );
              },
            },
            {
              key: "_convertCanvasToImage",
              value: function () {
                var e = this;
                if (
                  this.canvas &&
                  this.renderingState === a.RenderingStates.FINISHED
                ) {
                  if (this.disableCanvasToImageConversion)
                    return (
                      (this.canvas.className = "thumbnailImage"),
                      this._thumbPageCanvas.then(function (t) {
                        e.canvas.setAttribute("aria-label", t);
                      }),
                      this.div.setAttribute("data-loaded", !0),
                      void this.ring.appendChild(this.canvas)
                    );
                  var t = document.createElement("img");
                  (t.className = "thumbnailImage"),
                    this._thumbPageCanvas.then(function (e) {
                      t.setAttribute("aria-label", e);
                    }),
                    (t.style.width = this.canvasWidth + "px"),
                    (t.style.height = this.canvasHeight + "px"),
                    (t.src = this.canvas.toDataURL()),
                    (this.image = t),
                    this.div.setAttribute("data-loaded", !0),
                    this.ring.appendChild(t),
                    (this.canvas.width = 0),
                    (this.canvas.height = 0),
                    delete this.canvas;
                }
              },
            },
            {
              key: "draw",
              value: function () {
                var e = this;
                if (this.renderingState !== a.RenderingStates.INITIAL)
                  return (
                    console.error("Must be in new state before drawing"),
                    Promise.resolve(void 0)
                  );
                var t = this.pdfPage;
                if (!t)
                  return (
                    (this.renderingState = a.RenderingStates.FINISHED),
                    Promise.reject(new Error("pdfPage is not loaded"))
                  );
                this.renderingState = a.RenderingStates.RUNNING;
                var n = (0, i.createPromiseCapability)(),
                  r = function (t) {
                    s === e.renderTask && (e.renderTask = null),
                      t instanceof i.RenderingCancelledException
                        ? n.resolve(void 0)
                        : ((e.renderingState = a.RenderingStates.FINISHED),
                          e._convertCanvasToImage(),
                          t ? n.reject(t) : n.resolve(void 0));
                  },
                  o = {
                    canvasContext: this._getPageDrawContext(),
                    viewport: this.viewport.clone({ scale: this.scale }),
                  },
                  s = (this.renderTask = t.render(o));
                return (
                  (s.onContinue = function (t) {
                    if (!e.renderingQueue.isHighestPriority(e))
                      return (
                        (e.renderingState = a.RenderingStates.PAUSED),
                        void (e.resume = function () {
                          (e.renderingState = a.RenderingStates.RUNNING), t();
                        })
                      );
                    t();
                  }),
                  s.promise.then(
                    function () {
                      r(null);
                    },
                    function (e) {
                      r(e);
                    }
                  ),
                  n.promise
                );
              },
            },
            {
              key: "setImage",
              value: function (e) {
                if (this.renderingState === a.RenderingStates.INITIAL) {
                  var t = e.canvas;
                  if (t) {
                    this.pdfPage || this.setPdfPage(e.pdfPage),
                      (this.renderingState = a.RenderingStates.FINISHED);
                    var n = this._getPageDrawContext(!0),
                      i = n.canvas;
                    if (t.width <= 2 * i.width)
                      return (
                        n.drawImage(
                          t,
                          0,
                          0,
                          t.width,
                          t.height,
                          0,
                          0,
                          i.width,
                          i.height
                        ),
                        void this._convertCanvasToImage()
                      );
                    for (
                      var r = i.width << 3,
                        o = i.height << 3,
                        s = c.getCanvas(r, o),
                        u = s.getContext("2d");
                      r > t.width || o > t.height;

                    )
                      (r >>= 1), (o >>= 1);
                    for (
                      u.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, o);
                      r > 2 * i.width;

                    )
                      u.drawImage(s, 0, 0, r, o, 0, 0, r >> 1, o >> 1),
                        (r >>= 1),
                        (o >>= 1);
                    n.drawImage(s, 0, 0, r, o, 0, 0, i.width, i.height),
                      this._convertCanvasToImage();
                  }
                }
              },
            },
            {
              key: "setPageLabel",
              value: function (e) {
                var t = this;
                (this.pageLabel = "string" == typeof e ? e : null),
                  this._thumbPageTitle.then(function (e) {
                    t.anchor.title = e;
                  }),
                  this.renderingState === a.RenderingStates.FINISHED &&
                    this._thumbPageCanvas.then(function (e) {
                      t.image
                        ? t.image.setAttribute("aria-label", e)
                        : t.disableCanvasToImageConversion &&
                          t.canvas &&
                          t.canvas.setAttribute("aria-label", e);
                    });
              },
            },
            {
              key: "_thumbPageTitle",
              get: function () {
                return this.l10n.get(
                  "thumb_page_title",
                  { page: null !== this.pageLabel ? this.pageLabel : this.id },
                  "Page {{page}}"
                );
              },
            },
            {
              key: "_thumbPageCanvas",
              get: function () {
                return this.l10n.get(
                  "thumb_page_canvas",
                  { page: null !== this.pageLabel ? this.pageLabel : this.id },
                  "Thumbnail of Page {{page}}"
                );
              },
            },
          ]) && o(t.prototype, n),
          s && o(t, s),
          e
        );
      })();
    t.PDFThumbnailView = d;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFViewer = void 0);
    var i = n(28),
      r = n(8);
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var i = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (e) {
              throw e;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        o = !0,
        u = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return (o = e.done), e;
        },
        e: function (e) {
          (u = !0), (a = e);
        },
        f: function () {
          try {
            o || null == n.return || n.return();
          } finally {
            if (u) throw a;
          }
        },
      };
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function l(e, t, n) {
      return (l =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var i = (function (e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = h(e));

                );
                return e;
              })(e, t);
              if (i) {
                var r = Object.getOwnPropertyDescriptor(i, t);
                return r.get ? r.get.call(n) : r.value;
              }
            })(e, t, n || e);
    }
    function c(e, t) {
      return (c =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function d(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = h(e);
        if (t) {
          var r = h(this).constructor;
          n = Reflect.construct(i, arguments, r);
        } else n = i.apply(this, arguments);
        return (function (e, t) {
          if (t && ("object" === a(t) || "function" == typeof t)) return t;
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        })(this, n);
      };
    }
    function h(e) {
      return (h = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var f = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && c(e, t);
      })(f, i.BaseViewer);
      var t,
        n,
        a,
        s = d(f);
      function f() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, f),
          s.apply(this, arguments)
        );
      }
      return (
        (t = f),
        (n = [
          {
            key: "_scrollIntoView",
            value: function (e) {
              var t = e.pageDiv,
                n = e.pageSpot,
                i = void 0 === n ? null : n,
                r = e.pageNumber,
                a = void 0 === r ? null : r;
              if (!i && !this.isInPresentationMode) {
                var o = t.offsetLeft + t.clientLeft,
                  s = o + t.clientWidth,
                  u = this.container,
                  c = u.scrollLeft,
                  d = u.clientWidth;
                (this._isScrollModeHorizontal || o < c || s > c + d) &&
                  (i = { left: 0, top: 0 });
              }
              l(h(f.prototype), "_scrollIntoView", this).call(this, {
                pageDiv: t,
                pageSpot: i,
                pageNumber: a,
              });
            },
          },
          {
            key: "_getVisiblePages",
            value: function () {
              return this.isInPresentationMode
                ? this._getCurrentVisiblePage()
                : l(h(f.prototype), "_getVisiblePages", this).call(this);
            },
          },
          {
            key: "_updateHelper",
            value: function (e) {
              if (!this.isInPresentationMode) {
                var t,
                  n = this._currentPageNumber,
                  i = !1,
                  r = o(e);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var a = t.value;
                    if (a.percent < 100) break;
                    if (a.id === n) {
                      i = !0;
                      break;
                    }
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                i || (n = e[0].id), this._setCurrentPageNumber(n);
              }
            },
          },
          {
            key: "_viewerElement",
            get: function () {
              return (0, r.shadow)(this, "_viewerElement", this.viewer);
            },
          },
        ]) && u(t.prototype, n),
        a && u(t, a),
        f
      );
    })();
    t.PDFViewer = f;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BaseViewer = void 0);
    var i = n(5),
      r = n(11),
      a = n(29),
      o = n(8),
      s = n(30),
      u = n(21),
      l = n(31);
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function d(e) {
      var t = [];
      (this.push = function (n) {
        var i = t.indexOf(n);
        i >= 0 && t.splice(i, 1),
          t.push(n),
          t.length > e && t.shift().destroy();
      }),
        (this.resize = function (n, r) {
          if (((e = n), r)) {
            for (var a = new Set(), o = 0, s = r.length; o < s; ++o)
              a.add(r[o].id);
            (0, i.moveToEndOfArray)(t, function (e) {
              return a.has(e.id);
            });
          }
          for (; t.length > e; ) t.shift().destroy();
        });
    }
    var h = (function () {
      function e(t) {
        var n = this;
        if (
          ((function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          this.constructor === e)
        )
          throw new Error("Cannot initialize BaseViewer.");
        (this._name = this.constructor.name),
          (this.container = t.container),
          (this.viewer = t.viewer || t.container.firstElementChild),
          (this.eventBus = t.eventBus),
          (this.linkService = t.linkService || new u.SimpleLinkService()),
          (this.downloadManager = t.downloadManager || null),
          (this.findController = t.findController || null),
          (this.removePageBorders = t.removePageBorders || !1),
          (this.textLayerMode = Number.isInteger(t.textLayerMode)
            ? t.textLayerMode
            : i.TextLayerMode.ENABLE),
          (this.imageResourcesPath = t.imageResourcesPath || ""),
          (this.renderInteractiveForms = t.renderInteractiveForms || !1),
          (this.enablePrintAutoRotate = t.enablePrintAutoRotate || !1),
          (this.renderer = t.renderer || i.RendererType.CANVAS),
          (this.enableWebGL = t.enableWebGL || !1),
          (this.useOnlyCssZoom = t.useOnlyCssZoom || !1),
          (this.maxCanvasPixels = t.maxCanvasPixels),
          (this.l10n = t.l10n || i.NullL10n),
          (this.defaultRenderingQueue = !t.renderingQueue),
          this.defaultRenderingQueue
            ? ((this.renderingQueue = new r.PDFRenderingQueue()),
              this.renderingQueue.setViewer(this))
            : (this.renderingQueue = t.renderingQueue),
          (this.scroll = (0, i.watchScroll)(
            this.container,
            this._scrollUpdate.bind(this)
          )),
          (this.presentationModeState = i.PresentationModeState.UNKNOWN),
          (this._onBeforeDraw = this._onAfterDraw = null),
          this._resetView(),
          this.removePageBorders &&
            this.viewer.classList.add("removePageBorders"),
          Promise.resolve().then(function () {
            n.eventBus.dispatch("baseviewerinit", { source: n });
          });
      }
      var t, n, h;
      return (
        (t = e),
        (n = [
          {
            key: "getPageView",
            value: function (e) {
              return this._pages[e];
            },
          },
          {
            key: "_setCurrentPageNumber",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return this._currentPageNumber === e
                ? (t && this._resetCurrentPageView(), !0)
                : 0 < e &&
                    e <= this.pagesCount &&
                    ((this._currentPageNumber = e),
                    this.eventBus.dispatch("pagechanging", {
                      source: this,
                      pageNumber: e,
                      pageLabel: this._pageLabels && this._pageLabels[e - 1],
                    }),
                    t && this._resetCurrentPageView(),
                    !0);
            },
          },
          {
            key: "_onePageRenderedOrForceFetch",
            value: function () {
              return this.container.offsetParent &&
                0 !== this._getVisiblePages().views.length
                ? this._onePageRenderedCapability.promise
                : Promise.resolve();
            },
          },
          {
            key: "setDocument",
            value: function (e) {
              var t = this;
              if (
                (this.pdfDocument &&
                  (this._cancelRendering(),
                  this._resetView(),
                  this.findController && this.findController.setDocument(null)),
                (this.pdfDocument = e),
                e)
              ) {
                var n = e.numPages,
                  r = e.getPage(1);
                this._pagesCapability.promise.then(function () {
                  t.eventBus.dispatch("pagesloaded", {
                    source: t,
                    pagesCount: n,
                  });
                }),
                  (this._onBeforeDraw = function (e) {
                    var n = t._pages[e.pageNumber - 1];
                    n && t._buffer.push(n);
                  }),
                  this.eventBus._on("pagerender", this._onBeforeDraw),
                  (this._onAfterDraw = function (e) {
                    e.cssTransform ||
                      t._onePageRenderedCapability.settled ||
                      (t._onePageRenderedCapability.resolve(),
                      t.eventBus._off("pagerendered", t._onAfterDraw),
                      (t._onAfterDraw = null));
                  }),
                  this.eventBus._on("pagerendered", this._onAfterDraw),
                  r
                    .then(function (r) {
                      t._firstPageCapability.resolve(r);
                      for (
                        var a = t.currentScale,
                          o = r.getViewport({ scale: a * i.CSS_UNITS }),
                          u =
                            t.textLayerMode !== i.TextLayerMode.DISABLE
                              ? t
                              : null,
                          l = 1;
                        l <= n;
                        ++l
                      ) {
                        var c = new s.PDFPageView({
                          container: t._viewerElement,
                          eventBus: t.eventBus,
                          id: l,
                          scale: a,
                          defaultViewport: o.clone(),
                          renderingQueue: t.renderingQueue,
                          textLayerFactory: u,
                          textLayerMode: t.textLayerMode,
                          annotationLayerFactory: t,
                          imageResourcesPath: t.imageResourcesPath,
                          renderInteractiveForms: t.renderInteractiveForms,
                          renderer: t.renderer,
                          enableWebGL: t.enableWebGL,
                          useOnlyCssZoom: t.useOnlyCssZoom,
                          maxCanvasPixels: t.maxCanvasPixels,
                          l10n: t.l10n,
                        });
                        t._pages.push(c);
                      }
                      var d = t._pages[0];
                      d &&
                        (d.setPdfPage(r), t.linkService.cachePageRef(1, r.ref)),
                        t._spreadMode !== i.SpreadMode.NONE &&
                          t._updateSpreadMode(),
                        t._onePageRenderedOrForceFetch().then(function () {
                          if (
                            (t.findController &&
                              t.findController.setDocument(e),
                            e.loadingParams.disableAutoFetch || n > 7500)
                          )
                            t._pagesCapability.resolve();
                          else {
                            var i = n - 1;
                            if (i <= 0) t._pagesCapability.resolve();
                            else
                              for (
                                var r = function (n) {
                                    e.getPage(n).then(
                                      function (e) {
                                        var r = t._pages[n - 1];
                                        r.pdfPage || r.setPdfPage(e),
                                          t.linkService.cachePageRef(n, e.ref),
                                          0 == --i &&
                                            t._pagesCapability.resolve();
                                      },
                                      function (e) {
                                        console.error(
                                          "Unable to get page ".concat(
                                            n,
                                            " to initialize viewer"
                                          ),
                                          e
                                        ),
                                          0 == --i &&
                                            t._pagesCapability.resolve();
                                      }
                                    );
                                  },
                                  a = 2;
                                a <= n;
                                ++a
                              )
                                r(a);
                          }
                        }),
                        t.eventBus.dispatch("pagesinit", { source: t }),
                        t.defaultRenderingQueue && t.update();
                    })
                    .catch(function (e) {
                      console.error("Unable to initialize viewer", e);
                    });
              }
            },
          },
          {
            key: "setPageLabels",
            value: function (e) {
              if (this.pdfDocument) {
                e
                  ? Array.isArray(e) && this.pdfDocument.numPages === e.length
                    ? (this._pageLabels = e)
                    : ((this._pageLabels = null),
                      console.error(
                        "".concat(
                          this._name,
                          ".setPageLabels: Invalid page labels."
                        )
                      ))
                  : (this._pageLabels = null);
                for (var t = 0, n = this._pages.length; t < n; t++) {
                  var i = this._pages[t],
                    r = this._pageLabels && this._pageLabels[t];
                  i.setPageLabel(r);
                }
              }
            },
          },
          {
            key: "_resetView",
            value: function () {
              (this._pages = []),
                (this._currentPageNumber = 1),
                (this._currentScale = i.UNKNOWN_SCALE),
                (this._currentScaleValue = null),
                (this._pageLabels = null),
                (this._buffer = new d(10)),
                (this._location = null),
                (this._pagesRotation = 0),
                (this._pagesRequests = new WeakMap()),
                (this._firstPageCapability = (0, o.createPromiseCapability)()),
                (this._onePageRenderedCapability = (0,
                o.createPromiseCapability)()),
                (this._pagesCapability = (0, o.createPromiseCapability)()),
                (this._scrollMode = i.ScrollMode.VERTICAL),
                (this._spreadMode = i.SpreadMode.NONE),
                this._onBeforeDraw &&
                  (this.eventBus._off("pagerender", this._onBeforeDraw),
                  (this._onBeforeDraw = null)),
                this._onAfterDraw &&
                  (this.eventBus._off("pagerendered", this._onAfterDraw),
                  (this._onAfterDraw = null)),
                (this.viewer.textContent = ""),
                this._updateScrollMode();
            },
          },
          {
            key: "_scrollUpdate",
            value: function () {
              0 !== this.pagesCount && this.update();
            },
          },
          {
            key: "_scrollIntoView",
            value: function (e) {
              var t = e.pageDiv,
                n = e.pageSpot,
                r = void 0 === n ? null : n;
              e.pageNumber;
              (0, i.scrollIntoView)(t, r);
            },
          },
          {
            key: "_setScaleUpdatePages",
            value: function (e, t) {
              var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                i =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
              if (
                ((this._currentScaleValue = t.toString()),
                (function (e, t) {
                  return t === e || Math.abs(t - e) < 1e-15;
                })(this._currentScale, e))
              )
                i &&
                  this.eventBus.dispatch("scalechanging", {
                    source: this,
                    scale: e,
                    presetValue: t,
                  });
              else {
                for (var r = 0, a = this._pages.length; r < a; r++)
                  this._pages[r].update(e);
                if (((this._currentScale = e), !n)) {
                  var o,
                    s = this._currentPageNumber;
                  !this._location ||
                    this.isInPresentationMode ||
                    this.isChangingPresentationMode ||
                    ((s = this._location.pageNumber),
                    (o = [
                      null,
                      { name: "XYZ" },
                      this._location.left,
                      this._location.top,
                      null,
                    ])),
                    this.scrollPageIntoView({
                      pageNumber: s,
                      destArray: o,
                      allowNegativeOffset: !0,
                    });
                }
                this.eventBus.dispatch("scalechanging", {
                  source: this,
                  scale: e,
                  presetValue: i ? t : void 0,
                }),
                  this.defaultRenderingQueue && this.update();
              }
            },
          },
          {
            key: "_setScale",
            value: function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = parseFloat(e);
              if (n > 0) this._setScaleUpdatePages(n, e, t, !1);
              else {
                var r = this._pages[this._currentPageNumber - 1];
                if (!r) return;
                var a = this.isInPresentationMode || this.removePageBorders,
                  o = a ? 0 : i.SCROLLBAR_PADDING,
                  s = a ? 0 : i.VERTICAL_PADDING;
                if (!a && this._isScrollModeHorizontal) {
                  var u = [s, o];
                  (o = u[0]), (s = u[1]);
                }
                var l = ((this.container.clientWidth - o) / r.width) * r.scale,
                  c = ((this.container.clientHeight - s) / r.height) * r.scale;
                switch (e) {
                  case "page-actual":
                    n = 1;
                    break;
                  case "page-width":
                    n = l;
                    break;
                  case "page-height":
                    n = c;
                    break;
                  case "page-fit":
                    n = Math.min(l, c);
                    break;
                  case "auto":
                    var d = (0, i.isPortraitOrientation)(r)
                      ? l
                      : Math.min(c, l);
                    n = Math.min(i.MAX_AUTO_SCALE, d);
                    break;
                  default:
                    return void console.error(
                      ""
                        .concat(this._name, '._setScale: "')
                        .concat(e, '" is an unknown zoom value.')
                    );
                }
                this._setScaleUpdatePages(n, e, t, !0);
              }
            },
          },
          {
            key: "_resetCurrentPageView",
            value: function () {
              this.isInPresentationMode &&
                this._setScale(this._currentScaleValue, !0);
              var e = this._pages[this._currentPageNumber - 1];
              this._scrollIntoView({ pageDiv: e.div });
            },
          },
          {
            key: "scrollPageIntoView",
            value: function (e) {
              var t = e.pageNumber,
                n = e.destArray,
                r = void 0 === n ? null : n,
                a = e.allowNegativeOffset,
                o = void 0 !== a && a,
                s = e.ignoreDestinationZoom,
                u = void 0 !== s && s;
              if (this.pdfDocument) {
                var l = Number.isInteger(t) && this._pages[t - 1];
                if (l)
                  if (!this.isInPresentationMode && r) {
                    var c,
                      d,
                      h = 0,
                      f = 0,
                      p = 0,
                      v = 0,
                      g = l.rotation % 180 != 0,
                      m = (g ? l.height : l.width) / l.scale / i.CSS_UNITS,
                      y = (g ? l.width : l.height) / l.scale / i.CSS_UNITS,
                      b = 0;
                    switch (r[1].name) {
                      case "XYZ":
                        (h = r[2]),
                          (f = r[3]),
                          (b = r[4]),
                          (h = null !== h ? h : 0),
                          (f = null !== f ? f : y);
                        break;
                      case "Fit":
                      case "FitB":
                        b = "page-fit";
                        break;
                      case "FitH":
                      case "FitBH":
                        (b = "page-width"),
                          null === (f = r[2]) &&
                            this._location &&
                            ((h = this._location.left),
                            (f = this._location.top));
                        break;
                      case "FitV":
                      case "FitBV":
                        (h = r[2]), (p = m), (v = y), (b = "page-height");
                        break;
                      case "FitR":
                        (h = r[2]), (f = r[3]), (p = r[4] - h), (v = r[5] - f);
                        var w = this.removePageBorders
                            ? 0
                            : i.SCROLLBAR_PADDING,
                          _ = this.removePageBorders ? 0 : i.VERTICAL_PADDING;
                        (c =
                          (this.container.clientWidth - w) / p / i.CSS_UNITS),
                          (d =
                            (this.container.clientHeight - _) /
                            v /
                            i.CSS_UNITS),
                          (b = Math.min(Math.abs(c), Math.abs(d)));
                        break;
                      default:
                        return void console.error(
                          "".concat(this._name, ".scrollPageIntoView: ") +
                            '"'.concat(
                              r[1].name,
                              '" is not a valid destination type.'
                            )
                        );
                    }
                    if (
                      (u ||
                        (b && b !== this._currentScale
                          ? (this.currentScaleValue = b)
                          : this._currentScale === i.UNKNOWN_SCALE &&
                            (this.currentScaleValue = i.DEFAULT_SCALE_VALUE)),
                      "page-fit" !== b || r[4])
                    ) {
                      var P = [
                          l.viewport.convertToViewportPoint(h, f),
                          l.viewport.convertToViewportPoint(h + p, f + v),
                        ],
                        S = Math.min(P[0][0], P[1][0]),
                        k = Math.min(P[0][1], P[1][1]);
                      o || ((S = Math.max(S, 0)), (k = Math.max(k, 0))),
                        this._scrollIntoView({
                          pageDiv: l.div,
                          pageSpot: { left: S, top: k },
                          pageNumber: t,
                        });
                    } else
                      this._scrollIntoView({ pageDiv: l.div, pageNumber: t });
                  } else this._setCurrentPageNumber(t, !0);
                else
                  console.error(
                    "".concat(this._name, ".scrollPageIntoView: ") +
                      '"'.concat(t, '" is not a valid pageNumber parameter.')
                  );
              }
            },
          },
          {
            key: "_updateLocation",
            value: function (e) {
              var t = this._currentScale,
                n = this._currentScaleValue,
                i = parseFloat(n) === t ? Math.round(1e4 * t) / 100 : n,
                r = e.id,
                a = "#page=" + r;
              a += "&zoom=" + i;
              var o = this._pages[r - 1],
                s = this.container,
                u = o.getPagePoint(s.scrollLeft - e.x, s.scrollTop - e.y),
                l = Math.round(u[0]),
                c = Math.round(u[1]);
              (a += "," + l + "," + c),
                (this._location = {
                  pageNumber: r,
                  scale: i,
                  top: c,
                  left: l,
                  rotation: this._pagesRotation,
                  pdfOpenParams: a,
                });
            },
          },
          {
            key: "_updateHelper",
            value: function (e) {
              throw new Error("Not implemented: _updateHelper");
            },
          },
          {
            key: "update",
            value: function () {
              var e = this._getVisiblePages(),
                t = e.views,
                n = t.length;
              if (0 !== n) {
                var i = Math.max(10, 2 * n + 1);
                this._buffer.resize(i, t),
                  this.renderingQueue.renderHighestPriority(e),
                  this._updateHelper(t),
                  this._updateLocation(e.first),
                  this.eventBus.dispatch("updateviewarea", {
                    source: this,
                    location: this._location,
                  });
              }
            },
          },
          {
            key: "containsElement",
            value: function (e) {
              return this.container.contains(e);
            },
          },
          {
            key: "focus",
            value: function () {
              this.container.focus();
            },
          },
          {
            key: "_getCurrentVisiblePage",
            value: function () {
              if (!this.pagesCount) return { views: [] };
              var e = this._pages[this._currentPageNumber - 1],
                t = e.div,
                n = {
                  id: e.id,
                  x: t.offsetLeft + t.clientLeft,
                  y: t.offsetTop + t.clientTop,
                  view: e,
                };
              return { first: n, last: n, views: [n] };
            },
          },
          {
            key: "_getVisiblePages",
            value: function () {
              return (0, i.getVisibleElements)(
                this.container,
                this._pages,
                !0,
                this._isScrollModeHorizontal
              );
            },
          },
          {
            key: "isPageVisible",
            value: function (e) {
              return (
                !!this.pdfDocument &&
                (e < 1 || e > this.pagesCount
                  ? (console.error(
                      ""
                        .concat(this._name, '.isPageVisible: "')
                        .concat(e, '" is out of bounds.')
                    ),
                    !1)
                  : this._getVisiblePages().views.some(function (t) {
                      return t.id === e;
                    }))
              );
            },
          },
          {
            key: "cleanup",
            value: function () {
              for (var e = 0, t = this._pages.length; e < t; e++)
                this._pages[e] &&
                  this._pages[e].renderingState !==
                    r.RenderingStates.FINISHED &&
                  this._pages[e].reset();
            },
          },
          {
            key: "_cancelRendering",
            value: function () {
              for (var e = 0, t = this._pages.length; e < t; e++)
                this._pages[e] && this._pages[e].cancelRendering();
            },
          },
          {
            key: "_ensurePdfPageLoaded",
            value: function (e) {
              var t = this;
              if (e.pdfPage) return Promise.resolve(e.pdfPage);
              if (this._pagesRequests.has(e)) return this._pagesRequests.get(e);
              var n = this.pdfDocument
                .getPage(e.id)
                .then(function (n) {
                  return (
                    e.pdfPage || e.setPdfPage(n), t._pagesRequests.delete(e), n
                  );
                })
                .catch(function (n) {
                  console.error("Unable to get page for page view", n),
                    t._pagesRequests.delete(e);
                });
              return this._pagesRequests.set(e, n), n;
            },
          },
          {
            key: "forceRendering",
            value: function (e) {
              var t = this,
                n = e || this._getVisiblePages(),
                i = this._isScrollModeHorizontal
                  ? this.scroll.right
                  : this.scroll.down,
                r = this.renderingQueue.getHighestPriority(n, this._pages, i);
              return (
                !!r &&
                (this._ensurePdfPageLoaded(r).then(function () {
                  t.renderingQueue.renderView(r);
                }),
                !0)
              );
            },
          },
          {
            key: "createTextLayerBuilder",
            value: function (e, t, n) {
              var i =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                r = arguments.length > 4 ? arguments[4] : void 0;
              return new l.TextLayerBuilder({
                textLayerDiv: e,
                eventBus: r,
                pageIndex: t,
                viewport: n,
                findController: this.isInPresentationMode
                  ? null
                  : this.findController,
                enhanceTextSelection: !this.isInPresentationMode && i,
              });
            },
          },
          {
            key: "createAnnotationLayerBuilder",
            value: function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "",
                r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                o =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : i.NullL10n;
              return new a.AnnotationLayerBuilder({
                pageDiv: e,
                pdfPage: t,
                imageResourcesPath: n,
                renderInteractiveForms: r,
                linkService: this.linkService,
                downloadManager: this.downloadManager,
                l10n: o,
              });
            },
          },
          {
            key: "getPagesOverview",
            value: function () {
              var e = this._pages.map(function (e) {
                var t = e.pdfPage.getViewport({ scale: 1 });
                return {
                  width: t.width,
                  height: t.height,
                  rotation: t.rotation,
                };
              });
              if (!this.enablePrintAutoRotate) return e;
              var t = (0, i.isPortraitOrientation)(e[0]);
              return e.map(function (e) {
                return t === (0, i.isPortraitOrientation)(e)
                  ? e
                  : {
                      width: e.height,
                      height: e.width,
                      rotation: (e.rotation + 90) % 360,
                    };
              });
            },
          },
          {
            key: "_updateScrollMode",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                t = this._scrollMode,
                n = this.viewer;
              n.classList.toggle(
                "scrollHorizontal",
                t === i.ScrollMode.HORIZONTAL
              ),
                n.classList.toggle("scrollWrapped", t === i.ScrollMode.WRAPPED),
                this.pdfDocument &&
                  e &&
                  (this._currentScaleValue &&
                    isNaN(this._currentScaleValue) &&
                    this._setScale(this._currentScaleValue, !0),
                  this._setCurrentPageNumber(e, !0),
                  this.update());
            },
          },
          {
            key: "_updateSpreadMode",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              if (this.pdfDocument) {
                var t = this.viewer,
                  n = this._pages;
                if (
                  ((t.textContent = ""), this._spreadMode === i.SpreadMode.NONE)
                )
                  for (var r = 0, a = n.length; r < a; ++r)
                    t.appendChild(n[r].div);
                else
                  for (
                    var o = this._spreadMode - 1, s = null, u = 0, l = n.length;
                    u < l;
                    ++u
                  )
                    null === s
                      ? (((s = document.createElement("div")).className =
                          "spread"),
                        t.appendChild(s))
                      : u % 2 === o &&
                        ((s = s.cloneNode(!1)), t.appendChild(s)),
                      s.appendChild(n[u].div);
                e && (this._setCurrentPageNumber(e, !0), this.update());
              }
            },
          },
          {
            key: "pagesCount",
            get: function () {
              return this._pages.length;
            },
          },
          {
            key: "pageViewsReady",
            get: function () {
              return (
                !!this._pagesCapability.settled &&
                this._pages.every(function (e) {
                  return e && e.pdfPage;
                })
              );
            },
          },
          {
            key: "currentPageNumber",
            get: function () {
              return this._currentPageNumber;
            },
            set: function (e) {
              if (!Number.isInteger(e)) throw new Error("Invalid page number.");
              this.pdfDocument &&
                (this._setCurrentPageNumber(e, !0) ||
                  console.error(
                    ""
                      .concat(this._name, '.currentPageNumber: "')
                      .concat(e, '" is not a valid page.')
                  ));
            },
          },
          {
            key: "currentPageLabel",
            get: function () {
              return (
                this._pageLabels &&
                this._pageLabels[this._currentPageNumber - 1]
              );
            },
            set: function (e) {
              if (this.pdfDocument) {
                var t = 0 | e;
                if (this._pageLabels) {
                  var n = this._pageLabels.indexOf(e);
                  n >= 0 && (t = n + 1);
                }
                this._setCurrentPageNumber(t, !0) ||
                  console.error(
                    ""
                      .concat(this._name, '.currentPageLabel: "')
                      .concat(e, '" is not a valid page.')
                  );
              }
            },
          },
          {
            key: "currentScale",
            get: function () {
              return this._currentScale !== i.UNKNOWN_SCALE
                ? this._currentScale
                : i.DEFAULT_SCALE;
            },
            set: function (e) {
              if (isNaN(e)) throw new Error("Invalid numeric scale.");
              this.pdfDocument && this._setScale(e, !1);
            },
          },
          {
            key: "currentScaleValue",
            get: function () {
              return this._currentScaleValue;
            },
            set: function (e) {
              this.pdfDocument && this._setScale(e, !1);
            },
          },
          {
            key: "pagesRotation",
            get: function () {
              return this._pagesRotation;
            },
            set: function (e) {
              if (!(0, i.isValidRotation)(e))
                throw new Error("Invalid pages rotation angle.");
              if (this.pdfDocument && this._pagesRotation !== e) {
                this._pagesRotation = e;
                for (
                  var t = this._currentPageNumber,
                    n = 0,
                    r = this._pages.length;
                  n < r;
                  n++
                ) {
                  var a = this._pages[n];
                  a.update(a.scale, e);
                }
                this._currentScaleValue &&
                  this._setScale(this._currentScaleValue, !0),
                  this.eventBus.dispatch("rotationchanging", {
                    source: this,
                    pagesRotation: e,
                    pageNumber: t,
                  }),
                  this.defaultRenderingQueue && this.update();
              }
            },
          },
          {
            key: "firstPagePromise",
            get: function () {
              return this.pdfDocument
                ? this._firstPageCapability.promise
                : null;
            },
          },
          {
            key: "onePageRendered",
            get: function () {
              return this.pdfDocument
                ? this._onePageRenderedCapability.promise
                : null;
            },
          },
          {
            key: "pagesPromise",
            get: function () {
              return this.pdfDocument ? this._pagesCapability.promise : null;
            },
          },
          {
            key: "_viewerElement",
            get: function () {
              throw new Error("Not implemented: _viewerElement");
            },
          },
          {
            key: "_isScrollModeHorizontal",
            get: function () {
              return (
                !this.isInPresentationMode &&
                this._scrollMode === i.ScrollMode.HORIZONTAL
              );
            },
          },
          {
            key: "isInPresentationMode",
            get: function () {
              return (
                this.presentationModeState ===
                i.PresentationModeState.FULLSCREEN
              );
            },
          },
          {
            key: "isChangingPresentationMode",
            get: function () {
              return (
                this.presentationModeState === i.PresentationModeState.CHANGING
              );
            },
          },
          {
            key: "isHorizontalScrollbarEnabled",
            get: function () {
              return (
                !this.isInPresentationMode &&
                this.container.scrollWidth > this.container.clientWidth
              );
            },
          },
          {
            key: "isVerticalScrollbarEnabled",
            get: function () {
              return (
                !this.isInPresentationMode &&
                this.container.scrollHeight > this.container.clientHeight
              );
            },
          },
          {
            key: "hasEqualPageSizes",
            get: function () {
              for (
                var e = this._pages[0], t = 1, n = this._pages.length;
                t < n;
                ++t
              ) {
                var i = this._pages[t];
                if (i.width !== e.width || i.height !== e.height) return !1;
              }
              return !0;
            },
          },
          {
            key: "scrollMode",
            get: function () {
              return this._scrollMode;
            },
            set: function (e) {
              if (this._scrollMode !== e) {
                if (!(0, i.isValidScrollMode)(e))
                  throw new Error("Invalid scroll mode: ".concat(e));
                (this._scrollMode = e),
                  this.eventBus.dispatch("scrollmodechanged", {
                    source: this,
                    mode: e,
                  }),
                  this._updateScrollMode(this._currentPageNumber);
              }
            },
          },
          {
            key: "spreadMode",
            get: function () {
              return this._spreadMode;
            },
            set: function (e) {
              if (this._spreadMode !== e) {
                if (!(0, i.isValidSpreadMode)(e))
                  throw new Error("Invalid spread mode: ".concat(e));
                (this._spreadMode = e),
                  this.eventBus.dispatch("spreadmodechanged", {
                    source: this,
                    mode: e,
                  }),
                  this._updateSpreadMode(this._currentPageNumber);
              }
            },
          },
        ]) && c(t.prototype, n),
        h && c(t, h),
        e
      );
    })();
    t.BaseViewer = h;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DefaultAnnotationLayerFactory = t.AnnotationLayerBuilder = void 0);
    var i = n(8),
      r = n(5),
      a = n(21);
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function u(e, t, n) {
      return t && s(e.prototype, t), n && s(e, n), e;
    }
    var l = (function () {
      function e(t) {
        var n = t.pageDiv,
          i = t.pdfPage,
          a = t.linkService,
          s = t.downloadManager,
          u = t.imageResourcesPath,
          l = void 0 === u ? "" : u,
          c = t.renderInteractiveForms,
          d = void 0 !== c && c,
          h = t.l10n,
          f = void 0 === h ? r.NullL10n : h;
        o(this, e),
          (this.pageDiv = n),
          (this.pdfPage = i),
          (this.linkService = a),
          (this.downloadManager = s),
          (this.imageResourcesPath = l),
          (this.renderInteractiveForms = d),
          (this.l10n = f),
          (this.div = null),
          (this._cancelled = !1);
      }
      return (
        u(e, [
          {
            key: "render",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "display";
              this.pdfPage.getAnnotations({ intent: n }).then(function (n) {
                if (!t._cancelled) {
                  var r = {
                    viewport: e.clone({ dontFlip: !0 }),
                    div: t.div,
                    annotations: n,
                    page: t.pdfPage,
                    imageResourcesPath: t.imageResourcesPath,
                    renderInteractiveForms: t.renderInteractiveForms,
                    linkService: t.linkService,
                    downloadManager: t.downloadManager,
                  };
                  if (t.div) i.AnnotationLayer.update(r);
                  else {
                    if (0 === n.length) return;
                    (t.div = document.createElement("div")),
                      (t.div.className = "annotationLayer"),
                      t.pageDiv.appendChild(t.div),
                      (r.div = t.div),
                      i.AnnotationLayer.render(r),
                      t.l10n.translate(t.div);
                  }
                }
              });
            },
          },
          {
            key: "cancel",
            value: function () {
              this._cancelled = !0;
            },
          },
          {
            key: "hide",
            value: function () {
              this.div && this.div.setAttribute("hidden", "true");
            },
          },
        ]),
        e
      );
    })();
    t.AnnotationLayerBuilder = l;
    var c = (function () {
      function e() {
        o(this, e);
      }
      return (
        u(e, [
          {
            key: "createAnnotationLayerBuilder",
            value: function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "",
                i =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                o =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : r.NullL10n;
              return new l({
                pageDiv: e,
                pdfPage: t,
                imageResourcesPath: n,
                renderInteractiveForms: i,
                linkService: new a.SimpleLinkService(),
                l10n: o,
              });
            },
          },
        ]),
        e
      );
    })();
    t.DefaultAnnotationLayerFactory = c;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFPageView = void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i },
      a = n(5),
      o = n(8),
      s = n(11);
    function u(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var c = n(7).viewerCompatibilityParams.maxCanvasPixels || 16777216,
      d = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var n = t.container,
            i = t.defaultViewport;
          (this.id = t.id),
            (this.renderingId = "page" + this.id),
            (this.pdfPage = null),
            (this.pageLabel = null),
            (this.rotation = 0),
            (this.scale = t.scale || a.DEFAULT_SCALE),
            (this.viewport = i),
            (this.pdfPageRotate = i.rotation),
            (this.hasRestrictedScaling = !1),
            (this.textLayerMode = Number.isInteger(t.textLayerMode)
              ? t.textLayerMode
              : a.TextLayerMode.ENABLE),
            (this.imageResourcesPath = t.imageResourcesPath || ""),
            (this.renderInteractiveForms = t.renderInteractiveForms || !1),
            (this.useOnlyCssZoom = t.useOnlyCssZoom || !1),
            (this.maxCanvasPixels = t.maxCanvasPixels || c),
            (this.eventBus = t.eventBus),
            (this.renderingQueue = t.renderingQueue),
            (this.textLayerFactory = t.textLayerFactory),
            (this.annotationLayerFactory = t.annotationLayerFactory),
            (this.renderer = t.renderer || a.RendererType.CANVAS),
            (this.enableWebGL = t.enableWebGL || !1),
            (this.l10n = t.l10n || a.NullL10n),
            (this.paintTask = null),
            (this.paintedViewportMap = new WeakMap()),
            (this.renderingState = s.RenderingStates.INITIAL),
            (this.resume = null),
            (this.error = null),
            (this.annotationLayer = null),
            (this.textLayer = null),
            (this.zoomLayer = null);
          var r = document.createElement("div");
          (r.className = "page"),
            (r.style.width = Math.floor(this.viewport.width) + "px"),
            (r.style.height = Math.floor(this.viewport.height) + "px"),
            r.setAttribute("data-page-number", this.id),
            (this.div = r),
            n.appendChild(r);
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "setPdfPage",
              value: function (e) {
                (this.pdfPage = e), (this.pdfPageRotate = e.rotate);
                var t = (this.rotation + this.pdfPageRotate) % 360;
                (this.viewport = e.getViewport({
                  scale: this.scale * a.CSS_UNITS,
                  rotation: t,
                })),
                  (this.stats = e.stats),
                  this.reset();
              },
            },
            {
              key: "destroy",
              value: function () {
                this.reset(), this.pdfPage && this.pdfPage.cleanup();
              },
            },
            {
              key: "_resetZoomLayer",
              value: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                if (this.zoomLayer) {
                  var t = this.zoomLayer.firstChild;
                  this.paintedViewportMap.delete(t),
                    (t.width = 0),
                    (t.height = 0),
                    e && this.zoomLayer.remove(),
                    (this.zoomLayer = null);
                }
              },
            },
            {
              key: "reset",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                this.cancelRendering(t),
                  (this.renderingState = s.RenderingStates.INITIAL);
                var n = this.div;
                (n.style.width = Math.floor(this.viewport.width) + "px"),
                  (n.style.height = Math.floor(this.viewport.height) + "px");
                for (
                  var i = n.childNodes,
                    r = (e && this.zoomLayer) || null,
                    a =
                      (t && this.annotationLayer && this.annotationLayer.div) ||
                      null,
                    o = i.length - 1;
                  o >= 0;
                  o--
                ) {
                  var u = i[o];
                  r !== u && a !== u && n.removeChild(u);
                }
                n.removeAttribute("data-loaded"),
                  a
                    ? this.annotationLayer.hide()
                    : this.annotationLayer &&
                      (this.annotationLayer.cancel(),
                      (this.annotationLayer = null)),
                  r ||
                    (this.canvas &&
                      (this.paintedViewportMap.delete(this.canvas),
                      (this.canvas.width = 0),
                      (this.canvas.height = 0),
                      delete this.canvas),
                    this._resetZoomLayer()),
                  this.svg &&
                    (this.paintedViewportMap.delete(this.svg), delete this.svg),
                  (this.loadingIconDiv = document.createElement("div")),
                  (this.loadingIconDiv.className = "loadingIcon"),
                  n.appendChild(this.loadingIconDiv);
              },
            },
            {
              key: "update",
              value: function (e, t) {
                (this.scale = e || this.scale),
                  void 0 !== t && (this.rotation = t);
                var n = (this.rotation + this.pdfPageRotate) % 360;
                if (
                  ((this.viewport = this.viewport.clone({
                    scale: this.scale * a.CSS_UNITS,
                    rotation: n,
                  })),
                  this.svg)
                )
                  return (
                    this.cssTransform(this.svg, !0),
                    void this.eventBus.dispatch("pagerendered", {
                      source: this,
                      pageNumber: this.id,
                      cssTransform: !0,
                      timestamp: performance.now(),
                    })
                  );
                var i = !1;
                if (this.canvas && this.maxCanvasPixels > 0) {
                  var r = this.outputScale;
                  ((Math.floor(this.viewport.width) * r.sx) | 0) *
                    ((Math.floor(this.viewport.height) * r.sy) | 0) >
                    this.maxCanvasPixels && (i = !0);
                }
                if (this.canvas) {
                  if (this.useOnlyCssZoom || (this.hasRestrictedScaling && i))
                    return (
                      this.cssTransform(this.canvas, !0),
                      void this.eventBus.dispatch("pagerendered", {
                        source: this,
                        pageNumber: this.id,
                        cssTransform: !0,
                        timestamp: performance.now(),
                      })
                    );
                  this.zoomLayer ||
                    this.canvas.hasAttribute("hidden") ||
                    ((this.zoomLayer = this.canvas.parentNode),
                    (this.zoomLayer.style.position = "absolute"));
                }
                this.zoomLayer && this.cssTransform(this.zoomLayer.firstChild),
                  this.reset(!0, !0);
              },
            },
            {
              key: "cancelRendering",
              value: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                this.paintTask &&
                  (this.paintTask.cancel(), (this.paintTask = null)),
                  (this.resume = null),
                  this.textLayer &&
                    (this.textLayer.cancel(), (this.textLayer = null)),
                  !e &&
                    this.annotationLayer &&
                    (this.annotationLayer.cancel(),
                    (this.annotationLayer = null));
              },
            },
            {
              key: "cssTransform",
              value: function (e) {
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = this.viewport.width,
                  i = this.viewport.height,
                  r = this.div;
                (e.style.width =
                  e.parentNode.style.width =
                  r.style.width =
                    Math.floor(n) + "px"),
                  (e.style.height =
                    e.parentNode.style.height =
                    r.style.height =
                      Math.floor(i) + "px");
                var a =
                    this.viewport.rotation -
                    this.paintedViewportMap.get(e).rotation,
                  o = Math.abs(a),
                  s = 1,
                  u = 1;
                (90 !== o && 270 !== o) || ((s = i / n), (u = n / i));
                var l = "rotate(" + a + "deg) scale(" + s + "," + u + ")";
                if (((e.style.transform = l), this.textLayer)) {
                  var c = this.textLayer.viewport,
                    d = this.viewport.rotation - c.rotation,
                    h = Math.abs(d),
                    f = n / c.width;
                  (90 !== h && 270 !== h) || (f = n / c.height);
                  var p,
                    v,
                    g = this.textLayer.textLayerDiv;
                  switch (h) {
                    case 0:
                      p = v = 0;
                      break;
                    case 90:
                      (p = 0), (v = "-" + g.style.height);
                      break;
                    case 180:
                      (p = "-" + g.style.width), (v = "-" + g.style.height);
                      break;
                    case 270:
                      (p = "-" + g.style.width), (v = 0);
                      break;
                    default:
                      console.error("Bad rotation value.");
                  }
                  (g.style.transform =
                    "rotate(" +
                    h +
                    "deg) scale(" +
                    f +
                    ", " +
                    f +
                    ") translate(" +
                    p +
                    ", " +
                    v +
                    ")"),
                    (g.style.transformOrigin = "0% 0%");
                }
                t &&
                  this.annotationLayer &&
                  this.annotationLayer.render(this.viewport, "display");
              },
            },
            {
              key: "getPagePoint",
              value: function (e, t) {
                return this.viewport.convertToPdfPoint(e, t);
              },
            },
            {
              key: "draw",
              value: function () {
                var e = this;
                this.renderingState !== s.RenderingStates.INITIAL &&
                  (console.error("Must be in new state before drawing"),
                  this.reset());
                var t = this.div,
                  n = this.pdfPage;
                if (!n)
                  return (
                    (this.renderingState = s.RenderingStates.FINISHED),
                    this.loadingIconDiv &&
                      (t.removeChild(this.loadingIconDiv),
                      delete this.loadingIconDiv),
                    Promise.reject(new Error("pdfPage is not loaded"))
                  );
                this.renderingState = s.RenderingStates.RUNNING;
                var i = document.createElement("div");
                (i.style.width = t.style.width),
                  (i.style.height = t.style.height),
                  i.classList.add("canvasWrapper"),
                  this.annotationLayer && this.annotationLayer.div
                    ? t.insertBefore(i, this.annotationLayer.div)
                    : t.appendChild(i);
                var l = null;
                if (
                  this.textLayerMode !== a.TextLayerMode.DISABLE &&
                  this.textLayerFactory
                ) {
                  var c = document.createElement("div");
                  (c.className = "textLayer"),
                    (c.style.width = i.style.width),
                    (c.style.height = i.style.height),
                    this.annotationLayer && this.annotationLayer.div
                      ? t.insertBefore(c, this.annotationLayer.div)
                      : t.appendChild(c),
                    (l = this.textLayerFactory.createTextLayerBuilder(
                      c,
                      this.id - 1,
                      this.viewport,
                      this.textLayerMode === a.TextLayerMode.ENABLE_ENHANCE,
                      this.eventBus
                    ));
                }
                this.textLayer = l;
                var d = null;
                this.renderingQueue &&
                  (d = function (t) {
                    if (!e.renderingQueue.isHighestPriority(e))
                      return (
                        (e.renderingState = s.RenderingStates.PAUSED),
                        void (e.resume = function () {
                          (e.renderingState = s.RenderingStates.RUNNING), t();
                        })
                      );
                    t();
                  });
                var h = (function () {
                    var i,
                      a =
                        ((i = r.default.mark(function i(a) {
                          return r.default.wrap(function (i) {
                            for (;;)
                              switch ((i.prev = i.next)) {
                                case 0:
                                  if (
                                    (f === e.paintTask && (e.paintTask = null),
                                    !(
                                      a instanceof o.RenderingCancelledException
                                    ))
                                  ) {
                                    i.next = 4;
                                    break;
                                  }
                                  return (e.error = null), i.abrupt("return");
                                case 4:
                                  if (
                                    ((e.renderingState =
                                      s.RenderingStates.FINISHED),
                                    e.loadingIconDiv &&
                                      (t.removeChild(e.loadingIconDiv),
                                      delete e.loadingIconDiv),
                                    e._resetZoomLayer(!0),
                                    (e.error = a),
                                    (e.stats = n.stats),
                                    e.eventBus.dispatch("pagerendered", {
                                      source: e,
                                      pageNumber: e.id,
                                      cssTransform: !1,
                                      timestamp: performance.now(),
                                    }),
                                    !a)
                                  ) {
                                    i.next = 12;
                                    break;
                                  }
                                  throw a;
                                case 12:
                                case "end":
                                  return i.stop();
                              }
                          }, i);
                        })),
                        function () {
                          var e = this,
                            t = arguments;
                          return new Promise(function (n, r) {
                            var a = i.apply(e, t);
                            function o(e) {
                              u(a, n, r, o, s, "next", e);
                            }
                            function s(e) {
                              u(a, n, r, o, s, "throw", e);
                            }
                            o(void 0);
                          });
                        });
                    return function (e) {
                      return a.apply(this, arguments);
                    };
                  })(),
                  f =
                    this.renderer === a.RendererType.SVG
                      ? this.paintOnSvg(i)
                      : this.paintOnCanvas(i);
                (f.onRenderContinue = d), (this.paintTask = f);
                var p = f.promise.then(
                  function () {
                    return h(null).then(function () {
                      if (l) {
                        var e = n.streamTextContent({
                          normalizeWhitespace: !0,
                        });
                        l.setTextContentStream(e), l.render();
                      }
                    });
                  },
                  function (e) {
                    return h(e);
                  }
                );
                return (
                  this.annotationLayerFactory &&
                    (this.annotationLayer ||
                      (this.annotationLayer =
                        this.annotationLayerFactory.createAnnotationLayerBuilder(
                          t,
                          n,
                          this.imageResourcesPath,
                          this.renderInteractiveForms,
                          this.l10n
                        )),
                    this.annotationLayer.render(this.viewport, "display")),
                  t.setAttribute("data-loaded", !0),
                  this.eventBus.dispatch("pagerender", {
                    source: this,
                    pageNumber: this.id,
                  }),
                  p
                );
              },
            },
            {
              key: "paintOnCanvas",
              value: function (e) {
                var t = (0, o.createPromiseCapability)(),
                  n = {
                    promise: t.promise,
                    onRenderContinue: function (e) {
                      e();
                    },
                    cancel: function () {
                      m.cancel();
                    },
                  },
                  i = this.viewport,
                  r = document.createElement("canvas");
                this.l10n
                  .get("page_canvas", { page: this.id }, "Page {{page}}")
                  .then(function (e) {
                    r.setAttribute("aria-label", e);
                  }),
                  r.setAttribute("hidden", "hidden");
                var s = !0,
                  u = function () {
                    s && (r.removeAttribute("hidden"), (s = !1));
                  };
                e.appendChild(r), (this.canvas = r), (r.mozOpaque = !0);
                var l = r.getContext("2d", { alpha: !1 }),
                  c = (0, a.getOutputScale)(l);
                if (((this.outputScale = c), this.useOnlyCssZoom)) {
                  var d = i.clone({ scale: a.CSS_UNITS });
                  (c.sx *= d.width / i.width),
                    (c.sy *= d.height / i.height),
                    (c.scaled = !0);
                }
                if (this.maxCanvasPixels > 0) {
                  var h = i.width * i.height,
                    f = Math.sqrt(this.maxCanvasPixels / h);
                  c.sx > f || c.sy > f
                    ? ((c.sx = f),
                      (c.sy = f),
                      (c.scaled = !0),
                      (this.hasRestrictedScaling = !0))
                    : (this.hasRestrictedScaling = !1);
                }
                var p = (0, a.approximateFraction)(c.sx),
                  v = (0, a.approximateFraction)(c.sy);
                (r.width = (0, a.roundToDivide)(i.width * c.sx, p[0])),
                  (r.height = (0, a.roundToDivide)(i.height * c.sy, v[0])),
                  (r.style.width = (0, a.roundToDivide)(i.width, p[1]) + "px"),
                  (r.style.height =
                    (0, a.roundToDivide)(i.height, v[1]) + "px"),
                  this.paintedViewportMap.set(r, i);
                var g = {
                    canvasContext: l,
                    transform: c.scaled ? [c.sx, 0, 0, c.sy, 0, 0] : null,
                    viewport: this.viewport,
                    enableWebGL: this.enableWebGL,
                    renderInteractiveForms: this.renderInteractiveForms,
                  },
                  m = this.pdfPage.render(g);
                return (
                  (m.onContinue = function (e) {
                    u(), n.onRenderContinue ? n.onRenderContinue(e) : e();
                  }),
                  m.promise.then(
                    function () {
                      u(), t.resolve(void 0);
                    },
                    function (e) {
                      u(), t.reject(e);
                    }
                  ),
                  n
                );
              },
            },
            {
              key: "paintOnSvg",
              value: function (e) {
                var t = this,
                  n = !1,
                  i = function () {
                    if (n)
                      throw new o.RenderingCancelledException(
                        "Rendering cancelled, page ".concat(t.id),
                        "svg"
                      );
                  },
                  r = this.pdfPage,
                  u = this.viewport.clone({ scale: a.CSS_UNITS });
                return {
                  promise: r.getOperatorList().then(function (n) {
                    return (
                      i(),
                      new o.SVGGraphics(r.commonObjs, r.objs)
                        .getSVG(n, u)
                        .then(function (n) {
                          i(),
                            (t.svg = n),
                            t.paintedViewportMap.set(n, u),
                            (n.style.width = e.style.width),
                            (n.style.height = e.style.height),
                            (t.renderingState = s.RenderingStates.FINISHED),
                            e.appendChild(n);
                        })
                    );
                  }),
                  onRenderContinue: function (e) {
                    e();
                  },
                  cancel: function () {
                    n = !0;
                  },
                };
              },
            },
            {
              key: "setPageLabel",
              value: function (e) {
                (this.pageLabel = "string" == typeof e ? e : null),
                  null !== this.pageLabel
                    ? this.div.setAttribute("data-page-label", this.pageLabel)
                    : this.div.removeAttribute("data-page-label");
              },
            },
            {
              key: "width",
              get: function () {
                return this.viewport.width;
              },
            },
            {
              key: "height",
              get: function () {
                return this.viewport.height;
              },
            },
          ]) && l(t.prototype, n),
          i && l(t, i),
          e
        );
      })();
    t.PDFPageView = d;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DefaultTextLayerFactory = t.TextLayerBuilder = void 0);
    var i = n(8);
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function o(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    }
    var s = (function () {
      function e(t) {
        var n = t.textLayerDiv,
          i = t.eventBus,
          a = t.pageIndex,
          o = t.viewport,
          s = t.findController,
          u = void 0 === s ? null : s,
          l = t.enhanceTextSelection,
          c = void 0 !== l && l;
        r(this, e),
          (this.textLayerDiv = n),
          (this.eventBus = i),
          (this.textContent = null),
          (this.textContentItemsStr = []),
          (this.textContentStream = null),
          (this.renderingDone = !1),
          (this.pageIdx = a),
          (this.pageNumber = this.pageIdx + 1),
          (this.matches = []),
          (this.viewport = o),
          (this.textDivs = []),
          (this.findController = u),
          (this.textLayerRenderTask = null),
          (this.enhanceTextSelection = c),
          (this._onUpdateTextLayerMatches = null),
          this._bindMouse();
      }
      return (
        o(e, [
          {
            key: "_finishRendering",
            value: function () {
              if (((this.renderingDone = !0), !this.enhanceTextSelection)) {
                var e = document.createElement("div");
                (e.className = "endOfContent"),
                  this.textLayerDiv.appendChild(e);
              }
              this.eventBus.dispatch("textlayerrendered", {
                source: this,
                pageNumber: this.pageNumber,
                numTextDivs: this.textDivs.length,
              });
            },
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
              if (
                (this.textContent || this.textContentStream) &&
                !this.renderingDone
              ) {
                this.cancel(), (this.textDivs = []);
                var n = document.createDocumentFragment();
                (this.textLayerRenderTask = (0, i.renderTextLayer)({
                  textContent: this.textContent,
                  textContentStream: this.textContentStream,
                  container: n,
                  viewport: this.viewport,
                  textDivs: this.textDivs,
                  textContentItemsStr: this.textContentItemsStr,
                  timeout: t,
                  enhanceTextSelection: this.enhanceTextSelection,
                })),
                  this.textLayerRenderTask.promise.then(
                    function () {
                      e.textLayerDiv.appendChild(n),
                        e._finishRendering(),
                        e._updateMatches();
                    },
                    function (e) {}
                  ),
                  this._onUpdateTextLayerMatches ||
                    ((this._onUpdateTextLayerMatches = function (t) {
                      (t.pageIndex !== e.pageIdx && -1 !== t.pageIndex) ||
                        e._updateMatches();
                    }),
                    this.eventBus._on(
                      "updatetextlayermatches",
                      this._onUpdateTextLayerMatches
                    ));
              }
            },
          },
          {
            key: "cancel",
            value: function () {
              this.textLayerRenderTask &&
                (this.textLayerRenderTask.cancel(),
                (this.textLayerRenderTask = null)),
                this._onUpdateTextLayerMatches &&
                  (this.eventBus._off(
                    "updatetextlayermatches",
                    this._onUpdateTextLayerMatches
                  ),
                  (this._onUpdateTextLayerMatches = null));
            },
          },
          {
            key: "setTextContentStream",
            value: function (e) {
              this.cancel(), (this.textContentStream = e);
            },
          },
          {
            key: "setTextContent",
            value: function (e) {
              this.cancel(), (this.textContent = e);
            },
          },
          {
            key: "_convertMatches",
            value: function (e, t) {
              if (!e) return [];
              for (
                var n = this.findController,
                  i = this.textContentItemsStr,
                  r = 0,
                  a = 0,
                  o = i.length - 1,
                  s = n.state.query.length,
                  u = [],
                  l = 0,
                  c = e.length;
                l < c;
                l++
              ) {
                for (var d = e[l]; r !== o && d >= a + i[r].length; )
                  (a += i[r].length), r++;
                r === i.length &&
                  console.error("Could not find a matching mapping");
                var h = { begin: { divIdx: r, offset: d - a } };
                for (d += t ? t[l] : s; r !== o && d > a + i[r].length; )
                  (a += i[r].length), r++;
                (h.end = { divIdx: r, offset: d - a }), u.push(h);
              }
              return u;
            },
          },
          {
            key: "_renderMatches",
            value: function (e) {
              if (0 !== e.length) {
                var t = this.findController,
                  n = this.pageIdx,
                  i = this.textContentItemsStr,
                  r = this.textDivs,
                  a = n === t.selected.pageIdx,
                  o = t.selected.matchIdx,
                  s = null,
                  u = { divIdx: -1, offset: void 0 },
                  l = o,
                  c = l + 1;
                if (t.state.highlightAll) (l = 0), (c = e.length);
                else if (!a) return;
                for (var d = l; d < c; d++) {
                  var h = e[d],
                    f = h.begin,
                    p = h.end,
                    v = a && d === o,
                    g = v ? " selected" : "";
                  if (
                    (v &&
                      t.scrollMatchIntoView({
                        element: r[f.divIdx],
                        pageIndex: n,
                        matchIndex: o,
                      }),
                    s && f.divIdx === s.divIdx
                      ? w(s.divIdx, s.offset, f.offset)
                      : (null !== s && w(s.divIdx, s.offset, u.offset), b(f)),
                    f.divIdx === p.divIdx)
                  )
                    w(f.divIdx, f.offset, p.offset, "highlight" + g);
                  else {
                    w(f.divIdx, f.offset, u.offset, "highlight begin" + g);
                    for (var m = f.divIdx + 1, y = p.divIdx; m < y; m++)
                      r[m].className = "highlight middle" + g;
                    b(p, "highlight end" + g);
                  }
                  s = p;
                }
                s && w(s.divIdx, s.offset, u.offset);
              }
              function b(e, t) {
                var n = e.divIdx;
                (r[n].textContent = ""), w(n, 0, e.offset, t);
              }
              function w(e, t, n, a) {
                var o = r[e],
                  s = i[e].substring(t, n),
                  u = document.createTextNode(s);
                if (a) {
                  var l = document.createElement("span");
                  return (
                    (l.className = a), l.appendChild(u), void o.appendChild(l)
                  );
                }
                o.appendChild(u);
              }
            },
          },
          {
            key: "_updateMatches",
            value: function () {
              if (this.renderingDone) {
                for (
                  var e = this.findController,
                    t = this.matches,
                    n = this.pageIdx,
                    i = this.textContentItemsStr,
                    r = this.textDivs,
                    a = -1,
                    o = 0,
                    s = t.length;
                  o < s;
                  o++
                ) {
                  for (
                    var u = t[o],
                      l = Math.max(a, u.begin.divIdx),
                      c = u.end.divIdx;
                    l <= c;
                    l++
                  ) {
                    var d = r[l];
                    (d.textContent = i[l]), (d.className = "");
                  }
                  a = u.end.divIdx + 1;
                }
                if (e && e.highlightMatches) {
                  var h = e.pageMatches[n] || null,
                    f = e.pageMatchesLength[n] || null;
                  (this.matches = this._convertMatches(h, f)),
                    this._renderMatches(this.matches);
                }
              }
            },
          },
          {
            key: "_bindMouse",
            value: function () {
              var e = this,
                t = this.textLayerDiv,
                n = null;
              t.addEventListener("mousedown", function (i) {
                if (e.enhanceTextSelection && e.textLayerRenderTask)
                  return (
                    e.textLayerRenderTask.expandTextDivs(!0),
                    void (n && (clearTimeout(n), (n = null)))
                  );
                var r = t.querySelector(".endOfContent");
                if (r) {
                  var a = i.target !== t;
                  if (
                    (a =
                      a &&
                      "none" !==
                        window
                          .getComputedStyle(r)
                          .getPropertyValue("-moz-user-select"))
                  ) {
                    var o = t.getBoundingClientRect(),
                      s = Math.max(0, (i.pageY - o.top) / o.height);
                    r.style.top = (100 * s).toFixed(2) + "%";
                  }
                  r.classList.add("active");
                }
              }),
                t.addEventListener("mouseup", function () {
                  if (e.enhanceTextSelection && e.textLayerRenderTask)
                    n = setTimeout(function () {
                      e.textLayerRenderTask &&
                        e.textLayerRenderTask.expandTextDivs(!1),
                        (n = null);
                    }, 300);
                  else {
                    var i = t.querySelector(".endOfContent");
                    i && ((i.style.top = ""), i.classList.remove("active"));
                  }
                });
            },
          },
        ]),
        e
      );
    })();
    t.TextLayerBuilder = s;
    var u = (function () {
      function e() {
        r(this, e);
      }
      return (
        o(e, [
          {
            key: "createTextLayerBuilder",
            value: function (e, t, n) {
              var i =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                r = arguments.length > 4 ? arguments[4] : void 0;
              return new s({
                textLayerDiv: e,
                pageIndex: t,
                viewport: n,
                enhanceTextSelection: i,
                eventBus: r,
              });
            },
          },
        ]),
        e
      );
    })();
    t.DefaultTextLayerFactory = u;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SecondaryToolbar = void 0);
    var i = n(5),
      r = n(9),
      a = n(33);
    function o(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var i = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (e) {
              throw e;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        o = !0,
        u = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return (o = e.done), e;
        },
        e: function (e) {
          (u = !0), (a = e);
        },
        f: function () {
          try {
            o || null == n.return || n.return();
          } finally {
            if (u) throw a;
          }
        },
      };
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var l = (function () {
      function e(t, n, o) {
        var s = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.toolbar = t.toolbar),
          (this.toggleButton = t.toggleButton),
          (this.toolbarButtonContainer = t.toolbarButtonContainer),
          (this.buttons = [
            {
              element: t.presentationModeButton,
              eventName: "presentationmode",
              close: !0,
            },
            { element: t.openFileButton, eventName: "openfile", close: !0 },
            { element: t.printButton, eventName: "print", close: !0 },
            { element: t.downloadButton, eventName: "download", close: !0 },
            { element: t.viewBookmarkButton, eventName: null, close: !0 },
            { element: t.firstPageButton, eventName: "firstpage", close: !0 },
            { element: t.lastPageButton, eventName: "lastpage", close: !0 },
            { element: t.pageRotateCwButton, eventName: "rotatecw", close: !1 },
            {
              element: t.pageRotateCcwButton,
              eventName: "rotateccw",
              close: !1,
            },
            {
              element: t.cursorSelectToolButton,
              eventName: "switchcursortool",
              eventDetails: { tool: r.CursorTool.SELECT },
              close: !0,
            },
            {
              element: t.cursorHandToolButton,
              eventName: "switchcursortool",
              eventDetails: { tool: r.CursorTool.HAND },
              close: !0,
            },
            {
              element: t.scrollVerticalButton,
              eventName: "switchscrollmode",
              eventDetails: { mode: i.ScrollMode.VERTICAL },
              close: !0,
            },
            {
              element: t.scrollHorizontalButton,
              eventName: "switchscrollmode",
              eventDetails: { mode: i.ScrollMode.HORIZONTAL },
              close: !0,
            },
            {
              element: t.scrollWrappedButton,
              eventName: "switchscrollmode",
              eventDetails: { mode: i.ScrollMode.WRAPPED },
              close: !0,
            },
            {
              element: t.spreadNoneButton,
              eventName: "switchspreadmode",
              eventDetails: { mode: i.SpreadMode.NONE },
              close: !0,
            },
            {
              element: t.spreadOddButton,
              eventName: "switchspreadmode",
              eventDetails: { mode: i.SpreadMode.ODD },
              close: !0,
            },
            {
              element: t.spreadEvenButton,
              eventName: "switchspreadmode",
              eventDetails: { mode: i.SpreadMode.EVEN },
              close: !0,
            },
            {
              element: t.documentPropertiesButton,
              eventName: "documentproperties",
              close: !0,
            },
          ]),
          (this.items = {
            firstPage: t.firstPageButton,
            lastPage: t.lastPageButton,
            pageRotateCw: t.pageRotateCwButton,
            pageRotateCcw: t.pageRotateCcwButton,
          }),
          (this.mainContainer = n),
          (this.eventBus = o),
          (this.opened = !1),
          (this.containerHeight = null),
          (this.previousContainerHeight = null),
          this.reset(),
          this._bindClickListeners(),
          this._bindCursorToolsListener(t),
          this._bindScrollModeListener(t),
          this._bindSpreadModeListener(t),
          this.eventBus._on("resize", this._setMaxHeight.bind(this)),
          this.eventBus._on("baseviewerinit", function (e) {
            e.source instanceof a.PDFSinglePageViewer
              ? s.toolbarButtonContainer.classList.add(
                  "hiddenScrollModeButtons",
                  "hiddenSpreadModeButtons"
                )
              : s.toolbarButtonContainer.classList.remove(
                  "hiddenScrollModeButtons",
                  "hiddenSpreadModeButtons"
                );
          });
      }
      var t, n, s;
      return (
        (t = e),
        (n = [
          {
            key: "setPageNumber",
            value: function (e) {
              (this.pageNumber = e), this._updateUIState();
            },
          },
          {
            key: "setPagesCount",
            value: function (e) {
              (this.pagesCount = e), this._updateUIState();
            },
          },
          {
            key: "reset",
            value: function () {
              (this.pageNumber = 0),
                (this.pagesCount = 0),
                this._updateUIState(),
                this.eventBus.dispatch("secondarytoolbarreset", {
                  source: this,
                });
            },
          },
          {
            key: "_updateUIState",
            value: function () {
              (this.items.firstPage.disabled = this.pageNumber <= 1),
                (this.items.lastPage.disabled =
                  this.pageNumber >= this.pagesCount),
                (this.items.pageRotateCw.disabled = 0 === this.pagesCount),
                (this.items.pageRotateCcw.disabled = 0 === this.pagesCount);
            },
          },
          {
            key: "_bindClickListeners",
            value: function () {
              var e = this;
              this.toggleButton.addEventListener(
                "click",
                this.toggle.bind(this)
              );
              var t,
                n = o(this.buttons);
              try {
                var i = function () {
                  var n = t.value,
                    i = n.element,
                    r = n.eventName,
                    a = n.close,
                    o = n.eventDetails;
                  i.addEventListener("click", function (t) {
                    if (null !== r) {
                      var n = { source: e };
                      for (var i in o) n[i] = o[i];
                      e.eventBus.dispatch(r, n);
                    }
                    a && e.close();
                  });
                };
                for (n.s(); !(t = n.n()).done; ) i();
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
            },
          },
          {
            key: "_bindCursorToolsListener",
            value: function (e) {
              this.eventBus._on("cursortoolchanged", function (t) {
                var n = t.tool;
                e.cursorSelectToolButton.classList.toggle(
                  "toggled",
                  n === r.CursorTool.SELECT
                ),
                  e.cursorHandToolButton.classList.toggle(
                    "toggled",
                    n === r.CursorTool.HAND
                  );
              });
            },
          },
          {
            key: "_bindScrollModeListener",
            value: function (e) {
              var t = this;
              function n(t) {
                var n = t.mode;
                e.scrollVerticalButton.classList.toggle(
                  "toggled",
                  n === i.ScrollMode.VERTICAL
                ),
                  e.scrollHorizontalButton.classList.toggle(
                    "toggled",
                    n === i.ScrollMode.HORIZONTAL
                  ),
                  e.scrollWrappedButton.classList.toggle(
                    "toggled",
                    n === i.ScrollMode.WRAPPED
                  );
                var r = n === i.ScrollMode.HORIZONTAL;
                (e.spreadNoneButton.disabled = r),
                  (e.spreadOddButton.disabled = r),
                  (e.spreadEvenButton.disabled = r);
              }
              this.eventBus._on("scrollmodechanged", n),
                this.eventBus._on("secondarytoolbarreset", function (e) {
                  e.source === t && n({ mode: i.ScrollMode.VERTICAL });
                });
            },
          },
          {
            key: "_bindSpreadModeListener",
            value: function (e) {
              var t = this;
              function n(t) {
                var n = t.mode;
                e.spreadNoneButton.classList.toggle(
                  "toggled",
                  n === i.SpreadMode.NONE
                ),
                  e.spreadOddButton.classList.toggle(
                    "toggled",
                    n === i.SpreadMode.ODD
                  ),
                  e.spreadEvenButton.classList.toggle(
                    "toggled",
                    n === i.SpreadMode.EVEN
                  );
              }
              this.eventBus._on("spreadmodechanged", n),
                this.eventBus._on("secondarytoolbarreset", function (e) {
                  e.source === t && n({ mode: i.SpreadMode.NONE });
                });
            },
          },
          {
            key: "open",
            value: function () {
              this.opened ||
                ((this.opened = !0),
                this._setMaxHeight(),
                this.toggleButton.classList.add("toggled"),
                this.toolbar.classList.remove("hidden"));
            },
          },
          {
            key: "close",
            value: function () {
              this.opened &&
                ((this.opened = !1),
                this.toolbar.classList.add("hidden"),
                this.toggleButton.classList.remove("toggled"));
            },
          },
          {
            key: "toggle",
            value: function () {
              this.opened ? this.close() : this.open();
            },
          },
          {
            key: "_setMaxHeight",
            value: function () {
              this.opened &&
                ((this.containerHeight = this.mainContainer.clientHeight),
                this.containerHeight !== this.previousContainerHeight &&
                  ((this.toolbarButtonContainer.style.maxHeight = "".concat(
                    this.containerHeight - i.SCROLLBAR_PADDING,
                    "px"
                  )),
                  (this.previousContainerHeight = this.containerHeight)));
            },
          },
          {
            key: "isOpen",
            get: function () {
              return this.opened;
            },
          },
        ]) && u(t.prototype, n),
        s && u(t, s),
        e
      );
    })();
    t.SecondaryToolbar = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFSinglePageViewer = void 0);
    var i = n(28),
      r = n(8);
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function s(e, t, n) {
      return (s =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var i = (function (e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = c(e));

                );
                return e;
              })(e, t);
              if (i) {
                var r = Object.getOwnPropertyDescriptor(i, t);
                return r.get ? r.get.call(n) : r.value;
              }
            })(e, t, n || e);
    }
    function u(e, t) {
      return (u =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function l(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = c(e);
        if (t) {
          var r = c(this).constructor;
          n = Reflect.construct(i, arguments, r);
        } else n = i.apply(this, arguments);
        return (function (e, t) {
          if (t && ("object" === a(t) || "function" == typeof t)) return t;
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        })(this, n);
      };
    }
    function c(e) {
      return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var d = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && u(e, t);
      })(h, i.BaseViewer);
      var t,
        n,
        a,
        d = l(h);
      function h(e) {
        var t;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, h),
          (t = d.call(this, e)).eventBus._on("pagesinit", function (e) {
            t._ensurePageViewVisible();
          }),
          t
        );
      }
      return (
        (t = h),
        (n = [
          {
            key: "_resetView",
            value: function () {
              s(c(h.prototype), "_resetView", this).call(this),
                (this._previousPageNumber = 1),
                (this._shadowViewer = document.createDocumentFragment()),
                (this._updateScrollDown = null);
            },
          },
          {
            key: "_ensurePageViewVisible",
            value: function () {
              var e = this._pages[this._currentPageNumber - 1],
                t = this._pages[this._previousPageNumber - 1],
                n = this.viewer.childNodes;
              switch (n.length) {
                case 0:
                  this.viewer.appendChild(e.div);
                  break;
                case 1:
                  if (n[0] !== t.div)
                    throw new Error(
                      "_ensurePageViewVisible: Unexpected previously visible page."
                    );
                  if (e === t) break;
                  this._shadowViewer.appendChild(t.div),
                    this.viewer.appendChild(e.div),
                    (this.container.scrollTop = 0);
                  break;
                default:
                  throw new Error(
                    "_ensurePageViewVisible: Only one page should be visible at a time."
                  );
              }
              this._previousPageNumber = this._currentPageNumber;
            },
          },
          {
            key: "_scrollUpdate",
            value: function () {
              this._updateScrollDown && this._updateScrollDown(),
                s(c(h.prototype), "_scrollUpdate", this).call(this);
            },
          },
          {
            key: "_scrollIntoView",
            value: function (e) {
              var t = this,
                n = e.pageDiv,
                i = e.pageSpot,
                r = void 0 === i ? null : i,
                a = e.pageNumber,
                o = void 0 === a ? null : a;
              o && this._setCurrentPageNumber(o);
              var u = this._currentPageNumber >= this._previousPageNumber;
              this._ensurePageViewVisible(),
                this.update(),
                s(c(h.prototype), "_scrollIntoView", this).call(this, {
                  pageDiv: n,
                  pageSpot: r,
                  pageNumber: o,
                }),
                (this._updateScrollDown = function () {
                  (t.scroll.down = u), (t._updateScrollDown = null);
                });
            },
          },
          {
            key: "_getVisiblePages",
            value: function () {
              return this._getCurrentVisiblePage();
            },
          },
          { key: "_updateHelper", value: function (e) {} },
          { key: "_updateScrollMode", value: function () {} },
          { key: "_updateSpreadMode", value: function () {} },
          {
            key: "_viewerElement",
            get: function () {
              return (0, r.shadow)(this, "_viewerElement", this._shadowViewer);
            },
          },
          {
            key: "_isScrollModeHorizontal",
            get: function () {
              return (0, r.shadow)(this, "_isScrollModeHorizontal", !1);
            },
          },
        ]) && o(t.prototype, n),
        a && o(t, a),
        h
      );
    })();
    t.PDFSinglePageViewer = d;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Toolbar = void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i },
      a = n(5);
    function o(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function s(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return u(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var i = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (e) {
              throw e;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        o = !0,
        s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return (o = e.done), e;
        },
        e: function (e) {
          (s = !0), (a = e);
        },
        f: function () {
          try {
            o || null == n.return || n.return();
          } finally {
            if (s) throw a;
          }
        },
      };
    }
    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var c = (function () {
      function e(t, n) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : a.NullL10n;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.toolbar = t.container),
          (this.eventBus = n),
          (this.l10n = i),
          (this.buttons = [
            { element: t.previous, eventName: "previouspage" },
            { element: t.next, eventName: "nextpage" },
            { element: t.zoomIn, eventName: "zoomin" },
            { element: t.zoomOut, eventName: "zoomout" },
            { element: t.openFile, eventName: "openfile" },
            { element: t.print, eventName: "print" },
            {
              element: t.presentationModeButton,
              eventName: "presentationmode",
            },
            { element: t.download, eventName: "download" },
            { element: t.viewBookmark, eventName: null },
          ]),
          (this.items = {
            numPages: t.numPages,
            pageNumber: t.pageNumber,
            scaleSelectContainer: t.scaleSelectContainer,
            scaleSelect: t.scaleSelect,
            customScaleOption: t.customScaleOption,
            previous: t.previous,
            next: t.next,
            zoomIn: t.zoomIn,
            zoomOut: t.zoomOut,
          }),
          (this._wasLocalized = !1),
          this.reset(),
          this._bindListeners();
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "setPageNumber",
            value: function (e, t) {
              (this.pageNumber = e),
                (this.pageLabel = t),
                this._updateUIState(!1);
            },
          },
          {
            key: "setPagesCount",
            value: function (e, t) {
              (this.pagesCount = e),
                (this.hasPageLabels = t),
                this._updateUIState(!0);
            },
          },
          {
            key: "setPageScale",
            value: function (e, t) {
              (this.pageScaleValue = (e || t).toString()),
                (this.pageScale = t),
                this._updateUIState(!1);
            },
          },
          {
            key: "reset",
            value: function () {
              (this.pageNumber = 0),
                (this.pageLabel = null),
                (this.hasPageLabels = !1),
                (this.pagesCount = 0),
                (this.pageScaleValue = a.DEFAULT_SCALE_VALUE),
                (this.pageScale = a.DEFAULT_SCALE),
                this._updateUIState(!0),
                this.updateLoadingIndicatorState();
            },
          },
          {
            key: "_bindListeners",
            value: function () {
              var e,
                t = this,
                n = this.items,
                i = n.pageNumber,
                r = n.scaleSelect,
                o = this,
                u = s(this.buttons);
              try {
                var l = function () {
                  var n = e.value,
                    i = n.element,
                    r = n.eventName;
                  i.addEventListener("click", function (e) {
                    null !== r && t.eventBus.dispatch(r, { source: t });
                  });
                };
                for (u.s(); !(e = u.n()).done; ) l();
              } catch (e) {
                u.e(e);
              } finally {
                u.f();
              }
              i.addEventListener("click", function () {
                this.select();
              }),
                i.addEventListener("change", function () {
                  o.eventBus.dispatch("pagenumberchanged", {
                    source: o,
                    value: this.value,
                  });
                }),
                r.addEventListener("change", function () {
                  "custom" !== this.value &&
                    o.eventBus.dispatch("scalechanged", {
                      source: o,
                      value: this.value,
                    });
                }),
                (r.oncontextmenu = a.noContextMenuHandler),
                this.eventBus._on("localized", function () {
                  (t._wasLocalized = !0),
                    t._adjustScaleWidth(),
                    t._updateUIState(!0);
                });
            },
          },
          {
            key: "_updateUIState",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (this._wasLocalized) {
                var t = this.pageNumber,
                  n = this.pagesCount,
                  i = this.pageScaleValue,
                  r = this.pageScale,
                  o = this.items;
                e &&
                  (this.hasPageLabels
                    ? (o.pageNumber.type = "text")
                    : ((o.pageNumber.type = "number"),
                      this.l10n
                        .get("of_pages", { pagesCount: n }, "of {{pagesCount}}")
                        .then(function (e) {
                          o.numPages.textContent = e;
                        })),
                  (o.pageNumber.max = n)),
                  this.hasPageLabels
                    ? ((o.pageNumber.value = this.pageLabel),
                      this.l10n
                        .get(
                          "page_of_pages",
                          { pageNumber: t, pagesCount: n },
                          "({{pageNumber}} of {{pagesCount}})"
                        )
                        .then(function (e) {
                          o.numPages.textContent = e;
                        }))
                    : (o.pageNumber.value = t),
                  (o.previous.disabled = t <= 1),
                  (o.next.disabled = t >= n),
                  (o.zoomOut.disabled = r <= a.MIN_SCALE),
                  (o.zoomIn.disabled = r >= a.MAX_SCALE);
                var u = Math.round(1e4 * r) / 100;
                this.l10n
                  .get("page_scale_percent", { scale: u }, "{{scale}}%")
                  .then(function (e) {
                    var t,
                      n = !1,
                      r = s(o.scaleSelect.options);
                    try {
                      for (r.s(); !(t = r.n()).done; ) {
                        var a = t.value;
                        a.value === i
                          ? ((a.selected = !0), (n = !0))
                          : (a.selected = !1);
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                    n ||
                      ((o.customScaleOption.textContent = e),
                      (o.customScaleOption.selected = !0));
                  });
              }
            },
          },
          {
            key: "updateLoadingIndicatorState",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.items.pageNumber.classList.toggle("visiblePageIsLoading", e);
            },
          },
          {
            key: "_adjustScaleWidth",
            value: (function () {
              var e,
                t =
                  ((e = r.default.mark(function e() {
                    var t, n, i, o, u, l, c, d, h, f, p, v, g, m;
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.items),
                                (n = this.l10n),
                                (i = Promise.all([
                                  n.get(
                                    "page_scale_auto",
                                    null,
                                    "Automatic Zoom"
                                  ),
                                  n.get(
                                    "page_scale_actual",
                                    null,
                                    "Actual Size"
                                  ),
                                  n.get("page_scale_fit", null, "Page Fit"),
                                  n.get("page_scale_width", null, "Page Width"),
                                ])),
                                ((o =
                                  document.createElement("canvas")).mozOpaque =
                                  !0),
                                (u = o.getContext("2d", { alpha: !1 })),
                                (e.next = 7),
                                a.animationStarted
                              );
                            case 7:
                              return (
                                (l = getComputedStyle(t.scaleSelect)),
                                (c = l.fontSize),
                                (d = l.fontFamily),
                                (u.font = "".concat(c, " ").concat(d)),
                                (h = 0),
                                (e.t0 = s),
                                (e.next = 13),
                                i
                              );
                            case 13:
                              (e.t1 = e.sent), (f = (0, e.t0)(e.t1));
                              try {
                                for (f.s(); !(p = f.n()).done; )
                                  (v = p.value),
                                    (g = u.measureText(v)),
                                    (m = g.width) > h && (h = m);
                              } catch (e) {
                                f.e(e);
                              } finally {
                                f.f();
                              }
                              22,
                                (h += 33) > 140 &&
                                  ((t.scaleSelect.style.width = "".concat(
                                    h + 22,
                                    "px"
                                  )),
                                  (t.scaleSelectContainer.style.width =
                                    "".concat(h, "px"))),
                                (o.width = 0),
                                (o.height = 0),
                                (o = u = null);
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (i, r) {
                      var a = e.apply(t, n);
                      function s(e) {
                        o(a, i, r, s, u, "next", e);
                      }
                      function u(e) {
                        o(a, i, r, s, u, "throw", e);
                      }
                      s(void 0);
                    });
                  });
              return function () {
                return t.apply(this, arguments);
              };
            })(),
          },
        ]) && l(t.prototype, n),
        i && l(t, i),
        e
      );
    })();
    t.Toolbar = c;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ViewHistory = void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i };
    function a(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function o(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = e.apply(t, n);
          function s(e) {
            a(o, i, r, s, u, "next", e);
          }
          function u(e) {
            a(o, i, r, s, u, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var u = 20,
      l = (function () {
        function e(t) {
          var n = this,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : u;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.fingerprint = t),
            (this.cacheSize = i),
            (this._initializedPromise = this._readFromStorage().then(function (
              e
            ) {
              var t = JSON.parse(e || "{}"),
                i = -1;
              if (Array.isArray(t.files)) {
                for (; t.files.length >= n.cacheSize; ) t.files.shift();
                for (var r = 0, a = t.files.length; r < a; r++) {
                  if (t.files[r].fingerprint === n.fingerprint) {
                    i = r;
                    break;
                  }
                }
              } else t.files = [];
              -1 === i &&
                (i = t.files.push({ fingerprint: n.fingerprint }) - 1),
                (n.file = t.files[i]),
                (n.database = t);
            }));
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "_writeToStorage",
              value: (function () {
                var e = o(
                  r.default.mark(function e() {
                    var t;
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = JSON.stringify(this.database)),
                                localStorage.setItem("pdfjs.history", t);
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_readFromStorage",
              value: (function () {
                var e = o(
                  r.default.mark(function e() {
                    return r.default.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              localStorage.getItem("pdfjs.history")
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "set",
              value: (function () {
                var e = o(
                  r.default.mark(function e(t, n) {
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._initializedPromise;
                            case 2:
                              return (
                                (this.file[t] = n),
                                e.abrupt("return", this._writeToStorage())
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "setMultiple",
              value: (function () {
                var e = o(
                  r.default.mark(function e(t) {
                    var n;
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._initializedPromise;
                            case 2:
                              for (n in t) this.file[n] = t[n];
                              return e.abrupt("return", this._writeToStorage());
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "get",
              value: (function () {
                var e = o(
                  r.default.mark(function e(t, n) {
                    var i;
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._initializedPromise;
                            case 2:
                              return (
                                (i = this.file[t]),
                                e.abrupt("return", void 0 !== i ? i : n)
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getMultiple",
              value: (function () {
                var e = o(
                  r.default.mark(function e(t) {
                    var n, i, a;
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._initializedPromise;
                            case 2:
                              for (i in ((n = Object.create(null)), t))
                                (a = this.file[i]),
                                  (n[i] = void 0 !== a ? a : t[i]);
                              return e.abrupt("return", n);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]) && s(t.prototype, n),
          i && s(t, i),
          e
        );
      })();
    t.ViewHistory = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GenericCom = void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i },
      a = n(1),
      o = n(37),
      s = n(38),
      u = n(39);
    function l(e) {
      return (l =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function c(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function d(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var a = e.apply(t, n);
          function o(e) {
            c(a, i, r, o, s, "next", e);
          }
          function s(e) {
            c(a, i, r, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function p(e, t, n) {
      return t && f(e.prototype, t), n && f(e, n), e;
    }
    function v(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && g(e, t);
    }
    function g(e, t) {
      return (g =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function m(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = y(e);
        if (t) {
          var r = y(this).constructor;
          n = Reflect.construct(i, arguments, r);
        } else n = i.apply(this, arguments);
        return (function (e, t) {
          if (t && ("object" === l(t) || "function" == typeof t)) return t;
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        })(this, n);
      };
    }
    function y(e) {
      return (y = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    t.GenericCom = {};
    var b = (function (e) {
        v(n, o.BasePreferences);
        var t = m(n);
        function n() {
          return h(this, n), t.apply(this, arguments);
        }
        return (
          p(n, [
            {
              key: "_writeToStorage",
              value: (function () {
                var e = d(
                  r.default.mark(function e(t) {
                    return r.default.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            localStorage.setItem(
                              "pdfjs.preferences",
                              JSON.stringify(t)
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_readFromStorage",
              value: (function () {
                var e = d(
                  r.default.mark(function e(t) {
                    return r.default.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              JSON.parse(
                                localStorage.getItem("pdfjs.preferences")
                              )
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          n
        );
      })(),
      w = (function (e) {
        v(n, a.DefaultExternalServices);
        var t = m(n);
        function n() {
          return h(this, n), t.apply(this, arguments);
        }
        return (
          p(n, null, [
            {
              key: "createDownloadManager",
              value: function (e) {
                return new s.DownloadManager(e);
              },
            },
            {
              key: "createPreferences",
              value: function () {
                return new b();
              },
            },
            {
              key: "createL10n",
              value: function (e) {
                var t = e.locale,
                  n = void 0 === t ? "en-US" : t;
                return new u.GenericL10n(n);
              },
            },
          ]),
          n
        );
      })();
    a.PDFViewerApplication.externalServices = w;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BasePreferences = void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i };
    n(6);
    function a(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function o(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = e.apply(t, n);
          function s(e) {
            a(o, i, r, s, u, "next", e);
          }
          function u(e) {
            a(o, i, r, s, u, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function s(e) {
      return (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var l = null;
    var c = (function () {
      function e() {
        var t = this;
        if (
          ((function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          this.constructor === e)
        )
          throw new Error("Cannot initialize BasePreferences.");
        (this.prefs = null),
          (this._initializedPromise = (l ||
            (l = Promise.resolve({
              cursorToolOnLoad: 0,
              defaultZoomValue: "",
              disablePageLabels: !1,
              enablePermissions: !1,
              enablePrintAutoRotate: !1,
              enableWebGL: !1,
              externalLinkTarget: 0,
              historyUpdateUrl: !1,
              ignoreDestinationZoom: !1,
              pdfBugEnabled: !1,
              renderer: "canvas",
              renderInteractiveForms: !1,
              sidebarViewOnLoad: -1,
              scrollModeOnLoad: -1,
              spreadModeOnLoad: -1,
              textLayerMode: 1,
              useOnlyCssZoom: !1,
              viewOnLoad: 0,
              disableAutoFetch: !1,
              disableFontFace: !1,
              disableRange: !1,
              disableStream: !1,
            })),
          l)
            .then(function (e) {
              return (
                Object.defineProperty(t, "defaults", {
                  value: Object.freeze(e),
                  writable: !1,
                  enumerable: !0,
                  configurable: !1,
                }),
                (t.prefs = Object.assign(Object.create(null), e)),
                t._readFromStorage(e)
              );
            })
            .then(function (e) {
              if (e)
                for (var n in e) {
                  var i = t.defaults[n],
                    r = e[n];
                  void 0 !== i && s(r) === s(i) && (t.prefs[n] = r);
                }
            }));
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "_writeToStorage",
            value: (function () {
              var e = o(
                r.default.mark(function e(t) {
                  return r.default.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          throw new Error("Not implemented: _writeToStorage");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "_readFromStorage",
            value: (function () {
              var e = o(
                r.default.mark(function e(t) {
                  return r.default.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          throw new Error("Not implemented: _readFromStorage");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "reset",
            value: (function () {
              var e = o(
                r.default.mark(function e() {
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this._initializedPromise;
                          case 2:
                            return (
                              (this.prefs = Object.assign(
                                Object.create(null),
                                this.defaults
                              )),
                              e.abrupt(
                                "return",
                                this._writeToStorage(this.defaults)
                              )
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "set",
            value: (function () {
              var e = o(
                r.default.mark(function e(t, n) {
                  var i, a, o;
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this._initializedPromise;
                          case 2:
                            if (void 0 !== (i = this.defaults[t])) {
                              e.next = 7;
                              break;
                            }
                            throw new Error(
                              'Set preference: "'.concat(t, '" is undefined.')
                            );
                          case 7:
                            if (void 0 !== n) {
                              e.next = 9;
                              break;
                            }
                            throw new Error(
                              "Set preference: no value is specified."
                            );
                          case 9:
                            if (((a = s(n)), (o = s(i)), a === o)) {
                              e.next = 19;
                              break;
                            }
                            if ("number" !== a || "string" !== o) {
                              e.next = 16;
                              break;
                            }
                            (n = n.toString()), (e.next = 17);
                            break;
                          case 16:
                            throw new Error(
                              'Set preference: "'
                                .concat(n, '" is a ')
                                .concat(a, ", ") + "expected a ".concat(o, ".")
                            );
                          case 17:
                            e.next = 21;
                            break;
                          case 19:
                            if ("number" !== a || Number.isInteger(n)) {
                              e.next = 21;
                              break;
                            }
                            throw new Error(
                              'Set preference: "'.concat(
                                n,
                                '" must be an integer.'
                              )
                            );
                          case 21:
                            return (
                              (this.prefs[t] = n),
                              e.abrupt(
                                "return",
                                this._writeToStorage(this.prefs)
                              )
                            );
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "get",
            value: (function () {
              var e = o(
                r.default.mark(function e(t) {
                  var n, i;
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this._initializedPromise;
                          case 2:
                            if (void 0 !== (n = this.defaults[t])) {
                              e.next = 7;
                              break;
                            }
                            throw new Error(
                              'Get preference: "'.concat(t, '" is undefined.')
                            );
                          case 7:
                            if (void 0 === (i = this.prefs[t])) {
                              e.next = 10;
                              break;
                            }
                            return e.abrupt("return", i);
                          case 10:
                            return e.abrupt("return", n);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getAll",
            value: (function () {
              var e = o(
                r.default.mark(function e() {
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this._initializedPromise;
                          case 2:
                            return e.abrupt(
                              "return",
                              Object.assign(
                                Object.create(null),
                                this.defaults,
                                this.prefs
                              )
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
          },
        ]) && u(t.prototype, n),
        i && u(t, i),
        e
      );
    })();
    t.BasePreferences = c;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DownloadManager = void 0);
    var i = n(8);
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var a = n(7).viewerCompatibilityParams.disableCreateObjectURL || !1;
    function o(e, t) {
      var n = document.createElement("a");
      if (!n.click)
        throw new Error('DownloadManager: "a.click()" is not supported.');
      (n.href = e),
        (n.target = "_parent"),
        "download" in n && (n.download = t),
        (document.body || document.documentElement).appendChild(n),
        n.click(),
        n.remove();
    }
    var s = (function () {
      function e(t) {
        var n = t.disableCreateObjectURL,
          i = void 0 === n ? a : n;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.disableCreateObjectURL = i);
      }
      var t, n, s;
      return (
        (t = e),
        (n = [
          {
            key: "downloadUrl",
            value: function (e, t) {
              (0, i.createValidAbsoluteUrl)(e, "http://example.com") &&
                o(e + "#pdfjs.action=download", t);
            },
          },
          {
            key: "downloadData",
            value: function (e, t, n) {
              navigator.msSaveBlob
                ? navigator.msSaveBlob(new Blob([e], { type: n }), t)
                : o(
                    (0, i.createObjectURL)(e, n, this.disableCreateObjectURL),
                    t
                  );
            },
          },
          {
            key: "download",
            value: function (e, t, n) {
              navigator.msSaveBlob
                ? navigator.msSaveBlob(e, n) || this.downloadUrl(t, n)
                : this.disableCreateObjectURL
                ? this.downloadUrl(t, n)
                : o(URL.createObjectURL(e), n);
            },
          },
        ]) && r(t.prototype, n),
        s && r(t, s),
        e
      );
    })();
    t.DownloadManager = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GenericL10n = void 0);
    var i,
      r = (i = n(2)) && i.__esModule ? i : { default: i };
    function a(e, t, n, i, r, a, o) {
      try {
        var s = e[a](o),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(u) : Promise.resolve(u).then(i, r);
    }
    function o(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = e.apply(t, n);
          function s(e) {
            a(o, i, r, s, u, "next", e);
          }
          function u(e) {
            a(o, i, r, s, u, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    n(40);
    var u = document.webL10n,
      l = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._lang = t),
            (this._ready = new Promise(function (e, n) {
              u.setLanguage(t, function () {
                e(u);
              });
            }));
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "getLanguage",
              value: (function () {
                var e = o(
                  r.default.mark(function e() {
                    var t;
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._ready;
                            case 2:
                              return (
                                (t = e.sent),
                                e.abrupt("return", t.getLanguage())
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDirection",
              value: (function () {
                var e = o(
                  r.default.mark(function e() {
                    var t;
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._ready;
                            case 2:
                              return (
                                (t = e.sent),
                                e.abrupt("return", t.getDirection())
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "get",
              value: (function () {
                var e = o(
                  r.default.mark(function e(t, n, i) {
                    var a;
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._ready;
                            case 2:
                              return (
                                (a = e.sent), e.abrupt("return", a.get(t, n, i))
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, i) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "translate",
              value: (function () {
                var e = o(
                  r.default.mark(function e(t) {
                    var n;
                    return r.default.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._ready;
                            case 2:
                              return (
                                (n = e.sent), e.abrupt("return", n.translate(t))
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]) && s(t.prototype, n),
          i && s(t, i),
          e
        );
      })();
    t.GenericL10n = l;
  },
  function (e, t, n) {
    "use strict";
    document.webL10n = (function (e, t, n) {
      var i = {},
        r = "",
        a = "textContent",
        o = "",
        s = {},
        u = "loading",
        l = !0;
      function c(e, t, n) {
        (t = t || function (e) {}), (n = n || function () {});
        var i = new XMLHttpRequest();
        i.open("GET", e, l),
          i.overrideMimeType && i.overrideMimeType("text/plain; charset=utf-8"),
          (i.onreadystatechange = function () {
            4 == i.readyState &&
              (200 == i.status || 0 === i.status ? t(i.responseText) : n());
          }),
          (i.onerror = n),
          (i.ontimeout = n);
        try {
          i.send(null);
        } catch (e) {
          n();
        }
      }
      function d(e, t, n, o) {
        var s = e.replace(/[^\/]*$/, "") || "./";
        c(
          e,
          function (e) {
            (r += e),
              (function (e, n) {
                var i = {},
                  r = /^\s*|\s*$/,
                  a = /^\s*#|^\s*$/,
                  o = /^\s*\[(.*)\]\s*$/,
                  u = /^\s*@import\s+url\((.*)\)\s*$/i,
                  l = /^([^=\s]*)\s*=\s*(.+)$/;
                function d(e, n, c) {
                  var d = e.replace(r, "").split(/[\r\n]+/),
                    f = "*",
                    p = t.split("-", 1)[0],
                    v = !1,
                    g = "";
                  !(function e() {
                    for (;;) {
                      if (!d.length) return void c();
                      var r = d.shift();
                      if (!a.test(r)) {
                        if (n) {
                          if ((g = o.exec(r))) {
                            (f = g[1].toLowerCase()),
                              (v = "*" !== f && f !== t && f !== p);
                            continue;
                          }
                          if (v) continue;
                          if ((g = u.exec(r))) return void h(s + g[1], e);
                        }
                        var m = r.match(l);
                        m &&
                          3 == m.length &&
                          (i[m[1]] =
                            (y = m[2]).lastIndexOf("\\") < 0
                              ? y
                              : y
                                  .replace(/\\\\/g, "\\")
                                  .replace(/\\n/g, "\n")
                                  .replace(/\\r/g, "\r")
                                  .replace(/\\t/g, "\t")
                                  .replace(/\\b/g, "\b")
                                  .replace(/\\f/g, "\f")
                                  .replace(/\\{/g, "{")
                                  .replace(/\\}/g, "}")
                                  .replace(/\\"/g, '"')
                                  .replace(/\\'/g, "'"));
                      }
                    }
                    var y;
                  })();
                }
                function h(e, t) {
                  c(
                    e,
                    function (e) {
                      d(e, !1, t);
                    },
                    function () {
                      console.warn(e + " not found."), t();
                    }
                  );
                }
                d(e, !0, function () {
                  n(i);
                });
              })(e, function (e) {
                for (var t in e) {
                  var r,
                    o,
                    s = t.lastIndexOf(".");
                  s > 0
                    ? ((r = t.substring(0, s)), (o = t.substring(s + 1)))
                    : ((r = t), (o = a)),
                    i[r] || (i[r] = {}),
                    (i[r][o] = e[t]);
                }
                n && n();
              });
          },
          o
        );
      }
      function h(e, n) {
        e && (e = e.toLowerCase()),
          (n = n || function () {}),
          (i = {}),
          (r = ""),
          (o = ""),
          (o = e);
        var a = t.querySelectorAll('link[type="application/l10n"]'),
          s = a.length;
        if (0 !== s) {
          var l,
            c,
            h = 0;
          c = function () {
            ++h >= s && (n(), (u = "complete"));
          };
          for (var f = 0; f < s; f++) {
            new m(a[f]).load(e, c);
          }
        } else {
          var p = (l = t.querySelector('script[type="application/l10n"]'))
            ? JSON.parse(l.innerHTML)
            : null;
          if (p && p.locales && p.default_locale) {
            if (
              (console.log("using the embedded JSON directory, early way out"),
              !(i = p.locales[e]))
            ) {
              var v = p.default_locale.toLowerCase();
              for (var g in p.locales) {
                if ((g = g.toLowerCase()) === e) {
                  i = p.locales[e];
                  break;
                }
                g === v && (i = p.locales[v]);
              }
            }
            n();
          } else console.log("no resource to load, early way out");
          u = "complete";
        }
        function m(e) {
          var t = e.href;
          this.load = function (e, n) {
            d(t, e, n, function () {
              console.warn(t + " not found."),
                console.warn('"' + e + '" resource not found'),
                (o = ""),
                n();
            });
          };
        }
      }
      function f(e, t, n) {
        var r = i[e];
        if (!r) {
          if ((console.warn("#" + e + " is undefined."), !n)) return null;
          r = n;
        }
        var a = {};
        for (var o in r) {
          var s = r[o];
          (s = v((s = p(s, t, e, o)), t, e)), (a[o] = s);
        }
        return a;
      }
      function p(e, t, n, r) {
        var a = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/.exec(e);
        if (!a || !a.length) return e;
        var o,
          u = a[1],
          l = a[2];
        (t && l in t ? (o = t[l]) : l in i && (o = i[l]), u in s) &&
          (e = (0, s[u])(e, o, n, r));
        return e;
      }
      function v(e, t, n) {
        return e.replace(/\{\{\s*(.+?)\s*\}\}/g, function (e, r) {
          return t && r in t
            ? t[r]
            : r in i
            ? i[r]
            : (console.log(
                "argument {{" + r + "}} for #" + n + " is undefined."
              ),
              e);
        });
      }
      function g(e) {
        var n = (function (e) {
          if (!e) return {};
          var t = e.getAttribute("data-l10n-id"),
            n = e.getAttribute("data-l10n-args"),
            i = {};
          if (n)
            try {
              i = JSON.parse(n);
            } catch (e) {
              console.warn("could not parse arguments for #" + t);
            }
          return { id: t, args: i };
        })(e);
        if (n.id) {
          var i = f(n.id, n.args);
          if (i) {
            if (i[a]) {
              if (
                0 ===
                (function (e) {
                  if (e.children) return e.children.length;
                  if (void 0 !== e.childElementCount)
                    return e.childElementCount;
                  for (var t = 0, n = 0; n < e.childNodes.length; n++)
                    t += 1 === e.nodeType ? 1 : 0;
                  return t;
                })(e)
              )
                e[a] = i[a];
              else {
                for (
                  var r = e.childNodes, o = !1, s = 0, u = r.length;
                  s < u;
                  s++
                )
                  3 === r[s].nodeType &&
                    /\S/.test(r[s].nodeValue) &&
                    (o
                      ? (r[s].nodeValue = "")
                      : ((r[s].nodeValue = i[a]), (o = !0)));
                if (!o) {
                  var l = t.createTextNode(i[a]);
                  e.insertBefore(l, e.firstChild);
                }
              }
              delete i[a];
            }
            for (var c in i) e[c] = i[c];
          } else console.warn("#" + n.id + " is undefined.");
        }
      }
      return (
        (s.plural = function (e, t, n, r) {
          var u = parseFloat(t);
          if (isNaN(u)) return e;
          if (r != a) return e;
          s._pluralRules ||
            (s._pluralRules = (function (e) {
              function t(e, t) {
                return -1 !== t.indexOf(e);
              }
              function n(e, t, n) {
                return t <= e && e <= n;
              }
              var i = {
                  0: function (e) {
                    return "other";
                  },
                  1: function (e) {
                    return n(e % 100, 3, 10)
                      ? "few"
                      : 0 === e
                      ? "zero"
                      : n(e % 100, 11, 99)
                      ? "many"
                      : 2 == e
                      ? "two"
                      : 1 == e
                      ? "one"
                      : "other";
                  },
                  2: function (e) {
                    return 0 !== e && e % 10 == 0
                      ? "many"
                      : 2 == e
                      ? "two"
                      : 1 == e
                      ? "one"
                      : "other";
                  },
                  3: function (e) {
                    return 1 == e ? "one" : "other";
                  },
                  4: function (e) {
                    return n(e, 0, 1) ? "one" : "other";
                  },
                  5: function (e) {
                    return n(e, 0, 2) && 2 != e ? "one" : "other";
                  },
                  6: function (e) {
                    return 0 === e
                      ? "zero"
                      : e % 10 == 1 && e % 100 != 11
                      ? "one"
                      : "other";
                  },
                  7: function (e) {
                    return 2 == e ? "two" : 1 == e ? "one" : "other";
                  },
                  8: function (e) {
                    return n(e, 3, 6)
                      ? "few"
                      : n(e, 7, 10)
                      ? "many"
                      : 2 == e
                      ? "two"
                      : 1 == e
                      ? "one"
                      : "other";
                  },
                  9: function (e) {
                    return 0 === e || (1 != e && n(e % 100, 1, 19))
                      ? "few"
                      : 1 == e
                      ? "one"
                      : "other";
                  },
                  10: function (e) {
                    return n(e % 10, 2, 9) && !n(e % 100, 11, 19)
                      ? "few"
                      : e % 10 != 1 || n(e % 100, 11, 19)
                      ? "other"
                      : "one";
                  },
                  11: function (e) {
                    return n(e % 10, 2, 4) && !n(e % 100, 12, 14)
                      ? "few"
                      : e % 10 == 0 || n(e % 10, 5, 9) || n(e % 100, 11, 14)
                      ? "many"
                      : e % 10 == 1 && e % 100 != 11
                      ? "one"
                      : "other";
                  },
                  12: function (e) {
                    return n(e, 2, 4) ? "few" : 1 == e ? "one" : "other";
                  },
                  13: function (e) {
                    return n(e % 10, 2, 4) && !n(e % 100, 12, 14)
                      ? "few"
                      : (1 != e && n(e % 10, 0, 1)) ||
                        n(e % 10, 5, 9) ||
                        n(e % 100, 12, 14)
                      ? "many"
                      : 1 == e
                      ? "one"
                      : "other";
                  },
                  14: function (e) {
                    return n(e % 100, 3, 4)
                      ? "few"
                      : e % 100 == 2
                      ? "two"
                      : e % 100 == 1
                      ? "one"
                      : "other";
                  },
                  15: function (e) {
                    return 0 === e || n(e % 100, 2, 10)
                      ? "few"
                      : n(e % 100, 11, 19)
                      ? "many"
                      : 1 == e
                      ? "one"
                      : "other";
                  },
                  16: function (e) {
                    return e % 10 == 1 && 11 != e ? "one" : "other";
                  },
                  17: function (e) {
                    return 3 == e
                      ? "few"
                      : 0 === e
                      ? "zero"
                      : 6 == e
                      ? "many"
                      : 2 == e
                      ? "two"
                      : 1 == e
                      ? "one"
                      : "other";
                  },
                  18: function (e) {
                    return 0 === e
                      ? "zero"
                      : n(e, 0, 2) && 0 !== e && 2 != e
                      ? "one"
                      : "other";
                  },
                  19: function (e) {
                    return n(e, 2, 10) ? "few" : n(e, 0, 1) ? "one" : "other";
                  },
                  20: function (e) {
                    return (!n(e % 10, 3, 4) && e % 10 != 9) ||
                      n(e % 100, 10, 19) ||
                      n(e % 100, 70, 79) ||
                      n(e % 100, 90, 99)
                      ? e % 1e6 == 0 && 0 !== e
                        ? "many"
                        : e % 10 != 2 || t(e % 100, [12, 72, 92])
                        ? e % 10 != 1 || t(e % 100, [11, 71, 91])
                          ? "other"
                          : "one"
                        : "two"
                      : "few";
                  },
                  21: function (e) {
                    return 0 === e ? "zero" : 1 == e ? "one" : "other";
                  },
                  22: function (e) {
                    return n(e, 0, 1) || n(e, 11, 99) ? "one" : "other";
                  },
                  23: function (e) {
                    return n(e % 10, 1, 2) || e % 20 == 0 ? "one" : "other";
                  },
                  24: function (e) {
                    return n(e, 3, 10) || n(e, 13, 19)
                      ? "few"
                      : t(e, [2, 12])
                      ? "two"
                      : t(e, [1, 11])
                      ? "one"
                      : "other";
                  },
                },
                r = {
                  af: 3,
                  ak: 4,
                  am: 4,
                  ar: 1,
                  asa: 3,
                  az: 0,
                  be: 11,
                  bem: 3,
                  bez: 3,
                  bg: 3,
                  bh: 4,
                  bm: 0,
                  bn: 3,
                  bo: 0,
                  br: 20,
                  brx: 3,
                  bs: 11,
                  ca: 3,
                  cgg: 3,
                  chr: 3,
                  cs: 12,
                  cy: 17,
                  da: 3,
                  de: 3,
                  dv: 3,
                  dz: 0,
                  ee: 3,
                  el: 3,
                  en: 3,
                  eo: 3,
                  es: 3,
                  et: 3,
                  eu: 3,
                  fa: 0,
                  ff: 5,
                  fi: 3,
                  fil: 4,
                  fo: 3,
                  fr: 5,
                  fur: 3,
                  fy: 3,
                  ga: 8,
                  gd: 24,
                  gl: 3,
                  gsw: 3,
                  gu: 3,
                  guw: 4,
                  gv: 23,
                  ha: 3,
                  haw: 3,
                  he: 2,
                  hi: 4,
                  hr: 11,
                  hu: 0,
                  id: 0,
                  ig: 0,
                  ii: 0,
                  is: 3,
                  it: 3,
                  iu: 7,
                  ja: 0,
                  jmc: 3,
                  jv: 0,
                  ka: 0,
                  kab: 5,
                  kaj: 3,
                  kcg: 3,
                  kde: 0,
                  kea: 0,
                  kk: 3,
                  kl: 3,
                  km: 0,
                  kn: 0,
                  ko: 0,
                  ksb: 3,
                  ksh: 21,
                  ku: 3,
                  kw: 7,
                  lag: 18,
                  lb: 3,
                  lg: 3,
                  ln: 4,
                  lo: 0,
                  lt: 10,
                  lv: 6,
                  mas: 3,
                  mg: 4,
                  mk: 16,
                  ml: 3,
                  mn: 3,
                  mo: 9,
                  mr: 3,
                  ms: 0,
                  mt: 15,
                  my: 0,
                  nah: 3,
                  naq: 7,
                  nb: 3,
                  nd: 3,
                  ne: 3,
                  nl: 3,
                  nn: 3,
                  no: 3,
                  nr: 3,
                  nso: 4,
                  ny: 3,
                  nyn: 3,
                  om: 3,
                  or: 3,
                  pa: 3,
                  pap: 3,
                  pl: 13,
                  ps: 3,
                  pt: 3,
                  rm: 3,
                  ro: 9,
                  rof: 3,
                  ru: 11,
                  rwk: 3,
                  sah: 0,
                  saq: 3,
                  se: 7,
                  seh: 3,
                  ses: 0,
                  sg: 0,
                  sh: 11,
                  shi: 19,
                  sk: 12,
                  sl: 14,
                  sma: 7,
                  smi: 7,
                  smj: 7,
                  smn: 7,
                  sms: 7,
                  sn: 3,
                  so: 3,
                  sq: 3,
                  sr: 11,
                  ss: 3,
                  ssy: 3,
                  st: 3,
                  sv: 3,
                  sw: 3,
                  syr: 3,
                  ta: 3,
                  te: 3,
                  teo: 3,
                  th: 0,
                  ti: 4,
                  tig: 3,
                  tk: 3,
                  tl: 4,
                  tn: 3,
                  to: 0,
                  tr: 0,
                  ts: 3,
                  tzm: 22,
                  uk: 11,
                  ur: 3,
                  ve: 3,
                  vi: 0,
                  vun: 3,
                  wa: 4,
                  wae: 3,
                  wo: 0,
                  xh: 3,
                  xog: 3,
                  yo: 0,
                  zh: 0,
                  zu: 3,
                }[e.replace(/-.*$/, "")];
              return r in i
                ? i[r]
                : (console.warn("plural form unknown for [" + e + "]"),
                  function () {
                    return "other";
                  });
            })(o));
          var l = "[" + s._pluralRules(u) + "]";
          return (
            0 === u && n + "[zero]" in i
              ? (e = i[n + "[zero]"][r])
              : 1 == u && n + "[one]" in i
              ? (e = i[n + "[one]"][r])
              : 2 == u && n + "[two]" in i
              ? (e = i[n + "[two]"][r])
              : n + l in i
              ? (e = i[n + l][r])
              : n + "[other]" in i && (e = i[n + "[other]"][r]),
            e
          );
        }),
        {
          get: function (e, t, n) {
            var i,
              r = e.lastIndexOf("."),
              o = a;
            r > 0 && ((o = e.substring(r + 1)), (e = e.substring(0, r))),
              n && ((i = {})[o] = n);
            var s = f(e, t, i);
            return s && o in s ? s[o] : "{{" + e + "}}";
          },
          getData: function () {
            return i;
          },
          getText: function () {
            return r;
          },
          getLanguage: function () {
            return o;
          },
          setLanguage: function (e, t) {
            h(e, function () {
              t && t();
            });
          },
          getDirection: function () {
            var e = o.split("-", 1)[0];
            return ["ar", "he", "fa", "ps", "ur"].indexOf(e) >= 0
              ? "rtl"
              : "ltr";
          },
          translate: function (e) {
            for (
              var n = (function (e) {
                  return e ? e.querySelectorAll("*[data-l10n-id]") : [];
                })((e = e || t.documentElement)),
                i = n.length,
                r = 0;
              r < i;
              r++
            )
              g(n[r]);
            g(e);
          },
          getReadyState: function () {
            return u;
          },
          ready: function (n) {
            n &&
              ("complete" == u || "interactive" == u
                ? e.setTimeout(function () {
                    n();
                  })
                : t.addEventListener &&
                  t.addEventListener("localized", function e() {
                    t.removeEventListener("localized", e), n();
                  }));
          },
        }
      );
    })(window, document);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PDFPrintService = u);
    var i = n(5),
      r = n(1),
      a = n(6),
      o = null,
      s = null;
    function u(e, t, n, r) {
      (this.pdfDocument = e),
        (this.pagesOverview = t),
        (this.printContainer = n),
        (this.l10n = r || i.NullL10n),
        (this.disableCreateObjectURL = a.AppOptions.get(
          "disableCreateObjectURL"
        )),
        (this.currentPage = -1),
        (this.scratchCanvas = document.createElement("canvas"));
    }
    u.prototype = {
      layout: function () {
        this.throwIfInactive();
        var e = document.querySelector("body");
        e.setAttribute("data-pdfjsprinting", !0),
          this.pagesOverview.every(function (e) {
            return (
              e.width === this.pagesOverview[0].width &&
              e.height === this.pagesOverview[0].height
            );
          }, this) ||
            console.warn(
              "Not all pages have the same size. The printed result may be incorrect!"
            ),
          (this.pageStyleSheet = document.createElement("style"));
        var t = this.pagesOverview[0];
        (this.pageStyleSheet.textContent =
          "@supports ((size:A4) and (size:1pt 1pt)) {@page { size: " +
          t.width +
          "pt " +
          t.height +
          "pt;}}"),
          e.appendChild(this.pageStyleSheet);
      },
      destroy: function () {
        o === this &&
          ((this.printContainer.textContent = ""),
          document.querySelector("body").removeAttribute("data-pdfjsprinting"),
          this.pageStyleSheet &&
            (this.pageStyleSheet.remove(), (this.pageStyleSheet = null)),
          (this.scratchCanvas.width = this.scratchCanvas.height = 0),
          (this.scratchCanvas = null),
          (o = null),
          v().then(function () {
            "printServiceOverlay" === s.active &&
              s.close("printServiceOverlay");
          }));
      },
      renderPages: function () {
        var e = this,
          t = this.pagesOverview.length;
        return new Promise(function n(r, s) {
          if ((e.throwIfInactive(), ++e.currentPage >= t))
            return f(t, t, e.l10n), void r();
          var u = e.currentPage;
          f(u, t, e.l10n),
            (function (e, t, n, r) {
              var s = o.scratchCanvas,
                u = (a.AppOptions.get("printResolution") || 150) / 72;
              (s.width = Math.floor(r.width * u)),
                (s.height = Math.floor(r.height * u));
              var l = Math.floor(r.width * i.CSS_UNITS) + "px",
                c = Math.floor(r.height * i.CSS_UNITS) + "px",
                d = s.getContext("2d");
              return (
                d.save(),
                (d.fillStyle = "rgb(255, 255, 255)"),
                d.fillRect(0, 0, s.width, s.height),
                d.restore(),
                t
                  .getPage(n)
                  .then(function (e) {
                    var t = {
                      canvasContext: d,
                      transform: [u, 0, 0, u, 0, 0],
                      viewport: e.getViewport({
                        scale: 1,
                        rotation: r.rotation,
                      }),
                      intent: "print",
                    };
                    return e.render(t).promise;
                  })
                  .then(function () {
                    return { width: l, height: c };
                  })
              );
            })(0, e.pdfDocument, u + 1, e.pagesOverview[u])
              .then(e.useRenderedPage.bind(e))
              .then(function () {
                n(r, s);
              }, s);
        });
      },
      useRenderedPage: function (e) {
        this.throwIfInactive();
        var t = document.createElement("img");
        (t.style.width = e.width), (t.style.height = e.height);
        var n = this.scratchCanvas;
        "toBlob" in n && !this.disableCreateObjectURL
          ? n.toBlob(function (e) {
              t.src = URL.createObjectURL(e);
            })
          : (t.src = n.toDataURL());
        var i = document.createElement("div");
        return (
          i.appendChild(t),
          this.printContainer.appendChild(i),
          new Promise(function (e, n) {
            (t.onload = e), (t.onerror = n);
          })
        );
      },
      performPrint: function () {
        var e = this;
        return (
          this.throwIfInactive(),
          new Promise(function (t) {
            setTimeout(function () {
              e.active ? (c.call(window), setTimeout(t, 20)) : t();
            }, 0);
          })
        );
      },
      get active() {
        return this === o;
      },
      throwIfInactive: function () {
        if (!this.active)
          throw new Error("This print request was cancelled or completed.");
      },
    };
    var l,
      c = window.print;
    function d(e) {
      var t = document.createEvent("CustomEvent");
      t.initCustomEvent(e, !1, !1, "custom"), window.dispatchEvent(t);
    }
    function h() {
      o && (o.destroy(), d("afterprint"));
    }
    function f(e, t, n) {
      var i = document.getElementById("printServiceOverlay"),
        r = Math.round((100 * e) / t),
        a = i.querySelector("progress"),
        o = i.querySelector(".relative-progress");
      (a.value = r),
        n
          .get("print_progress_percent", { progress: r }, r + "%")
          .then(function (e) {
            o.textContent = e;
          });
    }
    if (
      ((window.print = function () {
        if (o)
          console.warn(
            "Ignored window.print() because of a pending print job."
          );
        else {
          v().then(function () {
            o && s.open("printServiceOverlay");
          });
          try {
            d("beforeprint");
          } finally {
            if (!o)
              return (
                console.error("Expected print service to be initialized."),
                void v().then(function () {
                  "printServiceOverlay" === s.active &&
                    s.close("printServiceOverlay");
                })
              );
            var e = o;
            o.renderPages()
              .then(function () {
                return e.performPrint();
              })
              .catch(function () {})
              .then(function () {
                e.active && h();
              });
          }
        }
      }),
      window.addEventListener(
        "keydown",
        function (e) {
          80 !== e.keyCode ||
            (!e.ctrlKey && !e.metaKey) ||
            e.altKey ||
            (e.shiftKey && !window.chrome && !window.opera) ||
            (window.print(),
            e.preventDefault(),
            e.stopImmediatePropagation
              ? e.stopImmediatePropagation()
              : e.stopPropagation());
        },
        !0
      ),
      "onbeforeprint" in window)
    ) {
      var p = function (e) {
        "custom" !== e.detail &&
          e.stopImmediatePropagation &&
          e.stopImmediatePropagation();
      };
      window.addEventListener("beforeprint", p),
        window.addEventListener("afterprint", p);
    }
    function v() {
      if (!l) {
        if (!(s = r.PDFViewerApplication.overlayManager))
          throw new Error("The overlay manager has not yet been initialized.");
        (l = s.register(
          "printServiceOverlay",
          document.getElementById("printServiceOverlay"),
          h,
          !0
        )),
          (document.getElementById("printCancel").onclick = h);
      }
      return l;
    }
    r.PDFPrintServiceFactory.instance = {
      supportsPrinting: !0,
      createPrintService: function (e, t, n, i) {
        if (o) throw new Error("The print service is created and active.");
        return (o = new u(e, t, n, i));
      },
    };
  },
]);
