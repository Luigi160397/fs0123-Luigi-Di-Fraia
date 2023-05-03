
public class Chiamata {
	double durata = 0.00;
	long numeroChiamato = 0;
	
	public Chiamata (double durata, long numeroChiamato) {
		this.durata = durata;
		this.numeroChiamato = numeroChiamato;
	}

	@Override
    public  String toString() {
        return "Durata chiamata: " + this.durata + ", Numero Chiamato: " + this.numeroChiamato;
    }
}
