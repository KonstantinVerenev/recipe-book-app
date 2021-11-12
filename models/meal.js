class Meal {
  constructor(
    id, categoryIds, title, affordability,
    complexity, imageUrl, duration,
    ingridients, steps, isGlutenFree,
    isVegan, isVegeterian, isLastoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingridients = ingridients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegeterian = isVegeterian;
    this.isLastoseFree = isLastoseFree;
  }
}

export default Meal;