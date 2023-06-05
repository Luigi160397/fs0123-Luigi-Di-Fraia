package epicode.u5s1g4.dao;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import epicode.u5s1g4.entities.Drink;
import epicode.u5s1g4.exceptions.ItemNotFoundException;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class DrinkService {
	@Autowired
	private DrinkRepository drinkRepo;

	public void save(Drink d) {
		drinkRepo.save(d);
		log.info("Drink salvato");
	}

	public List<Drink> findAll() {
		return drinkRepo.findAll();
	}

	public Drink findById(UUID id) throws ItemNotFoundException {

		return drinkRepo.findById(id).orElseThrow(() -> new ItemNotFoundException(id));
	}

	public void findByIdAndDelete(UUID id) throws ItemNotFoundException {
		Drink found = this.findById(id);
		drinkRepo.delete(found);
		System.out.println("Drink eliminato!");
	}
}
