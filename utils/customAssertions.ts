import { expect, APIResponse } from '@playwright/test';

export async function assertStatusCode(response: APIResponse, expected: number) {
  expect(response.status()).toBe(expected);
}

export async function assertResponseHasField(response: APIResponse, field: string) {
  const body = await response.json();
  expect(body).toHaveProperty(field);
}

export async function assertResponseTime(startTime: number, maxMs: number = 3000) {
  const elapsed = Date.now() - startTime;
  expect(elapsed).toBeLessThan(maxMs);
}