import React from "react";
import Flagging from "./components/Flagging";

type UserStatusCardProps = {
  name: string;
  role: string;
  status: "active" | "inactive" | "warning";
};

const UserStatusCard: React.FC<UserStatusCardProps> = ({ name, role }) => {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white flex items-center justify-between">
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">MyWebsite</h1>
          <nav className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Flagging
        flagKey="SHOW_BANNER"
        newComponent={
          <section className="bg-indigo-600 text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to MyWebsite
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Build beautiful, fast, and modern websites with ease.
              </p>
              <a
                href="#features"
                className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Get Started
              </a>
            </div>
          </section>
        }
      />

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">
            Awesome Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Fast Performance"
              description="Optimized for speed and efficiency."
            />
            <FeatureCard
              title="Responsive Design"
              description="Looks great on any screen size."
            />
            <FeatureCard
              title="Easy to Use"
              description="Developer-friendly and well-documented."
            />
          </div>
        </div>
      </section>

      <Flagging
        flagKey="SHOW_USER_LIST"
        newComponent={
          <div className="max-w-md mx-auto mt-10 space-y-4">
            <UserStatusCard name="Alice Kim" role="Admin" status="active" />
            <UserStatusCard name="Bob Lee" role="Editor" status="inactive" />
            <UserStatusCard
              name="Charlie Park"
              role="Reviewer"
              status="warning"
            />
          </div>
        }
      />

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            We are passionate developers who love building amazing tools and
            sharing them with the world.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-left">
    <h4 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;
