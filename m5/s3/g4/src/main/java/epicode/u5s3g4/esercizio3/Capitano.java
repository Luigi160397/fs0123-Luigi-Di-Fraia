package epicode.u5s3g4.esercizio3;

class Capitano extends Ufficiale {
	public Capitano() {
		super(1000);
	}

	@Override
	public void approvaStipendio() {
		System.out.println("Il Capitano percepisce un importo pari o superiore a 1000");
	}
}