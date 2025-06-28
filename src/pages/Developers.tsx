import { EndpointInteraction } from "@/components/EndpointInteraction";
import { HeaderDeveloper } from "@/layout/HeaderDeveloper";

const Developers = () => {
  return (
    <div>
      <HeaderDeveloper />
      <EndpointInteraction
        title="Fetch 1:1 rate"
        description="Fetching stablecoins for 1 local currency"
        endpoint="/rates/:stablecoin/:fiat"
        method="GET"
        example="rates/usdt/ngn"
        params={{
          stablecoin: "",
          fiat: "",
        }}
      />

      <EndpointInteraction
        title="Fetch 1:n rates"
        description="Fetching all currency rates per stablecoins"
        endpoint="/rates/:stablecoin"
        method="GET"
        example="rates/usdt"
        params={{
          stablecoin: "",
        }}
      />
    </div>
  );
};

export default Developers;
