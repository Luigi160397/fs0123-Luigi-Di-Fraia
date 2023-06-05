package epicode.u5s1g4.entities;

import jakarta.persistence.Entity;

@Entity
public class MaxiPizzaDecorator extends ExtraAdditionDecorator {
	public MaxiPizzaDecorator(Consumation pizza) {
		this.pizza = pizza;
	}

	@Override
	public String getNome() {
		return pizza.getNome() + " formato Maxi!";
	};

	@Override
	public double getPrezzo() {
		return pizza.getPrezzo() * 2;
	}

	@Override
	public String getIngredienti() {
		return pizza.getIngredienti();
	}

	@Override
	public long getCalorie() {
		return pizza.getCalorie() * 2;
	}

	@Override
	public String toString() {
		return "Pizza " + getNome() + " - Prezzo = " + "€ " + getPrezzo() + ", Ingredienti = " + getIngredienti()
				+ ", Calorie = " + getCalorie() + ".";
	}
}
