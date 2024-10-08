import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { createBlog, updateBlog } from '@maulikdang/medium-common'


export const blogRouter = new Hono <{
    Bindings : {
      DATABASE_URL : string
      JWT_SECRET :  string
    },
    Variables: {
        userId : any
    }
  }>
    
    blogRouter.use("/*",async (c,next)=>{
        const authHeader = c.req.header('authorization') || "";

        try{

        const user = await verify(authHeader, c.env.JWT_SECRET);
        if(user){
            c.set("userId", user.id);
            await next();
        }
        }
        
        catch(e){
            c.status(403);
            return c.json({
                msg : "You are not logged in"
            })

        }


        
    })


    blogRouter.post('/', async(c) => {

        const body = await c.req.json();
        const { success } = createBlog.safeParse(body)

        console.log(success)

        if(!success){
            c.status(411);

            return c.json({
                msg : "invalid input"
            })

        }
        
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const authorId = c.get("userId");

        const post = await prisma.posts.create({
            data : {
                title : body.title,
                content : body.content,
                authorId : authorId,
            }

        })

        return c.json({
            id : post.id
        })
    })

    blogRouter.put('/', async (c) => {

        const body = await c.req.json();
        const { success } = updateBlog.safeParse(body)

        console.log(success)

        if(!success){
            c.status(411);

            return c.json({
                msg : "invalid input"
            })

        }
        
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())


        const post = await prisma.posts.update({
            where: {
                id : body.id
            },
            data : {
                title : body.title,
                content :  body.content
            }
        })

        return c.json({
            msg : "post updated",
            id :  post.id
        })
        
    })

    blogRouter.get('/bulk', async (c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
    
        const posts = await prisma.posts.findMany({
            select :{
                title : true,
                content : true ,
                published : true ,
                id :true,
                author :{
                    select : {
                        name : true,
                    }
                }
            }
        })
        return c.json({
            posts : posts
        })
    })

    blogRouter.get('/',async (c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const id = c.req.header('id') || ""

        try {

            const post = await prisma.posts.findUnique({
                where : {
                    id : id
                },
                select : {
                    title : true,
                    content : true ,
                    authorId : true,
                    author : {
                        select : {
                            name : true
                        }
                    }
                }
            })

           

            return c.json ({
                post : post
            })

        }
        

        catch(e){
            c.status(411);
            
            return c.json({
                message : "error while fetching post",
                error : e
            })
        }

    })

    blogRouter.delete('/delete',async (c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const id = c.req.header('id') || ""

        try {

            const post = await prisma.posts.delete({
                where : {
                    id : id
                }
            })

            return c.json ({
                msg : "successfully deleted"
            })

        }
        

        catch(e){
            c.status(411);
            
            return c.json({
                message : "error while fetching post",
                error : e
            })
        }

    })

    

    

   
    
