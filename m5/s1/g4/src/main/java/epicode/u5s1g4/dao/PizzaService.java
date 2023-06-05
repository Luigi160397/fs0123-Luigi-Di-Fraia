package epicode.u5s1g4.dao;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import epicode.u5s1g4.entities.ExtraAdditionDecorator;
import epicode.u5s1g4.entities.Pizza;
import epicode.u5s1g4.exceptions.ItemNotFoundException;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class PizzaService {
	@Autowired
	private PizzaRepository menuRepo;

	public void save(Pizza p) {
		menuRepo.save(p);
		log.info("Pizza salvata");
	}

	public void saveDecoratedPizza(ExtraAdditionDecorator e) {
		Pizza decoratedPizza = new Pizza();
		decoratedPizza.setNome(e.getNome());
		decoratedPizza.setCalorie(e.getCalorie());
		decoratedPizza.setIngredienti(e.getIngredienti());
		decoratedPizza.setPrezzo(e.getPrezzo());
		this.save(decoratedPizza);
	}

	public List<Pizza> findAll() {
		return menuRepo.findAll();
	}

	public Pizza findById(UUID id) throws ItemNotFoundException {

		return menuRepo.findById(id).orElseThrow(() -> new ItemNotFoundException(id));
	}

	public void findByIdAndDelete(UUID id) throws ItemNotFoundException {
		Pizza found = this.findById(id);
		menuRepo.delete(found);
		System.out.println("Pizza eliminata!");
	}
}
