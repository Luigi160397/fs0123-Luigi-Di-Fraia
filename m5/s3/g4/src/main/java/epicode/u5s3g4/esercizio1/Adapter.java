package epicode.u5s3g4.esercizio1;

import java.time.LocalDate;

public class Adapter implements DataSource {
	private Info info;

	public Adapter(Info info) {
		this.info = info;
	}

	@Override
	public String getNomeCompleto() {
		return info.getNome() + " " + info.getCognome();
	}

	@Override
	public int getEta() {
		LocalDate dataDiNascita = info.getDataDiNascita();
		int annoCorrente = LocalDate.now().getYear();
		int annoDiNascita = dataDiNascita.getYear();
		return annoCorrente - annoDiNascita;
	}
}