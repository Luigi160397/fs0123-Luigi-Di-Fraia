package epicode.u5s1g4.entities;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "toppings")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class ExtraAdditionDecorator extends Consumation {
	@Id
	@GeneratedValue
	private UUID id;
	@Transient
	Consumation pizza;

	@Override
	public abstract String getNome();

	@Override
	public abstract double getPrezzo();

	@Override
	public abstract long getCalorie();

	@Override
	public abstract String getIngredienti();
}