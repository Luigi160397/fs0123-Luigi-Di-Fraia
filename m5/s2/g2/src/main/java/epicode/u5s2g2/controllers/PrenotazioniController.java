package epicode.u5s2g2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import epicode.u5s2g2.entities.Prenotazione;
import epicode.u5s2g2.services.PrenotazioniService;

@RestController
@RequestMapping("/prenotazioni")
public class PrenotazioniController {
	@Autowired
	PrenotazioniService prenotService;

	@GetMapping("")
	public List<Prenotazione> getPrenotazioni() {
		return prenotService.getPrenotazioni();
	}

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Prenotazione savePrenotazione(@RequestBody Prenotazione body) {
		Prenotazione createdPrenotazione = prenotService.saveNewPrenotazione(body);
		return createdPrenotazione;
	}

	@GetMapping("/info")
	public String infoGen() {

		return "Inserisci una lingua tra Italiano (ita) e Inglese (eng) come path variable";

	}

	@GetMapping("/info/{lingua}")
	public String infoSpec(@PathVariable String lingua) {
		if (lingua.equals("ita")) {

			return "Benvenuto nel sistema di prenotazioni, ogni prenotazione vale un giorno!";
		} else if (lingua.equals("eng")) {
			return "Welcome to the booking system, every booking is worth one day!";
		} else {
			return "Inserisci una lingua tra Italiano (ita) e Inglese (eng)";
		}
	}
}
