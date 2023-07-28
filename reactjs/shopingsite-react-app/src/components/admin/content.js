import React, { useEffect } from 'react';
import SideBar from './sideBar';
import jQuery from 'jquery';
import { ProgressBar } from 'react-bootstrap';



export default function Content() {

    // useEffect(() => {
    //     var currentBalanceCircle;
    //     var Chart;
    //     (function($) {
    //         'use strict';
    //         $.fn.andSelf = function() {
    //           return this.addBack.apply(this, arguments);
    //         }
    //         $(function() {
    //           if ($("#currentBalanceCircle").length) {
    //             var bar = new ProgressBar.Circle(currentBalanceCircle, {
    //               color: '#000',
    //               // This has to be the same size as the maximum width to
    //               // prevent clipping
    //               strokeWidth: 12,
    //               trailWidth: 12,
    //               trailColor: '#0d0d0d',
    //               easing: 'easeInOut',
    //               duration: 1400,
    //               text: {
    //                 autoStyleContainer: false
    //               },
    //               from: { color: '#d53f3a', width: 12 },
    //               to: { color: '#d53f3a', width: 12 },
    //               // Set default step function for all animate calls
    //               step: function(state, circle) {
    //                 circle.path.setAttribute('stroke', state.color);
    //                 circle.path.setAttribute('stroke-width', state.width);
                
    //                 var value = Math.round(circle.value() * 100);
    //                 circle.setText('');
                
    //               }
    //             });
          
    //             bar.text.style.fontSize = '1.5rem';
    //             bar.animate(0.4);  // Number from 0.0 to 1.0
    //           }
    //           if($('#audience-map').length) {
    //             $('#audience-map').vectorMap({
    //               map: 'world_mill_en',
    //               backgroundColor: 'transparent',
    //               panOnDrag: true,
    //               focusOn: {
    //                 x: 0.5,
    //                 y: 0.5,
    //                 scale: 1,
    //                 animate: true
    //               },
    //               series: {
    //                 regions: [{
    //                   scale: ['#3d3c3c', '#f2f2f2'],
    //                   normalizeFunction: 'polynomial',
    //                   values: {
          
    //                     "BZ": 75.00,
    //                     "US": 56.25,
    //                     "AU": 15.45,
    //                     "GB": 25.00,
    //                     "RO": 10.25,
    //                     "GE": 33.25
    //                   }
    //                 }]
    //               }
    //             });
    //           }
    //           if ($("#transaction-history").length) {
    //             var areaData = {
    //               labels: ["Paypal", "Stripe","Cash"],
    //               datasets: [{
    //                   data: [55, 25, 20],
    //                   backgroundColor: [
    //                     "#111111","#00d25b","#ffab00"
    //                   ]
    //                 }
    //               ]
    //             };
    //             var areaOptions = {
    //               responsive: true,
    //               maintainAspectRatio: true,
    //               segmentShowStroke: false,
    //               cutoutPercentage: 70,
    //               elements: {
    //                 arc: {
    //                     borderWidth: 0
    //                 }
    //               },      
    //               legend: {
    //                 display: false
    //               },
    //               tooltips: {
    //                 enabled: true
    //               }
    //             }
    //             var transactionhistoryChartPlugins = {
    //               beforeDraw: function(chart) {
    //                 var width = chart.chart.width,
    //                     height = chart.chart.height,
    //                     ctx = chart.chart.ctx;
                
    //                 ctx.restore();
    //                 var fontSize = 1;
    //                 ctx.font = fontSize + "rem sans-serif";
    //                 ctx.textAlign = 'left';
    //                 ctx.textBaseline = "middle";
    //                 ctx.fillStyle = "#ffffff";
                
    //                 var text = "$1200", 
    //                     textX = Math.round((width - ctx.measureText(text).width) / 2),
    //                     textY = height / 2.4;
                
    //                 ctx.fillText(text, textX, textY);
          
    //                 ctx.restore();
    //                 var fontSize = 0.75;
    //                 ctx.font = fontSize + "rem sans-serif";
    //                 ctx.textAlign = 'left';
    //                 ctx.textBaseline = "middle";
    //                 ctx.fillStyle = "#6c7293";
          
    //                 var texts = "Total", 
    //                     textsX = Math.round((width - ctx.measureText(text).width) / 1.93),
    //                     textsY = height / 1.7;
                
    //                 ctx.fillText(texts, textsX, textsY);
    //                 ctx.save();
    //               }
    //             }
    //             var transactionhistoryChartCanvas = $("#transaction-history").get(0).getContext("2d");
    //             var transactionhistoryChart = new Chart(transactionhistoryChartCanvas, {
    //               type: 'doughnut',
    //               data: areaData,
    //               options: areaOptions,
    //               plugins: transactionhistoryChartPlugins
    //             });
    //           }
    //           if ($("#transaction-history-arabic").length) {
    //             var areaData = {
    //               labels: ["Paypal", "Stripe","Cash"],
    //               datasets: [{
    //                   data: [55, 25, 20],
    //                   backgroundColor: [
    //                     "#111111","#00d25b","#ffab00"
    //                   ]
    //                 }
    //               ]
    //             };
    //             var areaOptions = {
    //               responsive: true,
    //               maintainAspectRatio: true,
    //               segmentShowStroke: false,
    //               cutoutPercentage: 70,
    //               elements: {
    //                 arc: {
    //                     borderWidth: 0
    //                 }
    //               },      
    //               legend: {
    //                 display: false
    //               },
    //               tooltips: {
    //                 enabled: true
    //               }
    //             }
    //             var transactionhistoryChartPlugins = {
    //               beforeDraw: function(chart) {
    //                 var width = chart.chart.width,
    //                     height = chart.chart.height,
    //                     ctx = chart.chart.ctx;
                
    //                 ctx.restore();
    //                 var fontSize = 1;
    //                 ctx.font = fontSize + "rem sans-serif";
    //                 ctx.textAlign = 'left';
    //                 ctx.textBaseline = "middle";
    //                 ctx.fillStyle = "#ffffff";
                
    //                 var text = "$1200", 
    //                     textX = Math.round((width - ctx.measureText(text).width) / 2),
    //                     textY = height / 2.4;
                
    //                 ctx.fillText(text, textX, textY);
          
    //                 ctx.restore();
    //                 var fontSize = 0.75;
    //                 ctx.font = fontSize + "rem sans-serif";
    //                 ctx.textAlign = 'left';
    //                 ctx.textBaseline = "middle";
    //                 ctx.fillStyle = "#6c7293";
          
    //                 var texts = "مجموع", 
    //                     textsX = Math.round((width - ctx.measureText(text).width) / 1.93),
    //                     textsY = height / 1.7;
                
    //                 ctx.fillText(texts, textsX, textsY);
    //                 ctx.save();
    //               }
    //             }
    //             var transactionhistoryChartCanvas = $("#transaction-history-arabic").get(0).getContext("2d");
    //             var transactionhistoryChart = new Chart(transactionhistoryChartCanvas, {
    //               type: 'doughnut',
    //               data: areaData,
    //               options: areaOptions,
    //               plugins: transactionhistoryChartPlugins
    //             });
    //           }
    //           if ($('#owl-carousel-basic').length) {
    //             $('#owl-carousel-basic').owlCarousel({
    //               loop: true,
    //               margin: 10,
    //               dots: false,
    //               nav: true,
    //               autoplay: true,
    //               autoplayTimeout: 4500,
    //               navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
    //               responsive: {
    //                 0: {
    //                   items: 1
    //                 },
    //                 600: {
    //                   items: 1
    //                 },
    //                 1000: {
    //                   items: 1
    //                 }
    //               }
    //             });
    //           }
    //           var isrtl = $("body").hasClass("rtl");
    //           if ($('#owl-carousel-rtl').length) {
    //             $('#owl-carousel-rtl').owlCarousel({
    //               loop: true,
    //               margin: 10,
    //               dots: false,
    //               nav: true,
    //               rtl: isrtl,
    //               autoplay: true,
    //               autoplayTimeout: 4500,
    //               navText: ["<i class='mdi mdi-chevron-right'></i>", "<i class='mdi mdi-chevron-left'></i>"],
    //               responsive: {
    //                 0: {
    //                   items: 1
    //                 },
    //                 600: {
    //                   items: 1
    //                 },
    //                 1000: {
    //                   items: 1
    //                 }
    //               }
    //             });
    //           }
    //           });
    //       })(jQuery);
    // },[]);

    return (
        <>
        <SideBar />
            <div class="container-fluid page-body-wrapper">
                {/* <!-- partial --> */}
                <div class="main-panel">
                    <div class="content-wrapper">
                        <div class="row">
                            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-9">
                                                <div class="d-flex align-items-center align-self-start">
                                                    <h3 class="mb-0">$12.34</h3>
                                                    <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="icon icon-box-success ">
                                                    <span class="bi bi-arrow-up-right fs-7 icon-item"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="text-muted font-weight-normal">Potential growth</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-9">
                                                <div class="d-flex align-items-center align-self-start">
                                                    <h3 class="mb-0">$17.34</h3>
                                                    <p class="text-success ms-2 mb-0 font-weight-medium">+11%</p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="icon icon-box-success">
                                                    <span class="bi bi-arrow-up-right fs-7 icon-item"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="text-muted font-weight-normal">Revenue current</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-9">
                                                <div class="d-flex align-items-center align-self-start">
                                                    <h3 class="mb-0">$12.34</h3>
                                                    <p class="text-danger ms-2 mb-0 font-weight-medium">-2.4%</p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="icon icon-box-danger">
                                                    <span class="bi bi-arrow-down-left fs-7 icon-item"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="text-muted font-weight-normal">Daily Income</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-9">
                                                <div class="d-flex align-items-center align-self-start">
                                                    <h3 class="mb-0">$31.53</h3>
                                                    <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="icon icon-box-success ">
                                                    <span class="bi bi-arrow-up-right fs-7 icon-item"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="text-muted font-weight-normal">Expense current</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Transaction History</h4>
                                        <canvas id="transaction-history" class="transaction-chart"></canvas>
                                        <div class="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                            <div class="text-md-center text-xl-left">
                                                <h6 class="mb-1">Transfer to Paypal</h6>
                                                <p class="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                                            </div>
                                            <div class="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                                                <h6 class="font-weight-bold mb-0">$236</h6>
                                            </div>
                                        </div>
                                        <div class="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                            <div class="text-md-center text-xl-left">
                                                <h6 class="mb-1">Tranfer to Stripe</h6>
                                                <p class="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                                            </div>
                                            <div class="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                                                <h6 class="font-weight-bold mb-0">$593</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-row justify-content-between">
                                            <h4 class="card-title mb-1">Open Projects</h4>
                                            <p class="text-muted mb-1">Your data status</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="preview-list">
                                                    <div class="preview-item border-bottom">
                                                        <div class="preview-thumbnail">
                                                            <div class="preview-icon bg-primary">
                                                                <i class="bi bi-file-earmark-text-fill fs-7"></i>
                                                            </div>
                                                        </div>
                                                        <div class="preview-item-content d-sm-flex flex-grow">
                                                            <div class="flex-grow">
                                                                <h6 class="preview-subject">Admin dashboard design</h6>
                                                                <p class="text-muted mb-0">Broadcast web app mockup</p>
                                                            </div>
                                                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                                                                <p class="text-muted">15 minutes ago</p>
                                                                <p class="text-muted mb-0">30 tasks, 5 issues </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="preview-item border-bottom">
                                                        <div class="preview-thumbnail">
                                                            <div class="preview-icon bg-success">
                                                                <i class="bi bi-cloud-arrow-down-fill fs-7"></i>
                                                            </div>
                                                        </div>
                                                        <div class="preview-item-content d-sm-flex flex-grow">
                                                            <div class="flex-grow">
                                                                <h6 class="preview-subject">Wordpress Development</h6>
                                                                <p class="text-muted mb-0">Upload new design</p>
                                                            </div>
                                                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                                                                <p class="text-muted">1 hour ago</p>
                                                                <p class="text-muted mb-0">23 tasks, 5 issues </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="preview-item border-bottom">
                                                        <div class="preview-thumbnail">
                                                            <div class="preview-icon bg-info">
                                                                <i class="bi bi-clock-fill fs-7"></i>
                                                            </div>
                                                        </div>
                                                        <div class="preview-item-content d-sm-flex flex-grow">
                                                            <div class="flex-grow">
                                                                <h6 class="preview-subject">Project meeting</h6>
                                                                <p class="text-muted mb-0">New project discussion</p>
                                                            </div>
                                                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                                                                <p class="text-muted">35 minutes ago</p>
                                                                <p class="text-muted mb-0">15 tasks, 2 issues</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="preview-item border-bottom">
                                                        <div class="preview-thumbnail">
                                                            <div class="preview-icon bg-danger">
                                                                <i class="bi bi-envelope-open-fill fs-7"></i>
                                                            </div>
                                                        </div>
                                                        <div class="preview-item-content d-sm-flex flex-grow">
                                                            <div class="flex-grow">
                                                                <h6 class="preview-subject">Broadcast Mail</h6>
                                                                <p class="text-muted mb-0">Sent release details to team</p>
                                                            </div>
                                                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                                                                <p class="text-muted">55 minutes ago</p>
                                                                <p class="text-muted mb-0">35 tasks, 7 issues </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="preview-item">
                                                        <div class="preview-thumbnail">
                                                            <div class="preview-icon bg-warning">
                                                                <i class="bi bi-intersect fs-7"></i>
                                                            </div>
                                                        </div>
                                                        <div class="preview-item-content d-sm-flex flex-grow">
                                                            <div class="flex-grow">
                                                                <h6 class="preview-subject">UI Design</h6>
                                                                <p class="text-muted mb-0">New application planning</p>
                                                            </div>
                                                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                                                                <p class="text-muted">50 minutes ago</p>
                                                                <p class="text-muted mb-0">27 tasks, 4 issues </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 grid-margin">
                                <div class="card">
                                    <div class="card-body">
                                        <h5>Revenue</h5>
                                        <div class="row">
                                            <div class="col-8 col-sm-12 col-xl-8 my-auto">
                                                <div class="d-flex d-sm-block d-md-flex align-items-center">
                                                    <h2 class="mb-0">$32123</h2>
                                                    <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                                                </div>
                                                <h6 class="text-muted font-weight-normal">11.38% Since last month</h6>
                                            </div>
                                            <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                                <i class="icon-lg mdi mdi-codepen text-primary ms-auto"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 grid-margin">
                                <div class="card">
                                    <div class="card-body">
                                        <h5>Sales</h5>
                                        <div class="row">
                                            <div class="col-8 col-sm-12 col-xl-8 my-auto">
                                                <div class="d-flex d-sm-block d-md-flex align-items-center">
                                                    <h2 class="mb-0">$45850</h2>
                                                    <p class="text-success ms-2 mb-0 font-weight-medium">+8.3%</p>
                                                </div>
                                                <h6 class="text-muted font-weight-normal"> 9.61% Since last month</h6>
                                            </div>
                                            <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                                <i class="icon-lg mdi mdi-wallet-travel text-danger ms-auto"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 grid-margin">
                                <div class="card">
                                    <div class="card-body">
                                        <h5>Purchase</h5>
                                        <div class="row">
                                            <div class="col-8 col-sm-12 col-xl-8 my-auto">
                                                <div class="d-flex d-sm-block d-md-flex align-items-center">
                                                    <h2 class="mb-0">$2039</h2>
                                                    <p class="text-danger ms-2 mb-0 font-weight-medium">-2.1% </p>
                                                </div>
                                                <h6 class="text-muted font-weight-normal">2.27% Since last month</h6>
                                            </div>
                                            <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                                <i class="icon-lg mdi mdi-monitor text-success ms-auto"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Order Status</h4>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                    <input type="checkbox" class="form-check-input"></input>
                                                                </label>
                                                            </div>
                                                        </th>
                                                        <th> Client Name </th>
                                                        <th> Order No </th>
                                                        <th> Product Cost </th>
                                                        <th> Project </th>
                                                        <th> Payment Mode </th>
                                                        <th> Start Date </th>
                                                        <th> Payment Status </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                    <input type="checkbox" class="form-check-input"></input>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="img/faces/face1.jpg" alt="image" />
                                                            <span class="ps-2">Henry Klein</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> Dashboard </td>
                                                        <td> Credit card </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-success">Approved</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                    <input type="checkbox" class="form-check-input"></input>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="img/faces/face2.jpg" alt="image" />
                                                            <span class="ps-2">Estella Bryan</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> Website </td>
                                                        <td> Cash on delivered </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-warning">Pending</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                    <input type="checkbox" class="form-check-input"></input>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="img/faces/face5.jpg" alt="image" />
                                                            <span class="ps-2">Lucy Abbott</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> App design </td>
                                                        <td> Credit card </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-danger">Rejected</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                    <input type="checkbox" class="form-check-input"></input>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="img/faces/face3.jpg" alt="image" />
                                                            <span class="ps-2">Peter Gill</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> Development </td>
                                                        <td> Online Payment </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-success">Approved</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                    <input type="checkbox" class="form-check-input"></input>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="img/faces/face4.jpg" alt="image" />
                                                            <span class="ps-2">Sallie Reyes</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> Website </td>
                                                        <td> Credit card </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-success">Approved</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-row justify-content-between">
                                            <h4 class="card-title">Messages</h4>
                                            <p class="text-muted mb-1 small">View all</p>
                                        </div>
                                        <div class="preview-list">
                                            <div class="preview-item border-bottom">
                                                <div class="preview-thumbnail">
                                                    <img src="img/faces/face6.jpg" alt="image" class="rounded-circle" />
                                                </div>
                                                <div class="preview-item-content d-flex flex-grow">
                                                    <div class="flex-grow">
                                                        <div class="d-flex d-md-block d-xl-flex justify-content-between">
                                                            <h6 class="preview-subject">Leonard</h6>
                                                            <p class="text-muted text-small">5 minutes ago</p>
                                                        </div>
                                                        <p class="text-muted">Well, it seems to be working now.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="preview-item border-bottom">
                                                <div class="preview-thumbnail">
                                                    <img src="img/faces/face8.jpg" alt="image" class="rounded-circle" />
                                                </div>
                                                <div class="preview-item-content d-flex flex-grow">
                                                    <div class="flex-grow">
                                                        <div class="d-flex d-md-block d-xl-flex justify-content-between">
                                                            <h6 class="preview-subject">Luella Mills</h6>
                                                            <p class="text-muted text-small">10 Minutes Ago</p>
                                                        </div>
                                                        <p class="text-muted">Well, it seems to be working now.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="preview-item border-bottom">
                                                <div class="preview-thumbnail">
                                                    <img src="img/faces/face9.jpg" alt="image" class="rounded-circle" />
                                                </div>
                                                <div class="preview-item-content d-flex flex-grow">
                                                    <div class="flex-grow">
                                                        <div class="d-flex d-md-block d-xl-flex justify-content-between">
                                                            <h6 class="preview-subject">Ethel Kelly</h6>
                                                            <p class="text-muted text-small">2 Hours Ago</p>
                                                        </div>
                                                        <p class="text-muted">Please review the tickets</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="preview-item border-bottom">
                                                <div class="preview-thumbnail">
                                                    <img src="img/faces/face11.jpg" alt="image" class="rounded-circle" />
                                                </div>
                                                <div class="preview-item-content d-flex flex-grow">
                                                    <div class="flex-grow">
                                                        <div class="d-flex d-md-block d-xl-flex justify-content-between">
                                                            <h6 class="preview-subject">Herman May</h6>
                                                            <p class="text-muted text-small">4 Hours Ago</p>
                                                        </div>
                                                        <p class="text-muted">Thanks a lot. It was easy to fix it .</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Portfolio Slide</h4>
                                        <div class="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                                            <div class="item">
                                                <img src="img/dashboard/Rectangle.jpg" alt="ract" />
                                            </div>
                                            <div class="item">
                                                <img src="img/dashboard/Img_5.jpg" alt="img-5" />
                                            </div>
                                            <div class="item">
                                                <img src="img/dashboard/img_6.jpg" alt="img-6" />
                                            </div>
                                        </div>
                                        <div class="d-flex py-4">
                                            <div class="preview-list w-100">
                                                <div class="preview-item p-0">
                                                    <div class="preview-thumbnail">
                                                        <img src="img/faces/face12.jpg" class="rounded-circle" alt="face-12" />
                                                    </div>
                                                    <div class="preview-item-content d-flex flex-grow">
                                                        <div class="flex-grow">
                                                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                                                                <h6 class="preview-subject">CeeCee Bass</h6>
                                                                <p class="text-muted text-small">4 Hours Ago</p>
                                                            </div>
                                                            <p class="text-muted">Well, it seems to be working now.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-muted">Well, it seems to be working now. </p>
                                        <div class="progress progress-md portfolio-progress">
                                            <div class="progress-bar bg-success" role="progressbar" style={{width:"50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-xl-4 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">To do list</h4>
                                        <div class="add-items d-flex">
                                            <input type="text" class="form-control todo-list-input" placeholder="enter task.."></input>
                                            <button class="add btn btn-primary todo-list-add-btn">Add</button>
                                        </div>
                                        <div class="list-wrapper">
                                            <ul class="d-flex flex-column-reverse text-white todo-list todo-list-custom">
                                                <li>
                                                    <div class="form-check form-check-primary">
                                                        <label class="form-check-label">
                                                            <input class="checkbox" type="checkbox"></input> Create invoice
                                                        </label>
                                                    </div>
                                                    <i class="remove mdi mdi-close-box"></i>
                                                </li>
                                                <li>
                                                    <div class="form-check form-check-primary">
                                                        <label class="form-check-label">
                                                            <input class="checkbox" type="checkbox"></input> Meeting with Alita </label>
                                                    </div>
                                                    <i class="remove mdi mdi-close-box"></i>
                                                </li>
                                                <li class="completed">
                                                    <div class="form-check form-check-primary">
                                                        <label class="form-check-label">
                                                            <input class="checkbox" type="checkbox" checked></input> Prepare for presentation </label>
                                                    </div>
                                                    <i class="remove mdi mdi-close-box"></i>
                                                </li>
                                                <li>
                                                    <div class="form-check form-check-primary">
                                                        <label class="form-check-label">
                                                            <input class="checkbox" type="checkbox"></input> Plan weekend outing </label>
                                                    </div>
                                                    <i class="remove mdi mdi-close-box"></i>
                                                </li>
                                                <li>
                                                    <div class="form-check form-check-primary">
                                                        <label class="form-check-label">
                                                            <input class="checkbox" type="checkbox"></input> Pick up kids from school </label>
                                                    </div>
                                                    <i class="remove mdi mdi-close-box"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Visitors by Countries</h4>
                                        <div class="row">
                                            <div class="col-md-5">
                                                <div class="table-responsive">
                                                    <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <i class="flag-icon flag-icon-us"></i>
                                                                </td>
                                                                <td>USA</td>
                                                                <td class="text-right"> 1500 </td>
                                                                <td class="text-right font-weight-medium"> 56.35% </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i class="flag-icon flag-icon-de"></i>
                                                                </td>
                                                                <td>Germany</td>
                                                                <td class="text-right"> 800 </td>
                                                                <td class="text-right font-weight-medium"> 33.25% </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i class="flag-icon flag-icon-au"></i>
                                                                </td>
                                                                <td>Australia</td>
                                                                <td class="text-right"> 760 </td>
                                                                <td class="text-right font-weight-medium"> 15.45% </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i class="flag-icon flag-icon-gb"></i>
                                                                </td>
                                                                <td>United Kingdom</td>
                                                                <td class="text-right"> 450 </td>
                                                                <td class="text-right font-weight-medium"> 25.00% </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i class="flag-icon flag-icon-ro"></i>
                                                                </td>
                                                                <td>Romania</td>
                                                                <td class="text-right"> 620 </td>
                                                                <td class="text-right font-weight-medium"> 10.25% </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i class="flag-icon flag-icon-br"></i>
                                                                </td>
                                                                <td>Brasil</td>
                                                                <td class="text-right"> 230 </td>
                                                                <td class="text-right font-weight-medium"> 75.00% </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div id="audience-map" class="vector-map"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- partial --> */}
                </div>
                {/* <!-- main-panel ends --> */}
            </div>
        </>
    )
}
