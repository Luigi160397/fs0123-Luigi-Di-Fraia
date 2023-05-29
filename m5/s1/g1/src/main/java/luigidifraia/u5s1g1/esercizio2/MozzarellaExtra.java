package luigidifraia.u5s1g1.esercizio2;

public class MozzarellaExtra extends IngredientiExtra {
	public MozzarellaExtra(Pizza pizza) {
		this.pizza = pizza;
	}

	@Override
	public String getNomePizza() {

		return pizza.getNomePizza() + " + Extra Mozzarella";
	}

	@Override
	public double getPrezzo() {

		return pizza.getPrezzo() + 0.50;
	}

	@Override
	public long getCalorie() {

		return pizza.getCalorie() + 400;
	}

	@Override
	public String getIngredienti() {

		return pizza.getIngredienti() + " , mozzarella extra";
	}

	@Override
	public String toString() {
		return "Pizza con Extra [Nome Pizza= " + getNomePizza() + ", Prezzo= " + getPrezzo() + ", Calorie= "
				+ getCalorie() + ", Ingredienti= " + getIngredienti() + "]";
	}
}
