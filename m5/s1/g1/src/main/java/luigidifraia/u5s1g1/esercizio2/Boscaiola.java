package luigidifraia.u5s1g1.esercizio2;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class Boscaiola extends Pizza {
	public Boscaiola() {
		setNomePizza("Boscaiola");
		setPrezzo(getPrezzo() + 1.50);
		setCalorie(getCalorie() + 500);
		setIngredienti(getIngredienti() + ", funghi, salsiccia");
	}

	@Override
	public String toString() {
		return "Boscaiola [Nome Pizza= " + getNomePizza() + ", Prezzo= " + getPrezzo() + ", Calorie= " + getCalorie()
				+ ", Ingredienti= " + getIngredienti() + "]";
	}
}
