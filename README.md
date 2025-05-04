# PriceRadar

PriceRadar is a modern, full-stack Amazon price tracker built with Next.js 15, MongoDB, and Tailwind CSS. It continuously scrapes product pages, tracks price history, and notifies users via email when prices drop, stock changes, or custom thresholds are met.

## Screenshots

### 🏠 Homepage

![Homepage](/screenshots/homepage.png)

### 📦 Products Page

![Products Page](/screenshots/productpage.png)

### 🧭 Similar Products Section

![Similar Products](/screenshots/Similarproducts.png)

## 🚀 Features

- Real-time Amazon product scraping using Cheerio
- Scheduled price checks via Vercel Cron Jobs or cron-job.org
- Persistent price history and analytics in MongoDB
- Email notifications for price drops and restocks
- User subscriptions to specific product alerts
- Responsive, modern UI built with Tailwind CSS

## 🛠 Tech Stack

- **Framework:** Next.js 15
- **Database:** MongoDB + Mongoose
- **Scraping:** Axios + Cheerio
- **Styling:** Tailwind CSS + Headless UI
- **Notifications:** Nodemailer + Gmail App Passwords
- **Deployment:** Vercel + Vercel Cron Jobs
- **Email Templates:** Custom dynamic email HTML

## ⚙️ Installation

```bash
git clone https://github.com/Shravan250/PriceRadar.git
cd PriceRadar
npm install
```

## 🧪 Run Locally

```bash
npm run dev
```

Go to: http://localhost:3000

## Setup .env.local

```bash
BRIGHT_DATA_USERNAME=<your_bright_data_username>
BRIGHT_DATA_PASSWORD=<your_bright_data_password>
MONGODB_URI=<your_mongodb_connection_string>
EMAIL_PASSWORD=<your_gmail_app_password>
```

## 📤 Deployment

Push to GitHub and deploy using **[Vercel](https://vercel.com/)**.  
Add your environment variables in Vercel's dashboard under **Project Settings → Environment Variables**.

---

## 🤝 Contributing

We welcome contributions with open arms!

1. **Fork** the repository
2. **Create your feature branch**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit** your changes
4. **Push** to your branch and **open a pull request**

---

## 🪪 License

This project is licensed under the **MIT License**.

---

Built by [Shravan250](https://github.com/Shravan250)
