Feature: Login flow
  
  @signup
  Scenario: User should Login successfully
    # it should loggedin successfully
    # and show me the feed as loggedin user
    Given I visit "/auth/login"
    When I enter "tester-choice" in the "Username" field
      And I enter "12345" in the "Password" field
      And I press the "submit" button
    Then I should move to feed page as a loggedin

  @signup
  Scenario: User should not able to login
    # it should field to login due to
    # missing password param
    Given I visit "/auth/login"
    When I enter "tester-choice" in the "Username" field
      And I press the "submit" button
    Then The field "Password" should have an error
      And I should stay at the login page
  
  @signup
  Scenario: User should not able to login
    # it should field to login due to
    # missing username param
    Given I visit "/auth/login"
    When I enter "tester-choice" in the "Password" field
      And I press the "submit" button
    Then The field "Username" should have an error
      And I should stay at the login page

  Scenario: User should not able to login
    # it should field to login due to
    # not exist in the system
    Given I visit "/auth/login"
    When I enter "tester-choice" in the "Username" field
      And I enter "12345" in the "Password" field
      And I press the "submit" button
    Then I should stay at the login page
      And I have a general error message "Sorry, your email or password were incorrect"