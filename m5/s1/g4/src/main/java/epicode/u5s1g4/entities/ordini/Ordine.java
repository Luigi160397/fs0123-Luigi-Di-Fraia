package epicode.u5s1g4.entities.ordini;

import java.time.LocalDateTime;
import java.util.List;

import epicode.u5s1g4.entities.Prodotto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Ordine {
	private Tavolo tavolo;
	private List<Prodotto> comanda;
	private int numOrdine;
	private StatoOrdine stato;
	private int coperti;
	private LocalDateTime oraComanda;
	private double costoCoperto;
	private double costoTot;

	public Ordine(Tavolo tavolo, List<Prodotto> comanda, int numOrdine, StatoOrdine stato, int coperti,
			LocalDateTime oraComanda, double costoCoperto) {
		super();
		this.tavolo = tavolo;
		this.comanda = comanda;
		this.numOrdine = numOrdine;
		this.stato = stato;
		this.coperti = coperti;
		this.oraComanda = oraComanda;
		this.costoCoperto = costoCoperto;
		setCostoTot(totOrdine(comanda, coperti, costoCoperto));
	}

	public double totOrdine(List<Prodotto> p, int coperti, double costoCoperto) {
		double somma = p.stream().mapToDouble(Prodotto::getPrezzo).sum();
		return somma + (coperti * costoCoperto);
	}

	@Override
	public String toString() {
		return "Ordine " + numOrdine + " - tavolo " + tavolo.getNumero() + ", stato = " + stato + ", coperti = "
				+ coperti + ", oraComanda = " + oraComanda + ", costoTot = " + costoTot + " €" + "\nComanda = "
				+ comanda + ".";
	}

}
