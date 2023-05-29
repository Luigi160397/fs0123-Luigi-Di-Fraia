package luigidifraia.u5s1g1.esercizio2;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class Margherita extends Pizza {
	public Margherita() {
		setNomePizza("Margherita");
		setPrezzo(getPrezzo());
		setCalorie(getCalorie());
		setIngredienti(getIngredienti());
	}

	@Override
	public String toString() {
		return "Margherita [Nome Pizza= " + getNomePizza() + ", Prezzo= " + getPrezzo() + ", Calorie= " + getCalorie()
				+ ", Ingredienti= " + getIngredienti() + "]";
	}

}
