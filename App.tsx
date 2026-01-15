import React from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet, useLocation, createMemoryHistory, Link } from '@tanstack/react-router';
import { Home as HomeIcon } from 'lucide-react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import MinistryDetail from './pages/MinistryDetail';
import Sermons from './pages/Sermons';
import SermonDetail from './pages/SermonDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Give from './pages/Give';
import Visit from './pages/Visit';
import Prayer from './pages/Prayer';
import Volunteer from './pages/Volunteer';
import Login from './pages/Login';
import Groups from './pages/Groups';
import Dashboard from './pages/Dashboard';
import Institutions from './pages/Institutions';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Weekly from './pages/Weekly';

// Scroll to top component using TanStack Location
const ScrollToTop = () => {
  const location = useLocation();
  React.useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      // Ignore errors in sandboxed environments where window access is restricted
    }
  }, [location.pathname]);
  return null;
};

// 404 Component
const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-[#fbfaf8]">
    <div className="text-[150px] leading-none font-serif text-church-gold/20 font-bold select-none">404</div>
    <h1 className="text-4xl md:text-5xl font-serif text-church-primary mb-6 -mt-10 relative z-10">Page Not Found</h1>
    <p className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed">
      It seems you have wandered off the path. But do not worry, all who are lost can be found.
    </p>
    <Link to="/" className="px-8 py-3 bg-church-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-church-gold hover:text-church-primary transition-colors inline-flex items-center gap-2 shadow-lg">
      <HomeIcon size={16} /> Return Home
    </Link>
  </div>
);

// Define Root Route
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <ScrollToTop />
      <Outlet />
    </Layout>
  ),
  notFoundComponent: NotFound,
});

// Define Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const weeklyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/weekly',
  component: Weekly,
});

const ministriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ministries',
  component: Ministries,
});

const ministryDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ministries/$ministryId',
  component: MinistryDetail,
});

const groupsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/groups',
  component: Groups,
});

const institutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/institutions',
  component: Institutions,
});

const articlesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stories',
  component: Articles,
});

const articleDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stories/$storyId',
  component: ArticleDetail,
});

const sermonsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sermons',
  component: Sermons,
});

const sermonDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sermons/$sermonId',
  component: SermonDetail,
});

const eventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/events',
  component: Events,
});

const eventDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/events/$eventId',
  component: EventDetail,
});

const giveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/give',
  component: Give,
});

// Functional feature routes
const visitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/visit',
  component: Visit,
});

const prayerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/prayer',
  component: Prayer,
});

const volunteerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/serve',
  component: Volunteer,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
});

// Create Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  weeklyRoute,
  ministriesRoute,
  ministryDetailRoute,
  groupsRoute,
  institutionsRoute,
  articlesRoute,
  articleDetailRoute,
  sermonsRoute,
  sermonDetailRoute,
  eventsRoute,
  eventDetailRoute,
  giveRoute,
  visitRoute,
  loginRoute,
  prayerRoute,
  volunteerRoute,
  dashboardRoute
]);

// Use memory history to completely avoid browser history API restrictions in sandboxed environments
const memoryHistory = createMemoryHistory({
  initialEntries: ['/'],
});

// Create Router
const router = createRouter({ 
  routeTree,
  history: memoryHistory,
  defaultPreload: false, // Disable preloading to avoid triggering security errors on link interactions
} as any);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;