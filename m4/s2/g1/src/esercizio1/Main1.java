package esercizio1;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

import esercizio1.exception.From1To10Exception;

public class Main1 {

	public static void main(String[] args) {
		Random r = new Random();
		int[] numCasuali = new int[5];
		for (int i = 0; i < numCasuali.length; i++) {
			numCasuali[i] = r.nextInt(1, 11);
		}
		Scanner scan = new Scanner(System.in);
		int exit = -1;
		while (exit != 0) {
			System.out.println(
					"Modifica l'array specificando posizione e valore compreso tra 1 e 10 (premi 0 per uscire): ");
			System.out.println(Arrays.toString(numCasuali));
			System.out.println("Scrivi in quale posizione vuoi modificare l'array: ");
			int posizione = scan.nextInt();
			if (posizione > 0) {

				scan.nextLine();
				switch (posizione) {
				case 1:
					System.out.println("Scrivi un valore da 1 a 10: ");
					try {
						int valore = scan.nextInt();
						if (valore < 0 || valore > 10) {
							throw new From1To10Exception("Devi inserire un valore compreso tra 1 e 10");
						} else {

							numCasuali[0] = valore;
						}

					} catch (From1To10Exception e) {
						System.out.println(e.getMessage());

					}

					break;
				case 2:

					System.out.println("Scrivi un valore da 1 a 10: ");
					try {
						int valore1 = scan.nextInt();
						if (valore1 < 0 || valore1 > 10) {
							throw new From1To10Exception("Devi inserire un valore compreso tra 1 e 10");
						} else {

							numCasuali[1] = valore1;
						}

					} catch (From1To10Exception e) {
						System.out.println(e.getMessage());

					}

					break;
				case 3:

					System.out.println("Scrivi un valore da 1 a 10: ");
					try {
						int valore2 = scan.nextInt();
						if (valore2 < 0 || valore2 > 10) {
							throw new From1To10Exception("Devi inserire un valore compreso tra 1 e 10");
						} else {

							numCasuali[2] = valore2;
						}

					} catch (From1To10Exception e) {
						System.out.println(e.getMessage());

					}

					break;
				case 4:
					System.out.println("Scrivi un valore da 1 a 10: ");
					try {
						int valore3 = scan.nextInt();
						if (valore3 < 0 || valore3 > 10) {
							throw new From1To10Exception("Devi inserire un valore compreso tra 1 e 10");
						} else {

							numCasuali[3] = valore3;
						}

					} catch (From1To10Exception e) {
						System.out.println(e.getMessage());

					}

					break;
				case 5:
					System.out.println("Scrivi un valore da 1 a 10: ");
					try {
						int valore4 = scan.nextInt();
						if (valore4 < 0 || valore4 > 10) {
							throw new From1To10Exception("Devi inserire un valore compreso tra 1 e 10");
						} else {

							numCasuali[4] = valore4;
						}

					} catch (From1To10Exception e) {
						System.out.println(e.getMessage());

					}

					break;
				default:
					System.out.println("Scrivi una posizione da 1 a 5!");
					break;
				}
			} else {
				System.out.println("Arrivederci!");
				exit = 0;
				scan.close();
			}
		}

	}

}
