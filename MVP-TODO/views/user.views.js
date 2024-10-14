class UserView{
    constructor(){
        this.app = document.querySelector('#root');
        this.form = this.createElement('form');
        this.createInput({
            key: 'inputName',
            type: 'text',
            placeholder: 'Name',
            name: 'name',
        });

        this.createInput({
            key: 'inputAge',
            type: 'text',
            placeholder: 'Age',
            name: 'age',
        });


        this.submitButton = this.createElement('button');
        this.submitButton.textContent('Submit');

        this.userList = this.createElement('ul','user-list');

        this.form.append(this.inputName);
        this.form.append(this.inputAge);
        this.app.append(this.form);

        this.form.append(this.inputName,this.inputAge,this.submitButton);
    }

    get nameText(){
        return this.inputName
    }


    createInput({key,type,placeholder,name}){
        this[key] = this.createElement('input');
        this[key].type = type;
        this[key].placeholder = placeholder;
        this[key].name = name;
    }

    bindAddUser(callback){
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            callback({
                name: this.nameText,
                age: this.ageText,
            });
        });
    }

    displayUsers(users){
        //borrar todo
        while(this.userList.firstChild){
            this.userList.removeChild(this.userList.firstChild)
        }

        if(users.length === 0){
            const p = this.createElement('p');
            p.textContent = 'Nothing to add! Add a user?';
            this.userList.append(p);
        }else{
            //Crear nodes
            for(const user of users){
                const li = this.createElement('li');
                li.id = user.id;

                const checkbox = this.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = user.complete;

                const spanUser = this.createElement('span');
                const spanAge = this.createElement('span');

                spanUser.textContent = user.name;
                spanAge.textContent = user.age;

                li.append(checkbox = this.createElement('button','delete'));
                deleteButton.textContent = ;
                
                this.userList.append(li);

            }
        }
    }


bindDeleteButton(callback){
    this.userList.addEventListener;
    console.log('Esta el ');
}


    createElement(tag, className){
        const element = document.createElement(tag);


        if(className){
            element.classList.add(className);
        }
        return element;
    }
}