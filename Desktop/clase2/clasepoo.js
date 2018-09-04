//crear una clase ave, padre de paloma, gorrion y canario 
        // las ultimas tres clases comparten acciones como comer, volar, descansar
        //el canario tiene una accion distinta que es cantar
        //el gorrion cada vez que vuela a decrementa su energía en 3 por km mientras que la paloma y el canario lo hacen en 2 por km.

        class Ave  {
            constructor(nombre){
                this.nombre = nombre;
                this.otraProp = 'hola'
                this.energiaAcumulada = 0;
                this.kmRecorridos = 0;
                this.diasDeVida = 0;
                this.comer = function(num){
                    this.energiaAcumulada += (num+5);
                };
                this.volar = function(num){
                    this.energiaAcumulada += (num-3);
                };
                this.dormir = function(num){
                    this.energiaAcumulada +=  (num+2);
                    this.diasDeVida++; 
                    return
                };
            }
        }

        class Paloma extends Ave  {
            constructor(nombre)  {
                super(nombre)
            }
        }

        class Gorrion extends Ave  {
            constructor(nombre)  {
                super(nombre)
            }
        }

        class Canario extends Ave  {
            constructor(nombre) {
                super(nombre)
            }
        }

        var pepita = new Paloma('pepita');
        var juancitoElGorrion = new Gorrion('juancito');
        var benitoElCanario = new Canario('benito')

        pepita.comer(5);
        pepita.volar(10);
        pepita.dormir(3);
        console.log(pepita)
        console.log(juancitoElGorrion)
        console.log(benitoElCanario)


        /*
        Crear una clase vehículos que tenga los siguientes atributos:
            •Atributos:
            •Combustible
            •Marca
            •Modelo
            •Cantidad de ruedas
            •Métodos:
            •Encender (decrementa M unidades el combustible)
            •Andar (decrementa M unidades por km recorrido)
            •Cargar (Incrementa el combustible N unidades)
            •Pintar (cambia el color del vehículo)
        */

        class Vehiculos  {
            constructor(combustible, marca, modelo, cantidadDeRuedas)  {
                this.combustible = 0;
                this.marca = '';
                this.modelo = '';
                this.cantidadDeRuedas = '';
                this.encender = function(num){
                    this.combustible += (num)
                };
                this.andar = function(num)  {

                };
                this.cargar = function(num) {

                };
                this.pintar = function(num) {

                };
            }
        }