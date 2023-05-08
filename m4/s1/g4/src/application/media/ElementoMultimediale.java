package application.media;

public abstract class ElementoMultimediale {
	private String tipoFile;
	private String titolo;
	private boolean riproducibile;

	public ElementoMultimediale(String tipoFile, String titolo, boolean riproducibile) {

		setTipoFile(tipoFile);
		setTitolo(titolo);
		setRiproducibile(riproducibile);
	}

	public abstract void esegui();

	public String getTipoFile() {
		return tipoFile;
	}

	public void setTipoFile(String tipoFile) {
		this.tipoFile = tipoFile;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public boolean isRiproducibile() {
		return riproducibile;
	}

	public void setRiproducibile(boolean riproducibile) {
		this.riproducibile = riproducibile;
	}

}
