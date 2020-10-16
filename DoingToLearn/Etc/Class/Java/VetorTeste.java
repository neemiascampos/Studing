package atividade2Mau;

public class VetorTeste {

	public static void main(String[] args) {
		Vetor vetor= new Vetor();
		Aluno a1= new Aluno();
		a1.setName("Julio");
//		a1.setRa(117315);
		
		Aluno a2= new Aluno();
		a2.setName("Kupa");
//		a2.setRa(115025);
		
		Aluno a3= new Aluno();
		a3.setName("Mathew");
//		a3.setRa(125398);
		
		vetor.adicionaAluno(a1);
		vetor.adicionaAluno(a2);
		vetor.adicionaAluno(a3);
		vetor.adiciona("Marcela");
		vetor.adiciona("Eduardo");
		vetor.adiciona("Mary");
		System.out.println("Ao todo são " +vetor.tamanho()+ " alunos");
		vetor.mostrarAlunos();
		vetor.remove(1);
		vetor.remove(3);		
	}

}
