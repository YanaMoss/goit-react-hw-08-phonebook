import { ContactList } from '../components/Contacts/ContactList';
import { FindContact } from '../components/Contacts/FindContact';
import AddContact from '../components/AddContact/AddContact';

export default function ContactsPageView() {
  return (
    <>
      <FindContact title={'Find contact by name'} />
      <ContactList />
      <AddContact />
    </>
  );
}
