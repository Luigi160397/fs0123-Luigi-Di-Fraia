package application.media;

public class Audio extends ElementoMultimediale implements Riproducibile {
	private int volume = 10;
	private int durata = 3;

	public Audio(String tipoFile, String titolo) {
		super(tipoFile, titolo, true);
		setDurata(durata);

	}

	public Audio(String tipoFile, String titolo, int durata) {
		super(tipoFile, titolo, true);
		setDurata(durata);

	}

	public Audio(String tipoFile, String titolo, int durata, int volume) {
		super(tipoFile, titolo, true);
		setDurata(durata);
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

	@Override
	public void esegui() {
		Riproducibile.play(getDurata(), getTitolo(), getVolume());
	};

}
