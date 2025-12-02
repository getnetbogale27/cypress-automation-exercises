// Cypress E2E test for automating the Business Registration Form
// Each block below documents the logical step being executed.

describe('Business Registration Form Automation', () => {
  const formUrl = 'https://www.jotform.com/build/202565074793463'

  beforeEach(() => {
    // Visit the Business Registration Form before each test run
    cy.visit(formUrl)
  })

  it('fills all required fields and submits the form', () => {
    // Locate and fill the first and last name fields
    cy.get('input[placeholder="First Name"]').clear().type('James')
    cy.get('input[placeholder="Last Name"]').clear().type('Bond')

    // Locate and fill the business name
    cy.get('input[placeholder="Business Name"], input[name*="businessName"], input[id*="business"], input[id*="company"]').first()
      .clear()
      .type('Bond Company')

    // Locate and fill the contact number
    cy.get('input[placeholder="Contact Number"], input[type="tel"]')
      .first()
      .clear()
      .type('(000) 000-0000')

    // Locate and fill the email address
    cy.get('input[type="email"], input[placeholder*="Email"]')
      .first()
      .clear()
      .type('jbond@example.com')

    // Locate and fill the street address
    cy.get('input[placeholder="Street Address"], input[name*="addr_line1"], input[id*="addr_line1"]').first()
      .clear()
      .type('123 London Street')

    // Locate and fill the apartment/suite line
    cy.get('input[placeholder="Street Address Line 2"], input[name*="addr_line2"], input[id*="addr_line2"]').first()
      .clear()
      .type('Apt 2')

    // Locate and fill the city
    cy.get('input[placeholder="City"], input[name*="city"], input[id*="city"]').first()
      .clear()
      .type('London')

    // Locate and fill the state
    cy.get('input[placeholder*="State"], input[name*="state"], input[id*="state"]').first()
      .clear()
      .type('Maryland')

    // Locate and fill the postal/zip code
    cy.get('input[placeholder*="Postal"], input[placeholder*="Zip"], input[name*="postal"], input[id*="postal"], input[name*="zip"], input[id*="zip"]').first()
      .clear()
      .type('20902')

    // Locate and select the type of business dropdown option
    cy.get('select[aria-label*="Type"], select[id*="type"], select[name*="type"], select').first().select('Store')

    // Locate and fill the message textarea
    cy.get('textarea[placeholder*="Message"], textarea[id*="message"], textarea[name*="message"]').first()
      .clear()
      .type('This is a sample text.')

    // Submit the form using the visible submit button
    cy.get('button[type="submit"], button[id*="submit"], button[class*="submit"], input[type="submit"]').first().click()

    // Assert that form submission was attempted by confirming URL change or visible confirmation element
    cy.url().should('include', 'submit')
  })
})
