const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
    // hide all tab panels
    tabPanels.forEach(panel => (panel.hidden = true));
    // mark all tabs as unselected
    tabButtons.forEach(tab => tab.setAttribute('aria-selected', false));
    // mark the clicked tab as selected
    e.currentTarget.setAttribute('aria-selected', true);
    // find the associated tab panel and show it
    const { id } = e.currentTarget;

    // Method 1
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // console.log(tabPanel);
    // tabPanel.hidden = false;

    // Method 2 - find in the array of tabPanels
    // .find only works on arrays, and tabPanels are a NodeList
    // So we convert it to an array where it is declared

    // Return the panel that matches the id
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
