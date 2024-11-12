package edu.phystech.easynotesapp.controller;

import edu.phystech.easynotesapp.entity.EasyNote;
import edu.phystech.easynotesapp.repository.EasyNotesRepository;
import edu.phystech.easynotesapp.service.ValidationErrorService;
import edu.phystech.easynotesapp.service.EasyNotesService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/wallet")
@CrossOrigin
public class EasyNotesController {
    @Autowired
    private EasyNotesRepository easyNotesRepository;
    @Autowired
    private EasyNotesService easyNotesService;
    @Autowired
    private ValidationErrorService validationErrorService;

    @GetMapping
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(easyNotesService.getAll(), HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<?> getById(@PathVariable Long id) {
//        return new ResponseEntity<>(walletService.getById(id), HttpStatus.OK);
//    }

    @GetMapping("/{id}")
    public EasyNote getById(Long id) {
        return easyNotesRepository.getById(id);
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody EasyNote easyNote, BindingResult result) {
        ResponseEntity<?> errors = validationErrorService.validate(result);
        if (errors != null) {
            return errors;
        }
        EasyNote easyNoteSaved = easyNotesService.createOrUpdate(easyNote);
        return new ResponseEntity<>(easyNoteSaved, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody EasyNote easyNote, BindingResult result) {
        ResponseEntity<?> errors = validationErrorService.validate(result);
        if (errors != null) {
            return errors;
        }
        easyNote.setId(id);
        EasyNote easyNoteSaved = easyNotesService.createOrUpdate(easyNote);
        return new ResponseEntity<>(easyNoteSaved, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        easyNotesService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
