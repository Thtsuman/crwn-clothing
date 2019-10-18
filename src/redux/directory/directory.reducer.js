const INITIAL_STATE = {
    sections: [
        {
            title: 'HATS',
            imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'JACKETS',
            imageUrl: 'https://images.unsplash.com/photo-1509539662397-116cb90542f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'SNEAKERS',
            imageUrl: 'https://images.unsplash.com/photo-1511318316897-47dc82cd9ebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1179&q=80',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'WOMENS',
            imageUrl: 'https://images.unsplash.com/photo-1499111544217-9590382658d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'MENS',
            imageUrl: 'https://images.unsplash.com/photo-1552085473-429730a886d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
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