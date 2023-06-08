package epicode.u5s2g3.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import epicode.u5s2g3.entities.Postazione;

@Repository
public interface PostazioniRepository extends JpaRepository<Postazione, UUID> {

}
