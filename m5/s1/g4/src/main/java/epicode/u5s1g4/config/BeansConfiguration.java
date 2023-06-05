package epicode.u5s1g4.config;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;

import epicode.u5s1g4.entities.BoscaiolaDecorator;
import epicode.u5s1g4.entities.CocaCola;
import epicode.u5s1g4.entities.ExtraPepeDecorator;
import epicode.u5s1g4.entities.Ferrarelle;
import epicode.u5s1g4.entities.HawaianaDecorator;
import epicode.u5s1g4.entities.MaxiPizzaDecorator;
import epicode.u5s1g4.entities.Pizza;
import epicode.u5s1g4.entities.Prodotto;
import epicode.u5s1g4.entities.ordini.Ordine;
import epicode.u5s1g4.entities.ordini.StatoOrdine;
import epicode.u5s1g4.entities.ordini.StatoTavolo;
import epicode.u5s1g4.entities.ordini.Tavolo;

@Configuration
@PropertySource("classpath:application.properties")
public class BeansConfiguration {
	@Value("${application.costoCoperto}")
	private double costoCoperto;

	@Bean
	@Scope("singleton")
	Pizza margherita() {
		return new Pizza();
	}

	@Bean
	@Scope("singleton")
	BoscaiolaDecorator boscaiola(Pizza margherita) {
		return new BoscaiolaDecorator(margherita);
	}

	@Bean
	@Scope("singleton")
	HawaianaDecorator hawaiana(Pizza margherita) {
		return new HawaianaDecorator(margherita);
	}

	@Bean
	@Scope("singleton")
	MaxiPizzaDecorator boscaiolaMaxi(BoscaiolaDecorator b) {
		return new MaxiPizzaDecorator(b);
	}

	@Bean
	@Scope("singleton")
	MaxiPizzaDecorator margheritaMaxi() {
		return new MaxiPizzaDecorator(new Pizza());
	}

	@Bean
	@Scope("singleton")
	MaxiPizzaDecorator hawaianaMaxi() {
		return new MaxiPizzaDecorator(new HawaianaDecorator(new Pizza()));
	}

	@Bean
	@Scope("singleton")
	ExtraPepeDecorator extraPepe(BoscaiolaDecorator b) {
		return new ExtraPepeDecorator(b);
	}

	@Bean
	@Scope("singleton")
	Ferrarelle ferrarelle() {
		return new Ferrarelle();
	}

	@Bean
	@Scope("singleton")
	CocaCola coca() {
		return new CocaCola();
	}

	@Bean
	@Scope("singleton")
	Tavolo tavolo5() {
		return new Tavolo(5, 8, StatoTavolo.LIBERO);
	}

	@Bean
	@Scope("singleton")
	List<Prodotto> comanda3() {
		return new ArrayList<>(Arrays.asList(margherita(), ferrarelle(), coca()));
	}

	@Bean
	@Scope("singleton")
	Ordine ord3() {
		return new Ordine(tavolo5(), comanda3(), 3, StatoOrdine.IN_CORSO, 1, LocalDateTime.of(2023, 05, 31, 12, 00),
				costoCoperto);
	}
}
