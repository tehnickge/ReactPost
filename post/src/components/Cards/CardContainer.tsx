import { Post } from "@/app/posts/page";
import Card from "./Card";
import styles from "./CardContainer.module.scss"


const CardContainer = ({posts} : {posts: Post[]}) => {

    return (
        <div className={styles['card-container']}>
            {posts.map((post : Post)=>{
                return (<Card key={post.id} cardData={post}></Card>)
            })}
        </div>
    );
}

export default CardContainer;