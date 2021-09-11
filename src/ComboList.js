import { Link } from 'react-router-dom';

const ComboList = ({ combos }) => {

  combos.sort(function(a, b){return a.tricks.length - b.tricks.length});

  let previousComboLength = 0;

  return (
    <div className="combo-list">
      {combos.map(combo => {
        let isFirstOfCategory = false;

        if (combo.tricks.length === previousComboLength) {
          isFirstOfCategory = false;
        } else {
          isFirstOfCategory = true;
        }

        previousComboLength = combo.tricks.length;

        return (
          <div>
            { isFirstOfCategory && <div>{combo.tricks.length} Trick Combos</div> }
              <Link className="link-to-combo" to={`/combos/${combo.id}`}>
                <button className="btn btn-outline-primary" key={combo.id}>{ combo.name }</button>
              </Link>
          </div>
        );

      })}
    </div>
  );
}
 
export default ComboList;
