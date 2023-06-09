package epicode.u5s2g4.repositories;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import epicode.u5s2g4.entities.Postazione;
import epicode.u5s2g4.entities.Prenotazione;

@Repository
public interface PrenotazioniRepository extends JpaRepository<Prenotazione, UUID> {
	Optional<Prenotazione> findByPostazioneAndDataPrenotata(Postazione postazione, LocalDate data);
}
