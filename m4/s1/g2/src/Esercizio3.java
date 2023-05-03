import java.util.Date;

public class Esercizio3 {

	public static void main(String[] args) {
		Articolo articolo1 = new Articolo("123asd", "bello",35.99, 10 );
		Articolo articolo2 = new Articolo("12345asdfgh", "bellissimo",40.99, 15 );
		
		Articolo[] listaArticoli = {articolo1, articolo2};
		
		
		Cliente cliente1 = new Cliente("123789qwe", "Giacomo Poretti", "giacomo.poretti@gmail.com", new Date());
		Cliente cliente2 = new Cliente("123789qwerty", "Signor Rezzonico", "sig.rezzonico@gmail.com", new Date());
		
		Carrello carrello1 = new Carrello (cliente1.codCliente, listaArticoli, sommaArticoli(listaArticoli) );
		carrello1.totaleChar();
	}

	public static double sommaArticoli (Articolo[] lista) {
		double totale = 0.0;
	    for (int i = 0; i < lista.length; i++) {
	        totale += lista[i].prezzo;
	    }
	    return totale;
	}
}
