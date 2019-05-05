
[image showing two panes of x-spencer app code editor next to it.]


## Introduction
This is an introductionary article on how to create and deploy a simple progressive web app using React. It also serves to describe my usual work flow and some of my reasoning.

Who's the audience?
Knowledge assumptions:
- HTML and CSS
- React
- Git
- Terminal

1. What is a progressive web app?
2. What is GatsbyJS and why use it?
3. What are we building?
   - User stories / functional requirements
4. Designing in HTML and CSS
   - What is Tachyons (and functional CSS)
5. Test-driven development
6. 
7. Deployment

### What is a web app?
### What is Gatsby and why?
- Static site generator in React
- JAM stack
- Data sources (CMS, Markdown, Data)
- Huge ecosystem of plugins
- What problems does it solve?

### What will we build?
We will build a simple expense tracking app where you can add and list all your outgoing expenses.

It has the following requirements: 
- An expense can be created and added to a list.
- Expenses can be listed within a period.
- Expenses can be grouped by day.
- A total amount is displayed for the selected period expenses.

Before we get started we should start thinking about what our application state would look like and what actions or events that can happen in the system that will change this state.

```js
const state = {
  categories: [{

  }],
  expenses: [{
    title: String,
    amount: Number,
    category: String,
    created_at: Number
  }]
}
```

### Designing in HTML / CSS


### Test-driven development
We can then easily convert these functional requirements into end to end tests using Cypress. This allow us to test behaviour in the app in an automatic way, like you might otherwise do manually. These tests can be setup to run in the background when we make changes to our code to enable a test-driven development flow. We can also run these tests in our deploy pipeline to make sure we don't deploy code that break our functionality.

Let's set it up:
```
npm i -D cypress
cypress init
```

Update the `cypress.json` config:
```json
{
  "baseUrl": "http://localhost:8000",
  "viewportWidth": 320,
  "viewportHeight": 480
}

```
```js
// cypress/integration/app.spec.js
describe("App", () => {
  beforeEach(() => cy.visit("/"))
  it("should create expenses", () => {
    cy.get("form [name=title]").type("test-expense")
    cy.get("form [name=amount]").type(100)
    cy.get("form [name=category]").select("HEALTH")
    cy.get("form").submit()
    cy.contains("test-expense")
  })
})
```
```sh
yarn cypress run
```



We can add alot more powerful features such as screenshot the pages. These screenshots can be compared to a previous one and warn us if there are any visual changes.

Now that we have our tests in set up and running, let's make them green!

```
npm run test:integration .
```


### Closing words
Here are a few tools I use to improve my workflow: 
- Prettier (format code in a consistent way).


How does your workflow look like? Did you learn anything? Any suggestions for tools or techniques?


- What is React?
- What is Gatsby?
  - What is a JAM stack?
  - Why use static sites?
- How to get started
- How to deploy
  - What is Netlify?

- What are we building? (expense tracker?)
- Functional requirements
  - handle new expenses
  - edit expenses
  - list expense history grouped by week / month / category
  - display total costs for current history
  - be available online
  - work offline
- Architecture
  - Components (ExpenseForm, ExpenseList, ExpenseFilter)
  - Actions (ADD_EXPENSE, UPDATE_EXPENSE, FILTER_EXPENSES)
  - Models 
    - Expense (amount, category, title, created_at)
    - Category (label)
- e2e tests
  - Why? 
  - How?

### 1. Setup
  - Gatsby
  - Netlify
  - Cypress
  - Tachyons

https://blog.logrocket.com/a-tutorial-on-creating-front-end-tutorials-2b13d8e94df9
https://codeburst.io/write-the-definitive-web-development-tutorial-with-these-tips-64f964ec6d16