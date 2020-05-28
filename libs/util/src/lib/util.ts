import { v1 as uuidv1 } from 'uuid';

export function util(): string {
  return 'util';
}

export function generateUUID() {
  return uuidv1();
}
