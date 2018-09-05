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

        Crear una clase auto que herede de vehículos:
            •Instanciar el objeto y definir las propiedades de vehículos
            •Agregar un atributo que indique si el auto es taxi (solo
            para la clase auto).
            •Crear la clase moto que herede de vehículos:
            •Instanciar el objeto y definir las propiedades de vehículos
            •Agregar un método wheelie (decrementa la cantidad de
            combustible en 5)
            •Crear la clase camioneta que herede de vehículos, definir 2
            atributos y 2 métodos propios de camioneta que no sean
            compartidos por auto y moto.
        */

        class Vehiculos  {
            constructor(combustible, marca, modelo, cantidadDeRuedas)  {
                this.combustible = combustible;
                this.marca = marca;
                this.modelo = modelo;
                this.cantidadDeRuedas = cantidadDeRuedas;
            }
            andar(num) {
                this.combustible += (num)
            }
            pintar(color) {
                this.color = color;
            }
            cargar(comb) {

            }
        }

        class Auto extends Vehiculos  {
            constructor(combustible, marca, modelo, taxi) {
                super(combustible, marca, modelo , 4)
                this.taxi = taxi;
            }
        }

        class Moto extends Vehiculos {

        }

        class Camioneta extends Vehiculos {

        }

        var auto = new Vehiculos('hola', 'bmw', '1992', '4')

        var auto2 = new Auto( 'chau', 'renault', '2005', '4')

        console.log(auto)
        console.log(auto2)