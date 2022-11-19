import axios from "axios";
import {response} from "express";

const instance = axios.create({
    baseURL: "http://localhost:5000/"
})

export const DefaultApi = {
    getLists() {
        return instance.get(`api/list/all`)
    },
    postList(text: string) {
        return instance.post(`api/list`, {text: text}).then(response => response.data)
    },
    deleteList(id: number) {
        return instance.delete('api/list', {data: {id: id}})
    },
    deleteAllLists() {
        return instance.delete('api/list/all')
    }
}