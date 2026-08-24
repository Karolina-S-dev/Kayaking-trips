const reusableUpdateField = (setData) => {
  return (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
};

export { reusableUpdateField };
