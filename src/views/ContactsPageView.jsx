import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { ContactList } from '../components/Contacts/ContactList';
import { FindContact } from '../components/Contacts/FindContact';
import { Section } from '../components/Section/Section';
import { AiOutlineUserAdd } from 'react-icons/ai';

export default function ContactsPageView() {
  return (
    <Section>
      <FindContact title={'Find contact by name'} />
      <ContactList />
      <Link to="/create-contact">
        <Button className="button-add">
          <AiOutlineUserAdd size="25px" />
        </Button>
      </Link>
    </Section>
  );
}
