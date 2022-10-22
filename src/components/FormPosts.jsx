import React,{useState} from 'react'
import MyInput from './UI/Input/MyInput';
import MyButton from './UI/button/MyButton';

const FormPosts = ({createNewPost}) => {

    
    const [formInputs, setFormInputs] = useState({
        title: '',
        desc: ''
    })

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
          id: Date.now(),
          ...formInputs
        }
        createNewPost(newPost)
        setFormInputs({
            title: '',
            desc: ''
        })
    
      }
    return (
        <form>
            <MyInput type="text" placeholder="Enter Title" value={formInputs.title} onChange={e => setFormInputs({...formInputs,title: e.target.value})} />
            <MyInput type="text" placeholder="Enter Description" value={formInputs.desc} onChange={e => setFormInputs({...formInputs,desc: e.target.value})} />
            <MyButton onClick={addPost}>Add</MyButton>
        </form>
    )
}
export default FormPosts
