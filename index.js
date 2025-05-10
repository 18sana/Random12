const express=require("express");
const app=express();
const PORT=process.env.PORT || 3000;
app.use(express.json());
app.post("/processData",(req,res)=>{
    const data=req.body.data;

    if(!Array.isArray(data)){
        return res.status(400).json({is_sucess: false,message:"Invalid input format, expected an array"})
    }
    const even_number=[];
    const odd_number=[];
    const alphabets=[];

    data.forEach(item=>{
        if(!isNaN(item)){
            const num =parseInt(item);
            if(num%2 ==0){
                even_number.push(item);
            }else{
                odd_number.push(item);
            }
        }
        else if(/^[a-zA-Z]$/.test(item)){
            alphabets.push(item.toUpperCase());
        }
    });
    const response={
        is_sucess:true,
        user_id:"Sana Asiwal",
        email :"sanaasiwal18@gmail.com",
        roll_number:"0827CS221241", 
        odd_number,
        even_number,
        alphabets,
    };
    res.json(response);
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})