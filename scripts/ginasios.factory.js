
(function() {
   "use strict";
 
 
   angular.module("app").factory("Ginasios", Ginasios);
 
   function Ginasios() {

      return {
         getGinasios:getGinasios
      };

      function compare(a,b) {
         if (a.nome < b.nome)
           return -1;
         if (a.nome > b.nome)
           return 1;
         return 0;
       }
     
      function getGinasios(){

      
       
      
      var ginasios = [
          {
             codigo: 23,
             nome: "Burning Flame",
             lat: "-15.83842966",
             long: "-48.02014786"
           },
           {
             codigo: 24,
             nome: "Ame o que faz",
             lat: "-15.83665605",
             long: "-48.02086263"
           },
           {
             codigo: 26,
             nome: "Ed. Estação XIV",
             lat: "-15.83530841",
             long: "-48.01854996"
           },
           {
             codigo: 27,
             nome: "Estação Arniqueiras",
             lat: "-15.83676028",
             long: "-48.01738179"
           },
           {
             codigo: 28,
             nome: "Menina e os passáros",
             lat: "-15.8353701",
             long: "-48.01673668"
           }, 
         {
           codigo: 29,
           nome: "Rei Cósmico",
           lat: "-15.83107586",
           long: "-48.01530726"
         },
         {
           codigo: 30,
           nome: "Fonte Vida / Vila Carioca",
           lat: "-15.8292331",
           long: "-48.01438887"
         },
         {
           codigo: 31,
           nome: "Biblioteca de Águas Claras",
           lat: "-15.8341757",
           long: "-48.01282258"
         },
         {
          codigo: 32,
          nome: "Abra as Asas",
          lat: "-15.8356633",
          long: "-48.01272173"
        },
        {
          codigo: 33,
          nome: "Administração Águas Claras",
          lat: "-15.83584381",
          long: "-48.00835717"
        },
       ];
         ginasios.sort(compare);
       return ginasios;
      }
   }


 })();
 