console.log('Hello Word')
debug = true;

let UserService;
let UserController;
let userView;

userView = new UserView();
userService = new UserService();
userController = new UserController();



if(debug){
const sergio = new User({name: 'Sergio', age: 20, complete: false});
const pablo = new User({name: 'Pablete', age: 19, complete: false});
userService = new UserService();
userService.add(sergio);
userService.add(pablo);
userService.delete(pablo);
userView = new userView();



}