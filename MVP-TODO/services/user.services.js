class UserService {
    
    #users = [];
    
    add(user /*:User */){
        this.#users = [...this.#users, user];
        try{
            this.onUserListChanged(this.#users);
        }catch {
            console.log('ERROR: falta inicializar onUserListChanged');
        }

    }

    edit(){}

    delete(id){
        this.#users = this.#users.filter( user => user.id != id);
    }

    toggle(){}


    bindUserListChanged(callback){
        this.onUserListChanged = callback;
    }


}