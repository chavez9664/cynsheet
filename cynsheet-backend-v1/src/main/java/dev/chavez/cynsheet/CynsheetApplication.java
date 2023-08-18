package dev.chavez.cynsheet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CynsheetApplication {

	public static void main(String[] args) {
		SpringApplication.run(CynsheetApplication.class, args);
	}


}
