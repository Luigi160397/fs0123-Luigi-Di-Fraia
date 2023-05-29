package luigidifraia.u5s1g1.esercizio2;

public class ProsciuttoExtra extends IngredientiExtra {
	public ProsciuttoExtra(Pizza pizza) {
		this.pizza = pizza;
	}

	@Override
	public String getNomePizza() {

		return pizza.getNomePizza() + " + Extra Prosciutto";
	}

	@Override
	public double getPrezzo() {

		return pizza.getPrezzo() + 0.70;
	}

	@Override
	public long getCalorie() {

		return pizza.getCalorie() + 450;
	}

	@Override
	public String getIngredienti() {

		return pizza.getIngredienti() + " , prosciutto extra";
	}

	@Override
	public String toString() {
		return "Pizza con Extra [Nome Pizza= " + getNomePizza() + ", Prezzo= " + getPrezzo() + ", Calorie= "
				+ getCalorie() + ", Ingredienti= " + getIngredienti() + "]";
	}
}
