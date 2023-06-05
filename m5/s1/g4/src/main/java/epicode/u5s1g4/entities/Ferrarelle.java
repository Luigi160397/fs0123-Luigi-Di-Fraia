package epicode.u5s1g4.entities;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class Ferrarelle extends Drink {
	public Ferrarelle() {
		super();
		setNome("Ferrarelle");
		setPrezzo(1.50);
		setCalorie(50);
	}

	@Override
	public String toString() {
		return getNome() + " - Prezzo = " + "€ " + getPrezzo() + ", Calorie = " + getCalorie();
	}
}
