import { test, expect } from '@playwright/test';

// Broad coverage over deep coverage: this is a static portfolio, so the
// goal is to catch "page is broken/blank/500s" regressions, not to
// exhaustively test every interaction.

const pages = [
  { path: '/', heading: 'I cut release cycles from days to under an hour.' },
  { path: '/about', heading: 'I build backend systems that are reliable, scalable, and production-ready.' },
  { path: '/experience', heading: 'Professional Journey' },
  { path: '/projects', heading: 'Selected Work' },
  { path: '/contact', heading: "Let’s build something meaningful." },
  { path: '/blog', heading: 'Writing' },
  { path: '/blog/pulsecheck', heading: 'Building PulseCheck: a dead-man’s-switch monitor for cron jobs' },
];

for (const { path, heading } of pages) {
  test(`${path} renders its heading and has no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error' && !msg.text().includes('legacyBehavior')) {
        errors.push(msg.text());
      }
    });

    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(heading);
    expect(errors, `console/page errors on ${path}`).toEqual([]);
  });
}

test('nav links reach every page', async ({ page }) => {
  await page.goto('/');
  for (const label of ['About', 'Experience', 'Projects', 'Blog', 'Contact']) {
    await page.getByRole('link', { name: label, exact: true }).first().click();
    await expect(page).toHaveURL(new RegExp(`/${label.toLowerCase()}$`));
  }
});

test('theme toggle switches between light and dark', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  const before = await html.getAttribute('class');
  await page.getByRole('button', { name: /switch to (dark|light) theme/i }).click();
  await expect(html).not.toHaveClass(before ?? '');
});

test('unknown route shows the 404 page', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('404');
});

test('Contact page primary CTA points to LinkedIn', async ({ page }) => {
  await page.goto('/contact');
  const cta = page.getByRole('link', { name: /DM me on LinkedIn/i });
  await expect(cta).toHaveAttribute('href', /linkedin\.com\/in\/programmer-shivam/);
});
