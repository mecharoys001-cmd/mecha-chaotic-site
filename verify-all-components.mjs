import { chromium } from 'playwright';

async function verifyAllComponents() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  console.log('Loading site...');
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Check all major sections
  const results = await page.evaluate(() => {
    const sections = {
      navigation: document.querySelector('nav'),
      hero: document.querySelector('section:nth-of-type(1)'),
      about: document.querySelector('#About, section:nth-of-type(2)'),
      footer: document.querySelector('footer'),
    };
    
    const report = {};
    
    for (const [name, element] of Object.entries(sections)) {
      if (!element) {
        report[name] = { error: 'Not found' };
        continue;
      }
      
      const style = window.getComputedStyle(element);
      const hasInvisibleChildren = Array.from(element.querySelectorAll('*')).some(child => {
        const childStyle = window.getComputedStyle(child);
        return childStyle.opacity === '0' && !child.className.includes('opacity');
      });
      
      report[name] = {
        exists: true,
        opacity: style.opacity,
        display: style.display,
        visibility: style.visibility,
        hasInvisibleChildren,
        childCount: element.children.length,
      };
    }
    
    return report;
  });
  
  console.log('\n📊 Component Visibility Report:');
  console.log('================================\n');
  
  for (const [component, data] of Object.entries(results)) {
    console.log(`${component.toUpperCase()}:`);
    if (data.error) {
      console.log(`  ❌ ${data.error}`);
    } else {
      console.log(`  ✅ Exists: ${data.exists}`);
      console.log(`  ✅ Opacity: ${data.opacity}`);
      console.log(`  ✅ Display: ${data.display}`);
      console.log(`  ✅ Visibility: ${data.visibility}`);
      console.log(`  ${data.hasInvisibleChildren ? '⚠️' : '✅'} Has invisible children: ${data.hasInvisibleChildren}`);
      console.log(`  📦 Child elements: ${data.childCount}`);
    }
    console.log('');
  }
  
  // Scroll through page and take full screenshot
  console.log('Scrolling through entire page...');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  
  await page.screenshot({ 
    path: 'final-verification-full.png', 
    fullPage: true 
  });
  
  console.log('✅ Full page screenshot saved as final-verification-full.png\n');
  
  await browser.close();
}

verifyAllComponents().catch(console.error);
