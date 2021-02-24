package AtividadeMau;

public class AlunoTeste {

	public static void main(String[] args) {

		Aluno a1= new Aluno();
			a1.setNome("Julio");
			a1.setRa(115315);

		Aluno a2= new Aluno();
			a2.setNome("Marcela");
			a2.setRa(115420);

		Aluno a3= new Aluno();
			a3.setNome("Antony");
			a3.setRa(115330);	
			
		System.out.println(a1.getNome()+" RA:"+ a1.getRa());
		
		System.out.println(a2.getNome()+" RA:"+ a2.getRa());
		
		System.out.println(a3.getNome()+" RA:"+ a3.getRa());

	}

}
