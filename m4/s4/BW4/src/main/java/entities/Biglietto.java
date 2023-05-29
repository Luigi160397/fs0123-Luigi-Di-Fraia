package entities;

import java.time.LocalDate;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Biglietto extends Ticket {

	public Biglietto(Tessera tessera, LocalDate dataEmissione, Distributore distributore, LocalDate dataTimbratura,
			Mezzo mezzoTimbratura) {
		super(tessera, dataEmissione, distributore, dataTimbratura, mezzoTimbratura);
		setDataScadenza(dataTimbratura.plusDays(1));
	}

	public Biglietto(Tessera tessera, LocalDate dataEmissione, Distributore distributore) {
		super(tessera, dataEmissione, distributore);
	}

	@Override
	public String toString() {
		return "Biglietto [Id=" + getId() + ", Data di Emissione=" + getDataEmissione() + ", Data di Scadenza="
				+ getDataScadenza() + ", Data di Timbratura=" + getDataTimbratura() + "]";
	}

}
