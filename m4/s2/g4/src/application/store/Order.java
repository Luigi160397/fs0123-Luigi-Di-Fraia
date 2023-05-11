package application.store;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

public class Order {
	private Random random = new Random();

	private long id = random.nextLong(0, 10000000); //
	private String status; //

//	private DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy hh:mm:ss");
	private int r = random.nextInt(0, 10);
	private LocalDate orderDate = LocalDate.now().plusDays(r);
	private LocalDate deliveryDate = orderDate.plusDays(1);
	private List<Product> products;
	private Customer customer;

	public Order(String status, List<Product> products, Customer customer) {
		setId(id);
		setStatus(status);
		setOrderDate(orderDate);
		setDeliveryDate(deliveryDate);
		setProducts(products);
		setCustomer(customer);
	}

	public Order(String status, List<Product> products, Customer customer, LocalDate orderDate) {
		setId(id);
		setStatus(status);
		setOrderDate(orderDate);
		setDeliveryDate(deliveryDate);
		setProducts(products);
		setCustomer(customer);
	}

	public Random getRandom() {
		return random;
	}

	public void setRandom(Random random) {
		this.random = random;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public LocalDate getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(LocalDate deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "IDorder: " + getId() + " Status: " + getStatus() + " Order Date: " + getOrderDate() + " Delivery Date: "
				+ getDeliveryDate() + " Products: " + getProducts() + " Customer: " + getCustomer()
				+ System.lineSeparator();
	}
}
