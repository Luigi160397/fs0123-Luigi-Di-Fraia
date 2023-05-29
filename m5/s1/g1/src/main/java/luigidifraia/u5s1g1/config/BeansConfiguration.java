package luigidifraia.u5s1g1.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import luigidifraia.u5s1g1.esercizio1.Esercizio1;
import luigidifraia.u5s1g1.esercizio2.Boscaiola;
import luigidifraia.u5s1g1.esercizio2.Diavola;
import luigidifraia.u5s1g1.esercizio2.Margherita;
import luigidifraia.u5s1g1.esercizio2.Pizza;
import luigidifraia.u5s1g1.esercizio2.SalameExtra;

@Configuration
public class BeansConfiguration {
	@Bean
	Esercizio1 es() {
		return new Esercizio1();
	}

	@Bean

	Margherita margherita() {
		return new Margherita();
	}

	@Bean
	Boscaiola boscaiola() {
		return new Boscaiola();
	}

	@Bean
	@Primary
	Diavola diavola() {
		return new Diavola();
	}

	@Bean
	SalameExtra salameExtra(Pizza pizza) {
		return new SalameExtra(pizza);
	}
}
