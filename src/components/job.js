import React from "react";
import {FormattedDate, FormattedNumberParts} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        <FormattedNumberParts value = {props.offer.salary}>
          {parts =><span>{parts.map(part => part.value)} million</span>} 
        </FormattedNumberParts>
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumberParts value = {props.offer.views}>
          {parts =><span>{parts.map(part => part.value)} </span>} 
        </FormattedNumberParts>
      </td>
    </tr>
  );
};

export default Job;
