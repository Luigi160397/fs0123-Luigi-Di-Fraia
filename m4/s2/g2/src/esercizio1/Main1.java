package esercizio1;

import java.util.HashSet;
import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.Set;

public class Main1 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		int n;
		while (true) {
			try {
				System.out.print("Inserisci il numero di parole da inserire: ");
				n = scan.nextInt();
				if (n <= 0) {
					throw new MinoreDi0Exception(
							"Sono ammessi solo numeri positivi! Inserisci un numero intero positivo.");
				}
				break;
			} catch (InputMismatchException e) {
				System.out.println("Input non valido. Inserisci un numero intero positivo.");
				scan.nextLine();
			} catch (MinoreDi0Exception e) {
				System.out.println(e.getMessage());
			}
		}
		Set<String> parole = new HashSet<>();
		Set<String> paroleDuplicate = new HashSet<>();

		for (int i = 0; i < n; i++) {
			System.out.print("Inserisci la parola numero " + (i + 1) + ": ");
			String parola = scan.next();

			if (parole.contains(parola)) {
				paroleDuplicate.add(parola);
			} else {
				parole.add(parola);
			}

		}
		System.out.println("Parole duplicate: " + paroleDuplicate);
		System.out.println("Numero di parole distinte: " + parole.size());
		System.out.println("Elenco delle parole distinte: " + parole);

		scan.close();
	}

}
