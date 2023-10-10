Feature: simple dropdown

    Feature Description:Select the single option from simple select dropdown
    @demo
    Scenario: Select the single option from dropdown
    Given Single select dropdown in the specified URL
    When I select the single option from dropdown
    Then the chosen option should be selected

    @demo
    Scenario:Deselect the chosen option by selecting some other option from dropdown
    Given single select dropdown with chosen option
    When I select the some other option from dropdown
    Then  the chosen option should be selected after the deselection of selected option in 1st scenario