package luigidifraia.u5s1g1.esercizio2;

public class PizzaXL extends IngredientiExtra {
	public PizzaXL(Pizza pizza) {
		this.pizza = pizza;
	}

	@Override
	public String getNomePizza() {

		return pizza.getNomePizza() + " XL";
	}

	@Override
	public double getPrezzo() {

		return pizza.getPrezzo() * 2;
	}

	@Override
	public long getCalorie() {

		return pizza.getCalorie() * 2;
	}

	@Override
	public String getIngredienti() {

		return pizza.getIngredienti();
	}

	@Override
	public String toString() {
		return "Pizza EXTRA LARGE [Nome Pizza= " + getNomePizza() + ", Prezzo= " + getPrezzo() + ", Calorie= "
				+ getCalorie() + ", Ingredienti= " + getIngredienti() + "]";
	}
}
