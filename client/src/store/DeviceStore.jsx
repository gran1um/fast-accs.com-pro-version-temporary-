
import { makeAutoObservable } from 'mobx'



export default class DeviceStore{
    constructor(){
        this._types = [
            {id:1, name: 'Холодильники'},
            {id:2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name:'Smsung'},
            {id: 2, name:'Apple'}
        ]
        this._devices = [
            {id:1, name: 'ipho', price:22222, rating:5, img: `wqwewqewe.png`},
            {id:2, name: 'iph11o', price:22222, rating:5, img: `wqwew12qewe.png`},
            {id:3, name: 'ip23232ho', price:22222, rating:5, img: `wqwe124wqewe.png`},
            {id:4, name: 'i54353pho', price:22222, rating:5, img: `wqw5352ewqewe.png`}
        ]
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }

    get user() {
        return this._user
    }
}