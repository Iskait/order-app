const useClear = (...args) => {
  args.forEach(item=>item.value.value='');
}

export default useClear;