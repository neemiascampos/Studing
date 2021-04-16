public class AlunoTeste {

	public static void main(String[] args) {

		Aluno a1= new Aluno();
			a1.setName("Julio");
			a1.setRa(115315);

		Aluno a2= new Aluno();
			a2.setName("Marcela");
			a2.setRa(115420);

		Aluno a3= new Aluno();
			a3.setName("Joaozinho");
			a3.setRa(115330);	
			
		System.out.println(a1.getName()+" RA:"+ a1.getRa());
		
		System.out.println(a2.getName()+" RA:"+ a2.getRa());
		
		System.out.println(a3.getName()+" RA:"+ a3.getRa());

	}

}
