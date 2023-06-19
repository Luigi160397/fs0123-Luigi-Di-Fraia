package epicode.u5s3g4.esercizio3;

class Maggiore extends Ufficiale {
	public Maggiore() {
		super(2000);
	}

	@Override
	public void approvaStipendio() {
		System.out.println("Il Maggiore percepisce un importo pari o superiore a 2000");
	}
}