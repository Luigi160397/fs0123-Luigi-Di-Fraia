package epicode.u5s2g4.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import epicode.u5s2g4.entities.Postazione;

@Repository
public interface PostazioniRepository extends JpaRepository<Postazione, UUID> {

}
