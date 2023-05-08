package application.media;

public class Immagine extends ElementoMultimediale implements Luminosita {
	private int luminosita = 10;

	public Immagine(String tipoFile, String titolo) {
		super(tipoFile, titolo, false);
		setLuminosita(luminosita);
	}

	public Immagine(String tipoFile, String titolo, int luminosita) {
		super(tipoFile, titolo, false);
		setLuminosita(luminosita);
	}

	public int getLuminosita() {
		return luminosita;
	}

	public void setLuminosita(int luminosita) {
		this.luminosita = luminosita;
	}

	@Override
	public void esegui() {
		Luminosita.show(getTitolo(), getLuminosita());
	};

}
