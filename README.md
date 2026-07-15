# Kharcha Tracker — Practice Project (Refactor Karne Waala)

Ye ek **Personal Expense Tracker** hai — real-life problem: log apna daily/monthly
kharcha track nahi kar pate. 4 pages hain: Home (dashboard), Add Kharcha, History, About.

Is code me **jaan bujh kar messy patterns** dale gaye hain, taake aap practice karke
inhe theek karein aur apni HTML/CSS skills strong karein. Neeche har issue explain hai.

## Folder Structure
```
kharcha-tracker/
  index.html
  pages/
    add-expense.html
    history.html
    about.html
  css/
    style.css
    header.css
    buttons.css
    cards.css
  images/
```

## Issues Jo Aapko Fix Karni Hain

### 1. Inline styles har jagah (sab se bada issue)
Har HTML file me `style="..."` inline attributes hain jabke wahi styling CSS files
me already exist karti hai. **Task:** saari inline styles hataayein, sirf class names
use karein.

### 2. Duplicate card classes (cards.css)
`.summary-card`, `.summary-card2`, aur `.card-summary-3` teeno **exactly same** hain,
sirf naam alag hai. **Task:** inhe ek hi class `.summary-card` me merge karein aur
HTML me update karein.

### 3. Duplicate button classes (buttons.css)
`.btn-primary` aur `.btn1` almost same kaam karte hain, sirf color/naming different
hai. **Task:** ek consistent naming convention banayein (e.g. `.btn`, `.btn--primary`,
`.btn--secondary`, `.btn--danger`).

### 4. footer-box do jagah define hai (style.css aur header.css)
Aur dono me **color values different** hain (`#2c3e50` vs `#34495e`) — ye bug hai,
kabhi bhi ye pata nahi chalega konsi value apply hogi (depends on CSS load order).
**Task:** ek hi jagah define karein.

### 5. Hardcoded colors bar bar repeat ho rahe hain
`#2c3e50` jaisi values 10+ jagah likhi gayi hain. **Task:** CSS Variables (`:root`)
use karein:
```css
:root {
  --color-primary: #2c3e50;
  --color-danger: #e74c3c;
  --color-success: #27ae60;
  --color-bg-light: #ecf0f1;
}
```

### 6. `!important` ka overuse (buttons.css)
Bina wajah `!important` lagaya gaya hai jo specificity issues chupata hai.
**Task:** inhe hataayein, proper selector specificity se kaam chalayein.

### 7. Inconsistent class naming
`.input-group` vs `.input-group2`, `.summary-card` vs `.card-summary-3` — naming
pattern follow nahi ho raha. **Task:** BEM ya kisi bhi consistent convention pe
switch karein.

### 8. Missing semantic HTML
Sab kuch `<div>` se bana hai — `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
use nahi hue. **Task:** semantic tags use karein, accessibility better hogi.

### 9. Form inputs bina `<label>` ke
`add-expense.html` me inputs ke labels sirf plain text hain, `<label for="">`
associate nahi hai. **Task:** proper `<label>` tags add karein.

### 10. Repeated header/footer HTML in every page
Har page me same header/footer copy-paste hua hai. Plain HTML/CSS me ise avoid
karna mushkil hai, lekin jab JS add karenge to isay ek reusable component bana
sakte hain (ya baad me React/templating seekh kar).

## Aage JavaScript Kya Add Karni Hai (jab CSS/HTML clean ho jaye)
1. Add Kharcha form submit → `localStorage` me save karna
2. History table ko `localStorage` se dynamically populate karna
3. Delete button se entry remove karna
4. Dashboard ke "Total Kharcha", "This Month", "Total Entries" cards ko
   live calculate karna
5. Category filter buttons (History page) ko functional banana
6. Form validation (amount empty na ho, date select ho)

## Suggested Order
1. Pehle inline styles hataayein (#1)
2. CSS variables banayein (#5)
3. Duplicate classes merge karein (#2, #3, #4)
4. `!important` hataayein (#6)
5. Naming convention fix karein (#7)
6. Semantic HTML + labels (#8, #9)
7. Phir JavaScript shuru karein
