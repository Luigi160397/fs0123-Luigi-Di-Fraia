package it.epicode.be;
import java.util.Scanner;

public class esercizio4 {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.println("Calcola il perimetro di un rettangolo (inserisci la misura dei due lati)!");
		String stringaN1 = in.nextLine();
        String stringaN2 = in.nextLine();
        double n1 = Double.parseDouble(stringaN1);
        double n2 = Double.parseDouble(stringaN2);
        System.out.println(perimetroRettangolo(n1,n2));
        System.out.println("Inserisci un numero e controlla se è pari o dispari:");
        String stringaN3 = in.nextLine();
        
        int n3 = Integer.parseInt(stringaN3);
        System.out.println(stringaPariDispari(pariDispari(n3)));
        System.out.println("Calcola l'area di un triangolo (inserisci la misura dei tre lati)!");
        String stringaN4 = in.nextLine();
        String stringaN5 = in.nextLine();
        String stringaN6 = in.nextLine();
        double n4 = Double.parseDouble(stringaN4);
        double n5 = Double.parseDouble(stringaN5);
        double n6 = Double.parseDouble(stringaN6);
        System.out.println(perimetroTriangolo(n4,n5,n6));
        in.close();

        
	}
	
	public static double perimetroRettangolo (double num1, double num2) {
		return (num1 + num2)*2;
	}
	
	public static int pariDispari(int numero) {
	    if (numero % 2 == 0) {
	        return 0;
	    } else {
	        return 1;
	    }
	}
	
	public static String stringaPariDispari (int numero) {
		if(numero == 0) {
			return "Il Numero è pari";
		} else {
			return "Il Numero è dispari";
		}
	}
	
	public static double perimetroTriangolo(double lato1, double lato2, double lato3) {
	    double semiperimetro = (lato1 + lato2 + lato3) / 2;
	    double area = Math.sqrt(semiperimetro * (semiperimetro - lato1) * (semiperimetro - lato2) * (semiperimetro - lato3));
	    return area;
	}

}
