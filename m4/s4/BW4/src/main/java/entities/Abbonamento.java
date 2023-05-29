package entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Abbonamento extends Ticket {
	@Enumerated(EnumType.STRING)
	private TipoAbbonamento tipoAbbonamento;

	public Abbonamento(Tessera tessera, LocalDate dataEmissione, Distributore distributore, LocalDate dataTimbratura,
			Mezzo mezzoTimbratura, TipoAbbonamento tipoAbbonamento) {
		super(tessera, dataEmissione, distributore, dataTimbratura, mezzoTimbratura);
		this.tipoAbbonamento = tipoAbbonamento;

		if (tipoAbbonamento.equals(TipoAbbonamento.SETTIMANALE)) {
			setDataScadenza(dataTimbratura.plusWeeks(1));
		} else {
			setDataScadenza(dataTimbratura.plusMonths(1));
		}
	}

	public Abbonamento(Tessera tessera, LocalDate dataEmissione, Distributore distributore,
			TipoAbbonamento tipoAbbonamento) {
		super(tessera, dataEmissione, distributore);
		this.tipoAbbonamento = tipoAbbonamento;

		if (tipoAbbonamento.equals(TipoAbbonamento.SETTIMANALE)) {
			setDataScadenza(dataEmissione.plusWeeks(1));
		} else {
			setDataScadenza(dataEmissione.plusMonths(1));
		}
	}

	@Override
	public String toString() {
		return "Abbonamento [tipoAbbonamento=" + tipoAbbonamento + ", Id=" + getId() + ", Data Emissione="
				+ getDataEmissione() + ", DataScadenza=" + getDataScadenza() + ", Data Timbratura="
				+ getDataTimbratura() + "]";
	}

}
