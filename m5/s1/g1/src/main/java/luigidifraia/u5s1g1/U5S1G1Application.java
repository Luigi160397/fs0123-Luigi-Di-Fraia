package luigidifraia.u5s1g1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import lombok.extern.slf4j.Slf4j;
import luigidifraia.u5s1g1.config.BeansConfiguration;
import luigidifraia.u5s1g1.esercizio1.Esercizio1;
import luigidifraia.u5s1g1.esercizio2.Boscaiola;
import luigidifraia.u5s1g1.esercizio2.Diavola;
import luigidifraia.u5s1g1.esercizio2.Margherita;
import luigidifraia.u5s1g1.esercizio2.MozzarellaExtra;
import luigidifraia.u5s1g1.esercizio2.PizzaXL;
import luigidifraia.u5s1g1.esercizio2.ProsciuttoExtra;
import luigidifraia.u5s1g1.esercizio2.SalameExtra;

@SpringBootApplication
@Slf4j
public class U5S1G1Application {

	public static void main(String[] args) {
		SpringApplication.run(U5S1G1Application.class, args);

		log.info("------------------- Con Bean Config -------------------");
		configWithConfigurationAnnotation();
		log.info("------------------- Senza Bean Config -------------------");
		Margherita margh = new Margherita();
		SalameExtra salame = new SalameExtra(margh);
		SalameExtra salamex2 = new SalameExtra(salame);
		MozzarellaExtra mozzarella = new MozzarellaExtra(salamex2);
		ProsciuttoExtra prosciutto = new ProsciuttoExtra(mozzarella);
		Boscaiola boscaiola = new Boscaiola();
		PizzaXL boscaiolaLarge = new PizzaXL(boscaiola);
		log.info(boscaiolaLarge.toString());
		log.info(prosciutto.toString());
	}

	public static void configWithConfigurationAnnotation() {
		AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(BeansConfiguration.class);
		Esercizio1 es1 = (Esercizio1) ctx.getBean("es");

		es1.saluto();

		Margherita margherita = (Margherita) ctx.getBean("margherita");

		Boscaiola boscaiola = (Boscaiola) ctx.getBean("boscaiola");

		Diavola diavola = (Diavola) ctx.getBean("diavola");

		log.info(margherita.toString());
		log.info(boscaiola.toString());
		log.info(diavola.toString());

		SalameExtra margheritaSalame = (SalameExtra) ctx.getBean("salameExtra");

		log.info(margheritaSalame.toString());

		ctx.close();
	}

}
