export interface ITourSteps {
    element: string;
    intro: string;
    title: string;
}

export const TourSteps: ITourSteps[] = [
    {
        element: ".market-tour",
        intro: "The Marketing Report provides insights into market trends, customer behavior, and campaign performance. Click on this banner to view report",
        title: "Marketing Report"
    },
    {
        element: ".research-tour",
        intro: "The Research Report offers comprehensive data and findings from various studies. Click on this banner to view report",
        title: "Research Report"
    },
    {
        element: ".sales-tour",
        intro: "The Sales Report highlights revenue figures, growth metrics, and product performance. Click on this banner to view report.",
        title: "Sales Report"
    },
    {
        element: ".analytics-tour",
        intro: "The Analytics Report showcases key performance indicators, trends, and forecasts.  Click on this banner to view report",
        title: "Analytics Report"
    },
    {
        element: '#themepalette',
        intro: 'Select an appropriate color scheme for your requirements',
        title: "Themes Plalette"
    },
    {
        element: '.power-bi-report',
        intro: 'Click on the Power BI Report to view the data in a more interactive way.',
        title: "Power BI Report"
    },
    {
        element: '.tutorial-intro',
        intro: 'Select to view the tutorial at any time ',
        title: "Tutorial"
    }
]