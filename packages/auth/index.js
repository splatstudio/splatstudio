const {genPassword, createUser}=require('./password');
console.log("TEST AUTH:");
console.log(createUser("user@splat.app","user"));
console.log(createUser("admin@splat.app","admin"));
