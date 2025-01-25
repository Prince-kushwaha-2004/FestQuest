const HandleChange = (e, setForm) => {
  const { name, value } = e.target;
  setForm((prvState) => ({ ...prvState, [name]: value }))

}

export default HandleChange