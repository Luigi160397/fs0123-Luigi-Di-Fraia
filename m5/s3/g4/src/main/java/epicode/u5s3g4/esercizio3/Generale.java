package epicode.u5s3g4.esercizio3;

class Generale extends Ufficiale {
	public Generale() {
		super(5000);
	}

	@Override
	public void approvaStipendio() {
		System.out.println("Il Generale percepisce un importo pari o superiore a 5000");
	}
}
