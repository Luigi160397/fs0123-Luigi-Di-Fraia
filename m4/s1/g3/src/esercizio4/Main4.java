package esercizio4;

import java.util.Scanner;

public class Main4 {

	public static void main(String[] args) {
		countDown();

	}

	
	public static void countDown() {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Inserisci un numero per far partire il count-down:");
        int input = scanner.nextInt();
        for (int i = input; i >= 0; i--) {
			System.out.println(i);
		}
        scanner.close();
	}
}
