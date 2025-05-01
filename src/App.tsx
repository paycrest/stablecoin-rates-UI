import Header from "./components/Header";
import Footer from "./components/Footer";
import CurrencyConverter from "./layout/currencyConverter/CurrencyConverter";
import HeroSection from "./layout/HeroSection";
import EndpointInteraction from "./components/EndpointInteraction";
import { EndpointInteractionProps } from "./types/endpointinteraction";

function App() {
  const loginEndpoint: EndpointInteractionProps = {
    title: "User Login",
    description: "Authenticate a user and return a JWT token upon success.",
    endPoint: "/api/auth/login",
    method: "POST",
    example: "/api/auth/login",
    successData: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      user: {
        id: 1,
        name: "John Doe",
        email: "user@example.com",
      },
    },
    errorData: {
      message: "Invalid email or password",
      statusCode: 401,
    },
  };
  return (
    <div className="bg-background min-h-screen flex flex-col relative pb-32">
      <Header />
      <HeroSection />
      <CurrencyConverter />

      <div className="w-full lg:w-[50%] py-0 px-5 mx-auto">
        <EndpointInteraction {...loginEndpoint} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
