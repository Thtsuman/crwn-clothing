const INITIAL_STATE = {
    sections: [
        {
            title: 'HATS',
            imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
            id: 1
        },
        {
            title: 'JACKETS',
            imageUrl: 'https://images.unsplash.com/photo-1509539662397-116cb90542f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 2
        },
        {
            title: 'SNEAKERS',
            imageUrl: 'https://images.unsplash.com/photo-1511318316897-47dc82cd9ebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1179&q=80',
            id: 3
        },
        {
            title: 'WOMENS',
            imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            size: 'large',
            id: 4
        },
        {
            title: 'MENS',
            imageUrl: 'https://images.unsplash.com/photo-1543322748-33df6d3db806?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
            size: 'large',
            id: 5
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.types) {
        default:
            return state;
    }
}

export default directoryReducer;