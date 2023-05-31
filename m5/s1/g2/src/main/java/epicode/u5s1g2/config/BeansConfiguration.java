package epicode.u5s1g2.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import epicode.u5s1g2.entities.Cappellino;
import epicode.u5s1g2.entities.CocaCola;
import epicode.u5s1g2.entities.ExtraSalame;
import epicode.u5s1g2.entities.Pizza;
import epicode.u5s1g2.entities.PizzaXL;
import epicode.u5s1g2.entities.ProsciuttoExtra;

@Configuration
public class BeansConfiguration {

	@Bean
	Pizza margherita() {
		return new Pizza();
	}

	@Bean
	ProsciuttoExtra prosciutto(Pizza margherita) {
		return new ProsciuttoExtra(margherita);
	}

	@Bean
	PizzaXL prosciuttoXL(ProsciuttoExtra p) {
		return new PizzaXL(p);
	}

	@Bean
	ExtraSalame extraSalame(Pizza margherita) {
		return new ExtraSalame(margherita);
	}

	@Bean
	CocaCola cocaCola() {
		return new CocaCola();
	}

	@Bean
	Cappellino cappello() {
		return new Cappellino();
	}

}
