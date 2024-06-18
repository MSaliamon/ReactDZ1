const handleActivate = (animals, index, setAnimals) => {
    const newAnimals = animals.map((animal, i) => {
      if (i === index) {
        return {
          ...animal,
          active: !animal.active,
        };
      }
      return animal;
    });
    setAnimals(newAnimals);
  };
  
  const handleDelete = (animals, index, setAnimals) => {
    const newAnimals = animals.filter((_, i) => i !== index);
    setAnimals(newAnimals);
  };
  
  export { handleActivate, handleDelete };
  