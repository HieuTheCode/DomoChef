// init Isotope
$(document).ready(function() {
    var $grid = $('.grid').isotope({
        itemSelector: '.img-general'
    });

    var filters = {};

    $('.filters').on( 'click', '.checkbox', function() {
      var $this = $(this);
      // get group key
      var $checkboxGroup = $this.parents('.checkbox-group');
      var filterGroup = $checkboxGroup.attr('data-filter-group');
      // set filter for group
      filters[ filterGroup ] = $this.attr('data-filter');
      // combine filters
      var filterValue = concatValues( filters );
      // set filter for Isotope
      $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.checkbox-group').each( function( i, checkboxGroup ) {
      var $checkboxGroup = $( checkboxGroup );
      $checkboxGroup.on( 'click', 'checkbox', function() {
      $checkboxGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
        });
    });

    // flatten object by concatting values
    function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
      value += obj[ prop ];
      }
      return value;
    }
  });