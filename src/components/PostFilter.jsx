import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/Input/MyInput'

const PostFilter = ({ filter, setFilter }) => {

    const limitsArray = [5,6,7,8,9,10]
    return (
        <div>
            <MySelect
                title='Sort By'
                value={filter.sortQuery}
                onChange={e => setFilter({ ...filter, sortQuery: e.target.value })}
                options={[
                    { value: 'title', name: 'sort by title' },
                    { value: 'desc', name: 'sort by description' }
                ]}
            />
            <MySelect
                title='Select Limit'
                disabled={true}
                options={limitsArray.map(item => { return { value: item, name: item } })}
                value={filter.limit}
                onChange={e => setFilter({...filter, limit: e.target.value})}
            />
            <MyInput placeholder='Search...' value={filter.searchQuery} onChange={e => setFilter({ ...filter, searchQuery: e.target.value })} />
        </div>
    )
}

export default PostFilter
