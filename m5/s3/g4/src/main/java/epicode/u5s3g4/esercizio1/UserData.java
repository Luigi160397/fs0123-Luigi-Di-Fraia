package epicode.u5s3g4.esercizio1;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserData {
	private String nomeCompleto;
	private int eta;

	public void getData(DataSource ds) {
		nomeCompleto = ds.getNomeCompleto();
		eta = ds.getEta();
	}
}