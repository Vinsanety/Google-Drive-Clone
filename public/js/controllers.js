app.controller('homeController', function($scope) {

  angular.element(document).ready(function () {
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
    );
  })

    $(function() {
    Vue.component('item', {
    template: '#folder-template',
    props: {
    },
    data: function () {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  })

    new Vue({
    	el: '#test',
      data: {
      	folders: [
        	{ id: '1', name: 'root', parent_id: null },
          { id: '2', name: 'root2', parent_id: null },
          { id: '3', name: 'subfolder1', parent_id: 1 }
        ]
      },
      computed: {

      },
      methods: {

      }
    });
  });


})
