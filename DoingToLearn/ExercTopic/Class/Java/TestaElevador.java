public class TestaElevador {

	public static void main(String[] args) {
		Elevador e1 = new Elevador();
			e1.setMaxPessoas(1);
			e1.setMaxAndar(1);
			
		e1.entra();
		e1.entra();
		e1.sobe();
		e1.sobe();
		e1.desce();
		e1.desce();
		e1.sai();
		e1.sai();
		
	}

}
