'use server'

import { cookies } from 'next/headers';

const setCookies = async(name: string, value: number) => {
  (await cookies()).set(name, value.toString(), { 
    httpOnly: true,
    path: '/'
  });
}

const deleteCookies = async(name: string) => {
  (await cookies()).delete(name);
}

const getCookies = async(name: string) => {
  return (await cookies()).get(name)?.value || '0';
}

export  const getScore = async() => {
  return await getCookies('score');
};

export  const getLevel = async() => {
  return +await getCookies('level');
};

export const setScore = async(value: number) => {
  await setCookies('score', value);
};

export const setLevel = async(value: number) => {
  await setCookies('level', value);
};

export async function cleanScore() {
  await deleteCookies('score');
};

export async function cleanLevel() {
  await deleteCookies('level');
};
