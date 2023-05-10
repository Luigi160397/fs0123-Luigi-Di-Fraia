package esercizio3;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.FileUtils;

public class RegistroPresenze {
	private String Nome;
	private int nPresenze;
	private static Map<String, Integer> registroPresenze = new HashMap<>();
	private static File file = new File("registroPresenze.txt");

	public static void aggiungiDipendente(String nome, int giorniPresenze) {
		try {
			registroPresenze.put(nome, giorniPresenze);
			FileUtils.writeStringToFile(file, nome + "@" + giorniPresenze + System.lineSeparator(), "UTF-8", true);

		} catch (IOException e) {
			Main3.logger.info(e.getMessage());
		}
		System.out.println("Hai aggiunto: " + nome + "=" + giorniPresenze);
	}

	public static void stampaRegistro() {
		try {
			if (file.exists()) {
				String content = FileUtils.readFileToString(file, "UTF-8");
				Main3.logger.info("\n" + content);
			} else {

				Main3.logger.info("File non trovato.");
			}

		} catch (IOException e) {
			Main3.logger.info(e.getMessage());
		}
	}

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public int getnPresenze() {
		return nPresenze;
	}

	public void setnPresenze(int nPresenze) {
		this.nPresenze = nPresenze;
	}
}
