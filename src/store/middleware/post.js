export const ignoreEmptyComment = () => (next) => (action) => {
    if ((action.type === 'posts/addNewComment' && action.payload.comment.text.replaceAll(' ','')) || action.type !== 'posts/addNewComment')
        next(action)
}