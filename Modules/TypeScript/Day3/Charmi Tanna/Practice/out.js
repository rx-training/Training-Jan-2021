var UsersUtils;
(function (UsersUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "Reena Roy";
        };
        return Users;
    }());
    UsersUtils.Users = Users;
})(UsersUtils || (UsersUtils = {}));
var u1 = new UsersUtils.Users();
console.log(u1.getName());
