package epicode.u5s3g4.esercizio3;

class Colonnello extends Ufficiale {
	public Colonnello() {
		super(4000);
	}

	@Override
	public void approvaStipendio() {
		System.out.println("Il Colonnello percepisce un importo pari o superiore a 4000");
	}
}