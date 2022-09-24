var initialState = [
    {
        id: 1,
        name: 'Iphone',
        image: '',
        description: 'Do Apple san xuat',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'SamSung',
        image: '',
        description: 'Do SamSung san xuat',
        price: 400,
        inventory: 15
    }, 
    {
        id: 3,
        name: 'XIaomi',
        image: '',
        description: 'Do XIaomi san xuat',
        price: 300,
        inventory: 5
    }

];

const products = (state = initialState, action) => {
    switch(action.type){

        default: return [...state];
    }
}

export default products; 