import { PrismaClient } from '../generated/prisma/client.js';
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();


const AdminStatic = async(name,password)=>{
    const hashpassword = await bcrypt.hash(password,10)
    try {
        await prisma.admin.create({
        data:{
            username:name,
            password:hashpassword
        }
    })
        
    } catch (error) {
        console.log("Having error creating static admin")
    }
    
}
// Pass the Name and password you want to give for Admin
AdminStatic("Sam","Sam123")