import { ContactList } from '../components/Contacts/ContactList';
import { FindContact } from '../components/Contacts/FindContact';

export default function ContactsPageView() {
  return (
    <>
      <FindContact title={'Find contact by name'} />
      <ContactList />
    </>
  );
}
