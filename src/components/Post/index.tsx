import { useContext } from "react"
import { PostContext } from "../../context/PostContext"
import { IPost } from "../../context/PostContext"
import { PostContainer } from "./styles"

const Post = ({id, title, abstract}:IPost) => {
    return (
        <PostContainer>
            <h1>{title}</h1>
            <h3>{abstract}</h3>
        </PostContainer>
    )
}

export { Post }