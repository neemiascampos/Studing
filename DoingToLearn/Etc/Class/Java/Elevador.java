package AtvdElevador;

public class Elevador {
	private int maxPessoas;
	private int maxAndar;
	private int qtdPessoas;
	private int andar;
	
	public void setMaxAndar(int x) {
		this.maxAndar = x;
		this.andar = 0;
	}
	
	public void setMaxPessoas(int x) {
		this.maxPessoas = x;
		this.qtdPessoas = 0;
	}
	
	public void entra() {
		if(qtdPessoas>=maxPessoas) {
			System.out.println("Lamento, aqui não é coração de mãe");
		}
		else {
			this.qtdPessoas = qtdPessoas + 1;
			System.out.println("Opa, desce ou sobe?");
		}
	}
	
	public void sai() {
		if(qtdPessoas<=0) {
			System.out.println("Quer tirar mais quem? Eu ja to sozinho!");
			System.out.println("E olha que eu sou o próprio elevador..");
		}
		else {
			this.qtdPessoas = qtdPessoas-1;
			System.out.println("Opa, foi bom te ver por aqui");
			System.out.println("Volte semp.. Tchau kk");
		}
	}
	
	public void sobe() {
		if(andar>=maxAndar) {
			System.out.println("Não temos como atravessar paredes, desculpe!");
		}
		else {
			this.andar = andar + 1;
			System.out.println("Subindo, o céu é o limite!");
			System.out.println("na verdade.. é o andar "+maxAndar+", haha..");
		}
	}
	
	public void desce() {
		if(andar<=0) {
			System.out.println("Insira seu passe pro submundo e tentaremos atravessar o chão");
		}
		else {
			this.andar = andar + -1;
			System.out.println("Descendo");
			System.out.println("Você chegou ao andar "+andar);
		}
	}
	
	
	

	
}
