
export class EmptyIngredientError extends Error{
  constructor(name, message) {
    super(message)
    this.name = name
  }
}