package epicode.u5s1g4.entities.ordini;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

import epicode.u5s1g4.config.BeansConfiguration;
import epicode.u5s1g4.dao.DrinkService;
import epicode.u5s1g4.dao.PizzaService;
import epicode.u5s1g4.entities.BoscaiolaDecorator;
import epicode.u5s1g4.entities.CocaCola;
import epicode.u5s1g4.entities.ExtraPepeDecorator;
import epicode.u5s1g4.entities.Ferrarelle;
import epicode.u5s1g4.entities.HawaianaDecorator;
import epicode.u5s1g4.entities.MaxiPizzaDecorator;
import epicode.u5s1g4.entities.Pizza;
import epicode.u5s1g4.exceptions.ItemNotFoundException;

@Component
public class MenuRunner implements CommandLineRunner {
	@Value("${application.costoCoperto}")
	private double costoCoperto;
	@Autowired
	PizzaService pizzaService;
	@Autowired
	DrinkService drinkService;

	@Override
	public void run(String... args) throws Exception {
		menu(costoCoperto, pizzaService, drinkService);
	}

	public static void menu(double costoCoperto, PizzaService pizzaService, DrinkService drinkService) {
		AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(BeansConfiguration.class);
		System.out.println();

		Pizza margherita = (Pizza) ctx.getBean("margherita");
		BoscaiolaDecorator boscaiola = (BoscaiolaDecorator) ctx.getBean("boscaiola");
		HawaianaDecorator hawaiana = (HawaianaDecorator) ctx.getBean("hawaiana");
		MaxiPizzaDecorator boscaiolaMaxi = (MaxiPizzaDecorator) ctx.getBean("boscaiolaMaxi");
		MaxiPizzaDecorator margheritaMaxi = (MaxiPizzaDecorator) ctx.getBean("margheritaMaxi");
		MaxiPizzaDecorator hawaianaMaxi = (MaxiPizzaDecorator) ctx.getBean("hawaianaMaxi");
		ExtraPepeDecorator boscaiolaPepata = new ExtraPepeDecorator(boscaiola);
		Ferrarelle ferrarelle = (Ferrarelle) ctx.getBean("ferrarelle");
		CocaCola coca = (CocaCola) ctx.getBean("coca");

//		pizzaService.save(margherita);
//		pizzaService.saveDecoratedPizza(hawaiana);
//		pizzaService.saveDecoratedPizza(boscaiolaMaxi);
//		pizzaService.saveDecoratedPizza(margheritaMaxi);
//		drinkService.save(coca);
//		drinkService.save(ferrarelle);

		System.out.println("------------------------- FindById -----------------------------");
		try {
			System.out.println(pizzaService.findById(UUID.fromString("8b94d684-90ab-4563-81f6-14c1ebcc9807")));

		} catch (ItemNotFoundException e) {
			System.out.println(e);
		}
		System.out.println();
		try {
			System.out.println(drinkService.findById(UUID.fromString("10549d87-b2e1-4d71-b515-d2eed1509f69")));

		} catch (ItemNotFoundException e) {
			System.out.println(e);
		}
		System.out.println();
		System.out.println("------------------------- FindAll -----------------------------");
		pizzaService.findAll().forEach(pizza -> System.out.println(pizza));
		System.out.println();
		drinkService.findAll().forEach(drink -> System.out.println(drink));

		System.out.println();
		System.out.println("------------------------- FindByIdAndDelete -----------------------------");

		try {
			pizzaService.findByIdAndDelete(UUID.fromString("8b94d684-90ab-4563-81f6-14c1ebcc9807"));

		} catch (ItemNotFoundException e) {
			System.out.println(e);
		}
		ctx.close();
	}
}
