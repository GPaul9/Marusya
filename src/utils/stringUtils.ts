import { string } from "zod";

export const capitalizeWords = (str: string): string => {
  return str
    .trim()
    .split(' ')
    .map(word => word ? word[0].toUpperCase() + word.slice(1) : '')
    .join(' ');
};

export const getInitials = (str: string): string => {
  return str
    .trim()
    .split(' ')
    .map(word => word[0]?.toUpperCase() ?? '')
    .join('');
}

export const runTimeMovieFormat = (minutes: number): string => {
  if (minutes <= 0 && minutes == undefined ) return '0 мин';

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours} ч ${mins} мин`;
  } else if (hours > 0) {
    return `${hours} ч`;
  } else {
    return `${mins} мин`;
  }
}

export const formatRub = (value: number | string): string => {
  const num = typeof value === 'string' ? Number(value) : value;
  return new Intl.NumberFormat('ru-RU').format(num) + ' руб.';
};
