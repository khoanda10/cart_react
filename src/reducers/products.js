var initialState = [
    {
        id: 1,
        name: 'Iphone',
        image: '//images.fpt.shop/unsafe/fit-in/400x400/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Mediums/2022/9/12/637985700630020572_ip-14-pro-max-tim.png',
        description: 'Do Apple san xuat',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'SamSung',
        image: 'https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/691/10046547-dien-thoai-xiaomi-redmi-9a-2gb-32gb-xanh-duong-1.webp',
        description: 'Do SamSung san xuat',
        price: 400,
        inventory: 15,
        rating: 3
    }, 
    {
        id: 3,
        name: 'XIaomi',
        image: 'https://miviet.com/wp-content/uploads/2020/11/xiaomiviet.vn-dien-thoai-xiaomi-redmi-note-9-dien-thoai-xiaomi-redmi-note-9-1.webp',
        description: 'Do XIaomi san xuat',
        price: 300,
        inventory: 5,
        rating: 5
    }

];

const products = (state = initialState, action) => {
    switch(action.type){

        default: return [...state];
    }
}

export default products; 