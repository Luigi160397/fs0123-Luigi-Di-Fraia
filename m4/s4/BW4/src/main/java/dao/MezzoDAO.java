package dao;

import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;

import app.Colors;
import entities.Mezzo;
import entities.StatoMezzo;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MezzoDAO {
	private final EntityManager em;

	public MezzoDAO(EntityManager em) {
		this.em = em;
	}

	public void save(Mezzo e) {
		EntityTransaction transaction = em.getTransaction();
		transaction.begin();
		em.persist(e);
		transaction.commit();
		log.info("Mezzo salvato!");
	}

	public Mezzo getById(UUID id) {

		Mezzo found = em.find(Mezzo.class, id);
		return found;
	}

	public void delete(UUID id) {
		Mezzo found = em.find(Mezzo.class, id);
		if (found != null) {
			EntityTransaction transaction = em.getTransaction();
			transaction.begin();
			em.remove(found);
			transaction.commit();
			log.info("Mezzo con id " + id + " eliminato!");
		} else {
			log.info("Mezzo con id " + id + " non trovato!");
		}
	}

	public void update(Mezzo p) {
		EntityTransaction transaction = em.getTransaction();
		transaction.begin();
		em.merge(p);
		transaction.commit();
		log.info(Colors.ANSI_PURPLE + "Mezzo con id " + p.getId() + " aggiornato!");
	}

	public StatoMezzo getStatoMezzoById(String id) {
		TypedQuery<StatoMezzo> query = em.createNamedQuery("getStatoMezzo", StatoMezzo.class);
		query.setParameter("id", UUID.fromString(id));
		return query.getSingleResult();
	}

	public int getBigliettiVidimatiMezzoById(String id) {
		TypedQuery<Integer> query = em.createNamedQuery("getBigliettiVidimatiMezzo", Integer.class);
		query.setParameter("id", UUID.fromString(id));
		return query.getSingleResult();
	}

	public int getNumeroVolteTappaPercorsa(String id) {
		TypedQuery<Integer> query = em.createNamedQuery("getNumeroPassaggiTappa", Integer.class);
		query.setParameter("id", UUID.fromString(id));
		return query.getSingleResult();
	}

	public Mezzo getMezzoByIdTratta(String idTratta) {
		TypedQuery<Mezzo> query = em.createNamedQuery("getMezzoByTrattaId", Mezzo.class);
		query.setParameter("idTratta", UUID.fromString(idTratta));
		return query.getSingleResult();
	}

	public List<Mezzo> getMezziInServizio() {
		TypedQuery<Mezzo> query = em.createNamedQuery("getMezziInServizio", Mezzo.class);
		query.setParameter("stato", StatoMezzo.IN_SERVIZIO);
		return query.getResultList();
	}

	public List<Mezzo> getMezziInManutenzione() {
		TypedQuery<Mezzo> query = em.createNamedQuery("getMezziInServizio", Mezzo.class);
		query.setParameter("stato", StatoMezzo.IN_MANUTENZIONE);
		return query.getResultList();
	}
}
