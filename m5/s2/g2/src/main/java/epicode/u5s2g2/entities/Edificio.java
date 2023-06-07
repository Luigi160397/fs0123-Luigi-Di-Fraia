package epicode.u5s2g2.entities;

import java.util.Random;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class Edificio {
	private Random r = new Random();
	private int id = r.nextInt(0, 100);
	private String nome;
	private String indirizzo;
	private String citta;

	public Edificio(String nome, String indirizzo, String citta) {

		this.nome = nome;
		this.indirizzo = indirizzo;
		this.citta = citta;
	}

	@Override
	public String toString() {
		return "Edificio [id=" + id + ", nome=" + nome + ", indirizzo=" + indirizzo + ", città=" + citta + "]";
	}

}
