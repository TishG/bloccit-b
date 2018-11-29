module.exports = class ApplicationPolicy {

<<<<<<< HEAD
    // #1
=======
>>>>>>> authorization-c
     constructor(user, record) {
       this.user = user;
       this.record = record;
     }
<<<<<<< HEAD
   
    // #2
=======

>>>>>>> authorization-c
     _isOwner() {
       return this.record && (this.record.userId == this.user.id);
     }
   
     _isAdmin() {
       return this.user && this.user.role == "admin";
     }
<<<<<<< HEAD
   
    // #3
=======

>>>>>>> authorization-c
     new() {
       return this.user != null;
     }
   
     create() {
       return this.new();
     }
   
     show() {
       return true;
     }
<<<<<<< HEAD
   
    // #4
=======

>>>>>>> authorization-c
     edit() {
       return this.new() &&
         this.record && (this._isOwner() || this._isAdmin());
     }
   
     update() {
       return this.edit();
     }
<<<<<<< HEAD
   
    // #5
=======

>>>>>>> authorization-c
     destroy() {
       return this.update();
     }
   }