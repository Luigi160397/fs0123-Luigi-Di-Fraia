package epicode.u5s3g4.esercizio2;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CompositeRunner implements CommandLineRunner {

	@Override
	public void run(String... args) throws Exception {
		Book book = new Book("Harry Potter", List.of("Autore 1", "Autore 2"), 19.99);

		Section section1 = new Section("Sezione 1");
		section1.addPage(new Page("Pagina 1.1"));
		section1.addPage(new Page("Pagina 1.2"));

		Section section2 = new Section("Sezione 2");
		section2.addPage(new Page("Pagina 2.1"));

		book.addPage(section1);
		book.addPage(new Page("Pagina 1"));
		book.addPage(section2);

		System.out.println();
		System.out.println("------------------------- Composite Runner -------------------------");
		book.print();

		int totalPages = book.getTotalPages();
		System.out.println("Total Pages : " + totalPages);
	}

}
