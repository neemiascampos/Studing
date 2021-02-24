package AtividadeMau;
class Aluno{
	private String nome;
	private int ra;
	 		 
		public void setRa(int x) {
			this.ra = x;
		}
		
		public void setNome(String x) {
			this.nome = x;	
		}
		
		public int getRa() {
			return this.ra;
		}
		
		public String getNome() {
			return this.nome;
		}
		
		public void Mensagem() {
			System.out.println("Finish");
		}
}
