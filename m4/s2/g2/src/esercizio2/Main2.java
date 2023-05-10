package esercizio2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class Main2 {

	public static void main(String[] args) {

		List<Integer> lista = listaOrdinata(5);
		System.out.println(listaInversa(lista));

		stampaPosizioni(lista, false);
	}

	public static List<Integer> listaOrdinata(int n) {
		Random r = new Random();
		List<Integer> lista = new ArrayList<>();
		for (int i = 0; i < n; i++) {
			int randomR = r.nextInt(101);
			lista.add(randomR);
		}
		return lista;
	}

	public static List<Integer> listaInversa(List<Integer> lista) {
		List<Integer> listaInv = new ArrayList<>(lista);
		Collections.reverse(listaInv);
		lista.addAll(listaInv);
		return lista;
	}

	public static void stampaPosizioni(List<Integer> lista, boolean pari) {
		for (int i = 0; i < lista.size(); i++) {
			if (pari && i % 2 == 0) {
				System.out.println(lista.get(i));
			} else if (!pari && i % 2 != 0) {
				System.out.println(lista.get(i));
			}
		}
	}
}
