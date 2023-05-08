package esercizio2;

import java.util.Scanner;

public class Main2 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Calcola km/litro.");

		try {
			System.out.println("Inserisci i km percorsi:");
			int km = scan.nextInt();
			System.out.println("Inserisci i litri consumati:");
			int lt = scan.nextInt();
			System.out.println("Il consumo è stato di: " + kmPerLitro(km, lt) + " km/l");

		} catch (ArithmeticException e) {
			System.out.println("Devi inserire valori positivi!");
		} finally {
			scan.close();
		}

	}

	public static int kmPerLitro(int km, int litro) {
		return km / litro;
	}

}
