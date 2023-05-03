
public class Carrello {
	String cliente;
	Articolo[] articoli;
	double totCarrello;
	
	public Carrello (String cliente, Articolo[] articoli, double totCarrello) {
		this.cliente = cliente;
		this.articoli = articoli;
		this.totCarrello = totCarrello;
		
	}
	
	public void totaleChar() {
		System.out.println(this.totCarrello);
	}
}
