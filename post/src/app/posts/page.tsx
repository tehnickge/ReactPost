import CardContainer from "@/components/Cards/CardContainer";
import ScrollTrigger from "./ScrollTrigger";
import styles from "./page.module.scss"

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
    name: string | undefined
}

export type User = {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
  }

  export type Address = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
  }
  
  export type Geo = {
    lat: string
    lng: string
  }
  
  export type Company = {
    name: string
    catchPhrase: string
    bs: string
  }

const getPosts = async (limit : number) => {
    const getPosts = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-cache" ,
    })
    const users : User[] = await getUsers();
    let posts : Post[] = await (getPosts.json());
    posts = posts.map((post : Post) => {
        return {
            ...post,
            name: users.find((user : User) => user.id === post.userId)?.name
        } 
    })
    
    return posts.splice(0, limit);
}

const getUsers = async () => {
    const getUsers = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-cache",
    })
    const users : User[] = await (getUsers.json());
    return users;
}

const PostsPage = async ({ searchParams } : {
    searchParams: { [key: string]: string | string[] | undefined } 
}) => {
    const limit = 
        typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10
    const posts = await getPosts(limit);
    

    return (
        <div className={styles["posts"]}>
            <CardContainer posts={posts} />
            <ScrollTrigger limit={limit}/>
        </div>
    );
}

export default PostsPage;