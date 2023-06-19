package epicode.u5s3g4.esercizio1;

import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AdapterRunner implements CommandLineRunner {

	@Override
	public void run(String... args) throws Exception {
		Info info = new Info();
		info.setNome("Luigi");
		info.setCognome("Di Fraia");
		info.setDataDiNascita(LocalDate.of(1997, 3, 16));

		Adapter adapter = new Adapter(info);

		UserData userData = new UserData();
		userData.getData(adapter);
		System.out.println();
		System.out.println("------------------------- Adapter Runner -------------------------");
		System.out.println("Nome Completo: " + userData.getNomeCompleto());
		System.out.println("Età: " + userData.getEta());

	}

}
