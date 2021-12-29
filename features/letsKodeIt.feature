Feature: The Landing Page of LetsKodeIt Practice page

    Scenario: Validating Practice Page of LetsKodeIT Practice Page
        Given Landing page of LetsKodeIT Page
        Then Validating the Header in Landing Page "Practice Page"

    Scenario: Validating the Example of Radio CheckBox and Options in LetsKodeIt Practice Page
        Then Validating the "Radio Button Example" menu header
        When Click on the BMW radio button
        Then validate the clicking radio button text "BMW"

    Scenario: Validating the Select class Example in LetsKodeIt Practice Page
        Then validating the "Select Class Example" menu header
        When click on select box and selecting the text

    Scenario: Validating the Multiple class Example in LetsKodeIt Practice Page
        Then Validating the menu header "Multiple Select Example"
        When selecting the multiple option class

    Scenario: Validating CheckBox Example in LetsKodeIt Practice Page
        Then Validating menu header "Checkbox Example"
        When clicking on the checkBox
        Then Validating the text of checkBox field "Benz"

    Scenario: Validating Windows and Tabs examples Page in LetsKodeIt Practice Page
        Then validate the Header "Switch Window Example"
        When Click on Open Window button

    Scenario: Validating Switch Tab Example in LetsKodeIt Practice Page
        Then validate the menu header as "Switch Tab Example"
        When I click on the open tab button

    Scenario: Validating the Alert Example in LetsKodeIt Practice Page
        Then validate the header of the example "Switch To Alert Example"
        When I enter the name in name field
        When I click on Alert Button
        When I click on Confirm button

    Scenario: Validating the web Table Example in LetsKodeIt Practice Page
        Then Validate the header text "Web Table Example"
        Then I should validate the course "Selenium WebDriver With Java"

    Scenario: Validating Disable Enable Element Example in LetsKodeIt Practice Page
        Then Validate the example Header as "Enabled/Disabled Example"
        When I Click on Disable button and check text is clickable or not
        When I click On the enable button and enter the data

    Scenario: Validating Show Hide Element Example in LetsKodeIt Practice Page
        Then Vliadating menu header text as "Element Displayed Example"
        When I click on the hide button
        When I click on show button and enter the data

    Scenario: Validating the Mouse Hover Example in LetsKodeIt Practice Page
        Then I validate the "Mouse Hover Example" menu header
        When I hover the mouse and selcting the option

    Scenario: Validating the IFrames Example in LetsKodeIt Practice Page
        Then validate The Header text of the "iFrame Example"

    Scenario: signIn the User in LetsKodeIt Practice Page
        When I click on SignIn button
        Then I should Validate the text "Login"
        When I click signUp Button

    Scenario: SignUp the New User in LetsKodeIt Practice Page
        Then I should validate the Header Text as "Sign Up"
        When I fill the data in all fields
        When I click on the signUp Button to register

    Scenario: Validating the My Courses Page in LetsKodeIt Practice Page
        Then I should see the Text as "My Courses"
        Then I can Validate message "You have not enrolled to any courses."