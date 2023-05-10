package esercizio3;

public class Main3 {

	public static void main(String[] args) {
		Rubrica.aggiungiContatto("Luigi", "3924494333");
		Rubrica.aggiungiContatto("Carlo", "3200313338");
		Rubrica.aggiungiContatto("Pippo", "3204852612");
		Rubrica.rimuoviContatto("Pippo");
		Rubrica.cercaContatto("3924494333");
		Rubrica.cercaContattoDaNome("carlo");
		Rubrica.stampaRubrica();
	}

}
