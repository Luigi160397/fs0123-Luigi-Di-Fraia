package application;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import application.store.Customer;
import application.store.Order;
import application.store.Product;

public class Application {
	public static Logger logger = LoggerFactory.getLogger(Application.class);

	public static void main(String[] args) {
		Product b1 = new Product("Il signore degli anelli", "Books", 100.30);
		Product b2 = new Product("Harry Potter", "Books", 30.90);
		Product b3 = new Product("Peter Pan", "Books", 15.40);
		Product b4 = new Product("Harry Potter 3", "Books", 115.10);

		List<Product> list = new ArrayList<>();
		list.add(b1);
		list.add(b2);
		list.add(b3);
		list.add(b4);

		// ************* Esercizio 1 ***************

		List<Product> bookListMaggiore100 = list.stream()
				.filter(book -> book.getPrice() > 100 && book.getCategory().toString().equals("Books")).toList();

		if (bookListMaggiore100.size() > 0) {

			System.out.println(
					"--------------------------------------- ESERCIZIO 1: ---------------------------------------");

			System.out.println(bookListMaggiore100);
		} else {
			System.out.println("Non ci sono Books che costano più di 100€");
		}

		// ************* Esercizio 2 ***************
		Product p1 = new Product("Cappellino", "Baby", 16.99);
		Product p2 = new Product("Bavaglino", "Baby", 12.50);
		Product p3 = new Product("Calzini", "Baby", 11.30);
		Product p4 = new Product("Ciuccio", "Baby", 16.99);
		Product p5 = new Product("Tutina", "Baby", 12.50);
		Product p6 = new Product("Bracciale", "Baby", 11.30);

		list.add(p1);
		list.add(p2);
		list.add(p3);
		list.add(p4);
		list.add(p5);
		list.add(p6);

		Customer c1 = new Customer("Pippo", 2);
		Customer c2 = new Customer("Marco", 4);
		Customer c3 = new Customer("Ajeje", 2);

		List<Product> babyListC1 = list.stream()
				.filter(baby -> baby.getCategory().toString().equals("Baby") && baby.getName().equals("Cappellino")
						|| baby.getName().equals("Tutina"))
				.toList();

		List<Product> babyListC2 = list.stream()
				.filter(baby -> baby.getCategory().toString().equals("Baby")
						&& baby.getName().toString().equals("Ciuccio") || baby.getName().toString().equals("Calzini"))
				.toList();

		List<Product> babyListC3 = list.stream()
				.filter(baby -> baby.getPrice() > 12 && baby.getCategory().toString().equals("Baby")).toList();

		LocalDate d1 = LocalDate.of(2021, 2, 1);
		LocalDate d2 = LocalDate.of(2021, 3, 1);

		Order o1 = new Order("Spedito", babyListC1, c1, d1);
		Order o2 = new Order("Ricevuto", babyListC2, c2);
		Order o3 = new Order("In Elaborazione", babyListC3, c3, d2);

		List<Order> orders = new ArrayList<>();
		orders.add(o1);
		orders.add(o2);
		orders.add(o3);

		System.out.println(
				"--------------------------------------- ESERCIZIO 2: ---------------------------------------");
		System.out.println(orders);

		// ************* Esercizio 3 ***************

		Product p7 = new Product("Orologio", "Boys", 199.99);
		Product p8 = new Product("Jeans", "Boys", 30.50);
		Product p9 = new Product("Bracciale", "Boys", 11.30);
		Product p10 = new Product("Boxer", "Boys", 20.60);
		Product p11 = new Product("Calzini", "Boys", 3.50);
		Product p12 = new Product("Collana", "Boys", 70);

		list.add(p7);
		list.add(p8);
		list.add(p9);
		list.add(p10);
		list.add(p11);
		list.add(p12);

		List<Product> boysList = list.stream().filter(boy -> boy.getCategory().toString().equals("Boys")).map(boy -> {
			boy.setPrice(boy.getPrice() - ((Math.round(boy.getPrice() * 10) / 100)));
			return boy;
		}).toList();

		System.out.println(
				"--------------------------------------- ESERCIZIO 3: ---------------------------------------");
		System.out.println(boysList);

		// ************* Esercizio 4 ***************

		List<List<Product>> febAprList = orders.stream()
				.filter(order -> order.getOrderDate().isAfter(LocalDate.of(2021, 1, 31))
						&& order.getOrderDate().isBefore(LocalDate.of(2021, 5, 1))
						&& order.getCustomer().getTier() == 2)
				.map(order -> order.getProducts()).toList();

		System.out.println(
				"--------------------------------------- ESERCIZIO 4: ---------------------------------------");
		System.out.println(febAprList);
	}

}
