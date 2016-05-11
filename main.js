var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MbeApp;
(function (MbeApp) {
    var User = (function (_super) {
        __extends(User, _super);
        function User(name) {
            _super.call(this, name);
            this.name = name;
        }
        User.prototype.DisplayName = function () {
            var displayText = 'My Name is ' + name;
            alert(displayText);
            return displayText;
        };
        return User;
    }(Name));
    MbeApp.User = User;
    var Name = (function () {
        function Name(name) {
            this.name = name;
        }
        return Name;
    }());
})(MbeApp || (MbeApp = {}));
function showMessages() {
    var user = new MbeApp.User("john");
    var count;
    count = user.DisplayName();
}
