Feature: user login Page

    Scenario Outline: Login with valid credentials
        Given User navigates login Page
        When user fills the input "<username>" and the input "<password>" and summit button login
        Then "<username>" should be displayed in the homepage

        Examples:
            | username         | password |
            | joserm@gmail.com | 123456   |