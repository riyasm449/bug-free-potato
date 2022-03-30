import Component from '@ember/component';
import layout from '../templates/components/filter';

export default Component.extend({
    layout,
    classNames: ['list-filter'],
    value: '',

    init() {
        this._super(...arguments);
        this.set('results', this.list);
    },

    actions: {
        handleFilterEntry() {
            let filterInputValue = this.value;
            if (filterInputValue === ' ' && filterInputValue === undefined) this.set('results', arguments);
            else {
                let filteredList = [];
                this.list.forEach(element => {
                    if (element.city.toLowerCase().indexOf(filterInputValue.toLowerCase()) != -1) {
                        filteredList.push(element);
                    }
                });
                this.set('results', filteredList);
            }
        }
    }
});