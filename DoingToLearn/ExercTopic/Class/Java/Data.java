package AtividadeMau;

public class Data {
	int dia;
	int mes;
	int ano;

	//É o mesmo código de baixo, mas encurtei um pouco usando Boolean
/*	void getData() {
*		if(dia<=9 && mes<=9) {
*			System.out.println("0"+dia+"/"+"0"+mes+ "/"+ano);
*		}
*		else {
*			if(dia<=9 || mes<=9) {
*				if(dia<=9){System.out.println("0"+dia+"/"+mes+ "/"+ano);}
*				else{System.out.println(dia+"/"+"0"+mes+ "/"+ano);}
*			}
*			else {System.out.println(+dia+"/"+mes+ "/"+ano);}
*		}	
*	}
*/
	
	void getData(){
		boolean d= dia<10;
		boolean m= mes<10;
		//Caso o numero seja menor que 10 ele coloca o 0 para manter dois digitos
		if(d && m) {
			System.out.println("0"+dia+"/"+"0"+mes+ "/"+ano);
		}
		else {
			if(d || m) {
				if(d){System.out.println("0"+dia+"/"+mes+ "/"+ano);}
				else{System.out.println(dia+"/"+"0"+mes+ "/"+ano);}
			}
			else {System.out.println(+dia+"/"+mes+ "/"+ano);}
		}	
	}
	
}


	
