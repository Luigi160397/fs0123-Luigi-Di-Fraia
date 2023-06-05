package epicode.u5s1g4.exceptions;

import java.util.UUID;

public class ItemNotFoundException extends RuntimeException {

	public ItemNotFoundException() {
		super("Item not found");
	}

	public ItemNotFoundException(UUID id) {
		super("Item with id " + id + " not found");
	}
}