# Packages and Components Used in the Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Packages

1. Used useState, which is a React Hook that allow us to add state to functional components.
2. Used axios package, which is used for making HTTP requests, here used for fetching the contents of the test.txt file.
3. Used recharts package, which is a charting library built on top of the D3.js library. It is used here for creating histogram.
4. Used Papa from the papaparse package, which is a powerful CSV parser and exporter. It's used here for exporting the histogram data as a CSV file.

## Components

It is containing two functions. 

1. fetchAndParseData: This function is responsible for fetching the content of the test.txt file, parsing it to calculate the word frequency, and updating the data state with the top 20 most frequent words.

2. exportCSV: This function is responsible for exporting the histogram data as a CSV file when the "Export" button is clicked.

Then the return part contains the following divs.

1. A div element serves as a wrapper for the entire component.
2. A div element with a className attribute set to "buttons-container" contains the Submit and Export buttons, along with their associated click event handlers. The Export button is only rendered if the data state is not null.
3. A div element with a className attribute set to "chart-container" wraps the BarChart component from the recharts package. This part is only rendered if the data state is not null. The BarChart component and its children are responsible for rendering the histogram based on the data state.


## Deployed Link
https://ttt-assignment.vercel.app/
