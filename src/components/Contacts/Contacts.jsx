import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ telBook, deleteItem, search }) => {
  if (search === '') {
    return (
      <div className={css.list}>
        {telBook.map(el => (
          <Contact telBook={el} key={el.id} deleteItem={deleteItem} />
        ))}
      </div>
    );
  }
  return (
    <div className={css.list}>
      {telBook.map(el =>
        el.name.toLowerCase().includes(search.toLowerCase()) ? (
          <Contact telBook={el} key={el.id} deleteItem={deleteItem} />
        ) : null
      )}
    </div>
  );
};

Contacts.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  telBook: PropTypes.array.isRequired,
  search: PropTypes.string,
};

export default Contacts;
