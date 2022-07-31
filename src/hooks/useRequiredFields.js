const useRequiredFields = (name, email, phone) => {
  if (!name.value) {
    name.filled = false;
  }
  if (!email.value) {
    email.filled = false;
  }
  if (phone.value.length !== 18) {
    phone.filled = false;
  }
  setTimeout(() => {
    [name, email, phone].forEach(v=> v.filled = true);
  }, 3000);
  return name.value && email.value && phone.value.length === 18;
}

export default useRequiredFields;