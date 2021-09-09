!(function (e) {
    "use strict";
    (window.StyleHatch = window.StyleHatch || {}),
        (StyleHatch.Sections = function () {
            (this.constructors = {}),
                (this.instances = []),
                e(document)
                    .on("shopify:section:load", this._onSectionLoad.bind(this))
                    .on("shopify:section:unload", this._onSectionUnload.bind(this))
                    .on("shopify:section:select", this._onSelect.bind(this))
                    .on("shopify:section:deselect", this._onDeselect.bind(this))
                    .on("shopify:section:reorder", this._onReorder.bind(this))
                    .on("shopify:block:select", this._onBlockSelect.bind(this))
                    .on("shopify:block:deselect", this._onBlockDeselect.bind(this));
        }),
        (StyleHatch.Sections.prototype = e.extend({}, StyleHatch.Sections.prototype, {
            _createInstance: function (t, o) {
                var a = e(t),
                    r = a.attr("data-section-id"),
                    n = a.attr("data-section-type");
                if (((o = o || this.constructors[n]), "undefined" != typeof o)) {
                    var i = e.extend(new o(t), { id: r, type: n, container: t });
                    this.instances.push(i);
                }
            },
            _onSectionLoad: function (t) {
                var o = e("[data-section-id]", t.target)[0];
                o && this._createInstance(o);
            },
            _onSectionUnload: function (e) {
                var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
                t && ("function" == typeof t.onUnload && t.onUnload(e), (this.instances = slate.utils.removeInstance(this.instances, "id", e.detail.sectionId)));
            },
            _onSelect: function (t) {
                var o = slate.utils.findInstance(this.instances, "id", t.detail.sectionId);
                o && "function" == typeof o.onSelect && o.onSelect(t),
                    e("body").hasClass("panel-open") &&
                        (StyleHatch.closePanelMenu(),
                        e("html, body").addClass("scroll-lock"),
                        setTimeout(function () {
                            e("html, body").removeClass("scroll-lock"), e("html, body").animate({ scrollTop: o.$container.offset().top }, 600);
                        }, 400));
            },
            _onDeselect: function (t) {
                var o = slate.utils.findInstance(this.instances, "id", t.detail.sectionId);
                o && "function" == typeof o.onDeselect && o.onDeselect(t), e("body").hasClass("panel-open") && StyleHatch.closePanelMenu();
            },
            _onReorder: function (e) {
                var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
                t && "function" == typeof t.onReorder && t.onReorder(e);
            },
            _onBlockSelect: function (e) {
                var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
                t && "function" == typeof t.onBlockSelect && t.onBlockSelect(e);
            },
            _onBlockDeselect: function (e) {
                var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
                t && "function" == typeof t.onBlockDeselect && t.onBlockDeselect(e);
            },
            register: function (t, o) {
                (this.constructors[t] = o),
                    e("[data-section-type=" + t + "]").each(
                        function (e, t) {
                            this._createInstance(t, o);
                        }.bind(this)
                    );
            },
        })),
        (StyleHatch.cacheSelectors = function () {
            StyleHatch.cache = {
                $body: e("body"),
                $html: e("html"),
                $util: e("header.util"),
                $header: e("header.site-header"),
                $siteNav: e("header.site-header ul.site-nav"),
                $featuredCollection: e(".featured-collection"),
                $instagramCollection: e(".instagram-collection"),
                $addToCartForm: e("#AddToCartForm"),
                $addToCartButton: e("#AddToCart"),
                $cartButton: e("#CartButton"),
                $recoverPasswordLink: e("#RecoverPassword"),
                $hideRecoverPasswordLink: e("#HideRecoverPasswordLink"),
                $recoverPasswordForm: e("#RecoverPasswordForm"),
                $customerLoginForm: e("#CustomerLoginForm"),
                $passwordResetSuccess: e("#ResetSuccess"),
            };
        }),
        (StyleHatch.init = function () {
            var t = document.documentElement;
            t.setAttribute("data-useragent", navigator.userAgent), StyleHatch.cacheSelectors(), (StyleHatch.largeMobile = 700);
            var o = new StyleHatch.Sections();
            o.register("promos-section", StyleHatch.PromosSection),
                o.register("header-section", StyleHatch.HeaderSection),
                o.register("footer-section", StyleHatch.FooterSection),
                o.register("slideshow-section", StyleHatch.SlideshowSection),
                o.register("hero-video-section", StyleHatch.HeroVideoSection),
                o.register("featured-collection-section", StyleHatch.FeaturedCollectionSection),
                o.register("simple-collection-section", StyleHatch.SimpleCollectionSection),
                o.register("featured-text-section", StyleHatch.PageSection),
                o.register("custom-content-section", StyleHatch.PageSection),
                o.register("instagram-section", StyleHatch.InstagramSection),
                o.register("featured-blog-section", StyleHatch.GenericSection),
                o.register("map", StyleHatch.Maps),
                o.register("product-template", StyleHatch.Product),
                o.register("collection-template", StyleHatch.Collection),
                o.register("collection-list-template", StyleHatch.Collection),
                o.register("list-collections-template", StyleHatch.ListCollections),
                o.register("blog-template", StyleHatch.BlogArticle),
                o.register("article-template", StyleHatch.BlogArticle),
                o.register("password-template", StyleHatch.Password),
                o.register("cart-template", StyleHatch.Cart),
                StyleHatch.currencyConverter && StyleHatch.CurrencyConverter.init(),
                StyleHatch.ajaxCartEnable && StyleHatch.AjaxCart.init(),
                StyleHatch.loginForms(),
                StyleHatch.videoLayout(),
                StyleHatch.initTemplates(),
                e("main").productBox();
        }),
        (StyleHatch.PromosSection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                StyleHatch.Promos.init();
            }
            return t;
        })()),
        (StyleHatch.PromosSection.prototype = e.extend({}, StyleHatch.PromosSection.prototype, {
            onUnload: function () {
                StyleHatch.Promos.unload();
            },
            onBlockSelect: function (e) {
                StyleHatch.Promos.blockSelect(e);
            },
            onBlockDeselect: function (e) {
                StyleHatch.Promos.blockDeselect(e);
            },
        })),
        (StyleHatch.Promos = (function () {
            function t() {
                o(), (p.scrollLock = h.$promos.find(">*:first").data("scroll-lock")), a(), s(), StyleHatch.Header.rebuildFixTo();
            }
            function o() {
                h = { $body: e(u.body), $promos: e(u.promos), $promosContainer: e(u.promos).find(">*:first"), $promoBar: e(u.promoBar), $bottomContainer: e(u.bottomContainer), $popup: e(u.popup) };
            }
            function a() {
                h.$promoBar.length &&
                    (h.$promoBar.each(function () {
                        var t = e(this),
                            o = t.data("hide-delay"),
                            a = t.data("bar-placement"),
                            r = t.find("div.errors");
                        r.length && r.prependTo(t),
                            "bottom" == a &&
                                (h.$bottomContainer.length || (h.$promosContainer.append('<div class="promo-bar-container bottom"></div>'), (h.$bottomContainer = e(u.bottomContainer))),
                                t.appendTo(h.$bottomContainer),
                                h.$bottomContainer.resize(function () {
                                    var t = e(this).height() + "px";
                                    h.$body.css({ "margin-bottom": t });
                                })),
                            t.hasClass("signup-bar") && t.showPopup(),
                            "no-delay" !== o &&
                                p.hideTimers.push(
                                    setTimeout(function () {
                                        t.data("pause-hide") || t.promoSlideUp();
                                    }, o)
                                );
                    }),
                    r(),
                    i());
            }
            function r() {
                h.$promos.data("fixtoInstance") && h.$promos.fixTo("destroy");
            }
            function n() {
                h.$promos.data("fixtoInstance") && h.$promos.fixTo("refresh");
            }
            function i() {
                p.scrollLock && h.$promos.fixTo(u.page, { zIndex: p.fixToZIndex });
            }
            function s() {
                h.$popup.length &&
                    h.$popup.each(function () {
                        var t = e(this),
                            o = !0,
                            a = t.data("show-delay"),
                            r = (t.data("homepage-limit"), t.data("visitor-limit")),
                            n = t.data("visitor"),
                            i = t.data("show-for");
                        1 == r && 0 == n && (o = !1);
                        var s = t.find(".errors");
                        s.length && (a = 0);
                        setTimeout(function () {
                            var o = e(window).width();
                            switch (i) {
                                case "mobile":
                                    o <= StyleHatch.largeMobile && t.showPopup();
                                    break;
                                case "desktop":
                                    o > StyleHatch.largeMobile && t.showPopup();
                                    break;
                                case "both":
                                    t.showPopup();
                            }
                        }, a);
                    });
            }
            function l(t) {
                var o = e("#block-" + t.detail.blockId),
                    a = o.data("type");
                switch ((e.magnificPopup.close(), a)) {
                    case "announcement-bar":
                        o.promoSlideDown(), o.attr("data-pause-hide", !0);
                        break;
                    case "popup":
                        o.showMockPopup();
                        break;
                    case "signup-bar":
                        o.showPopup(!0);
                }
                StyleHatch.Header.rebuildFixTo(), StyleHatch.refreshFixTo();
            }
            function c(t) {
                var o = e("#block-" + t.detail.blockId),
                    a = o.data("type"),
                    r = o.data("show-for"),
                    n = e(window).width();
                switch (a) {
                    case "announcement-bar":
                        var i = o;
                        i.attr("data-pause-hide", !1);
                        var s = i.data("hide-delay");
                        i.data("bar-placement"), i.data("homepage-limit");
                        "desktop" == r && n <= StyleHatch.largeMobile ? o.promoSlideUp() : "mobile" == r && n > StyleHatch.largeMobile && o.promoSlideUp(),
                            "no-delay" !== s &&
                                p.hideTimers.push(
                                    setTimeout(function () {
                                        i.data("pause-hide") || i.promoSlideUp();
                                    }, s)
                                );
                        break;
                    case "popup":
                        o.hideMockPopup();
                        break;
                    case "signup-bar":
                        "desktop" == r && n <= StyleHatch.largeMobile && (o.hidePopup(), StyleHatch.refreshFixTo()), "mobile" == r && n > StyleHatch.largeMobile && (o.hidePopup(), StyleHatch.refreshFixTo());
                }
                StyleHatch.Header.rebuildFixTo();
            }
            function d() {
                if ("undefined" != typeof p.hideTimers && p.hideTimers instanceof Array) {
                    for (var t = 0; t < p.hideTimers.length; t++) clearTimeout(p.hideTimers[t]);
                    p.hideTimers.length = 0;
                } else p.hideTimers = [];
                r(), StyleHatch.refreshFixTo(), h.$bottomContainer.remove(), e.magnificPopup.close();
            }
            var u = { body: "body", page: "#page", promos: "#shopify-section-promos", promoBar: "header.promo-bar", bottomContainer: ".promo-bar-container.bottom", popup: ".promo-popup" },
                p = {};
            p = { scrollLock: !1, fixToZIndex: 992, hideTimers: [], slideSpeed: 400 };
            var h = {};
            return (
                e.fn.extend({
                    showPopup: function (t) {
                        var o = e(this),
                            a = !0,
                            r = (o.data("show-delay"), o.data("show-again-delay")),
                            n = o.data("homepage-limit"),
                            i = o.data("visitor-limit"),
                            s = o.data("visitor"),
                            l = (o.data("show-for"), o.data("type")),
                            c = o.data("id");
                        1 == i && 0 == s && (a = !1);
                        var d = "popup-" + c;
                        e.cookie(d) && (a = !1), n && !h.$body.hasClass("template-index") && (a = !1), window.self !== window.top && "popup" == l && (a = !1), t && (a = !0);
                        var u = o.find(".errors"),
                            p = getQueryString("contact%5Btags%5D");
                        if ((u.length && p.includes("popup") && ((a = !0), o.find("input#email").addClass("errors")), u.length && p.includes("signup-bar") && (a = !0), Modernizr.touchevents && o.find("form").removeAttr("target"), a)) {
                            "popup" == l &&
                                e.magnificPopup.open({
                                    items: { src: o, type: "inline", showCloseBtn: !1 },
                                    mainClass: "mfp-slideup",
                                    removalDelay: 300,
                                    callbacks: {
                                        close: function () {
                                            e.cookie(d, "shown", { expires: r, path: "/" });
                                        },
                                    },
                                }),
                                "signup-bar" == l && (t ? o.addClass("visible force") : o.addClass("visible"));
                            var f = o.find(".icon-text");
                            f.on("click", function (e) {
                                o.hidePopup(), e.preventDefault();
                            });
                            var y = o.find("form");
                            y.on("submit", function (t) {
                                return !!t.target.checkValidity() && (o.hidePopup(), void e(this).submit());
                            });
                        }
                    },
                    hidePopup: function () {
                        var t = (e("#shopify-section-promos"), e(this)),
                            o = t.data("type"),
                            a = t.data("id");
                        if (("popup" == o && e.magnificPopup.close(), "signup-bar" == o)) {
                            var r = "popup-" + a;
                            e.cookie(r, "shown", { expires: 60, path: "/" }),
                                e(".promo-bar.signup-bar").each(function (t) {
                                    e(this).slideUp({
                                        duration: 400,
                                        progress: function () {
                                            StyleHatch.refreshFixTo();
                                        },
                                        complete: function () {
                                            StyleHatch.refreshFixTo(), e(this).removeClass("visible force");
                                        },
                                    });
                                });
                        }
                    },
                    promoSlideUp: function () {
                        e(this).slideUp({ duration: p.slideSpeed, progress: StyleHatch.refreshFixTo, complete: StyleHatch.refreshFixTo });
                    },
                    promoSlideDown: function () {
                        e(this).slideDown({ duration: p.slideSpeed, progress: StyleHatch.refreshFixTo, complete: StyleHatch.refreshFixTo });
                    },
                    showMockPopup: function () {
                        var t = e("#shopify-section-promos");
                        e(".mock-popup-container").length || t.find(">*:first").append('<div class="mock-popup-container"></div>');
                        var o = e(".mock-popup-container"),
                            a = e(this);
                        a.appendTo(o), o.show(), a.show();
                    },
                    hideMockPopup: function () {
                        var t = e(".mock-popup-container"),
                            o = e(this);
                        t.hide(), o.hide();
                    },
                }),
                { init: t, unload: d, blockSelect: l, blockDeselect: c, refreshFixTo: n }
            );
        })()),
        (StyleHatch.HeaderSection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                StyleHatch.Header.init();
            }
            return t;
        })()),
        (StyleHatch.HeaderSection.prototype = e.extend({}, StyleHatch.HeaderSection.prototype, {
            onUnload: function () {
                StyleHatch.Header.unload();
            },
        })),
        (StyleHatch.Header = (function () {
            function t() {
                o(), a(), c(), u(), m(), S();
            }
            function o() {
                x = {
                    $htmlBody: e(T.htmlBody),
                    $body: e(T.body),
                    $page: e(T.page),
                    $section: e(T.section),
                    $promosSection: e(T.promosSection),
                    $util: e(T.util),
                    $header: e(T.header),
                    $siteNav: e(T.siteNav),
                    $dropdownParent: e(T.siteNav).find("li.has-dropdown"),
                    $defaultLink: e(T.siteNav).find("> li:not(.has-dropdown)"),
                    $subMenuLinks: e(T.siteNav).find("li.has-dropdown a"),
                    $subDropdownParent: e(T.siteNav).find("li.has-sub-dropdown"),
                    $search: e(T.util).find(".search-wrapper"),
                    $searchLink: e(T.util).find("a.search"),
                    $searchClose: e(T.util).find("form.search-bar button"),
                    $searchInput: e(T.util).find("form.search-bar input"),
                    $menuLink: e(T.menuLink),
                    $menuPanel: e(T.menuPanel),
                    $menuPanelDropdown: e(T.menuPanel).find("li.has-dropdown"),
                    $menuPanelSubDropdown: e(T.menuPanel).find("li.has-sub-dropdown"),
                };
            }
            function a() {
                e(T.menuOverlay).length || (x.$section.append('<div class="mobile-menu-overlay"></div>'), (x.$menuOverlay = e(T.menuOverlay)));
            }
            function r() {
                x.$search.slideDown({
                    duration: C.slideSpeed,
                    progress: function () {
                        StyleHatch.refreshFixTo();
                    },
                    complete: function () {
                        StyleHatch.refreshFixTo();
                    },
                }),
                    x.$searchInput.focus();
            }
            function n() {
                x.$searchInput.blur(),
                    clearTimeout(C.blurTimer),
                    x.$search.slideUp({
                        duration: C.slideSpeed,
                        progress: function () {
                            StyleHatch.refreshFixTo();
                        },
                        complete: function () {
                            StyleHatch.refreshFixTo();
                        },
                    });
            }
            function i() {
                x.$body.hasClass("panel-open") ? l() : s();
            }
            function s() {
                x.$htmlBody.addClass("panel-open"), window.scrollTo(0, 0), x.$menuPanel.attr("tabindex", "0"), x.$menuPanel.focus();
            }
            function l() {
                x.$htmlBody.addClass("panel-open-transition"),
                    x.$htmlBody.removeClass("panel-open"),
                    x.$menuPanel.removeAttr("tabindex"),
                    setTimeout(function () {
                        x.$htmlBody.removeClass("panel-open-transition");
                    }, 400);
            }
            function c() {
                x.$searchLink.on("click.search", function (e) {
                    r(), e.preventDefault();
                }),
                    x.$searchClose.on("click.search", function (e) {
                        n(), e.preventDefault();
                    }),
                    x.$searchInput.on("blur.search", function (e) {
                        (C.blurTimer = setTimeout(n, C.blurTime)), e.preventDefault();
                    }),
                    x.$menuLink.on("click.panel", function (e) {
                        i(), e.preventDefault();
                    }),
                    x.$menuOverlay.on("click.panel", function (e) {
                        i(), e.preventDefault();
                    }),
                    x.$menuPanelDropdown.on("click.panelDropdown", function (t) {
                        x.$menuPanelDropdown.find("ul.dropdown").slideUp(),
                            x.$menuPanelDropdown.find("> a").attr("aria-expanded", "false"),
                            x.$menuPanelDropdown.removeClass("expanded"),
                            x.$menuPanelDropdown.find("ul.dropdown").attr("aria-hidden", "true"),
                            x.$menuPanelDropdown.find("ul.dropdown a").attr("tabindex", "-1"),
                            e(this).find("ul.dropdown").is(":visible") ||
                                (e(this).find("> a").attr("aria-expanded", "true"),
                                e(this).find("ul.dropdown").slideDown(),
                                e(this).find("ul.dropdown").attr("aria-hidden", "false"),
                                e(this).find("ul.dropdown > li > a").attr("tabindex", "0"),
                                e(this).addClass("expanded"));
                    }),
                    x.$menuPanelDropdown.find("> a").on("click.panelDropdown", function (t) {
                        e(this).closest("li").hasClass("expanded") || t.preventDefault();
                    }),
                    x.$menuPanelDropdown.find("ul.dropdown li:not(.has-sub-dropdown) a").on("click.panelDropdown", function (e) {
                        e.stopPropagation();
                    }),
                    x.$menuPanelSubDropdown.on("click.panelDropdown", function (t) {
                        t.stopPropagation(),
                            x.$menuPanelSubDropdown.find("ul.sub-dropdown").slideUp(),
                            x.$menuPanelDropdown.find("> a").attr("aria-expanded", "false"),
                            x.$menuPanelSubDropdown.removeClass("expanded"),
                            x.$menuPanelDropdown.find("ul.sub-dropdown").attr("aria-hidden", "true"),
                            x.$menuPanelDropdown.find("ul.sub-dropdown a").attr("tabindex", "-1"),
                            e(this).find("ul.sub-dropdown").is(":visible") ||
                                (e(this).find("> a").attr("aria-expanded", "true"),
                                e(this).find("ul.sub-dropdown").slideDown(),
                                e(this).find("ul.sub-dropdown").attr("aria-hidden", "false"),
                                e(this).find("ul.sub-dropdown > li > a").attr("tabindex", "0"),
                                e(this).addClass("expanded"));
                    }),
                    x.$menuPanelSubDropdown.find("> a").on("click.panelDropdown", function (t) {
                        e(this).closest("li").hasClass("expanded") || t.preventDefault();
                    }),
                    x.$menuPanelSubDropdown.find("ul.sub-dropdown a").on("click.panelDropdown", function (e) {
                        e.stopPropagation();
                    }),
                    x.$promosSection.resize(StyleHatch.refreshFixTo);
            }
            function d() {
                clearTimeout(C.blurTimer),
                    x.$searchLink.off("click.search"),
                    x.$searchClose.off("click.search"),
                    x.$searchInput.off("blur.search"),
                    x.$menuLink.off("click.panel"),
                    x.$menuPanelDropdown.off("click.panelDropdown"),
                    x.$menuPanelDropdown.find("> a").off("click.panelDropdown"),
                    x.$menuPanelDropdown.find("ul.dropdown li:not(.has-sub-dropdown) a").off("click.panelDropdown"),
                    x.$menuPanelSubDropdown.off("click.panelDropdown"),
                    x.$menuPanelSubDropdown.find("> a").off("click.panelDropdown"),
                    x.$menuPanelSubDropdown.find("ul.sub-dropdown a").off("click.panelDropdown"),
                    x.$promosSection.removeResize(StyleHatch.refreshFixTo);
            }
            function u() {
                x.$subMenuLinks.each(function () {
                    var t = e(this),
                        o = t.text(),
                        a = wordWrapper(o, 24, "<br/>\n");
                    t.html(a);
                }),
                    h(x.$dropdownParent);
            }
            function p(t) {
                h(e("." + C.dropdownActiveClass)), t.addClass(C.dropdownActiveClass), t.find("> a").attr("aria-expanded", "true"), t.find("ul.dropdown").attr("aria-hidden", "false"), t.find("ul.dropdown > li > a").attr("tabindex", "0");
                var o = t.find("ul.dropdown");
                o.css({ left: "auto" });
                var a = o.offset().left + o.outerWidth(),
                    r = e(window).width() - 20,
                    n = x.$header.width(),
                    i = x.$header.find(".logo-nav-contain").offset().left;
                if ((n + 40 > e(window).width() && ((n = e(window).width()), (i = -20)), (r = n + i + 1), a > r)) {
                    var s = "-" + (a - r) + "px";
                    o.css({ left: s });
                }
                setTimeout(function () {
                    x.$body.on("touchstart", function () {
                        h(t);
                    });
                }, 250);
            }
            function h(e) {
                e.removeClass(C.dropdownActiveClass), x.$body.off("touchstart"), e.find("> a").attr("aria-expanded", "false"), e.find("ul.dropdown").attr("aria-hidden", "true"), e.find("ul.dropdown > li > a").attr("tabindex", "-1");
            }
            function f(t) {
                h(e("." + C.subDropdownActiveClass)),
                    t.addClass(C.subDropdownActiveClass),
                    t.find("> a").attr("aria-expanded", "true"),
                    t.find("ul.sub-dropdown").attr("aria-hidden", "false"),
                    t.find("ul.sub-dropdown > li > a").attr("tabindex", "0");
                var o = t.find(".sub-dropdown").offset().left + t.find(".sub-dropdown").width(),
                    a = e(window).width();
                o > a ? t.addClass("alternate-align") : t.removeClass("alternate-align");
            }
            function y(e) {
                e.removeClass(C.subDropdownActiveClass),
                    e.removeClass("alternate-align"),
                    e.find("> a").attr("aria-expanded", "false"),
                    e.find("ul.sub-dropdown").attr("aria-hidden", "true"),
                    e.find("ul.sub-dropdown > li > a").attr("tabindex", "-1");
            }
            function m() {
                x.$dropdownParent.on("mouseenter.dropdown touchstart.dropdown focusin.dropdown", function (t) {
                    var o = e(this);
                    o.hasClass(C.dropdownActiveClass) || (t.preventDefault(), p(o));
                }),
                    x.$dropdownParent.on("mouseleave.dropdown", function () {
                        h(e(this));
                    }),
                    x.$subMenuLinks.on("touchstart.dropdown", function (e) {
                        e.stopImmediatePropagation();
                    }),
                    x.$subDropdownParent.on("mouseenter.subdropdown touchstart.subdropdown focusin.subdropdown", function (t) {
                        var o = e(this);
                        o.hasClass(C.subDropdownActiveClass) || (t.preventDefault(), f(o));
                    }),
                    x.$subDropdownParent.on("mouseleave.subdropdown", function () {
                        y(e(this));
                    }),
                    x.$subDropdownParent.on("touchstart.subdropdown", function (e) {
                        e.stopImmediatePropagation();
                    }),
                    e("html").hasClass("touchevents") &&
                        x.$subDropdownParent.children("a").on("click", function (t) {
                            var o = e(this);
                            o.hasClass(C.subDropdownActiveClass) || (t.preventDefault(), f(o));
                        }),
                    x.$subMenuLinks.on("focusout.dropdown", function (t) {
                        null == t.relatedTarget
                            ? h(e("." + C.dropdownActiveClass))
                            : (e(t.target).closest("li.has-dropdown")[0] !== e(t.relatedTarget).closest("li.has-dropdown")[0] && h(e("." + C.dropdownActiveClass)),
                              e(t.target).closest("li.has-sub-dropdown")[0] !== e(t.relatedTarget).closest("li.has-sub-dropdown")[0] && y(e("." + C.subDropdownActiveClass)));
                    });
            }
            function g() {
                x.$dropdownParent.off("mouseenter.dropdown touchstart.dropdown focusin.dropdown"),
                    x.$dropdownParent.off("mouseleave.dropdown"),
                    x.$subMenuLinks.off("touchstart.dropdown"),
                    x.$subDropdownParent.off("mouseenter.subdropdown touchstart.subdropdown focusin.subdropdown"),
                    x.$subDropdownParent.off("mouseleave.subdropdown"),
                    x.$subDropdownParent.off("touchstart.subdropdown"),
                    x.$subMenuLinks.off("focusout.dropdown");
            }
            function v() {
                var t = x.$section,
                    o = x.$promosSection,
                    a = x.$header,
                    r = x.$util,
                    n = a.data("scroll-lock");
                if ("util" == n || "header" == n) {
                    var i = "";
                    o.data("fixtoInstance") && (i = "#shopify-section-promos"), r.fixTo("#page", { zIndex: 991, mind: i });
                }
                if ("header" == n) {
                    var i = "header.util";
                    o.data("fixtoInstance") && (i = "header.util, #shopify-section-promos"),
                        t.fixTo("#page", { zIndex: 990, mind: i }),
                        t.resize(function () {
                            e(this).width() <= 700 ? t.fixTo("stop") : t.fixTo("start");
                        });
                }
            }
            function b() {
                var t = e("header.util, #shopify-section-header").filter(function () {
                    return e(this).data("fixtoInstance");
                });
                t.length && t.fixTo("destroy");
            }
            function S() {
                o(), b(), v();
            }
            function w() {
                l(), d(), g(), b();
            }
            var T = {
                    htmlBody: "html, body",
                    body: "body",
                    page: "#page",
                    section: "#shopify-section-header",
                    promosSection: "#shopify-section-promos",
                    util: "header.util",
                    header: "header.site-header",
                    siteNav: "header.site-header ul.site-nav",
                    menuLink: ".menu-link",
                    menuPanel: "#menu.panel",
                    menuOverlay: ".mobile-menu-overlay",
                },
                C = {};
            C = { blurTimer: {}, blurTime: 2e3, slideSpeed: 300, dropdownActiveClass: "dropdown-hover", subDropdownActiveClass: "sub-dropdown-hover" };
            var x = {};
            return { init: t, unload: w, openSearch: r, closeSearch: n, togglePanelMenu: i, openPanelMenu: s, closePanelMenu: l, rebuildFixTo: S };
        })()),
        (StyleHatch.FooterSection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                StyleHatch.Footer.init(o);
            }
            return t;
        })()),
        (StyleHatch.FooterSection.prototype = e.extend({}, StyleHatch.FooterSection.prototype, {
            onUnload: function (e) {
                StyleHatch.Footer.unload(e);
            },
        })),
        (StyleHatch.Footer = (function () {
            function e(e) {
                var t = e.find("ul.nested-menu");
                t.initNestedMenu();
            }
            function t(e) {
                $nestedMenu.destroyNestedMenu();
            }
            return { init: e, unload: t };
        })()),
        (StyleHatch.SlideshowSection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                StyleHatch.Slideshow.init(o);
            }
            return t;
        })()),
        (StyleHatch.SlideshowSection.prototype = e.extend({}, StyleHatch.SlideshowSection.prototype, {
            onUnload: function (e) {
                StyleHatch.Slideshow.unload(e);
            },
            onBlockSelect: function (e) {
                StyleHatch.Slideshow.blockSelect(e);
            },
            onBlockDeselect: function (e) {
                StyleHatch.Slideshow.blockDeselect(e);
            },
        })),
        (StyleHatch.Slideshow = (function () {
            function t(t) {
                var o = t.find(".slideshow-carousel"),
                    a = 700,
                    r = o.find(".slide__item");
                e(window).on("resize", function () {
                    r.each(function (t) {
                        var o;
                        e(window).width() > a ? (o = e(this).find("img.slide__image-desktop")) : ((o = e(this).find("img.slide__image-mobile")), o.length < 1 && (o = e(this).find("img.slide__image-desktop"))),
                            o.hasClass("lazymanual") && (o.attr("src", o.attr("data-preload")).removeAttr("data-preload"), o.removeClass("lazymanual").addClass("lazyload"));
                    });
                }),
                    e(window).trigger("resize");
                var n = o.data("flickity-options");
                o.flickity(n), window.addEventListener("touchmove", function () {});
                var i = t.find(".slide__item-video");
                i.each(function () {
                    var t = e(this).find(".slide__item-image"),
                        o = e(this).data("video-id"),
                        a = e(this).data("mobile-autoplay"),
                        r = 0;
                    a && (r = 1),
                        t.YTPlayer({
                            fitToBackground: !1,
                            videoId: o,
                            repeat: !0,
                            mute: !0,
                            playerVars: { rel: 0, mute: 1, playsinline: r, autoplay: 1 },
                            callback: function () {
                                e(window).trigger("resize");
                            },
                        });
                });
            }
            function o(t) {
                var o = e("#block-" + t.detail.blockId),
                    a = o.closest(".slideshow-carousel"),
                    r = o.data("slide-index");
                a.flickity("pausePlayer"), a.flickity("select", r, !0, !0), a.find("img").removeClass(".lazymanual").addClass("lazyload");
            }
            function a(t) {
                var o = e("#block-" + t.detail.blockId),
                    a = o.closest(".slideshow-carousel");
                a.flickity("unpausePlayer");
            }
            function r(t) {
                var o = e(".slideshow-" + t.detail.sectionId),
                    a = o.find(".slideshow-carousel");
                a.flickity("destroy");
                var r = o.find(".slide__item-video .slide__item-image");
                r.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"),
                    e(window).off("resize.YTplayer" + r.ID),
                    e(window).off("scroll.YTplayer" + r.ID),
                    (r.$body = null),
                    (r.$node = null),
                    (r.$YTPlayerString = null),
                    (r.player = null);
            }
            return { init: t, unload: r, blockSelect: o, blockDeselect: a };
        })()),
        (StyleHatch.HeroVideoSection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                StyleHatch.HeroVideo.init(o);
            }
            return t;
        })()),
        (StyleHatch.HeroVideoSection.prototype = e.extend({}, StyleHatch.HeroVideoSection.prototype, {
            onUnload: function (e) {
                StyleHatch.HeroVideo.unload(e);
            },
        })),
        (StyleHatch.HeroVideo = (function () {
            function t(e) {
                var t = e.find(".wrapper"),
                    o = e.data("video-id"),
                    a = e.data("mobile-autoplay"),
                    r = 0;
                a && (r = 1), t.removeData("ytPlayer"), t.YTPlayer({ fitToBackground: !1, videoId: o, repeat: !0, mute: !0, playerVars: { rel: 0, mute: 1, playsinline: r, autoplay: 1 } });
            }
            function o(t) {
                var o = e(".slideshow-" + t.detail.sectionId),
                    a = o.find(".wrapper");
                a.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"), a.find(".ytplayer-container .ytplayer-shield").remove();
            }
            return { init: t, unload: o };
        })()),
        (StyleHatch.Maps = (function () {
            function t(t) {
                (this.$container = e(t)),
                    (this.$map = this.$container.find(u.map)),
                    (this.key = this.$map.data("api-key")),
                    this.key != i && ((i = this.key), (n = null), (s = !0)),
                    "undefined" != typeof this.key &&
                        ("loaded" === n
                            ? this.createMap()
                            : (l.push(this),
                              "loading" !== n &&
                                  ((n = "loading"),
                                  ("undefined" == typeof window.google || s) &&
                                      e.getScript("https://maps.googleapis.com/maps/api/js?key=" + this.key).then(function () {
                                          (n = "loaded"), (s = !1), o();
                                      }))));
            }
            function o() {
                e.each(l, function (e, t) {
                    t.createMap();
                });
            }
            function a(t) {
                var o = e.Deferred(),
                    a = new google.maps.Geocoder(),
                    r = t.data("address-setting");
                return (
                    a.geocode({ address: r }, function (e, t) {
                        t !== google.maps.GeocoderStatus.OK && o.reject(t), o.resolve(e);
                    }),
                    o
                );
            }
            var r = { zoom: 14 },
                n = null,
                i = null,
                s = !1,
                l = [],
                c = {
                    standard: [],
                    silver: [
                        { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
                        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                        { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
                        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
                        { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
                        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
                        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
                        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
                        { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
                        { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
                        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
                        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
                        { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
                        { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
                        { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
                        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
                    ],
                    retro: [
                        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
                        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
                        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
                        { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#c9b2a6" }] },
                        { featureType: "administrative.land_parcel", elementType: "geometry.stroke", stylers: [{ color: "#dcd2be" }] },
                        { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#ae9e90" }] },
                        { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
                        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
                        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#93817c" }] },
                        { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#a5b076" }] },
                        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#447530" }] },
                        { featureType: "road", elementType: "geometry", stylers: [{ color: "#f5f1e6" }] },
                        { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#fdfcf8" }] },
                        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#f8c967" }] },
                        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#e9bc62" }] },
                        { featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#e98d58" }] },
                        { featureType: "road.highway.controlled_access", elementType: "geometry.stroke", stylers: [{ color: "#db8555" }] },
                        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#806b63" }] },
                        { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
                        { featureType: "transit.line", elementType: "labels.text.fill", stylers: [{ color: "#8f7d77" }] },
                        { featureType: "transit.line", elementType: "labels.text.stroke", stylers: [{ color: "#ebe3cd" }] },
                        { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
                        { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#b9d3c2" }] },
                        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#92998d" }] },
                    ],
                    dark: [
                        { elementType: "geometry", stylers: [{ color: "#212121" }] },
                        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                        { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                        { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
                        { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },
                        { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
                        { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
                        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
                        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#181818" }] },
                        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
                        { featureType: "poi.park", elementType: "labels.text.stroke", stylers: [{ color: "#1b1b1b" }] },
                        { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },
                        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
                        { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#373737" }] },
                        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
                        { featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#4e4e4e" }] },
                        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
                        { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                        { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
                        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3d3d3d" }] },
                    ],
                    night: [
                        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
                        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
                        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
                        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
                        { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
                        { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
                        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
                        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
                        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
                        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
                        { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
                        { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
                        { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
                        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
                        { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] },
                    ],
                    aubergine: [
                        { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
                        { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
                        { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
                        { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
                        { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#64779e" }] },
                        { featureType: "administrative.province", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
                        { featureType: "landscape.man_made", elementType: "geometry.stroke", stylers: [{ color: "#334e87" }] },
                        { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#023e58" }] },
                        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#283d6a" }] },
                        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#6f9ba5" }] },
                        { featureType: "poi", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
                        { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#023e58" }] },
                        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#3C7680" }] },
                        { featureType: "road", elementType: "geometry", stylers: [{ color: "#304a7d" }] },
                        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
                        { featureType: "road", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
                        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2c6675" }] },
                        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#255763" }] },
                        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#b0d5ce" }] },
                        { featureType: "road.highway", elementType: "labels.text.stroke", stylers: [{ color: "#023e58" }] },
                        { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
                        { featureType: "transit", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
                        { featureType: "transit.line", elementType: "geometry.fill", stylers: [{ color: "#283d6a" }] },
                        { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#3a4762" }] },
                        { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] },
                        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4e6d70" }] },
                    ],
                },
                d = { addressNoResults: StyleHatch.Strings.addressNoResults, addressQueryLimit: StyleHatch.Strings.addressQueryLimit, addressError: StyleHatch.Strings.addressError, authError: StyleHatch.Strings.authError },
                u = { section: '[data-section-type="maps"]', map: "[data-map]", mapOverlay: "[data-map-overlay]" },
                p = { mapError: "map-selection--load-error", errorMsg: "map-section__errors errors text-center" };
            return (
                (window.gm_authFailure = function () {
                    return Shopify.designMode
                        ? (e(u.section).addClass(p.mapError), e(u.map).remove(), void e(u.mapOverlay).after('<div class="' + p.errorMsg + '">' + StyleHatch.Strings.authError + "</div>"))
                        : void log("Google Maps authentication error", window.google, n);
                }),
                (t.prototype = e.extend({}, t.prototype, {
                    createMap: function () {
                        var e = this.$map,
                            t = e.data("map-style");
                        return a(e)
                            .then(
                                function (o) {
                                    var a = { zoom: r.zoom, center: o[0].geometry.location, draggable: !1, clickableIcons: !1, scrollwheel: !1, disableDoubleClickZoom: !0, disableDefaultUI: !0, styles: c[t] },
                                        n = (this.map = new google.maps.Map(e[0], a)),
                                        i = (this.center = n.getCenter());
                                    new google.maps.Marker({ map: n, position: n.getCenter() });
                                    google.maps.event.addDomListener(
                                        window,
                                        "resize",
                                        slate.utils.debounce(function () {
                                            google.maps.event.trigger(n, "resize"), n.setCenter(i), e.removeAttr("style");
                                        }, 250)
                                    );
                                }.bind(this)
                            )
                            .fail(function () {
                                var t;
                                switch (status) {
                                    case "ZERO_RESULTS":
                                        t = d.addressNoResults;
                                        break;
                                    case "OVER_QUERY_LIMIT":
                                        t = d.addresQueryLimit;
                                        break;
                                    case "REQUEST_DENIED":
                                        t = d.authError;
                                        break;
                                    default:
                                        t = d.addressError;
                                }
                                Shopify.designMode &&
                                    e
                                        .parent()
                                        .addClass(p.mapError)
                                        .append('<div class="' + p.errorMsg + '">' + t + "</div>");
                            });
                    },
                    onUnload: function () {
                        0 !== this.$map.length && google.maps.event.clearListeners(this.map, "resize");
                    },
                })),
                t
            );
        })()),
        (StyleHatch.PageSection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                StyleHatch.Page.init(o);
            }
            return t;
        })()),
        (StyleHatch.Page = (function () {
            function e(e) {
                e.fitVids();
            }
            function t(e) {}
            return { init: e, unload: t };
        })()),
        (StyleHatch.FeaturedCollectionSection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                o.productBox(), StyleHatch.currencyConverter && StyleHatch.CurrencyConverter.init();
            }
            return t;
        })()),
        (StyleHatch.FeaturedCollectionSection.prototype = e.extend({}, StyleHatch.FeaturedCollectionSection.prototype, {
            onUnload: function (t) {
                var o = e("#section-" + t.detail.sectionId);
                o.attr("data-section-id");
                o.destroyProductBox();
            },
        })),
        (StyleHatch.SimpleCollectionSection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                o.productBox(), StyleHatch.currencyConverter && StyleHatch.CurrencyConverter.init();
            }
            return t;
        })()),
        (StyleHatch.SimpleCollectionSection.prototype = e.extend({}, StyleHatch.SimpleCollectionSection.prototype, {
            onUnload: function (t) {
                var o = e("#section-" + t.detail.sectionId);
                o.attr("data-section-id");
                o.destroyProductBox();
            },
        })),
        (StyleHatch.instagrams = {}),
        (StyleHatch.InstagramSection = (function () {
            function t(t) {
                var o = (this.$container = e(t)),
                    a = o.attr("data-section-id"),
                    r = (this.instagram = "#Instagram-" + a);
                if (e("html").hasClass("lt-ie9")) return !1;
                var n = o.find(".instagram-container"),
                    i = o.find("header a.button, footer a.button"),
                    s = o.data("image-count"),
                    l = o.data("instagram-access-token"),
                    c = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + l + "&count=20",
                    d = 432e5,
                    u = StyleHatch.Strings.instagramAddToken,
                    p = StyleHatch.Strings.instagramInvalidToken,
                    h = StyleHatch.Strings.instagramRateLimitToken,
                    f = function () {
                        l
                            ? e.ajax({
                                  url: c,
                                  dataType: "jsonp",
                                  timeout: 5e3,
                                  success: function (e) {
                                      switch (e.meta.code) {
                                          case 400:
                                              Shopify.designMode && (n.attr("data-helper-text", p), storeWithExpiration.set(l, e, d), o.show());
                                              break;
                                          case 429:
                                              Shopify.designMode && (n.attr("data-helper-text", h), o.show());
                                              break;
                                          default:
                                              y(e), storeWithExpiration.set(l, e, d);
                                      }
                                  },
                              })
                            : Shopify.designMode && (n.attr("data-helper-text", u), o.show());
                    },
                    y = function (t) {
                        if (t.data) {
                            if (t.data.length < s) {
                                var a = t.data.length,
                                    r = s,
                                    l = r - (r - a);
                                (s = t.data.length),
                                    o.find(".box").each(function (t) {
                                        t >= l && e(this).hide();
                                    });
                            }
                            for (var c = 0; c < s; c++) {
                                var d = t.data[c].images,
                                    u = d.thumbnail.url,
                                    p = d.thumbnail.width,
                                    h = d.low_resolution.url,
                                    f = d.low_resolution.width,
                                    y = d.standard_resolution.url,
                                    m = d.standard_resolution.width,
                                    g = t.data[c].link,
                                    v = t.data[c].likes.count,
                                    b = t.data[c].comments.count,
                                    S = "";
                                t.data[c].caption && (S = t.data[c].caption.text);
                                var w = o.find(".box-" + c),
                                    T = w.find("figure > a"),
                                    C = w.find("figure > a, li > a"),
                                    x = w.find("figcaption > p"),
                                    H = w.find("a.likes span.label"),
                                    $ = w.find("a.comments span.label");
                                T.html('<div class="card__image lazyload">');
                                var k = T.find(".card__image");
                                k.attr("data-sizes", "auto"), k.attr("data-bgset", u + " " + p + "w, " + h + " " + f + "w, " + y + " " + m + "w"), C.attr("href", g), x.html(S), H.text(v), $.text(b);
                            }
                            var _ = "https://www.instagram.com/" + t.data[0].user.username;
                            i.attr("href", _), i.attr("target", "_blank"), o.show(), n.addClass("loaded");
                        }
                    };
                if (storeWithExpiration.get(l) && !Shopify.designMode) {
                    var m = storeWithExpiration.get(l);
                    y(m);
                } else f();
                StyleHatch.instagrams[r] = this;
            }
            return t;
        })()),
        (StyleHatch.InstagramSection.prototype = e.extend({}, StyleHatch.InstagramSection.prototype, {
            onUnload: function () {
                delete StyleHatch.instagrams[this.instagram];
            },
        })),
        (StyleHatch.GenericSection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                StyleHatch.cacheSelectors();
            }
            return t;
        })()),
        (StyleHatch.Product = (function () {
            function t(t) {
                var o = (this.$container = e(t)),
                    a = o.attr("data-section-id");
                if (
                    ((this.settings = {
                        enableHistoryState: o.data("enable-history-state") || !1,
                        imageSize: "394x",
                        imageZoomSize: null,
                        namespace: ".slideshow-" + a,
                        sectionId: a,
                        zoomEnabled: !1,
                        lightboxEnabled: !1,
                        productImageLightboxData: [],
                    }),
                    (this.selectors = {
                        addToCart: "#AddToCart-" + a,
                        addToCartText: "#AddToCartText-" + a,
                        comparePrice: "#ComparePrice-" + a,
                        originalPrice: "#ProductPrice-" + a,
                        SKU: ".variant-sku",
                        originalSelectorId: "#ProductSelect-" + a,
                        productFeaturedImage: "#FeaturedImage-" + a,
                        productImageWrap: ".featured-container-" + a,
                        productPrices: ".product-single__price-" + a,
                        productThumbImages: ".product-single__thumbnail--" + a,
                        productPhoto: "#ProductPhoto-" + a,
                        productImage: "#ProductImage-" + a,
                        productThumbs: "#ProductThumbs-" + a,
                        quantityWrap: ".quantity-" + a,
                        quantity: ".quantity-select-" + a,
                        cartError: ".cart-error-" + a,
                        singleOptionSelector: ".single-option-selector-" + a,
                        cartButtons: "#CartButtons-" + a,
                        paymentButtonContainer: "#PaymentButtonContainer-" + a,
                    }),
                    e("#ProductJson-" + a).html())
                ) {
                    (this.productSingleObject = JSON.parse(document.getElementById("ProductJson-" + a).innerHTML)),
                        (this.settings.zoomEnabled = e(this.selectors.productImageWrap).hasClass("featured-zoom")),
                        (this.settings.lightboxEnabled = e(this.selectors.productImageWrap).data("lightbox")),
                        o.productBox(),
                        StyleHatch.currencyConverter && StyleHatch.CurrencyConverter.init(),
                        this._initVariants(),
                        this._initQuanitySelect(),
                        this._initImageSwitch();
                    var r = this;
                    setTimeout(function () {
                        theme.Images.preload(r.productSingleObject.images, r.settings.imageSize);
                    }, 3e3);
                }
            }
            function o(e) {
                e.easyZoom();
            }
            function a(e) {
                var t = e.easyZoom().data("easyZoom");
                t.teardown();
            }
            return (
                (t.prototype = e.extend({}, t.prototype, {
                    _initVariants: function () {
                        var e = {
                            $container: this.$container,
                            enableHistoryState: this.$container.data("enable-history-state") || !1,
                            singleOptionSelector: this.selectors.singleOptionSelector,
                            originalSelectorId: this.selectors.originalSelectorId,
                            product: this.productSingleObject,
                        };
                        (this.variants = new slate.Variants(e)),
                            this.$container.on("variantChange" + this.settings.namespace, this._updateAddToCart.bind(this)),
                            this.$container.on("variantImageChange" + this.settings.namespace, this._updateImages.bind(this)),
                            this.$container.on("variantPriceChange" + this.settings.namespace, this._updatePrice.bind(this)),
                            this.$container.on("variantSKUChange" + this.settings.namespace, this._updateSKU.bind(this));
                    },
                    _initQuanitySelect: function () {
                        var t = e(this.selectors.quantity);
                        t.each(function () {
                            var t = e(this),
                                o = t.find(".adjust-minus"),
                                a = t.find(".adjust-plus"),
                                r = t.find("input.quantity"),
                                n = r.val();
                            o.on("click", function (e) {
                                (n = r.val()), n > 1 && (n--, r.val(n)), e.preventDefault();
                            }),
                                a.on("click", function (e) {
                                    (n = r.val()), n++, r.val(n), e.preventDefault();
                                });
                        });
                    },
                    _initImageSwitch: function () {
                        if ((!Modernizr.touchevents && this.settings.zoomEnabled && o(e(this.selectors.productImageWrap)), this.settings.lightboxEnabled)) {
                            var t = this.productSingleObject.images;
                            (StyleHatch.productImageLightboxData = this.settings.productImageLightboxData),
                                (StyleHatch.$productPhoto = e(this.selectors.productPhoto)),
                                e(window)
                                    .on("resize", function () {
                                        var o = slate.utils.defaultTo(window.devicePixelRatio, 1),
                                            a = e(window).width(),
                                            r = Math.floor(o * a);
                                        StyleHatch.productImageLightboxData = [];
                                        for (var n = 0; n < t.length; n++) {
                                            var i = t[n],
                                                s = theme.Images.getSizedImageUrl(i, r + "x"),
                                                l = { src: s };
                                            StyleHatch.productImageLightboxData.push(l);
                                        }
                                    })
                                    .trigger("resize");
                            var a = e(this.selectors.productImageWrap);
                            e(this.selectors.productImageWrap)
                                .find("a")
                                .magnificPopup({
                                    type: "image",
                                    mainClass: "mfp-with-zoom",
                                    items: StyleHatch.productImageLightboxData,
                                    gallery: { enabled: !0 },
                                    callbacks: {
                                        beforeOpen: function (e) {
                                            var t = parseInt(a.find("img").attr("data-position"));
                                            this.goTo(t);
                                        },
                                    },
                                });
                        }
                        if (e(this.selectors.productThumbImages).length) {
                            var r = this;
                            e(this.selectors.productThumbImages).on("click", function (t) {
                                t.preventDefault();
                                var o = e(this);
                                o.find("img").data("img"), o.find("img").data("highres");
                                r._updateResponsiveImage(o);
                            });
                        }
                      
                                           
                      let touchstartX = 0;
                      let touchstartY = 0;
                      let touchendX = 0;
                      let touchendY = 0;

                      const gestureZone = document.getElementsByClassName("productimage-limit")[0];
                      
                      
                      gestureZone.addEventListener('touchstart', function(event) {
                        touchstartX = event.changedTouches[0].screenX;
                        touchstartY = event.changedTouches[0].screenY;
                      }, false);

                      gestureZone.addEventListener('touchend', function(event) {
                        touchendX = event.changedTouches[0].screenX;
                        touchendY = event.changedTouches[0].screenY;
                        handleGesture();
                      }, false); 

                      function handleGesture() {
                        if (touchendX < touchstartX) {
//                           Left
                                                  
                           var imageIndex = parseInt(
                            gestureZone.getElementsByTagName("img")[0].getAttribute('data-position')
                          ) + 1;          
                          
                          var newThumb = document.body.querySelector('[data-position="' + imageIndex +'"]');
                          
                          var countImages = document.body.querySelectorAll('[data-position]').length - 1;
							
                          if (countImages > 3) {
                          	var countThumbs = parseInt(countImages / 2 - 1);
                          } else {
                            var countThumbs = countImages;                          
                          }
                          
                          if (imageIndex >= countThumbs) {
                            if (countThumbs > 4) {
                            	newThumb = document.body.querySelectorAll('[data-position]')[4];
                            } else {
                              newThumb = document.body.querySelectorAll('[data-position="0"]')[0];
                            }
                          } 
                        }

                        if (touchendX > touchstartX) {
//                           Right
                          var imageIndex = parseInt(
                            gestureZone.getElementsByTagName("img")[0].getAttribute('data-position')
                          ) - 1;
                          
                          
                          var newThumb = document.body.querySelector('[data-position="' + imageIndex +'"]')
                          
                          if (imageIndex < 0) {
                            newThumb = document.body.querySelectorAll('[data-position]');
                            newThumb = newThumb[newThumb.length - 1];
                          } 
                        }

                        if (touchendY < touchstartY) {
//                           Up
                        }

                        if (touchendY > touchstartY) {
//                           Down
                        }

                        if (touchendY === touchstartY) {
//                           Tap
                        }
                       
                        newThumb.click();

                      }
                      
                    
                      
                      },
                  
                  
                    _updateResponsiveImage: function (t) {
                      		var r = t,
                            n = r.find("img"),
                            i = e(this.selectors.productImage),
                            s = i.closest(".card__image-container"),
                            l = i.closest(".featured-container"),
                            c = i.closest(".productimage-limit");
                        i.attr({
                            src: n.data("default"),
                            alt: n.attr("alt"),
                            srcset: "",
                            "data-src": n.data("src-pattern"),
                            "data-aspectratio": n.data("aspectratio"),
                            "data-position": n.data("position"),
                            "data-max-width": n.data("max-width"),
                            "data-widths": "[" + n.data("widths") + "]",
                            "data-id": i.data("id"),
                            "data-sizes": i.data("sizes"),

                        }),
                            c.css({ "max-width": n.data("max-width") + "px" }),
                            this.settings.zoomEnabled && a(l),
                            s.attr("href", r.attr("href")),
                            !Modernizr.touchevents && this.settings.zoomEnabled && (s.data("zoom", r.attr("href")), o(l));
                        var d = "active";
                        e(this.selectors.productThumbImages).removeClass(d), r.addClass(d);
                    },
                    _updateAddToCart: function (t) {
                        var o = t.variant;
                        o
                            ? (e(this.selectors.cartError).hide(),
                              e(this.selectors.productPrices).removeClass("visibility-hidden").attr("aria-hidden", "true"),
                              o.available
                                  ? (e(this.selectors.addToCart).removeClass("disabled").prop("disabled", !1),
                                    e(this.selectors.addToCartText).text(StyleHatch.Strings.addToCart),
                                    e(this.selectors.quantityWrap).show(),
                                    e(this.selectors.cartButtons).addClass("cart-buttons__enabled"))
                                  : (e(this.selectors.addToCart).addClass("disabled").prop("disabled", !0),
                                    e(this.selectors.addToCartText).text(StyleHatch.Strings.soldOut),
                                    e(this.selectors.quantityWrap).hide(),
                                    e(this.selectors.cartButtons).removeClass("cart-buttons__enabled")))
                            : (e(this.selectors.addToCart).addClass("disabled").prop("disabled", !0),
                              e(this.selectors.addToCartText).text(StyleHatch.Strings.soldOut),
                              e(this.selectors.productPrices).addClass("visibility-hidden").attr("aria-hidden", "false"),
                              e(this.selectors.quantityWrap).hide(),
                              e(this.selectors.cartButtons).removeClass("cart-buttons__enabled"));
                    },
                    _updateImages: function (t) {
                        var o,
                            a = t.variant;
                        theme.Images.getSizedImageUrl(a.featured_image.src, this.settings.imageSize);
                        this.settings.zoomEnabled && (o = theme.Images.getSizedImageUrl(a.featured_image.src, this.settings.imageZoomSize));
                        var r = e(this.selectors.productThumbImages + '[data-image-id="' + a.featured_image.id + '"]');
                        this._updateResponsiveImage(r);
                    },
                    _updatePrice: function (t) {
                        var o = t.variant;
                        e(this.selectors.originalPrice).html(theme.Currency.formatMoney(o.price, StyleHatch.currencyFormat)),
                            StyleHatch.currencyConverter &&
                                (removeDataAttributes(e(this.selectors.originalPrice)), Currency.convertAll(StyleHatch.shopCurrency, e("[name=currencies]").val()), e(".selected-currency").text(Currency.currentCurrency)),
                            o.compare_at_price > o.price
                                ? (e(this.selectors.comparePrice).find("span.money").html(theme.Currency.formatMoney(o.compare_at_price, StyleHatch.currencyFormat)), e(this.selectors.comparePrice).show())
                                : e(this.selectors.comparePrice).hide();
                    },
                    _updateSKU: function (t) {
                        var o = t.variant;
                        e(this.selectors.SKU).html(o.sku);
                    },
                    onUnload: function () {
                        this.$container.off(this.settings.namespace),
                            e.magnificPopup.close(),
                            this.settings.zoomEnabled && a(e(this.selectors.productImageWrap)),
                            StyleHatch.ajaxCartEnable && StyleHatch.AjaxCart.unload(),
                            this.$container.destroyProductBox();
                    },
                })),
                t
            );
        })()),
        (StyleHatch.Collection = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                (this.$sortSelect = e(a.sortSelection, o)),
                    (this.defaultSort = this._getDefaultSortValue()),
                    (this.$viewButton = e(a.viewChange)),
                    this.$sortSelect.on("change", this._onSortChange.bind(this)),
                    this.$viewButton.on("click", this._onViewChange),
                    (this.$productbox = e(a.productBox, o)),
                    this._initSidebar(),
                    this._initAdvancedTags(),
                    o.productBox(),
                    StyleHatch.currencyConverter && StyleHatch.CurrencyConverter.init();
            }
            var o = { SORT_BY: "sort_by", DEFAULT_SORT: "title-ascending", VIEW: "view" },
                a = {
                    sortSelection: "#SortBy",
                    defaultSort: ".sort-by__default-sort",
                    viewChange: ".change-view",
                    advancedFilter: ".advanced-filter a",
                    filterCollection: ".mobile-aside-container > a.button.simple",
                    mobileAside: ".mobile-aside-container aside",
                    productBox: ".box.product .image-table",
                    nestedMenu: "ul.nested-menu",
                };
            return (
                (t.prototype = e.extend({}, t.prototype, {
                    _onSortChange: function (e) {
                        var t = "";
                        (this.sort = this._getSortValue()), this.sort !== this.defaultSort && (t = [o.SORT_BY + "=" + this.sort]);
                        var a = document.URL,
                            r = a.indexOf("?") > -1;
                        if (r) document.location.href = replaceUrlParam(a, o.SORT_BY, this.sort);
                        else {
                            var n = (document.location.search = t.length ? "?" + t : "");
                            document.location.href = this.$filterSelect.val() + n;
                        }
                    },
                    _getSortValue: function () {
                        return this.$sortSelect.val() || this.defaultSort;
                    },
                    _getDefaultSortValue: function () {
                        return e(a.defaultSort, this.$container).val() || o.DEFAULT_SORT;
                    },
                    _onViewChange: function (t) {
                        var o = e(this).data("view"),
                            a = document.URL,
                            r = a.indexOf("?") > -1;
                        r ? (window.location = replaceUrlParam(a, "view", o)) : (window.location = a + "?view=" + o), t.preventDefault();
                    },
                    _initSidebar: function () {
                        e(a.filterCollection).on("click", function (t) {
                            e(a.mobileAside).slideToggle(), t.preventDefault();
                        }),
                            this.$container.find(a.nestedMenu).initNestedMenu();
                    },
                    _initAdvancedTags: function () {
                        var t,
                            o,
                            r,
                            n,
                            i = e(a.advancedFilter);
                        i.on("click", function (a) {
                            (t = e(this).parent()),
                                (o = t.data("group")),
                                (r = t.data("handle")),
                                (n = e('.active[data-group="' + o + '"]')),
                                !t.hasClass("active") && n.length && (a.preventDefault(), (location.href = location.href.replace(n.data("handle"), r).replace(/(&page=\d+)|(page=\d+&)|(\?page=\d+$)/, "")));
                        });
                    },
                    onUnload: function () {
                        this.$sortSelect.off("change"), this.$viewButton.off("click"), e(a.advancedFilter).off("click"), this.$container.destroyProductBox(), this.$container.find(a.nestedMenu).destroyNestedMenu();
                    },
                })),
                t
            );
        })()),
        (StyleHatch.ListCollections = (function () {
            function t(t) {
                var a = (this.$container = e(t)),
                    r = (a.attr("data-section-id"), a.data("layout"));
                a.find(".card__image");
                (this.$productbox = e(o.productBox, a)), "preview" == r && a.productBox(), StyleHatch.currencyConverter && StyleHatch.CurrencyConverter.init();
            }
            var o = { productBox: ".box .image-table" };
            return (
                (t.prototype = e.extend({}, t.prototype, {
                    onUnload: function () {
                        $container.destroyProductBox();
                    },
                })),
                t
            );
        })()),
        (StyleHatch.BlogArticle = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                this._initSidebar(), StyleHatch.videoLayout();
            }
            var o = { filterCollection: ".mobile-aside-container > a.button.simple", mobileAside: ".mobile-aside-container aside", nestedMenu: "ul.nested-menu" };
            return (
                (t.prototype = e.extend({}, t.prototype, {
                    _initSidebar: function () {
                        e(o.filterCollection).on("click", function (t) {
                            e(o.mobileAside).slideToggle(), t.preventDefault();
                        }),
                            this.$container.find(o.nestedMenu).initNestedMenu();
                    },
                    onUnload: function () {
                        e(o.filterCollection).off("click"), this.$container.find(o.nestedMenu).destroyNestedMenu();
                    },
                })),
                t
            );
        })()),
        (StyleHatch.Password = (function () {
            function t(t) {
                var o = (this.$container = e(t)),
                    a = (o.attr("data-section-id"), e("#login_form"));
                e(".login-popup").magnificPopup({
                    type: "inline",
                    midClick: !0,
                    mainClass: "mfp-fade",
                    closeBtnInside: !1,
                    callbacks: {
                        afterClose: function () {
                            e("a").blur(), a.find(".errors").remove();
                        },
                    },
                }),
                    e("#mc-embedded-subscribe-form").on("submit", function () {
                        e("p.signup-message").hide(), e("p.thanks-message").show(), e(this).find(".input-row").hide();
                    }),
                    a.find(".errors").length > 0 && e(".login-popup").magnificPopup("open");
            }
            return (
                (t.prototype = e.extend({}, t.prototype, {
                    onUnload: function () {
                        e.magnificPopup.close(), e("#mc-embedded-subscribe-form").off("submit");
                    },
                })),
                t
            );
        })()),
        (StyleHatch.Cart = (function () {
            function t(t) {
                var o = (this.$container = e(t));
                o.attr("data-section-id");
                StyleHatch.quantitySelect();
            }
            return (t.prototype = e.extend({}, t.prototype, { onUnload: function () {} })), t;
        })()),
        (StyleHatch.AjaxCart = (function () {
            function t() {
                p = {
                    $body: e(d.body),
                    $util: e(d.util),
                    $cartPreview: e(d.cartPreview),
                    $addToCartForm: e(d.addToCartForm),
                    $addToCartButton: e(d.addToCartButton),
                    $cartButton: e(d.cartButton),
                    $cartCount: e(d.cartCount),
                    $cartCost: e(d.cartCost),
                };
            }
            function o() {
                t(), s();
            }
            function a(t) {
                var t = t,
                    o = t.find(".cart-error"),
                    a = t.find("[data-AddToCartText]").html(),
                    r = (t.find("[data-AddToCartText]").attr("data-added"), t.find("[data-AddToCartText]").attr("data-adding"));
                return (
                    t.find("[data-AddToCart]").addClass("added").prop("disabled", !0),
                    t.find("[data-AddToCartText]").html(r),
                    o.hide(),
                    e
                        .post(
                            u.addURL,
                            t.serialize(),
                            function (o) {
                                var r = o;
                                e.get(
                                    u.cartURL,
                                    function (e) {
                                        var o = e;
                                        n(o), i(r, o);
                                        var s;
                                        s = setTimeout(function () {
                                            t.find("[data-AddToCart]").removeClass("added").prop("disabled", !1), t.find("[data-AddToCartText]").html(a);
                                        }, 500);
                                    },
                                    "json"
                                );
                            },
                            "text"
                        )
                        .error(function (e) {
                            if ("undefined" != typeof e && "undefined" != typeof e.status) {
                                var r = JSON.parse(e.responseText);
                                o.html("<strong>" + r.message + ":</strong> <em>" + r.description + "<em>"), o.slideDown();
                            }
                            var n;
                            n = setTimeout(function () {
                                t.find("[data-AddToCart]").removeClass("added").prop("disabled", !1), t.find("[data-AddToCartText]").html(a);
                            }, 500);
                        }),
                    !1
                );
            }
            function r() {
                e.post(u.clearURL);
            }
            function n(e) {
                var t = (p.$cartButton, p.$cartCount),
                    o = p.$cartCost,
                    a = e.item_count,
                    r = theme.Currency.formatMoney(e.total_price, StyleHatch.currencyFormat);
                t.text(a), o.removeClass("money"), o.html('<span class="money">' + r + "</span>"), StyleHatch.currencyConverter && Currency.convertAll(StyleHatch.shopCurrency, jQuery("[name=currencies]").val());
            }
            function i(t, o) {
                var a = p.$util,
                    r = p.$cartPreview;
                clearTimeout(p.hideCartPreview), p.$cartPreview.hide();
                var n = o.item_count,
                    i = theme.Currency.formatMoney(o.total_price, StyleHatch.currencyFormat),
                    t = JSON.parse(t),
                    s = t.product_title,
                    l = t.variant_options,
                    c = t.image,
                    d = t.url,
                    u = theme.Currency.formatMoney(t.price, StyleHatch.currencyFormat),
                    h = (t.quantity, theme.Currency.formatMoney(t.line_price, StyleHatch.currencyFormat), r.find(".product-image").empty());
                h.append('<img src="' + c + '" alt="' + s + '">'), h.attr("href", d);
                var f = r.find(".product-title");
                f.html(s), f.attr("href", d);
                var y = r.find(".product-variant").empty();
                e.each(l, function () {
                    var e = this;
                    e.toLowerCase().indexOf("default title") < 0 ? (y.show(), y.append("<li>" + e + "</li>")) : y.hide();
                });
                var m = r.find(".product-price");
                m.removeClass("money"), m.html('<span class="money">' + u + "</span>");
                var g = r.find(".item-count");
                g.text(n), n > 1 ? (r.find(".count.plural").show(), r.find(".count.singular").hide()) : (r.find(".count.plural").hide(), r.find(".count.singular").show());
                var v = r.find(".total-price");
                v.html('<span class="money">' + i + "</span>");
                var b = a.height();
                r.css({ top: b }),
                    r.fadeIn(300),
                    (p.hideCartPreview = setTimeout(function () {
                        r.fadeOut(300);
                    }, 6e3)),
                    r.find("a.continue-shopping").on("click", function (e) {
                        r.fadeOut(300), e.preventDefault();
                    }),
                    StyleHatch.currencyConverter && Currency.convertAll(StyleHatch.shopCurrency, jQuery("[name=currencies]").val());
            }
            function s() {
                p.$addToCartForm.each(function () {
                    e(this).on("submit", function (t) {
                        var o = e(this);
                        a(o), t.preventDefault();
                    });
                });
            }
            function l() {
                p.$addToCartForm.off("submit");
            }
            function c() {
                l(), clearTimeout(p.hideCartPreview), p.$cartPreview.hide();
            }
            var d = {
                    body: "body",
                    util: "header.util",
                    cartPreview: "header.util .cart-preview",
                    addToCartForm: "[data-AddToCartForm] > form",
                    addToCartButton: "[data-AddToCartForm]",
                    cartButton: "[data-CartButton]",
                    cartCount: "#CartCount",
                    cartCost: "#CartCost",
                },
                u = { addURL: "/cart/add.js", cartURL: "/cart.js", clearURL: "/cart/clear.js" },
                p = {};
            return { init: o, clearCart: r, unload: c };
        })()),
        (StyleHatch.CurrencyConverter = (function () {
            function t() {
                i = { $body: e(r.body), $money: e(r.money) };
            }
            function o() {
                t(), a();
            }
            function a() {
                (n.cookieCurrency = Currency.cookie.read()),
                    e("span.money span.money").each(function () {
                        e(this).parents(r.money).removeClass("money");
                    }),
                    i.$money.each(function () {
                        "" !== Currency.currentCurrency ? e(this).attr("data-currency-" + Currency.currentCurrency, e(this).html()) : e(this).attr("data-currency-" + StyleHatch.shopCurrency, e(this).html());
                    }),
                    null == n.cookieCurrency
                        ? StyleHatch.shopCurrency !== StyleHatch.defaultCurrency
                            ? Currency.convertAll(StyleHatch.shopCurrency, StyleHatch.defaultCurrency)
                            : (Currency.currentCurrency = StyleHatch.defaultCurrency)
                        : e("[name=currencies]").length && 0 === e("[name=currencies] option[value=" + n.cookieCurrency + "]").length
                        ? ((Currency.currentCurrency = StyleHatch.shopCurrency), Currency.cookie.write(StyleHatch.shopCurrency))
                        : n.cookieCurrency === StyleHatch.shopCurrency
                        ? (Currency.currentCurrency = StyleHatch.shopCurrency)
                        : Currency.convertAll(StyleHatch.shopCurrency, n.cookieCurrency),
                    e("[name=currencies]")
                        .val(Currency.currentCurrency)
                        .change(function () {
                            var t = e(this).val();
                            Currency.convertAll(Currency.currentCurrency, t),
                                e(".selected-currency").text(Currency.currentCurrency),
                                e("p.currency-at-checkout").length > 0 && (Currency.currentCurrency == StyleHatch.shopCurrency ? e("p.currency-at-checkout").hide() : e("p.currency-at-checkout").show());
                        }),
                    e("[name=currencies]").val(Currency.currentCurrency).change();
            }
            var r = { body: "body", money: "span.money" },
                n = { enabled: !1 },
                i = {};
            return { init: o, config: n, convert: a };
        })()),
        (window.theme = window.theme || {}),
        (window.slate = window.slate || {}),
        (theme.Images = (function () {
            function e(e, t) {
                "string" == typeof e && (e = [e]);
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    this.loadImage(this.getSizedImageUrl(a, t));
                }
            }
            function t(e) {
                new Image().src = e;
            }
            function o(e, t, o) {
                var a = this.imageSize(t.src),
                    r = this.getSizedImageUrl(e.src, a);
                o ? o(r, e, t) : (t.src = r);
            }
            function a(e) {
                var t = e.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
                return null !== t ? t[1] : null;
            }
            function r(e, t) {
                if (null == t) return e;
                if ("master" === t) return this.removeProtocol(e);
                var o = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
                if (null != o) {
                    var a = e.split(o[0]),
                        r = o[0];
                    return this.removeProtocol(a[0] + "_" + t + r);
                }
                return null;
            }
            function n(e) {
                return e.replace(/http(s)?:/, "");
            }
            return { preload: e, loadImage: t, switchImage: o, imageSize: a, getSizedImageUrl: r, removeProtocol: n };
        })()),
        (theme.Currency = (function () {
            function e(e, o) {
                function a(e, t, o, a) {
                    if (((t = slate.utils.defaultTo(t, 2)), (o = slate.utils.defaultTo(o, ",")), (a = slate.utils.defaultTo(a, ".")), isNaN(e) || null == e)) return 0;
                    e = (e / 100).toFixed(t);
                    var r = e.split("."),
                        n = r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + o),
                        i = r[1] ? a + r[1] : "";
                    return n + i;
                }
                "string" == typeof e && (e = e.replace(".", ""));
                var r = "",
                    n = /\{\{\s*(\w+)\s*\}\}/,
                    i = o || t;
                switch (i.match(n)[1]) {
                    case "amount":
                        r = a(e, 2);
                        break;
                    case "amount_no_decimals":
                        r = a(e, 0);
                        break;
                    case "amount_with_comma_separator":
                        r = a(e, 2, ".", ",");
                        break;
                    case "amount_no_decimals_with_comma_separator":
                        r = a(e, 0, ".", ",");
                        break;
                    case "amount_no_decimals_with_space_separator":
                        r = a(e, 0, " ");
                }
                return i.replace(n, r);
            }
            var t = "${{amount}}";
            return { formatMoney: e };
        })()),
        (slate.utils = {
            findInstance: function (e, t, o) {
                for (var a = 0; a < e.length; a++) if (e[a][t] === o) return e[a];
            },
            removeInstance: function (e, t, o) {
                for (var a = e.length; a--; )
                    if (e[a][t] === o) {
                        e.splice(a, 1);
                        break;
                    }
                return e;
            },
            compact: function (e) {
                for (var t = -1, o = null == e ? 0 : e.length, a = 0, r = []; ++t < o; ) {
                    var n = e[t];
                    n && (r[a++] = n);
                }
                return r;
            },
            defaultTo: function (e, t) {
                return null == e || e !== e ? t : e;
            },
            debounce: function (e, t, o) {
                var a;
                return function () {
                    var r = this,
                        n = arguments,
                        i = function () {
                            (a = null), o || e.apply(r, n);
                        },
                        s = o && !a;
                    clearTimeout(a), (a = setTimeout(i, t)), s && e.apply(r, n);
                };
            },
        }),
        (slate.Variants = (function () {
            function t(t) {
                (this.$container = t.$container),
                    (this.product = t.product),
                    (this.singleOptionSelector = t.singleOptionSelector),
                    (this.originalSelectorId = t.originalSelectorId),
                    (this.enableHistoryState = t.enableHistoryState),
                    (this.currentVariant = this._getVariantFromOptions()),
                    e(this.singleOptionSelector, this.$container).on("change", this._onSelectChange.bind(this));
            }
            return (
                (t.prototype = e.extend({}, t.prototype, {
                    _getCurrentOptions: function () {
                        var t = e.map(e(this.singleOptionSelector, this.$container), function (t) {
                            var o = e(t),
                                a = o.attr("type"),
                                r = {};
                            return "radio" === a || "checkbox" === a ? !!o[0].checked && ((r.value = o.val()), (r.index = o.data("index")), r) : ((r.value = o.val()), (r.index = o.data("index")), r);
                        });
                        return (t = slate.utils.compact(t));
                    },
                    _getVariantFromOptions: function () {
                        var e = this._getCurrentOptions(),
                            t = this.product.variants,
                            o = !1;
                        return (
                            t.forEach(function (t) {
                                var a = !0;
                                t.options;
                                e.forEach(function (e) {
                                    a && (a = e.value === t[e.index]);
                                }),
                                    a && (o = t);
                            }),
                            o || null
                        );
                    },
                    _onSelectChange: function () {
                        var e = this._getVariantFromOptions();
                        this.$container.trigger({ type: "variantChange", variant: e }),
                            e && (this._updateMasterSelect(e), this._updateImages(e), this._updatePrice(e), this._updateSKU(e), (this.currentVariant = e), this.enableHistoryState && this._updateHistoryState(e));
                    },
                    _updateImages: function (e) {
                        var t = e.featured_image || {},
                            o = this.currentVariant.featured_image || {};
                        e.featured_image && t.src !== o.src && this.$container.trigger({ type: "variantImageChange", variant: e });
                    },
                    _updatePrice: function (e) {
                        (e.price === this.currentVariant.price && e.compare_at_price === this.currentVariant.compare_at_price) || this.$container.trigger({ type: "variantPriceChange", variant: e });
                    },
                    _updateSKU: function (e) {
                        e.sku !== this.currentVariant.sku && this.$container.trigger({ type: "variantSKUChange", variant: e });
                    },
                    _updateHistoryState: function (e) {
                        if (history.replaceState && e) {
                            var t = window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + e.id;
                            window.history.replaceState({ path: t }, "", t);
                        }
                    },
                    _updateMasterSelect: function (t) {
                        e(this.originalSelectorId, this.$container)[0].value = t.id;
                    },
                })),
                t
            );
        })()),
        e.fn.extend({
            productBox: function () {
                var t = e(this).find(".box.product figure");
                t.on("click", function (t) {
                    if (e(t.target).is(".vendor") || e(t.target).parent().is(".vendor"));
                    else {
                        t.preventDefault();
                        var o = e(this).find("a").attr("href");
                        t.shiftKey || t.ctrlKey || t.metaKey ? window.open(o, "_blank") : (window.location = o);
                    }
                }),
                    Modernizr.objectfit ||
                        t.find(".product_card__image-wrapper").each(function () {
                            var t = e(this),
                                o = t.find(".product_card__image.alt");
                            t.find("img").prop("src");
                            o.hide(), t.addClass("ie-fallback lazyload");
                        });
            },
            destroyProductBox: function () {
                var t = e(this).find(".box.product figure");
                t.off("click");
            },
            initNestedMenu: function () {
                var t = e(this),
                    o = t.find('a[aria-haspopup="true"]'),
                    a = function (e) {
                        var t = e.find("li.has-dropdown.expanded");
                        if (t.length > 0) {
                            t.removeClass("expanded");
                            var o = t.find("> a");
                            o.attr("aria-expanded", "false");
                            var a = t.find("> ul.dropdown");
                            a.attr("aria-hidden", "true"), a.slideUp();
                            var n = a.find("a");
                            n.attr("tabindex", "-1"), r(e);
                        }
                    },
                    r = function (e) {
                        var t = e.find("li.has-sub-dropdown.expanded");
                        if (t.length > 0) {
                            t.removeClass("expanded");
                            var o = t.find("> a");
                            o.attr("aria-expanded", "false");
                            var a = t.find("> ul.sub-dropdown");
                            a.attr("aria-hidden", "true"), a.slideUp();
                            var n = a.find("a");
                            n.attr("tabindex", "-1"), r(e);
                        }
                    };
                o.on("click", function (t) {
                    var o = e(this),
                        n = o.parent(),
                        i = n.find("> ul"),
                        s = n.find("> ul > li > a"),
                        l = o.closest("ul.nested-menu");
                    "true" !== o.attr("aria-expanded") &&
                        (t.preventDefault(), n.hasClass("has-dropdown") ? a(l) : r(l), o.attr("aria-expanded", "true"), n.addClass("expanded"), i.attr("aria-hidden", "false"), s.attr("tabindex", "0"), i.slideDown());
                });
            },
            destroyNestedMenu: function () {
                var t = e(this),
                    o = t.find('a[aria-haspopup="true"]');
                o.off("click");
            },
        }),
        (StyleHatch.refreshFixTo = function () {
            StyleHatch.Promos.refreshFixTo();
            var t = e("*").filter(function () {
                return e(this).data("fixtoInstance");
            });
            t.each(function (t) {
                e(this).data("fixto-instance")._running && e(this).fixTo("refresh");
            });
        }),
        (StyleHatch.videoLayout = function () {
            e(".rte").fitVids();
        }),
        (StyleHatch.loginForms = function () {
            function e() {
                StyleHatch.cache.$recoverPasswordForm.show(), StyleHatch.cache.$customerLoginForm.hide();
            }
            function t() {
                StyleHatch.cache.$recoverPasswordForm.hide(), StyleHatch.cache.$customerLoginForm.show();
            }
            StyleHatch.cache.$recoverPasswordLink.on("click", function (t) {
                t.preventDefault(), e(), StyleHatch.updateHash("recover");
            }),
                StyleHatch.cache.$hideRecoverPasswordLink.on("click", function (e) {
                    e.preventDefault(), t(), StyleHatch.updateHash();
                }),
                "#recover" == StyleHatch.getHash() && e();
        }),
        (StyleHatch.initTemplates = function () {
            var e = StyleHatch.cache.$body,
                t = e.data("template");
            switch (t) {
                case "addresses":
                    StyleHatch.initCustomerAddressTemplate();
            }
        }),
        (StyleHatch.initCustomerAddressTemplate = function () {
            if (StyleHatch.addressJSValidation) {
                var t = e('.customer-address input[type="submit"]');
                t.on("click", function (t) {
                    var o = e(this).closest("form"),
                        a = o.find('input[name="address[last_name]"]'),
                        r = o.find('input[name="address[address1]"]'),
                        n = o.find('input[name="address[city]"]'),
                        i = o.find('select[name="address[country]"]'),
                        s = o.find('select[name="address[province]"]'),
                        l = o.find('input[name="address[zip]"]');
                    a.val() || a.addClass("required"),
                        r.val() || r.addClass("required"),
                        n.val() || n.addClass("required"),
                        "---" == i.val() && i.addClass("required"),
                        s.closest(".input-row").is(":visible") && ((s.val() && "---" != s.val() && "" != s.val()) || s.addClass("required")),
                        l.val() || l.addClass("required");
                    var c = o.find("input.required, select.required");
                    c.on("focus", function () {
                        e(this).removeClass("required");
                    }),
                        c.length > 0 ? (o.find("div.errors").parent().show(), t.preventDefault()) : o.find("div.errors").parent().hide();
                });
            }
        }),
        (StyleHatch.updateHash = function (t) {
            t
                ? ((window.location.hash = "#" + t),
                  e("#" + t)
                      .attr("tabindex", -1)
                      .focus())
                : (window.location.hash = "");
        }),
        (StyleHatch.getHash = function () {
            return window.location.hash;
        }),
        (StyleHatch.quantitySelect = function () {
            var t = e(".quantity-select");
            t.each(function () {
                var t = e(this),
                    o = t.find(".adjust-minus"),
                    a = t.find(".adjust-plus"),
                    r = t.find("input.quantity"),
                    n = r.val();
                o.on("click", function (e) {
                    (n = r.val()), n > 1 && (n--, r.val(n)), e.preventDefault();
                }),
                    a.on("click", function (e) {
                        (n = r.val()), n++, r.val(n), e.preventDefault();
                    });
            });
        }),
        (StyleHatch.resetPasswordSuccess = function () {
            StyleHatch.cache.$passwordResetSuccess.show();
        }),
        e(document).ready(function () {
            StyleHatch.init();
        });
})(jq223);
