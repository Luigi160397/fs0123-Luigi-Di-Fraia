package application.media;

public class Video extends ElementoMultimediale implements Riproducibile, Luminosita {
	private int volume = 10;
	private int durata = 3;
	private int luminosita = 10;

	public Video(String tipoFile, String titolo) {
		super(tipoFile, titolo, true);
		setDurata(durata);
		setLuminosita(luminosita);

	}

	public Video(String tipoFile, String titolo, int durata) {
		super(tipoFile, titolo, true);
		setDurata(durata);
		setLuminosita(luminosita);

	}

	public Video(String tipoFile, String titolo, int durata, int luminosita) {
		super(tipoFile, titolo, true);
		setDurata(durata);
		setLuminosita(luminosita);
	}

	public Video(String tipoFile, String titolo, int durata, int luminosita, int volume) {
		super(tipoFile, titolo, true);
		setDurata(durata);
		setLuminosita(luminosita);
		setVolume(volume);
	}

	public int getVolume() {
		return volume;
	}

	public void setVolume(int volume) {
		this.volume = volume;
	}

	public int getDurata() {
		return durata;
	}

	public void setDurata(int durata) {
		this.durata = durata;
	}

	public int getLuminosita() {
		return luminosita;
	}

	public void setLuminosita(int luminosita) {
		this.luminosita = luminosita;
	}

	@Override
	public void esegui() {
		Riproducibile.play(getDurata(), getTitolo(), getVolume(), Luminosita.show(getLuminosita()));
	};

}
