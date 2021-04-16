public class Vetor {
	
	private Aluno[] alunos = new Aluno[100];
	private int totalDeAlunos = 0;	

	public void adicionaAluno(Aluno aluno) {
	    this.alunos[this.totalDeAlunos] = aluno;
	    this.totalDeAlunos++;
	}
	
	public void adiciona(String x){
		Aluno aluno = new Aluno();
		aluno.setName(x);
	    this.alunos[this.totalDeAlunos] = aluno;
	    this.totalDeAlunos++;
	}
	
	public Aluno getAluno(int posicao) {
		return this.alunos[posicao];
	}

	public void remove(int posicao) {
		for(int i = posicao-1; i < this.totalDeAlunos - 1; i++) {
			this.alunos[i] = this.alunos[i + 1];
		}
			this.totalDeAlunos--;
			System.out.println("Removido com sucesso. Nova lista: ");
			this.mostrarAlunos();
	}

	public int tamanho() {
	    return this.totalDeAlunos;
	}
	
	public void mostrarAlunos() {
		for(int i = 0; i < this.totalDeAlunos; i++) {
			System.out.println(i+1+ ". "+(this.alunos[i]).getName());
		}
	}


	
}
