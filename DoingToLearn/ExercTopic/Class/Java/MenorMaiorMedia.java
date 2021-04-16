import java.util.Scanner;
public class MenorMaiorMedia {
	
	public static void main(String[] args) {
		double a,b,c,maior=0,menor=0, media;
		boolean teste1=false,teste2=false;
		try(Scanner ler = new Scanner(System.in)){
			System.out.println("Digite um valor para A");
				a = ler.nextInt();
			System.out.println("Digite um valor para B");
				b = ler.nextInt();
			System.out.println("Digite um valor para C");
				c = ler.nextInt();
		}
		if(a>b && a>c) {maior = a;}
		else if(b>a && b>c) {maior = b;}
		else if(c>b && c>a) {maior = c;}
		else {
			System.out.println("N�o existe um �nico numero maior");
			teste1 = true;
		}
		
		if(a<b && a<c) {menor = a;}
		else if(b<a && b<c) {menor = b;}
		else if(c<b && c<a) {menor = c;}
		else {
			System.out.println("N�o existe um �nico numero menor");
			teste2 = true;
		}
		
		media = (a+b+c)/3;
		
		if(teste1 && teste2) {
			System.out.println("A media � "+media);
		}
		else if(teste1) {
			System.out.println("O menor numero � "+menor+", e a m�dia � "+media);
		}
		else if(teste2) {
			System.out.println("O maior numero � "+maior+", e a m�dia � "+media);
		}
		else {
		System.out.println("O maior n�mero � "+maior+", o menor � "+menor+", e a m�dia � "+media);
		}
	}
}

