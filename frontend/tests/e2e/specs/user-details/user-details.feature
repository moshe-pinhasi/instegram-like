Feature: User Details Page
  # We have 3 diffrenets modes here:
  # 1. Guest that visit random user details page. He can't follow/unfollor this user
  # 2. Loggedin user that visit His profile page (which is the same user details page)
  #    he should see the same content but instead on followin button he will see edit button.
  # 3. Loggedin user that visit other user details page. He will see the "Follow" button, and 
  #    when he click on this button the text will change to "Unfollow".
  
  @login
  Scenario: Loggedin user visit his User Details Page
    Given I visit my User Details page
    Then I should have the fields display below in the User Details page
      | Fields            |
      | profile-picture   |
      | username          |
      | posts             |
      | following         |
      | followers         |
      | fullname          |
      | edit-btn          |
    
  @login
  Scenario: Loggedin user visit other User Details page
    Given I visit the feed page
    When I click the title of the first post
    Then I should have the fields display below in the User Details page
        | Fields            |
        | profile-picture   |
        | username          |
        | posts             |
        | following         |
        | followers         |
        | fullname          |
        | follow-btn        |
    Then I click on the Follow button
      And I should have see Unfollow button

  Scenario: Guest user visit User Details page
    Given I visit the feed page
    When I click the title of the first post
    Then I should have the fields display below in the User Details page
        | Fields            |
        | profile-picture   |
        | username          |
        | posts             |
        | following         |
        | followers         |
        | fullname          |
    Then I should not have see Follow button