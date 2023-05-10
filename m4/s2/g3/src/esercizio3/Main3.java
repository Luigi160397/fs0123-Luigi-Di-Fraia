package esercizio3;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main3 {
	public static Logger logger = LoggerFactory.getLogger(Main3.class);

	public static void main(String[] args) {
		RegistroPresenze.aggiungiDipendente("Mario", 3);
		RegistroPresenze.aggiungiDipendente("Luca", 7);
		RegistroPresenze.aggiungiDipendente("Giovanni", 1);

		RegistroPresenze.stampaRegistro();
	}

}
