Feature: App-Header Component
  # Geust users can see the feed page with the post but
  # he can't upload/like posts, follow other users and send/recieve messages.
  # Only loggedin users can upload/ like posts, follow and send/recieve messages
  # At the header we can see some of the actions we hidding/showing depending
  # on the user status. 

  Scenario: User is not Loggedin so he will not see some actions
    Given I visit the Feed page
    Then The action "app-header-add" should not be visible
      And The action "app-header-likes" should not be visible
      And The action "app-header-messages" should not be visible

  @login
  Scenario: User is Loggedin so he can see all actions
    Given I visit the Feed page
    Then The action "app-header-add" should be visible
      And The action "app-header-likes" should be visible
      And The action "app-header-messages" should be visible