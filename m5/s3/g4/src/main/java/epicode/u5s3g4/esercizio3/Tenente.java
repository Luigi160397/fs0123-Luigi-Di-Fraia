package epicode.u5s3g4.esercizio3;

class Tenente extends Ufficiale {
	public Tenente() {
		super(3000);
	}

	@Override
	public void approvaStipendio() {
		System.out.println("Il Tenente percepisce un importo pari o superiore a 3000");
	}
}