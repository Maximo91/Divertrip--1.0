angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('dIVERTRIP', {
      url: '/bienvenido',
      templateUrl: 'templates/dIVERTRIP.html',
      controller: 'dIVERTRIPCtrl'
    })
    
    .state('inicio', {
      url: '/menu_persona',
      templateUrl: 'templates/inicio.html',
      controller: 'inicioCtrl'
    })
        
    /*.state('menuPatrocinador', {
      url: '/menu_patrocinador',
      templateUrl: 'templates/menuPatrocinador.html',
      controller: 'menuPatrocinadorCtrl'
    })*/

    .state('administrarEventos', {
      url: '/crear_evento',
      templateUrl: 'templates/administrarEventos.html',
      controller: 'administrarEventosCtrl'
    })

    .state('verEvento', {
      url:'/informacion_evento',
      templateUrl:'templates/verEvento.html',
      controller: 'verEventoCtrl'
    })

    .state('verEventoPersona', {
      url:'/ver_evento',
      templateUrl:'templates/verEventoPersona.html',
      controller: 'verEventoPersonaCtrl'
    })
        
    .state('contrasena', {
      url: '/cambiar_contrasena',
      templateUrl: 'templates/contrasena.html',
      controller: 'contrasenaCtrl'
    })
        
    .state('historial', {
      url: '/historial',
      templateUrl: 'templates/historial.html',
      controller: 'historialCtrl'
    })

    .state('reestablecer', {
      url: '/reestablecer_contrasena',
      templateUrl: 'templates/reestablecer.html',
      controller: 'reestablecerCtrl'
    })

    .state('personas', {
      url: '/login_persona',
      templateUrl: 'templates/personas.html',
      controller: 'personasCtrl'
    })

    .state('patrocinador', {
      url: '/login_patrocinador',
      templateUrl: 'templates/patrocinador.html',
      controller: 'patrocinadorCtrl'
    })

    .state('bienvenido', {
      url: '/menu_patrocinador',
      templateUrl: 'templates/bienvenido.html',
      controller: 'bienvenidoCtrl'
    })

        
  
    .state('eventos', {
      url: '/ver_evento',
      templateUrl: 'templates/eventos.html',
      controller: 'eventosCtrl'
    })

        
    .state('mapa', {
      url: '/mapa',
      templateUrl: 'templates/mapa.html',
      controller: 'mapaCtrl'
    })
        

        
    .state('play', {
      url: '/como_funciona',
      templateUrl: 'templates/play.html',
      controller: 'playCtrl'
    })

        
    /*.state('preferencias', {
      url: '/page10',
      templateUrl: 'templates/preferencias.html',
      controller: 'preferenciasCtrl'
    })*/
        

    .state('ayuda', {
      url: '/ayuda',
      templateUrl: 'templates/ayuda.html',
      controller: 'ayudaCtrl'
    })
        

    .state('informacion', {
      url: '/version',
      templateUrl: 'templates/informacion.html',
      controller: 'informacionCtrl'
    })
 
    .state('contacto', {
      url: '/contactanos',
      templateUrl: 'templates/contacto.html',
      controller: 'contactoCtrl'
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/bienvenido');

});
