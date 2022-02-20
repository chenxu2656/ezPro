const bcrypt = require('bcrypt')

let run = async ()=>{
    const salt = await bcrypt.genSalt(10); //默认10位
    const result = await bcrypt.hash('123456',salt)
    console.log(`${salt},${result}`);
}
run()