import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import FormPosts from "./components/FormPosts";
import './styles/app.css'
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { useFilter } from "./hooks/useFilters";
import PostService from "./API/PostsService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from './hooks/useFetching';
import { getPageCounts } from "./utils/pajes";
import Pagination from "./components/UI/pagination/Pagination";

function App() {

  const [posts, setPosts] = useState([])
  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState({ sortQuery: '', searchQuery: '', limit: 10 })
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const sortedAndFilteredPosts = useFilter(posts, filter.sortQuery, filter.searchQuery)

  const [getPosts, isPostLoading, isPostError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCounts(totalCount, filter.limit))

  })



  useEffect(() => {
    getPosts(filter.limit, page);
     // eslint-disable-next-line
  }, [filter.limit])

  const createNewPost = (post) => {
    setPosts([...posts, post])
    setVisible(false)
  }
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const changePage = (page) => {
    setPage(page)
    getPosts(filter.limit, page);

  }


  return (
    <div className="App">
      <MyButton onClick={() => setVisible(true)}>Create Post</MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <FormPosts createNewPost={createNewPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} totalPages={totalPages} />
      {isPostError && <h1>ERROR {isPostError}</h1>}
      {isPostLoading ? <Loader /> : <PostList deletePost={deletePost} posts={sortedAndFilteredPosts} />}
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
      

    </div>
  );
}

export default App;
