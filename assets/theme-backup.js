(function($) {
  'use strict';

  // StyleHatch Object
  window.StyleHatch = window.StyleHatch || {};

  /**
   * Sections
   * ---------------------------------------------------------------------------
   * Constructors, instances and events for the Shopify Theme Editor
   */
  StyleHatch.Sections = function Sections() {
    this.constructors = {};
    this.instances = [];

    $(document)
      .on('shopify:section:load', this._onSectionLoad.bind(this))
      .on('shopify:section:unload', this._onSectionUnload.bind(this))
      .on('shopify:section:select', this._onSelect.bind(this))
      .on('shopify:section:deselect', this._onDeselect.bind(this))
      .on('shopify:section:reorder', this._onReorder.bind(this))
      .on('shopify:block:select', this._onBlockSelect.bind(this))
      .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
  };
  /**
   * Prototypes to extend sections
   */
  StyleHatch.Sections.prototype = $.extend({}, StyleHatch.Sections.prototype, {
    _createInstance: function(container, constructor) {
      var $container = $(container);
      var id = $container.attr('data-section-id');
      var type = $container.attr('data-section-type');

      constructor = constructor || this.constructors[type];

      if (typeof constructor === 'undefined') {
        return;
      }

      var instance = $.extend(new constructor(container), {
        id: id,
        type: type,
        container: container,
      });

      this.instances.push(instance);
    },

    _onSectionLoad: function(evt) {
      var container = $('[data-section-id]', evt.target)[0];
      if (container) {
        this._createInstance(container);
      }
    },

    _onSectionUnload: function(evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        'id',
        evt.detail.sectionId
      );

      if (!instance) {
        return;
      }

      if (typeof instance.onUnload === 'function') {
        instance.onUnload(evt);
      }

      this.instances = slate.utils.removeInstance(
        this.instances,
        'id',
        evt.detail.sectionId
      );
    },

    _onSelect: function(evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        'id',
        evt.detail.sectionId
      );

      if (instance && typeof instance.onSelect === 'function') {
        instance.onSelect(evt);
      }

      if ($('body').hasClass('panel-open')) {
        StyleHatch.closePanelMenu();
        $('html, body').addClass('scroll-lock');
        // Prevent theme editor issues
        setTimeout(function() {
          $('html, body').removeClass('scroll-lock');
          $('html, body').animate(
            {
              scrollTop: instance.$container.offset().top, // - fixedOffset
            },
            600
          );
        }, 400);
      }
    },

    _onDeselect: function(evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        'id',
        evt.detail.sectionId
      );

      if (instance && typeof instance.onDeselect === 'function') {
        instance.onDeselect(evt);
      }

      if ($('body').hasClass('panel-open')) {
        StyleHatch.closePanelMenu();
      }
    },

    _onReorder: function(evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        'id',
        evt.detail.sectionId
      );

      if (instance && typeof instance.onReorder === 'function') {
        instance.onReorder(evt);
      }
    },

    _onBlockSelect: function(evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        'id',
        evt.detail.sectionId
      );

      if (instance && typeof instance.onBlockSelect === 'function') {
        instance.onBlockSelect(evt);
      }
    },

    _onBlockDeselect: function(evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        'id',
        evt.detail.sectionId
      );

      if (instance && typeof instance.onBlockDeselect === 'function') {
        instance.onBlockDeselect(evt);
      }
    },

    register: function(type, constructor) {
      this.constructors[type] = constructor;

      $('[data-section-type=' + type + ']').each(
        function(index, container) {
          this._createInstance(container, constructor);
        }.bind(this)
      );
    },
  });

  /**
   * Cache common selectors
   */
  StyleHatch.cacheSelectors = function() {
    StyleHatch.cache = {
      // General
      $body: $('body'),
      $html: $('html'),

      // Util header
      $util: $('header.util'),
      $header: $('header.site-header'),
      $siteNav: $('header.site-header ul.site-nav'),
      $featuredCollection: $('.featured-collection'),
      $instagramCollection: $('.instagram-collection'),

      $addToCartForm: $('#AddToCartForm'),
      $addToCartButton: $('#AddToCart'),
      $cartButton: $('#CartButton'),

      // Customer Pages
      $recoverPasswordLink: $('#RecoverPassword'),
      $hideRecoverPasswordLink: $('#HideRecoverPasswordLink'),
      $recoverPasswordForm: $('#RecoverPasswordForm'),
      $customerLoginForm: $('#CustomerLoginForm'),
      $passwordResetSuccess: $('#ResetSuccess'),
    };
  };

  StyleHatch.init = function() {
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    StyleHatch.cacheSelectors();

    // Set up width levels
    StyleHatch.largeMobile = 700;

    /**
     * Set up sections
     */
    var sections = new StyleHatch.Sections();
    // Fixed theme sections
    sections.register('promos-section', StyleHatch.PromosSection);
    sections.register('header-section', StyleHatch.HeaderSection);
    sections.register('footer-section', StyleHatch.FooterSection);
    // Index sections
    sections.register('slideshow-section', StyleHatch.SlideshowSection);
    sections.register('hero-video-section', StyleHatch.HeroVideoSection);
    sections.register(
      'featured-collection-section',
      StyleHatch.FeaturedCollectionSection
    );
    sections.register(
      'simple-collection-section',
      StyleHatch.SimpleCollectionSection
    );
    sections.register('featured-text-section', StyleHatch.PageSection);
    sections.register('custom-content-section', StyleHatch.PageSection);
    sections.register('instagram-section', StyleHatch.InstagramSection);
    sections.register('featured-blog-section', StyleHatch.GenericSection);
    sections.register('map', StyleHatch.Maps);
    // Template sections
    sections.register('product-template', StyleHatch.Product);
    sections.register('collection-template', StyleHatch.Collection);
    sections.register('collection-list-template', StyleHatch.Collection);
    sections.register('list-collections-template', StyleHatch.ListCollections);
    sections.register('blog-template', StyleHatch.BlogArticle);
    sections.register('article-template', StyleHatch.BlogArticle);
    sections.register('password-template', StyleHatch.Password);
    sections.register('cart-template', StyleHatch.Cart);

    if (StyleHatch.currencyConverter) {
      StyleHatch.CurrencyConverter.init();
    }

    if (StyleHatch.ajaxCartEnable) {
      StyleHatch.AjaxCart.init();
    }

    StyleHatch.loginForms();
    StyleHatch.videoLayout();
    StyleHatch.initTemplates();
    $('main').productBox();
  };

  /**
   * Section - Modules
   * ---------------------------------------------------------------------------
   * Set up core functionality for fixed global (all template) modules
   */

  /**
   * Promos - header
   */
  StyleHatch.PromosSection = (function() {
    function PromosSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');
      StyleHatch.Promos.init();
    }

    return PromosSection;
  })();
  StyleHatch.PromosSection.prototype = $.extend(
    {},
    StyleHatch.PromosSection.prototype,
    {
      onUnload: function() {
        StyleHatch.Promos.unload();
      },
      onBlockSelect: function(evt) {
        StyleHatch.Promos.blockSelect(evt);
      },
      onBlockDeselect: function(evt) {
        StyleHatch.Promos.blockDeselect(evt);
      },
    }
  );
  // Promos Class
  StyleHatch.Promos = (function() {
    var selectors = {
      body: 'body',
      page: '#page',
      promos: '#shopify-section-promos',
      promoBar: 'header.promo-bar',
      bottomContainer: '.promo-bar-container.bottom',
      popup: '.promo-popup',
    };

    var config = {};
    config = {
      scrollLock: false,
      fixToZIndex: 992,
      hideTimers: [],
      slideSpeed: 400,
    };

    var cache = {};

    function init() {
      cacheSelectors();

      config.scrollLock = cache.$promos.find('>*:first').data('scroll-lock');

      initPromoBars();
      initPopups();

      StyleHatch.Header.rebuildFixTo();
    }

    function cacheSelectors() {
      cache = {
        $body: $(selectors.body),
        $promos: $(selectors.promos),
        $promosContainer: $(selectors.promos).find('>*:first'),
        $promoBar: $(selectors.promoBar),
        $bottomContainer: $(selectors.bottomContainer),
        $popup: $(selectors.popup),
      };
    }

    // Core functions
    /*
    * Promo bar
    * Announcement bar
    */
    function initPromoBars() {
      if (cache.$promoBar.length) {
        // Loop through each
        cache.$promoBar.each(function() {
          var $promoBar = $(this);
          var hideDelay = $promoBar.data('hide-delay');
          var barPlacement = $promoBar.data('bar-placement');

          // Check for errors
          var $errors = $promoBar.find('div.errors');
          if ($errors.length) {
            $errors.prependTo($promoBar);
          }

          // Create and group together bottom bars
          if (barPlacement == 'bottom') {
            if (!cache.$bottomContainer.length) {
              cache.$promosContainer.append(
                '<div class="promo-bar-container bottom"></div>'
              );
              cache.$bottomContainer = $(selectors.bottomContainer);
            }
            $promoBar.appendTo(cache.$bottomContainer);

            // Calculate height and offset bottom padding
            cache.$bottomContainer.resize(function() {
              var bottomHeight = $(this).height() + 'px';
              cache.$body.css({
                'margin-bottom': bottomHeight,
              });
            });
          }

          if ($promoBar.hasClass('signup-bar')) {
            $promoBar.showPopup();
          }

          // Hide the bar after ms delay (hideDelay)
          if (hideDelay !== 'no-delay') {
            config.hideTimers.push(
              setTimeout(function() {
                if (!$promoBar.data('pause-hide')) {
                  $promoBar.promoSlideUp();
                }
              }, hideDelay)
            );
          }
        });

        destroyFixTo();
        fixTo();
      }
    }
    function destroyFixTo() {
      if (cache.$promos.data('fixtoInstance')) {
        cache.$promos.fixTo('destroy');
      }
    }
    function refreshFixTo() {
      if (cache.$promos.data('fixtoInstance')) {
        cache.$promos.fixTo('refresh');
      }
    }
    function fixTo() {
      if (config.scrollLock) {
        cache.$promos.fixTo(selectors.page, {
          zIndex: config.fixToZIndex,
        });
      }
    }

    /*
    * Popup
    */
    function initPopups() {
      if (cache.$popup.length) {
        // Loop through each
        cache.$popup.each(function() {
          var $popup = $(this);
          var popupEnable = true,
            showDelay = $popup.data('show-delay'),
            homepageLimit = $popup.data('homepage-limit'),
            visitorLimit = $popup.data('visitor-limit'),
            isVisitor = $popup.data('visitor'),
            showFor = $popup.data('show-for');

          // Disable popup if "only enable for visitor" and customer
          if (visitorLimit == true && isVisitor == false) {
            popupEnable = false;
          }

          var $errors = $popup.find('.errors');
          if ($errors.length) {
            showDelay = 0;
          }

          var popupTimeout = setTimeout(function() {
            var windowWidth = $(window).width();
            switch (showFor) {
              case 'mobile':
                if (windowWidth <= StyleHatch.largeMobile) {
                  $popup.showPopup();
                }
                break;
              case 'desktop':
                if (windowWidth > StyleHatch.largeMobile) {
                  $popup.showPopup();
                }
                break;
              case 'both':
                $popup.showPopup();
                break;
            }
          }, showDelay);
        });
      }
    }

    // Prototypes
    /*
    * Popups
    * - showPopup
    * - hidePopup
    */
    $.fn.extend({
      showPopup: function(force) {
        var $popup = $(this);
        var popupEnable = true,
          showDelay = $popup.data('show-delay'),
          showAgainDelay = $popup.data('show-again-delay'),
          homepageLimit = $popup.data('homepage-limit'),
          visitorLimit = $popup.data('visitor-limit'),
          isVisitor = $popup.data('visitor'),
          showFor = $popup.data('show-for'),
          type = $popup.data('type'),
          id = $popup.data('id');

        // Disable popup if "only enable for visitor" and customer
        if (visitorLimit == true && isVisitor == false) {
          popupEnable = false;
        }

        // Check to see if the cookie exists
        var cookieName = 'popup-' + id;
        if ($.cookie(cookieName)) {
          popupEnable = false;
        }

        // Check for homepage limit
        if (homepageLimit && !cache.$body.hasClass('template-index')) {
          popupEnable = false;
        }

        if (window.self !== window.top && type == 'popup') {
          popupEnable = false;
        }

        // Always show signup-bar popup if inside the editor
        if (force) {
          popupEnable = true;
        }

        // Check for errors to show the popup anyways
        var $errors = $popup.find('.errors');
        var formTags = getQueryString('contact%5Btags%5D');

        if ($errors.length && formTags.includes('popup')) {
          popupEnable = true;
          $popup.find('input#email').addClass('errors');
        }

        if ($errors.length && formTags.includes('signup-bar')) {
          popupEnable = true;
        }

        // Remove target=_blank on touch
        if (Modernizr.touchevents) {
          $popup.find('form').removeAttr('target');
        }

        if (popupEnable) {
          if (type == 'popup') {
            $.magnificPopup.open({
              items: {
                src: $popup,
                type: 'inline',
                showCloseBtn: false,
              },
              mainClass: 'mfp-slideup',
              removalDelay: 300,
              callbacks: {
                close: function() {
                  $.cookie(cookieName, 'shown', {
                    expires: showAgainDelay,
                    path: '/',
                  });
                },
              },
            });
            
        /* Swipe para a esquerda - Próximo */
        $(".mfp-container").swipe( {
          swipeLeft:function(event, direction, distance, duration, fingerCount) {
            console.log("swipe right");
            magnificPopup.next();
          },

        /* Swipe para a direita - Anterior */
        swipeRight:function(event, direction, distance, duration, fingerCount) {
          console.log("swipe left");
          magnificPopup.prev();
        },
        });
          }

          if (type == 'signup-bar') {
            if (force) {
              $popup.addClass('visible force');
            } else {
              $popup.addClass('visible');
            }
          }

          var $close = $popup.find('.icon-text');
          $close.on('click', function(e) {
            $popup.hidePopup();
            e.preventDefault();
          });

          // On click subscribe button
          var $form = $popup.find('form');
          $form.on('submit', function(e) {
            if (e.target.checkValidity()) {
              $popup.hidePopup();
              $(this).submit();
            } else {
              return false;
            }
          });
        }
      },
      hidePopup: function() {
        var $promos = $('#shopify-section-promos');
        var $popup = $(this);
        var type = $popup.data('type'),
          id = $popup.data('id');

        if (type == 'popup') {
          $.magnificPopup.close();
        }

        if (type == 'signup-bar') {
          var cookieName = 'popup-' + id;

          $.cookie(cookieName, 'shown', {
            expires: 60,
            path: '/',
          });

          // close all signup bars
          $('.promo-bar.signup-bar').each(function(i) {
            $(this).slideUp({
              duration: 400,
              progress: function() {
                StyleHatch.refreshFixTo();
              },
              complete: function() {
                // one final refresh call
                StyleHatch.refreshFixTo();
                $(this).removeClass('visible force');
              },
            });
          });
        }
      },
      promoSlideUp: function() {
        $(this).slideUp({
          duration: config.slideSpeed,
          progress: StyleHatch.refreshFixTo,
          complete: StyleHatch.refreshFixTo,
        });
      },
      promoSlideDown: function() {
        $(this).slideDown({
          duration: config.slideSpeed,
          progress: StyleHatch.refreshFixTo,
          complete: StyleHatch.refreshFixTo,
        });
      },
      // Simulated versions for the customize theme menu
      showMockPopup: function() {
        var $promos = $('#shopify-section-promos');
        if (!$('.mock-popup-container').length) {
          $promos
            .find('>*:first')
            .append('<div class="mock-popup-container"></div>');
        }
        var $mockPopupContainer = $('.mock-popup-container');
        var $popup = $(this);
        $popup.appendTo($mockPopupContainer);

        $mockPopupContainer.show();
        $popup.show();
      },
      hideMockPopup: function() {
        var $mockPopupContainer = $('.mock-popup-container');
        var $popup = $(this);
        $mockPopupContainer.hide();
        $popup.hide();
      },
    });

    function blockSelect(evt) {
      var $block = $('#block-' + evt.detail.blockId);
      var blockType = $block.data('type');

      // close any open popup
      $.magnificPopup.close();

      // make sure each block type opens
      switch (blockType) {
        case 'announcement-bar':
          // Promo bars
          // Always show the bar when the block is selected
          $block.promoSlideDown();
          $block.attr('data-pause-hide', true);

          break;
        case 'popup':
          $block.showMockPopup();
          break;
        case 'signup-bar':
          $block.showPopup(true);
          break;
      }
      StyleHatch.Header.rebuildFixTo();
      StyleHatch.refreshFixTo();
    }
    function blockDeselect(evt) {
      var $block = $('#block-' + evt.detail.blockId);
      var blockType = $block.data('type');
      var showFor = $block.data('show-for');
      var windowWidth = $(window).width();

      // make sure each block type closes (if it should)
      switch (blockType) {
        case 'announcement-bar':
          var $promoBar = $block;
          $promoBar.attr('data-pause-hide', false);

          var hideDelay = $promoBar.data('hide-delay');
          var barPlacement = $promoBar.data('bar-placement');
          var homepageLimit = $promoBar.data('homepage-limit');

          // Instantly hide any promo bar that was open for editing only (wrong size)
          if (showFor == 'desktop' && windowWidth <= StyleHatch.largeMobile) {
            $block.promoSlideUp();
          } else if (
            showFor == 'mobile' &&
            windowWidth > StyleHatch.largeMobile
          ) {
            $block.promoSlideUp();
          }

          // Hide the bar after ms delay (hideDelay)
          if (hideDelay !== 'no-delay') {
            config.hideTimers.push(
              setTimeout(function() {
                if (!$promoBar.data('pause-hide')) {
                  $promoBar.promoSlideUp();
                }
              }, hideDelay)
            );
          }
          break;
        case 'popup':
          $block.hideMockPopup();
          break;

        case 'signup-bar':
          if (showFor == 'desktop' && windowWidth <= StyleHatch.largeMobile) {
            $block.hidePopup();
            StyleHatch.refreshFixTo();
          }
          if (showFor == 'mobile' && windowWidth > StyleHatch.largeMobile) {
            $block.hidePopup();
            StyleHatch.refreshFixTo();
          }
          break;
      }
      StyleHatch.Header.rebuildFixTo();
    }
    function unload() {
      // Clear out timers
      if (
        typeof config.hideTimers == 'undefined' ||
        !(config.hideTimers instanceof Array)
      ) {
        config.hideTimers = [];
      } else {
        for (var i = 0; i < config.hideTimers.length; i++) {
          clearTimeout(config.hideTimers[i]);
        }
        config.hideTimers.length = 0;
      }

      // Clean up fixto
      destroyFixTo();
      StyleHatch.refreshFixTo();

      // Misc
      cache.$bottomContainer.remove();
      $.magnificPopup.close();
    }

    return {
      init: init,
      unload: unload,
      blockSelect: blockSelect,
      blockDeselect: blockDeselect,
      refreshFixTo: refreshFixTo,
    };
  })();

  /**
   * Header
   */
  StyleHatch.HeaderSection = (function() {
    function HeaderSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');
      StyleHatch.Header.init();
    }

    return HeaderSection;
  })();
  StyleHatch.HeaderSection.prototype = $.extend(
    {},
    StyleHatch.HeaderSection.prototype,
    {
      onUnload: function() {
        StyleHatch.Header.unload();
      },
    }
  );
  // Header Class
  StyleHatch.Header = (function() {
    var selectors = {
      htmlBody: 'html, body',
      body: 'body',
      page: '#page',
      section: '#shopify-section-header',
      promosSection: '#shopify-section-promos',
      util: 'header.util',
      header: 'header.site-header',
      siteNav: 'header.site-header ul.site-nav',
      menuLink: '.menu-link',
      menuPanel: '#menu.panel',
      menuOverlay: '.mobile-menu-overlay',
    };

    var config = {};
    config = {
      blurTimer: {},
      blurTime: 2000,
      slideSpeed: 300,
      // Dropdowns
      dropdownActiveClass: 'dropdown-hover',
      subDropdownActiveClass: 'sub-dropdown-hover',
    };

    var cache = {};

    function init() {
      cacheSelectors();

      // Util
      initUtilHeader();
      bindUtilHeaderEvents();
      // Header
      initHeader();
      bindHeaderEvents();

      rebuildFixTo();
    }

    function cacheSelectors() {
      cache = {
        $htmlBody: $(selectors.htmlBody),
        $body: $(selectors.body),
        $page: $(selectors.page),
        $section: $(selectors.section),
        $promosSection: $(selectors.promosSection),
        $util: $(selectors.util),
        $header: $(selectors.header),
        $siteNav: $(selectors.siteNav),
        // Dropdowns
        $dropdownParent: $(selectors.siteNav).find('li.has-dropdown'),
        $defaultLink: $(selectors.siteNav).find('> li:not(.has-dropdown)'),
        $subMenuLinks: $(selectors.siteNav).find('li.has-dropdown a'),
        $subDropdownParent: $(selectors.siteNav).find('li.has-sub-dropdown'),
        // Util
        $search: $(selectors.util).find('.search-wrapper'),
        $searchLink: $(selectors.util).find('a.search'),
        $searchClose: $(selectors.util).find('form.search-bar button'),
        $searchInput: $(selectors.util).find('form.search-bar input'),
        // Panel menu
        $menuLink: $(selectors.menuLink),
        $menuPanel: $(selectors.menuPanel),
        $menuPanelDropdown: $(selectors.menuPanel).find('li.has-dropdown'),
        $menuPanelSubDropdown: $(selectors.menuPanel).find(
          'li.has-sub-dropdown'
        ),
      };
    }

    /*
    * Util header
    * ------------------------
    */
    function initUtilHeader() {
      // Add overlay
      if (!$(selectors.menuOverlay).length) {
        cache.$section.append('<div class="mobile-menu-overlay"></div>');
        cache.$menuOverlay = $(selectors.menuOverlay);
      }
    }
    /*
    * Search open/close
    */
    function openSearch() {
      cache.$search.slideDown({
        duration: config.slideSpeed,
        progress: function() {
          StyleHatch.refreshFixTo();
        },
        complete: function() {
          StyleHatch.refreshFixTo();
        },
      });
      cache.$searchInput.focus();
    }
    function closeSearch() {
      cache.$searchInput.blur();
      clearTimeout(config.blurTimer);
      cache.$search.slideUp({
        duration: config.slideSpeed,
        progress: function() {
          StyleHatch.refreshFixTo();
        },
        complete: function() {
          StyleHatch.refreshFixTo();
        },
      });
    }
    /*
    * Mobile panel open/close
    */
    function togglePanelMenu() {
      if (cache.$body.hasClass('panel-open')) {
        closePanelMenu();
      } else {
        openPanelMenu();
      }
    }
    function openPanelMenu() {
      cache.$htmlBody.addClass('panel-open');
      window.scrollTo(0, 0);
      cache.$menuPanel.attr('tabindex', '0');
      cache.$menuPanel.focus();
    }
    function closePanelMenu() {
      cache.$htmlBody.addClass('panel-open-transition');
      cache.$htmlBody.removeClass('panel-open');
      cache.$menuPanel.removeAttr('tabindex');

      setTimeout(function() {
        cache.$htmlBody.removeClass('panel-open-transition');
      }, 400);
    }
    /*
    * Events
    */
    function bindUtilHeaderEvents() {
      // Search
      cache.$searchLink.on('click.search', function(e) {
        openSearch();
        e.preventDefault();
      });
      cache.$searchClose.on('click.search', function(e) {
        closeSearch();
        e.preventDefault();
      });
      cache.$searchInput.on('blur.search', function(e) {
        config.blurTimer = setTimeout(closeSearch, config.blurTime);
        e.preventDefault();
      });

      // Mobile panel menu
      cache.$menuLink.on('click.panel', function(e) {
        togglePanelMenu();
        e.preventDefault();
      });
      cache.$menuOverlay.on('click.panel', function(e) {
        togglePanelMenu();
        e.preventDefault();
      });

      // Collapsible panel navigation (subnav)
      cache.$menuPanelDropdown.on('click.panelDropdown', function(e) {
        // Slide up previous one(s)
        cache.$menuPanelDropdown.find('ul.dropdown').slideUp();
        cache.$menuPanelDropdown.find('> a').attr('aria-expanded', 'false');
        cache.$menuPanelDropdown.removeClass('expanded');

        cache.$menuPanelDropdown
          .find('ul.dropdown')
          .attr('aria-hidden', 'true');
        cache.$menuPanelDropdown.find('ul.dropdown a').attr('tabindex', '-1');

        // If it's not open slide down the menu
        // and don't allow the click
        if (
          !$(this)
            .find('ul.dropdown')
            .is(':visible')
        ) {
          $(this)
            .find('> a')
            .attr('aria-expanded', 'true');
          $(this)
            .find('ul.dropdown')
            .slideDown();
          $(this)
            .find('ul.dropdown')
            .attr('aria-hidden', 'false');
          $(this)
            .find('ul.dropdown > li > a')
            .attr('tabindex', '0');
          $(this).addClass('expanded');
        }
      });

      cache.$menuPanelDropdown
        .find('> a')
        .on('click.panelDropdown', function(e) {
          if (
            !$(this)
              .closest('li')
              .hasClass('expanded')
          ) {
            e.preventDefault();
          }
        });
      cache.$menuPanelDropdown
        .find('ul.dropdown li:not(.has-sub-dropdown) a')
        .on('click.panelDropdown', function(e) {
          e.stopPropagation();
        });

      // Collapsible panel navigation (sub-subnav)
      cache.$menuPanelSubDropdown.on('click.panelDropdown', function(e) {
        e.stopPropagation();
        cache.$menuPanelSubDropdown.find('ul.sub-dropdown').slideUp();
        cache.$menuPanelDropdown.find('> a').attr('aria-expanded', 'false');
        cache.$menuPanelSubDropdown.removeClass('expanded');

        cache.$menuPanelDropdown
          .find('ul.sub-dropdown')
          .attr('aria-hidden', 'true');
        cache.$menuPanelDropdown
          .find('ul.sub-dropdown a')
          .attr('tabindex', '-1');

        // If it's not open slide down the menu
        // and don't allow the click
        if (
          !$(this)
            .find('ul.sub-dropdown')
            .is(':visible')
        ) {
          $(this)
            .find('> a')
            .attr('aria-expanded', 'true');
          $(this)
            .find('ul.sub-dropdown')
            .slideDown();
          $(this)
            .find('ul.sub-dropdown')
            .attr('aria-hidden', 'false');
          $(this)
            .find('ul.sub-dropdown > li > a')
            .attr('tabindex', '0');
          $(this).addClass('expanded');
        }
      });

      cache.$menuPanelSubDropdown
        .find('> a')
        .on('click.panelDropdown', function(e) {
          if (
            !$(this)
              .closest('li')
              .hasClass('expanded')
          ) {
            e.preventDefault();
          }
        });
      cache.$menuPanelSubDropdown
        .find('ul.sub-dropdown a')
        .on('click.panelDropdown', function(e) {
          e.stopPropagation();
        });

      // Promo resize
      cache.$promosSection.resize(StyleHatch.refreshFixTo);
    }
    function unbindUtilHeaderEvents() {
      // Search
      clearTimeout(config.blurTimer);
      cache.$searchLink.off('click.search');
      cache.$searchClose.off('click.search');
      cache.$searchInput.off('blur.search');

      // Mobile panel menu
      cache.$menuLink.off('click.panel');
      //cache.$menuOverlay.off('click.panel');

      // Collapsible panel navigation
      cache.$menuPanelDropdown.off('click.panelDropdown');
      cache.$menuPanelDropdown.find('> a').off('click.panelDropdown');
      cache.$menuPanelDropdown
        .find('ul.dropdown li:not(.has-sub-dropdown) a')
        .off('click.panelDropdown');

      cache.$menuPanelSubDropdown.off('click.panelDropdown');
      cache.$menuPanelSubDropdown.find('> a').off('click.panelDropdown');
      cache.$menuPanelSubDropdown
        .find('ul.sub-dropdown a')
        .off('click.panelDropdown');

      // Promo resize
      cache.$promosSection.removeResize(StyleHatch.refreshFixTo);
    }

    /*
    * Header
    * ------------------------
    */
    function initHeader() {
      // Adds line breaks to really long subnav text links
      cache.$subMenuLinks.each(function() {
        var $link = $(this);
        var linkText = $link.text();
        var linkTextWrapped = wordWrapper(linkText, 24, '<br/>\n');

        // Apply wrapped text
        $link.html(linkTextWrapped);
      });

      // Prevent Safari from reopening menu when browsing back
      hideDropdown(cache.$dropdownParent);
    }
    /*
    * Dropdown open / close
    */
    function showDropdown($el) {
      // Hide previous
      hideDropdown($('.' + config.dropdownActiveClass));

      $el.addClass(config.dropdownActiveClass);

      // Accessiblity
      $el.find('> a').attr('aria-expanded', 'true');
      $el.find('ul.dropdown').attr('aria-hidden', 'false');
      $el.find('ul.dropdown > li > a').attr('tabindex', '0');

      var $dropdown = $el.find('ul.dropdown');
      $dropdown.css({
        left: 'auto',
      });
      var dropdownEnd = $dropdown.offset().left + $dropdown.outerWidth();

      // Account for page edge padding
      var pageWidth = $(window).width() - 20;

      // Without border
      var siteWidth = cache.$header.width();
      var logoOffset = cache.$header.find('.logo-nav-contain').offset().left;

      if (siteWidth + 40 > $(window).width()) {
        siteWidth = $(window).width();
        logoOffset = -20;
      }

      pageWidth = siteWidth + logoOffset + 1;

      if (dropdownEnd > pageWidth) {
        var rightEdge = '-' + (dropdownEnd - pageWidth) + 'px';
        $dropdown.css({
          left: rightEdge,
        });
      }

      setTimeout(function() {
        cache.$body.on('touchstart', function() {
          hideDropdown($el);
        });
      }, 250);
    }
    function hideDropdown($el) {
      $el.removeClass(config.dropdownActiveClass);
      cache.$body.off('touchstart');

      // Accessiblity
      $el.find('> a').attr('aria-expanded', 'false');
      $el.find('ul.dropdown').attr('aria-hidden', 'true');
      $el.find('ul.dropdown > li > a').attr('tabindex', '-1');
    }
    // Sub dropdowns
    function showSubDropdown($el) {
      hideDropdown($('.' + config.subDropdownActiveClass));

      $el.addClass(config.subDropdownActiveClass);

      // Accessiblity
      $el.find('> a').attr('aria-expanded', 'true');
      $el.find('ul.sub-dropdown').attr('aria-hidden', 'false');
      $el.find('ul.sub-dropdown > li > a').attr('tabindex', '0');

      // Check if partially in view
      //log($el.find('.sub-dropdown').offset().left, $el.find('.sub-dropdown').width());

      // Show subdropdown to the left if there isn't enough room
      var dropdownOffsetEdge =
        $el.find('.sub-dropdown').offset().left +
        $el.find('.sub-dropdown').width();
      var windowWidth = $(window).width();
      if (dropdownOffsetEdge > windowWidth) {
        $el.addClass('alternate-align');
      } else {
        $el.removeClass('alternate-align');
      }
    }
    function hideSubDropdown($el) {
      $el.removeClass(config.subDropdownActiveClass);
      $el.removeClass('alternate-align');
      // Accessiblity
      $el.find('> a').attr('aria-expanded', 'false');
      $el.find('ul.sub-dropdown').attr('aria-hidden', 'true');
      $el.find('ul.sub-dropdown > li > a').attr('tabindex', '-1');
    }
    /*
    * Events
    */
    function bindHeaderEvents() {
      // Dropdown
      cache.$dropdownParent.on(
        'mouseenter.dropdown touchstart.dropdown focusin.dropdown',
        function(e) {
          var $el = $(this);

          if (!$el.hasClass(config.dropdownActiveClass)) {
            e.preventDefault();
            showDropdown($el);
          }
        }
      );
      cache.$dropdownParent.on('mouseleave.dropdown', function() {
        hideDropdown($(this));
      });
      cache.$subMenuLinks.on('touchstart.dropdown', function(e) {
        // Prevent touchstart on body from firing instead of link
        e.stopImmediatePropagation();
      });

      // Subdropdowns
      cache.$subDropdownParent.on(
        'mouseenter.subdropdown touchstart.subdropdown focusin.subdropdown',
        function(e) {
          var $el = $(this);

          if (!$el.hasClass(config.subDropdownActiveClass)) {
            e.preventDefault();
            showSubDropdown($el);
          }
        }
      );
      cache.$subDropdownParent.on('mouseleave.subdropdown', function() {
        hideSubDropdown($(this));
      });
      cache.$subDropdownParent.on('touchstart.subdropdown', function(e) {
        // Prevent touchstart on body from firing instead of link
        e.stopImmediatePropagation();
      });

      if ($('html').hasClass('touchevents')) {
        cache.$subDropdownParent.children('a').on('click', function(e) {
          var $el = $(this);

          if (!$el.hasClass(config.subDropdownActiveClass)) {
            e.preventDefault();
            showSubDropdown($el);
          }
        });
      }

      // Focus out detect tabbing outside of dropdown or subdropdown
      cache.$subMenuLinks.on('focusout.dropdown', function(e) {
        if (e.relatedTarget == null) {
          hideDropdown($('.' + config.dropdownActiveClass));
        } else {
          if (
            $(e.target).closest('li.has-dropdown')[0] !==
            $(e.relatedTarget).closest('li.has-dropdown')[0]
          ) {
            hideDropdown($('.' + config.dropdownActiveClass));
          }
          if (
            $(e.target).closest('li.has-sub-dropdown')[0] !==
            $(e.relatedTarget).closest('li.has-sub-dropdown')[0]
          ) {
            hideSubDropdown($('.' + config.subDropdownActiveClass));
          }
        }
      });
    }
    function unbindHeaderEvents() {
      // Dropdown
      cache.$dropdownParent.off(
        'mouseenter.dropdown touchstart.dropdown focusin.dropdown'
      );
      cache.$dropdownParent.off('mouseleave.dropdown');
      cache.$subMenuLinks.off('touchstart.dropdown');

      // Subdropdowns
      cache.$subDropdownParent.off(
        'mouseenter.subdropdown touchstart.subdropdown focusin.subdropdown'
      );
      cache.$subDropdownParent.off('mouseleave.subdropdown');
      cache.$subDropdownParent.off('touchstart.subdropdown');

      // Focus out detect tabbing outside of dropdown or subdropdown
      cache.$subMenuLinks.off('focusout.dropdown');
    }

    /*
    * fixTo - Complete header
    */
    function createFixTo() {
      var $headerSection = cache.$section;
      var $promosSection = cache.$promosSection;
      var $header = cache.$header;
      var $util = cache.$util;

      // Lock the util or header to the top on scroll
      var scrollLock = $header.data('scroll-lock');
      if (scrollLock == 'util' || scrollLock == 'header') {
        var mindElements = '';
        if ($promosSection.data('fixtoInstance')) {
          mindElements = '#shopify-section-promos';
        }
        $util.fixTo('#page', {
          zIndex: 991,
          mind: mindElements,
        });
      }
      if (scrollLock == 'header') {
        var mindElements = 'header.util';
        if ($promosSection.data('fixtoInstance')) {
          mindElements = 'header.util, #shopify-section-promos';
        }
        $headerSection.fixTo('#page', {
          zIndex: 990,
          mind: mindElements,
        });
        $headerSection.resize(function() {
          if ($(this).width() <= 700) {
            $headerSection.fixTo('stop');
          } else {
            $headerSection.fixTo('start');
          }
        });
      }
    }
    function destroyFixTo() {
      // Destroy header locks
      var $fixToElements = $('header.util, #shopify-section-header').filter(
        function() {
          return $(this).data('fixtoInstance');
        }
      );
      if ($fixToElements.length) {
        $fixToElements.fixTo('destroy');
      }
    }
    function rebuildFixTo() {
      cacheSelectors();
      destroyFixTo();
      createFixTo();
    }

    function unload() {
      // Util
      closePanelMenu();
      unbindUtilHeaderEvents();
      // Header
      unbindHeaderEvents();
      destroyFixTo();
    }

    return {
      init: init,
      unload: unload,
      openSearch: openSearch,
      closeSearch: closeSearch,
      togglePanelMenu: togglePanelMenu,
      openPanelMenu: openPanelMenu,
      closePanelMenu: closePanelMenu,
      rebuildFixTo: rebuildFixTo,
    };
  })();

  /**
   * Footer
   * Global section
   */
  StyleHatch.FooterSection = (function() {
    function FooterSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');
      StyleHatch.Footer.init($container);
    }

    return FooterSection;
  })();
  StyleHatch.FooterSection.prototype = $.extend(
    {},
    StyleHatch.FooterSection.prototype,
    {
      onUnload: function(evt) {
        StyleHatch.Footer.unload(evt);
      },
    }
  );
  // Footer class
  StyleHatch.Footer = (function() {
    function init($container) {
      var $nestedMenu = $container.find('ul.nested-menu');
      $nestedMenu.initNestedMenu();
    }
    function unload(evt) {
      $nestedMenu.destroyNestedMenu();
    }

    return {
      init: init,
      unload: unload,
    };
  })();

  /**
   * Slideshow
   */
  StyleHatch.SlideshowSection = (function() {
    function SlideshowSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');
      StyleHatch.Slideshow.init($container);
    }

    return SlideshowSection;
  })();
  StyleHatch.SlideshowSection.prototype = $.extend(
    {},
    StyleHatch.SlideshowSection.prototype,
    {
      onUnload: function(evt) {
        StyleHatch.Slideshow.unload(evt);
      },
      onBlockSelect: function(evt) {
        StyleHatch.Slideshow.blockSelect(evt);
      },
      onBlockDeselect: function(evt) {
        StyleHatch.Slideshow.blockDeselect(evt);
      },
    }
  );
  // Slideshow Class
  StyleHatch.Slideshow = (function() {
    // Initialization
    function init($container) {
      var $carousel = $container.find('.slideshow-carousel');

      // Preload mobile or desktop slide images based on width
      var mobileWidth = 700;
      var $slideItem = $carousel.find('.slide__item');
      $(window).on('resize', function() {
        $slideItem.each(function(i) {
          var $responsiveImg;
          if ($(window).width() > mobileWidth) {
            $responsiveImg = $(this).find('img.slide__image-desktop');
          } else {
            $responsiveImg = $(this).find('img.slide__image-mobile');
            if ($responsiveImg.length < 1) {
              $responsiveImg = $(this).find('img.slide__image-desktop');
            }
          }

          if ($responsiveImg.hasClass('lazymanual')) {
            $responsiveImg
              .attr('src', $responsiveImg.attr('data-preload'))
              .removeAttr('data-preload');
            $responsiveImg.removeClass('lazymanual').addClass('lazyload');
          }
        });
      });
      $(window).trigger('resize');

      var flickityOptions = $carousel.data('flickity-options');
      // Pass options from data attribute object
      $carousel.flickity(flickityOptions);
      window.addEventListener('touchmove', function() {});

      // Load YouTube videos
      var $videoSlides = $container.find('.slide__item-video');
      $videoSlides.each(function() {
        var $slideVideo = $(this).find('.slide__item-image');
        var videoId = $(this).data('video-id');
        var autoplayMobile = $(this).data('mobile-autoplay');
        var playsinline = 0;
        if (autoplayMobile) {
          playsinline = 1;
        }

        $slideVideo.YTPlayer({
          fitToBackground: false,
          videoId: videoId,
          repeat: true,
          mute: true,
          playerVars: {
            rel: 0,
            mute: 1,
            playsinline: playsinline,
            autoplay: 1,
          },
          callback: function() {
            $(window).trigger('resize');
          },
        });
      });
    }

    function blockSelect(evt) {
      var $block = $('#block-' + evt.detail.blockId);
      var $carousel = $block.closest('.slideshow-carousel');
      var slideIndex = $block.data('slide-index');
      // Pause flickity and select the current block
      $carousel.flickity('pausePlayer');
      $carousel.flickity('select', slideIndex, true, true);
      // Lazyload all images
      $carousel
        .find('img')
        .removeClass('.lazymanual')
        .addClass('lazyload');
    }
    function blockDeselect(evt) {
      var $block = $('#block-' + evt.detail.blockId);
      var $carousel = $block.closest('.slideshow-carousel');
      // Unpause player
      $carousel.flickity('unpausePlayer');
    }
    // Unload
    function unload(evt) {
      var $section = $('.slideshow-' + evt.detail.sectionId);
      var $carousel = $section.find('.slideshow-carousel');
      // Destroy flickity to be rebuilt
      $carousel.flickity('destroy');

      // Destroy YouTube
      var $slideVideo = $section.find('.slide__item-video .slide__item-image');
      // Destroy
      $slideVideo
        .removeData('yt-init')
        .removeData('ytPlayer')
        .removeClass('loaded');

      $(window).off('resize.YTplayer' + $slideVideo.ID);
      $(window).off('scroll.YTplayer' + $slideVideo.ID);

      $slideVideo.$body = null;
      $slideVideo.$node = null;
      $slideVideo.$YTPlayerString = null;
      $slideVideo.player = null;
    }

    // Public methods
    return {
      init: init,
      unload: unload,
      blockSelect: blockSelect,
      blockDeselect: blockDeselect,
    };
  })();

  /**
   * Hero Video
   */
  StyleHatch.HeroVideoSection = (function() {
    function HeroVideoSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');

      StyleHatch.HeroVideo.init($container);
    }

    return HeroVideoSection;
  })();
  StyleHatch.HeroVideoSection.prototype = $.extend(
    {},
    StyleHatch.HeroVideoSection.prototype,
    {
      onUnload: function(evt) {
        StyleHatch.HeroVideo.unload(evt);
      },
    }
  );
  // Slideshow Class
  StyleHatch.HeroVideo = (function() {
    // Initialization
    function init($container) {
      var $heroVideo = $container.find('.wrapper');
      var videoId = $container.data('video-id');
      var autoplayMobile = $container.data('mobile-autoplay');
      var playsinline = 0;
      if (autoplayMobile) {
        playsinline = 1;
      }
      $heroVideo.removeData('ytPlayer');

      $heroVideo.YTPlayer({
        fitToBackground: false,
        videoId: videoId,
        repeat: true,
        mute: true,
        playerVars: {
          rel: 0,
          mute: 1,
          playsinline: playsinline,
          autoplay: 1,
        },
      });
    }

    // Unload
    function unload(evt) {
      var $section = $('.slideshow-' + evt.detail.sectionId);
      var $heroVideo = $section.find('.wrapper');
      // Destroy
      $heroVideo
        .removeData('yt-init')
        .removeData('ytPlayer')
        .removeClass('loaded');
      $heroVideo.find('.ytplayer-container .ytplayer-shield').remove();
    }

    // Public methods
    return {
      init: init,
      unload: unload,
    };
  })();

  /**
   * Maps
   */
  StyleHatch.Maps = (function() {
    var config = {
      zoom: 14,
    };
    var apiStatus = null;
    var apiKey = null;
    var apiKeyReset = false;
    var mapsToLoad = [];

    var mapStyles = {
      standard: [],
      silver: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f5f5',
            },
          ],
        },
        {
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#f5f5f5',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#bdbdbd',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#eeeeee',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e5e5e5',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#ffffff',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dadada',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e5e5e5',
            },
          ],
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [
            {
              color: '#eeeeee',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#c9c9c9',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e',
            },
          ],
        },
      ],
      retro: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#ebe3cd',
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#523735',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#f5f1e6',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#c9b2a6',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#dcd2be',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ae9e90',
            },
          ],
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#93817c',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#a5b076',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#447530',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f1e6',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#fdfcf8',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f8c967',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#e9bc62',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e98d58',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#db8555',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#806b63',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8f7d77',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#ebe3cd',
            },
          ],
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#b9d3c2',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#92998d',
            },
          ],
        },
      ],
      dark: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#212121',
            },
          ],
        },
        {
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#212121',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              color: '#757575',
            },
          ],
        },
        {
          featureType: 'administrative.country',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#bdbdbd',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#181818',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1b1b1b',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#2c2c2c',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8a8a8a',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#373737',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#3c3c3c',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [
            {
              color: '#4e4e4e',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#3d3d3d',
            },
          ],
        },
      ],
      night: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#242f3e',
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#746855',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#242f3e',
            },
          ],
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d59563',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d59563',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#263c3f',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#6b9a76',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#38414e',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#212a37',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9ca5b3',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#746855',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#1f2835',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#f3d19c',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#2f3948',
            },
          ],
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d59563',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#17263c',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#515c6d',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#17263c',
            },
          ],
        },
      ],
      aubergine: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#1d2c4d',
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8ec3b9',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1a3646',
            },
          ],
        },
        {
          featureType: 'administrative.country',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#4b6878',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#64779e',
            },
          ],
        },
        {
          featureType: 'administrative.province',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#4b6878',
            },
          ],
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#334e87',
            },
          ],
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [
            {
              color: '#023e58',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#283d6a',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#6f9ba5',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1d2c4d',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#023e58',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#3C7680',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#304a7d',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#98a5be',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1d2c4d',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#2c6675',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#255763',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#b0d5ce',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#023e58',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#98a5be',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1d2c4d',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#283d6a',
            },
          ],
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [
            {
              color: '#3a4762',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#0e1626',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#4e6d70',
            },
          ],
        },
      ],
    };

    var errors = {
      addressNoResults: StyleHatch.Strings.addressNoResults,
      addressQueryLimit: StyleHatch.Strings.addressQueryLimit,
      addressError: StyleHatch.Strings.addressError,
      authError: StyleHatch.Strings.authError,
    };

    var selectors = {
      section: '[data-section-type="maps"]',
      map: '[data-map]',
      mapOverlay: '[data-map-overlay]',
    };

    var classes = {
      mapError: 'map-selection--load-error',
      errorMsg: 'map-section__errors errors text-center',
    };

    // Global Google function for auth errors
    window.gm_authFailure = function() {
      if (!Shopify.designMode) {
        log('Google Maps authentication error', window.google, apiStatus);
        return;
      }

      $(selectors.section).addClass(classes.mapError);
      $(selectors.map).remove();
      $(selectors.mapOverlay).after(
        '<div class="' +
          classes.errorMsg +
          '">' +
          StyleHatch.Strings.authError +
          '</div>'
      );
    };

    function Map(container) {
      this.$container = $(container);
      this.$map = this.$container.find(selectors.map);
      this.key = this.$map.data('api-key');

      if (this.key != apiKey) {
        apiKey = this.key;
        apiStatus = null;
        apiKeyReset = true;
      }

      if (typeof this.key === 'undefined') {
        return;
      }

      if (apiStatus === 'loaded') {
        this.createMap();
      } else {
        mapsToLoad.push(this);

        if (apiStatus !== 'loading') {
          apiStatus = 'loading';
          if (typeof window.google === 'undefined' || apiKeyReset) {
            $.getScript(
              'https://maps.googleapis.com/maps/api/js?key=' + this.key
            ).then(function() {
              apiStatus = 'loaded';
              apiKeyReset = false;
              initAllMaps();
            });
          }
        }
      }
    }

    function initAllMaps() {
      $.each(mapsToLoad, function(index, instance) {
        instance.createMap();
      });
    }

    function geolocate($map) {
      var deferred = $.Deferred();
      var geocoder = new google.maps.Geocoder();
      var address = $map.data('address-setting');

      geocoder.geocode({address: address}, function(results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
          deferred.reject(status);
        }

        deferred.resolve(results);
      });

      return deferred;
    }

    Map.prototype = $.extend({}, Map.prototype, {
      createMap: function() {
        var $map = this.$map;
        var mapStyle = $map.data('map-style');

        return geolocate($map)
          .then(
            function(results) {
              var mapOptions = {
                zoom: config.zoom,
                center: results[0].geometry.location,
                draggable: false,
                clickableIcons: false,
                scrollwheel: false,
                disableDoubleClickZoom: true,
                disableDefaultUI: true,
                styles: mapStyles[mapStyle],
              };

              var map = (this.map = new google.maps.Map($map[0], mapOptions));
              var center = (this.center = map.getCenter());

              //eslint-disable-next-line no-unused-vars
              var marker = new google.maps.Marker({
                map: map,
                position: map.getCenter(),
              });

              google.maps.event.addDomListener(
                window,
                'resize',
                slate.utils.debounce(function() {
                  google.maps.event.trigger(map, 'resize');
                  map.setCenter(center);
                  $map.removeAttr('style');
                }, 250)
              );
            }.bind(this)
          )
          .fail(function() {
            var errorMessage;

            switch (status) {
              case 'ZERO_RESULTS':
                errorMessage = errors.addressNoResults;
                break;
              case 'OVER_QUERY_LIMIT':
                errorMessage = errors.addresQueryLimit;
                break;
              case 'REQUEST_DENIED':
                errorMessage = errors.authError;
                break;
              default:
                errorMessage = errors.addressError;
                break;
            }

            // Show errors only to merchant in the editor.
            if (Shopify.designMode) {
              $map
                .parent()
                .addClass(classes.mapError)
                .append(
                  '<div class="' +
                    classes.errorMsg +
                    '">' +
                    errorMessage +
                    '</div>'
                );
            }
          });
      },

      onUnload: function() {
        if (this.$map.length === 0) {
          return;
        }
        google.maps.event.clearListeners(this.map, 'resize');
      },
    });

    return Map;
  })();

  /**
   * Page Section - any section that loads pages
   */
  StyleHatch.PageSection = (function() {
    function PageSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');
      StyleHatch.Page.init($container);
    }

    return PageSection;
  })();
  // Featured Text Class
  StyleHatch.Page = (function() {
    // Initialization
    function init($container) {
      // Apply fitVids
      $container.fitVids();
      // Possibly check for oembed data
    }

    // Unload
    function unload(evt) {
      //log('unload Page');
    }

    // Public methods
    return {
      init: init,
      unload: unload,
    };
  })();

  /**
   * Sections - Collection
   * ---------------------------------------------------------------------------
   * Feature collection
   */
  StyleHatch.FeaturedCollectionSection = (function() {
    function FeaturedCollectionSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');
      $container.productBox();

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }
    }

    return FeaturedCollectionSection;
  })();
  StyleHatch.FeaturedCollectionSection.prototype = $.extend(
    {},
    StyleHatch.FeaturedCollectionSection.prototype,
    {
      onUnload: function(evt) {
        var $container = $('#section-' + evt.detail.sectionId);
        var id = $container.attr('data-section-id');
        $container.destroyProductBox();
      },
    }
  );

  StyleHatch.SimpleCollectionSection = (function() {
    function SimpleCollectionSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');
      $container.productBox();

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }
    }

    return SimpleCollectionSection;
  })();
  StyleHatch.SimpleCollectionSection.prototype = $.extend(
    {},
    StyleHatch.SimpleCollectionSection.prototype,
    {
      onUnload: function(evt) {
        var $container = $('#section-' + evt.detail.sectionId);
        var id = $container.attr('data-section-id');

        $container.destroyProductBox();
      },
    }
  );

  /**
   * Instagram - instagram-section
   */

  StyleHatch.instagrams = {};
  StyleHatch.InstagramSection = (function() {
    function InstagramSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');
      var instagram = (this.instagram = '#Instagram-' + id);

      // Only support IE9 and above
      if ($('html').hasClass('lt-ie9')) {
        return false;
      }

      var $shotContainer = $container.find('.instagram-container');
      var $profileLink = $container.find('header a.button, footer a.button');
      var imageCount = $container.data('image-count');
      var accessToken = $container.data('instagram-access-token');
      var apiURL =
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=' +
        accessToken +
        '&count=20';
      // Set how long the localStorage is valid for 12 hours
      var expireTime = 1000 * 60 * 60 * 12; // ms * s * m * 12 hours

      // Helper Text
      var addAccessToken = StyleHatch.Strings.instagramAddToken;
      var invalidAccessToken = StyleHatch.Strings.instagramInvalidToken;
      var rateLimitAccessToken = StyleHatch.Strings.instagramRateLimitToken;

      // AJAX call to load Instagram API data
      var getData = function() {
        // Check if access token exists
        if (accessToken) {
          $.ajax({
            url: apiURL,
            dataType: 'jsonp',
            timeout: 5000,
            success: function(data) {
              switch (data.meta.code) {
                case 400:
                  if (Shopify.designMode) {
                    $shotContainer.attr('data-helper-text', invalidAccessToken);
                    storeWithExpiration.set(accessToken, data, expireTime);
                    $container.show();
                  }
                  break;
                case 429:
                  if (Shopify.designMode) {
                    $shotContainer.attr('data-helper-text', rateLimitAccessToken);
                    $container.show();
                  }
                  break;
                default:
                  loadImages(data);
                  storeWithExpiration.set(accessToken, data, expireTime);
              }
            },
          });
        } else {
          if (Shopify.designMode) {
            // Show helper with details of adding token
            $shotContainer.attr('data-helper-text', addAccessToken);
            $container.show();
          }
        }
      };

      // Load in all the recent media in the Instagram data
      var loadImages = function(data) {
        // Check to ensure valid data
        if (data.data) {
          if (data.data.length < imageCount) {
            var dataCount = data.data.length;
            var settingsCount = imageCount;
            var lastIndex = settingsCount - (settingsCount - dataCount);
            imageCount = data.data.length;

            // Remove the extra holders
            $container.find('.box').each(function(i) {
              if (i >= lastIndex) {
                $(this).hide();
              }
            });
          }
          for (var i = 0; i < imageCount; i++) {
            var images = data.data[i].images,
              // Thumbnail
              thumbnail = images.thumbnail.url,
              thumbnailWidth = images.thumbnail.width,
              // Low Resolution
              low_resolution = images.low_resolution.url,
              low_resolutionWidth = images.low_resolution.width,
              // Standard Resolution
              standard_resolution = images.standard_resolution.url,
              standard_resolutionWidth = images.standard_resolution.width;

            var link = data.data[i].link;
            var likes = data.data[i].likes.count;
            var comments = data.data[i].comments.count;

            var caption = '';
            if (data.data[i].caption) {
              caption = data.data[i].caption.text;
            }

            var $shot = $container.find('.box-' + i);
            var $shotImageContainer = $shot.find('figure > a');
            var $shotLinks = $shot.find('figure > a, li > a');
            var $shotCaption = $shot.find('figcaption > p');
            var $shotLikes = $shot.find('a.likes span.label');
            var $shotComments = $shot.find('a.comments span.label');

            // Add image
            $shotImageContainer.html('<div class="card__image lazyload">');
            var $shotImage = $shotImageContainer.find('.card__image');
            $shotImage.attr('data-sizes', 'auto');
            $shotImage.attr(
              'data-bgset',
              thumbnail +
                ' ' +
                thumbnailWidth +
                'w, ' +
                low_resolution +
                ' ' +
                low_resolutionWidth +
                'w, ' +
                standard_resolution +
                ' ' +
                standard_resolutionWidth +
                'w'
            );

            // Set shot data
            $shotLinks.attr('href', link);
            $shotCaption.html(caption);
            $shotLikes.text(likes);
            $shotComments.text(comments);
          }
          var instagramFeed =
            'https://www.instagram.com/' + data.data[0].user.username;
          $profileLink.attr('href', instagramFeed);
          $profileLink.attr('target', '_blank');

          $container.show();
          $shotContainer.addClass('loaded');
        }
      };

      // localStorage - check to see if the api data exists and is current
      if (storeWithExpiration.get(accessToken) && !Shopify.designMode) {
        var data = storeWithExpiration.get(accessToken);
        loadImages(data);
      } else {
        getData();
      }

      StyleHatch.instagrams[instagram] = this;
      //$container.show();
    }

    return InstagramSection;
  })();
  StyleHatch.InstagramSection.prototype = $.extend(
    {},
    StyleHatch.InstagramSection.prototype,
    {
      onUnload: function() {
        delete StyleHatch.instagrams[this.instagram];
      },
    }
  );

  /**
   * GenericSection
   */
  StyleHatch.GenericSection = (function() {
    function GenericSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr('data-section-id');

      StyleHatch.cacheSelectors();
    }

    return GenericSection;
  })();

  /**
   * Section - Templates
   * ---------------------------------------------------------------------------
   * Set up core functionality for template based sections
   */

  // Product Class
  StyleHatch.Product = (function() {
    function Product(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr('data-section-id');

      this.settings = {
        // Breakpoints from src/stylesheets/global/variables.scss.liquid
        enableHistoryState: $container.data('enable-history-state') || false,
        imageSize: '394x',
        imageZoomSize: null,
        namespace: '.slideshow-' + sectionId,
        sectionId: sectionId,
        zoomEnabled: false,
        lightboxEnabled: false,
        productImageLightboxData: [],
      };

      this.selectors = {
        addToCart: '#AddToCart-' + sectionId,
        addToCartText: '#AddToCartText-' + sectionId,
        comparePrice: '#ComparePrice-' + sectionId,
        originalPrice: '#ProductPrice-' + sectionId,
        SKU: '.variant-sku',
        originalSelectorId: '#ProductSelect-' + sectionId,
        productFeaturedImage: '#FeaturedImage-' + sectionId,
        productImageWrap: '.featured-container-' + sectionId,
        productPrices: '.product-single__price-' + sectionId,
        productThumbImages: '.product-single__thumbnail--' + sectionId,
        productPhoto: '#ProductPhoto-' + sectionId,
        productImage: '#ProductImage-' + sectionId,
        productThumbs: '#ProductThumbs-' + sectionId,
        quantityWrap: '.quantity-' + sectionId,
        quantity: '.quantity-select-' + sectionId,
        cartError: '.cart-error-' + sectionId,
        singleOptionSelector: '.single-option-selector-' + sectionId,
        cartButtons: '#CartButtons-' + sectionId,
        paymentButtonContainer: '#PaymentButtonContainer-' + sectionId
      };

      // Stop parsing if we don't have the product json script tag when loading
      // section in the Theme Editor
      if (!$('#ProductJson-' + sectionId).html()) {
        return;
      }

      this.productSingleObject = JSON.parse(
        document.getElementById('ProductJson-' + sectionId).innerHTML
      );

      this.settings.zoomEnabled = $(this.selectors.productImageWrap).hasClass(
        'featured-zoom'
      );
      this.settings.lightboxEnabled = $(this.selectors.productImageWrap).data(
        'lightbox'
      );

      $container.productBox();

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }

      this._initVariants();
      this._initQuanitySelect();
      this._initImageSwitch();
      // Pre-loading product images to avoid a lag when a thumbnail is clicked, or
      // when a variant is selected that has a variant image
      var _this = this;
      setTimeout(function() {
        theme.Images.preload(
          _this.productSingleObject.images,
          _this.settings.imageSize
        );
      }, 3000);
    }

    Product.prototype = $.extend({}, Product.prototype, {
      _initVariants: function() {
        var options = {
          $container: this.$container,
          enableHistoryState:
            this.$container.data('enable-history-state') || false,
          singleOptionSelector: this.selectors.singleOptionSelector,
          originalSelectorId: this.selectors.originalSelectorId,
          product: this.productSingleObject,
        };

        this.variants = new slate.Variants(options);

        this.$container.on(
          'variantChange' + this.settings.namespace,
          this._updateAddToCart.bind(this)
        );
        this.$container.on(
          'variantImageChange' + this.settings.namespace,
          this._updateImages.bind(this)
        );
        this.$container.on(
          'variantPriceChange' + this.settings.namespace,
          this._updatePrice.bind(this)
        );
        this.$container.on(
          'variantSKUChange' + this.settings.namespace,
          this._updateSKU.bind(this)
        );
      },

      _initQuanitySelect: function() {
        // Quantity Selector
        var $quantitySelect = $(this.selectors.quantity);
        $quantitySelect.each(function() {
          var $el = $(this);
          var $quantityDown = $el.find('.adjust-minus');
          var $quantityUp = $el.find('.adjust-plus');
          var $quantity = $el.find('input.quantity');

          var quantity = $quantity.val();

          $quantityDown.on('click', function(e) {
            quantity = $quantity.val();
            if (quantity > 1) {
              quantity--;
              $quantity.val(quantity);
            }
            e.preventDefault();
          });

          $quantityUp.on('click', function(e) {
            quantity = $quantity.val();
            quantity++;
            $quantity.val(quantity);

            e.preventDefault();
          });
        });
      },

      _initImageSwitch: function() {
        if (!Modernizr.touchevents && this.settings.zoomEnabled) {
          _enableZoom($(this.selectors.productImageWrap));
        }

        // Lightbox
        if (this.settings.lightboxEnabled) {
          var images = this.productSingleObject.images;

          // Calculate current browser size / pixel density to build lightbox data
          StyleHatch.productImageLightboxData = this.settings.productImageLightboxData;
          StyleHatch.$productPhoto = $(this.selectors.productPhoto);
          $(window)
            .on('resize', function() {
              var devicePixelRatio = slate.utils.defaultTo(
                window.devicePixelRatio,
                1
              );
              var windowWidth = $(window).width();
              var width = Math.floor(devicePixelRatio * windowWidth);

              StyleHatch.productImageLightboxData = [];
              for (var i = 0; i < images.length; i++) {
                var image = images[i];
                var sizedImage = theme.Images.getSizedImageUrl(
                  image,
                  width + 'x'
                );
                var obj = {
                  src: sizedImage,
                };
                StyleHatch.productImageLightboxData.push(obj);
              }

            })
            .trigger('resize');

          var $productImageWrap = $(this.selectors.productImageWrap);
          $(this.selectors.productImageWrap)
            .find('a')
            .magnificPopup({
              type: 'image',
              mainClass: 'mfp-with-zoom',
              items: StyleHatch.productImageLightboxData,
              gallery: {
                enabled: true,
              },
              callbacks: {
                beforeOpen: function(e) {
                  var imageIndex = parseInt(
                    $productImageWrap.find('img').attr('data-position')
                  );
                  this.goTo(imageIndex);
                },
              },
            });
        }

        if (!$(this.selectors.productThumbImages).length) {
          return;
        }
        var self = this;

        $(this.selectors.productThumbImages).on('click', function(evt) {
          evt.preventDefault();
          var $el = $(this);
          var imageSrc = $el.find('img').data('img');
          var zoomSrc = $el.find('img').data('highres');

          self._updateResponsiveImage($el);
        });
        
        
        
        
      },

      _updateResponsiveImage: function($el) {
        // Elements
        var $thumbnail = $el;
        var $thumbnailImage = $thumbnail.find('img');
        var $productImage = $(this.selectors.productImage);
        var $container = $productImage.closest('.card__image-container');
        var $zoomWrap = $productImage.closest('.featured-container');
        var $productImageLimit = $productImage.closest('.productimage-limit');

        $productImage.attr({
          // id: this.selectors.productImage,
          // New image data
          src: $thumbnailImage.data('default'),
          alt: $thumbnailImage.attr('alt'),
          srcset: '',
          'data-src': $thumbnailImage.data('src-pattern'),
          'data-aspectratio': $thumbnailImage.data('aspectratio'),
          'data-position': $thumbnailImage.data('position'),
          'data-max-width': $thumbnailImage.data('max-width'),
          'data-widths': '[' + $thumbnailImage.data('widths') + ']',
          // Existing image data
          'data-id': $productImage.data('id'),
          'data-sizes': $productImage.data('sizes'),
        });

        $productImageLimit.css({
          'max-width': $thumbnailImage.data('max-width') + 'px',
        });

        // destroy image zooming if enabled
        if (this.settings.zoomEnabled) {
          _destroyZoom($zoomWrap);
        }

        $container.attr('href', $thumbnail.attr('href'));

        if (!Modernizr.touchevents && this.settings.zoomEnabled) {
          $container.data('zoom', $thumbnail.attr('href'));
          _enableZoom($zoomWrap);
        }

        // Update thumbnail active
        var activeClass = 'active';
        $(this.selectors.productThumbImages).removeClass(activeClass);
        $thumbnail.addClass(activeClass);
      },

      _updateAddToCart: function(evt) {
        var variant = evt.variant;

        if (variant) {
          $(this.selectors.cartError).hide();
          $(this.selectors.productPrices)
            .removeClass('visibility-hidden')
            .attr('aria-hidden', 'true');

          if (variant.available) {
            $(this.selectors.addToCart)
              .removeClass('disabled')
              .prop('disabled', false);
            $(this.selectors.addToCartText).text(StyleHatch.Strings.addToCart);
            $(this.selectors.quantityWrap).show();
            $(this.selectors.cartButtons).addClass('cart-buttons__enabled');
          } else {
            // The variant doesn't exist, disable submit button and change the text.
            // This may be an error or notice that a specific variant is not available.
            $(this.selectors.addToCart)
              .addClass('disabled')
              .prop('disabled', true);
            $(this.selectors.addToCartText).text(StyleHatch.Strings.soldOut);
            $(this.selectors.quantityWrap).hide();
            $(this.selectors.cartButtons).removeClass('cart-buttons__enabled');
          }
        } else {
          $(this.selectors.addToCart)
            .addClass('disabled')
            .prop('disabled', true);
          $(this.selectors.addToCartText).text(StyleHatch.Strings.soldOut);
          $(this.selectors.productPrices)
            .addClass('visibility-hidden')
            .attr('aria-hidden', 'false');
          $(this.selectors.quantityWrap).hide();
          $(this.selectors.cartButtons).removeClass('cart-buttons__enabled');
        }
      },

      _updateImages: function(evt) {
        var variant = evt.variant;

        var sizedImgUrl = theme.Images.getSizedImageUrl(
          variant.featured_image.src,
          this.settings.imageSize
        );
        var zoomSizedImgUrl;

        if (this.settings.zoomEnabled) {
          zoomSizedImgUrl = theme.Images.getSizedImageUrl(
            variant.featured_image.src,
            this.settings.imageZoomSize
          );
        }

        var $thumbnail = $(
          this.selectors.productThumbImages +
            '[data-image-id="' +
            variant.featured_image.id +
            '"]'
        );

        this._updateResponsiveImage($thumbnail);
      },

      _updatePrice: function(evt) {
        var variant = evt.variant;

        // Update the product price
        $(this.selectors.originalPrice).html(
          theme.Currency.formatMoney(variant.price, StyleHatch.currencyFormat)
        );

        // Apply any currency conversions
        if (StyleHatch.currencyConverter) {
          // clear out previous currency attributes
          removeDataAttributes($(this.selectors.originalPrice));
          Currency.convertAll(
            StyleHatch.shopCurrency,
            $('[name=currencies]').val()
          );
          $('.selected-currency').text(Currency.currentCurrency);
        }

        // Update and show the product's compare price if necessary
        if (variant.compare_at_price > variant.price) {
          $(this.selectors.comparePrice)
            .find('span.money')
            .html(
              theme.Currency.formatMoney(
                variant.compare_at_price,
                StyleHatch.currencyFormat
              )
            );
          $(this.selectors.comparePrice).show();
        } else {
          $(this.selectors.comparePrice).hide();
        }
      },

      _updateSKU: function(evt) {
        var variant = evt.variant;

        // Update the sku
        $(this.selectors.SKU).html(variant.sku);
      },

      onUnload: function() {
        this.$container.off(this.settings.namespace);
        // destroys on close
        $.magnificPopup.close();
        if (this.settings.zoomEnabled) {
          _destroyZoom($(this.selectors.productImageWrap));
        }
        if (StyleHatch.ajaxCartEnable) {
          StyleHatch.AjaxCart.unload();
        }
        this.$container.destroyProductBox();
      },
    });

    function _enableZoom($el) {
      var $easyzoom = $el.easyZoom();
    }

    function _destroyZoom($el) {
      var easyZoomApi = $el.easyZoom().data('easyZoom');
      easyZoomApi.teardown();
    }

    return Product;
  })();

  // Collection (template) Class
  StyleHatch.Collection = (function() {
    var constants = {
      SORT_BY: 'sort_by',
      DEFAULT_SORT: 'title-ascending',
      VIEW: 'view',
    };

    var selectors = {
      sortSelection: '#SortBy',
      defaultSort: '.sort-by__default-sort',
      viewChange: '.change-view',
      advancedFilter: '.advanced-filter a',
      filterCollection: '.mobile-aside-container > a.button.simple',
      mobileAside: '.mobile-aside-container aside',
      productBox: '.box.product .image-table',
      nestedMenu: 'ul.nested-menu',
    };

    function Collection(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr('data-section-id');

      this.$sortSelect = $(selectors.sortSelection, $container);
      this.defaultSort = this._getDefaultSortValue();

      this.$viewButton = $(selectors.viewChange);

      this.$sortSelect.on('change', this._onSortChange.bind(this));
      this.$viewButton.on('click', this._onViewChange);

      this.$productbox = $(selectors.productBox, $container);

      this._initSidebar();
      this._initAdvancedTags();

      $container.productBox();

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }
    }

    Collection.prototype = $.extend({}, Collection.prototype, {
      _onSortChange: function(evt) {
        var query = '';

        this.sort = this._getSortValue();

        if (this.sort !== this.defaultSort) {
          query = [constants.SORT_BY + '=' + this.sort];
        }

        var url = document.URL;
        var hasParams = url.indexOf('?') > -1;

        if (hasParams) {
          document.location.href = replaceUrlParam(
            url,
            constants.SORT_BY,
            this.sort
          );
        } else {
          var search = (document.location.search = query.length
            ? '?' + query
            : '');
          document.location.href = this.$filterSelect.val() + search;
        }
      },
      _getSortValue: function() {
        return this.$sortSelect.val() || this.defaultSort;
      },
      _getDefaultSortValue: function() {
        return (
          $(selectors.defaultSort, this.$container).val() ||
          constants.DEFAULT_SORT
        );
      },
      _onViewChange: function(evt) {
        var query = '';

        var view = $(this).data('view');
        var url = document.URL;
        var hasParams = url.indexOf('?') > -1;

        if (hasParams) {
          window.location = replaceUrlParam(url, 'view', view);
        } else {
          window.location = url + '?view=' + view;
        }

        evt.preventDefault();
      },
      _initSidebar: function() {
        $(selectors.filterCollection).on('click', function(e) {
          $(selectors.mobileAside).slideToggle();
          e.preventDefault();
        });

        this.$container.find(selectors.nestedMenu).initNestedMenu();
      },
      _initAdvancedTags: function() {
        var $filters = $(selectors.advancedFilter),
          $tag,
          tagGroup,
          tagHandle,
          $activeTagInGroup;

        $filters.on('click', function(e) {
          $tag = $(this).parent();
          tagGroup = $tag.data('group');
          tagHandle = $tag.data('handle');
          $activeTagInGroup = $('.active[data-group="' + tagGroup + '"]');

          // If the tag clicked is not already active and its group contains an active tag
          // we will swap tag within the group
          if (!$tag.hasClass('active') && $activeTagInGroup.size()) {
            e.preventDefault();
            location.href = location.href
              // swap tag
              .replace($activeTagInGroup.data('handle'), tagHandle)
              // go back to page 1
              .replace(/(&page=\d+)|(page=\d+&)|(\?page=\d+$)/, '');
          }
        });
      },
      onUnload: function() {
        this.$sortSelect.off('change');
        this.$viewButton.off('click');
        $(selectors.advancedFilter).off('click');
        this.$container.destroyProductBox();
        this.$container.find(selectors.nestedMenu).destroyNestedMenu();
      },
    });

    return Collection;
  })();

  // List collections (template) Class
  StyleHatch.ListCollections = (function() {
    var selectors = {
      productBox: '.box .image-table',
    };

    function ListCollections(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr('data-section-id');
      var layout = $container.data('layout');
      var $cardImage = $container.find('.card__image');

      this.$productbox = $(selectors.productBox, $container);

      if (layout == 'preview') {
        $container.productBox();
      }

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }
    }

    ListCollections.prototype = $.extend({}, ListCollections.prototype, {
      onUnload: function() {
        $container.destroyProductBox();
      },
    });

    return ListCollections;
  })();

  // Blog and Article (template) Class
  StyleHatch.BlogArticle = (function() {
    var selectors = {
      filterCollection: '.mobile-aside-container > a.button.simple',
      mobileAside: '.mobile-aside-container aside',
      nestedMenu: 'ul.nested-menu',
    };

    function BlogArticle(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr('data-section-id');
      this._initSidebar();
      StyleHatch.videoLayout();
    }

    BlogArticle.prototype = $.extend({}, BlogArticle.prototype, {
      _initSidebar: function() {
        $(selectors.filterCollection).on('click', function(e) {
          $(selectors.mobileAside).slideToggle();
          e.preventDefault();
        });

        this.$container.find(selectors.nestedMenu).initNestedMenu();
      },
      onUnload: function() {
        $(selectors.filterCollection).off('click');
        this.$container.find(selectors.nestedMenu).destroyNestedMenu();
      },
    });

    return BlogArticle;
  })();

  // Password (template) Class
  StyleHatch.Password = (function() {
    function Password(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr('data-section-id');

      var $loginForm = $('#login_form');

      $('.login-popup').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade',
        closeBtnInside: false,
        callbacks: {
          afterClose: function() {
            $('a').blur();
            $loginForm.find('.errors').remove();
          },
        },
      });

      // On MailChimp form submit
      $('#mc-embedded-subscribe-form').on('submit', function() {
        $('p.signup-message').hide();
        $('p.thanks-message').show();
        $(this)
          .find('.input-row')
          .hide();
      });

      // If error in password form
      if ($loginForm.find('.errors').length > 0) {
        $('.login-popup').magnificPopup('open');
      }
    }

    Password.prototype = $.extend({}, Password.prototype, {
      onUnload: function() {
        // destroys on close
        $.magnificPopup.close();
        $('#mc-embedded-subscribe-form').off('submit');
      },
    });

    return Password;
  })();

  // Cart (template) Class
  StyleHatch.Cart = (function() {
    function Cart(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr('data-section-id');
      StyleHatch.quantitySelect();
    }

    Cart.prototype = $.extend({}, Cart.prototype, {
      onUnload: function() {},
    });

    return Cart;
  })();

  /**
   * Classes - complex functionality
   * ---------------------------------------------------------------------------
   * AjaxCart
   * Currency
   */

  /*
  * Add product to cart without page refresh
  */
  StyleHatch.AjaxCart = (function() {
    var selectors = {
      body: 'body',
      util: 'header.util',
      cartPreview: 'header.util .cart-preview',
      addToCartForm: '[data-AddToCartForm] > form',
      addToCartButton: '[data-AddToCartForm]',
      cartButton: '[data-CartButton]',
      cartCount: '#CartCount',
      cartCost: '#CartCost',
    };
    var config = {
      addURL: '/cart/add.js',
      cartURL: '/cart.js',
      clearURL: '/cart/clear.js',
    };
    var cache = {};
    function cacheSelectors() {
      cache = {
        $body: $(selectors.body),
        $util: $(selectors.util),
        $cartPreview: $(selectors.cartPreview),
        $addToCartForm: $(selectors.addToCartForm),
        $addToCartButton: $(selectors.addToCartButton),
        $cartButton: $(selectors.cartButton),
        $cartCount: $(selectors.cartCount),
        $cartCost: $(selectors.cartCost),
      };
    }

    function init() {
      cacheSelectors();
      bindEvents();
    }

    function submitCart($form) {
      var $form = $form;
      var $cartError = $form.find('.cart-error');
      // Change button to added to cart and disabled
      var cartButtonText = $form.find('[data-AddToCartText]').html();
      var cartButtonAddedText = $form
        .find('[data-AddToCartText]')
        .attr('data-added');
      var cartButtonAddingText = $form
        .find('[data-AddToCartText]')
        .attr('data-adding');

      $form
        .find('[data-AddToCart]')
        .addClass('added')
        .prop('disabled', true);
      $form.find('[data-AddToCartText]').html(cartButtonAddingText);

      $cartError.hide();

      $.post(
        config.addURL,
        $form.serialize(),
        function(data) {
          // Last product added data
          var productData = data;

          // Get the data from the cart for totals
          $.get(
            config.cartURL,
            function(data) {
              var cartData = data;

              // Update cart button count & price
              updateCartButton(cartData);

              // Show the recent item added to the cart
              showCartPreview(productData, cartData);

              // Change cart button text back
              // Auto hide after 6000ms
              var resetCartButton;
              resetCartButton = setTimeout(function() {
                $form
                  .find('[data-AddToCart]')
                  .removeClass('added')
                  .prop('disabled', false);
                $form.find('[data-AddToCartText]').html(cartButtonText);
              }, 500);
            },
            'json'
          );
        },
        'text'
      ).error(function(data) {
        if (typeof data != 'undefined' && typeof data.status != 'undefined') {
          var responseText = JSON.parse(data.responseText);
          $cartError.html(
            '<strong>' +
              responseText.message +
              ':</strong> <em>' +
              responseText.description +
              '<em>'
          );
          $cartError.slideDown();
        }
        // manually submit the form
        // $form.addClass('noAJAX');
        // $form.submit();
        // Change cart button text back
        // Auto hide after 6000ms
        var resetCartButton;
        resetCartButton = setTimeout(function() {
          $form
            .find('[data-AddToCart]')
            .removeClass('added')
            .prop('disabled', false);
          $form.find('[data-AddToCartText]').html(cartButtonText);
        }, 500);
      });
      return false;
    }
    function clearCart() {
      $.post(config.clearURL);
    }
    function updateCartButton(cartData) {
      var $cartButton = cache.$cartButton;
      var $cartCount = cache.$cartCount;
      var $cartCost = cache.$cartCost;

      var itemCount = cartData.item_count;
      var totalPrice = theme.Currency.formatMoney(
        cartData.total_price,
        StyleHatch.currencyFormat
      );

      $cartCount.text(itemCount);
      $cartCost.removeClass('money');
      $cartCost.html('<span class="money">' + totalPrice + '</span>');

      // If Currency convertor has been added
      if (StyleHatch.currencyConverter) {
        Currency.convertAll(
          StyleHatch.shopCurrency,
          jQuery('[name=currencies]').val()
        );
      }
    }
    function showCartPreview(productData, cartData) {
      var $util = cache.$util;
      var $cartPreview = cache.$cartPreview;

      clearTimeout(cache.hideCartPreview);
      cache.$cartPreview.hide();

      // Cart Data
      var itemCount = cartData.item_count;
      var totalPrice = theme.Currency.formatMoney(
        cartData.total_price,
        StyleHatch.currencyFormat
      );

      // Recent Added Product Data
      var productData = JSON.parse(productData);
      var productTitle = productData.product_title;
      var productVariant = productData.variant_options;
      var productImage = productData.image;
      var productURL = productData.url;
      var productPrice = theme.Currency.formatMoney(
        productData.price,
        StyleHatch.currencyFormat
      );
      var productQuantity = productData.quantity;
      var productTotal = theme.Currency.formatMoney(
        productData.line_price,
        StyleHatch.currencyFormat
      );

      // Set Product Details
      var $productImage = $cartPreview.find('.product-image').empty();
      $productImage.append(
        '<img src="' + productImage + '" alt="' + productTitle + '">'
      );
      $productImage.attr('href', productURL);

      var $productTitle = $cartPreview.find('.product-title');
      $productTitle.html(productTitle);
      $productTitle.attr('href', productURL);

      var $productVarient = $cartPreview.find('.product-variant').empty();
      $.each(productVariant, function() {
        var variantStr = this;
        if (variantStr.toLowerCase().indexOf('default title') < 0) {
          $productVarient.show();
          $productVarient.append('<li>' + variantStr + '</li>');
        } else {
          $productVarient.hide();
        }
      });

      var $productPrice = $cartPreview.find('.product-price');
      $productPrice.removeClass('money');
      $productPrice.html('<span class="money">' + productPrice + '</span>');

      // Set Cart Totals
      var $itemCount = $cartPreview.find('.item-count');
      $itemCount.text(itemCount);

      if (itemCount > 1) {
        $cartPreview.find('.count.plural').show();
        $cartPreview.find('.count.singular').hide();
      } else {
        $cartPreview.find('.count.plural').hide();
        $cartPreview.find('.count.singular').show();
      }

      var $totalPrice = $cartPreview.find('.total-price');
      $totalPrice.html('<span class="money">' + totalPrice + '</span>');

      var utilHeight = $util.height();
      $cartPreview.css({
        top: utilHeight,
      });

      // Fade in the preview
      $cartPreview.fadeIn(300);

      // Auto hide after 6000ms
      cache.hideCartPreview = setTimeout(function() {
        $cartPreview.fadeOut(300);
      }, 6000);

      $cartPreview.find('a.continue-shopping').on('click', function(e) {
        $cartPreview.fadeOut(300);
        e.preventDefault();
      });

      // If Currency convertor has been added
      if (StyleHatch.currencyConverter) {
        Currency.convertAll(
          StyleHatch.shopCurrency,
          jQuery('[name=currencies]').val()
        );
      }
    }

    /*
    * Events
    */
    function bindEvents() {
      cache.$addToCartForm.each(function() {
        $(this).on('submit', function(e) {
          var $form = $(this);
          submitCart($form);
          e.preventDefault();
        });
      });
    }
    function unbindEvents() {
      cache.$addToCartForm.off('submit');
    }

    function unload() {
      unbindEvents();
      clearTimeout(cache.hideCartPreview);
      cache.$cartPreview.hide();
    }

    return {
      init: init,
      clearCart: clearCart,
      unload: unload,
    };
  })();

  /*
  * Currency converter
  */
  StyleHatch.CurrencyConverter = (function() {
    var selectors = {
      body: 'body',
      money: 'span.money',
    };
    var config = {
      enabled: false,
    };
    var cache = {};
    function cacheSelectors() {
      cache = {
        $body: $(selectors.body),
        $money: $(selectors.money),
      };
    }

    // Initialization
    function init() {
      cacheSelectors();
      convert();
    }

    // Methods
    function convert() {
      // Get current currency based on cookie
      config.cookieCurrency = Currency.cookie.read();

      // Make sure customer account pages have proper spans
      $('span.money span.money').each(function() {
        $(this)
          .parents(selectors.money)
          .removeClass('money');
      });

      /* Saving the current price */
      cache.$money.each(function() {
        if (Currency.currentCurrency !== '') {
          $(this).attr(
            'data-currency-' + Currency.currentCurrency,
            $(this).html()
          );
        } else {
          $(this).attr(
            'data-currency-' + StyleHatch.shopCurrency,
            $(this).html()
          );
        }
      });

      // If there's no cookie.
      if (config.cookieCurrency == null) {
        if (StyleHatch.shopCurrency !== StyleHatch.defaultCurrency) {
          Currency.convertAll(
            StyleHatch.shopCurrency,
            StyleHatch.defaultCurrency
          );
        } else {
          Currency.currentCurrency = StyleHatch.defaultCurrency;
        }
      } else if (
        $('[name=currencies]').size() &&
        $(
          '[name=currencies] option[value=' + config.cookieCurrency + ']'
        ).size() === 0
      ) {
        // If the cookie value does not correspond to any value in the currency dropdown.
        Currency.currentCurrency = StyleHatch.shopCurrency;
        Currency.cookie.write(StyleHatch.shopCurrency);
      } else if (config.cookieCurrency === StyleHatch.shopCurrency) {
        Currency.currentCurrency = StyleHatch.shopCurrency;
      } else {
        Currency.convertAll(StyleHatch.shopCurrency, config.cookieCurrency);
      }

      // On currency change
      $('[name=currencies]')
        .val(Currency.currentCurrency)
        .change(function() {
          var newCurrency = $(this).val();
          Currency.convertAll(Currency.currentCurrency, newCurrency);
          $('.selected-currency').text(Currency.currentCurrency);

          // If the currency is the store currency, hide the cart disclaimer
          if ($('p.currency-at-checkout').length > 0) {
            if (Currency.currentCurrency == StyleHatch.shopCurrency) {
              $('p.currency-at-checkout').hide();
            } else {
              $('p.currency-at-checkout').show();
            }
          }
        });

      // Update selected currency
      $('[name=currencies]')
        .val(Currency.currentCurrency)
        .change();
    }

    // Public methods
    return {
      init: init,
      config: config,
      convert: convert,
    };
  })();

  /**
   * Slate & Theme Functionality
   * ------------------------------------------------------------------------------
   */
  window.theme = window.theme || {};
  window.slate = window.slate || {};

  /**
   * Image Helper Functions
   * -----------------------------------------------------------------------------
   * A collection of functions that help with basic image operations.
   *
   */
  theme.Images = (function() {
    /**
     * Preloads an image in memory and uses the browsers cache to store it until needed.
     *
     * @param {Array} images - A list of image urls
     * @param {String} size - A shopify image size attribute
     */

    function preload(images, size) {
      if (typeof images === 'string') {
        images = [images];
      }

      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        this.loadImage(this.getSizedImageUrl(image, size));
      }
    }

    /**
     * Loads and caches an image in the browsers cache.
     * @param {string} path - An image url
     */
    function loadImage(path) {
      new Image().src = path;
    }

    /**
     * Swaps the src of an image for another OR returns the imageURL to the callback function
     * @param image
     * @param element
     * @param callback
     */
    function switchImage(image, element, callback) {
      var size = this.imageSize(element.src);
      var imageUrl = this.getSizedImageUrl(image.src, size);

      if (callback) {
        callback(imageUrl, image, element); // eslint-disable-line callback-return
      } else {
        element.src = imageUrl;
      }
    }

    /**
     * +++ Useful
     * Find the Shopify image attribute size
     *
     * @param {string} src
     * @returns {null}
     */
    function imageSize(src) {
      var match = src.match(
        /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/
      );

      if (match !== null) {
        return match[1];
      } else {
        return null;
      }
    }

    /**
     * +++ Useful
     * Adds a Shopify size attribute to a URL
     *
     * @param src
     * @param size
     * @returns {*}
     */
    function getSizedImageUrl(src, size) {
      if (size == null) {
        return src;
      }

      if (size === 'master') {
        return this.removeProtocol(src);
      }

      var match = src.match(
        /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
      );

      if (match != null) {
        var prefix = src.split(match[0]);
        var suffix = match[0];

        return this.removeProtocol(prefix[0] + '_' + size + suffix);
      }

      return null;
    }

    function removeProtocol(path) {
      return path.replace(/http(s)?:/, '');
    }

    return {
      preload: preload,
      loadImage: loadImage,
      switchImage: switchImage,
      imageSize: imageSize,
      getSizedImageUrl: getSizedImageUrl,
      removeProtocol: removeProtocol,
    };
  })();

  /**
   * Currency Helpers
   * -----------------------------------------------------------------------------
   * A collection of useful functions that help with currency formatting
   *
   * Current contents
   * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
   *
   * Alternatives
   * - Accounting.js - http://openexchangerates.github.io/accounting.js/
   *
   */

  theme.Currency = (function() {
    var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

    function formatMoney(cents, format) {
      if (typeof cents === 'string') {
        cents = cents.replace('.', '');
      }
      var value = '';
      var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
      var formatString = format || moneyFormat;

      function formatWithDelimiters(number, precision, thousands, decimal) {
        precision = slate.utils.defaultTo(precision, 2);
        thousands = slate.utils.defaultTo(thousands, ',');
        decimal = slate.utils.defaultTo(decimal, '.');

        if (isNaN(number) || number == null) {
          return 0;
        }

        number = (number / 100.0).toFixed(precision);

        var parts = number.split('.');
        var dollarsAmount = parts[0].replace(
          /(\d)(?=(\d\d\d)+(?!\d))/g,
          '$1' + thousands
        );
        var centsAmount = parts[1] ? decimal + parts[1] : '';

        return dollarsAmount + centsAmount;
      }

      switch (formatString.match(placeholderRegex)[1]) {
        case 'amount':
          value = formatWithDelimiters(cents, 2);
          break;
        case 'amount_no_decimals':
          value = formatWithDelimiters(cents, 0);
          break;
        case 'amount_with_comma_separator':
          value = formatWithDelimiters(cents, 2, '.', ',');
          break;
        case 'amount_no_decimals_with_comma_separator':
          value = formatWithDelimiters(cents, 0, '.', ',');
          break;
        case 'amount_no_decimals_with_space_separator':
          value = formatWithDelimiters(cents, 0, ' ');
          break;
      }

      return formatString.replace(placeholderRegex, value);
    }

    return {
      formatMoney: formatMoney,
    };
  })();

  /**
   * Utility helpers
   * -----------------------------------------------------------------------------
   * A collection of useful functions for dealing with arrays and objects
   *
   * @namespace utils
   */

  slate.utils = {
    /**
     * Return an object from an array of objects that matches the provided key and value
     *
     * @param {array} array - Array of objects
     * @param {string} key - Key to match the value against
     * @param {string} value - Value to get match of
     */
    findInstance: function(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }
    },

    /**
     * Remove an object from an array of objects by matching the provided key and value
     *
     * @param {array} array - Array of objects
     * @param {string} key - Key to match the value against
     * @param {string} value - Value to get match of
     */
    removeInstance: function(array, key, value) {
      var i = array.length;
      while (i--) {
        if (array[i][key] === value) {
          array.splice(i, 1);
          break;
        }
      }

      return array;
    },

    /**
     * _.compact from lodash
     * Remove empty/false items from array
     * Source: https://github.com/lodash/lodash/blob/master/compact.js
     *
     * @param {array} array
     */
    compact: function(array) {
      var index = -1;
      var length = array == null ? 0 : array.length;
      var resIndex = 0;
      var result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    },

    /**
     * _.defaultTo from lodash
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
     *
     * @param {*} value - Value to check
     * @param {*} defaultValue - Default value
     * @returns {*} - Returns the resolved value
     */
    defaultTo: function(value, defaultValue) {
      return value == null || value !== value ? defaultValue : value;
    },

    /**
     * _.debounce from underscore
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing.
     *
     * @param {*} func - Function to call
     * @param {*} wait - ms delay (250)
     * @param {*} immediate - bool
     */

    debounce: function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
  };

  /**
   * Variant Selection scripts
   * ------------------------------------------------------------------------------
   *
   * Handles change events from the variant inputs in any `cart/add` forms that may
   * exist. Also updates the master select and triggers updates when the variants
   * price or image changes.
   *
   * @namespace variants
   */

  slate.Variants = (function() {
    /**
     * Variant constructor
     *
     * @param {object} options - Settings from `product.js`
     */
    function Variants(options) {
      this.$container = options.$container;
      this.product = options.product;
      this.singleOptionSelector = options.singleOptionSelector;
      this.originalSelectorId = options.originalSelectorId;
      this.enableHistoryState = options.enableHistoryState;
      this.currentVariant = this._getVariantFromOptions();

      $(this.singleOptionSelector, this.$container).on(
        'change',
        this._onSelectChange.bind(this)
      );
    }

    Variants.prototype = $.extend({}, Variants.prototype, {
      /**
       * Get the currently selected options from add-to-cart form. Works with all
       * form input elements.
       *
       * @return {array} options - Values of currently selected variants
       */
      _getCurrentOptions: function() {
        var currentOptions = $.map(
          $(this.singleOptionSelector, this.$container),
          function(element) {
            var $element = $(element);
            var type = $element.attr('type');
            var currentOption = {};

            if (type === 'radio' || type === 'checkbox') {
              if ($element[0].checked) {
                currentOption.value = $element.val();
                currentOption.index = $element.data('index');

                return currentOption;
              } else {
                return false;
              }
            } else {
              currentOption.value = $element.val();
              currentOption.index = $element.data('index');

              return currentOption;
            }
          }
        );

        // remove any unchecked input values if using radio buttons or checkboxes
        currentOptions = slate.utils.compact(currentOptions);

        return currentOptions;
      },

      /**
       * Find variant based on selected values.
       *
       * @param  {array} selectedValues - Values of variant inputs
       * @return {object || undefined} found - Variant object from product.variants
       */
      _getVariantFromOptions: function() {
        var selectedValues = this._getCurrentOptions();
        var variants = this.product.variants;
        var found = false;

        variants.forEach(function(variant) {
          var satisfied = true;
          var options = variant.options;

          selectedValues.forEach(function(option) {
            if (satisfied) {
              satisfied = option.value === variant[option.index];
            }
          });

          if (satisfied) {
            found = variant;
          }
        });

        return found || null;
      },

      /**
       * Event handler for when a variant input changes.
       */
      _onSelectChange: function() {
        var variant = this._getVariantFromOptions();

        this.$container.trigger({
          type: 'variantChange',
          variant: variant,
        });

        if (!variant) {
          return;
        }

        this._updateMasterSelect(variant);
        this._updateImages(variant);
        this._updatePrice(variant);
        this._updateSKU(variant);
        this.currentVariant = variant;

        if (this.enableHistoryState) {
          this._updateHistoryState(variant);
        }
      },

      /**
       * Trigger event when variant image changes
       *
       * @param  {object} variant - Currently selected variant
       * @return {event}  variantImageChange
       */
      _updateImages: function(variant) {
        var variantImage = variant.featured_image || {};
        var currentVariantImage = this.currentVariant.featured_image || {};

        if (
          !variant.featured_image ||
          variantImage.src === currentVariantImage.src
        ) {
          return;
        }

        this.$container.trigger({
          type: 'variantImageChange',
          variant: variant,
        });
      },

      /**
       * Trigger event when variant price changes.
       *
       * @param  {object} variant - Currently selected variant
       * @return {event} variantPriceChange
       */
      _updatePrice: function(variant) {
        if (
          variant.price === this.currentVariant.price &&
          variant.compare_at_price === this.currentVariant.compare_at_price
        ) {
          return;
        }

        this.$container.trigger({
          type: 'variantPriceChange',
          variant: variant,
        });
      },

      /**
       * Trigger event when variant sku changes.
       *
       * @param  {object} variant - Currently selected variant
       * @return {event} variantSKUChange
       */
      _updateSKU: function(variant) {
        if (variant.sku === this.currentVariant.sku) {
          return;
        }

        this.$container.trigger({
          type: 'variantSKUChange',
          variant: variant,
        });
      },

      /**
       * Update history state for product deeplinking
       *
       * @param  {variant} variant - Currently selected variant
       * @return {k}         [description]
       */
      _updateHistoryState: function(variant) {
        if (!history.replaceState || !variant) {
          return;
        }

        var newurl =
          window.location.protocol +
          '//' +
          window.location.host +
          window.location.pathname +
          '?variant=' +
          variant.id;
        window.history.replaceState({path: newurl}, '', newurl);
      },

      /**
       * Update hidden master select of variant change
       *
       * @param  {variant} variant - Currently selected variant
       */
      _updateMasterSelect: function(variant) {
        $(this.originalSelectorId, this.$container)[0].value = variant.id;
      },
    });

    return Variants;
  })();

  /**
   * Global functionality
   * ---------------------------------------------------------------------------
   */

  /*
  * Basic plugins to handle responsive product images
  */
  $.fn.extend({
    // product grid item click events
    productBox: function() {
      var $productBox = $(this).find('.box.product figure');
      $productBox.on('click', function(e) {
        // go to product URL unless clicking on vendor link
        if (
          $(e.target).is('.vendor') ||
          $(e.target)
            .parent()
            .is('.vendor')
        ) {
          //log('is vendor');
        } else {
          e.preventDefault();
          var productURL = $(this)
            .find('a')
            .attr('href');
          // Open link in new window for tabs
          if (e.shiftKey || e.ctrlKey || e.metaKey) {
            window.open(productURL, '_blank');
          } else {
            window.location = productURL;
          }
        }
      });
      // IE fix for object-fit
      if (!Modernizr.objectfit) {
        $productBox.find('.product_card__image-wrapper').each(function() {
          var $container = $(this),
            $altImg = $container.find('.product_card__image.alt'),
            imgUrl = $container.find('img').prop('src');
          $altImg.hide();
          $container.addClass('ie-fallback lazyload');
        });
      }
    },
    // remove product box
    destroyProductBox: function() {
      var $productBox = $(this).find('.box.product figure');
      $productBox.off('click');
    },

    // Nested menu
    initNestedMenu: function() {
      var $nestedNav = $(this);
      var $nestedLink = $nestedNav.find('a[aria-haspopup="true"]');

      var _closeCurrentChild = function($menu) {
        var $expandedItem = $menu.find('li.has-dropdown.expanded');
        if ($expandedItem.length > 0) {
          $expandedItem.removeClass('expanded');

          var $expandedItemLink = $expandedItem.find('> a');
          $expandedItemLink.attr('aria-expanded', 'false');

          var $dropdown = $expandedItem.find('> ul.dropdown');
          $dropdown.attr('aria-hidden', 'true');
          $dropdown.slideUp();

          var $dropdownLinks = $dropdown.find('a');
          $dropdownLinks.attr('tabindex', '-1');
          _closeCurrentGrandchild($menu);
        }
      };
      var _closeCurrentGrandchild = function($menu) {
        var $expandedItem = $menu.find('li.has-sub-dropdown.expanded');
        if ($expandedItem.length > 0) {
          $expandedItem.removeClass('expanded');

          var $expandedItemLink = $expandedItem.find('> a');
          $expandedItemLink.attr('aria-expanded', 'false');

          var $dropdown = $expandedItem.find('> ul.sub-dropdown');
          $dropdown.attr('aria-hidden', 'true');
          $dropdown.slideUp();

          var $dropdownLinks = $dropdown.find('a');
          $dropdownLinks.attr('tabindex', '-1');
          _closeCurrentGrandchild($menu);
        }
      };

      $nestedLink.on('click', function(e) {
        var $el = $(this);
        var $parentItem = $el.parent();
        var $dropdown = $parentItem.find('> ul');
        var $dropdownLinks = $parentItem.find('> ul > li > a');
        var $menu = $el.closest('ul.nested-menu');

        if ($el.attr('aria-expanded') !== 'true') {
          e.preventDefault();

          if ($parentItem.hasClass('has-dropdown')) {
            // child level
            _closeCurrentChild($menu);
          } else {
            // grandchild level
            _closeCurrentGrandchild($menu);
          }

          // Element changes
          $el.attr('aria-expanded', 'true');

          // Parent changes
          $parentItem.addClass('expanded');

          // Dropdown changes
          $dropdown.attr('aria-hidden', 'false');
          $dropdownLinks.attr('tabindex', '0');
          $dropdown.slideDown();
        }
      });
    },
    destroyNestedMenu: function() {
      var $nestedNav = $(this);
      var $nestedLink = $nestedNav.find('a[aria-haspopup="true"]');
      $nestedLink.off('click');
    },
  });
  /*
  * Refresh all fixTo elements
  * - called when elements slide in/out
  */
  StyleHatch.refreshFixTo = function() {
    StyleHatch.Promos.refreshFixTo();
    var $fixToElements = $('*').filter(function() {
      return $(this).data('fixtoInstance');
    });
    // Only refresh the ones _running
    $fixToElements.each(function(i) {
      if ($(this).data('fixto-instance')._running) {
        $(this).fixTo('refresh');
      }
    });
  };
  // Apply fitvids
  StyleHatch.videoLayout = function() {
    $('.rte').fitVids();
  };
  // Customer account logins
  StyleHatch.loginForms = function() {
    function showRecoverPasswordForm() {
      StyleHatch.cache.$recoverPasswordForm.show();
      StyleHatch.cache.$customerLoginForm.hide();
    }

    function hideRecoverPasswordForm() {
      StyleHatch.cache.$recoverPasswordForm.hide();
      StyleHatch.cache.$customerLoginForm.show();
    }

    StyleHatch.cache.$recoverPasswordLink.on('click', function(evt) {
      evt.preventDefault();
      showRecoverPasswordForm();
      StyleHatch.updateHash('recover');
    });

    StyleHatch.cache.$hideRecoverPasswordLink.on('click', function(evt) {
      evt.preventDefault();
      hideRecoverPasswordForm();
      StyleHatch.updateHash();
    });

    // Allow deep linking to recover password form
    if (StyleHatch.getHash() == '#recover') {
      showRecoverPasswordForm();
    }
  };

  // Template specific initalization
  StyleHatch.initTemplates = function() {
    var $body = StyleHatch.cache.$body;

    // Grab the template name from the body
    var template = $body.data('template');

    // Execute specific functionality
    switch (template) {
      case 'addresses':
        StyleHatch.initCustomerAddressTemplate();
        break;

      default:
      //log('Template: Default');
    }
  };
  // Customer Address Page
  StyleHatch.initCustomerAddressTemplate = function() {
    if (StyleHatch.addressJSValidation) {
      var $submit = $('.customer-address input[type="submit"]');

      $submit.on('click', function(e) {
        var $form = $(this).closest('form');

        // Required fields
        var $lastName = $form.find('input[name="address[last_name]"]');
        var $address1 = $form.find('input[name="address[address1]"]');
        var $city = $form.find('input[name="address[city]"]');
        var $country = $form.find('select[name="address[country]"]');
        var $province = $form.find('select[name="address[province]"]');
        var $zip = $form.find('input[name="address[zip]"]');

        if (!$lastName.val()) {
          $lastName.addClass('required');
        }
        if (!$address1.val()) {
          $address1.addClass('required');
        }
        if (!$city.val()) {
          $city.addClass('required');
        }
        if ($country.val() == '---') {
          $country.addClass('required');
        }

        // Check to see if province is showing
        if ($province.closest('.input-row').is(':visible')) {
          if (
            !$province.val() ||
            $province.val() == '---' ||
            $province.val() == ''
          ) {
            $province.addClass('required');
          }
        }

        if (!$zip.val()) {
          $zip.addClass('required');
        }

        // Check for focus to clear required
        var $required = $form.find('input.required, select.required');
        $required.on('focus', function() {
          $(this).removeClass('required');
        });

        // If any required inputs are still here prevent submission
        if ($required.length > 0) {
          $form
            .find('div.errors')
            .parent()
            .show();
          e.preventDefault();
        } else {
          $form
            .find('div.errors')
            .parent()
            .hide();
        }
      });
    }
  };
  // Utilities
  StyleHatch.updateHash = function(hash) {
    if (hash) {
      window.location.hash = '#' + hash;
      $('#' + hash)
        .attr('tabindex', -1)
        .focus();
    } else {
      window.location.hash = '';
    }
  };
  StyleHatch.getHash = function() {
    return window.location.hash;
  };
  // Still used by cart page
  StyleHatch.quantitySelect = function() {
    // Quantity Selector
    var $quantitySelect = $('.quantity-select');
    $quantitySelect.each(function() {
      var $el = $(this);
      var $quantityDown = $el.find('.adjust-minus');
      var $quantityUp = $el.find('.adjust-plus');
      var $quantity = $el.find('input.quantity');

      var quantity = $quantity.val();

      $quantityDown.on('click', function(e) {
        quantity = $quantity.val();
        if (quantity > 1) {
          quantity--;
          $quantity.val(quantity);
        }
        e.preventDefault();
      });

      $quantityUp.on('click', function(e) {
        quantity = $quantity.val();
        quantity++;
        $quantity.val(quantity);

        e.preventDefault();
      });
    });
  };
  // Reset passwords (store accounts)
  StyleHatch.resetPasswordSuccess = function() {
    StyleHatch.cache.$passwordResetSuccess.show();
  };

  /**
   * Primary Initialization
   * ---------------------------------------------------------------------------
   */
  $(document).ready(function() {
    StyleHatch.init();
  });
})(jq223);
