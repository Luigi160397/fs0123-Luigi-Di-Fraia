package esercizio3.conto;

import esercizio3.exception.BancaException;

public class ContoOnLine extends ContoCorrente {
	public double maxPrelievo;

	public ContoOnLine(String titolare, double saldo, double maxP) {
		super(titolare, saldo);
		this.maxPrelievo = maxP;
	}

	public void stampaSaldo() {

		System.out.println("Titolare: " + titolare + " - Saldo: " + saldo + " - Num movimenti: " + nMovimenti
				+ " - Massimo movimenti: " + maxMovimenti + " - Massimo prelievo possibile: " + maxPrelievo);
	}

	public void preleva(double x) throws BancaException {
		try {
			if (x > maxPrelievo) {
				throw new BancaException("Il prelievo non è disponibile");
			} else {
				super.preleva(x);

			}

		} catch (BancaException e) {
			System.out.println(e.getMessage());
		}
	}
}
