import Base from './Base';
class AddtoCar extends Base {
    constructor() {
        super();
        this.searchInput = '#small-searchterms';
        this.searchButton = 'input[value="Search"]';
        this.product = 'div[class="item-box"]';
        this.addToCartButton = 'input[value="Add to cart"]';
    }

    AddtoCarMethod(item) {
        this.type(item, this.searchInput);
        this.click(this.searchButton);
        if (this.isDisplayed(this.product)) {
            this.click(this.addToCartButton);
        } else {
            console.log(item + " not found");
        }
    }
}


export default AddtoCar;