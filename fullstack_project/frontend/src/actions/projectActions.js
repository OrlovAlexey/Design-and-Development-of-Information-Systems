import axios from 'axios'
import {GET_ERRORS, GET_NOTES, DELETE_NOTE, GET_NOTE} from './types'

const HTTP_ADDRESS = 'http://localhost:8080/easynote'

export const createNote = (newNote, history) => async dispath => {
    await axios.post(HTTP_ADDRESS, newNote)
        .then((res) => {
            history.push('/dashboard')
        }).catch((err) => {
            dispath({type:GET_ERRORS, payload:err.response.data})
        })
}
export const updateNote = (id,updatedNote, history) => async dispath => {
    await axios.put(HTTP_ADDRESS + `/${id}`, updatedNote)
        .then((res) => {
            history.push('/dashboard')
        }).catch((err) => {
            dispath({type:GET_ERRORS, payload:err.response.data})
        })
}

export const getNotes = () => async dispath => {
    await axios.get(HTTP_ADDRESS)
        .then((res) => {
            dispath({type:GET_NOTES, payload:res.data})
        })
}

export const getNote = (id) => async dispath => {
    await axios.get(HTTP_ADDRESS + `/${id}`)
        .then((res) => {
            dispath({type:GET_NOTE, payload:res.data})
        })
}

export const deleteNote = (id) => async dispath => {
    await axios.delete(HTTP_ADDRESS + `/${id}`)
        .then((res) => {
            dispath({type:DELETE_NOTE, payload:id})
        })
}
