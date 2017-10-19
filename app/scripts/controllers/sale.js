'use strict';

/**
 * @ngdoc function
 * @name indiabizzApp.controller:SaleCtrl
 * @description
 * # SaleCtrl
 * Controller of the indiabizzApp
 */
angular.module('indiabizzApp')
  .controller('SaleCtrl', function () {
    this.gridView=true;

    this.gridViewData=[
      {
        title:'The Morning Hotel',
        description:'5-star hotel with restaurant, Deluxe Rooms.',
        tag:'Hotels & Travel',
        image:'assets/images/listing_img6.jpg'
      },
      {
        title:'Auto Repair Shop',
        description:'Texaco Auto Servicing & Repair shop',
        tag:'Automotive',
        image:'assets/images/listing_img5.jpg'
      },
      {
        title:'Laisa Spa Center',
        description:'Best Pool & Spa Professionals in Laisa',
        tag:'Beauty & Spas',
        image:'assets/images/listing_img4.jpg'
      },
      {
        title:"Blue Women's Parlour",
        description:'5-star Womens Beauty Parlour Services.',
        tag:'Beauty & Spas',
        image:'assets/images/listing_img3.jpg'
      },
      {
        title:'Eating Restaurant',
        description:'5-star hotel with restaurant, Deluxe Rooms.',
        tag:'Restaurant',
        image:'assets/images/listing_img2.jpg'
      },
      {
        title:'The Shelby Apartment',
        description:'Deluxe Rooms with AC',
        tag:'Real Estate',
        image:'assets/images/listing_img8.jpg'
      },
      {
        title:'The Morning Hotel',
        description:'5-star hotel with restaurant, Deluxe Rooms.',
        tag:'Hotels & Travel',
        image:'assets/images/listing_img6.jpg'
      },
      {
        title:'Fitness Center',
        description:'Weights, Health, Yoga, Pilates Training Center',
        tag:'Health & Fitness',
        image:'assets/images/listing_img9.jpg'
      },
      {
        title:'Auto Repair Shop',
        description:'Texaco Auto Servicing & Repair shop',
        tag:'Automotive',
        image:'assets/images/listing_img7.jpg'
      },
    ];

    this.changeGridView=function (value) {
      if(value){
        this.gridView=true;
      }else {
        this.gridView=false;
      }
    };
  });
