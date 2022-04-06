import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { LoadPosts } from '../store/actions/PostActions'

const mapStateToProps = ({ postState }) => {
    return { postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadPosts())
    }
}

const Posts = (props) => {

    useEffect(() => {
        props.fetchPosts()
        console.log(props, 'fixing error')
    }, [] )

    return (
        <div>
            <h3>Travel Posts:</h3>
            { props.postState.posts.map((post) => (
                <ul key={post._id}>
                    <Link to={`/posts/${post._id}`}>{post.title}</Link>
                </ul>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)