package epicode.u5s1g2.entities.ordini;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

import epicode.u5s1g2.entities.Cappellino;
import epicode.u5s1g2.entities.CocaCola;
import epicode.u5s1g2.entities.ExtraSalame;
import epicode.u5s1g2.entities.Pizza;
import epicode.u5s1g2.entities.PizzaXL;
import epicode.u5s1g2.entities.Prodotto;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class OrderRunner implements CommandLineRunner {

	@Override
	public void run(String... args) throws Exception {
		menuPizze();
	}

	public static void menuPizze() {
		AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(
				epicode.u5s1g2.config.BeansConfiguration.class);
		Pizza margherita = (Pizza) ctx.getBean("margherita");
		PizzaXL prosciuttoXL = (PizzaXL) ctx.getBean("prosciuttoXL");
		ExtraSalame diavola = (ExtraSalame) ctx.getBean("extraSalame");
		CocaCola cocaCola = (CocaCola) ctx.getBean("cocaCola");
		Cappellino cappellino = (Cappellino) ctx.getBean("cappello");

		Tavolo tavolo1 = new Tavolo(1, 4, StatoTavolo.OCCUPATO);

		List<Prodotto> listaOrd1 = new ArrayList<>(Arrays.asList(prosciuttoXL, cappellino, cocaCola));

		Ordine ordine1 = new Ordine(3, tavolo1, listaOrd1, StatoOrdine.PRONTO, 2,
				LocalDateTime.of(2023, 05, 30, 12, 30));
		log.info("-------------------- Menù --------------------");
		log.info("");
		log.info("-------------------- Pizze --------------------");
		log.info(prosciuttoXL.toString());
		log.info(diavola.toString());
		log.info(margherita.toString());
		log.info("-------------------- Drinks --------------------");
		log.info(cocaCola.toString());
		log.info("-------------------- Accessori --------------------");
		log.info(cappellino.toString());
		log.info("");
		log.info("-------------------- Ordine --------------------");
		log.info(ordine1.toString());
		ctx.close();

	}
}
