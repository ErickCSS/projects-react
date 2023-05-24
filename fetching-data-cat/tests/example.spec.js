// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'http://localhost:5173/'
const URL_IMAGE = 'https://cataas.com'

test('App to show random facts and images', async ({ page }) => {
  await page.goto(URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc).toContain(URL_IMAGE)
})
