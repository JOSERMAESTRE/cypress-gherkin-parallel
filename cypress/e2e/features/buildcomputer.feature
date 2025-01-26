Feature: Responsive build computer

    Scenario Outline: add a customized computer to the cart
        Given user is on home page with a "<device>"
        When user clicks on the item Build your own computer
        Then user builds the computer with the following details:
            | Processor   | RAM   | HDD   | OS   | Software   | Quantity   |
            | <Processor> | <RAM> | <HDD> | <OS> | <Software> | <Quantity> |
        Then the page displays a confirmation message
        Examples:
                | device    |  Processor                             | RAM   | HDD    | OS         | Software         | Quantity   |
                | iphone-xr |  2.2 GHz Intel Pentium Dual-Core E2200 | 2 GB  | 400 GB | Windows 10 | Microsoft Office | 3          |
