import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { LoadComments } from '../store/actions/PostActions'
import { useParams } from 'react-router-dom'

const mapStateToProps = ({ commentState }) => {
    return { commentState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: () => dispatch(LoadComments())
    }
}

const Comments = (props) => {
    let { id } = useParams()

    useEffect(() => {
        props.fetchComments(id)
    }, [])

    return (
        <div>
            <h3>Travel Posts:</h3>
            { props.commentState.comments.map((comment) => (
                <ul key={comment._id}>
                    <h1>{comment.name}</h1>
                    <p>{comment.comment}</p>
                    <h5>{comment.rating} out of 10 </h5>
                </ul>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)