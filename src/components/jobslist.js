import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Job from "./job";

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 2300
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 400
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 350
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="Position"></FormattedMessage></th>
            <th scope="col"><FormattedMessage id="Company"></FormattedMessage></th>
            <th scope="col"><FormattedMessage id="Salary"></FormattedMessage></th>
            <th scope="col"><FormattedMessage id="City"></FormattedMessage></th>
            <th scope="col"><FormattedMessage id="PublicationDate"></FormattedMessage></th>
            <th scope="col"><FormattedMessage id="Views"></FormattedMessage></th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default JobsList;
