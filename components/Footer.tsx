import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-theme-card mt-12 py-8 border-t border-theme-bg">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-white text-2xl font-semibold mb-6">Follow Us</h2>
        <div className="flex space-x-6 mb-6">
          <Link href="https://www.facebook.com/profile.php?id=61573654779653" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook.png" alt="Facebook" width={48} height={48} className="hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://wa.link/n5cbbq" target="_blank" rel="noopener noreferrer">
            <Image src="/whatsapp.png" alt="WhatsApp" width={48} height={48} className="hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://www.youtube.com/@Topupsewa" target="_blank" rel="noopener noreferrer">
            <Image src="/youtube.png" alt="YouTube" width={48} height={48} className="hover:scale-110 transition-transform duration-200" />
          </Link>
        </div>
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Gaming Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
