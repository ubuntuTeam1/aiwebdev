export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold">Highland Medical Center</h3>
          <p className="text-sm text-gray-400 mt-2">
            Excellence in Healthcare, Committed to Your Well-being
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Contact Us</h3>
          <p className="text-sm text-gray-400 mt-2">+1 (555) 123-4567</p>
          <p className="text-sm text-gray-400">info@highlandmed.com</p>
          <p className="text-sm text-gray-400">
            123 Medical Center Dr, Highland, CA
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        © 2025 Highland Medical Center. All rights reserved.
      </p>
    </footer>
  );
}
