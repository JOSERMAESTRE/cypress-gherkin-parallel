Feature: User Registration

    Scenario Outline: User successfully registers with valid details
        Given The user navigates to the registration page
        When user fills the registration form with the following data:
            | gender   | firstName   | lastName   | email   | password   | confirmPassword   |
            | <gender> | <firstName> | <lastName> | <email> | <password> | <confirmPassword> |
       
        Then Page shows a success message
        Examples:
            | gender | firstName | lastName | email            | password | confirmPassword |
             | Male    | lito      | gomez      | litogomez@example.com  | 123456    | 123456          |

