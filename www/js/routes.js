angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('dIVERTRIP', {
      url: '/page1',
      templateUrl: 'templates/dIVERTRIP.html',
      controller: 'dIVERTRIPCtrl'
    })
    
    .state('inicio', {
      url: '/page1',
      templateUrl: 'templates/inicio.html',
      controller: 'inicioCtrl'
    })
        
    .state('menuPatrocinador', {
      url: '/page2',
      templateUrl: 'templates/menuPatrocinador.html',
      controller: 'menuPatrocinadorCtrl'
    })

    .state('administrarEventos', {
      url: '/page3',
      templateUrl: 'templates/administrarEventos.html',
      controller: 'administrarEventosCtrl'
    })
        
    .state('contrasena', {
      url: '/page4',
      templateUrl: 'templates/contrasena.html',
      controller: 'contrasenaCtrl'
    })
        
    .state('historial', {
      url: '/page5',
      templateUrl: 'templates/historial.html',
      controller: 'historialCtrl'
    })

    .state('reestablecer', {
      url: '/page6',
      templateUrl: 'templates/reestablecer.html',
      controller: 'reestablecerCtrl'
    })

    .state('personas', {
      url: '/page2',
      templateUrl: 'templates/personas.html',
      controller: 'personasCtrl'
    })

    .state('patrocinador', {
      url: '/page3',
      templateUrl: 'templates/patrocinador.html',
      controller: 'patrocinadorCtrl'
    })

    .state('bienvenido', {
      url: '/page4',
      templateUrl: 'templates/bienvenido.html',
      controller: 'bienvenidoCtrl'
    })

        
    .state('menu', {
      url: '/page5',
      templateUrl: 'templates/menu.html',
      controller: 'menuCtrl'
    })
        

        
    .state('eventos', {
      url: '/page6',
      templateUrl: 'templates/eventos.html',
      controller: 'eventosCtrl'
    })

        
    .state('mapa', {
      url: '/page7',
      templateUrl: 'templates/mapa.html',
      controller: 'mapaCtrl'
    })
        

        
    .state('play', {
      url: '/page8',
      templateUrl: 'templates/play.html',
      controller: 'playCtrl'
    })

        
    .state('preferencias', {
      url: '/page10',
      templateUrl: 'templates/preferencias.html',
      controller: 'preferenciasCtrl'
    })
        

    .state('ayuda', {
      url: '/page11',
      templateUrl: 'templates/ayuda.html',
      controller: 'ayudaCtrl'
    })
        

    .state('informacion', {
      url: '/page12',
      templateUrl: 'templates/informacion.html',
      controller: 'informacionCtrl'
    })
 
    .state('contacto', {
      url: '/page13',
      templateUrl: 'templates/contacto.html',
      controller: 'contactoCtrl'
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});