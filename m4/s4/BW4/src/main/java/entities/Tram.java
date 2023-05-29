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
public class Tram extends Mezzo {

	public Tram(int capienza, StatoMezzo stato, LocalDate dataInizioServizio, LocalDate dataFineServizio,
			LocalDate dataInizioManutenzione, LocalDate dataFineManutenzione, int numeroBigliettiVidimati, Tratta tratta) {
		super(capienza = 80, stato, dataInizioServizio, dataFineServizio, dataInizioManutenzione, dataFineManutenzione,
				numeroBigliettiVidimati, tratta);
	}

}
