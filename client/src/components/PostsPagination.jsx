import React, {useEffect} from 'react'
import {Pagination, PaginationItem} from '@material-ui/lab'
import {Link} from 'react-router-dom'
import { PostsContexts } from '../context/PostsContex'

const PostsPagination = ({ page }) => {
  const {postsStates, getPosts} = PostsContexts()
  const {numberOfPages} = postsStates ?. posts

  // useEffect (()=>{
  //   if (page) {
  //     getPosts(page)
  //   }
  // }, [page])
  return (
    <Pagination
      count = {numberOfPages}
      page={Number(page)||1}
      variant="outlined"
      color="primary"
      renderItem={(item)=>(
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
      )}
      />
  )
}

export default PostsPagination