$(function(){
       busaoApp.inicializar();

   // alert("oi")
});


var busaoApp = {
   inicializar: function() {
       console.log("Inicializando a aplicação");
       busaoApp.eventos();
       busaoApp.validarFormulario();
    },
    eventos: function() {
        console.log("Disponinilizar Eventos");
        $("body").on('click', 'a.btnRecuperarSenha', busaoApp.carregarRecuperarSenha)
                 .on('click', 'a.btnLogin', busaoApp.carregarLogin)
        
    },
   paginaInicial: function() {
       console.log("Ir para Página Inicial");
   },
   carregarLogin: function(e) {
     console.log("Exibindo o formulario de Login");
     e.preventDefault();
     $("#formRecuperarSenha").hide();
     $("#formLogin").show();
    }, 
    carregarRecuperarSenha: function(e) {
        console.log("Exibindo o formulario de Recuperar Senha");
        e.preventDefault();
        $("#formLogin").hide();
        $("#formRecuperarSenha").show();
   },
   validarFormulario: function() {
     console.log("Validação do formulario");
   } 
   



};