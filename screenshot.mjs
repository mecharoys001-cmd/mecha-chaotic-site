import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  
  // Screenshot original site
  console.log('Capturing original site...');
  const page1 = await context.newPage();
  await page1.goto('https://www.mechachaotic.com/', { waitUntil: 'networkidle' });
  await page1.screenshot({ path: 'original-full.png', fullPage: true });
  await page1.screenshot({ path: 'original-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('✅ Original screenshots saved');
  
  // Screenshot rebuilt site
  console.log('Capturing rebuilt site...');
  const page2 = await context.newPage();
  await page2.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  
  // Wait for images to load (Next.js Image component lazy loading)
  await page2.waitForTimeout(3000);
  
  // Scroll to trigger any lazy-loaded images
  await page2.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page2.waitForTimeout(2000);
  await page2.evaluate(() => window.scrollTo(0, 0));
  await page2.waitForTimeout(1000);
  
  await page2.screenshot({ path: 'rebuilt-full.png', fullPage: true });
  await page2.screenshot({ path: 'rebuilt-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('✅ Rebuilt screenshots saved');
  
  await browser.close();
  console.log('\n📸 All screenshots captured!');
  console.log('- original-full.png (full page)');
  console.log('- original-hero.png (hero section)');
  console.log('- rebuilt-full.png (full page)');
  console.log('- rebuilt-hero.png (hero section)');
}

takeScreenshots().catch(console.error);
