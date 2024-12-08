package edu.phystech.easynotesapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class EasyNotesException extends RuntimeException {
    public EasyNotesException(String message) {
        super(message);
    }
}
