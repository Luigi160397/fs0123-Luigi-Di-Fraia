package epicode.u5s1g4.entities;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "pizze")
public class Pizza extends Consumation {
	@Id
	@GeneratedValue
	private UUID id;
	private String ingredienti;

	public Pizza() {
		super();
		setNome("Margherita");
		setPrezzo(4.50);
		setCalorie(500);
		setIngredienti("Pomodoro, Mozzarella");
	}

	@Override
	public String toString() {
		return "Pizza " + getNome() + " - Prezzo = " + "€ " + getPrezzo() + ", Ingredienti = " + getIngredienti()
				+ ", Calorie = " + getCalorie() + ".";
	}

	public String orderPrint() {
		return "Pizza " + getNome() + " - Prezzo = " + "€ " + getPrezzo() + ".";
	}
}
