package epicode.u5s2g2.entities;

import java.util.Random;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Postazione {
	private Random r = new Random();
	private int id = r.nextInt(0, 100);
	private String descrizione;
	private TipoPostazione tipo;
	private int numeroMassimoOccupanti;
	private Edificio edificio;
	private boolean disponibile;

	public Postazione(String descrizione, TipoPostazione tipo, int numeroMassimoOccupanti, Edificio edificio,
			boolean disponibile) {

		this.descrizione = descrizione;
		this.tipo = tipo;
		this.numeroMassimoOccupanti = numeroMassimoOccupanti;
		this.edificio = edificio;
		this.disponibile = disponibile;
	}

	@Override
	public String toString() {
		return "Postazione [id=" + id + ", descrizione=" + descrizione + ", tipo=" + tipo + ", numeroMassimoOccupanti="
				+ numeroMassimoOccupanti + ", edificio=" + edificio + ", disponibile=" + disponibile + "]";
	}

}
