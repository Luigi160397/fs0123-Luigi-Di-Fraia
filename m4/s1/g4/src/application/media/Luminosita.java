package application.media;

public interface Luminosita {

	public static void show(String title, int luminosita) {

		System.out.println(title + " " + stampaLum(luminosita));

	}

	public static String show(int luminosita) {

		return " " + stampaLum(luminosita);

	}

	public static String stampaLum(int luminosita) {
		String strLum = "";
		for (int i = 0; i < luminosita; i++) {
			strLum += "*";
		}
		return strLum;
	}

	public static void alzaLuminosita() {

	}

	public static void abbassaLuminosita() {

	}
}
