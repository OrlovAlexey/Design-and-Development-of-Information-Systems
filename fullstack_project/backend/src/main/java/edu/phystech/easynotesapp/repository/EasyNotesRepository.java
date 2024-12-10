package edu.phystech.easynotesapp.repository;

import edu.phystech.easynotesapp.entity.EasyNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EasyNotesRepository extends JpaRepository<EasyNote, Long> {
    List<EasyNote> findAllByOrderByPriority();
}
