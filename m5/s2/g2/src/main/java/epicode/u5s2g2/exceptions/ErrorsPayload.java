package epicode.u5s2g2.exceptions;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ErrorsPayload {
	private String message;
	private LocalDateTime timestamp;
	private int internalCode;
}
