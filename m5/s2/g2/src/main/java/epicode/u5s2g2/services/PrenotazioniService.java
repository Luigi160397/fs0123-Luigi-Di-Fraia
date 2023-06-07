package epicode.u5s2g2.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import epicode.u5s2g2.entities.Edificio;
import epicode.u5s2g2.entities.Postazione;
import epicode.u5s2g2.entities.Prenotazione;
import epicode.u5s2g2.entities.TipoPostazione;
import epicode.u5s2g2.entities.Utente;

@Service
public class PrenotazioniService {

	Edificio pirellone = new Edificio("Pirellone", "via del Pirellone,1", "Milano");
	Edificio pirellone2 = new Edificio("Pirellone2", "via del Pirellone,2", "Genova");
	Edificio pirellone3 = new Edificio("Pirellone3", "via del Pirellone,3", "Torino");

	Utente pippo = new Utente("pippo_baudo", "Pippo Baudo", "pippo@baudo.it");
	Utente aldo = new Utente("ajeje", "Aldo Baglio", "aldo@baglio.it");
	Utente giacomo = new Utente("giacomino", "Giacomo Poretti", "giacomo@poretti.it");

	Postazione camera1 = new Postazione("ampia vista", TipoPostazione.OPENSPACE, 10, pirellone, true);
	Postazione camera2 = new Postazione("ampia vista 2", TipoPostazione.PRIVATO, 5, pirellone2, true);
	Postazione camera3 = new Postazione("ampia vista 3", TipoPostazione.SALA_RIUNIONI, 20, pirellone3, false);

	Prenotazione prenot1 = new Prenotazione(aldo, camera1, LocalDate.of(2023, 5, 10));
	Prenotazione prenot2 = new Prenotazione(pippo, camera2, LocalDate.of(2023, 5, 12));
	Prenotazione prenot3 = new Prenotazione(giacomo, camera3, LocalDate.of(2023, 6, 5));

	List<Prenotazione> prenotazioni = new ArrayList<>(List.of(prenot1, prenot2, prenot3));

	public List<Prenotazione> getPrenotazioni() {
		return this.prenotazioni;
	}

	public Prenotazione saveNewPrenotazione(Prenotazione prenotazione) {

		this.prenotazioni.add(prenotazione);
		return prenotazione;

	}
}
