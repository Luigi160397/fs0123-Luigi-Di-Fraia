package epicode.u5s2g2;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import epicode.u5s2g2.exceptions.ErrorsPayload;
import epicode.u5s2g2.exceptions.NotFoundException;

@RestControllerAdvice
public class ExceptionsHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<ErrorsPayload> handleNotFound(NotFoundException e) {
		ErrorsPayload payload = new ErrorsPayload(e.getMessage(), LocalDateTime.now(), 404);
		return new ResponseEntity<ErrorsPayload>(payload, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorsPayload> handleGenericErrors(Exception e) {
		System.out.println(e);
		ErrorsPayload payload = new ErrorsPayload("GENERIC SERVER ERROR! WE GONNA FIX IT ASAP!", LocalDateTime.now(),
				500);
		return new ResponseEntity<ErrorsPayload>(payload, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
