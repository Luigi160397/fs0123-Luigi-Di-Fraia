package epicode.u5s3g4.esercizio3;

public abstract class Ufficiale {
	private Ufficiale superiore;
	private int stipendio;

	public Ufficiale(int stipendio) {
		this.stipendio = stipendio;
	}

	public void setSuperiore(Ufficiale superiore) {
		this.superiore = superiore;
	}

	public void processaRichiestaStipendio(int importo) {
		if (importo <= stipendio) {
			approvaStipendio();
		} else if (superiore != null) {
			superiore.processaRichiestaStipendio(importo);
		} else {
			rifiutaStipendio();
		}
	}

	public abstract void approvaStipendio();

	public void rifiutaStipendio() {
		System.out.println("Nessun ufficiale percepisce un importo pari o superiore a " + stipendio);
	}
}
