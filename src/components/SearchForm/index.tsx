import { FeedContainer, SearchFormContainer } from "./styles"
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { IPost, PostContext } from "../../context/PostContext";
import { Post } from "../Post";

interface IComment {
    query: string
}

const commentSchema = Yup.object ({
    query: Yup.string().required()
})

const SearchForm = () => {

    const { postList } = useContext(PostContext)

    const { register, handleSubmit, reset} = useForm({
        resolver: yupResolver(commentSchema)
    })

    const onSubmitHandler = (data:IComment) => {
        //console.log({ data })
        reset()
    }

    return (
        <SearchFormContainer>
            <div>
                <h3>Publicações</h3>
                {postList.length == 1 ? <h3> {postList.length} publicação</h3> : <h3> {postList.length} publicações</h3>}
            </div>

            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input {...register("query")}type="text" placeholder="Buscar Conteúdo"/>
                <button type='submit'>
                    Buscar
                </button>
            </form>

            <FeedContainer>
                {postList.map((post) => {
                    return <Post key={post.id} {...post}/>
                })}
            </FeedContainer>
        </SearchFormContainer>
    )
}

export { SearchForm }