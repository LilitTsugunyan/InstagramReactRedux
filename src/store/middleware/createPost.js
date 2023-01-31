export const ignoreEmptyPost = () => (next) => (action) => {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    const regex = new RegExp(expression);
    if ((action.type === 'posts/addPost' || action.type === 'users/addPost')
        && !regex.test(action.payload.img.toString())) {
        return
    }

    else
        next(action)


}