package luigidifraia.u5s1g1.esercizio2;

public class SalameExtra extends IngredientiExtra {

	public SalameExtra(Pizza pizza) {
		this.pizza = pizza;
	}

	@Override
	public String getNomePizza() {

		return pizza.getNomePizza() + " + Extra Salame";
	}

	@Override
	public double getPrezzo() {

		return pizza.getPrezzo() + 0.30;
	}

	@Override
	public long getCalorie() {

		return pizza.getCalorie() + 200;
	}

	@Override
	public String getIngredienti() {

		return pizza.getIngredienti() + " , salame extra";
	}

	@Override
	public String toString() {
		return "Pizza con Extra [Nome Pizza= " + getNomePizza() + ", Prezzo= " + getPrezzo() + ", Calorie= "
				+ getCalorie() + ", Ingredienti= " + getIngredienti() + "]";
	}

}
