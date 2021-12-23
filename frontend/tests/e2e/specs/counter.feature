Feature: The counter example
  This is a simple example for testing without ui

  Background:
    Given counter has been reset

   Scenario: Basic example #1
     When counter is incremented
     Then counter equals 1
  