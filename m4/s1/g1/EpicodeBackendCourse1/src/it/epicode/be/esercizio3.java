package it.epicode.be;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class esercizio3 {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.println("Inserisci tre parole!");
		String stringa1 = in.nextLine();
		String stringa2 = in.nextLine();
		String stringa3 = in.nextLine();
		String[] array = {stringa1, stringa2, stringa3};
		System.out.println("Hai scritto in ordine " + Arrays.toString(array));
		List<String> list = Arrays.asList(array);
        Collections.reverse(list); 
        String[] reversedArr = list.toArray(new String[0]); 
        System.out.println("L'inverso di ciò che hai scritto è: "+ Arrays.toString(reversedArr));
        in.close();
	}

}
