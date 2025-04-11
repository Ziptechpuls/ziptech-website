import { Metadata } from 'next';
import HomePage from '@/components/pages/home';

export const metadata: Metadata = {
  title: 'Ziptech⁺ - Web Development Company',
  description: 'Professional web development services for modern businesses',
};

export default function Page() {
  return <HomePage />;
}