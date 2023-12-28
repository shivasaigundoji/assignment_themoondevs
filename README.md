# Task Fragmentation

Here are the components that I fragmented

<ol>
  <li>BurnButtonBarWrap</li>
  <li>BurnStatsTopBar</li>
  <li>BurnStatsSupplyBar</li>
  <li>BurnStatsSupplyLabel</li>
  <li>Dashboard</li>
  <li>TransactionTable</li>
</ol>

## Reasons

<ol>
  <li>BurnButtonBarWrap</li> -  BurnButtonBar components that is given in the source file is just wrapping some lines which mainly constitutes a form and a few conditional rendering statements which are all related. Hence can be made into a single component.
  <li>BurnStatsTopBar, BurnStatsSupplyBar</li> - These are two independent sections which constitues the page UI and can be made into seperate components.
  <li>BurnStatsSupplyLabel</li> - It consists of two div elements which are related and were also repeated with some alterations. Though it can be further fragmented into components, I don't want to overdo it since its reusability is limited.
  <li>Dashboard, TransactionsTable</li> - The components DashboardLayoutStyled and TransactionTableStyled given in the source file are just wrapping up other components in their opening and closing tags, and don't actually depend upon any props and is static, hence they can made a seperate components for better readability.

  
</ol>

PS: Please excuse me for not importing respective variables into each of the components.
