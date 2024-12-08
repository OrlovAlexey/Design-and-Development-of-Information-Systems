package edu.phystech.easynotesapp.service;

import edu.phystech.easynotesapp.entity.EasyNote;
import edu.phystech.easynotesapp.exception.EasyNotesException;
import edu.phystech.easynotesapp.repository.EasyNotesRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EasyNotesService {
    @Autowired
    private EasyNotesRepository easyNotesRepository;

    public List<EasyNote> getAll() {
        return easyNotesRepository.findAllByOrderByPriority();
    }

    public EasyNote getById(Long id) {
        Optional<EasyNote> easyNote = easyNotesRepository.findById(id);
        if (easyNote.isPresent()) {
            return easyNote.get();
        }
        throw new EasyNotesException("Wallet with " + id + " does not exist!");
    }

    public EasyNote createOrUpdate(EasyNote easyNote) {
        if (easyNote.getId() == null) {
            easyNotesRepository.save(easyNote);
        } else {
            easyNotesRepository.save(easyNote);
        }
        return easyNote;
    }

    public boolean delete(Long id) {
        Optional<EasyNote> easyNote = easyNotesRepository.findById(id);
        if (easyNote.isPresent()) {
            easyNotesRepository.delete(easyNote.get());
            return true;
        }
        throw new EasyNotesException("Wallet with " + id + " does not exist!");
    }
}
