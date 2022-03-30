import Component from '@ember/component';
import layout from '../templates/components/rental-listing';

export default Component.extend({
    layout,
    isWide: false,
    actions: {
        toggleImageSize() {
            this.toggleProperty('isWide');
        }
    }
});