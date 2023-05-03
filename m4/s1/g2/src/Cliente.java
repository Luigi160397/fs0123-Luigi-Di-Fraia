import java.util.Date;

public class Cliente {
	String codCliente;
	String nomeCognome;
	String email;
	Date dataIscrizione;
	
	public Cliente (String codCliente, String nomeCognome, String email, Date dataIscrizione) {
		this.codCliente = codCliente;
		this.nomeCognome = nomeCognome;
		this.email = email;
		this.dataIscrizione = dataIscrizione;
	}
}
