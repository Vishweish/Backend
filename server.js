const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});

 //Fetch all products
 app.get("/products", async (req, res) => {
     try {
         const products = await prisma.product.findMany();
         res.json(products);
     } catch (error) {
         console.error(error);
         res.status(500).json({ error: "Internal server error" });
     }
 });

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await prisma.product.findUnique({ where: { id: Number(id) } });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({message:"Product retrieved",product});
    } catch (error) {
        res.status(500).json({ message: "Error retrieving product" });
    }
});

app.put("/products",async(req,res)=>{
    const data = req.body;
    
    const UserData = await prisma.product.update({
        where:{
           id : data.id 
        },
        data:{
            ...data
        }
    })
    res.json({message:"Updated successfully",UserData})
});

app.post("/products",async(req,res)=>{
    const data =req.body;
    
    const UserData = await prisma.product.create({
        data:{
            id :data.id,           
            name :data.name,     
            price:data.price,     
            description :data.description,
            image :data.image,    
            images :data.images,    
            videos  :data.videos 
        }
        
    })
    res.json({message:"Created successfully",UserData})
});




// Other routes...

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
