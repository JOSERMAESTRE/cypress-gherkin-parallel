Feature: shopping product flow

    Scenario: Add product to cart
        Given user is on home page
        When user searchs for a "<product>" and add to the cart
        Then user should go to checkout page
        Then user should fill the checkout form with the following data:
            | product  | FirstName   | LastName   | Email   | Company   | Country   | State   | City   | Address1   | Address2   | ZipCode   | Phone   | Fax   | PO   |
            | <product> | <FirstName> | <LastName> | <Email> | <Company> | <Country> | <State> | <City> | <Address1> | <Address2> | <ZipCode> | <Phone> | <Fax> | <PO> |
        Then user should see the order confirmation page
        Examples:
            | product | FirstName | LastName | Email                  | Company | Country  | State          | City       | Address1 | Address2 | ZipCode | Phone    | Fax  | PO    |
            | laptop  | jose      | maestre  | josermaestre@gmail.com | master  | Colombia | Other (Non US) | valledupar | calle 7c | calle 7b | 20005   | 31945874 | 5426 | 12457 |


