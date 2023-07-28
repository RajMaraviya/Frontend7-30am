import React, {useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import jQuery from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';
import Header from './header';

export default function SideBar() {

  useEffect(() => {

    // responsive sidebar jQuery
    (function($) {
      'use strict';
      $(function() {
        $('[data-toggle="offcanvas"]').on("click", function() {
          $('.sidebar-offcanvas').toggleClass('active')
        });
      });
    })(jQuery);

    // hover collaps menu
    (function($) {
      'use strict';
      //Open submenu on hover in compact sidebar mode and horizontal menu mode
      $(document).on('mouseenter mouseleave', '.sidebar .nav-item', function(ev) {
        var body = $('body');
        var sidebarIconOnly = body.hasClass("sidebar-icon-only");
        var sidebarFixed = body.hasClass("sidebar-fixed");
        if (!('ontouchstart' in document.documentElement)) {
          if (sidebarIconOnly) {
            if (sidebarFixed) {
              if (ev.type === 'mouseenter') {
                body.removeClass('sidebar-icon-only');
              }
            } else {
              var $menuItem = $(this);
              if (ev.type === 'mouseenter') {
                $menuItem.addClass('hover-open')
              } else {
                $menuItem.removeClass('hover-open')
              }
            }
          }
        }
      });
    })(jQuery);

    // Expand sidebar jQuery
    (function($) {
      'use strict';
      $(function() {
        var body = $('body');
        var contentWrapper = $('.content-wrapper');
        var scroller = $('.container-scroller');
        var footer = $('.footer');
        var sidebar = $('.sidebar');
    
        //Add active class to nav-link based on url dynamically
        //Active class can be hard coded directly in html file also as required
    
        function addActiveClass(element) {
          if (current === "") {
            //for root url
            if (element.attr('href').indexOf("index.html") !== -1) {
              element.parents('.nav-item').last().addClass('active');
              if (element.parents('.sub-menu').length) {
                element.closest('.collapse').addClass('show');
                element.addClass('active');
              }
            }
          } else {
            //for other url
            if (element.attr('href').indexOf(current) !== -1) {
              element.parents('.nav-item').last().addClass('active');
              if (element.parents('.sub-menu').length) {
                element.closest('.collapse').addClass('show');
                element.addClass('active');
              }
              if (element.parents('.submenu-item').length) {
                element.addClass('active');
              }
            }
          }
        }
    
        var current = window.location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
        $('.nav li a', sidebar).each(function() {
          var $this = $(this);
          addActiveClass($this);
        })
    
        $('.horizontal-menu .nav li a').each(function() {
          var $this = $(this);
          addActiveClass($this);
        })
    
        //Close other submenu in sidebar on opening any
    
        sidebar.on('show.bs.collapse', '.collapse', function() {
          sidebar.find('.collapse.show').collapse('hide');
        });
    
    
        //Change sidebar and content-wrapper height
        applyStyles();
    
        function applyStyles() {
          //Applying perfect scrollbar
          if (!body.hasClass("rtl")) {
            if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
              const settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
            }
            if ($('.chats').length) {
              const chatsScroll = new PerfectScrollbar('.chats');
            }
            if (body.hasClass("sidebar-fixed")) {
              var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
            }
          }
        }
    
        $('[data-toggle="minimize"]').on("click", function() {
          if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
            body.toggleClass('sidebar-hidden');
          } else {
            body.toggleClass('sidebar-icon-only');
          }
        });
    
        //checkbox and radios
        $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
    
        //fullscreen
        $("#fullscreen-button").on("click", function toggleFullScreen() {
          if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (document.documentElement.msRequestFullscreen) {
              document.documentElement.msRequestFullscreen();
            }
          } else {
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            }
          }
        })
        // if ($.cookie('corona-free-banner')!="true") {
        //   document.querySelector('#proBanner').classList.add('d-flex');
        // }
        // else {
        //   document.querySelector('#proBanner').classList.add('d-none');
        // }
        // document.querySelector('#bannerClose').addEventListener('click',function() {
        //   document.querySelector('#proBanner').classList.add('d-none');
        //   document.querySelector('#proBanner').classList.remove('d-flex');
        //   var date = new Date();
        //   date.setTime(date.getTime() + 24 * 60 * 60 * 1000); 
        //   $.cookie('corona-free-banner', "true", { expires: date });
        // });
      });
    })(jQuery);
  },[])

  return (
    <>
      <Header />
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <Link class="sidebar-brand brand-logo" to="/admin-layout" style={{ color:'#fff', textDecoration:'none', letterSpacing:'3px' }}>
            Raj
          </Link>
          <Link class="sidebar-brand brand-logo-mini" to="/admin-layout" style={{ color:'#fff', textDecoration:'none' }}>R</Link>
        </div>
        <ul class="nav">
          <li class="nav-item profile">
            <div class="profile-desc">
              <div class="profile-pic">
                <div class="count-indicator">
                  <img class="img-xs rounded-circle " src="https://rajmaraviya-portfolio.netlify.app/images/MSD_0823.jpg" alt="circle" />
                  <span class="count bg-success"></span>
                </div>
                <div class="profile-name">
                  <h5 class="mb-0 font-weight-normal">Raj maraviya</h5>
                  <span>Gold Member</span>
                </div>
              </div>
              <a href="#" id="profile-dropdown" data-bs-toggle="dropdown"><i class="bi bi-three-dots-vertical"></i></a>
              <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                <a href="#" class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="bi bi-gear-fill text-primary"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1 text-small">Account settings</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="bi bi-fingerprint text-info"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1 text-small">Change Password</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="bi bi-check2-circle text-success"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1 text-small">To-do list</p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item nav-category">
            <span class="nav-link">Navigation</span>
          </li>
          <li class="nav-item menu-items">
            <Link class="nav-link" to="/admin-layout">
              <span class="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </span>
              <span class="menu-title">Dashboard</span>
            </Link>
          </li>

          <li class="nav-item menu-items hover-open">
            <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span class="menu-icon">
                <i class="bi bi-laptop"></i>
              </span>
              <span class="menu-title">Products</span>
              <i class="bi bi-chevron-down chevron-hide fs-7 ps-2"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <Link class="nav-link" to="/admin-dashboard/add-product">Add products</Link></li>
                <li class="nav-item"> <Link class="nav-link" to="/admin-dashboard/manage-product">Manage products</Link></li>
              </ul>
            </div>
          </li>

          <li class="nav-item menu-items">
            <a class="nav-link" data-bs-toggle="collapse" href="#category" aria-expanded="false" aria-controls="ui-basic">
              <span class="menu-icon">
                <i class="bi bi-laptop"></i>
              </span>
              <span class="menu-title">Category</span>
              <i class="bi bi-chevron-down chevron-hide fs-7 ps-2"></i>
            </a>
            <div class="collapse" id="category">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <Link class="nav-link" to="/admin-dashboard/add-category">Add Category</Link></li>
                <li class="nav-item"> <Link class="nav-link" to="/admin-dashboard/manage-category">Manage Category</Link></li>
              </ul>
            </div>
          </li>

          <li class="nav-item menu-items">
            <a class="nav-link" data-bs-toggle="collapse" href="#customer" aria-expanded="false" aria-controls="ui-basic">
              <span class="menu-icon">
                <i class="bi bi-laptop"></i>
              </span>
              <span class="menu-title">Customer</span>
              <i class="bi bi-chevron-down chevron-hide fs-7 ps-2"></i>
            </a>
            <div class="collapse" id="customer">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"><Link class="nav-link" to="/admin-dashboard/manage-customer  ">Manage Customer</Link></li>
                {/* <li class="nav-item"> <Link class="nav-link" to="/admin-dashboard/add-category">Add Category</Link></li> */}
              </ul>
            </div>
          </li>

          <li class="nav-item menu-items">
            <Link class="nav-link" to="/admin-dashboard/charts">
              <span class="menu-icon">
                <i class="bi bi-graph-up"></i>
              </span>
              <span class="menu-title">Charts</span>
            </Link>
          </li>
          <li class="nav-item menu-items">
            <Link class="nav-link" to="/admin-dashboard/icons">
              <span class="menu-icon">
                <i class="bi bi-person-vcard"></i>
              </span>
              <span class="menu-title">Icons</span>
            </Link>
          </li>
          <li class="nav-item menu-items">
            <a class="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <span class="menu-icon">
                <i class="bi bi-shield-lock"></i>
              </span>
              <span class="menu-title">User Pages</span>
              <i class="bi bi-chevron-down chevron-hide fs-7 ps-2"></i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item menu-items">
            <a class="nav-link" href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
              <span class="menu-icon">
                <i class="bi bi-files"></i>
              </span>
              <span class="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
