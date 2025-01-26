import Base from "./Base";

class BuildComputer extends Base{
     constructor(){
        super();
        this.ItemLocator = "div[data-productid='16']"; 
        this.ProcessorLocator = "#product_attribute_16_5_4"; 
        this.RAMLocator = "#product_attribute_16_6_5"; 
        this.HDDLocator = "#product_attribute_16_3_6_19"; 
        this.OSLocator = "#product_attribute_16_4_7_21"; 
        this.SoftwareLocator = "#product_attribute_16_8_8_23"; 
        this.QuantityLocator = "#addtocart_16_EnteredQuantity"; 
        this.AddToCarLocator = "#add-to-cart-button-16"; 
        this.ConfirmationMessageLocator = "//div[@id='bar-notification']//p[@class='content']"; 
    }

    Device(device) {
        cy.viewport(device);
        cy.visit('https://demowebshop.tricentis.com/');
    }

    ClickProduct(){
        this.click(this.ItemLocator);
    }

    BuildComputerMethod(dataTable){
        dataTable.hashes().forEach(row => {
            this.getElement(this.ProcessorLocator).select(row.Processor);
            this.getElement(this.RAMLocator).select(row.RAM);
            this.click(this.HDDLocator);
            this.click(this.OSLocator);
            this.click(this.SoftwareLocator);
            this.getElement(this.QuantityLocator).clear();
            this.type(row.Quantity, this.QuantityLocator);
            this.click(this.AddToCarLocator);
        });
    }

}
export default BuildComputer;