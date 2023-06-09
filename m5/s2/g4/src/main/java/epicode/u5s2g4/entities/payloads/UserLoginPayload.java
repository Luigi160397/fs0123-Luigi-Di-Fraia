package epicode.u5s2g4.entities.payloads;

import lombok.Getter;

@Getter
public class UserLoginPayload {
	String email;
	String password;
}