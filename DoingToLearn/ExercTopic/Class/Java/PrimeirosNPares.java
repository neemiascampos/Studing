import java.util.Scanner;
import java.util.Random;
//"6) Faça que recebe um númerone retorna um vetor com os n primeiro números pares."
public class PrimeirosNPares {
	public void main(String[] args) {
		try(Scanner sc = new Scanner(System.in)){
			System.out.println("Quantos valores serao pares no inicio do vetor?");
			getVetorPrimeirosPares(sc.nextInt());
		}
	}
	public static void getVetorPrimeirosPares(int num) {
		Random random = new Random();
		int nRandom = random.nextInt(5);
		int tamanhoVetor= num + nRandom;
		int[] vetor = new int[tamanhoVetor];
		for(int i=0;i<tamanhoVetor;i++) {
			vetor[i] = random.nextInt(10);
			while (Math.abs(vetor[i]) % 2 != 0) {
				vetor[i] = random.nextInt();
			}
		}
		System.out.println(vetor.toString());
	}
}