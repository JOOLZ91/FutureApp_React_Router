import React from "react";
import "../styles/Homepage.css";

const HomePage = () => {
  return (
    <div>
      <div className="head">
        <p className="head">Future</p>
      </div>
      <p className="main">
        Make your tax reporting easier in 2020!
        <span className="futurespan">FUTURE</span> is an all-inclusive app for
        tracking and reporting Expenses, Mileage and Time. Its' power extends
        from your phone by allowing emailing and exporting of your expense files
        and accompanying photo receipts directly to your desktop or DropBox.
        Customizable, comprehensive and powerful! Recent update includes iCloud
        support, file linking capability and greater mileage tracking among
        other customer requested features.
      </p>
      <ul className="features">
        Features include:
        <li>
          ✔ Records all of your expenses and provides a running total for each
          business trip you take
        </li>
        <li>✔ Completely customizable categories and payment types</li>
        <li>
          ✔ Sort expenses by "Date" , "Category", "Payment Type" or "Client."
          Sort can be ascending/descending
        </li>
        <li>
          ✔ Time tracking capability with additional ability to set date when
          entering total hours for time entry
        </li>
        <li>
          ✔ Create and manage sub-categories via any easy to use interface
        </li>
        <li>✔ Mark a log as "reimbursed" or "submitted" </li>
        <li>
          ✔ For each category, the last payment type is remembered further
          simplifying data entry
        </li>
        <li>
          ✔ Keeps a frequently used list for appropriate fields like description
          and presents those when entering
        </li>
        <li>
          ✔ Supports ALL major currencies throughout the world so each expense
          can be entered with the appropriate currency. Save your most
          frequently used currencies in a favorites list to make selecting easy
        </li>
        <li>
          ✔ Downloads daily exchange rates from the web. Will even do exchange
          rate calculations
        </li>
        <li>✔ Ability to set a default currency for the application </li>
        <li>✔ Extensive support for VAT/GST</li>
      </ul>
    </div>
  );
};
export default HomePage;
