# Apoorva R K - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful gradients and smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Functional contact form with EmailJS integration
- **Profile Section**: Personal information and skills showcase
- **Portfolio Gallery**: Project showcase with filtering

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/apoorvark123/portfolio.git
cd portfolio
```

### 2. Contact Form Setup (Important!)

The contact form uses **EmailJS** to send emails. To make it work, you need to:

#### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account

#### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Add your email service (Gmail, Outlook, etc.)
3. Follow the instructions to connect your email

#### Step 3: Create Email Template
1. Go to "Email Templates"
2. Create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (apoorvark123@gmail.com)

Sample template:
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

#### Step 4: Get Your Credentials
1. Go to "Integration" in EmailJS
2. Copy your **Public Key**
3. Note your **Service ID** and **Template ID**

#### Step 5: Update JavaScript
Open `script.js` and replace these placeholders:
```javascript
// Replace with your actual credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { // Replace with your service and template IDs
```

### 3. Local Development
```bash
# Start local server
python -m http.server 8000
# or
npx serve -s . -p 8000
```

### 4. Deployment
You can deploy this to:
- **GitHub Pages** (Free)
- **Netlify** (Free)
- **Vercel** (Free)
- Any hosting service

## File Structure

```
portfolio/
|-- index.html          # Main HTML file
|-- styles.css          # Styles and animations
|-- script.js           # Interactive functionality
|-- profile.jpg.jpeg    # Profile photo
|-- README.md           # This file
```

## Customization

### Colors
The website uses CSS custom properties. Update these in `styles.css`:
```css
:root {
    --primary-color: #00ddff;
    --secondary-color: #ff00d4;
    /* etc... */
}
```

### Content
- Update personal information in `index.html`
- Replace `profile.jpg.jpeg` with your photo
- Update projects in the portfolio section
- Modify skills and services as needed

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: apoorvark123@gmail.com
- **Phone**: +91 8904255965
- **LinkedIn**: [Apoorva R K](https://www.linkedin.com/in/apoorva-r-k-769a12356)

---

**Note**: The contact form will only work after completing the EmailJS setup steps above.
