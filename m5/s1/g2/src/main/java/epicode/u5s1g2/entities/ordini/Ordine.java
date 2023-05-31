package epicode.u5s1g2.entities.ordini;

import java.time.LocalDateTime;
import java.util.List;

import epicode.u5s1g2.entities.Prodotto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class Ordine {
	private int numeroOrdine;
	private Tavolo tavolo;
	private List<Prodotto> comanda;
	private StatoOrdine statoOrdine;
	private int numeroCoperti;
	private LocalDateTime oraAcquisizione;
	private double importoTotale;
//	@Value("${application.costoCoperto}")
	private double costoCoperto;

	public Ordine(int numeroOrdine, Tavolo tavolo, List<Prodotto> comanda, StatoOrdine statoOrdine, int numeroCoperti,
			LocalDateTime oraAcquisizione) {
		super();
		this.numeroOrdine = numeroOrdine;
		this.tavolo = tavolo;
		this.comanda = comanda;
		this.statoOrdine = statoOrdine;
		this.numeroCoperti = numeroCoperti;
		this.oraAcquisizione = oraAcquisizione;
		setCostoCoperto(numeroCoperti * 1.50);
		setImportoTotale(totOrdine(comanda) + getCostoCoperto());
	}

	public double totOrdine(List<Prodotto> prodotti) {
		double somma = prodotti.stream().mapToDouble(Prodotto::getPrezzo).sum();
		return somma;
	}

}
