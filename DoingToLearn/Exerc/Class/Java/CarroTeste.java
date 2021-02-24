package AtvdCarro;

public class CarroTeste {
	public static void Main(String[] args) {
		Carro carro= new Carro();
		
		carro.ligar();
		carro.acelerar();
		carro.estaLigado();
		carro.acelerar();
		carro.estaLigado();
		carro.frear();
		carro.estaLigado();
		carro.frear();
		carro.desligar();
		carro.estaLigado();
	}
}
