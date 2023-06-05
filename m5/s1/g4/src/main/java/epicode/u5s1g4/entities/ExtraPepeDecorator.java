package epicode.u5s1g4.entities;

import jakarta.persistence.Entity;

@Entity
public class ExtraPepeDecorator extends ExtraAdditionDecorator {
	public ExtraPepeDecorator(Consumation pizza) {
		this.pizza = pizza;
	}

	@Override
	public String getNome() {
		return pizza.getNome() + " con aggiunta di pepe!";
	};

	@Override
	public double getPrezzo() {
		return pizza.getPrezzo() + 0.50;
	}

	@Override
	public String getIngredienti() {
		return pizza.getIngredienti() + ", con aggiunta di pepe";
	}

	@Override
	public long getCalorie() {
		return pizza.getCalorie() + 500;
	}

	@Override
	public String toString() {
		return "Pizza " + getNome() + " - Prezzo = " + "€ " + getPrezzo() + ", Ingredienti = " + getIngredienti()
				+ ", Calorie = " + getCalorie() + ".";
	}

}
