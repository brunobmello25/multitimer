import type React from 'react';

export function secondsToReadableTime(value: number): string {
  let readable = '';

  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value - hours * 3600) / 60);
  const seconds = value - hours * 3600 - minutes * 60;

  if (hours > 0) {
    readable += String(hours).padStart(2, '0') + ':';
  }

  readable += String(minutes).padStart(2, '0') + ':';

  readable += String(seconds).padStart(2, '0');

  return readable;
}

export function readableTimeToSeconds(readable: string): number {
  const splitted = readable.split(':');

  if (splitted.length === 3) {
    return (
      Number(splitted[0]) * 3600 +
      Number(splitted[1]) * 60 +
      Number(splitted[2])
    );
  }

  if (splitted.length === 2) {
    return Number(splitted[0]) * 60 + Number(splitted[1]);
  }

  return Number(splitted[0]);
}
