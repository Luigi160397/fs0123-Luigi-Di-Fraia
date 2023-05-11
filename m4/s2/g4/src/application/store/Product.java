package application.store;

import java.util.Random;

public class Product {

	private Random random = new Random();

	private long id = random.nextLong(0, 10000000);
	private String name;
	private String category;
	private double price;

	public Product(String name, String category, double price) {
		setId(id);
		setName(name);
		setCategory(category);
		setPrice(price);
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "IDproduct: " + getId() + " Name: " + getName() + " Price: " + getPrice() + " Category: " + getCategory()
				+ System.lineSeparator();
	}

}
