import { chromium } from 'playwright';

async function verifyFooter() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  console.log('Loading site...');
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  
  // Wait for page to load
  await page.waitForTimeout(2000);
  
  // Scroll to footer
  console.log('Scrolling to footer...');
  await page.evaluate(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  });
  await page.waitForTimeout(2000);
  
  // Check footer visibility
  const footerVisible = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    if (!footer) return { error: 'Footer not found' };
    
    const style = window.getComputedStyle(footer);
    const firstChild = footer.querySelector('.text-center');
    const childStyle = firstChild ? window.getComputedStyle(firstChild) : null;
    
    return {
      footerExists: true,
      footerOpacity: style.opacity,
      footerDisplay: style.display,
      footerVisibility: style.visibility,
      childOpacity: childStyle ? childStyle.opacity : 'N/A',
      childTransform: childStyle ? childStyle.transform : 'N/A',
      footerText: footer.textContent?.substring(0, 200),
    };
  });
  
  console.log('\n🔍 Footer Inspection Results:');
  console.log(JSON.stringify(footerVisible, null, 2));
  
  // Take a screenshot of just the footer area
  await page.screenshot({ 
    path: 'footer-verification.png', 
    fullPage: false 
  });
  
  console.log('\n✅ Footer screenshot saved as footer-verification.png');
  
  await browser.close();
}

verifyFooter().catch(console.error);
