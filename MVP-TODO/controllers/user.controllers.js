class UserController {
    constructor(userService, userView){
        this.userService = userService;
        this.userView = userView;


        this.userView.bindAddUser(this.handleAddUser);

        this.userService.bindUserListChanged(this.onUserListChanged);
        /*this.userView.bindDeleteUser();
        this.userView.bindToggleUser();*/

    }
    handleAddUser = (user) => this.userService.add(user);
    onUserListChanged = users => this.userView.displayUsers(users);
}