//janine pfaff ReiseZielSeite.js und css

import React from "react";
import ReiseZiel from "../ReiseZiel/ReiseZiel";
import "./ReiseZielSeite.css";

//hier werden die Reise-artikel gemapt und an das ReiseZiel-Component gereicht, falls keine vorhanden sind, wird angezeigt, dass es keine artikel gibt => kein Reiseziel für die Suchanfrage
function ReiseZielSeite({ artikel }) {
    let length = artikel.length;
    if (length > 0) {
        return (
            <ul className="ItemPage-artikel">
                {artikel.map((item) => (
                    <li key={item.id} className="ItemPage-item">
                        <ReiseZiel item={item}></ReiseZiel>
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <ul className="ItemPage-artikel">
                <label>
                    <h5>
                        Es gibt derzeit keine Reisen, die auf ihre Suchanfrage zutreffen.
                    </h5>
                </label>
            </ul>
        );
    }
}
ReiseZielSeite.propTypes = {
    artikel: React.PropTypes.array.isRequired,
};

export default ReiseZielSeite;