package epicode.u5s2g5.services;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import epicode.u5s2g5.entities.Dispositivo;
import epicode.u5s2g5.entities.StatoDispositivo;
import epicode.u5s2g5.entities.User;
import epicode.u5s2g5.entities.payloads.ModificaDispositivoPayload;
import epicode.u5s2g5.entities.payloads.NewDispositivoPayload;
import epicode.u5s2g5.exceptions.NotFoundException;
import epicode.u5s2g5.repositories.DispositiviRepository;

@Service
public class DispositiviService {
	@Autowired
	DispositiviRepository dispositiviRepo;

	@Autowired
	UsersService usersService;

	public Page<Dispositivo> find(int page, int size, String sortBy) {
		if (size < 0)
			size = 10;
		if (size > 100)
			size = 100;
		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return dispositiviRepo.findAll(pageable);
	}

	public Dispositivo create(NewDispositivoPayload d) {

		Dispositivo newDisp = new Dispositivo(d.getTipoDispositivo());
		return dispositiviRepo.save(newDisp);
	}

	public Dispositivo findById(UUID id) throws NotFoundException {
		return dispositiviRepo.findById(id).orElseThrow(() -> new NotFoundException("Utente non trovato!"));
	}

	public void findByIdAndDelete(UUID id) throws NotFoundException {
		Dispositivo found = this.findById(id);
		dispositiviRepo.delete(found);
	}

	public Dispositivo findByIdAndUpdate(UUID id, ModificaDispositivoPayload d) throws NotFoundException {
		Dispositivo found = this.findById(id);
		User foundUser = usersService.findById(d.getIdUtente());

		found.setId(id);
		found.setTipo(d.getTipoDispositivo());
		found.setStatoDispositivo(StatoDispositivo.ASSEGNATO);
		found.setUser(foundUser);

		return dispositiviRepo.save(found);
	}
}
