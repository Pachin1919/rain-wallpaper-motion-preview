import { createFileRoute, Outlet } from '@tanstack/react-router';
export const Route = createFileRoute('/stays')({ component: () => <Outlet/> });
