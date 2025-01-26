Feature: Responsive burger menu navigation

    Scenario Outline: iPhone XR menu burger navigation
        Given user is on home page as "<device>"
        When user clicks on the burger menu
        And user clicks on "<menu>"
        And user clicks on "<submenu>" submenu
        Then user should see the "<submenu>" page
        Examples:
            | device    | menu      | submenu  |
            | iphone-xr | COMPUTERS | Desktops |