
public class Esercizio2 {

	public static void main(String[] args) {
		
		Chiamata call1 = new Chiamata(2.45,392449433);
		Chiamata call2 = new Chiamata(3.50,521);
		
		Chiamata[] listaChiamate1 = {call1, call2};
		
		Sim sim1 = new Sim(39244943,30.20, listaChiamate1);
		Sim sim2 = new Sim(313312, 5.30);
		Sim sim3 = new Sim(313312);
		sim1.stampaSim();
		sim2.stampaSim();
		sim3.stampaSim();
	}

}
