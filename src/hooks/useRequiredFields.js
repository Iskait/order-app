const useRequiredFields = (name, email, phone) => {
  if (!name.value.value) {
    name.value.filled = false;
  }
  if (!email.value.value) {
    email.value.filled = false;
  }
  if (phone.value.value.length !== 18) {
    phone.value.filled = false;
  }
  setTimeout(() => {
    [name, email, phone].forEach(v=> v.value.filled = true);
  }, 3000);
  return name.value.value && email.value.value && phone.value.value.length === 18;
}

export default useRequiredFields;