import React, { useEffect } from 'react';
import $ from "jquery";
import jQuery from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';

import "jquery-ui-dist/jquery-ui";



export default function Header() {

  // useEffect(() => {
  //   (function($) {
  //     'use strict';
  //     $(function() {
  //       $('[data-toggle="offcanvas"]').on("click", function() {
  //         $('.sidebar-offcanvas').toggleClass('active')
  //       });
  //     });
  //   })(jQuery);

  //   (function($) {
  //     'use strict';
  //     $(function() {
  //       var body = $('body');
  //       var contentWrapper = $('.content-wrapper');
  //       var scroller = $('.container-scroller');
  //       var footer = $('.footer');
  //       var sidebar = $('.sidebar');
    
  //       //Add active class to nav-link based on url dynamically
  //       //Active class can be hard coded directly in html file also as required
    
  //       function addActiveClass(element) {
  //         if (current === "") {
  //           //for root url
  //           if (element.attr('href').indexOf("index.html") !== -1) {
  //             element.parents('.nav-item').last().addClass('active');
  //             if (element.parents('.sub-menu').length) {
  //               element.closest('.collapse').addClass('show');
  //               element.addClass('active');
  //             }
  //           }
  //         } else {
  //           //for other url
  //           if (element.attr('href').indexOf(current) !== -1) {
  //             element.parents('.nav-item').last().addClass('active');
  //             if (element.parents('.sub-menu').length) {
  //               element.closest('.collapse').addClass('show');
  //               element.addClass('active');
  //             }
  //             if (element.parents('.submenu-item').length) {
  //               element.addClass('active');
  //             }
  //           }
  //         }
  //       }
    
  //       var current = window.location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
  //       $('.nav li a', sidebar).each(function() {
  //         var $this = $(this);
  //         addActiveClass($this);
  //       })
    
  //       $('.horizontal-menu .nav li a').each(function() {
  //         var $this = $(this);
  //         addActiveClass($this);
  //       })
    
  //       //Close other submenu in sidebar on opening any
    
  //       sidebar.on('show.bs.collapse', '.collapse', function() {
  //         sidebar.find('.collapse.show').collapse('hide');
  //       });
    
    
  //       //Change sidebar and content-wrapper height
  //       applyStyles();
    
  //       function applyStyles() {
  //         //Applying perfect scrollbar
  //         if (!body.hasClass("rtl")) {
  //           if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
  //             const settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
  //           }
  //           if ($('.chats').length) {
  //             const chatsScroll = new PerfectScrollbar('.chats');
  //           }
  //           if (body.hasClass("sidebar-fixed")) {
  //             var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
  //           }
  //         }
  //       }
    
  //       $('[data-toggle="minimize"]').on("click", function() {
  //         if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
  //           body.toggleClass('sidebar-hidden');
  //         } else {
  //           body.toggleClass('sidebar-icon-only');
  //         }
  //       });
    
  //       //checkbox and radios
  //       $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
    
  //       //fullscreen
  //       $("#fullscreen-button").on("click", function toggleFullScreen() {
  //         if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
  //           if (document.documentElement.requestFullScreen) {
  //             document.documentElement.requestFullScreen();
  //           } else if (document.documentElement.mozRequestFullScreen) {
  //             document.documentElement.mozRequestFullScreen();
  //           } else if (document.documentElement.webkitRequestFullScreen) {
  //             document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  //           } else if (document.documentElement.msRequestFullscreen) {
  //             document.documentElement.msRequestFullscreen();
  //           }
  //         } else {
  //           if (document.cancelFullScreen) {
  //             document.cancelFullScreen();
  //           } else if (document.mozCancelFullScreen) {
  //             document.mozCancelFullScreen();
  //           } else if (document.webkitCancelFullScreen) {
  //             document.webkitCancelFullScreen();
  //           } else if (document.msExitFullscreen) {
  //             document.msExitFullscreen();
  //           }
  //         }
  //       })
  //       if ($.cookie('corona-free-banner')!="true") {
  //         document.querySelector('#proBanner').classList.add('d-flex');
  //       }
  //       else {
  //         document.querySelector('#proBanner').classList.add('d-none');
  //       }
  //       document.querySelector('#bannerClose').addEventListener('click',function() {
  //         document.querySelector('#proBanner').classList.add('d-none');
  //         document.querySelector('#proBanner').classList.remove('d-flex');
  //         var date = new Date();
  //         date.setTime(date.getTime() + 24 * 60 * 60 * 1000); 
  //         $.cookie('corona-free-banner', "true", { expires: date });
  //       });
  //     });
  //   })(jQuery);
  // },[])


  return (
    <>
    <div>
      <nav class="navbar p-0 fixed-top d-flex flex-row">
        <div class="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <a class="navbar-brand brand-logo-mini" href="index.html"><img src="img/logo-mini.svg" alt="logo" /></a>
        </div>
        <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="bi bi-list"></span>
          </button>
          <ul class="navbar-nav w-100">
            <li class="nav-item w-100">
              <form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input type="text" class="form-control" placeholder="Search products" />
              </form>
            </li>
          </ul>
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item dropdown d-none d-lg-block">
              <a class="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-bs-toggle="dropdown" aria-expanded="false" href="#">+ Create New Project</a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
                <h6 class="p-3 mb-0">Projects</h6>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="mdi mdi-file-outline text-primary"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1">Software Development</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="mdi mdi-web text-info"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1">UI Development</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="mdi mdi-layers text-danger"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1">Software Testing</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <p class="p-3 mb-0 text-center">See all projects</p>
              </div>
            </li>
            <li class="nav-item nav-settings d-none d-lg-block">
              <a class="nav-link" href="#">
                <i class="bi bi-grid-fill"></i>
              </a>
            </li>
            <li class="nav-item dropdown border-left">
              <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-envelope"></i>
                <span class="count bg-success"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <h6 class="p-3 mb-0">Messages</h6>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="img/faces/face4.jpg" alt="image" class="rounded-circle profile-pic" />
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1">Mark send you a message</p>
                    <p class="text-muted mb-0"> 1 Minutes ago </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="img/faces/face2.jpg" alt="image" class="rounded-circle profile-pic" />
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1">Cregh send you a message</p>
                    <p class="text-muted mb-0"> 15 Minutes ago </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="img/faces/face3.jpg" alt="image" class="rounded-circle profile-pic" />
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject ellipsis mb-1">Profile picture updated</p>
                    <p class="text-muted mb-0"> 18 Minutes ago </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <p class="p-3 mb-0 text-center">4 new messages</p>
              </div>
            </li>
            <li class="nav-item dropdown border-left">
              <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-bell-fill"></i>
                <span class="count bg-danger"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <h6 class="p-3 mb-0">Notifications</h6>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="bi bi-calendar-event text-success"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject mb-1">Event today</p>
                    <p class="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="bi bi-gear-fill text-danger"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject mb-1">Settings</p>
                    <p class="text-muted ellipsis mb-0"> Update dashboard </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="bi bi-link-45deg text-warning"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject mb-1">Launch Admin</p>
                    <p class="text-muted ellipsis mb-0"> New admin wow! </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <p class="p-3 mb-0 text-center">See all notifications</p>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" id="profileDropdown" href="#" data-bs-toggle="dropdown">
                <div class="navbar-profile">
                  <img class="img-xs rounded-circle" src="https://rajmaraviya-portfolio.netlify.app/images/MSD_0823.jpg" alt="" />
                  <p class="mb-0 d-none d-sm-block navbar-profile-name">Raj Maraviya</p>
                  <i class="bi bi-caret-down-fill p-2 fs-7 d-none d-sm-block"></i>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
                <h6 class="p-3 mb-0">Profile</h6>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="bi bi-gear-fill text-success"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject mb-1">Settings</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="bi bi-box-arrow-right text-danger"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject mb-1">Log out</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <p class="p-3 mb-0 text-center">Advanced settings</p>
              </div>
            </li>
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="bi bi-list"></span>
          </button>
        </div>
      </nav>
      </div>
    </>
  )
}
