import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    rentalService: service(),
    model() {
        return this.rentalService.getItems();
    }
});