import Base from "./Base";

class Information extends Base {
    constructor() {
        super();
        this.firstName = '#BillingNewAddress_FirstName';
        this.lastName = '#BillingNewAddress_LastName';
        this.email = '#BillingNewAddress_Email';
        this.company = '#BillingNewAddress_Company';
        this.country = '#BillingNewAddress_CountryId';
        this.state = '#BillingNewAddress_StateProvinceId';
        this.city = '#BillingNewAddress_City';
        this.firstAddress = '#BillingNewAddress_Address1';
        this.secondAddress = '#BillingNewAddress_Address2';
        this.zipCode = '#BillingNewAddress_ZipPostalCode';
        this.phone = '#BillingNewAddress_PhoneNumber';
        this.fax = '#BillingNewAddress_FaxNumber';
        this.shippingAddress = '#shipping-address-select';
        this.shippinmethod = '#shippingoption_1';
        this.paymentMethod = '#paymentmethod_3';
        this.POlocator = '#PurchaseOrderNumber';
        this.button1 = '#billing-buttons-container input[title="Continue"]';
        this.button2 = '#shipping-buttons-container input[title="Continue"]';
        this.button3 = '#shipping-method-buttons-container input[type="button"][value="Continue"]';
        this.button4 = '#payment-method-buttons-container input[type="button"][value="Continue"]';
        this.button5 = '#payment-info-buttons-container input[type="button"][value="Continue"]';
        this.button6 = '#confirm-order-buttons-container input[type="button"][value="Confirm"]';


    }
    Billingaddress(dataTable) {
        dataTable.hashes().forEach(row => {
            this.type(row.FirstName, this.firstName);
            this.type(row.LastName, this.lastName);
            this.type(row.Email, this.email);
            this.type(row.Company, this.company);
            this.getElement(this.country).select(row.Country);
            this.getElement(this.state).select(row.State);
            this.type(row.City, this.city);
            this.type(row.Address1, this.firstAddress);
            this.type(row.Address2, this.secondAddress);
            this.type(row.ZipCode, this.zipCode);
            this.type(row.Phone, this.phone);
            this.type(row.Fax, this.fax);
            this.click(this.button1);
            this.getElement(this.shippingAddress).select(0);
            this.click(this.button2);
            this.click(this.shippinmethod);
            this.click(this.button3);
            this.click(this.paymentMethod);
            this.click(this.button4);
            this.type(row.PO, this.POlocator);
            this.click(this.button5);
            this.click(this.button6);
        });
    }

}
export default Information;