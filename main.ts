module MbeApp {
    interface IUser{
        name:string;
        DisplayName():string;
    }
    export class User extends Name implements IUser{
        constructor(public name: string){
            super(name);
        }
        DisplayName():string{
            var displayText = 'My Name is ' + name;
            alert(displayText);
            return displayText;
        }
    }
    class Name {
        constructor(public name: string){            
        }
    }
}
function showMessages() {
    var user = new MbeApp.User("john");
    var count:string;
    count = user.DisplayName();    
}
