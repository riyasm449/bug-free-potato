import Service from '@ember/service';

export default Service.extend({
    items: [{
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        category: 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
        id: 'urban-living',
        title: 'Urban Living',
        owner: 'Mike TV',
        city: 'Seattle',
        category: 'Condo',
        bedrooms: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIG1PFpZhosoec2XCX-yVVF5xtlMhgKtI9Ww&usqp=CAU',
        description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
    }, {
        id: 'downtown-charm',
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        category: 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
    }],

    getItems() {
        return this.items;
    }
});