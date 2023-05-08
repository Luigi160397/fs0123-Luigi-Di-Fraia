package esercizio3;

import esercizio3.conto.ContoCorrente;
import esercizio3.conto.ContoOnLine;
import esercizio3.exception.BancaException;

public class Banca {

	public static void main(String[] args) {

		ContoCorrente conto1 = new ContoCorrente("Grossi Mario", 20000.0);

		System.out.println("Saldo conto: " + conto1.restituisciSaldo());

		try {
			conto1.preleva(1400.5);
			conto1.preleva(1400);
			conto1.preleva(1300);
			conto1.preleva(1300);
			conto1.preleva(1300);
			conto1.preleva(1300);
			conto1.preleva(100000);
			System.out.println("Saldo conto: " + conto1.restituisciSaldo());
		} catch (BancaException e) {
			System.out.println("Errore durante il prelievo: " + e);
			e.printStackTrace();
		}

		ContoOnLine conto2 = new ContoOnLine("Rossi Luigi", 50350.0, 1500);

		conto2.stampaSaldo();

		try {
			conto2.preleva(1000);

			conto2.preleva(1000);
			conto2.preleva(1000);
			conto2.preleva(1000);
			conto2.stampaSaldo();

		} catch (BancaException e) {
			System.out.println("Errore durante il prelievo: " + e);
			e.printStackTrace();
		}

	}

}
