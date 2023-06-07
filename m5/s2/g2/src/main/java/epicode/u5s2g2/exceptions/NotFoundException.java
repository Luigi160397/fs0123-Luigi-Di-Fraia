package epicode.u5s2g2.exceptions;

public class NotFoundException extends RuntimeException {
	public NotFoundException(int id) {
		super("Item with id " + id + " not found!");
	}
}
