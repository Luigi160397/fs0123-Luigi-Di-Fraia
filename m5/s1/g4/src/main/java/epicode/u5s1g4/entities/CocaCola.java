package epicode.u5s1g4.entities;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class CocaCola extends Drink {

	public CocaCola() {
		super();
		setNome("Coca-Cola");
		setPrezzo(1.50);
		setCalorie(1500);

	}

	@Override
	public String toString() {
		return getNome() + " - Prezzo = " + "€ " + getPrezzo() + ", Calorie = " + getCalorie();
	}
}
