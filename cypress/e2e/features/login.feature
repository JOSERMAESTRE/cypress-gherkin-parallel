Feature: login page

    Scenario Outline: navigate to the login page
        Given user open the login page
        When user enter "<username>" and "<password>" and user click on the login button
        Then "<username>" should see the dashboard page

        Examples:
            | username            | password |
            | maestrejr@gmail.com | 123456   |