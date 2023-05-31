package epicode.u5s1g2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@Slf4j

public class U5S1G2Application {

	public static void main(String[] args) {
		SpringApplication.run(U5S1G2Application.class, args);
		log.info("Main!");
	}

}
