package luigidifraia.u5s1g1.esercizio2;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public abstract class IngredientiExtra extends Pizza {
	public Pizza pizza;

	@Override
	public abstract String getNomePizza();

	@Override
	public abstract double getPrezzo();

	@Override
	public abstract long getCalorie();

	@Override
	public abstract String getIngredienti();

}
