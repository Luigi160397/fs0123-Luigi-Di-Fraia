package luigidifraia.u5s1g1.esercizio2;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class Diavola extends Pizza {
	public Diavola() {
		setNomePizza("Diavola");
		setPrezzo(getPrezzo() + 2.00);
		setCalorie(getCalorie() + 680);
		setIngredienti(getIngredienti() + ", salame piccante, peperoncino");
	}

	@Override
	public String toString() {
		return "Diavola [Nome Pizza= " + getNomePizza() + ", Prezzo= " + getPrezzo() + ", Calorie= " + getCalorie()
				+ ", Ingredienti= " + getIngredienti() + "]";
	}
}
