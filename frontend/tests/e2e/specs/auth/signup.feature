Feature: Signup flow

  Scenario: User should signup successfully
    # it should create new user
    # and show me the feed as loggedin user
    Given I visit "/auth/signup"
    When I enter the singup credentials
      | Email           | Full Name  | Username        | Password |
      | tester@mail.com | Mr. Tester | tester-choice   | 12345    |
      And I press the "submit" button
    Then I should move to feed page as a loggedin  


  # Scenario: User should signup successfully
  #   # it should create new user
  #   # and show me the feed as loggedin user
  #   Given I visit "/auth/signup"
  #   When I enter "tester@mail.com" in the "Email" field
  #     And I enter "Mr. Tester" in the "Full Name" field
  #     And I enter "tester-choice" in the "Username" field
  #     And I enter "12345" in the "Password" field
  #     And I press the "submit" button
  #   Then I should move to feed page as a loggedin

