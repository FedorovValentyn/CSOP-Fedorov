import { Category, Worker } from './types';

/**
 * Клас для валідації даних з статичними методами
 */
export class ValidationHelper {
  /**
   * Перевіряє чи є рядок валідним та не порожнім
   */
  public static isValidString(value: unknown): value is string {
    return typeof value === 'string' && value.trim().length > 0;
  }

  /**
   * Перевіряє чи є число валідним та позитивним
   */
  public static isValidPositiveNumber(value: unknown): value is number {
    return typeof value === 'number' && value > 0 && !isNaN(value);
  }

  /**
   * Перевіряє чи є число валідним ID
   */
  public static isValidId(value: unknown): value is number {
    return typeof value === 'number' && Number.isInteger(value) && value > 0;
  }

  /**
   * Перевіряє чи є значення валідною категорією
   */
  public static isValidCategory(value: unknown): value is Category {
    return typeof value === 'string' && Object.values(Category).includes(value as Category);
  }

  /**
   * Перевіряє чи є об'єкт валідним робітником
   */
  public static isValidWorker(worker: unknown): worker is Worker {
    if (typeof worker !== 'object' || worker === null) {
      return false;
    }

    const w = worker as Partial<Worker>;
    
    return (
      this.isValidId(w.id) &&
      this.isValidString(w.name) &&
      this.isValidString(w.surname) &&
      typeof w.available === 'boolean' &&
      this.isValidCategory(w.category) &&
      this.isValidPositiveNumber(w.salary)
    );
  }

  /**
   * Перевіряє чи є масив валідним масивом чисел
   */
  public static isValidNumberArray(value: unknown): value is number[] {
    return Array.isArray(value) && value.every(item => this.isValidId(item));
  }
}