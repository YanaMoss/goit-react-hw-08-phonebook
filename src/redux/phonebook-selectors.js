export const getListContact = (data, state) => {
  const getfilter = state.filter;
  const normalizedFilter = getfilter.toLowerCase();

  return data
    ? data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    : [];
};
