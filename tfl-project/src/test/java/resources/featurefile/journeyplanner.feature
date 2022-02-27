Feature: Journey Planner Functionality

  Background: User is on the TFL website.
    Given User is on the TFL website homepage

  Scenario Outline: User is able to verify that a valid journey can be planned successfully using a widget.
    When User enters "<From>" from destination
    And User enters "<To>" to destination
    And User clicks on 'Plan my journey' button
    Then User is on Journey results page
    Examples:
      | From                         | To                          |
      | Watford Junction             | Edgware Underground Station |
      | Ealing Broadway              | Southall Broadway           |
      | Carpenders Park Rail Station | Wembley Central             |

  Scenario Outline: Verify that the widget is unable to provide results when an invalid journey is planned.
    When User enters invalid "<From>" from destination
    And User enters invalid "<To>" to destination
    And User clicks on 'Plan my journey' button to find the route
    Then User is getting an "<Error Message>" error message
    Examples:
      | From     | To           | Error Message                                                               |
      | ..//jh   | 784512       | Sorry, we can't find a journey matching your criteria                       |
      | @~{¬78$£ | !£..,,12     | Sorry, we can't find a journey matching your criteria                       |
      | £$%$(,^  | ND12 Redwich | Journey planner could not find any results to your search. please try again |


  Scenario Outline: Verify that the widget is unable to plan a journey if no locations are entered into the widget.
    When User does not put "<From>" from destination
    And User does not enter "<To>" to destination
    And User clicks 'Plan my journey' option
    Then Error message "<error message>" displayed below empty container
    Examples:
      | From             | To                               | error message      |
      |                  | Baker Street Underground Station | field is required. |
      | Liverpool Street |                                  | field is required. |
      |                  |                                  | field is required. |

  Scenario Outline: Verify that a journey can be amended by using the “Edit Journey” button
    When User enters "<From>" from destination
    And User enters "<To>" to destination
    And User clicks on 'Plan my journey' button
    And User is on Journey results page
    And User clicks on 'Edit Journey' label
    And User change "<Updated_To>" to destination
    And User select 'tomorrow' date from dropdown
    And User clicks on 'Update Journey' button
    Then User is on Journey results page
    Examples:
      | From             | To                          | Updated_To      |
      | Watford Junction | Edgware Underground Station | Wembley Central |

  Scenario Outline: Verify that the “Recents” tab on the widget displays a list of recently planned journeys
    When User enters "<From>" from destination
    And User enters "<To>" to destination
    And User clicks on 'Plan my journey' button
    And User go back to Home page
    And User clicks on Recents tab
    Then User can verify widget displays a list of recently planned journeys "<From> to <To>"
    Examples:
      | From            | To          |
      | Ealing Broadway | Edgware     |
      | South Wimbledon | Hammersmith |
      | Carpenders Park | Aldgate     |