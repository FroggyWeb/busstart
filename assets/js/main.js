"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var o = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(i, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return i;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "/", n(n.s = 2);
}([function (t, e, n) {
  (function (t) {
    !function (t, e, n, i) {
      "use strict";

      if (t.console = t.console || {
        info: function info(t) {}
      }, n) if (n.fn.fancybox) console.info("fancyBox already initialized");else {
        var o,
            r,
            a = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          preventCaptionOverlap: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: {
            preload: !1
          },
          ajax: {
            settings: {
              data: {
                fancybox: !0
              }
            }
          },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: {
              scrolling: "auto"
            }
          },
          video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
          },
          parentEl: "body",
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: {
            autoStart: !1
          },
          touch: {
            vertical: !0,
            momentum: !0
          },
          hash: null,
          media: {},
          slideShow: {
            autoStart: !1,
            speed: 3e3
          },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
          },
          wheel: "auto",
          onInit: n.noop,
          beforeLoad: n.noop,
          afterLoad: n.noop,
          beforeShow: n.noop,
          afterShow: n.noop,
          beforeClose: n.noop,
          afterClose: n.noop,
          onActivate: n.noop,
          onDeactivate: n.noop,
          clickContent: function clickContent(t, e) {
            return "image" === t.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function clickContent(t, e) {
              return "image" === t.type && "toggleControls";
            },
            clickSlide: function clickSlide(t, e) {
              return "image" === t.type ? "toggleControls" : "close";
            },
            dblclickContent: function dblclickContent(t, e) {
              return "image" === t.type && "zoom";
            },
            dblclickSlide: function dblclickSlide(t, e) {
              return "image" === t.type && "zoom";
            }
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom"
            },
            de: {
              CLOSE: "Schlie&szlig;en",
              NEXT: "Weiter",
              PREV: "Zur&uuml;ck",
              ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Vergr&ouml;&szlig;ern"
            }
          }
        },
            s = n(t),
            l = n(e),
            c = 0,
            u = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
          return t.setTimeout(e, 1e3 / 60);
        },
            f = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
          t.clearTimeout(e);
        },
            d = function () {
          var t,
              n = e.createElement("fakeelement"),
              i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };

          for (t in i) {
            if (void 0 !== n.style[t]) return i[t];
          }

          return "transitionend";
        }(),
            p = function p(t) {
          return t && t.length && t[0].offsetHeight;
        },
            h = function h(t, e) {
          var i = n.extend(!0, {}, t, e);
          return n.each(e, function (t, e) {
            n.isArray(e) && (i[t] = e);
          }), i;
        },
            g = function g(t, e, i) {
          this.opts = h({
            index: i
          }, n.fancybox.defaults), n.isPlainObject(e) && (this.opts = h(this.opts, e)), n.fancybox.isMobile && (this.opts = h(this.opts, this.opts.mobile)), this.id = this.opts.id || ++c, this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, this.prevPos = null, this.currPos = 0, this.firstRun = !0, this.group = [], this.slides = {}, this.addContent(t), this.group.length && this.init();
        };

        n.extend(g.prototype, {
          init: function init() {
            var i,
                o,
                r = this,
                a = r.group[r.currIndex].opts;
            a.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== a.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), o = "", n.each(a.buttons, function (t, e) {
              o += a.btnTpl[e] || "";
            }), i = n(r.translate(r, a.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(a.baseClass).data("FancyBox", r).appendTo(a.parentEl), r.$refs = {
              container: i
            }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
              r.$refs[t] = i.find(".fancybox-" + t);
            }), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex);
          },
          translate: function translate(t, e) {
            var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
            return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
              return void 0 === n[e] ? t : n[e];
            });
          },
          addContent: function addContent(t) {
            var e,
                i = this,
                o = n.makeArray(t);
            n.each(o, function (t, e) {
              var o,
                  r,
                  a,
                  s,
                  l,
                  c = {},
                  u = {};
              n.isPlainObject(e) ? (c = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (u = (o = n(e)).data() || {}, (u = n.extend(!0, {}, u, u.options)).$orig = o, c.src = i.opts.src || u.src || o.attr("href"), c.type || c.src || (c.type = "inline", c.src = e)) : c = {
                type: "html",
                src: e + ""
              }, c.opts = n.extend(!0, {}, i.opts, u), n.isArray(u.buttons) && (c.opts.buttons = u.buttons), n.fancybox.isMobile && c.opts.mobile && (c.opts = h(c.opts, c.opts.mobile)), r = c.type || c.opts.type, s = c.src || "", !r && s && ((a = s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (r = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : s.match(/\.(pdf)((\?|#).*)?$/i) ? (r = "iframe", c = n.extend(!0, c, {
                contentType: "pdf",
                opts: {
                  iframe: {
                    preload: !1
                  }
                }
              })) : "#" === s.charAt(0) && (r = "inline")), r ? c.type = r : i.trigger("objectNeedsType", c), c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = i.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === i.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [i, c])), "function" === n.type(i.opts.caption) && (c.opts.caption = i.opts.caption.apply(e, [i, c])), c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && (l = s.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift()), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                trapFocus: !0,
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1
              })), i.group.push(c);
            }), Object.keys(i.slides).length && (i.updateControls(), (e = i.Thumbs) && e.isActive && (e.create(), e.focus()));
          },
          addEvents: function addEvents() {
            var e = this;
            e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
              t.stopPropagation(), t.preventDefault(), e.close(t);
            }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
              t.stopPropagation(), t.preventDefault(), e.previous();
            }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
              t.stopPropagation(), t.preventDefault(), e.next();
            }).on("click.fb", "[data-fancybox-zoom]", function (t) {
              e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
            }), s.on("orientationchange.fb resize.fb", function (t) {
              t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && f(e.requestId), e.requestId = u(function () {
                e.update(t);
              })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
                e.$refs.stage.show(), e.update(t);
              }, n.fancybox.isMobile ? 600 : 250));
            }), l.on("keydown.fb", function (t) {
              var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                  o = t.keyCode || t.which;

              if (9 != o) {
                if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === o || 27 === o ? (t.preventDefault(), void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, o);
              } else i.opts.trapFocus && e.focus(t);
            }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
              e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1;
            }), e.idleInterval = t.setInterval(function () {
              e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls());
            }, 1e3));
          },
          removeEvents: function removeEvents() {
            s.off("orientationchange.fb resize.fb"), l.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (t.clearInterval(this.idleInterval), this.idleInterval = null);
          },
          previous: function previous(t) {
            return this.jumpTo(this.currPos - 1, t);
          },
          next: function next(t) {
            return this.jumpTo(this.currPos + 1, t);
          },
          jumpTo: function jumpTo(t, e) {
            var i,
                o,
                r,
                a,
                s,
                l,
                c,
                u,
                f,
                d = this,
                h = d.group.length;

            if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
              if (t = parseInt(t, 10), !(r = d.current ? d.current.opts.loop : d.opts.loop) && (t < 0 || t >= h)) return !1;
              if (i = d.firstRun = !Object.keys(d.slides).length, s = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, a = d.createSlide(t), h > 1 && ((r || a.index < h - 1) && d.createSlide(t + 1), (r || a.index > 0) && d.createSlide(t - 1)), d.current = a, d.currIndex = a.index, d.currPos = a.pos, d.trigger("beforeShow", i), d.updateControls(), a.forcedDuration = void 0, n.isNumeric(e) ? a.forcedDuration = e : e = a.opts[i ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), o = d.isMoved(a), a.$slide.addClass("fancybox-slide--current"), i) return a.opts.animationEffect && e && d.$refs.container.css("transition-duration", e + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(a), void d.preload("image");
              l = n.fancybox.getTranslate(s.$slide), c = n.fancybox.getTranslate(d.$refs.stage), n.each(d.slides, function (t, e) {
                n.fancybox.stop(e.$slide, !0);
              }), s.pos !== a.pos && (s.isComplete = !1), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), o ? (f = l.left - (s.pos * l.width + s.pos * s.opts.gutter), n.each(d.slides, function (t, i) {
                i.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                  return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                });
                var o = i.pos * l.width + i.pos * i.opts.gutter;
                n.fancybox.setTranslate(i.$slide, {
                  top: 0,
                  left: o - c.left + f
                }), i.pos !== a.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > a.pos ? "next" : "previous")), p(i.$slide), n.fancybox.animate(i.$slide, {
                  top: 0,
                  left: (i.pos - a.pos) * l.width + (i.pos - a.pos) * i.opts.gutter
                }, e, function () {
                  i.$slide.css({
                    transform: "",
                    opacity: ""
                  }).removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === d.currPos && d.complete();
                });
              })) : e && a.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + a.opts.transitionEffect, s.$slide.addClass("fancybox-slide--" + (s.pos > a.pos ? "next" : "previous")), n.fancybox.animate(s.$slide, u, e, function () {
                s.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous");
              }, !1)), a.isLoaded ? d.revealContent(a) : d.loadSlide(a), d.preload("image");
            }
          },
          createSlide: function createSlide(t) {
            var e, i;
            return i = (i = t % this.group.length) < 0 ? this.group.length + i : i, !this.slides[t] && this.group[i] && (e = n('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), this.slides[t] = n.extend(!0, {}, this.group[i], {
              pos: t,
              $slide: e,
              isLoaded: !1
            }), this.updateSlide(this.slides[t])), this.slides[t];
          },
          scaleToActual: function scaleToActual(t, e, i) {
            var o,
                r,
                a,
                s,
                l,
                c = this,
                u = c.current,
                f = u.$content,
                d = n.fancybox.getTranslate(u.$slide).width,
                p = n.fancybox.getTranslate(u.$slide).height,
                h = u.width,
                g = u.height;
            c.isAnimating || c.isMoved() || !f || "image" != u.type || !u.isLoaded || u.hasError || (c.isAnimating = !0, n.fancybox.stop(f), t = void 0 === t ? .5 * d : t, e = void 0 === e ? .5 * p : e, (o = n.fancybox.getTranslate(f)).top -= n.fancybox.getTranslate(u.$slide).top, o.left -= n.fancybox.getTranslate(u.$slide).left, s = h / o.width, l = g / o.height, r = .5 * d - .5 * h, a = .5 * p - .5 * g, h > d && ((r = o.left * s - (t * s - t)) > 0 && (r = 0), r < d - h && (r = d - h)), g > p && ((a = o.top * l - (e * l - e)) > 0 && (a = 0), a < p - g && (a = p - g)), c.updateCursor(h, g), n.fancybox.animate(f, {
              top: a,
              left: r,
              scaleX: s,
              scaleY: l
            }, i || 366, function () {
              c.isAnimating = !1;
            }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
          },
          scaleToFit: function scaleToFit(t) {
            var e,
                i = this,
                o = i.current,
                r = o.$content;
            i.isAnimating || i.isMoved() || !r || "image" != o.type || !o.isLoaded || o.hasError || (i.isAnimating = !0, n.fancybox.stop(r), e = i.getFitPos(o), i.updateCursor(e.width, e.height), n.fancybox.animate(r, {
              top: e.top,
              left: e.left,
              scaleX: e.width / r.width(),
              scaleY: e.height / r.height()
            }, t || 366, function () {
              i.isAnimating = !1;
            }));
          },
          getFitPos: function getFitPos(t) {
            var e,
                i,
                o,
                r,
                a = t.$content,
                s = t.$slide,
                l = t.width || t.opts.width,
                c = t.height || t.opts.height,
                u = {};
            return !!(t.isLoaded && a && a.length) && (e = n.fancybox.getTranslate(this.$refs.stage).width, i = n.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(s.css("paddingLeft")) + parseFloat(s.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), i -= parseFloat(s.css("paddingTop")) + parseFloat(s.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), l && c || (l = e, c = i), (l *= o = Math.min(1, e / l, i / c)) > e - .5 && (l = e), (c *= o) > i - .5 && (c = i), "image" === t.type ? (u.top = Math.floor(.5 * (i - c)) + parseFloat(s.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(s.css("paddingLeft"))) : "video" === t.contentType && (c > l / (r = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / r : l > c * r && (l = c * r)), u.width = l, u.height = c, u);
          },
          update: function update(t) {
            var e = this;
            n.each(e.slides, function (n, i) {
              e.updateSlide(i, t);
            });
          },
          updateSlide: function updateSlide(t, e) {
            var i = t && t.$content,
                o = t.width || t.opts.width,
                r = t.height || t.opts.height,
                a = t.$slide;
            this.adjustCaption(t), i && (o || r || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, this.getFitPos(t)), t.pos === this.currPos && (this.isAnimating = !1, this.updateCursor())), this.adjustLayout(t), a.length && (a.trigger("refresh"), t.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)), this.trigger("onUpdate", t, e);
          },
          centerSlide: function centerSlide(t) {
            var e = this,
                i = e.current,
                o = i.$slide;
            !e.isClosing && i && (o.siblings().css({
              transform: "",
              opacity: ""
            }), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(o, {
              top: 0,
              left: 0,
              opacity: 1
            }, void 0 === t ? 0 : t, function () {
              o.css({
                transform: "",
                opacity: ""
              }), i.isComplete || e.complete();
            }, !1));
          },
          isMoved: function isMoved(t) {
            var e,
                i,
                o = t || this.current;
            return !!o && (i = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - i.top) > .5 || Math.abs(e.left - i.left) > .5));
          },
          updateCursor: function updateCursor(t, e) {
            var i,
                o,
                r = this.current,
                a = this.$refs.container;
            r && !this.isClosing && this.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(i = this.canPan(t, e)) || this.isZoomable(), a.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), i ? a.addClass("fancybox-can-pan") : o && ("zoom" === r.opts.clickContent || n.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? a.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || this.group.length > 1) && "video" !== r.contentType && a.addClass("fancybox-can-swipe"));
          },
          isZoomable: function isZoomable() {
            var t,
                e = this.current;

            if (e && !this.isClosing && "image" === e.type && !e.hasError) {
              if (!e.isLoaded) return !0;
              if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0;
            }

            return !1;
          },
          isScaledDown: function isScaledDown(t, e) {
            var i = !1,
                o = this.current,
                r = o.$content;
            return void 0 !== t && void 0 !== e ? i = t < o.width && e < o.height : r && (i = (i = n.fancybox.getTranslate(r)).width < o.width && i.height < o.height), i;
          },
          canPan: function canPan(t, e) {
            var i = this.current,
                o = null,
                r = !1;
            return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (r = this.getFitPos(i), void 0 !== t && void 0 !== e ? o = {
              width: t,
              height: e
            } : i.isComplete && (o = n.fancybox.getTranslate(i.$content)), o && r && (r = Math.abs(o.width - r.width) > 1.5 || Math.abs(o.height - r.height) > 1.5)), r;
          },
          loadSlide: function loadSlide(t) {
            var e,
                i,
                o,
                r = this;

            if (!t.isLoading && !t.isLoaded) {
              if (t.isLoading = !0, !1 === r.trigger("beforeLoad", t)) return t.isLoading = !1, !1;

              switch (e = t.type, (i = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                case "image":
                  r.setImage(t);
                  break;

                case "iframe":
                  r.setIframe(t);
                  break;

                case "html":
                  r.setContent(t, t.src || t.content);
                  break;

                case "video":
                  r.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                  break;

                case "inline":
                  n(t.src).length ? r.setContent(t, n(t.src)) : r.setError(t);
                  break;

                case "ajax":
                  r.showLoading(t), o = n.ajax(n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function success(e, n) {
                      "success" === n && r.setContent(t, e);
                    },
                    error: function error(e, n) {
                      e && "abort" !== n && r.setError(t);
                    }
                  })), i.one("onReset", function () {
                    o.abort();
                  });
                  break;

                default:
                  r.setError(t);
              }

              return !0;
            }
          },
          setImage: function setImage(t) {
            var i,
                o = this;
            setTimeout(function () {
              var e = t.$image;
              o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t);
            }, 50), o.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (i = e.createElement("img")).onerror = function () {
              n(this).remove(), t.$ghost = null;
            }, i.onload = function () {
              o.afterLoad(t);
            }, t.$ghost = n(i).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), o.setBigImage(t);
          },
          checkSrcset: function checkSrcset(e) {
            var n,
                i,
                o,
                r,
                a = e.opts.srcset || e.opts.image.srcset;

            if (a) {
              o = t.devicePixelRatio || 1, r = t.innerWidth * o, (i = a.split(",").map(function (t) {
                var e = {};
                return t.trim().split(/\s+/).forEach(function (t, n) {
                  var i = parseInt(t.substring(0, t.length - 1), 10);
                  if (0 === n) return e.url = t;
                  i && (e.value = i, e.postfix = t[t.length - 1]);
                }), e;
              })).sort(function (t, e) {
                return t.value - e.value;
              });

              for (var s = 0; s < i.length; s++) {
                var l = i[s];

                if ("w" === l.postfix && l.value >= r || "x" === l.postfix && l.value >= o) {
                  n = l;
                  break;
                }
              }

              !n && i.length && (n = i[i.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = a);
            }
          },
          setBigImage: function setBigImage(t) {
            var i = this,
                o = e.createElement("img"),
                r = n(o);
            t.$image = r.one("error", function () {
              i.setError(t);
            }).one("load", function () {
              var e;
              t.$ghost || (i.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), i.afterLoad(t)), i.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), r.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
                t.$ghost && !i.isClosing && t.$ghost.hide();
              }, Math.min(300, Math.max(1e3, t.height / 1600))), i.hideLoading(t));
            }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o.complete || "complete" == o.readyState) && r.naturalWidth && r.naturalHeight ? r.trigger("load") : o.error && r.trigger("error");
          },
          resolveImageSlideSize: function resolveImageSlideSize(t, e, n) {
            var i = parseInt(t.opts.width, 10),
                o = parseInt(t.opts.height, 10);
            t.width = e, t.height = n, i > 0 && (t.width = i, t.height = Math.floor(i * n / e)), o > 0 && (t.width = Math.floor(o * e / n), t.height = o);
          },
          setIframe: function setIframe(t) {
            var e,
                i = this,
                o = t.opts.iframe,
                r = t.$slide;
            t.$content = n('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(r), r.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(o.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(o.attr).appendTo(t.$content), o.preload ? (i.showLoading(t), e.on("load.fb error.fb", function (e) {
              this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t);
            }), r.on("refresh.fb", function () {
              var n,
                  i = t.$content,
                  a = o.css.width,
                  s = o.css.height;

              if (1 === e[0].isReady) {
                try {
                  n = e.contents().find("body");
                } catch (t) {}

                n && n.length && n.children().length && (r.css("overflow", "visible"), i.css({
                  width: "100%",
                  "max-width": "100%",
                  height: "9999px"
                }), void 0 === a && (a = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))), i.css("width", a || "").css("max-width", ""), void 0 === s && (s = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))), i.css("height", s || ""), r.css("overflow", "auto")), i.removeClass("fancybox-is-hidden");
              }
            })) : i.afterLoad(t), e.attr("src", t.src), r.one("onReset", function () {
              try {
                n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
              } catch (t) {}

              n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1;
            });
          },
          setContent: function setContent(t, e) {
            var i;
            this.isClosing || (this.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), (i = e) && i.hasOwnProperty && i instanceof n && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
              n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1);
            }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t));
          },
          setError: function setError(t) {
            t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1);
          },
          showLoading: function showLoading(t) {
            (t = t || this.current) && !t.$spinner && (t.$spinner = n(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
          },
          hideLoading: function hideLoading(t) {
            (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
          },
          afterLoad: function afterLoad(t) {
            this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.adjustCaption(t), this.adjustLayout(t), t.pos === this.currPos && this.updateCursor(), this.revealContent(t));
          },
          adjustCaption: function adjustCaption(t) {
            var e,
                n = t || this.current,
                i = n.opts.caption,
                o = n.opts.preventCaptionOverlap,
                r = this.$refs.caption,
                a = !1;
            r.toggleClass("fancybox-caption--separate", o), o && i && i.length && (n.pos !== this.currPos ? ((e = r.clone().appendTo(r.parent())).children().eq(0).empty().html(i), a = e.outerHeight(!0), e.empty().remove()) : this.$caption && (a = this.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", a || ""));
          },
          adjustLayout: function adjustLayout(t) {
            var e,
                n,
                i,
                o,
                r = t || this.current;
            r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""), r.$content.outerHeight() > r.$slide.height() + .5 && (i = r.$slide[0].style["padding-bottom"], o = r.$slide.css("padding-bottom"), parseFloat(o) > 0 && (e = r.$slide[0].scrollHeight, r.$slide.css("padding-bottom", 0), Math.abs(e - r.$slide[0].scrollHeight) < 1 && (n = o), r.$slide.css("padding-bottom", i))), r.$content.css("margin-bottom", n));
          },
          revealContent: function revealContent(t) {
            var e,
                i,
                o,
                r,
                a = this,
                s = t.$slide,
                l = !1,
                c = !1,
                u = a.isMoved(t),
                f = t.isRevealed;
            return t.isRevealed = !0, e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"], o = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(void 0 === t.forcedDuration ? o : t.forcedDuration, 10), !u && t.pos === a.currPos && o || (e = !1), "zoom" === e && (t.pos === a.currPos && o && "image" === t.type && !t.hasError && (c = a.getThumbPos(t)) ? l = a.getFitPos(t) : e = "fade"), "zoom" === e ? (a.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (r = t.opts.zoomOpacity) && (r = Math.abs(t.width / t.height - c.width / c.height) > .1), r && (c.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), p(t.$content), void n.fancybox.animate(t.$content, l, o, function () {
              a.isAnimating = !1, a.complete();
            })) : (a.updateSlide(t), e ? (n.fancybox.stop(s), i = "fancybox-slide--" + (t.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, s.addClass(i).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(s), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(s, "fancybox-slide--current", o, function () {
              s.removeClass(i).css({
                transform: "",
                opacity: ""
              }), t.pos === a.currPos && a.complete();
            }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), f || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === a.currPos && a.complete())));
          },
          getThumbPos: function getThumbPos(t) {
            var i,
                o,
                r,
                a,
                s,
                l,
                c = t.$thumb;
            return !(!c || !function (t) {
              var i, o;
              return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), i = {
                x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                y: t.getBoundingClientRect().top + t.offsetHeight / 2
              }, o = e.elementFromPoint(i.x, i.y) === t, n(".fancybox-container").css("pointer-events", ""), o);
            }(c[0])) && (o = n.fancybox.getTranslate(c), r = parseFloat(c.css("border-top-width") || 0), a = parseFloat(c.css("border-right-width") || 0), s = parseFloat(c.css("border-bottom-width") || 0), l = parseFloat(c.css("border-left-width") || 0), i = {
              top: o.top + r,
              left: o.left + l,
              width: o.width - a - l,
              height: o.height - r - s,
              scaleX: 1,
              scaleY: 1
            }, o.width > 0 && o.height > 0 && i);
          },
          complete: function complete() {
            var t,
                e = this,
                i = e.current,
                o = {};
            !e.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), e.preload("inline"), p(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, i) {
              i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove());
            }), e.slides = o), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
              Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
            }), i.opts.autoFocus && "html" === i.contentType && ((t = i.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), i.$slide.scrollTop(0).scrollLeft(0));
          },
          preload: function preload(t) {
            var e, n;
            this.group.length < 2 || (n = this.slides[this.currPos + 1], (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), n && n.type === t && this.loadSlide(n));
          },
          focus: function focus(t, i) {
            var o,
                r,
                a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
            this.isClosing || ((o = (o = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(a).filter(function () {
              return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
            })).length ? (r = o.index(e.activeElement), t && t.shiftKey ? (r < 0 || 0 == r) && (t.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (r < 0 || r == o.length - 1) && (t && t.preventDefault(), o.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"));
          },
          activate: function activate() {
            var t = this;
            n(".fancybox-container").each(function () {
              var e = n(this).data("FancyBox");
              e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
            }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
          },
          close: function close(t, e) {
            var i,
                o,
                r,
                a,
                s,
                l,
                c,
                f = this,
                d = f.current,
                h = function h() {
              f.cleanUp(t);
            };

            return !f.isClosing && (f.isClosing = !0, !1 === f.trigger("beforeClose", t) ? (f.isClosing = !1, u(function () {
              f.update();
            }), !1) : (f.removeEvents(), r = d.$content, i = d.opts.animationEffect, o = n.isNumeric(e) ? e : i ? d.opts.animationDuration : 0, d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(d.$slide) : i = !1, d.$slide.siblings().trigger("onReset").remove(), o && f.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), f.hideLoading(d), f.hideControls(!0), f.updateCursor(), "zoom" !== i || r && o && "image" === d.type && !f.isMoved() && !d.hasError && (c = f.getThumbPos(d)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(r), l = {
              top: (a = n.fancybox.getTranslate(r)).top,
              left: a.left,
              scaleX: a.width / c.width,
              scaleY: a.height / c.height,
              width: c.width,
              height: c.height
            }, "auto" == (s = d.opts.zoomOpacity) && (s = Math.abs(d.width / d.height - c.width / c.height) > .1), s && (c.opacity = 0), n.fancybox.setTranslate(r, l), p(r), n.fancybox.animate(r, c, o, h), !0) : (i && o ? n.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, h) : !0 === t ? setTimeout(h, o) : h(), !0)));
          },
          cleanUp: function cleanUp(e) {
            var i,
                o,
                r,
                a = this.current.opts.$orig;
            this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", e), this.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = this.$trigger), a && a.length && (o = t.scrollX, r = t.scrollY, a.trigger("focus"), n("html, body").scrollTop(r).scrollLeft(o))), this.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
          },
          trigger: function trigger(t, e) {
            var i,
                o = Array.prototype.slice.call(arguments, 1),
                r = this,
                a = e && e.opts ? e : r.current;
            if (a ? o.unshift(a) : a = r, o.unshift(r), n.isFunction(a.opts[t]) && (i = a.opts[t].apply(a, o)), !1 === i) return i;
            "afterClose" !== t && r.$refs ? r.$refs.container.trigger(t + ".fb", o) : l.trigger(t + ".fb", o);
          },
          updateControls: function updateControls() {
            var t = this.current,
                i = t.index,
                o = this.$refs.container,
                r = this.$refs.caption,
                a = t.opts.caption;
            t.$slide.trigger("refresh"), a && a.length ? (this.$caption = r, r.children().eq(0).html(a)) : this.$caption = null, this.hasHiddenControls || this.isIdle || this.showControls(), o.find("[data-fancybox-count]").html(this.group.length), o.find("[data-fancybox-index]").html(i + 1), o.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && i <= 0), o.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && i >= this.group.length - 1), "image" === t.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus");
          },
          hideControls: function hideControls(t) {
            var e = ["infobar", "toolbar", "nav"];
            !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function (t) {
              return "fancybox-show-" + t;
            }).join(" ")), this.hasHiddenControls = !0;
          },
          showControls: function showControls() {
            var t = this.current ? this.current.opts : this.opts,
                e = this.$refs.container;
            this.hasHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && this.group.length > 1)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal);
          },
          toggleControls: function toggleControls() {
            this.hasHiddenControls ? this.showControls() : this.hideControls();
          }
        }), n.fancybox = {
          version: "3.5.7",
          defaults: a,
          getInstance: function getInstance(t) {
            var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                i = Array.prototype.slice.call(arguments, 1);
            return e instanceof g && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e);
          },
          open: function open(t, e, n) {
            return new g(t, e, n);
          },
          close: function close(t) {
            var e = this.getInstance();
            e && (e.close(), !0 === t && this.close(t));
          },
          destroy: function destroy() {
            this.close(!0), l.add("body").off("click.fb-start", "**");
          },
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          use3d: (o = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(o) && t.getComputedStyle(o).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
          getTranslate: function getTranslate(t) {
            var e;
            return !(!t || !t.length) && {
              top: (e = t[0].getBoundingClientRect()).top || 0,
              left: e.left || 0,
              width: e.width,
              height: e.height,
              opacity: parseFloat(t.css("opacity"))
            };
          },
          setTranslate: function setTranslate(t, e) {
            var n = "",
                i = {};
            if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (i.transform = n), void 0 !== e.opacity && (i.opacity = e.opacity), void 0 !== e.width && (i.width = e.width), void 0 !== e.height && (i.height = e.height), t.css(i);
          },
          animate: function animate(t, e, i, o, r) {
            var a,
                s = this;
            n.isFunction(i) && (o = i, i = null), s.stop(t), a = s.getTranslate(t), t.on(d, function (l) {
              (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (s.stop(t), n.isNumeric(i) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && s.setTranslate(t, {
                top: e.top,
                left: e.left,
                width: a.width * e.scaleX,
                height: a.height * e.scaleY,
                scaleX: 1,
                scaleY: 1
              }) : !0 !== r && t.removeClass(e), n.isFunction(o) && o(l));
            }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
              t.trigger(d);
            }, i + 33));
          },
          stop: function stop(t, e) {
            t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
          }
        }, n.fn.fancybox = function (t) {
          var e;
          return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
            options: t
          }, m) : this.off("click.fb-start").on("click.fb-start", {
            items: this,
            options: t
          }, m), this;
        }, l.on("click.fb-start", "[data-fancybox]", m), l.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
          n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
            $trigger: n(this)
          });
        }), r = null, l.on("mousedown mouseup focus blur", ".fancybox-button", function (t) {
          switch (t.type) {
            case "mousedown":
              r = n(this);
              break;

            case "mouseup":
              r = null;
              break;

            case "focusin":
              n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(r) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
              break;

            case "focusout":
              n(".fancybox-button").removeClass("fancybox-focus");
          }
        });
      }

      function m(t, e) {
        var i,
            o,
            r,
            a = [],
            s = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), i = e.$target || n(t.currentTarget).trigger("blur"), (r = n.fancybox.getInstance()) && r.$trigger && r.$trigger.is(i) || (a = e.selector ? n(e.selector) : (o = i.attr("data-fancybox") || "") ? (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]') : [i], (s = n(a).index(i)) < 0 && (s = 0), (r = n.fancybox.open(a, e, s)).$trigger = i));
      }
    }(window, document, t), function (t) {
      "use strict";

      var e = {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2"
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function url(t) {
            return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
          }
        },
        gmap_search: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function url(t) {
            return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
          }
        }
      },
          n = function n(e, _n2, i) {
        if (e) return i = i || "", "object" === t.type(i) && (i = t.param(i, !0)), t.each(_n2, function (t, n) {
          e = e.replace("$" + t, n || "");
        }), i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e;
      };

      t(document).on("objectNeedsType.fb", function (i, o, r) {
        var a,
            s,
            l,
            c,
            u,
            f,
            d,
            p = r.src || "",
            h = !1;
        a = t.extend(!0, {}, e, r.opts.media), t.each(a, function (e, i) {
          if (l = p.match(i.matcher)) {
            if (h = i.type, d = e, f = {}, i.paramPlace && l[i.paramPlace]) {
              "?" == (u = l[i.paramPlace])[0] && (u = u.substring(1)), u = u.split("&");

              for (var o = 0; o < u.length; ++o) {
                var a = u[o].split("=", 2);
                2 == a.length && (f[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")));
              }
            }

            return c = t.extend(!0, {}, i.params, r.opts[e], f), p = "function" === t.type(i.url) ? i.url.call(this, l, c, r) : n(i.url, l, c), s = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, r) : n(i.thumb, l), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, i) {
              return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10));
            }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1;
          }
        }), h ? (r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = s), "iframe" === h && (r.opts = t.extend(!0, r.opts, {
          iframe: {
            preload: !1,
            attr: {
              scrolling: "no"
            }
          }
        })), t.extend(r, {
          type: h,
          src: p,
          origSrc: r.src,
          contentSource: d,
          contentType: "image" === h ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
        })) : p && (r.type = r.opts.defaultType);
      });
      var i = {
        youtube: {
          src: "https://www.youtube.com/iframe_api",
          "class": "YT",
          loading: !1,
          loaded: !1
        },
        vimeo: {
          src: "https://player.vimeo.com/api/player.js",
          "class": "Vimeo",
          loading: !1,
          loaded: !1
        },
        load: function load(t) {
          var e,
              n = this;
          this[t].loaded ? setTimeout(function () {
            n.done(t);
          }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
            n[t].loaded = !0, n.done(t);
          } : e.onload = function () {
            n[t].loaded = !0, n.done(t);
          }, document.body.appendChild(e));
        },
        done: function done(e) {
          var n, i;
          "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (i = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
            events: {
              onStateChange: function onStateChange(t) {
                0 == t.data && n.next();
              }
            }
          }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", function () {
            n.next();
          }));
        }
      };
      t(document).on({
        "afterShow.fb": function afterShowFb(t, e, n) {
          e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource);
        }
      });
    }(t), function (t, e, n) {
      "use strict";

      var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60);
      },
          o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e);
      },
          r = function r(e) {
        var n = [];

        for (var i in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) {
          e[i].pageX ? n.push({
            x: e[i].pageX,
            y: e[i].pageY
          }) : e[i].clientX && n.push({
            x: e[i].clientX,
            y: e[i].clientY
          });
        }

        return n;
      },
          a = function a(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
      },
          s = function s(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;

        for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++) {
          if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
        }

        return !1;
      },
          l = function l(e) {
        for (var n, i, o, r, a, s = !1; n = e.get(0), i = void 0, o = void 0, r = void 0, a = void 0, i = t.getComputedStyle(n)["overflow-y"], o = t.getComputedStyle(n)["overflow-x"], r = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight, a = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth, !(s = r || a) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body");) {
          ;
        }

        return s;
      },
          c = function c(t) {
        this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(this, "ontouchstart"));
      };

      c.prototype.destroy = function () {
        this.$container.off(".fb.touch"), n(e).off(".fb.touch"), this.requestId && (o(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null);
      }, c.prototype.ontouchstart = function (i) {
        var o = n(i.target),
            c = this.instance,
            u = c.current,
            f = u.$slide,
            d = u.$content,
            p = "touchstart" == i.type;

        if (p && this.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && f.length && o.length && !s(o) && !s(o.parent()) && (o.is("img") || !(i.originalEvent.clientX > o[0].clientWidth + o.offset().left))) {
          if (!u || c.isAnimating || u.$slide.hasClass("fancybox-animated")) return i.stopPropagation(), void i.preventDefault();
          this.realPoints = this.startPoints = r(i), this.startPoints.length && (u.touch && i.stopPropagation(), this.startEvent = i, this.canTap = !0, this.$target = o, this.$content = d, this.opts = u.opts.touch, this.isPanning = !1, this.isSwiping = !1, this.isZooming = !1, this.isScrolling = !1, this.canPan = c.canPan(), this.startTime = new Date().getTime(), this.distanceX = this.distanceY = this.distance = 0, this.canvasWidth = Math.round(f[0].clientWidth), this.canvasHeight = Math.round(f[0].clientHeight), this.contentLastPos = null, this.contentStartPos = n.fancybox.getTranslate(this.$content) || {
            top: 0,
            left: 0
          }, this.sliderStartPos = n.fancybox.getTranslate(f), this.stagePos = n.fancybox.getTranslate(c.$refs.stage), this.sliderStartPos.top -= this.stagePos.top, this.sliderStartPos.left -= this.stagePos.left, this.contentStartPos.top -= this.stagePos.top, this.contentStartPos.left -= this.stagePos.left, n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(this, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(this, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", this.onscroll, !0), ((this.opts || this.canPan) && (o.is(this.$stage) || this.$stage.find(o).length) || (o.is(".fancybox-image") && i.preventDefault(), n.fancybox.isMobile && o.parents(".fancybox-caption").length)) && (this.isScrollable = l(o) || l(o.parent()), n.fancybox.isMobile && this.isScrollable || i.preventDefault(), (1 === this.startPoints.length || u.hasError) && (this.canPan ? (n.fancybox.stop(this.$content), this.isPanning = !0) : this.isSwiping = !0, this.$container.addClass("fancybox-is-grabbing")), 2 === this.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (this.canTap = !1, this.isSwiping = !1, this.isPanning = !1, this.isZooming = !0, n.fancybox.stop(this.$content), this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - n(t).scrollLeft(), this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - n(t).scrollTop(), this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, this.startDistanceBetweenFingers = a(this.startPoints[0], this.startPoints[1]))));
        }
      }, c.prototype.onscroll = function (t) {
        this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0);
      }, c.prototype.ontouchmove = function (t) {
        void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? this.isScrolling ? this.canTap = !1 : (this.newPoints = r(t), (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || t.preventDefault(), this.distanceX = a(this.newPoints[0], this.startPoints[0], "x"), this.distanceY = a(this.newPoints[0], this.startPoints[0], "y"), this.distance = a(this.newPoints[0], this.startPoints[0]), this.distance > 0 && (this.isSwiping ? this.onSwipe(t) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom()))) : this.ontouchend(t);
      }, c.prototype.onSwipe = function (e) {
        var r,
            a = this,
            s = a.instance,
            l = a.isSwiping,
            c = a.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? c += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? c -= Math.pow(-a.distanceX, .8) : c += a.distanceX), a.sliderLastPos = {
          top: "x" == l ? 0 : a.sliderStartPos.top + a.distanceY,
          left: c
        }, a.requestId && (o(a.requestId), a.requestId = null), a.requestId = i(function () {
          a.sliderLastPos && (n.each(a.instance.slides, function (t, e) {
            var i = e.pos - a.instance.currPos;
            n.fancybox.setTranslate(e.$slide, {
              top: a.sliderLastPos.top,
              left: a.sliderLastPos.left + i * a.canvasWidth + i * e.opts.gutter
            });
          }), a.$container.addClass("fancybox-is-sliding"));
        });else if (Math.abs(a.distance) > 10) {
          if (a.canTap = !1, s.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : s.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && n(t).width() > 800 ? a.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = r > 45 && r < 135 ? "y" : "x"), "y" === a.isSwiping && n.fancybox.isMobile && a.isScrollable) return void (a.isScrolling = !0);
          s.isDragging = a.isSwiping, a.startPoints = a.newPoints, n.each(s.slides, function (t, e) {
            var i, o;
            n.fancybox.stop(e.$slide), i = n.fancybox.getTranslate(e.$slide), o = n.fancybox.getTranslate(s.$refs.stage), e.$slide.css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            }).removeClass("fancybox-animated").removeClass(function (t, e) {
              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            }), e.pos === s.current.pos && (a.sliderStartPos.top = i.top - o.top, a.sliderStartPos.left = i.left - o.left), n.fancybox.setTranslate(e.$slide, {
              top: i.top - o.top,
              left: i.left - o.left
            });
          }), s.SlideShow && s.SlideShow.isActive && s.SlideShow.stop();
        }
      }, c.prototype.onPan = function () {
        var t = this;
        a(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && o(t.requestId), t.requestId = i(function () {
          n.fancybox.setTranslate(t.$content, t.contentLastPos);
        }));
      }, c.prototype.limitMovement = function () {
        var t,
            e,
            n,
            i,
            o,
            r,
            a = this.canvasWidth,
            s = this.canvasHeight,
            l = this.distanceX,
            c = this.distanceY,
            u = this.contentStartPos,
            f = u.left,
            d = u.top,
            p = u.width,
            h = u.height;
        return o = p > a ? f + l : f, r = d + c, t = Math.max(0, .5 * a - .5 * p), e = Math.max(0, .5 * s - .5 * h), n = Math.min(a - p, .5 * a - .5 * p), i = Math.min(s - h, .5 * s - .5 * h), l > 0 && o > t && (o = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && o < n && (o = n + 1 - Math.pow(n - f - l, .8) || 0), c > 0 && r > e && (r = e - 1 + Math.pow(-e + d + c, .8) || 0), c < 0 && r < i && (r = i + 1 - Math.pow(i - d - c, .8) || 0), {
          top: r,
          left: o
        };
      }, c.prototype.limitPosition = function (t, e, n, i) {
        var o = this.canvasWidth,
            r = this.canvasHeight;
        return t = n > o ? (t = t > 0 ? 0 : t) < o - n ? o - n : t : Math.max(0, o / 2 - n / 2), {
          top: e = i > r ? (e = e > 0 ? 0 : e) < r - i ? r - i : e : Math.max(0, r / 2 - i / 2),
          left: t
        };
      }, c.prototype.onZoom = function () {
        var e = this,
            r = e.contentStartPos,
            s = r.width,
            l = r.height,
            c = r.left,
            u = r.top,
            f = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            d = Math.floor(s * f),
            p = Math.floor(l * f),
            h = (s - d) * e.percentageOfImageAtPinchPointX,
            g = (l - p) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = m - e.centerPointStartX,
            b = {
          top: u + (g + (v - e.centerPointStartY)),
          left: c + (h + y),
          scaleX: f,
          scaleY: f
        };
        e.canTap = !1, e.newWidth = d, e.newHeight = p, e.contentLastPos = b, e.requestId && o(e.requestId), e.requestId = i(function () {
          n.fancybox.setTranslate(e.$content, e.contentLastPos);
        });
      }, c.prototype.ontouchend = function (t) {
        var i = this.isSwiping,
            a = this.isPanning,
            s = this.isZooming,
            l = this.isScrolling;
        if (this.endPoints = r(t), this.dMs = Math.max(new Date().getTime() - this.startTime, 1), this.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", this.onscroll, !0), this.requestId && (o(this.requestId), this.requestId = null), this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.isScrolling = !1, this.instance.isDragging = !1, this.canTap) return this.onTap(t);
        this.speed = 100, this.velocityX = this.distanceX / this.dMs * .5, this.velocityY = this.distanceY / this.dMs * .5, a ? this.endPanning() : s ? this.endZooming() : this.endSwiping(i, l);
      }, c.prototype.endSwiping = function (t, e) {
        var i = !1,
            o = this.instance.group.length,
            r = Math.abs(this.distanceX),
            a = "x" == t && o > 1 && (this.dMs > 130 && r > 10 || r > 50);
        this.sliderLastPos = null, "y" == t && !e && Math.abs(this.distanceY) > 50 ? (n.fancybox.animate(this.instance.current.$slide, {
          top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
          opacity: 0
        }, 200), i = this.instance.close(!0, 250)) : a && this.distanceX > 0 ? i = this.instance.previous(300) : a && this.distanceX < 0 && (i = this.instance.next(300)), !1 !== i || "x" != t && "y" != t || this.instance.centerSlide(200), this.$container.removeClass("fancybox-is-sliding");
      }, c.prototype.endPanning = function () {
        var t, e, i;
        this.contentLastPos && (!1 === this.opts.momentum || this.dMs > 350 ? (t = this.contentLastPos.left, e = this.contentLastPos.top) : (t = this.contentLastPos.left + 500 * this.velocityX, e = this.contentLastPos.top + 500 * this.velocityY), (i = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width, i.height = this.contentStartPos.height, n.fancybox.animate(this.$content, i, 366));
      }, c.prototype.endZooming = function () {
        var t,
            e,
            i,
            o,
            r = this.instance.current,
            a = this.newWidth,
            s = this.newHeight;
        this.contentLastPos && (t = this.contentLastPos.left, o = {
          top: e = this.contentLastPos.top,
          left: t,
          width: a,
          height: s,
          scaleX: 1,
          scaleY: 1
        }, n.fancybox.setTranslate(this.$content, o), a < this.canvasWidth && s < this.canvasHeight ? this.instance.scaleToFit(150) : a > r.width || s > r.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (i = this.limitPosition(t, e, a, s), n.fancybox.animate(this.$content, i, 150)));
      }, c.prototype.onTap = function (e) {
        var i,
            o = this,
            a = n(e.target),
            s = o.instance,
            l = s.current,
            c = e && r(e) || o.startPoints,
            u = c[0] ? c[0].x - n(t).scrollLeft() - o.stagePos.left : 0,
            f = c[0] ? c[0].y - n(t).scrollTop() - o.stagePos.top : 0,
            d = function d(t) {
          var i = l.opts[t];
          if (n.isFunction(i) && (i = i.apply(s, [l, e])), i) switch (i) {
            case "close":
              s.close(o.startEvent);
              break;

            case "toggleControls":
              s.toggleControls();
              break;

            case "next":
              s.next();
              break;

            case "nextOrClose":
              s.group.length > 1 ? s.next() : s.close(o.startEvent);
              break;

            case "zoom":
              "image" == l.type && (l.isLoaded || l.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(u, f) : s.group.length < 2 && s.close(o.startEvent));
          }
        };

        if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(u > a[0].clientWidth + a.offset().left))) {
          if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";else if (a.is(".fancybox-slide")) i = "Slide";else {
            if (!s.current.$content || !s.current.$content.find(a).addBack().filter(a).length) return;
            i = "Content";
          }

          if (o.tapped) {
            if (clearTimeout(o.tapped), o.tapped = null, Math.abs(u - o.tapX) > 50 || Math.abs(f - o.tapY) > 50) return this;
            d("dblclick" + i);
          } else o.tapX = u, o.tapY = f, l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? o.tapped = setTimeout(function () {
            o.tapped = null, s.isAnimating || d("click" + i);
          }, 500) : d("click" + i);

          return this;
        }
      }, n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new c(e));
      }).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy();
      });
    }(window, document, t), function (t, e) {
      "use strict";

      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
          autoStart: !1,
          speed: 3e3,
          progress: !0
        }
      });

      var n = function n(t) {
        this.instance = t, this.init();
      };

      e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function init() {
          var t = this,
              n = t.instance,
              i = n.group[n.currIndex].opts.slideShow;
          t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
            t.toggle();
          }), n.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
        },
        set: function set(t) {
          var n = this.instance,
              i = n.current;
          i && (!0 === t || i.opts.loop || n.currIndex < n.group.length - 1) ? this.isActive && "video" !== i.contentType && (this.$progress && e.fancybox.animate(this.$progress.show(), {
            scaleX: 1
          }, i.opts.slideShow.speed), this.timer = setTimeout(function () {
            n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0);
          }, i.opts.slideShow.speed)) : (this.stop(), n.idleSecondsCounter = 0, n.showControls());
        },
        clear: function clear() {
          clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide();
        },
        start: function start() {
          var t = this.instance.current;
          t && (this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, t.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0));
        },
        stop: function stop() {
          var t = this.instance.current;
          this.clear(), this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide();
        },
        toggle: function toggle() {
          this.isActive ? this.stop() : this.start();
        }
      }), e(t).on({
        "onInit.fb": function onInitFb(t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function beforeShowFb(t, e, n, i) {
          var o = e && e.SlideShow;
          i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear();
        },
        "afterShow.fb": function afterShowFb(t, e, n) {
          var i = e && e.SlideShow;
          i && i.isActive && i.set();
        },
        "afterKeydown.fb": function afterKeydownFb(n, i, o, r, a) {
          var s = i && i.SlideShow;
          !s || !o.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (r.preventDefault(), s.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        }
      }), e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set());
      });
    }(document, t), function (t, e) {
      "use strict";

      var n = function () {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, i = 0; i < e.length; i++) {
          var o = e[i];

          if (o && o[1] in t) {
            for (var r = 0; r < o.length; r++) {
              n[e[0][r]] = o[r];
            }

            return n;
          }
        }

        return !1;
      }();

      if (n) {
        var i = {
          request: function request(e) {
            (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
          },
          exit: function exit() {
            t[n.exitFullscreen]();
          },
          toggle: function toggle(e) {
            e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
          },
          isFullscreen: function isFullscreen() {
            return Boolean(t[n.fullscreenElement]);
          },
          enabled: function enabled() {
            return Boolean(t[n.fullscreenEnabled]);
          }
        };
        e.extend(!0, e.fancybox.defaults, {
          btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
          },
          fullScreen: {
            autoStart: !1
          }
        }), e(t).on(n.fullscreenchange, function () {
          var t = i.isFullscreen(),
              n = e.fancybox.getInstance();
          n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
        });
      }

      e(t).on({
        "onInit.fb": function onInitFb(t, e) {
          n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
            t.stopPropagation(), t.preventDefault(), i.toggle();
          }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
        },
        "afterKeydown.fb": function afterKeydownFb(t, e, n, i, o) {
          e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle());
        },
        "beforeClose.fb": function beforeCloseFb(t, e) {
          e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit();
        }
      });
    }(document, t), function (t, e) {
      "use strict";

      var n = "fancybox-thumbs";
      e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
          thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y"
        }
      }, e.fancybox.defaults);

      var i = function i(t) {
        this.init(t);
      };

      e.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function init(t) {
          var e = this,
              n = t.group,
              i = 0;
          e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");

          for (var o = 0, r = n.length; o < r && (n[o].thumb && i++, !(i > 1)); o++) {
            ;
          }

          i > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
            e.toggle();
          }), e.isActive = !0) : e.$button.hide();
        },
        create: function create() {
          var t,
              i = this.instance,
              o = this.opts.parentEl,
              r = [];
          this.$grid || (this.$grid = e('<div class="' + n + " " + n + "-" + this.opts.axis + '"></div>').appendTo(i.$refs.container.find(o).addBack().filter(o)), this.$grid.on("click", "a", function () {
            i.jumpTo(e(this).attr("data-index"));
          })), this.$list || (this.$list = e('<div class="' + n + '__list">').appendTo(this.$grid)), e.each(i.group, function (e, n) {
            (t = n.thumb) || "image" !== n.type || (t = n.src), r.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
          }), this.$list[0].innerHTML = r.join(""), "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + i.group.length * this.$list.children().eq(0).outerWidth(!0));
        },
        focus: function focus(t) {
          var e,
              n,
              i = this.$list,
              o = this.$grid;
          this.instance.current && (n = (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
            scrollTop: i.scrollTop() + n.top
          }, t) : "x" === this.opts.axis && (n.left < o.scrollLeft() || n.left > o.scrollLeft() + (o.width() - e.outerWidth())) && i.parent().stop().animate({
            scrollLeft: n.left
          }, t));
        },
        update: function update() {
          this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update();
        },
        hide: function hide() {
          this.isVisible = !1, this.update();
        },
        show: function show() {
          this.isVisible = !0, this.update();
        },
        toggle: function toggle() {
          this.isVisible = !this.isVisible, this.update();
        }
      }), e(t).on({
        "onInit.fb": function onInitFb(t, e) {
          var n;
          e && !e.Thumbs && (n = new i(e)).isActive && !0 === n.opts.autoStart && n.show();
        },
        "beforeShow.fb": function beforeShowFb(t, e, n, i) {
          var o = e && e.Thumbs;
          o && o.isVisible && o.focus(i ? 0 : 250);
        },
        "afterKeydown.fb": function afterKeydownFb(t, e, n, i, o) {
          var r = e && e.Thumbs;
          r && r.isActive && 71 === o && (i.preventDefault(), r.toggle());
        },
        "beforeClose.fb": function beforeCloseFb(t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        }
      });
    }(document, t), function (t, e) {
      "use strict";

      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
          url: function url(t, e) {
            return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
          },
          tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
      }), e(t).on("click", "[data-fancybox-share]", function () {
        var t,
            n,
            i,
            o,
            r = e.fancybox.getInstance(),
            a = r.current || null;
        a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [r, a])), n = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (i = t, o = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;"
        }, String(i).replace(/[&<>"'`=\/]/g, function (t) {
          return o[t];
        }))).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""), e.fancybox.open({
          src: r.translate(r, n),
          type: "html",
          opts: {
            touch: !1,
            animationEffect: !1,
            afterLoad: function afterLoad(t, e) {
              r.$refs.container.one("beforeClose.fb", function () {
                t.close(null, 0);
              }), e.$content.find(".fancybox-share__button").click(function () {
                return window.open(this.href, "Share", "width=550, height=450"), !1;
              });
            },
            mobile: {
              autoFocus: !1
            }
          }
        }));
      });
    }(document, t), function (t, e, n) {
      "use strict";

      function i() {
        var e = t.location.hash.substr(1),
            n = e.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
          hash: e,
          index: i < 1 ? 1 : i,
          gallery: n.join("-")
        };
      }

      function o(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
      }

      function r(t) {
        var e, n;
        return !!t && "" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n;
      }

      n.escapeSelector || (n.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
          return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        });
      }), n(function () {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
          "onInit.fb": function onInitFb(t, e) {
            var n, o;
            !1 !== e.group[e.currIndex].opts.hash && (n = i(), (o = r(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1));
          },
          "beforeShow.fb": function beforeShowFb(n, i, o, a) {
            var s;
            o && !1 !== o.opts.hash && (s = r(i)) && (i.currentHash = s + (i.group.length > 1 ? "-" + (o.index + 1) : ""), t.location.hash !== "#" + i.currentHash && (a && !i.origHash && (i.origHash = t.location.hash), i.hashTimer && clearTimeout(i.hashTimer), i.hashTimer = setTimeout(function () {
              "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + i.currentHash), a && (i.hasCreatedHistory = !0)) : t.location.hash = i.currentHash, i.hashTimer = null;
            }, 300)));
          },
          "beforeClose.fb": function beforeCloseFb(n, i, o) {
            o && !1 !== o.opts.hash && (clearTimeout(i.hashTimer), i.currentHash && i.hasCreatedHistory ? t.history.back() : i.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (i.origHash || "")) : t.location.hash = i.origHash), i.currentHash = null);
          }
        }), n(t).on("hashchange.fb", function () {
          var t = i(),
              e = null;
          n.each(n(".fancybox-container").get().reverse(), function (t, i) {
            var o = n(i).data("FancyBox");
            if (o && o.currentHash) return e = o, !1;
          }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && o(t);
        }), setTimeout(function () {
          n.fancybox.getInstance() || o(i());
        }, 50));
      });
    }(window, document, t), function (t, e) {
      "use strict";

      var n = new Date().getTime();
      e(t).on({
        "onInit.fb": function onInitFb(t, e, i) {
          e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
            var i = e.current,
                o = new Date().getTime();
            e.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (t.preventDefault(), t.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, o - n < 250 || (n = o, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
          });
        }
      });
    }(document, t);
  }).call(this, n(1));
}, function (t, e, n) {
  var i;
  /*!
   * jQuery JavaScript Library v3.4.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2019-05-01T21:04Z
   */

  !function (e, n) {
    "use strict";

    "object" == _typeof(t.exports) ? t.exports = e.document ? n(e, !0) : function (t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return n(t);
    } : n(e);
  }("undefined" != typeof window ? window : this, function (n, o) {
    "use strict";

    var r = [],
        a = n.document,
        s = Object.getPrototypeOf,
        l = r.slice,
        c = r.concat,
        u = r.push,
        f = r.indexOf,
        d = {},
        p = d.toString,
        h = d.hasOwnProperty,
        g = h.toString,
        m = g.call(Object),
        v = {},
        y = function y(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
        b = function b(t) {
      return null != t && t === t.window;
    },
        x = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function w(t, e, n) {
      var i,
          o,
          r = (n = n || a).createElement("script");
      if (r.text = t, e) for (i in x) {
        (o = e[i] || e.getAttribute && e.getAttribute(i)) && r.setAttribute(i, o);
      }
      n.head.appendChild(r).parentNode.removeChild(r);
    }

    function C(t) {
      return null == t ? t + "" : "object" == _typeof(t) || "function" == typeof t ? d[p.call(t)] || "object" : _typeof(t);
    }

    var T = function T(t, e) {
      return new T.fn.init(t, e);
    },
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function E(t) {
      var e = !!t && "length" in t && t.length,
          n = C(t);
      return !y(t) && !b(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }

    T.fn = T.prototype = {
      jquery: "3.4.1",
      constructor: T,
      length: 0,
      toArray: function toArray() {
        return l.call(this);
      },
      get: function get(t) {
        return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t];
      },
      pushStack: function pushStack(t) {
        var e = T.merge(this.constructor(), t);
        return e.prevObject = this, e;
      },
      each: function each(t) {
        return T.each(this, t);
      },
      map: function map(t) {
        return this.pushStack(T.map(this, function (e, n) {
          return t.call(e, n, e);
        }));
      },
      slice: function slice() {
        return this.pushStack(l.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      eq: function eq(t) {
        var e = this.length,
            n = +t + (t < 0 ? e : 0);
        return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: r.sort,
      splice: r.splice
    }, T.extend = T.fn.extend = function () {
      var t,
          e,
          n,
          i,
          o,
          r,
          a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          c = !1;

      for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || y(a) || (a = {}), s === l && (a = this, s--); s < l; s++) {
        if (null != (t = arguments[s])) for (e in t) {
          i = t[e], "__proto__" !== e && a !== i && (c && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ? (n = a[e], r = o && !Array.isArray(n) ? [] : o || T.isPlainObject(n) ? n : {}, o = !1, a[e] = T.extend(c, r, i)) : void 0 !== i && (a[e] = i));
        }
      }

      return a;
    }, T.extend({
      expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(t) {
        throw new Error(t);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(t) {
        var e, n;
        return !(!t || "[object Object]" !== p.call(t)) && (!(e = s(t)) || "function" == typeof (n = h.call(e, "constructor") && e.constructor) && g.call(n) === m);
      },
      isEmptyObject: function isEmptyObject(t) {
        var e;

        for (e in t) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(t, e) {
        w(t, {
          nonce: e && e.nonce
        });
      },
      each: function each(t, e) {
        var n,
            i = 0;
        if (E(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) {
          ;
        } else for (i in t) {
          if (!1 === e.call(t[i], i, t[i])) break;
        }
        return t;
      },
      trim: function trim(t) {
        return null == t ? "" : (t + "").replace(S, "");
      },
      makeArray: function makeArray(t, e) {
        var n = e || [];
        return null != t && (E(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n;
      },
      inArray: function inArray(t, e, n) {
        return null == e ? -1 : f.call(e, t, n);
      },
      merge: function merge(t, e) {
        for (var n = +e.length, i = 0, o = t.length; i < n; i++) {
          t[o++] = e[i];
        }

        return t.length = o, t;
      },
      grep: function grep(t, e, n) {
        for (var i = [], o = 0, r = t.length, a = !n; o < r; o++) {
          !e(t[o], o) !== a && i.push(t[o]);
        }

        return i;
      },
      map: function map(t, e, n) {
        var i,
            o,
            r = 0,
            a = [];
        if (E(t)) for (i = t.length; r < i; r++) {
          null != (o = e(t[r], r, n)) && a.push(o);
        } else for (r in t) {
          null != (o = e(t[r], r, n)) && a.push(o);
        }
        return c.apply([], a);
      },
      guid: 1,
      support: v
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = r[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
      d["[object " + e + "]"] = e.toLowerCase();
    });

    var $ =
    /*!
     * Sizzle CSS Selector Engine v2.3.4
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2019-04-08
     */
    function (t) {
      var e,
          n,
          i,
          o,
          r,
          a,
          s,
          l,
          c,
          u,
          f,
          d,
          p,
          h,
          g,
          m,
          v,
          y,
          b,
          x = "sizzle" + 1 * new Date(),
          w = t.document,
          C = 0,
          T = 0,
          S = lt(),
          E = lt(),
          $ = lt(),
          P = lt(),
          k = function k(t, e) {
        return t === e && (f = !0), 0;
      },
          A = {}.hasOwnProperty,
          L = [],
          M = L.pop,
          D = L.push,
          N = L.push,
          j = L.slice,
          H = function H(t, e) {
        for (var n = 0, i = t.length; n < i; n++) {
          if (t[n] === e) return n;
        }

        return -1;
      },
          I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          O = "[\\x20\\t\\r\\n\\f]",
          q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          R = "\\[" + O + "*(" + q + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + O + "*\\]",
          F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
          B = new RegExp(O + "+", "g"),
          z = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
          W = new RegExp("^" + O + "*," + O + "*"),
          _ = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
          X = new RegExp(O + "|>"),
          Y = new RegExp(F),
          V = new RegExp("^" + q + "$"),
          U = {
        ID: new RegExp("^#(" + q + ")"),
        CLASS: new RegExp("^\\.(" + q + ")"),
        TAG: new RegExp("^(" + q + "|[*])"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
      },
          G = /HTML$/i,
          Z = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          tt = /[+~]/,
          et = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
          nt = function nt(t, e, n) {
        var i = "0x" + e - 65536;
        return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
      },
          it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ot = function ot(t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
      },
          rt = function rt() {
        d();
      },
          at = xt(function (t) {
        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        N.apply(L = j.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType;
      } catch (t) {
        N = {
          apply: L.length ? function (t, e) {
            D.apply(t, j.call(e));
          } : function (t, e) {
            for (var n = t.length, i = 0; t[n++] = e[i++];) {
              ;
            }

            t.length = n - 1;
          }
        };
      }

      function st(t, e, i, o) {
        var r,
            s,
            c,
            u,
            f,
            h,
            v,
            y = e && e.ownerDocument,
            C = e ? e.nodeType : 9;
        if (i = i || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return i;

        if (!o && ((e ? e.ownerDocument || e : w) !== p && d(e), e = e || p, g)) {
          if (11 !== C && (f = J.exec(t))) if (r = f[1]) {
            if (9 === C) {
              if (!(c = e.getElementById(r))) return i;
              if (c.id === r) return i.push(c), i;
            } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i;
          } else {
            if (f[2]) return N.apply(i, e.getElementsByTagName(t)), i;
            if ((r = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return N.apply(i, e.getElementsByClassName(r)), i;
          }

          if (n.qsa && !P[t + " "] && (!m || !m.test(t)) && (1 !== C || "object" !== e.nodeName.toLowerCase())) {
            if (v = t, y = e, 1 === C && X.test(t)) {
              for ((u = e.getAttribute("id")) ? u = u.replace(it, ot) : e.setAttribute("id", u = x), s = (h = a(t)).length; s--;) {
                h[s] = "#" + u + " " + bt(h[s]);
              }

              v = h.join(","), y = tt.test(t) && vt(e.parentNode) || e;
            }

            try {
              return N.apply(i, y.querySelectorAll(v)), i;
            } catch (e) {
              P(t, !0);
            } finally {
              u === x && e.removeAttribute("id");
            }
          }
        }

        return l(t.replace(z, "$1"), e, i, o);
      }

      function lt() {
        var t = [];
        return function e(n, o) {
          return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o;
        };
      }

      function ct(t) {
        return t[x] = !0, t;
      }

      function ut(t) {
        var e = p.createElement("fieldset");

        try {
          return !!t(e);
        } catch (t) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null;
        }
      }

      function ft(t, e) {
        for (var n = t.split("|"), o = n.length; o--;) {
          i.attrHandle[n[o]] = e;
        }
      }

      function dt(t, e) {
        var n = e && t,
            i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
        if (i) return i;
        if (n) for (; n = n.nextSibling;) {
          if (n === e) return -1;
        }
        return t ? 1 : -1;
      }

      function pt(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }

      function ht(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t;
        };
      }

      function gt(t) {
        return function (e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t;
        };
      }

      function mt(t) {
        return ct(function (e) {
          return e = +e, ct(function (n, i) {
            for (var o, r = t([], n.length, e), a = r.length; a--;) {
              n[o = r[a]] && (n[o] = !(i[o] = n[o]));
            }
          });
        });
      }

      function vt(t) {
        return t && void 0 !== t.getElementsByTagName && t;
      }

      for (e in n = st.support = {}, r = st.isXML = function (t) {
        var e = t.namespaceURI,
            n = (t.ownerDocument || t).documentElement;
        return !G.test(e || n && n.nodeName || "HTML");
      }, d = st.setDocument = function (t) {
        var e,
            o,
            a = t ? t.ownerDocument || t : w;
        return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !r(p), w !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", rt, !1) : o.attachEvent && o.attachEvent("onunload", rt)), n.attributes = ut(function (t) {
          return t.className = "i", !t.getAttribute("className");
        }), n.getElementsByTagName = ut(function (t) {
          return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length;
        }), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = ut(function (t) {
          return h.appendChild(t).id = x, !p.getElementsByName || !p.getElementsByName(x).length;
        }), n.getById ? (i.filter.ID = function (t) {
          var e = t.replace(et, nt);
          return function (t) {
            return t.getAttribute("id") === e;
          };
        }, i.find.ID = function (t, e) {
          if (void 0 !== e.getElementById && g) {
            var n = e.getElementById(t);
            return n ? [n] : [];
          }
        }) : (i.filter.ID = function (t) {
          var e = t.replace(et, nt);
          return function (t) {
            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
            return n && n.value === e;
          };
        }, i.find.ID = function (t, e) {
          if (void 0 !== e.getElementById && g) {
            var n,
                i,
                o,
                r = e.getElementById(t);

            if (r) {
              if ((n = r.getAttributeNode("id")) && n.value === t) return [r];

              for (o = e.getElementsByName(t), i = 0; r = o[i++];) {
                if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
              }
            }

            return [];
          }
        }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
          return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
        } : function (t, e) {
          var n,
              i = [],
              o = 0,
              r = e.getElementsByTagName(t);

          if ("*" === t) {
            for (; n = r[o++];) {
              1 === n.nodeType && i.push(n);
            }

            return i;
          }

          return r;
        }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
          if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
        }, v = [], m = [], (n.qsa = Q.test(p.querySelectorAll)) && (ut(function (t) {
          h.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]");
        }), ut(function (t) {
          t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var e = p.createElement("input");
          e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:");
        })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ut(function (t) {
          n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", F);
        }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(h.compareDocumentPosition), b = e || Q.test(h.contains) ? function (t, e) {
          var n = 9 === t.nodeType ? t.documentElement : t,
              i = e && e.parentNode;
          return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
        } : function (t, e) {
          if (e) for (; e = e.parentNode;) {
            if (e === t) return !0;
          }
          return !1;
        }, k = e ? function (t, e) {
          if (t === e) return f = !0, 0;
          var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
          return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === p || t.ownerDocument === w && b(w, t) ? -1 : e === p || e.ownerDocument === w && b(w, e) ? 1 : u ? H(u, t) - H(u, e) : 0 : 4 & i ? -1 : 1);
        } : function (t, e) {
          if (t === e) return f = !0, 0;
          var n,
              i = 0,
              o = t.parentNode,
              r = e.parentNode,
              a = [t],
              s = [e];
          if (!o || !r) return t === p ? -1 : e === p ? 1 : o ? -1 : r ? 1 : u ? H(u, t) - H(u, e) : 0;
          if (o === r) return dt(t, e);

          for (n = t; n = n.parentNode;) {
            a.unshift(n);
          }

          for (n = e; n = n.parentNode;) {
            s.unshift(n);
          }

          for (; a[i] === s[i];) {
            i++;
          }

          return i ? dt(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0;
        }, p) : p;
      }, st.matches = function (t, e) {
        return st(t, null, null, e);
      }, st.matchesSelector = function (t, e) {
        if ((t.ownerDocument || t) !== p && d(t), n.matchesSelector && g && !P[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
          var i = y.call(t, e);
          if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
        } catch (t) {
          P(e, !0);
        }
        return st(e, p, null, [t]).length > 0;
      }, st.contains = function (t, e) {
        return (t.ownerDocument || t) !== p && d(t), b(t, e);
      }, st.attr = function (t, e) {
        (t.ownerDocument || t) !== p && d(t);
        var o = i.attrHandle[e.toLowerCase()],
            r = o && A.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
        return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
      }, st.escape = function (t) {
        return (t + "").replace(it, ot);
      }, st.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }, st.uniqueSort = function (t) {
        var e,
            i = [],
            o = 0,
            r = 0;

        if (f = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(k), f) {
          for (; e = t[r++];) {
            e === t[r] && (o = i.push(r));
          }

          for (; o--;) {
            t.splice(i[o], 1);
          }
        }

        return u = null, t;
      }, o = st.getText = function (t) {
        var e,
            n = "",
            i = 0,
            r = t.nodeType;

        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof t.textContent) return t.textContent;

            for (t = t.firstChild; t; t = t.nextSibling) {
              n += o(t);
            }
          } else if (3 === r || 4 === r) return t.nodeValue;
        } else for (; e = t[i++];) {
          n += o(e);
        }

        return n;
      }, (i = st.selectors = {
        cacheLength: 50,
        createPseudo: ct,
        match: U,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(t) {
            return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
          },
          CHILD: function CHILD(t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t;
          },
          PSEUDO: function PSEUDO(t) {
            var e,
                n = !t[6] && t[2];
            return U.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(t) {
            var e = t.replace(et, nt).toLowerCase();
            return "*" === t ? function () {
              return !0;
            } : function (t) {
              return t.nodeName && t.nodeName.toLowerCase() === e;
            };
          },
          CLASS: function CLASS(t) {
            var e = S[t + " "];
            return e || (e = new RegExp("(^|" + O + ")" + t + "(" + O + "|$)")) && S(t, function (t) {
              return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(t, e, n) {
            return function (i) {
              var o = st.attr(i, t);
              return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function CHILD(t, e, n, i, o) {
            var r = "nth" !== t.slice(0, 3),
                a = "last" !== t.slice(-4),
                s = "of-type" === e;
            return 1 === i && 0 === o ? function (t) {
              return !!t.parentNode;
            } : function (e, n, l) {
              var c,
                  u,
                  f,
                  d,
                  p,
                  h,
                  g = r !== a ? "nextSibling" : "previousSibling",
                  m = e.parentNode,
                  v = s && e.nodeName.toLowerCase(),
                  y = !l && !s,
                  b = !1;

              if (m) {
                if (r) {
                  for (; g;) {
                    for (d = e; d = d[g];) {
                      if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                    }

                    h = g = "only" === t && !h && "nextSibling";
                  }

                  return !0;
                }

                if (h = [a ? m.firstChild : m.lastChild], a && y) {
                  for (b = (p = (c = (u = (f = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === C && c[1]) && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();) {
                    if (1 === d.nodeType && ++b && d === e) {
                      u[t] = [C, p, b];
                      break;
                    }
                  }
                } else if (y && (b = p = (c = (u = (f = (d = e)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === C && c[1]), !1 === b) for (; (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [C, b]), d !== e));) {
                  ;
                }

                return (b -= o) === i || b % i == 0 && b / i >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(t, e) {
            var n,
                o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
            return o[x] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, n) {
              for (var i, r = o(t, e), a = r.length; a--;) {
                t[i = H(t, r[a])] = !(n[i] = r[a]);
              }
            }) : function (t) {
              return o(t, 0, n);
            }) : o;
          }
        },
        pseudos: {
          not: ct(function (t) {
            var e = [],
                n = [],
                i = s(t.replace(z, "$1"));
            return i[x] ? ct(function (t, e, n, o) {
              for (var r, a = i(t, null, o, []), s = t.length; s--;) {
                (r = a[s]) && (t[s] = !(e[s] = r));
              }
            }) : function (t, o, r) {
              return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop();
            };
          }),
          has: ct(function (t) {
            return function (e) {
              return st(t, e).length > 0;
            };
          }),
          contains: ct(function (t) {
            return t = t.replace(et, nt), function (e) {
              return (e.textContent || o(e)).indexOf(t) > -1;
            };
          }),
          lang: ct(function (t) {
            return V.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(), function (e) {
              var n;

              do {
                if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
              } while ((e = e.parentNode) && 1 === e.nodeType);

              return !1;
            };
          }),
          target: function target(e) {
            var n = t.location && t.location.hash;
            return n && n.slice(1) === e.id;
          },
          root: function root(t) {
            return t === h;
          },
          focus: function focus(t) {
            return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
          },
          enabled: gt(!1),
          disabled: gt(!0),
          checked: function checked(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && !!t.checked || "option" === e && !!t.selected;
          },
          selected: function selected(t) {
            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
          },
          empty: function empty(t) {
            for (t = t.firstChild; t; t = t.nextSibling) {
              if (t.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(t) {
            return !i.pseudos.empty(t);
          },
          header: function header(t) {
            return K.test(t.nodeName);
          },
          input: function input(t) {
            return Z.test(t.nodeName);
          },
          button: function button(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && "button" === t.type || "button" === e;
          },
          text: function text(t) {
            var e;
            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
          },
          first: mt(function () {
            return [0];
          }),
          last: mt(function (t, e) {
            return [e - 1];
          }),
          eq: mt(function (t, e, n) {
            return [n < 0 ? n + e : n];
          }),
          even: mt(function (t, e) {
            for (var n = 0; n < e; n += 2) {
              t.push(n);
            }

            return t;
          }),
          odd: mt(function (t, e) {
            for (var n = 1; n < e; n += 2) {
              t.push(n);
            }

            return t;
          }),
          lt: mt(function (t, e, n) {
            for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) {
              t.push(i);
            }

            return t;
          }),
          gt: mt(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e;) {
              t.push(i);
            }

            return t;
          })
        }
      }).pseudos.nth = i.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        i.pseudos[e] = pt(e);
      }

      for (e in {
        submit: !0,
        reset: !0
      }) {
        i.pseudos[e] = ht(e);
      }

      function yt() {}

      function bt(t) {
        for (var e = 0, n = t.length, i = ""; e < n; e++) {
          i += t[e].value;
        }

        return i;
      }

      function xt(t, e, n) {
        var i = e.dir,
            o = e.next,
            r = o || i,
            a = n && "parentNode" === r,
            s = T++;
        return e.first ? function (e, n, o) {
          for (; e = e[i];) {
            if (1 === e.nodeType || a) return t(e, n, o);
          }

          return !1;
        } : function (e, n, l) {
          var c,
              u,
              f,
              d = [C, s];

          if (l) {
            for (; e = e[i];) {
              if ((1 === e.nodeType || a) && t(e, n, l)) return !0;
            }
          } else for (; e = e[i];) {
            if (1 === e.nodeType || a) if (u = (f = e[x] || (e[x] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;else {
              if ((c = u[r]) && c[0] === C && c[1] === s) return d[2] = c[2];
              if (u[r] = d, d[2] = t(e, n, l)) return !0;
            }
          }

          return !1;
        };
      }

      function wt(t) {
        return t.length > 1 ? function (e, n, i) {
          for (var o = t.length; o--;) {
            if (!t[o](e, n, i)) return !1;
          }

          return !0;
        } : t[0];
      }

      function Ct(t, e, n, i, o) {
        for (var r, a = [], s = 0, l = t.length, c = null != e; s < l; s++) {
          (r = t[s]) && (n && !n(r, i, o) || (a.push(r), c && e.push(s)));
        }

        return a;
      }

      function Tt(t, e, n, i, o, r) {
        return i && !i[x] && (i = Tt(i)), o && !o[x] && (o = Tt(o, r)), ct(function (r, a, s, l) {
          var c,
              u,
              f,
              d = [],
              p = [],
              h = a.length,
              g = r || function (t, e, n) {
            for (var i = 0, o = e.length; i < o; i++) {
              st(t, e[i], n);
            }

            return n;
          }(e || "*", s.nodeType ? [s] : s, []),
              m = !t || !r && e ? g : Ct(g, d, t, s, l),
              v = n ? o || (r ? t : h || i) ? [] : a : m;

          if (n && n(m, v, s, l), i) for (c = Ct(v, p), i(c, [], s, l), u = c.length; u--;) {
            (f = c[u]) && (v[p[u]] = !(m[p[u]] = f));
          }

          if (r) {
            if (o || t) {
              if (o) {
                for (c = [], u = v.length; u--;) {
                  (f = v[u]) && c.push(m[u] = f);
                }

                o(null, v = [], c, l);
              }

              for (u = v.length; u--;) {
                (f = v[u]) && (c = o ? H(r, f) : d[u]) > -1 && (r[c] = !(a[c] = f));
              }
            }
          } else v = Ct(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, l) : N.apply(a, v);
        });
      }

      function St(t) {
        for (var e, n, o, r = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = xt(function (t) {
          return t === e;
        }, s, !0), f = xt(function (t) {
          return H(e, t) > -1;
        }, s, !0), d = [function (t, n, i) {
          var o = !a && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : f(t, n, i));
          return e = null, o;
        }]; l < r; l++) {
          if (n = i.relative[t[l].type]) d = [xt(wt(d), n)];else {
            if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
              for (o = ++l; o < r && !i.relative[t[o].type]; o++) {
                ;
              }

              return Tt(l > 1 && wt(d), l > 1 && bt(t.slice(0, l - 1).concat({
                value: " " === t[l - 2].type ? "*" : ""
              })).replace(z, "$1"), n, l < o && St(t.slice(l, o)), o < r && St(t = t.slice(o)), o < r && bt(t));
            }

            d.push(n);
          }
        }

        return wt(d);
      }

      return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt(), a = st.tokenize = function (t, e) {
        var n,
            o,
            r,
            a,
            s,
            l,
            c,
            u = E[t + " "];
        if (u) return e ? 0 : u.slice(0);

        for (s = t, l = [], c = i.preFilter; s;) {
          for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), n = !1, (o = _.exec(s)) && (n = o.shift(), r.push({
            value: n,
            type: o[0].replace(z, " ")
          }), s = s.slice(n.length)), i.filter) {
            !(o = U[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(), r.push({
              value: n,
              type: a,
              matches: o
            }), s = s.slice(n.length));
          }

          if (!n) break;
        }

        return e ? s.length : s ? st.error(t) : E(t, l).slice(0);
      }, s = st.compile = function (t, e) {
        var n,
            o = [],
            r = [],
            s = $[t + " "];

        if (!s) {
          for (e || (e = a(t)), n = e.length; n--;) {
            (s = St(e[n]))[x] ? o.push(s) : r.push(s);
          }

          (s = $(t, function (t, e) {
            var n = e.length > 0,
                o = t.length > 0,
                r = function r(_r, a, s, l, u) {
              var f,
                  h,
                  m,
                  v = 0,
                  y = "0",
                  b = _r && [],
                  x = [],
                  w = c,
                  T = _r || o && i.find.TAG("*", u),
                  S = C += null == w ? 1 : Math.random() || .1,
                  E = T.length;

              for (u && (c = a === p || a || u); y !== E && null != (f = T[y]); y++) {
                if (o && f) {
                  for (h = 0, a || f.ownerDocument === p || (d(f), s = !g); m = t[h++];) {
                    if (m(f, a || p, s)) {
                      l.push(f);
                      break;
                    }
                  }

                  u && (C = S);
                }

                n && ((f = !m && f) && v--, _r && b.push(f));
              }

              if (v += y, n && y !== v) {
                for (h = 0; m = e[h++];) {
                  m(b, x, a, s);
                }

                if (_r) {
                  if (v > 0) for (; y--;) {
                    b[y] || x[y] || (x[y] = M.call(l));
                  }
                  x = Ct(x);
                }

                N.apply(l, x), u && !_r && x.length > 0 && v + e.length > 1 && st.uniqueSort(l);
              }

              return u && (C = S, c = w), b;
            };

            return n ? ct(r) : r;
          }(r, o))).selector = t;
        }

        return s;
      }, l = st.select = function (t, e, n, o) {
        var r,
            l,
            c,
            u,
            f,
            d = "function" == typeof t && t,
            p = !o && a(t = d.selector || t);

        if (n = n || [], 1 === p.length) {
          if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
            if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
            d && (e = e.parentNode), t = t.slice(l.shift().value.length);
          }

          for (r = U.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);) {
            if ((f = i.find[u]) && (o = f(c.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
              if (l.splice(r, 1), !(t = o.length && bt(l))) return N.apply(n, o), n;
              break;
            }
          }
        }

        return (d || s(t, p))(o, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n;
      }, n.sortStable = x.split("").sort(k).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ut(function (t) {
        return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
      }), ut(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
      }) || ft("type|href|height|width", function (t, e, n) {
        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
      }), n.attributes && ut(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
      }) || ft("value", function (t, e, n) {
        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
      }), ut(function (t) {
        return null == t.getAttribute("disabled");
      }) || ft(I, function (t, e, n) {
        var i;
        if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
      }), st;
    }(n);

    T.find = $, T.expr = $.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = $.uniqueSort, T.text = $.getText, T.isXMLDoc = $.isXML, T.contains = $.contains, T.escapeSelector = $.escape;

    var P = function P(t, e, n) {
      for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) {
        if (1 === t.nodeType) {
          if (o && T(t).is(n)) break;
          i.push(t);
        }
      }

      return i;
    },
        k = function k(t, e) {
      for (var n = []; t; t = t.nextSibling) {
        1 === t.nodeType && t !== e && n.push(t);
      }

      return n;
    },
        A = T.expr.match.needsContext;

    function L(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }

    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(t, e, n) {
      return y(e) ? T.grep(t, function (t, i) {
        return !!e.call(t, i, t) !== n;
      }) : e.nodeType ? T.grep(t, function (t) {
        return t === e !== n;
      }) : "string" != typeof e ? T.grep(t, function (t) {
        return f.call(e, t) > -1 !== n;
      }) : T.filter(e, t, n);
    }

    T.filter = function (t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, function (t) {
        return 1 === t.nodeType;
      }));
    }, T.fn.extend({
      find: function find(t) {
        var e,
            n,
            i = this.length,
            o = this;
        if ("string" != typeof t) return this.pushStack(T(t).filter(function () {
          for (e = 0; e < i; e++) {
            if (T.contains(o[e], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), e = 0; e < i; e++) {
          T.find(t, o[e], n);
        }

        return i > 1 ? T.uniqueSort(n) : n;
      },
      filter: function filter(t) {
        return this.pushStack(D(this, t || [], !1));
      },
      not: function not(t) {
        return this.pushStack(D(this, t || [], !0));
      },
      is: function is(t) {
        return !!D(this, "string" == typeof t && A.test(t) ? T(t) : t || [], !1).length;
      }
    });
    var N,
        j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function (t, e, n) {
      var i, o;
      if (!t) return this;

      if (n = n || N, "string" == typeof t) {
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : j.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);

        if (i[1]) {
          if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : a, !0)), M.test(i[1]) && T.isPlainObject(e)) for (i in e) {
            y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
          }
          return this;
        }

        return (o = a.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
      }

      return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this);
    }).prototype = T.fn, N = T(a);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function O(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType;) {
        ;
      }

      return t;
    }

    T.fn.extend({
      has: function has(t) {
        var e = T(t, this),
            n = e.length;
        return this.filter(function () {
          for (var t = 0; t < n; t++) {
            if (T.contains(this, e[t])) return !0;
          }
        });
      },
      closest: function closest(t, e) {
        var n,
            i = 0,
            o = this.length,
            r = [],
            a = "string" != typeof t && T(t);
        if (!A.test(t)) for (; i < o; i++) {
          for (n = this[i]; n && n !== e; n = n.parentNode) {
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
              r.push(n);
              break;
            }
          }
        }
        return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
      },
      index: function index(t) {
        return t ? "string" == typeof t ? f.call(T(t), this[0]) : f.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(t, e) {
        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
      },
      addBack: function addBack(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
      }
    }), T.each({
      parent: function parent(t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null;
      },
      parents: function parents(t) {
        return P(t, "parentNode");
      },
      parentsUntil: function parentsUntil(t, e, n) {
        return P(t, "parentNode", n);
      },
      next: function next(t) {
        return O(t, "nextSibling");
      },
      prev: function prev(t) {
        return O(t, "previousSibling");
      },
      nextAll: function nextAll(t) {
        return P(t, "nextSibling");
      },
      prevAll: function prevAll(t) {
        return P(t, "previousSibling");
      },
      nextUntil: function nextUntil(t, e, n) {
        return P(t, "nextSibling", n);
      },
      prevUntil: function prevUntil(t, e, n) {
        return P(t, "previousSibling", n);
      },
      siblings: function siblings(t) {
        return k((t.parentNode || {}).firstChild, t);
      },
      children: function children(t) {
        return k(t.firstChild);
      },
      contents: function contents(t) {
        return void 0 !== t.contentDocument ? t.contentDocument : (L(t, "template") && (t = t.content || t), T.merge([], t.childNodes));
      }
    }, function (t, e) {
      T.fn[t] = function (n, i) {
        var o = T.map(this, e, n);
        return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = T.filter(i, o)), this.length > 1 && (I[t] || T.uniqueSort(o), H.test(t) && o.reverse()), this.pushStack(o);
      };
    });
    var q = /[^\x20\t\r\n\f]+/g;

    function R(t) {
      return t;
    }

    function F(t) {
      throw t;
    }

    function B(t, e, n, i) {
      var o;

      try {
        t && y(o = t.promise) ? o.call(t).done(e).fail(n) : t && y(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
      } catch (t) {
        n.apply(void 0, [t]);
      }
    }

    T.Callbacks = function (t) {
      t = "string" == typeof t ? function (t) {
        var e = {};
        return T.each(t.match(q) || [], function (t, n) {
          e[n] = !0;
        }), e;
      }(t) : T.extend({}, t);

      var e,
          n,
          i,
          o,
          r = [],
          a = [],
          s = -1,
          l = function l() {
        for (o = o || t.once, i = e = !0; a.length; s = -1) {
          for (n = a.shift(); ++s < r.length;) {
            !1 === r[s].apply(n[0], n[1]) && t.stopOnFalse && (s = r.length, n = !1);
          }
        }

        t.memory || (n = !1), e = !1, o && (r = n ? [] : "");
      },
          c = {
        add: function add() {
          return r && (n && !e && (s = r.length - 1, a.push(n)), function e(n) {
            T.each(n, function (n, i) {
              y(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== C(i) && e(i);
            });
          }(arguments), n && !e && l()), this;
        },
        remove: function remove() {
          return T.each(arguments, function (t, e) {
            for (var n; (n = T.inArray(e, r, n)) > -1;) {
              r.splice(n, 1), n <= s && s--;
            }
          }), this;
        },
        has: function has(t) {
          return t ? T.inArray(t, r) > -1 : r.length > 0;
        },
        empty: function empty() {
          return r && (r = []), this;
        },
        disable: function disable() {
          return o = a = [], r = n = "", this;
        },
        disabled: function disabled() {
          return !r;
        },
        lock: function lock() {
          return o = a = [], n || e || (r = n = ""), this;
        },
        locked: function locked() {
          return !!o;
        },
        fireWith: function fireWith(t, n) {
          return o || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || l()), this;
        },
        fire: function fire() {
          return c.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!i;
        }
      };

      return c;
    }, T.extend({
      Deferred: function Deferred(t) {
        var e = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
            i = "pending",
            o = {
          state: function state() {
            return i;
          },
          always: function always() {
            return r.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(t) {
            return o.then(null, t);
          },
          pipe: function pipe() {
            var t = arguments;
            return T.Deferred(function (n) {
              T.each(e, function (e, i) {
                var o = y(t[i[4]]) && t[i[4]];
                r[i[1]](function () {
                  var t = o && o.apply(this, arguments);
                  t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [t] : arguments);
                });
              }), t = null;
            }).promise();
          },
          then: function then(t, i, o) {
            var r = 0;

            function a(t, e, i, o) {
              return function () {
                var s = this,
                    l = arguments,
                    c = function c() {
                  var n, c;

                  if (!(t < r)) {
                    if ((n = i.apply(s, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                    c = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, y(c) ? o ? c.call(n, a(r, e, R, o), a(r, e, F, o)) : (r++, c.call(n, a(r, e, R, o), a(r, e, F, o), a(r, e, R, e.notifyWith))) : (i !== R && (s = void 0, l = [n]), (o || e.resolveWith)(s, l));
                  }
                },
                    u = o ? c : function () {
                  try {
                    c();
                  } catch (n) {
                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, u.stackTrace), t + 1 >= r && (i !== F && (s = void 0, l = [n]), e.rejectWith(s, l));
                  }
                };

                t ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()), n.setTimeout(u));
              };
            }

            return T.Deferred(function (n) {
              e[0][3].add(a(0, n, y(o) ? o : R, n.notifyWith)), e[1][3].add(a(0, n, y(t) ? t : R)), e[2][3].add(a(0, n, y(i) ? i : F));
            }).promise();
          },
          promise: function promise(t) {
            return null != t ? T.extend(t, o) : o;
          }
        },
            r = {};
        return T.each(e, function (t, n) {
          var a = n[2],
              s = n[5];
          o[n[1]] = a.add, s && a.add(function () {
            i = s;
          }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(n[3].fire), r[n[0]] = function () {
            return r[n[0] + "With"](this === r ? void 0 : this, arguments), this;
          }, r[n[0] + "With"] = a.fireWith;
        }), o.promise(r), t && t.call(r, r), r;
      },
      when: function when(t) {
        var e = arguments.length,
            n = e,
            i = Array(n),
            o = l.call(arguments),
            r = T.Deferred(),
            a = function a(t) {
          return function (n) {
            i[t] = this, o[t] = arguments.length > 1 ? l.call(arguments) : n, --e || r.resolveWith(i, o);
          };
        };

        if (e <= 1 && (B(t, r.done(a(n)).resolve, r.reject, !e), "pending" === r.state() || y(o[n] && o[n].then))) return r.then();

        for (; n--;) {
          B(o[n], a(n), r.reject);
        }

        return r.promise();
      }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function (t, e) {
      n.console && n.console.warn && t && z.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
    }, T.readyException = function (t) {
      n.setTimeout(function () {
        throw t;
      });
    };
    var W = T.Deferred();

    function _() {
      a.removeEventListener("DOMContentLoaded", _), n.removeEventListener("load", _), T.ready();
    }

    T.fn.ready = function (t) {
      return W.then(t)["catch"](function (t) {
        T.readyException(t);
      }), this;
    }, T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(t) {
        (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== t && --T.readyWait > 0 || W.resolveWith(a, [T]));
      }
    }), T.ready.then = W.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", _), n.addEventListener("load", _));

    var X = function X(t, e, n, i, o, r, a) {
      var s = 0,
          l = t.length,
          c = null == n;
      if ("object" === C(n)) for (s in o = !0, n) {
        X(t, e, s, n[s], !0, r, a);
      } else if (void 0 !== i && (o = !0, y(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function e(t, _e2, n) {
        return c.call(T(t), n);
      })), e)) for (; s < l; s++) {
        e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
      }
      return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
    },
        Y = /^-ms-/,
        V = /-([a-z])/g;

    function U(t, e) {
      return e.toUpperCase();
    }

    function G(t) {
      return t.replace(Y, "ms-").replace(V, U);
    }

    var Z = function Z(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };

    function K() {
      this.expando = T.expando + K.uid++;
    }

    K.uid = 1, K.prototype = {
      cache: function cache(t) {
        var e = t[this.expando];
        return e || (e = {}, Z(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
          value: e,
          configurable: !0
        }))), e;
      },
      set: function set(t, e, n) {
        var i,
            o = this.cache(t);
        if ("string" == typeof e) o[G(e)] = n;else for (i in e) {
          o[G(i)] = e[i];
        }
        return o;
      },
      get: function get(t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)];
      },
      access: function access(t, e, n) {
        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
      },
      remove: function remove(t, e) {
        var n,
            i = t[this.expando];

        if (void 0 !== i) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in i ? [e] : e.match(q) || []).length;

            for (; n--;) {
              delete i[e[n]];
            }
          }

          (void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
        }
      },
      hasData: function hasData(t) {
        var e = t[this.expando];
        return void 0 !== e && !T.isEmptyObject(e);
      }
    };
    var Q = new K(),
        J = new K(),
        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        et = /[A-Z]/g;

    function nt(t, e, n) {
      var i;
      if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
        try {
          n = function (t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t);
          }(n);
        } catch (t) {}

        J.set(t, e, n);
      } else n = void 0;
      return n;
    }

    T.extend({
      hasData: function hasData(t) {
        return J.hasData(t) || Q.hasData(t);
      },
      data: function data(t, e, n) {
        return J.access(t, e, n);
      },
      removeData: function removeData(t, e) {
        J.remove(t, e);
      },
      _data: function _data(t, e, n) {
        return Q.access(t, e, n);
      },
      _removeData: function _removeData(t, e) {
        Q.remove(t, e);
      }
    }), T.fn.extend({
      data: function data(t, e) {
        var n,
            i,
            o,
            r = this[0],
            a = r && r.attributes;

        if (void 0 === t) {
          if (this.length && (o = J.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
            for (n = a.length; n--;) {
              a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = G(i.slice(5)), nt(r, i, o[i]));
            }

            Q.set(r, "hasDataAttrs", !0);
          }

          return o;
        }

        return "object" == _typeof(t) ? this.each(function () {
          J.set(this, t);
        }) : X(this, function (e) {
          var n;
          if (r && void 0 === e) return void 0 !== (n = J.get(r, t)) ? n : void 0 !== (n = nt(r, t)) ? n : void 0;
          this.each(function () {
            J.set(this, t, e);
          });
        }, null, e, arguments.length > 1, null, !0);
      },
      removeData: function removeData(t) {
        return this.each(function () {
          J.remove(this, t);
        });
      }
    }), T.extend({
      queue: function queue(t, e, n) {
        var i;
        if (t) return e = (e || "fx") + "queue", i = Q.get(t, e), n && (!i || Array.isArray(n) ? i = Q.access(t, e, T.makeArray(n)) : i.push(n)), i || [];
      },
      dequeue: function dequeue(t, e) {
        e = e || "fx";

        var n = T.queue(t, e),
            i = n.length,
            o = n.shift(),
            r = T._queueHooks(t, e);

        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
          T.dequeue(t, e);
        }, r)), !i && r && r.empty.fire();
      },
      _queueHooks: function _queueHooks(t, e) {
        var n = e + "queueHooks";
        return Q.get(t, n) || Q.access(t, n, {
          empty: T.Callbacks("once memory").add(function () {
            Q.remove(t, [e + "queue", n]);
          })
        });
      }
    }), T.fn.extend({
      queue: function queue(t, e) {
        var n = 2;
        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? T.queue(this[0], t) : void 0 === e ? this : this.each(function () {
          var n = T.queue(this, t, e);
          T._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && T.dequeue(this, t);
        });
      },
      dequeue: function dequeue(t) {
        return this.each(function () {
          T.dequeue(this, t);
        });
      },
      clearQueue: function clearQueue(t) {
        return this.queue(t || "fx", []);
      },
      promise: function promise(t, e) {
        var n,
            i = 1,
            o = T.Deferred(),
            r = this,
            a = this.length,
            s = function s() {
          --i || o.resolveWith(r, [r]);
        };

        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) {
          (n = Q.get(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
        }

        return s(), o.promise(e);
      }
    });

    var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ot = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
        rt = ["Top", "Right", "Bottom", "Left"],
        at = a.documentElement,
        st = function st(t) {
      return T.contains(t.ownerDocument, t);
    },
        lt = {
      composed: !0
    };

    at.getRootNode && (st = function st(t) {
      return T.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument;
    });

    var ct = function ct(t, e) {
      return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === T.css(t, "display");
    },
        ut = function ut(t, e, n, i) {
      var o,
          r,
          a = {};

      for (r in e) {
        a[r] = t.style[r], t.style[r] = e[r];
      }

      for (r in o = n.apply(t, i || []), e) {
        t.style[r] = a[r];
      }

      return o;
    };

    function ft(t, e, n, i) {
      var o,
          r,
          a = 20,
          s = i ? function () {
        return i.cur();
      } : function () {
        return T.css(t, e, "");
      },
          l = s(),
          c = n && n[3] || (T.cssNumber[e] ? "" : "px"),
          u = t.nodeType && (T.cssNumber[e] || "px" !== c && +l) && ot.exec(T.css(t, e));

      if (u && u[3] !== c) {
        for (l /= 2, c = c || u[3], u = +l || 1; a--;) {
          T.style(t, e, u + c), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), u /= r;
        }

        u *= 2, T.style(t, e, u + c), n = n || [];
      }

      return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o;
    }

    var dt = {};

    function pt(t) {
      var e,
          n = t.ownerDocument,
          i = t.nodeName,
          o = dt[i];
      return o || (e = n.body.appendChild(n.createElement(i)), o = T.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), dt[i] = o, o);
    }

    function ht(t, e) {
      for (var n, i, o = [], r = 0, a = t.length; r < a; r++) {
        (i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = Q.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ct(i) && (o[r] = pt(i))) : "none" !== n && (o[r] = "none", Q.set(i, "display", n)));
      }

      for (r = 0; r < a; r++) {
        null != o[r] && (t[r].style.display = o[r]);
      }

      return t;
    }

    T.fn.extend({
      show: function show() {
        return ht(this, !0);
      },
      hide: function hide() {
        return ht(this);
      },
      toggle: function toggle(t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
          ct(this) ? T(this).show() : T(this).hide();
        });
      }
    });
    var gt = /^(?:checkbox|radio)$/i,
        mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        vt = /^$|^module$|\/(?:java|ecma)script/i,
        yt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function bt(t, e) {
      var n;
      return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && L(t, e) ? T.merge([t], n) : n;
    }

    function xt(t, e) {
      for (var n = 0, i = t.length; n < i; n++) {
        Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"));
      }
    }

    yt.optgroup = yt.option, yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td;
    var wt,
        Ct,
        Tt = /<|&#?\w+;/;

    function St(t, e, n, i, o) {
      for (var r, a, s, l, c, u, f = e.createDocumentFragment(), d = [], p = 0, h = t.length; p < h; p++) {
        if ((r = t[p]) || 0 === r) if ("object" === C(r)) T.merge(d, r.nodeType ? [r] : r);else if (Tt.test(r)) {
          for (a = a || f.appendChild(e.createElement("div")), s = (mt.exec(r) || ["", ""])[1].toLowerCase(), l = yt[s] || yt._default, a.innerHTML = l[1] + T.htmlPrefilter(r) + l[2], u = l[0]; u--;) {
            a = a.lastChild;
          }

          T.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
        } else d.push(e.createTextNode(r));
      }

      for (f.textContent = "", p = 0; r = d[p++];) {
        if (i && T.inArray(r, i) > -1) o && o.push(r);else if (c = st(r), a = bt(f.appendChild(r), "script"), c && xt(a), n) for (u = 0; r = a[u++];) {
          vt.test(r.type || "") && n.push(r);
        }
      }

      return f;
    }

    wt = a.createDocumentFragment().appendChild(a.createElement("div")), (Ct = a.createElement("input")).setAttribute("type", "radio"), Ct.setAttribute("checked", "checked"), Ct.setAttribute("name", "t"), wt.appendChild(Ct), v.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked, wt.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue;
    var Et = /^key/,
        $t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Pt = /^([^.]*)(?:\.(.+)|)/;

    function kt() {
      return !0;
    }

    function At() {
      return !1;
    }

    function Lt(t, e) {
      return t === function () {
        try {
          return a.activeElement;
        } catch (t) {}
      }() == ("focus" === e);
    }

    function Mt(t, e, n, i, o, r) {
      var a, s;

      if ("object" == _typeof(e)) {
        for (s in "string" != typeof n && (i = i || n, n = void 0), e) {
          Mt(t, s, n, i, e[s], r);
        }

        return t;
      }

      if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = At;else if (!o) return t;
      return 1 === r && (a = o, (o = function o(t) {
        return T().off(t), a.apply(this, arguments);
      }).guid = a.guid || (a.guid = T.guid++)), t.each(function () {
        T.event.add(this, e, o, i, n);
      });
    }

    function Dt(t, e, n) {
      n ? (Q.set(t, e, !1), T.event.add(t, e, {
        namespace: !1,
        handler: function handler(t) {
          var i,
              o,
              r = Q.get(this, e);

          if (1 & t.isTrigger && this[e]) {
            if (r.length) (T.event.special[e] || {}).delegateType && t.stopPropagation();else if (r = l.call(arguments), Q.set(this, e, r), i = n(this, e), this[e](), r !== (o = Q.get(this, e)) || i ? Q.set(this, e, !1) : o = {}, r !== o) return t.stopImmediatePropagation(), t.preventDefault(), o.value;
          } else r.length && (Q.set(this, e, {
            value: T.event.trigger(T.extend(r[0], T.Event.prototype), r.slice(1), this)
          }), t.stopImmediatePropagation());
        }
      })) : void 0 === Q.get(t, e) && T.event.add(t, e, kt);
    }

    T.event = {
      global: {},
      add: function add(t, e, n, i, o) {
        var r,
            a,
            s,
            l,
            c,
            u,
            f,
            d,
            p,
            h,
            g,
            m = Q.get(t);
        if (m) for (n.handler && (n = (r = n).handler, o = r.selector), o && T.find.matchesSelector(at, o), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
          return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0;
        }), c = (e = (e || "").match(q) || [""]).length; c--;) {
          p = g = (s = Pt.exec(e[c]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = T.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = T.event.special[p] || {}, u = T.extend({
            type: p,
            origType: g,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && T.expr.match.needsContext.test(o),
            namespace: h.join(".")
          }, r), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), T.event.global[p] = !0);
        }
      },
      remove: function remove(t, e, n, i, o) {
        var r,
            a,
            s,
            l,
            c,
            u,
            f,
            d,
            p,
            h,
            g,
            m = Q.hasData(t) && Q.get(t);

        if (m && (l = m.events)) {
          for (c = (e = (e || "").match(q) || [""]).length; c--;) {
            if (p = g = (s = Pt.exec(e[c]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
              for (f = T.event.special[p] || {}, d = l[p = (i ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) {
                u = d[r], !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(t, u));
              }

              a && !d.length && (f.teardown && !1 !== f.teardown.call(t, h, m.handle) || T.removeEvent(t, p, m.handle), delete l[p]);
            } else for (p in l) {
              T.event.remove(t, p + e[c], n, i, !0);
            }
          }

          T.isEmptyObject(l) && Q.remove(t, "handle events");
        }
      },
      dispatch: function dispatch(t) {
        var e,
            n,
            i,
            o,
            r,
            a,
            s = T.event.fix(t),
            l = new Array(arguments.length),
            c = (Q.get(this, "events") || {})[s.type] || [],
            u = T.event.special[s.type] || {};

        for (l[0] = s, e = 1; e < arguments.length; e++) {
          l[e] = arguments[e];
        }

        if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
          for (a = T.event.handlers.call(this, s, c), e = 0; (o = a[e++]) && !s.isPropagationStopped();) {
            for (s.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) {
              s.rnamespace && !1 !== r.namespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((T.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
            }
          }

          return u.postDispatch && u.postDispatch.call(this, s), s.result;
        }
      },
      handlers: function handlers(t, e) {
        var n,
            i,
            o,
            r,
            a,
            s = [],
            l = e.delegateCount,
            c = t.target;
        if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) {
          if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
            for (r = [], a = {}, n = 0; n < l; n++) {
              void 0 === a[o = (i = e[n]).selector + " "] && (a[o] = i.needsContext ? T(o, this).index(c) > -1 : T.find(o, this, null, [c]).length), a[o] && r.push(i);
            }

            r.length && s.push({
              elem: c,
              handlers: r
            });
          }
        }
        return c = this, l < e.length && s.push({
          elem: c,
          handlers: e.slice(l)
        }), s;
      },
      addProp: function addProp(t, e) {
        Object.defineProperty(T.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: y(e) ? function () {
            if (this.originalEvent) return e(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[t];
          },
          set: function set(e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e
            });
          }
        });
      },
      fix: function fix(t) {
        return t[T.expando] ? t : new T.Event(t);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(t) {
            var e = this || t;
            return gt.test(e.type) && e.click && L(e, "input") && Dt(e, "click", kt), !1;
          },
          trigger: function trigger(t) {
            var e = this || t;
            return gt.test(e.type) && e.click && L(e, "input") && Dt(e, "click"), !0;
          },
          _default: function _default(t) {
            var e = t.target;
            return gt.test(e.type) && e.click && L(e, "input") && Q.get(e, "click") || L(e, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
          }
        }
      }
    }, T.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }, T.Event = function (t, e) {
      if (!(this instanceof T.Event)) return new T.Event(t, e);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? kt : At, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0;
    }, T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: At,
      isPropagationStopped: At,
      isImmediatePropagationStopped: At,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var t = this.originalEvent;
        this.isDefaultPrevented = kt, t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var t = this.originalEvent;
        this.isPropagationStopped = kt, t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = kt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
      }
    }, T.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function which(t) {
        var e = t.button;
        return null == t.which && Et.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && $t.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
      }
    }, T.event.addProp), T.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      T.event.special[t] = {
        setup: function setup() {
          return Dt(this, t, Lt), !1;
        },
        trigger: function trigger() {
          return Dt(this, t), !0;
        },
        delegateType: e
      };
    }), T.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (t, e) {
      T.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function handle(t) {
          var n,
              i = this,
              o = t.relatedTarget,
              r = t.handleObj;
          return o && (o === i || T.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n;
        }
      };
    }), T.fn.extend({
      on: function on(t, e, n, i) {
        return Mt(this, t, e, n, i);
      },
      one: function one(t, e, n, i) {
        return Mt(this, t, e, n, i, 1);
      },
      off: function off(t, e, n) {
        var i, o;
        if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

        if ("object" == _typeof(t)) {
          for (o in t) {
            this.off(o, e, t[o]);
          }

          return this;
        }

        return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = At), this.each(function () {
          T.event.remove(this, t, n, e);
        });
      }
    });
    var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        jt = /<script|<style|<link/i,
        Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
        It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ot(t, e) {
      return L(t, "table") && L(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t;
    }

    function qt(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }

    function Rt(t) {
      return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
    }

    function Ft(t, e) {
      var n, i, o, r, a, s, l, c;

      if (1 === e.nodeType) {
        if (Q.hasData(t) && (r = Q.access(t), a = Q.set(e, r), c = r.events)) for (o in delete a.handle, a.events = {}, c) {
          for (n = 0, i = c[o].length; n < i; n++) {
            T.event.add(e, o, c[o][n]);
          }
        }
        J.hasData(t) && (s = J.access(t), l = T.extend({}, s), J.set(e, l));
      }
    }

    function Bt(t, e) {
      var n = e.nodeName.toLowerCase();
      "input" === n && gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
    }

    function zt(t, e, n, i) {
      e = c.apply([], e);
      var o,
          r,
          a,
          s,
          l,
          u,
          f = 0,
          d = t.length,
          p = d - 1,
          h = e[0],
          g = y(h);
      if (g || d > 1 && "string" == typeof h && !v.checkClone && Ht.test(h)) return t.each(function (o) {
        var r = t.eq(o);
        g && (e[0] = h.call(this, o, r.html())), zt(r, e, n, i);
      });

      if (d && (r = (o = St(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
        for (s = (a = T.map(bt(o, "script"), qt)).length; f < d; f++) {
          l = o, f !== p && (l = T.clone(l, !0, !0), s && T.merge(a, bt(l, "script"))), n.call(t[f], l, f);
        }

        if (s) for (u = a[a.length - 1].ownerDocument, T.map(a, Rt), f = 0; f < s; f++) {
          l = a[f], vt.test(l.type || "") && !Q.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
            nonce: l.nonce || l.getAttribute("nonce")
          }) : w(l.textContent.replace(It, ""), l, u));
        }
      }

      return t;
    }

    function Wt(t, e, n) {
      for (var i, o = e ? T.filter(e, t) : t, r = 0; null != (i = o[r]); r++) {
        n || 1 !== i.nodeType || T.cleanData(bt(i)), i.parentNode && (n && st(i) && xt(bt(i, "script")), i.parentNode.removeChild(i));
      }

      return t;
    }

    T.extend({
      htmlPrefilter: function htmlPrefilter(t) {
        return t.replace(Nt, "<$1></$2>");
      },
      clone: function clone(t, e, n) {
        var i,
            o,
            r,
            a,
            s = t.cloneNode(!0),
            l = st(t);
        if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t))) for (a = bt(s), i = 0, o = (r = bt(t)).length; i < o; i++) {
          Bt(r[i], a[i]);
        }
        if (e) if (n) for (r = r || bt(t), a = a || bt(s), i = 0, o = r.length; i < o; i++) {
          Ft(r[i], a[i]);
        } else Ft(t, s);
        return (a = bt(s, "script")).length > 0 && xt(a, !l && bt(t, "script")), s;
      },
      cleanData: function cleanData(t) {
        for (var e, n, i, o = T.event.special, r = 0; void 0 !== (n = t[r]); r++) {
          if (Z(n)) {
            if (e = n[Q.expando]) {
              if (e.events) for (i in e.events) {
                o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
              }
              n[Q.expando] = void 0;
            }

            n[J.expando] && (n[J.expando] = void 0);
          }
        }
      }
    }), T.fn.extend({
      detach: function detach(t) {
        return Wt(this, t, !0);
      },
      remove: function remove(t) {
        return Wt(this, t);
      },
      text: function text(t) {
        return X(this, function (t) {
          return void 0 === t ? T.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
          });
        }, null, t, arguments.length);
      },
      append: function append() {
        return zt(this, arguments, function (t) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t);
        });
      },
      prepend: function prepend() {
        return zt(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = Ot(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function before() {
        return zt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function after() {
        return zt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var t, e = 0; null != (t = this[e]); e++) {
          1 === t.nodeType && (T.cleanData(bt(t, !1)), t.textContent = "");
        }

        return this;
      },
      clone: function clone(t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function () {
          return T.clone(this, t, e);
        });
      },
      html: function html(t) {
        return X(this, function (t) {
          var e = this[0] || {},
              n = 0,
              i = this.length;
          if (void 0 === t && 1 === e.nodeType) return e.innerHTML;

          if ("string" == typeof t && !jt.test(t) && !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = T.htmlPrefilter(t);

            try {
              for (; n < i; n++) {
                1 === (e = this[n] || {}).nodeType && (T.cleanData(bt(e, !1)), e.innerHTML = t);
              }

              e = 0;
            } catch (t) {}
          }

          e && this.empty().append(t);
        }, null, t, arguments.length);
      },
      replaceWith: function replaceWith() {
        var t = [];
        return zt(this, arguments, function (e) {
          var n = this.parentNode;
          T.inArray(this, t) < 0 && (T.cleanData(bt(this)), n && n.replaceChild(e, this));
        }, t);
      }
    }), T.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (t, e) {
      T.fn[t] = function (t) {
        for (var n, i = [], o = T(t), r = o.length - 1, a = 0; a <= r; a++) {
          n = a === r ? this : this.clone(!0), T(o[a])[e](n), u.apply(i, n.get());
        }

        return this.pushStack(i);
      };
    });

    var _t = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
        Xt = function Xt(t) {
      var e = t.ownerDocument.defaultView;
      return e && e.opener || (e = n), e.getComputedStyle(t);
    },
        Yt = new RegExp(rt.join("|"), "i");

    function Vt(t, e, n) {
      var i,
          o,
          r,
          a,
          s = t.style;
      return (n = n || Xt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || st(t) || (a = T.style(t, e)), !v.pixelBoxStyles() && _t.test(a) && Yt.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a;
    }

    function Ut(t, e) {
      return {
        get: function get() {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function t() {
        if (u) {
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", at.appendChild(c).appendChild(u);
          var t = n.getComputedStyle(u);
          i = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", s = 36 === e(t.right), o = 36 === e(t.width), u.style.position = "absolute", r = 12 === e(u.offsetWidth / 3), at.removeChild(c), u = null;
        }
      }

      function e(t) {
        return Math.round(parseFloat(t));
      }

      var i,
          o,
          r,
          s,
          l,
          c = a.createElement("div"),
          u = a.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(v, {
        boxSizingReliable: function boxSizingReliable() {
          return t(), o;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return t(), s;
        },
        pixelPosition: function pixelPosition() {
          return t(), i;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return t(), l;
        },
        scrollboxSize: function scrollboxSize() {
          return t(), r;
        }
      }));
    }();
    var Gt = ["Webkit", "Moz", "ms"],
        Zt = a.createElement("div").style,
        Kt = {};

    function Qt(t) {
      var e = T.cssProps[t] || Kt[t];
      return e || (t in Zt ? t : Kt[t] = function (t) {
        for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--;) {
          if ((t = Gt[n] + e) in Zt) return t;
        }
      }(t) || t);
    }

    var Jt = /^(none|table(?!-c[ea]).+)/,
        te = /^--/,
        ee = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        ne = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function ie(t, e, n) {
      var i = ot.exec(e);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }

    function oe(t, e, n, i, o, r) {
      var a = "width" === e ? 1 : 0,
          s = 0,
          l = 0;
      if (n === (i ? "border" : "content")) return 0;

      for (; a < 4; a += 2) {
        "margin" === n && (l += T.css(t, n + rt[a], !0, o)), i ? ("content" === n && (l -= T.css(t, "padding" + rt[a], !0, o)), "margin" !== n && (l -= T.css(t, "border" + rt[a] + "Width", !0, o))) : (l += T.css(t, "padding" + rt[a], !0, o), "padding" !== n ? l += T.css(t, "border" + rt[a] + "Width", !0, o) : s += T.css(t, "border" + rt[a] + "Width", !0, o));
      }

      return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - s - .5)) || 0), l;
    }

    function re(t, e, n) {
      var i = Xt(t),
          o = (!v.boxSizingReliable() || n) && "border-box" === T.css(t, "boxSizing", !1, i),
          r = o,
          a = Vt(t, e, i),
          s = "offset" + e[0].toUpperCase() + e.slice(1);

      if (_t.test(a)) {
        if (!n) return a;
        a = "auto";
      }

      return (!v.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === T.css(t, "display", !1, i)) && t.getClientRects().length && (o = "border-box" === T.css(t, "boxSizing", !1, i), (r = s in t) && (a = t[s])), (a = parseFloat(a) || 0) + oe(t, e, n || (o ? "border" : "content"), r, i, a) + "px";
    }

    function ae(t, e, n, i, o) {
      return new ae.prototype.init(t, e, n, i, o);
    }

    T.extend({
      cssHooks: {
        opacity: {
          get: function get(t, e) {
            if (e) {
              var n = Vt(t, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o,
              r,
              a,
              s = G(e),
              l = te.test(e),
              c = t.style;
          if (l || (e = Qt(s)), a = T.cssHooks[e] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : c[e];
          "string" === (r = _typeof(n)) && (o = ot.exec(n)) && o[1] && (n = ft(t, e, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (T.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n));
        }
      },
      css: function css(t, e, n, i) {
        var o,
            r,
            a,
            s = G(e);
        return te.test(e) || (e = Qt(s)), (a = T.cssHooks[e] || T.cssHooks[s]) && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = Vt(t, e, i)), "normal" === o && e in ne && (o = ne[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
      }
    }), T.each(["height", "width"], function (t, e) {
      T.cssHooks[e] = {
        get: function get(t, n, i) {
          if (n) return !Jt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? re(t, e, i) : ut(t, ee, function () {
            return re(t, e, i);
          });
        },
        set: function set(t, n, i) {
          var o,
              r = Xt(t),
              a = !v.scrollboxSize() && "absolute" === r.position,
              s = (a || i) && "border-box" === T.css(t, "boxSizing", !1, r),
              l = i ? oe(t, e, i, s, r) : 0;
          return s && a && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - oe(t, e, "border", !1, r) - .5)), l && (o = ot.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = T.css(t, e)), ie(0, n, l);
        }
      };
    }), T.cssHooks.marginLeft = Ut(v.reliableMarginLeft, function (t, e) {
      if (e) return (parseFloat(Vt(t, "marginLeft")) || t.getBoundingClientRect().left - ut(t, {
        marginLeft: 0
      }, function () {
        return t.getBoundingClientRect().left;
      })) + "px";
    }), T.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (t, e) {
      T.cssHooks[t + e] = {
        expand: function expand(n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
            o[t + rt[i] + e] = r[i] || r[i - 2] || r[0];
          }

          return o;
        }
      }, "margin" !== t && (T.cssHooks[t + e].set = ie);
    }), T.fn.extend({
      css: function css(t, e) {
        return X(this, function (t, e, n) {
          var i,
              o,
              r = {},
              a = 0;

          if (Array.isArray(e)) {
            for (i = Xt(t), o = e.length; a < o; a++) {
              r[e[a]] = T.css(t, e[a], !1, i);
            }

            return r;
          }

          return void 0 !== n ? T.style(t, e, n) : T.css(t, e);
        }, t, e, arguments.length > 1);
      }
    }), T.Tween = ae, ae.prototype = {
      constructor: ae,
      init: function init(t, e, n, i, o, r) {
        this.elem = t, this.prop = n, this.easing = o || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (T.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var t = ae.propHooks[this.prop];
        return t && t.get ? t.get(this) : ae.propHooks._default.get(this);
      },
      run: function run(t) {
        var e,
            n = ae.propHooks[this.prop];
        return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ae.propHooks._default.set(this), this;
      }
    }, ae.prototype.init.prototype = ae.prototype, ae.propHooks = {
      _default: {
        get: function get(t) {
          var e;
          return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
        },
        set: function set(t) {
          T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !T.cssHooks[t.prop] && null == t.elem.style[Qt(t.prop)] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit);
        }
      }
    }, ae.propHooks.scrollTop = ae.propHooks.scrollLeft = {
      set: function set(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      }
    }, T.easing = {
      linear: function linear(t) {
        return t;
      },
      swing: function swing(t) {
        return .5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing"
    }, T.fx = ae.prototype.init, T.fx.step = {};
    var se,
        le,
        ce = /^(?:toggle|show|hide)$/,
        ue = /queueHooks$/;

    function fe() {
      le && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(fe) : n.setTimeout(fe, T.fx.interval), T.fx.tick());
    }

    function de() {
      return n.setTimeout(function () {
        se = void 0;
      }), se = Date.now();
    }

    function pe(t, e) {
      var n,
          i = 0,
          o = {
        height: t
      };

      for (e = e ? 1 : 0; i < 4; i += 2 - e) {
        o["margin" + (n = rt[i])] = o["padding" + n] = t;
      }

      return e && (o.opacity = o.width = t), o;
    }

    function he(t, e, n) {
      for (var i, o = (ge.tweeners[e] || []).concat(ge.tweeners["*"]), r = 0, a = o.length; r < a; r++) {
        if (i = o[r].call(n, e, t)) return i;
      }
    }

    function ge(t, e, n) {
      var i,
          o,
          r = 0,
          a = ge.prefilters.length,
          s = T.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (o) return !1;

        for (var e = se || de(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) {
          c.tweens[r].run(i);
        }

        return s.notifyWith(t, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1);
      },
          c = s.promise({
        elem: t,
        props: T.extend({}, e),
        opts: T.extend(!0, {
          specialEasing: {},
          easing: T.easing._default
        }, n),
        originalProperties: e,
        originalOptions: n,
        startTime: se || de(),
        duration: n.duration,
        tweens: [],
        createTween: function createTween(e, n) {
          var i = T.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
          return c.tweens.push(i), i;
        },
        stop: function stop(e) {
          var n = 0,
              i = e ? c.tweens.length : 0;
          if (o) return this;

          for (o = !0; n < i; n++) {
            c.tweens[n].run(1);
          }

          return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this;
        }
      }),
          u = c.props;

      for (!function (t, e) {
        var n, i, o, r, a;

        for (n in t) {
          if (o = e[i = G(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = T.cssHooks[i]) && ("expand" in a)) for (n in r = a.expand(r), delete t[i], r) {
            (n in t) || (t[n] = r[n], e[n] = o);
          } else e[i] = o;
        }
      }(u, c.opts.specialEasing); r < a; r++) {
        if (i = ge.prefilters[r].call(c, t, u, c.opts)) return y(i.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
      }

      return T.map(u, he, c), y(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
        elem: t,
        anim: c,
        queue: c.opts.queue
      })), c;
    }

    T.Animation = T.extend(ge, {
      tweeners: {
        "*": [function (t, e) {
          var n = this.createTween(t, e);
          return ft(n.elem, t, ot.exec(e), n), n;
        }]
      },
      tweener: function tweener(t, e) {
        y(t) ? (e = t, t = ["*"]) : t = t.match(q);

        for (var n, i = 0, o = t.length; i < o; i++) {
          n = t[i], ge.tweeners[n] = ge.tweeners[n] || [], ge.tweeners[n].unshift(e);
        }
      },
      prefilters: [function (t, e, n) {
        var i,
            o,
            r,
            a,
            s,
            l,
            c,
            u,
            f = "width" in e || "height" in e,
            d = this,
            p = {},
            h = t.style,
            g = t.nodeType && ct(t),
            m = Q.get(t, "fxshow");

        for (i in n.queue || (null == (a = T._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s();
        }), a.unqueued++, d.always(function () {
          d.always(function () {
            a.unqueued--, T.queue(t, "fx").length || a.empty.fire();
          });
        })), e) {
          if (o = e[i], ce.test(o)) {
            if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
              if ("show" !== o || !m || void 0 === m[i]) continue;
              g = !0;
            }

            p[i] = m && m[i] || T.style(t, i);
          }
        }

        if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(p)) for (i in f && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Q.get(t, "display")), "none" === (u = T.css(t, "display")) && (c ? u = c : (ht([t], !0), c = t.style.display || c, u = T.css(t, "display"), ht([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(t, "float") && (l || (d.done(function () {
          h.display = c;
        }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), l = !1, p) {
          l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(t, "fxshow", {
            display: c
          }), r && (m.hidden = !g), g && ht([t], !0), d.done(function () {
            for (i in g || ht([t]), Q.remove(t, "fxshow"), p) {
              T.style(t, i, p[i]);
            }
          })), l = he(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(t, e) {
        e ? ge.prefilters.unshift(t) : ge.prefilters.push(t);
      }
    }), T.speed = function (t, e, n) {
      var i = t && "object" == _typeof(t) ? T.extend({}, t) : {
        complete: n || !n && e || y(t) && t,
        duration: t,
        easing: n && e || e && !y(e) && e
      };
      return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
      }, i;
    }, T.fn.extend({
      fadeTo: function fadeTo(t, e, n, i) {
        return this.filter(ct).css("opacity", 0).show().end().animate({
          opacity: e
        }, t, n, i);
      },
      animate: function animate(t, e, n, i) {
        var o = T.isEmptyObject(t),
            r = T.speed(e, n, i),
            a = function a() {
          var e = ge(this, T.extend({}, t), r);
          (o || Q.get(this, "finish")) && e.stop(!0);
        };

        return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a);
      },
      stop: function stop(t, e, n) {
        var i = function i(t) {
          var e = t.stop;
          delete t.stop, e(n);
        };

        return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
          var e = !0,
              o = null != t && t + "queueHooks",
              r = T.timers,
              a = Q.get(this);
          if (o) a[o] && a[o].stop && i(a[o]);else for (o in a) {
            a[o] && a[o].stop && ue.test(o) && i(a[o]);
          }

          for (o = r.length; o--;) {
            r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
          }

          !e && n || T.dequeue(this, t);
        });
      },
      finish: function finish(t) {
        return !1 !== t && (t = t || "fx"), this.each(function () {
          var e,
              n = Q.get(this),
              i = n[t + "queue"],
              o = n[t + "queueHooks"],
              r = T.timers,
              a = i ? i.length : 0;

          for (n.finish = !0, T.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) {
            r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
          }

          for (e = 0; e < a; e++) {
            i[e] && i[e].finish && i[e].finish.call(this);
          }

          delete n.finish;
        });
      }
    }), T.each(["toggle", "show", "hide"], function (t, e) {
      var n = T.fn[e];

      T.fn[e] = function (t, i, o) {
        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(pe(e, !0), t, i, o);
      };
    }), T.each({
      slideDown: pe("show"),
      slideUp: pe("hide"),
      slideToggle: pe("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (t, e) {
      T.fn[t] = function (t, n, i) {
        return this.animate(e, t, n, i);
      };
    }), T.timers = [], T.fx.tick = function () {
      var t,
          e = 0,
          n = T.timers;

      for (se = Date.now(); e < n.length; e++) {
        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      }

      n.length || T.fx.stop(), se = void 0;
    }, T.fx.timer = function (t) {
      T.timers.push(t), T.fx.start();
    }, T.fx.interval = 13, T.fx.start = function () {
      le || (le = !0, fe());
    }, T.fx.stop = function () {
      le = null;
    }, T.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, T.fn.delay = function (t, e) {
      return t = T.fx && T.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, i) {
        var o = n.setTimeout(e, t);

        i.stop = function () {
          n.clearTimeout(o);
        };
      });
    }, function () {
      var t = a.createElement("input"),
          e = a.createElement("select").appendChild(a.createElement("option"));
      t.type = "checkbox", v.checkOn = "" !== t.value, v.optSelected = e.selected, (t = a.createElement("input")).value = "t", t.type = "radio", v.radioValue = "t" === t.value;
    }();
    var me,
        ve = T.expr.attrHandle;
    T.fn.extend({
      attr: function attr(t, e) {
        return X(this, T.attr, t, e, arguments.length > 1);
      },
      removeAttr: function removeAttr(t) {
        return this.each(function () {
          T.removeAttr(this, t);
        });
      }
    }), T.extend({
      attr: function attr(t, e, n) {
        var i,
            o,
            r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === r && T.isXMLDoc(t) || (o = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? me : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i);
      },
      attrHooks: {
        type: {
          set: function set(t, e) {
            if (!v.radioValue && "radio" === e && L(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          }
        }
      },
      removeAttr: function removeAttr(t, e) {
        var n,
            i = 0,
            o = e && e.match(q);
        if (o && 1 === t.nodeType) for (; n = o[i++];) {
          t.removeAttribute(n);
        }
      }
    }), me = {
      set: function set(t, e, n) {
        return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n;
      }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = ve[e] || T.find.attr;

      ve[e] = function (t, e, i) {
        var o,
            r,
            a = e.toLowerCase();
        return i || (r = ve[a], ve[a] = o, o = null != n(t, e, i) ? a : null, ve[a] = r), o;
      };
    });
    var ye = /^(?:input|select|textarea|button)$/i,
        be = /^(?:a|area)$/i;

    function xe(t) {
      return (t.match(q) || []).join(" ");
    }

    function we(t) {
      return t.getAttribute && t.getAttribute("class") || "";
    }

    function Ce(t) {
      return Array.isArray(t) ? t : "string" == typeof t && t.match(q) || [];
    }

    T.fn.extend({
      prop: function prop(t, e) {
        return X(this, T.prop, t, e, arguments.length > 1);
      },
      removeProp: function removeProp(t) {
        return this.each(function () {
          delete this[T.propFix[t] || t];
        });
      }
    }), T.extend({
      prop: function prop(t, e, n) {
        var i,
            o,
            r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && T.isXMLDoc(t) || (e = T.propFix[e] || e, o = T.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
      },
      propHooks: {
        tabIndex: {
          get: function get(t) {
            var e = T.find.attr(t, "tabindex");
            return e ? parseInt(e, 10) : ye.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), v.optSelected || (T.propHooks.selected = {
      get: function get(t) {
        var e = t.parentNode;
        return e && e.parentNode && e.parentNode.selectedIndex, null;
      },
      set: function set(t) {
        var e = t.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
      }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      T.propFix[this.toLowerCase()] = this;
    }), T.fn.extend({
      addClass: function addClass(t) {
        var e,
            n,
            i,
            o,
            r,
            a,
            s,
            l = 0;
        if (y(t)) return this.each(function (e) {
          T(this).addClass(t.call(this, e, we(this)));
        });
        if ((e = Ce(t)).length) for (; n = this[l++];) {
          if (o = we(n), i = 1 === n.nodeType && " " + xe(o) + " ") {
            for (a = 0; r = e[a++];) {
              i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            }

            o !== (s = xe(i)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      removeClass: function removeClass(t) {
        var e,
            n,
            i,
            o,
            r,
            a,
            s,
            l = 0;
        if (y(t)) return this.each(function (e) {
          T(this).removeClass(t.call(this, e, we(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((e = Ce(t)).length) for (; n = this[l++];) {
          if (o = we(n), i = 1 === n.nodeType && " " + xe(o) + " ") {
            for (a = 0; r = e[a++];) {
              for (; i.indexOf(" " + r + " ") > -1;) {
                i = i.replace(" " + r + " ", " ");
              }
            }

            o !== (s = xe(i)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(t, e) {
        var n = _typeof(t),
            i = "string" === n || Array.isArray(t);

        return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each(function (n) {
          T(this).toggleClass(t.call(this, n, we(this), e), e);
        }) : this.each(function () {
          var e, o, r, a;
          if (i) for (o = 0, r = T(this), a = Ce(t); e = a[o++];) {
            r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
          } else void 0 !== t && "boolean" !== n || ((e = we(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(t) {
        var e,
            n,
            i = 0;

        for (e = " " + t + " "; n = this[i++];) {
          if (1 === n.nodeType && (" " + xe(we(n)) + " ").indexOf(e) > -1) return !0;
        }

        return !1;
      }
    });
    var Te = /\r/g;
    T.fn.extend({
      val: function val(t) {
        var e,
            n,
            i,
            o = this[0];
        return arguments.length ? (i = y(t), this.each(function (n) {
          var o;
          1 === this.nodeType && (null == (o = i ? t.call(this, n, T(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, function (t) {
            return null == t ? "" : t + "";
          })), (e = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o));
        })) : o ? (e = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Te, "") : null == n ? "" : n : void 0;
      }
    }), T.extend({
      valHooks: {
        option: {
          get: function get(t) {
            var e = T.find.attr(t, "value");
            return null != e ? e : xe(T.text(t));
          }
        },
        select: {
          get: function get(t) {
            var e,
                n,
                i,
                o = t.options,
                r = t.selectedIndex,
                a = "select-one" === t.type,
                s = a ? null : [],
                l = a ? r + 1 : o.length;

            for (i = r < 0 ? l : a ? r : 0; i < l; i++) {
              if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                if (e = T(n).val(), a) return e;
                s.push(e);
              }
            }

            return s;
          },
          set: function set(t, e) {
            for (var n, i, o = t.options, r = T.makeArray(e), a = o.length; a--;) {
              ((i = o[a]).selected = T.inArray(T.valHooks.option.get(i), r) > -1) && (n = !0);
            }

            return n || (t.selectedIndex = -1), r;
          }
        }
      }
    }), T.each(["radio", "checkbox"], function () {
      T.valHooks[this] = {
        set: function set(t, e) {
          if (Array.isArray(e)) return t.checked = T.inArray(T(t).val(), e) > -1;
        }
      }, v.checkOn || (T.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value;
      });
    }), v.focusin = "onfocusin" in n;

    var Se = /^(?:focusinfocus|focusoutblur)$/,
        Ee = function Ee(t) {
      t.stopPropagation();
    };

    T.extend(T.event, {
      trigger: function trigger(t, e, i, o) {
        var r,
            s,
            l,
            c,
            u,
            f,
            d,
            p,
            g = [i || a],
            m = h.call(t, "type") ? t.type : t,
            v = h.call(t, "namespace") ? t.namespace.split(".") : [];

        if (s = p = l = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !Se.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), u = m.indexOf(":") < 0 && "on" + m, (t = t[T.expando] ? t : new T.Event(m, "object" == _typeof(t) && t)).isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : T.makeArray(e, [t]), d = T.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, e))) {
          if (!o && !d.noBubble && !b(i)) {
            for (c = d.delegateType || m, Se.test(c + m) || (s = s.parentNode); s; s = s.parentNode) {
              g.push(s), l = s;
            }

            l === (i.ownerDocument || a) && g.push(l.defaultView || l.parentWindow || n);
          }

          for (r = 0; (s = g[r++]) && !t.isPropagationStopped();) {
            p = s, t.type = r > 1 ? c : d.bindType || m, (f = (Q.get(s, "events") || {})[t.type] && Q.get(s, "handle")) && f.apply(s, e), (f = u && s[u]) && f.apply && Z(s) && (t.result = f.apply(s, e), !1 === t.result && t.preventDefault());
          }

          return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), e) || !Z(i) || u && y(i[m]) && !b(i) && ((l = i[u]) && (i[u] = null), T.event.triggered = m, t.isPropagationStopped() && p.addEventListener(m, Ee), i[m](), t.isPropagationStopped() && p.removeEventListener(m, Ee), T.event.triggered = void 0, l && (i[u] = l)), t.result;
        }
      },
      simulate: function simulate(t, e, n) {
        var i = T.extend(new T.Event(), n, {
          type: t,
          isSimulated: !0
        });
        T.event.trigger(i, null, e);
      }
    }), T.fn.extend({
      trigger: function trigger(t, e) {
        return this.each(function () {
          T.event.trigger(t, e, this);
        });
      },
      triggerHandler: function triggerHandler(t, e) {
        var n = this[0];
        if (n) return T.event.trigger(t, e, n, !0);
      }
    }), v.focusin || T.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      var n = function n(t) {
        T.event.simulate(e, t.target, T.event.fix(t));
      };

      T.event.special[e] = {
        setup: function setup() {
          var i = this.ownerDocument || this,
              o = Q.access(i, e);
          o || i.addEventListener(t, n, !0), Q.access(i, e, (o || 0) + 1);
        },
        teardown: function teardown() {
          var i = this.ownerDocument || this,
              o = Q.access(i, e) - 1;
          o ? Q.access(i, e, o) : (i.removeEventListener(t, n, !0), Q.remove(i, e));
        }
      };
    });
    var $e = n.location,
        Pe = Date.now(),
        ke = /\?/;

    T.parseXML = function (t) {
      var e;
      if (!t || "string" != typeof t) return null;

      try {
        e = new n.DOMParser().parseFromString(t, "text/xml");
      } catch (t) {
        e = void 0;
      }

      return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e;
    };

    var Ae = /\[\]$/,
        Le = /\r?\n/g,
        Me = /^(?:submit|button|image|reset|file)$/i,
        De = /^(?:input|select|textarea|keygen)/i;

    function Ne(t, e, n, i) {
      var o;
      if (Array.isArray(e)) T.each(e, function (e, o) {
        n || Ae.test(t) ? i(t, o) : Ne(t + "[" + ("object" == _typeof(o) && null != o ? e : "") + "]", o, n, i);
      });else if (n || "object" !== C(e)) i(t, e);else for (o in e) {
        Ne(t + "[" + o + "]", e[o], n, i);
      }
    }

    T.param = function (t, e) {
      var n,
          i = [],
          o = function o(t, e) {
        var n = y(e) ? e() : e;
        i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == t) return "";
      if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function () {
        o(this.name, this.value);
      });else for (n in t) {
        Ne(n, t[n], e, o);
      }
      return i.join("&");
    }, T.fn.extend({
      serialize: function serialize() {
        return T.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var t = T.prop(this, "elements");
          return t ? T.makeArray(t) : this;
        }).filter(function () {
          var t = this.type;
          return this.name && !T(this).is(":disabled") && De.test(this.nodeName) && !Me.test(t) && (this.checked || !gt.test(t));
        }).map(function (t, e) {
          var n = T(this).val();
          return null == n ? null : Array.isArray(n) ? T.map(n, function (t) {
            return {
              name: e.name,
              value: t.replace(Le, "\r\n")
            };
          }) : {
            name: e.name,
            value: n.replace(Le, "\r\n")
          };
        }).get();
      }
    });
    var je = /%20/g,
        He = /#.*$/,
        Ie = /([?&])_=[^&]*/,
        Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qe = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        Fe = {},
        Be = {},
        ze = "*/".concat("*"),
        We = a.createElement("a");

    function _e(t) {
      return function (e, n) {
        "string" != typeof e && (n = e, e = "*");
        var i,
            o = 0,
            r = e.toLowerCase().match(q) || [];
        if (y(n)) for (; i = r[o++];) {
          "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        }
      };
    }

    function Xe(t, e, n, i) {
      var o = {},
          r = t === Be;

      function a(s) {
        var l;
        return o[s] = !0, T.each(t[s] || [], function (t, s) {
          var c = s(e, n, i);
          return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), a(c), !1);
        }), l;
      }

      return a(e.dataTypes[0]) || !o["*"] && a("*");
    }

    function Ye(t, e) {
      var n,
          i,
          o = T.ajaxSettings.flatOptions || {};

      for (n in e) {
        void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
      }

      return i && T.extend(!0, t, i), t;
    }

    We.href = $e.href, T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: $e.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test($e.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ze,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(t, e) {
        return e ? Ye(Ye(t, T.ajaxSettings), e) : Ye(T.ajaxSettings, t);
      },
      ajaxPrefilter: _e(Fe),
      ajaxTransport: _e(Be),
      ajax: function ajax(t, e) {
        "object" == _typeof(t) && (e = t, t = void 0), e = e || {};
        var i,
            o,
            r,
            s,
            l,
            c,
            u,
            f,
            d,
            p,
            h = T.ajaxSetup({}, e),
            g = h.context || h,
            m = h.context && (g.nodeType || g.jquery) ? T(g) : T.event,
            v = T.Deferred(),
            y = T.Callbacks("once memory"),
            b = h.statusCode || {},
            x = {},
            w = {},
            C = "canceled",
            S = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(t) {
            var e;

            if (u) {
              if (!s) for (s = {}; e = Oe.exec(r);) {
                s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
              }
              e = s[t.toLowerCase() + " "];
            }

            return null == e ? null : e.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return u ? r : null;
          },
          setRequestHeader: function setRequestHeader(t, e) {
            return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this;
          },
          overrideMimeType: function overrideMimeType(t) {
            return null == u && (h.mimeType = t), this;
          },
          statusCode: function statusCode(t) {
            var e;
            if (t) if (u) S.always(t[S.status]);else for (e in t) {
              b[e] = [b[e], t[e]];
            }
            return this;
          },
          abort: function abort(t) {
            var e = t || C;
            return i && i.abort(e), E(0, e), this;
          }
        };

        if (v.promise(S), h.url = ((t || h.url || $e.href) + "").replace(Re, $e.protocol + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""], null == h.crossDomain) {
          c = a.createElement("a");

          try {
            c.href = h.url, c.href = c.href, h.crossDomain = We.protocol + "//" + We.host != c.protocol + "//" + c.host;
          } catch (t) {
            h.crossDomain = !0;
          }
        }

        if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Xe(Fe, h, e, S), u) return S;

        for (d in (f = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qe.test(h.type), o = h.url.replace(He, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(je, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (ke.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ie, "$1"), p = (ke.test(o) ? "&" : "?") + "_=" + Pe++ + p), h.url = o + p), h.ifModified && (T.lastModified[o] && S.setRequestHeader("If-Modified-Since", T.lastModified[o]), T.etag[o] && S.setRequestHeader("If-None-Match", T.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || e.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
          S.setRequestHeader(d, h.headers[d]);
        }

        if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || u)) return S.abort();

        if (C = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), i = Xe(Be, h, e, S)) {
          if (S.readyState = 1, f && m.trigger("ajaxSend", [S, h]), u) return S;
          h.async && h.timeout > 0 && (l = n.setTimeout(function () {
            S.abort("timeout");
          }, h.timeout));

          try {
            u = !1, i.send(x, E);
          } catch (t) {
            if (u) throw t;
            E(-1, t);
          }
        } else E(-1, "No Transport");

        function E(t, e, a, s) {
          var c,
              d,
              p,
              x,
              w,
              C = e;
          u || (u = !0, l && n.clearTimeout(l), i = void 0, r = s || "", S.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, a && (x = function (t, e, n) {
            for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            }

            if (i) for (o in s) {
              if (s[o] && s[o].test(i)) {
                l.unshift(o);
                break;
              }
            }
            if (l[0] in n) r = l[0];else {
              for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                  r = o;
                  break;
                }

                a || (a = o);
              }

              r = r || a;
            }
            if (r) return r !== l[0] && l.unshift(r), n[r];
          }(h, S, a)), x = function (t, e, n, i) {
            var o,
                r,
                a,
                s,
                l,
                c = {},
                u = t.dataTypes.slice();
            if (u[1]) for (a in t.converters) {
              c[a.toLowerCase()] = t.converters[a];
            }

            for (r = u.shift(); r;) {
              if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
                if (!(a = c[l + " " + r] || c["* " + r])) for (o in c) {
                  if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                    !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                    break;
                  }
                }
                if (!0 !== a) if (a && t["throws"]) e = a(e);else try {
                  e = a(e);
                } catch (t) {
                  return {
                    state: "parsererror",
                    error: a ? t : "No conversion from " + l + " to " + r
                  };
                }
              }
            }

            return {
              state: "success",
              data: e
            };
          }(h, x, S, c), c ? (h.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (T.lastModified[o] = w), (w = S.getResponseHeader("etag")) && (T.etag[o] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, d = x.data, c = !(p = x.error))) : (p = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (e || C) + "", c ? v.resolveWith(g, [d, C, S]) : v.rejectWith(g, [S, C, p]), S.statusCode(b), b = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? d : p]), y.fireWith(g, [S, C]), f && (m.trigger("ajaxComplete", [S, h]), --T.active || T.event.trigger("ajaxStop")));
        }

        return S;
      },
      getJSON: function getJSON(t, e, n) {
        return T.get(t, e, n, "json");
      },
      getScript: function getScript(t, e) {
        return T.get(t, void 0, e, "script");
      }
    }), T.each(["get", "post"], function (t, e) {
      T[e] = function (t, n, i, o) {
        return y(n) && (o = o || i, i = n, n = void 0), T.ajax(T.extend({
          url: t,
          type: e,
          dataType: o,
          data: n,
          success: i
        }, T.isPlainObject(t) && t));
      };
    }), T._evalUrl = function (t, e) {
      return T.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(t) {
          T.globalEval(t, e);
        }
      });
    }, T.fn.extend({
      wrapAll: function wrapAll(t) {
        var e;
        return this[0] && (y(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
          for (var t = this; t.firstElementChild;) {
            t = t.firstElementChild;
          }

          return t;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(t) {
        return y(t) ? this.each(function (e) {
          T(this).wrapInner(t.call(this, e));
        }) : this.each(function () {
          var e = T(this),
              n = e.contents();
          n.length ? n.wrapAll(t) : e.append(t);
        });
      },
      wrap: function wrap(t) {
        var e = y(t);
        return this.each(function (n) {
          T(this).wrapAll(e ? t.call(this, n) : t);
        });
      },
      unwrap: function unwrap(t) {
        return this.parent(t).not("body").each(function () {
          T(this).replaceWith(this.childNodes);
        }), this;
      }
    }), T.expr.pseudos.hidden = function (t) {
      return !T.expr.pseudos.visible(t);
    }, T.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }, T.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (t) {}
    };
    var Ve = {
      0: 200,
      1223: 204
    },
        Ue = T.ajaxSettings.xhr();
    v.cors = !!Ue && "withCredentials" in Ue, v.ajax = Ue = !!Ue, T.ajaxTransport(function (t) {
      var _e3, i;

      if (v.cors || Ue && !t.crossDomain) return {
        send: function send(o, r) {
          var a,
              s = t.xhr();
          if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
            s[a] = t.xhrFields[a];
          }

          for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
            s.setRequestHeader(a, o[a]);
          }

          _e3 = function e(t) {
            return function () {
              _e3 && (_e3 = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ve[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders()));
            };
          }, s.onload = _e3(), i = s.onerror = s.ontimeout = _e3("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
            4 === s.readyState && n.setTimeout(function () {
              _e3 && i();
            });
          }, _e3 = _e3("abort");

          try {
            s.send(t.hasContent && t.data || null);
          } catch (t) {
            if (_e3) throw t;
          }
        },
        abort: function abort() {
          _e3 && _e3();
        }
      };
    }), T.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }), T.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(t) {
          return T.globalEval(t), t;
        }
      }
    }), T.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), T.ajaxTransport("script", function (t) {
      var e, _n3;

      if (t.crossDomain || t.scriptAttrs) return {
        send: function send(i, o) {
          e = T("<script>").attr(t.scriptAttrs || {}).prop({
            charset: t.scriptCharset,
            src: t.url
          }).on("load error", _n3 = function n(t) {
            e.remove(), _n3 = null, t && o("error" === t.type ? 404 : 200, t.type);
          }), a.head.appendChild(e[0]);
        },
        abort: function abort() {
          _n3 && _n3();
        }
      };
    });
    var Ge,
        Ze = [],
        Ke = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var t = Ze.pop() || T.expando + "_" + Pe++;
        return this[t] = !0, t;
      }
    }), T.ajaxPrefilter("json jsonp", function (t, e, i) {
      var o,
          r,
          a,
          s = !1 !== t.jsonp && (Ke.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(t.data) && "data");
      if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ke, "$1" + o) : !1 !== t.jsonp && (t.url += (ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
        return a || T.error(o + " was not called"), a[0];
      }, t.dataTypes[0] = "json", r = n[o], n[o] = function () {
        a = arguments;
      }, i.always(function () {
        void 0 === r ? T(n).removeProp(o) : n[o] = r, t[o] && (t.jsonpCallback = e.jsonpCallback, Ze.push(o)), a && y(r) && r(a[0]), a = r = void 0;
      }), "script";
    }), v.createHTMLDocument = ((Ge = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ge.childNodes.length), T.parseHTML = function (t, e, n) {
      return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((i = (e = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, e.head.appendChild(i)) : e = a), r = !n && [], (o = M.exec(t)) ? [e.createElement(o[1])] : (o = St([t], e, r), r && r.length && T(r).remove(), T.merge([], o.childNodes)));
      var i, o, r;
    }, T.fn.load = function (t, e, n) {
      var i,
          o,
          r,
          a = this,
          s = t.indexOf(" ");
      return s > -1 && (i = xe(t.slice(s)), t = t.slice(0, s)), y(e) ? (n = e, e = void 0) : e && "object" == _typeof(e) && (o = "POST"), a.length > 0 && T.ajax({
        url: t,
        type: o || "GET",
        dataType: "html",
        data: e
      }).done(function (t) {
        r = arguments, a.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t);
      }).always(n && function (t, e) {
        a.each(function () {
          n.apply(this, r || [t.responseText, e, t]);
        });
      }), this;
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      T.fn[e] = function (t) {
        return this.on(e, t);
      };
    }), T.expr.pseudos.animated = function (t) {
      return T.grep(T.timers, function (e) {
        return t === e.elem;
      }).length;
    }, T.offset = {
      setOffset: function setOffset(t, e, n) {
        var i,
            o,
            r,
            a,
            s,
            l,
            c = T.css(t, "position"),
            u = T(t),
            f = {};
        "static" === c && (t.style.position = "relative"), s = u.offset(), r = T.css(t, "top"), l = T.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (i = u.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), y(e) && (e = e.call(t, n, T.extend({}, s))), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + o), "using" in e ? e.using.call(t, f) : u.css(f);
      }
    }, T.fn.extend({
      offset: function offset(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          T.offset.setOffset(this, t, e);
        });
        var e,
            n,
            i = this[0];
        return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: e.top + n.pageYOffset,
          left: e.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var t,
              e,
              n,
              i = this[0],
              o = {
            top: 0,
            left: 0
          };
          if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();else {
            for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) {
              t = t.parentNode;
            }

            t && t !== i && 1 === t.nodeType && ((o = T(t).offset()).top += T.css(t, "borderTopWidth", !0), o.left += T.css(t, "borderLeftWidth", !0));
          }
          return {
            top: e.top - o.top - T.css(i, "marginTop", !0),
            left: e.left - o.left - T.css(i, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var t = this.offsetParent; t && "static" === T.css(t, "position");) {
            t = t.offsetParent;
          }

          return t || at;
        });
      }
    }), T.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (t, e) {
      var n = "pageYOffset" === e;

      T.fn[t] = function (i) {
        return X(this, function (t, i, o) {
          var r;
          if (b(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
          r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o;
        }, t, i, arguments.length);
      };
    }), T.each(["top", "left"], function (t, e) {
      T.cssHooks[e] = Ut(v.pixelPosition, function (t, n) {
        if (n) return n = Vt(t, e), _t.test(n) ? T(t).position()[e] + "px" : n;
      });
    }), T.each({
      Height: "height",
      Width: "width"
    }, function (t, e) {
      T.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
      }, function (n, i) {
        T.fn[i] = function (o, r) {
          var a = arguments.length && (n || "boolean" != typeof o),
              s = n || (!0 === o || !0 === r ? "margin" : "border");
          return X(this, function (e, n, o) {
            var r;
            return b(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? T.css(e, n, s) : T.style(e, n, o, s);
          }, e, a ? o : void 0, a);
        };
      });
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
      T.fn[e] = function (t, n) {
        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
      };
    }), T.fn.extend({
      hover: function hover(t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      }
    }), T.fn.extend({
      bind: function bind(t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function unbind(t, e) {
        return this.off(t, null, e);
      },
      delegate: function delegate(t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function undelegate(t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
      }
    }), T.proxy = function (t, e) {
      var n, i, o;
      if ("string" == typeof e && (n = t[e], e = t, t = n), y(t)) return i = l.call(arguments, 2), (o = function o() {
        return t.apply(e || this, i.concat(l.call(arguments)));
      }).guid = t.guid = t.guid || T.guid++, o;
    }, T.holdReady = function (t) {
      t ? T.readyWait++ : T.ready(!0);
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = L, T.isFunction = y, T.isWindow = b, T.camelCase = G, T.type = C, T.now = Date.now, T.isNumeric = function (t) {
      var e = T.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    }, void 0 === (i = function () {
      return T;
    }.apply(e, [])) || (t.exports = i);
    var Qe = n.jQuery,
        Je = n.$;
    return T.noConflict = function (t) {
      return n.$ === T && (n.$ = Je), t && n.jQuery === T && (n.jQuery = Qe), T;
    }, o || (n.jQuery = n.$ = T), T;
  });
}, function (t, e, n) {
  "use strict";

  n.r(e);
  n(0);

  var i = window,
      o = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.msRequestAnimationFrame || function (t) {
    return setTimeout(t, 16);
  },
      r = window,
      a = r.cancelAnimationFrame || r.mozCancelAnimationFrame || function (t) {
    clearTimeout(t);
  };

  function s() {
    for (var t, e, n, i = arguments[0] || {}, o = 1, r = arguments.length; o < r; o++) {
      if (null !== (t = arguments[o])) for (e in t) {
        i !== (n = t[e]) && void 0 !== n && (i[e] = n);
      }
    }

    return i;
  }

  function l(t) {
    return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t;
  }

  function c(t, e, n, i) {
    if (i) try {
      t.setItem(e, n);
    } catch (t) {}
    return n;
  }

  function u() {
    var t = document,
        e = t.body;
    return e || ((e = t.createElement("body")).fake = !0), e;
  }

  var f = document.documentElement;

  function d(t) {
    var e = "";
    return t.fake && (e = f.style.overflow, t.style.background = "", t.style.overflow = f.style.overflow = "hidden", f.appendChild(t)), e;
  }

  function p(t, e) {
    t.fake && (t.remove(), f.style.overflow = e, f.offsetHeight);
  }

  function h(t, e, n, i) {
    "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i);
  }

  function g(t) {
    return ("insertRule" in t ? t.cssRules : t.rules).length;
  }

  function m(t, e, n) {
    for (var i = 0, o = t.length; i < o; i++) {
      e.call(n, t[i], i);
    }
  }

  var v = "classList" in document.createElement("_"),
      y = v ? function (t, e) {
    return t.classList.contains(e);
  } : function (t, e) {
    return t.className.indexOf(e) >= 0;
  },
      b = v ? function (t, e) {
    y(t, e) || t.classList.add(e);
  } : function (t, e) {
    y(t, e) || (t.className += " " + e);
  },
      x = v ? function (t, e) {
    y(t, e) && t.classList.remove(e);
  } : function (t, e) {
    y(t, e) && (t.className = t.className.replace(e, ""));
  };

  function w(t, e) {
    return t.hasAttribute(e);
  }

  function C(t, e) {
    return t.getAttribute(e);
  }

  function T(t) {
    return void 0 !== t.item;
  }

  function S(t, e) {
    if (t = T(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e)) for (var n = t.length; n--;) {
      for (var i in e) {
        t[n].setAttribute(i, e[i]);
      }
    }
  }

  function E(t, e) {
    t = T(t) || t instanceof Array ? t : [t];

    for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;) {
      for (var o = n; o--;) {
        t[i].removeAttribute(e[o]);
      }
    }
  }

  function $(t) {
    for (var e = [], n = 0, i = t.length; n < i; n++) {
      e.push(t[n]);
    }

    return e;
  }

  function P(t, e) {
    "none" !== t.style.display && (t.style.display = "none");
  }

  function k(t, e) {
    "none" === t.style.display && (t.style.display = "");
  }

  function A(t) {
    return "none" !== window.getComputedStyle(t).display;
  }

  function L(t) {
    if ("string" == typeof t) {
      var e = [t],
          n = t.charAt(0).toUpperCase() + t.substr(1);
      ["Webkit", "Moz", "ms", "O"].forEach(function (i) {
        "ms" === i && "transform" !== t || e.push(i + n);
      }), t = e;
    }

    for (var i = document.createElement("fakeelement"), o = (t.length, 0); o < t.length; o++) {
      var r = t[o];
      if (void 0 !== i.style[r]) return r;
    }

    return !1;
  }

  function M(t, e) {
    var n = !1;
    return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n;
  }

  var D = !1;

  try {
    var N = Object.defineProperty({}, "passive", {
      get: function get() {
        D = !0;
      }
    });
    window.addEventListener("test", null, N);
  } catch (t) {}

  var j = !!D && {
    passive: !0
  };

  function H(t, e, n) {
    for (var i in e) {
      var o = ["touchstart", "touchmove"].indexOf(i) >= 0 && !n && j;
      t.addEventListener(i, e[i], o);
    }
  }

  function I(t, e) {
    for (var n in e) {
      var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && j;
      t.removeEventListener(n, e[n], i);
    }
  }

  function O() {
    return {
      topics: {},
      on: function on(t, e) {
        this.topics[t] = this.topics[t] || [], this.topics[t].push(e);
      },
      off: function off(t, e) {
        if (this.topics[t]) for (var n = 0; n < this.topics[t].length; n++) {
          if (this.topics[t][n] === e) {
            this.topics[t].splice(n, 1);
            break;
          }
        }
      },
      emit: function emit(t, e) {
        e.type = t, this.topics[t] && this.topics[t].forEach(function (n) {
          n(e, t);
        });
      }
    };
  }

  function q(t) {
    return (q = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  Object.keys || (Object.keys = function (t) {
    var e = [];

    for (var n in t) {
      Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
    }

    return e;
  }), "remove" in Element.prototype || (Element.prototype.remove = function () {
    this.parentNode && this.parentNode.removeChild(this);
  });

  (function t(e) {
    e = s({
      container: ".slider",
      mode: "carousel",
      axis: "horizontal",
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: !1,
      autoWidth: !1,
      viewportMax: !1,
      slideBy: 1,
      center: !1,
      controls: !0,
      controlsPosition: "top",
      controlsText: ["prev", "next"],
      controlsContainer: !1,
      prevButton: !1,
      nextButton: !1,
      nav: !0,
      navPosition: "top",
      navContainer: !1,
      navAsThumbnails: !1,
      arrowKeys: !1,
      speed: 300,
      autoplay: !1,
      autoplayPosition: "top",
      autoplayTimeout: 5e3,
      autoplayDirection: "forward",
      autoplayText: ["start", "stop"],
      autoplayHoverPause: !1,
      autoplayButton: !1,
      autoplayButtonOutput: !0,
      autoplayResetOnVisibility: !0,
      animateIn: "tns-fadeIn",
      animateOut: "tns-fadeOut",
      animateNormal: "tns-normal",
      animateDelay: !1,
      loop: !0,
      rewind: !1,
      autoHeight: !1,
      responsive: !1,
      lazyload: !1,
      lazyloadSelector: ".tns-lazy-img",
      touch: !0,
      mouseDrag: !1,
      swipeAngle: 15,
      nested: !1,
      preventActionWhenRunning: !1,
      preventScrollOnTouch: !1,
      freezable: !0,
      onInit: !1,
      useLocalStorage: !0
    }, e || {});
    var n = document,
        i = window,
        r = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    },
        f = {},
        v = e.useLocalStorage;

    if (v) {
      var T = navigator.userAgent,
          D = new Date();

      try {
        (f = i.localStorage) ? (f.setItem(D, D), v = f.getItem(D) == D, f.removeItem(D)) : v = !1, v || (f = {});
      } catch (t) {
        v = !1;
      }

      v && (f.tnsApp && f.tnsApp !== T && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function (t) {
        f.removeItem(t);
      }), localStorage.tnsApp = T);
    }

    var N = f.tC ? l(f.tC) : c(f, "tC", function () {
      var t = document,
          e = u(),
          n = d(e),
          i = t.createElement("div"),
          o = !1;
      e.appendChild(i);

      try {
        for (var r, a = "(10px * 10)", s = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], l = 0; l < 3; l++) {
          if (r = s[l], i.style.width = r, 100 === i.offsetWidth) {
            o = r.replace(a, "");
            break;
          }
        }
      } catch (t) {}

      return e.fake ? p(e, n) : i.remove(), o;
    }(), v),
        j = f.tPL ? l(f.tPL) : c(f, "tPL", function () {
      var t,
          e = document,
          n = u(),
          i = d(n),
          o = e.createElement("div"),
          r = e.createElement("div"),
          a = "";
      o.className = "tns-t-subp2", r.className = "tns-t-ct";

      for (var s = 0; s < 70; s++) {
        a += "<div></div>";
      }

      return r.innerHTML = a, o.appendChild(r), n.appendChild(o), t = Math.abs(o.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2, n.fake ? p(n, i) : o.remove(), t;
    }(), v),
        R = f.tMQ ? l(f.tMQ) : c(f, "tMQ", function () {
      var t,
          e = document,
          n = u(),
          i = d(n),
          o = e.createElement("div"),
          r = e.createElement("style"),
          a = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
      return r.type = "text/css", o.className = "tns-mq-test", n.appendChild(r), n.appendChild(o), r.styleSheet ? r.styleSheet.cssText = a : r.appendChild(e.createTextNode(a)), t = window.getComputedStyle ? window.getComputedStyle(o).position : o.currentStyle.position, n.fake ? p(n, i) : o.remove(), "absolute" === t;
    }(), v),
        F = f.tTf ? l(f.tTf) : c(f, "tTf", L("transform"), v),
        B = f.t3D ? l(f.t3D) : c(f, "t3D", function (t) {
      if (!t) return !1;
      if (!window.getComputedStyle) return !1;
      var e,
          n = document,
          i = u(),
          o = d(i),
          r = n.createElement("p"),
          a = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
      return a += "transform", i.insertBefore(r, null), r.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(r).getPropertyValue(a), i.fake ? p(i, o) : r.remove(), void 0 !== e && e.length > 0 && "none" !== e;
    }(F), v),
        z = f.tTDu ? l(f.tTDu) : c(f, "tTDu", L("transitionDuration"), v),
        W = f.tTDe ? l(f.tTDe) : c(f, "tTDe", L("transitionDelay"), v),
        _ = f.tADu ? l(f.tADu) : c(f, "tADu", L("animationDuration"), v),
        X = f.tADe ? l(f.tADe) : c(f, "tADe", L("animationDelay"), v),
        Y = f.tTE ? l(f.tTE) : c(f, "tTE", M(z, "Transition"), v),
        V = f.tAE ? l(f.tAE) : c(f, "tAE", M(_, "Animation"), v),
        U = i.console && "function" == typeof i.console.warn,
        G = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
        Z = {};

    if (G.forEach(function (t) {
      if ("string" == typeof e[t]) {
        var i = e[t],
            o = n.querySelector(i);
        if (Z[t] = i, !o || !o.nodeName) return void (U && console.warn("Can't find", e[t]));
        e[t] = o;
      }
    }), !(e.container.children.length < 1)) {
      var K = e.responsive,
          Q = e.nested,
          J = "carousel" === e.mode;

      if (K) {
        0 in K && (e = s(e, K[0]), delete K[0]);
        var tt = {};

        for (var et in K) {
          var nt = K[et];
          nt = "number" == typeof nt ? {
            items: nt
          } : nt, tt[et] = nt;
        }

        K = tt, tt = null;
      }

      if (J || function t(e) {
        for (var n in e) {
          J || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n]);
        }
      }(e), !J) {
        e.axis = "horizontal", e.slideBy = "page", e.edgePadding = !1;
        var it = e.animateIn,
            ot = e.animateOut,
            rt = e.animateDelay,
            at = e.animateNormal;
      }

      var st,
          lt,
          ct = "horizontal" === e.axis,
          ut = n.createElement("div"),
          ft = n.createElement("div"),
          dt = e.container,
          pt = dt.parentNode,
          ht = dt.outerHTML,
          gt = dt.children,
          mt = gt.length,
          vt = Dn(),
          yt = !1;
      K && Qn(), J && (dt.className += " tns-vpfix");

      var bt,
          xt,
          wt,
          Ct,
          Tt,
          St,
          Et,
          $t,
          Pt = e.autoWidth,
          kt = In("fixedWidth"),
          At = In("edgePadding"),
          Lt = In("gutter"),
          Mt = jn(),
          Dt = In("center"),
          Nt = Pt ? 1 : Math.floor(In("items")),
          jt = In("slideBy"),
          Ht = e.viewportMax || e.fixedWidthViewportWidth,
          It = In("arrowKeys"),
          Ot = In("speed"),
          qt = e.rewind,
          Rt = !qt && e.loop,
          Ft = In("autoHeight"),
          Bt = In("controls"),
          zt = In("controlsText"),
          Wt = In("nav"),
          _t = In("touch"),
          Xt = In("mouseDrag"),
          Yt = In("autoplay"),
          Vt = In("autoplayTimeout"),
          Ut = In("autoplayText"),
          Gt = In("autoplayHoverPause"),
          Zt = In("autoplayResetOnVisibility"),
          Kt = ($t = document.createElement("style"), Et && $t.setAttribute("media", Et), document.querySelector("head").appendChild($t), $t.sheet ? $t.sheet : $t.styleSheet),
          Qt = e.lazyload,
          Jt = e.lazyloadSelector,
          te = [],
          ee = Rt ? (Tt = function () {
        if (Pt || kt && !Ht) return mt - 1;
        var t = kt ? "fixedWidth" : "items",
            n = [];
        if ((kt || e[t] < mt) && n.push(e[t]), K) for (var i in K) {
          var o = K[i][t];
          o && (kt || o < mt) && n.push(o);
        }
        return n.length || n.push(0), Math.ceil(kt ? Ht / Math.min.apply(null, n) : Math.max.apply(null, n));
      }(), St = J ? Math.ceil((5 * Tt - mt) / 2) : 4 * Tt - mt, St = Math.max(Tt, St), Hn("edgePadding") ? St + 1 : St) : 0,
          ne = J ? mt + 2 * ee : mt + ee,
          ie = !(!kt && !Pt || Rt),
          oe = kt ? Si() : null,
          re = !J || !Rt,
          ae = ct ? "left" : "top",
          se = "",
          le = "",
          ce = kt ? function () {
        return Dt && !Rt ? mt - 1 : Math.ceil(-oe / (kt + Lt));
      } : Pt ? function () {
        for (var t = ne; t--;) {
          if (bt[t] >= -oe) return t;
        }
      } : function () {
        return Dt && J && !Rt ? mt - 1 : Rt || J ? Math.max(0, ne - Math.ceil(Nt)) : ne - 1;
      },
          ue = An(In("startIndex")),
          fe = ue,
          de = (kn(), 0),
          pe = Pt ? null : ce(),
          he = e.preventActionWhenRunning,
          ge = e.swipeAngle,
          me = !ge || "?",
          ve = !1,
          ye = e.onInit,
          be = new O(),
          xe = " tns-slider tns-" + e.mode,
          we = dt.id || (Ct = window.tnsId, window.tnsId = Ct ? Ct + 1 : 1, "tns" + window.tnsId),
          Ce = In("disable"),
          Te = !1,
          Se = e.freezable,
          Ee = !(!Se || Pt) && Kn(),
          $e = !1,
          Pe = {
        click: Ni,
        keydown: function keydown(t) {
          t = Bi(t);
          var e = [r.LEFT, r.RIGHT].indexOf(t.keyCode);
          e >= 0 && (0 === e ? Ue.disabled || Ni(t, -1) : Ge.disabled || Ni(t, 1));
        }
      },
          ke = {
        click: function click(t) {
          if (ve) {
            if (he) return;
            Mi();
          }

          var e = zi(t = Bi(t));

          for (; e !== Je && !w(e, "data-nav");) {
            e = e.parentNode;
          }

          if (w(e, "data-nav")) {
            var n = on = Number(C(e, "data-nav")),
                i = kt || Pt ? n * mt / en : n * Nt;
            Di(Ie ? n : Math.min(Math.ceil(i), mt - 1), t), rn === n && (fn && qi(), on = -1);
          }
        },
        keydown: function keydown(t) {
          t = Bi(t);
          var e = n.activeElement;
          if (!w(e, "data-nav")) return;
          var i = [r.LEFT, r.RIGHT, r.ENTER, r.SPACE].indexOf(t.keyCode),
              o = Number(C(e, "data-nav"));
          i >= 0 && (0 === i ? o > 0 && Fi(Qe[o - 1]) : 1 === i ? o < en - 1 && Fi(Qe[o + 1]) : (on = o, Di(o, t)));
        }
      },
          Ae = {
        mouseover: function mouseover() {
          fn && (Hi(), dn = !0);
        },
        mouseout: function mouseout() {
          dn && (ji(), dn = !1);
        }
      },
          Le = {
        visibilitychange: function visibilitychange() {
          n.hidden ? fn && (Hi(), hn = !0) : hn && (ji(), hn = !1);
        }
      },
          Me = {
        keydown: function keydown(t) {
          t = Bi(t);
          var e = [r.LEFT, r.RIGHT].indexOf(t.keyCode);
          e >= 0 && Ni(t, 0 === e ? -1 : 1);
        }
      },
          De = {
        touchstart: Yi,
        touchmove: Vi,
        touchend: Ui,
        touchcancel: Ui
      },
          Ne = {
        mousedown: Yi,
        mousemove: Vi,
        mouseup: Ui,
        mouseleave: Ui
      },
          je = Hn("controls"),
          He = Hn("nav"),
          Ie = !!Pt || e.navAsThumbnails,
          Oe = Hn("autoplay"),
          qe = Hn("touch"),
          Re = Hn("mouseDrag"),
          Fe = "tns-slide-active",
          Be = "tns-complete",
          ze = {
        load: function load(t) {
          si(zi(t));
        },
        error: function error(t) {
          e = zi(t), b(e, "failed"), li(e);
          var e;
        }
      },
          We = "force" === e.preventScrollOnTouch;

      if (je) var _e,
          Xe,
          Ye = e.controlsContainer,
          Ve = e.controlsContainer ? e.controlsContainer.outerHTML : "",
          Ue = e.prevButton,
          Ge = e.nextButton,
          Ze = e.prevButton ? e.prevButton.outerHTML : "",
          Ke = e.nextButton ? e.nextButton.outerHTML : "";
      if (He) var Qe,
          Je = e.navContainer,
          tn = e.navContainer ? e.navContainer.outerHTML : "",
          en = Pt ? mt : Zi(),
          nn = 0,
          on = -1,
          rn = Mn(),
          an = rn,
          sn = "tns-nav-active",
          ln = "Carousel Page ",
          cn = " (Current Slide)";
      if (Oe) var un,
          fn,
          dn,
          pn,
          hn,
          gn = "forward" === e.autoplayDirection ? 1 : -1,
          mn = e.autoplayButton,
          vn = e.autoplayButton ? e.autoplayButton.outerHTML : "",
          yn = ["<span class='tns-visually-hidden'>", " animation</span>"];
      if (qe || Re) var bn,
          xn,
          wn = {},
          Cn = {},
          Tn = !1,
          Sn = ct ? function (t, e) {
        return t.x - e.x;
      } : function (t, e) {
        return t.y - e.y;
      };
      Pt || Pn(Ce || Ee), F && (ae = F, se = "translate", B ? (se += ct ? "3d(" : "3d(0px, ", le = ct ? ", 0px, 0px)" : ", 0px)") : (se += ct ? "X(" : "Y(", le = ")")), J && (dt.className = dt.className.replace("tns-vpfix", "")), function () {
        Hn("gutter");
        ut.className = "tns-outer", ft.className = "tns-inner", ut.id = we + "-ow", ft.id = we + "-iw", "" === dt.id && (dt.id = we);
        xe += j || Pt ? " tns-subpixel" : " tns-no-subpixel", xe += N ? " tns-calc" : " tns-no-calc", Pt && (xe += " tns-autowidth");
        xe += " tns-" + e.axis, dt.className += xe, J ? ((st = n.createElement("div")).id = we + "-mw", st.className = "tns-ovh", ut.appendChild(st), st.appendChild(ft)) : ut.appendChild(ft);

        if (Ft) {
          (st || ft).className += " tns-ah";
        }

        if (pt.insertBefore(ut, dt), ft.appendChild(dt), m(gt, function (t, e) {
          b(t, "tns-item"), t.id || (t.id = we + "-item" + e), !J && at && b(t, at), S(t, {
            "aria-hidden": "true",
            tabindex: "-1"
          });
        }), ee) {
          for (var t = n.createDocumentFragment(), i = n.createDocumentFragment(), o = ee; o--;) {
            var r = o % mt,
                a = gt[r].cloneNode(!0);

            if (E(a, "id"), i.insertBefore(a, i.firstChild), J) {
              var s = gt[mt - 1 - r].cloneNode(!0);
              E(s, "id"), t.appendChild(s);
            }
          }

          dt.insertBefore(t, dt.firstChild), dt.appendChild(i), gt = dt.children;
        }
      }(), function () {
        if (!J) for (var t = ue, n = ue + Math.min(mt, Nt); t < n; t++) {
          var o = gt[t];
          o.style.left = 100 * (t - ue) / Nt + "%", b(o, it), x(o, at);
        }
        ct && (j || Pt ? (h(Kt, "#" + we + " > .tns-item", "font-size:" + i.getComputedStyle(gt[0]).fontSize + ";", g(Kt)), h(Kt, "#" + we, "font-size:0;", g(Kt))) : J && m(gt, function (t, e) {
          t.style.marginLeft = function (t) {
            return N ? N + "(" + 100 * t + "% / " + ne + ")" : 100 * t / ne + "%";
          }(e);
        }));

        if (R) {
          if (z) {
            var r = st && e.autoHeight ? zn(e.speed) : "";
            h(Kt, "#" + we + "-mw", r, g(Kt));
          }

          r = On(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight), h(Kt, "#" + we + "-iw", r, g(Kt)), J && (r = ct && !Pt ? "width:" + qn(e.fixedWidth, e.gutter, e.items) + ";" : "", z && (r += zn(Ot)), h(Kt, "#" + we, r, g(Kt))), r = ct && !Pt ? Rn(e.fixedWidth, e.gutter, e.items) : "", e.gutter && (r += Fn(e.gutter)), J || (z && (r += zn(Ot)), _ && (r += Wn(Ot))), r && h(Kt, "#" + we + " > .tns-item", r, g(Kt));
        } else {
          J && Ft && (st.style[z] = Ot / 1e3 + "s"), ft.style.cssText = On(At, Lt, kt, Ft), J && ct && !Pt && (dt.style.width = qn(kt, Lt, Nt));
          r = ct && !Pt ? Rn(kt, Lt, Nt) : "";
          Lt && (r += Fn(Lt)), r && h(Kt, "#" + we + " > .tns-item", r, g(Kt));
        }

        if (K && R) for (var a in K) {
          a = parseInt(a);
          var s = K[a],
              l = (r = "", ""),
              c = "",
              u = "",
              f = "",
              d = Pt ? null : In("items", a),
              p = In("fixedWidth", a),
              v = In("speed", a),
              y = In("edgePadding", a),
              w = In("autoHeight", a),
              C = In("gutter", a);
          z && st && In("autoHeight", a) && "speed" in s && (l = "#" + we + "-mw{" + zn(v) + "}"), ("edgePadding" in s || "gutter" in s) && (c = "#" + we + "-iw{" + On(y, C, p, v, w) + "}"), J && ct && !Pt && ("fixedWidth" in s || "items" in s || kt && "gutter" in s) && (u = "width:" + qn(p, C, d) + ";"), z && "speed" in s && (u += zn(v)), u && (u = "#" + we + "{" + u + "}"), ("fixedWidth" in s || kt && "gutter" in s || !J && "items" in s) && (f += Rn(p, C, d)), "gutter" in s && (f += Fn(C)), !J && "speed" in s && (z && (f += zn(v)), _ && (f += Wn(v))), f && (f = "#" + we + " > .tns-item{" + f + "}"), (r = l + c + u + f) && Kt.insertRule("@media (min-width: " + a / 16 + "em) {" + r + "}", Kt.cssRules.length);
        }
      }(), _n();
      var En = Rt ? J ? function () {
        var t = de,
            e = pe;
        t += jt, e -= jt, At ? (t += 1, e -= 1) : kt && (Mt + Lt) % (kt + Lt) && (e -= 1), ee && (ue > e ? ue -= mt : ue < t && (ue += mt));
      } : function () {
        if (ue > pe) for (; ue >= de + mt;) {
          ue -= mt;
        } else if (ue < de) for (; ue <= pe - mt;) {
          ue += mt;
        }
      } : function () {
        ue = Math.max(de, Math.min(pe, ue));
      },
          $n = J ? function () {
        var t, e, n, i, o, r, a, s, l, c, u;
        Ci(dt, ""), z || !Ot ? (Pi(), Ot && A(dt) || Mi()) : (t = dt, e = ae, n = se, i = le, o = Ei(), r = Ot, a = Mi, s = Math.min(r, 10), l = o.indexOf("%") >= 0 ? "%" : "px", o = o.replace(l, ""), c = Number(t.style[e].replace(n, "").replace(i, "").replace(l, "")), u = (o - c) / r * s, setTimeout(function o() {
          r -= s, c += u, t.style[e] = n + c + l + i, r > 0 ? setTimeout(o, s) : a();
        }, s)), ct || Gi();
      } : function () {
        te = [];
        var t = {};
        t[Y] = t[V] = Mi, I(gt[fe], t), H(gt[ue], t), ki(fe, it, ot, !0), ki(ue, at, it), Y && V && Ot && A(dt) || Mi();
      };
      return {
        version: "2.9.2",
        getInfo: Qi,
        events: be,
        goTo: Di,
        play: function play() {
          Yt && !fn && (Oi(), pn = !1);
        },
        pause: function pause() {
          fn && (qi(), pn = !0);
        },
        isOn: yt,
        updateSliderHeight: hi,
        refresh: _n,
        destroy: function destroy() {
          if (Kt.disabled = !0, Kt.ownerNode && Kt.ownerNode.remove(), I(i, {
            resize: Gn
          }), It && I(n, Me), Ye && I(Ye, Pe), Je && I(Je, ke), I(dt, Ae), I(dt, Le), mn && I(mn, {
            click: Ri
          }), Yt && clearInterval(un), J && Y) {
            var t = {};
            t[Y] = Mi, I(dt, t);
          }

          _t && I(dt, De), Xt && I(dt, Ne);
          var o = [ht, Ve, Ze, Ke, tn, vn];

          for (var r in G.forEach(function (t, n) {
            var i = "container" === t ? ut : e[t];

            if ("object" === q(i) && i) {
              var r = !!i.previousElementSibling && i.previousElementSibling,
                  a = i.parentNode;
              i.outerHTML = o[n], e[t] = r ? r.nextElementSibling : a.firstElementChild;
            }
          }), G = it = ot = rt = at = ct = ut = ft = dt = pt = ht = gt = mt = lt = vt = Pt = kt = At = Lt = Mt = Nt = jt = Ht = It = Ot = qt = Rt = Ft = Kt = Qt = bt = te = ee = ne = ie = oe = re = ae = se = le = ce = ue = fe = de = pe = ge = me = ve = ye = be = xe = we = Ce = Te = Se = Ee = $e = Pe = ke = Ae = Le = Me = De = Ne = je = He = Ie = Oe = qe = Re = Fe = Be = ze = xt = Bt = zt = Ye = Ve = Ue = Ge = _e = Xe = Wt = Je = tn = Qe = en = nn = on = rn = an = sn = ln = cn = Yt = Vt = gn = Ut = Gt = mn = vn = Zt = yn = un = fn = dn = pn = hn = wn = Cn = bn = Tn = xn = Sn = _t = Xt = null, this) {
            "rebuild" !== r && (this[r] = null);
          }

          yt = !1;
        },
        rebuild: function rebuild() {
          return t(s(e, Z));
        }
      };
    }

    function Pn(t) {
      t && (Bt = Wt = _t = Xt = It = Yt = Gt = Zt = !1);
    }

    function kn() {
      for (var t = J ? ue - ee : ue; t < 0;) {
        t += mt;
      }

      return t % mt + 1;
    }

    function An(t) {
      return t = t ? Math.max(0, Math.min(Rt ? mt - 1 : mt - Nt, t)) : 0, J ? t + ee : t;
    }

    function Ln(t) {
      for (null == t && (t = ue), J && (t -= ee); t < 0;) {
        t += mt;
      }

      return Math.floor(t % mt);
    }

    function Mn() {
      var t,
          e = Ln();
      return t = Ie ? e : kt || Pt ? Math.ceil((e + 1) * en / mt - 1) : Math.floor(e / Nt), !Rt && J && ue === pe && (t = en - 1), t;
    }

    function Dn() {
      return i.innerWidth || n.documentElement.clientWidth || n.body.clientWidth;
    }

    function Nn(t) {
      return "top" === t ? "afterbegin" : "beforeend";
    }

    function jn() {
      var t = At ? 2 * At - Lt : 0;
      return function t(e) {
        if (null != e) {
          var i,
              o,
              r = n.createElement("div");
          return e.appendChild(r), o = (i = r.getBoundingClientRect()).right - i.left, r.remove(), o || t(e.parentNode);
        }
      }(pt) - t;
    }

    function Hn(t) {
      if (e[t]) return !0;
      if (K) for (var n in K) {
        if (K[n][t]) return !0;
      }
      return !1;
    }

    function In(t, n) {
      if (null == n && (n = vt), "items" === t && kt) return Math.floor((Mt + Lt) / (kt + Lt)) || 1;
      var i = e[t];
      if (K) for (var o in K) {
        n >= parseInt(o) && t in K[o] && (i = K[o][t]);
      }
      return "slideBy" === t && "page" === i && (i = In("items")), J || "slideBy" !== t && "items" !== t || (i = Math.floor(i)), i;
    }

    function On(t, e, n, i, o) {
      var r = "";

      if (void 0 !== t) {
        var a = t;
        e && (a -= e), r = ct ? "margin: 0 " + a + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + a + "px 0;";
      } else if (e && !n) {
        var s = "-" + e + "px";
        r = "margin: 0 " + (ct ? s + " 0 0" : "0 " + s + " 0") + ";";
      }

      return !J && o && z && i && (r += zn(i)), r;
    }

    function qn(t, e, n) {
      return t ? (t + e) * ne + "px" : N ? N + "(" + 100 * ne + "% / " + n + ")" : 100 * ne / n + "%";
    }

    function Rn(t, e, n) {
      var i;
      if (t) i = t + e + "px";else {
        J || (n = Math.floor(n));
        var o = J ? ne : n;
        i = N ? N + "(100% / " + o + ")" : 100 / o + "%";
      }
      return i = "width:" + i, "inner" !== Q ? i + ";" : i + " !important;";
    }

    function Fn(t) {
      var e = "";
      !1 !== t && (e = (ct ? "padding-" : "margin-") + (ct ? "right" : "bottom") + ": " + t + "px;");
      return e;
    }

    function Bn(t, e) {
      var n = t.substring(0, t.length - e).toLowerCase();
      return n && (n = "-" + n + "-"), n;
    }

    function zn(t) {
      return Bn(z, 18) + "transition-duration:" + t / 1e3 + "s;";
    }

    function Wn(t) {
      return Bn(_, 17) + "animation-duration:" + t / 1e3 + "s;";
    }

    function _n() {
      if (Hn("autoHeight") || Pt || !ct) {
        var t = dt.querySelectorAll("img");
        m(t, function (t) {
          var e = t.src;
          Qt || (e && e.indexOf("data:image") < 0 ? (t.src = "", H(t, ze), b(t, "loading"), t.src = e) : si(t));
        }), o(function () {
          fi($(t), function () {
            xt = !0;
          });
        }), Hn("autoHeight") && (t = ci(ue, Math.min(ue + Nt - 1, ne - 1))), Qt ? Xn() : o(function () {
          fi($(t), Xn);
        });
      } else J && $i(), Vn(), Un();
    }

    function Xn() {
      if (Pt) {
        var t = Rt ? ue : mt - 1;
        !function e() {
          var n = gt[t].getBoundingClientRect().left,
              i = gt[t - 1].getBoundingClientRect().right;
          Math.abs(n - i) <= 1 ? Yn() : setTimeout(function () {
            e();
          }, 16);
        }();
      } else Yn();
    }

    function Yn() {
      ct && !Pt || (gi(), Pt ? (oe = Si(), Se && (Ee = Kn()), pe = ce(), Pn(Ce || Ee)) : Gi()), J && $i(), Vn(), Un();
    }

    function Vn() {
      if (mi(), ut.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + oi() + "</span>  of " + mt + "</div>"), wt = ut.querySelector(".tns-liveregion .current"), Oe) {
        var t = Yt ? "stop" : "start";
        mn ? S(mn, {
          "data-action": t
        }) : e.autoplayButtonOutput && (ut.insertAdjacentHTML(Nn(e.autoplayPosition), '<button type="button" data-action="' + t + '">' + yn[0] + t + yn[1] + Ut[0] + "</button>"), mn = ut.querySelector("[data-action]")), mn && H(mn, {
          click: Ri
        }), Yt && (Oi(), Gt && H(dt, Ae), Zt && H(dt, Le));
      }

      if (He) {
        if (Je) S(Je, {
          "aria-label": "Carousel Pagination"
        }), m(Qe = Je.children, function (t, e) {
          S(t, {
            "data-nav": e,
            tabindex: "-1",
            "aria-label": ln + (e + 1),
            "aria-controls": we
          });
        });else {
          for (var n = "", i = Ie ? "" : 'style="display:none"', o = 0; o < mt; o++) {
            n += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + we + '" ' + i + ' aria-label="' + ln + (o + 1) + '"></button>';
          }

          n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", ut.insertAdjacentHTML(Nn(e.navPosition), n), Je = ut.querySelector(".tns-nav"), Qe = Je.children;
        }

        if (Ki(), z) {
          var r = z.substring(0, z.length - 18).toLowerCase(),
              a = "transition: all " + Ot / 1e3 + "s";
          r && (a = "-" + r + "-" + a), h(Kt, "[aria-controls^=" + we + "-item]", a, g(Kt));
        }

        S(Qe[rn], {
          "aria-label": ln + (rn + 1) + cn
        }), E(Qe[rn], "tabindex"), b(Qe[rn], sn), H(Je, ke);
      }

      je && (Ye || Ue && Ge || (ut.insertAdjacentHTML(Nn(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + we + '">' + zt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + we + '">' + zt[1] + "</button></div>"), Ye = ut.querySelector(".tns-controls")), Ue && Ge || (Ue = Ye.children[0], Ge = Ye.children[1]), e.controlsContainer && S(Ye, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && S([Ue, Ge], {
        "aria-controls": we,
        tabindex: "-1"
      }), (e.controlsContainer || e.prevButton && e.nextButton) && (S(Ue, {
        "data-controls": "prev"
      }), S(Ge, {
        "data-controls": "next"
      })), _e = yi(Ue), Xe = yi(Ge), wi(), Ye ? H(Ye, Pe) : (H(Ue, Pe), H(Ge, Pe))), Jn();
    }

    function Un() {
      if (J && Y) {
        var t = {};
        t[Y] = Mi, H(dt, t);
      }

      _t && H(dt, De, e.preventScrollOnTouch), Xt && H(dt, Ne), It && H(n, Me), "inner" === Q ? be.on("outerResized", function () {
        Zn(), be.emit("innerLoaded", Qi());
      }) : (K || kt || Pt || Ft || !ct) && H(i, {
        resize: Gn
      }), Ft && ("outer" === Q ? be.on("innerLoaded", ui) : Ce || ui()), ai(), Ce ? ni() : Ee && ei(), be.on("indexChanged", di), "inner" === Q && be.emit("innerLoaded", Qi()), "function" == typeof ye && ye(Qi()), yt = !0;
    }

    function Gn(t) {
      o(function () {
        Zn(Bi(t));
      });
    }

    function Zn(t) {
      if (yt) {
        "outer" === Q && be.emit("outerResized", Qi(t)), vt = Dn();
        var i,
            o = lt,
            r = !1;
        K && (Qn(), (i = o !== lt) && be.emit("newBreakpointStart", Qi(t)));
        var a,
            s,
            l = Nt,
            c = Ce,
            u = Ee,
            f = It,
            d = Bt,
            p = Wt,
            v = _t,
            y = Xt,
            w = Yt,
            C = Gt,
            T = Zt,
            S = ue;

        if (i) {
          var E = kt,
              $ = Ft,
              A = zt,
              L = Dt,
              M = Ut;
          if (!R) var D = Lt,
              N = At;
        }

        if (It = In("arrowKeys"), Bt = In("controls"), Wt = In("nav"), _t = In("touch"), Dt = In("center"), Xt = In("mouseDrag"), Yt = In("autoplay"), Gt = In("autoplayHoverPause"), Zt = In("autoplayResetOnVisibility"), i && (Ce = In("disable"), kt = In("fixedWidth"), Ot = In("speed"), Ft = In("autoHeight"), zt = In("controlsText"), Ut = In("autoplayText"), Vt = In("autoplayTimeout"), R || (At = In("edgePadding"), Lt = In("gutter"))), Pn(Ce), Mt = jn(), ct && !Pt || Ce || (gi(), ct || (Gi(), r = !0)), (kt || Pt) && (oe = Si(), pe = ce()), (i || kt) && (Nt = In("items"), jt = In("slideBy"), (s = Nt !== l) && (kt || Pt || (pe = ce()), En())), i && Ce !== c && (Ce ? ni() : function () {
          if (!Te) return;
          if (Kt.disabled = !1, dt.className += xe, $i(), Rt) for (var t = ee; t--;) {
            J && k(gt[t]), k(gt[ne - t - 1]);
          }
          if (!J) for (var e = ue, n = ue + mt; e < n; e++) {
            var i = gt[e],
                o = e < ue + Nt ? it : at;
            i.style.left = 100 * (e - ue) / Nt + "%", b(i, o);
          }
          ti(), Te = !1;
        }()), Se && (i || kt || Pt) && (Ee = Kn()) !== u && (Ee ? (Pi(Ei(An(0))), ei()) : (!function () {
          if (!$e) return;
          At && R && (ft.style.margin = "");
          if (ee) for (var t = "tns-transparent", e = ee; e--;) {
            J && x(gt[e], t), x(gt[ne - e - 1], t);
          }
          ti(), $e = !1;
        }(), r = !0)), Pn(Ce || Ee), Yt || (Gt = Zt = !1), It !== f && (It ? H(n, Me) : I(n, Me)), Bt !== d && (Bt ? Ye ? k(Ye) : (Ue && k(Ue), Ge && k(Ge)) : Ye ? P(Ye) : (Ue && P(Ue), Ge && P(Ge))), Wt !== p && (Wt ? k(Je) : P(Je)), _t !== v && (_t ? H(dt, De, e.preventScrollOnTouch) : I(dt, De)), Xt !== y && (Xt ? H(dt, Ne) : I(dt, Ne)), Yt !== w && (Yt ? (mn && k(mn), fn || pn || Oi()) : (mn && P(mn), fn && qi())), Gt !== C && (Gt ? H(dt, Ae) : I(dt, Ae)), Zt !== T && (Zt ? H(n, Le) : I(n, Le)), i) {
          if (kt === E && Dt === L || (r = !0), Ft !== $ && (Ft || (ft.style.height = "")), Bt && zt !== A && (Ue.innerHTML = zt[0], Ge.innerHTML = zt[1]), mn && Ut !== M) {
            var j = Yt ? 1 : 0,
                O = mn.innerHTML,
                q = O.length - M[j].length;
            O.substring(q) === M[j] && (mn.innerHTML = O.substring(0, q) + Ut[j]);
          }
        } else Dt && (kt || Pt) && (r = !0);

        if ((s || kt && !Pt) && (en = Zi(), Ki()), (a = ue !== S) ? (be.emit("indexChanged", Qi()), r = !0) : s ? a || di() : (kt || Pt) && (ai(), mi(), ii()), s && !J && function () {
          for (var t = ue + Math.min(mt, Nt), e = ne; e--;) {
            var n = gt[e];
            e >= ue && e < t ? (b(n, "tns-moving"), n.style.left = 100 * (e - ue) / Nt + "%", b(n, it), x(n, at)) : n.style.left && (n.style.left = "", b(n, at), x(n, it)), x(n, ot);
          }

          setTimeout(function () {
            m(gt, function (t) {
              x(t, "tns-moving");
            });
          }, 300);
        }(), !Ce && !Ee) {
          if (i && !R && (At === N && Lt === D || (ft.style.cssText = On(At, Lt, kt, Ot, Ft)), ct)) {
            J && (dt.style.width = qn(kt, Lt, Nt));
            var F = Rn(kt, Lt, Nt) + Fn(Lt);
            !function (t, e) {
              "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e);
            }(Kt, g(Kt) - 1), h(Kt, "#" + we + " > .tns-item", F, g(Kt));
          }

          Ft && ui(), r && ($i(), fe = ue);
        }

        i && be.emit("newBreakpointEnd", Qi(t));
      }
    }

    function Kn() {
      if (!kt && !Pt) return mt <= (Dt ? Nt - (Nt - 1) / 2 : Nt);
      var t = kt ? (kt + Lt) * mt : bt[mt],
          e = At ? Mt + 2 * At : Mt + Lt;
      return Dt && (e -= kt ? (Mt - kt) / 2 : (Mt - (bt[ue + 1] - bt[ue] - Lt)) / 2), t <= e;
    }

    function Qn() {
      for (var t in lt = 0, K) {
        t = parseInt(t), vt >= t && (lt = t);
      }
    }

    function Jn() {
      !Yt && mn && P(mn), !Wt && Je && P(Je), Bt || (Ye ? P(Ye) : (Ue && P(Ue), Ge && P(Ge)));
    }

    function ti() {
      Yt && mn && k(mn), Wt && Je && k(Je), Bt && (Ye ? k(Ye) : (Ue && k(Ue), Ge && k(Ge)));
    }

    function ei() {
      if (!$e) {
        if (At && (ft.style.margin = "0px"), ee) for (var t = "tns-transparent", e = ee; e--;) {
          J && b(gt[e], t), b(gt[ne - e - 1], t);
        }
        Jn(), $e = !0;
      }
    }

    function ni() {
      if (!Te) {
        if (Kt.disabled = !0, dt.className = dt.className.replace(xe.substring(1), ""), E(dt, ["style"]), Rt) for (var t = ee; t--;) {
          J && P(gt[t]), P(gt[ne - t - 1]);
        }
        if (ct && J || E(ft, ["style"]), !J) for (var e = ue, n = ue + mt; e < n; e++) {
          var i = gt[e];
          E(i, ["style"]), x(i, it), x(i, at);
        }
        Jn(), Te = !0;
      }
    }

    function ii() {
      var t = oi();
      wt.innerHTML !== t && (wt.innerHTML = t);
    }

    function oi() {
      var t = ri(),
          e = t[0] + 1,
          n = t[1] + 1;
      return e === n ? e + "" : e + " to " + n;
    }

    function ri(t) {
      null == t && (t = Ei());
      var e,
          n,
          i,
          o = ue;
      if (Dt || At ? (Pt || kt) && (n = -(parseFloat(t) + At), i = n + Mt + 2 * At) : Pt && (n = bt[ue], i = n + Mt), Pt) bt.forEach(function (t, r) {
        r < ne && ((Dt || At) && t <= n + .5 && (o = r), i - t >= .5 && (e = r));
      });else {
        if (kt) {
          var r = kt + Lt;
          Dt || At ? (o = Math.floor(n / r), e = Math.ceil(i / r - 1)) : e = o + Math.ceil(Mt / r) - 1;
        } else if (Dt || At) {
          var a = Nt - 1;

          if (Dt ? (o -= a / 2, e = ue + a / 2) : e = ue + a, At) {
            var s = At * Nt / Mt;
            o -= s, e += s;
          }

          o = Math.floor(o), e = Math.ceil(e);
        } else e = o + Nt - 1;

        o = Math.max(o, 0), e = Math.min(e, ne - 1);
      }
      return [o, e];
    }

    function ai() {
      if (Qt && !Ce) {
        var t = ri();
        t.push(Jt), ci.apply(null, t).forEach(function (t) {
          if (!y(t, Be)) {
            var e = {};
            e[Y] = function (t) {
              t.stopPropagation();
            }, H(t, e), H(t, ze), t.src = C(t, "data-src");
            var n = C(t, "data-srcset");
            n && (t.srcset = n), b(t, "loading");
          }
        });
      }
    }

    function si(t) {
      b(t, "loaded"), li(t);
    }

    function li(t) {
      b(t, Be), x(t, "loading"), I(t, ze);
    }

    function ci(t, e, n) {
      var i = [];

      for (n || (n = "img"); t <= e;) {
        m(gt[t].querySelectorAll(n), function (t) {
          i.push(t);
        }), t++;
      }

      return i;
    }

    function ui() {
      var t = ci.apply(null, ri());
      o(function () {
        fi(t, hi);
      });
    }

    function fi(t, e) {
      return xt ? e() : (t.forEach(function (e, n) {
        !Qt && e.complete && li(e), y(e, Be) && t.splice(n, 1);
      }), t.length ? void o(function () {
        fi(t, e);
      }) : e());
    }

    function di() {
      ai(), mi(), ii(), wi(), function () {
        if (Wt && (rn = on >= 0 ? on : Mn(), on = -1, rn !== an)) {
          var t = Qe[an],
              e = Qe[rn];
          S(t, {
            tabindex: "-1",
            "aria-label": ln + (an + 1)
          }), x(t, sn), S(e, {
            "aria-label": ln + (rn + 1) + cn
          }), E(e, "tabindex"), b(e, sn), an = rn;
        }
      }();
    }

    function pi(t, e) {
      for (var n = [], i = t, o = Math.min(t + e, ne); i < o; i++) {
        n.push(gt[i].offsetHeight);
      }

      return Math.max.apply(null, n);
    }

    function hi() {
      var t = Ft ? pi(ue, Nt) : pi(ee, mt),
          e = st || ft;
      e.style.height !== t && (e.style.height = t + "px");
    }

    function gi() {
      bt = [0];
      var t = ct ? "left" : "top",
          e = ct ? "right" : "bottom",
          n = gt[0].getBoundingClientRect()[t];
      m(gt, function (i, o) {
        o && bt.push(i.getBoundingClientRect()[t] - n), o === ne - 1 && bt.push(i.getBoundingClientRect()[e] - n);
      });
    }

    function mi() {
      var t = ri(),
          e = t[0],
          n = t[1];
      m(gt, function (t, i) {
        i >= e && i <= n ? w(t, "aria-hidden") && (E(t, ["aria-hidden", "tabindex"]), b(t, Fe)) : w(t, "aria-hidden") || (S(t, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), x(t, Fe));
      });
    }

    function vi(t) {
      return t.nodeName.toLowerCase();
    }

    function yi(t) {
      return "button" === vi(t);
    }

    function bi(t) {
      return "true" === t.getAttribute("aria-disabled");
    }

    function xi(t, e, n) {
      t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString());
    }

    function wi() {
      if (Bt && !qt && !Rt) {
        var t = _e ? Ue.disabled : bi(Ue),
            e = Xe ? Ge.disabled : bi(Ge),
            n = ue <= de,
            i = !qt && ue >= pe;
        n && !t && xi(_e, Ue, !0), !n && t && xi(_e, Ue, !1), i && !e && xi(Xe, Ge, !0), !i && e && xi(Xe, Ge, !1);
      }
    }

    function Ci(t, e) {
      z && (t.style[z] = e);
    }

    function Ti(t) {
      return null == t && (t = ue), Pt ? (Mt - (At ? Lt : 0) - (bt[t + 1] - bt[t] - Lt)) / 2 : kt ? (Mt - kt) / 2 : (Nt - 1) / 2;
    }

    function Si() {
      var t = Mt + (At ? Lt : 0) - (kt ? (kt + Lt) * ne : bt[ne]);
      return Dt && !Rt && (t = kt ? -(kt + Lt) * (ne - 1) - Ti() : Ti(ne - 1) - bt[ne - 1]), t > 0 && (t = 0), t;
    }

    function Ei(t) {
      var e;
      if (null == t && (t = ue), ct && !Pt) {
        if (kt) e = -(kt + Lt) * t, Dt && (e += Ti());else {
          var n = F ? ne : Nt;
          Dt && (t -= Ti()), e = 100 * -t / n;
        }
      } else e = -bt[t], Dt && Pt && (e += Ti());
      return ie && (e = Math.max(e, oe)), e += !ct || Pt || kt ? "px" : "%";
    }

    function $i(t) {
      Ci(dt, "0s"), Pi(t);
    }

    function Pi(t) {
      null == t && (t = Ei()), dt.style[ae] = se + t + le;
    }

    function ki(t, e, n, i) {
      var o = t + Nt;
      Rt || (o = Math.min(o, ne));

      for (var r = t; r < o; r++) {
        var a = gt[r];
        i || (a.style.left = 100 * (r - ue) / Nt + "%"), rt && W && (a.style[W] = a.style[X] = rt * (r - t) / 1e3 + "s"), x(a, e), b(a, n), i && te.push(a);
      }
    }

    function Ai(t, e) {
      re && En(), (ue !== fe || e) && (be.emit("indexChanged", Qi()), be.emit("transitionStart", Qi()), Ft && ui(), fn && t && ["click", "keydown"].indexOf(t.type) >= 0 && qi(), ve = !0, $n());
    }

    function Li(t) {
      return t.toLowerCase().replace(/-/g, "");
    }

    function Mi(t) {
      if (J || ve) {
        if (be.emit("transitionEnd", Qi(t)), !J && te.length > 0) for (var e = 0; e < te.length; e++) {
          var n = te[e];
          n.style.left = "", X && W && (n.style[X] = "", n.style[W] = ""), x(n, ot), b(n, at);
        }

        if (!t || !J && t.target.parentNode === dt || t.target === dt && Li(t.propertyName) === Li(ae)) {
          if (!re) {
            var i = ue;
            En(), ue !== i && (be.emit("indexChanged", Qi()), $i());
          }

          "inner" === Q && be.emit("innerLoaded", Qi()), ve = !1, fe = ue;
        }
      }
    }

    function Di(t, e) {
      if (!Ee) if ("prev" === t) Ni(e, -1);else if ("next" === t) Ni(e, 1);else {
        if (ve) {
          if (he) return;
          Mi();
        }

        var n = Ln(),
            i = 0;

        if ("first" === t ? i = -n : "last" === t ? i = J ? mt - Nt - n : mt - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(mt - 1, t))), i = t - n)), !J && i && Math.abs(i) < Nt) {
          var o = i > 0 ? 1 : -1;
          i += ue + i - mt >= de ? mt * o : 2 * mt * o * -1;
        }

        ue += i, J && Rt && (ue < de && (ue += mt), ue > pe && (ue -= mt)), Ln(ue) !== Ln(fe) && Ai(e);
      }
    }

    function Ni(t, e) {
      if (ve) {
        if (he) return;
        Mi();
      }

      var n;

      if (!e) {
        for (var i = zi(t = Bi(t)); i !== Ye && [Ue, Ge].indexOf(i) < 0;) {
          i = i.parentNode;
        }

        var o = [Ue, Ge].indexOf(i);
        o >= 0 && (n = !0, e = 0 === o ? -1 : 1);
      }

      if (qt) {
        if (ue === de && -1 === e) return void Di("last", t);
        if (ue === pe && 1 === e) return void Di("first", t);
      }

      e && (ue += jt * e, Pt && (ue = Math.floor(ue)), Ai(n || t && "keydown" === t.type ? t : null));
    }

    function ji() {
      un = setInterval(function () {
        Ni(null, gn);
      }, Vt), fn = !0;
    }

    function Hi() {
      clearInterval(un), fn = !1;
    }

    function Ii(t, e) {
      S(mn, {
        "data-action": t
      }), mn.innerHTML = yn[0] + t + yn[1] + e;
    }

    function Oi() {
      ji(), mn && Ii("stop", Ut[1]);
    }

    function qi() {
      Hi(), mn && Ii("start", Ut[0]);
    }

    function Ri() {
      fn ? (qi(), pn = !0) : (Oi(), pn = !1);
    }

    function Fi(t) {
      t.focus();
    }

    function Bi(t) {
      return Wi(t = t || i.event) ? t.changedTouches[0] : t;
    }

    function zi(t) {
      return t.target || i.event.srcElement;
    }

    function Wi(t) {
      return t.type.indexOf("touch") >= 0;
    }

    function _i(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    }

    function Xi() {
      return r = Cn.y - wn.y, a = Cn.x - wn.x, t = Math.atan2(r, a) * (180 / Math.PI), n = ge, i = !1, (o = Math.abs(90 - Math.abs(t))) >= 90 - n ? i = "horizontal" : o <= n && (i = "vertical"), i === e.axis;
      var t, n, i, o, r, a;
    }

    function Yi(t) {
      if (ve) {
        if (he) return;
        Mi();
      }

      Yt && fn && Hi(), Tn = !0, xn && (a(xn), xn = null);
      var e = Bi(t);
      be.emit(Wi(t) ? "touchStart" : "dragStart", Qi(t)), !Wi(t) && ["img", "a"].indexOf(vi(zi(t))) >= 0 && _i(t), Cn.x = wn.x = e.clientX, Cn.y = wn.y = e.clientY, J && (bn = parseFloat(dt.style[ae].replace(se, "")), Ci(dt, "0s"));
    }

    function Vi(t) {
      if (Tn) {
        var e = Bi(t);
        Cn.x = e.clientX, Cn.y = e.clientY, J ? xn || (xn = o(function () {
          !function t(e) {
            if (!me) return void (Tn = !1);
            a(xn);
            Tn && (xn = o(function () {
              t(e);
            }));
            "?" === me && (me = Xi());

            if (me) {
              !We && Wi(e) && (We = !0);

              try {
                e.type && be.emit(Wi(e) ? "touchMove" : "dragMove", Qi(e));
              } catch (t) {}

              var n = bn,
                  i = Sn(Cn, wn);
              if (!ct || kt || Pt) n += i, n += "px";else n += F ? i * Nt * 100 / ((Mt + Lt) * ne) : 100 * i / (Mt + Lt), n += "%";
              dt.style[ae] = se + n + le;
            }
          }(t);
        })) : ("?" === me && (me = Xi()), me && (We = !0)), ("boolean" != typeof t.cancelable || t.cancelable) && We && t.preventDefault();
      }
    }

    function Ui(t) {
      if (Tn) {
        xn && (a(xn), xn = null), J && Ci(dt, ""), Tn = !1;
        var n = Bi(t);
        Cn.x = n.clientX, Cn.y = n.clientY;
        var i = Sn(Cn, wn);

        if (Math.abs(i)) {
          if (!Wi(t)) {
            var r = zi(t);
            H(r, {
              click: function t(e) {
                _i(e), I(r, {
                  click: t
                });
              }
            });
          }

          J ? xn = o(function () {
            if (ct && !Pt) {
              var e = -i * Nt / (Mt + Lt);
              e = i > 0 ? Math.floor(e) : Math.ceil(e), ue += e;
            } else {
              var n = -(bn + i);
              if (n <= 0) ue = de;else if (n >= bt[ne - 1]) ue = pe;else for (var o = 0; o < ne && n >= bt[o];) {
                ue = o, n > bt[o] && i < 0 && (ue += 1), o++;
              }
            }

            Ai(t, i), be.emit(Wi(t) ? "touchEnd" : "dragEnd", Qi(t));
          }) : me && Ni(t, i > 0 ? -1 : 1);
        }
      }

      "auto" === e.preventScrollOnTouch && (We = !1), ge && (me = "?"), Yt && !fn && ji();
    }

    function Gi() {
      (st || ft).style.height = bt[ue + Nt] - bt[ue] + "px";
    }

    function Zi() {
      var t = kt ? (kt + Lt) * mt / Mt : mt / Nt;
      return Math.min(Math.ceil(t), mt);
    }

    function Ki() {
      if (Wt && !Ie && en !== nn) {
        var t = nn,
            e = en,
            n = k;

        for (nn > en && (t = en, e = nn, n = P); t < e;) {
          n(Qe[t]), t++;
        }

        nn = en;
      }
    }

    function Qi(t) {
      return {
        container: dt,
        slideItems: gt,
        navContainer: Je,
        navItems: Qe,
        controlsContainer: Ye,
        hasControls: je,
        prevButton: Ue,
        nextButton: Ge,
        items: Nt,
        slideBy: jt,
        cloneCount: ee,
        slideCount: mt,
        slideCountNew: ne,
        index: ue,
        indexCached: fe,
        displayIndex: kn(),
        navCurrentIndex: rn,
        navCurrentIndexCached: an,
        pages: en,
        pagesCached: nn,
        sheet: Kt,
        isOn: yt,
        event: t || {}
      };
    }

    U && console.warn("No slides found in", e.container);
  })({
    container: ".portfolio",
    items: 1,
    gutter: 20,
    slideBy: "page",
    navPosition: "bottom",
    controls: !1,
    responsive: {
      1024: {
        items: 2
      }
    }
  });
}]);