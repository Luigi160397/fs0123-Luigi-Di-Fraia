package epicode.u5s1g4.dao;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import epicode.u5s1g4.entities.Drink;

@Repository
public interface DrinkRepository extends JpaRepository<Drink, UUID> {

}
