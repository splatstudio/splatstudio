function genPassword(len=16){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%";
  return Array.from({length:len},()=>chars[Math.floor(Math.random()*chars.length)]).join("");
}
function createUser(email, role="user"){
  return {
    id: Math.random().toString(36).slice(2,9),
    email,
    role,
    password: genPassword(16),
    createdAt: new Date().toISOString()
  }
}
module.exports={genPassword, createUser};
