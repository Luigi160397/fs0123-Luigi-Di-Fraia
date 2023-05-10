package esercizio3;

import java.util.HashMap;
import java.util.Map;

public class Rubrica {

	private static Map<String, String> rubrica = new HashMap<>();

	public static void aggiungiContatto(String nome, String numero) {

		rubrica.put(nome.toLowerCase(), numero);
		System.out.println("Contatto aggiunto in rubrica: " + nome + " Numero: " + numero);
	}

	public static void rimuoviContatto(String nome) {
		if (rubrica.containsKey(nome.toLowerCase())) {
			rubrica.remove(nome.toLowerCase());
			System.out.println("Contatto rimosso: " + nome);
		} else {
			System.out.println("Contatto non trovato: " + nome);
		}
	}

	public static void cercaContatto(String numero) {
		String nome = null;
		for (Map.Entry<String, String> entry : rubrica.entrySet()) {
			if (entry.getValue().equals(numero)) {
				nome = entry.getKey();
				break;
			}
		}
		if (nome != null) {
			System.out.println("Contatto trovato in rubrica: " + nome + " - " + numero);
		} else {
			System.out.println("Contatto non trovato: " + numero);
		}
	}

	public static void cercaContattoDaNome(String nome) {
		String numero = null;
		for (Map.Entry<String, String> entry : rubrica.entrySet()) {
			if (entry.getKey().equals(nome.toLowerCase())) {
				numero = entry.getValue();
				break;
			}
		}
		if (numero != null) {
			System.out.println("Contatto trovato in rubrica: " + nome + " - " + numero);
		} else {
			System.out.println("Contatto non trovato: " + nome);
		}
	}

	public static void stampaRubrica() {
		System.out.println("Contatti in rubrica: " + rubrica);
	}

}
