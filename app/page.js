import { redirect } from 'next/navigation';

export default function Home() {
  // Chuyển hướng đến "/en"
  redirect('/en/');
  return null;
}
