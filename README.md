# 🏡 The Wild Oasis

A modern, full-featured luxury cabin booking platform built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Features user authentication, real-time reservations, and a seamless booking experience.

**[🔗 Live Demo](https://the-wild-oasis-demo-ashen.vercel.app/)**

---

## 📸 Screenshots

> Add project screenshots here

**Homepage**
```
[Screenshot Placeholder - Landing page with hero image and CTA]
```

**Cabins Browsing**
```
[Screenshot Placeholder - Cabin listings with filtering options]
```

**Cabin Details & Booking**
```
[Screenshot Placeholder - Detailed cabin view with booking form]
```

**User Dashboard**
```
[Screenshot Placeholder - Account dashboard with reservations]
```

---

## ✨ Key Features

- **User Authentication** - Secure login/signup with NextAuth.js integration
- **Cabin Browsing** - Browse luxury cabins with advanced filtering by capacity
- **Booking System** - Create and manage reservations with date selection
- **User Dashboard** - View, edit, and cancel your reservations
- **Profile Management** - Update user information and preferences
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Optimized Performance** - Server-side rendering, image optimization, and lazy loading
- **Real-time Updates** - Live reservation status and availability

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **@heroicons/react** - Beautiful SVG icons

### Backend & Database
- **Supabase** - PostgreSQL database & real-time API
- **NextAuth.js** - Authentication & session management

### Utilities
- **date-fns** - Modern date utility library
- **react-day-picker** - Accessible date picker component

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/the-wild-oasis.git
cd the-wild-oasis
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📁 Project Structure

```
the-wild-oasis/
├── app/
│   ├── _components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── CabinCard.tsx
│   │   ├── ReservationForm.tsx
│   │   ├── DateSelector.tsx
│   │   └── ...
│   ├── _lib/                 # Utility functions & libraries
│   │   ├── auth.ts           # NextAuth configuration
│   │   └── supabase.ts       # Supabase client setup
│   ├── _styles/              # Global styles
│   ├── api/                  # API routes
│   │   └── auth/[...nextauth]/
│   ├── account/              # Account & dashboard pages
│   ├── cabins/               # Cabin listing & detail pages
│   ├── login/                # Authentication pages
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── public/                   # Static assets (images, logos)
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

---

## 🎯 Core Features Breakdown

### 1. **Authentication System**
- Secure user login/signup with NextAuth.js
- Session management and authorization
- Protected routes and API endpoints

### 2. **Cabin Management**
- Dynamic cabin listing with real-time data from Supabase
- Advanced filtering by capacity (small, medium, large)
- Individual cabin detail pages with high-resolution images

### 3. **Reservation System**
- Interactive date picker for booking periods
- Availability checking
- Create, view, edit, and cancel reservations
- Reservation confirmation and reminders

### 4. **User Profile**
- View and edit personal information
- Country selection with autocomplete
- Reservation history dashboard
- User-specific data management

---

## 💻 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## 🔐 Environment Variables

You'll need to set up the following environment variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |
| `NEXTAUTH_SECRET` | Secret key for NextAuth.js encryption |
| `NEXTAUTH_URL` | The URL where your app runs (localhost for dev) |

---

## 🚢 Deployment

This project is deployed on **Vercel** and automatically updates with each push to the main branch.

### Deploy Your Own

1. Push your repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

For detailed deployment instructions, see [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

---

## 🎨 Styling & Design

- **Custom Tailwind Theme** - Luxury-focused color palette with primary and accent colors
- **Responsive Grid Layout** - Mobile-first responsive design
- **Loading States** - Smooth loading indicators and transitions
- **Error Boundaries** - Graceful error handling with user-friendly messages
- **Modern Typography** - Josefin Sans Google Font for elegant appearance

---

## 🔄 State Management

- **React Context API** - `ReservationContext` for global reservation state
- **Server-Side Rendering** - Leveraging Next.js App Router for optimal performance
- **Client Components** - Minimal hydration for faster page loads

---

## 📝 Learning Outcomes

This project demonstrates:
- ✅ Full-stack development with Next.js
- ✅ TypeScript for type-safe code
- ✅ Modern React patterns (Server Components, Context API)
- ✅ Authentication and authorization flows
- ✅ Database integration with Supabase
- ✅ Responsive UI/UX design
- ✅ Production-ready code practices
- ✅ Performance optimization

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests with improvements.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙋 Support

If you have any questions or suggestions, feel free to reach out or open an issue on GitHub.

---

**Built with ❤️ by Hamid Hassani**

[Portfolio](https://yourportfolio.com) | [LinkedIn](https://www.linkedin.com/in/hamid-hassani-a431b0244)
